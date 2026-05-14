import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import { db } from '@/lib/db';
import { defaultLocale, isValidLocale } from '@/i18n/config';

const contactRateLimitMap = new Map<string, { count: number; resetTime: number }>();
const CONTACT_RATE_LIMIT = 30;
const CONTACT_WINDOW_MS = 60000;
const CONTACT_RATE_LIMIT_MAX_KEYS = 10000;
const CONTACT_MAX_BODY_BYTES = 16 * 1024;

function getClientIp(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip')?.trim() ||
    'unknown';
}

function isRequestBodyTooLarge(request: NextRequest, maxBytes: number): boolean {
  const contentLength = request.headers.get('content-length');
  if (!contentLength) return false;

  const parsedContentLength = Number(contentLength);
  return Number.isFinite(parsedContentLength) && parsedContentLength > maxBytes;
}

function pruneContactRateLimitMap(now: number): void {
  if (contactRateLimitMap.size < CONTACT_RATE_LIMIT_MAX_KEYS) return;

  for (const [key, record] of contactRateLimitMap) {
    if (now > record.resetTime) {
      contactRateLimitMap.delete(key);
    }
  }
}

function checkContactRateLimit(ip: string): boolean {
  const now = Date.now();
  // TODO: Replace this best-effort in-memory limiter with Redis, Vercel KV, or Upstash before multi-instance production deployment.
  pruneContactRateLimitMap(now);
  const record = contactRateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    contactRateLimitMap.set(ip, { count: 1, resetTime: now + CONTACT_WINDOW_MS });
    return true;
  }

  if (record.count >= CONTACT_RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

interface ContactSuccessResponse {
  success: boolean;
  message: string;
}

interface ContactErrorResponse {
  error: string;
}

const noHeaderInjection = /^[^\r\n]*$/;

const contactFormSchema = z.object({
  name: z.string().trim().min(1, 'Name is required.').max(100, 'Name must be 100 characters or fewer.').regex(noHeaderInjection, 'Name contains invalid characters.'),
  email: z.string().trim().max(254, 'Email must be 254 characters or fewer.').email('Invalid email address.').regex(noHeaderInjection, 'Email contains invalid characters.'),
  phone: z.preprocess(
    (value) => value == null ? '' : value,
    z.string().trim().max(40, 'Phone must be 40 characters or fewer.').regex(noHeaderInjection, 'Phone contains invalid characters.')
  ),
  subject: z.string().trim().min(1, 'Subject is required.').max(150, 'Subject must be 150 characters or fewer.').regex(noHeaderInjection, 'Subject contains invalid characters.'),
  message: z.string().trim().min(1, 'Message is required.').max(5000, 'Message must be 5000 characters or fewer.'),
  locale: z.preprocess(
    (value) => typeof value === 'string' ? value.trim() : defaultLocale,
    z.string().transform((locale) => isValidLocale(locale) ? locale : defaultLocale)
  ),
});

type ContactForm = z.infer<typeof contactFormSchema>;

const htmlEscapes: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

function escapeHtmlWithLineBreaks(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, '<br />');
}

async function sendContactEmails(data: ContactForm): Promise<void> {
  const hotelEmail = process.env.HOTEL_EMAIL;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!hotelEmail || !resendApiKey) {
    return;
  }

  const hotelEmailResult = z.string().trim().email().safeParse(hotelEmail);
  if (!hotelEmailResult.success) {
    console.error('Skipping contact notification: HOTEL_EMAIL is invalid.');
    return;
  }

  const resend = new Resend(resendApiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'Batumi Boutique Hotel <noreply@batumiboutique.com>';
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone || 'Not provided');
  const safeSubject = escapeHtml(data.subject);
  const safeMessage = escapeHtmlWithLineBreaks(data.message);

  await resend.emails.send({
    from: fromEmail,
    to: [hotelEmailResult.data],
    subject: `New Contact: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Subject:</strong> ${safeSubject}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessage}</p>
    `,
  });

  await resend.emails.send({
    from: fromEmail,
    to: [data.email],
    subject: 'Thank you for contacting us',
    html: `
      <h2>Thank you for your message, ${safeName}!</h2>
      <p>We have received your inquiry and will get back to you shortly.</p>
      <p>Best regards,<br/>Batumi Boutique Hotel Team</p>
    `,
  });
}

export async function POST(request: NextRequest): Promise<NextResponse<ContactSuccessResponse | ContactErrorResponse>> {
  if (isRequestBodyTooLarge(request, CONTACT_MAX_BODY_BYTES)) {
    return NextResponse.json<ContactErrorResponse>(
      { error: 'Request body is too large.' },
      { status: 413 }
    );
  }

  const ip = getClientIp(request);
  
  if (!checkContactRateLimit(ip)) {
    return NextResponse.json<ContactErrorResponse>(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json<ContactErrorResponse>(
        { error: 'Invalid JSON request body.' },
        { status: 400 }
      );
    }

    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json<ContactErrorResponse>(
        { error: parsed.error.issues[0]?.message || 'Invalid contact form submission.' },
        { status: 400 }
      );
    }

    const data = parsed.data;

    await db.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject,
        message: data.message,
        locale: data.locale,
      },
    });

    try {
      await sendContactEmails(data);
    } catch (emailError) {
      console.error('Contact email delivery error:', emailError);
    }

    return NextResponse.json<ContactSuccessResponse>({ 
      success: true,
      message: 'Message received successfully'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json<ContactErrorResponse>(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
