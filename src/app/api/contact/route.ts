import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { db } from '@/lib/db';

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  locale: string;
}

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  locale?: string;
}

interface ContactSuccessResponse {
  success: boolean;
  message: string;
}

interface ContactErrorResponse {
  error: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest): Promise<NextResponse<ContactSuccessResponse | ContactErrorResponse>> {
  try {
    const data: ContactRequestBody = await request.json();
    
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json<ContactErrorResponse>(
        { error: 'Missing required fields. Name, email, subject, and message are required.' },
        { status: 400 }
      );
    }

    if (typeof data.name !== 'string' || data.name.trim().length === 0) {
      return NextResponse.json<ContactErrorResponse>(
        { error: 'Name must be a non-empty string.' },
        { status: 400 }
      );
    }

    if (typeof data.email !== 'string' || !emailRegex.test(data.email)) {
      return NextResponse.json<ContactErrorResponse>(
        { error: 'Invalid email format. Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (typeof data.message !== 'string' || data.message.trim().length === 0) {
      return NextResponse.json<ContactErrorResponse>(
        { error: 'Message must be a non-empty string.' },
        { status: 400 }
      );
    }

    if (typeof data.subject !== 'string' || data.subject.trim().length === 0) {
      return NextResponse.json<ContactErrorResponse>(
        { error: 'Subject must be a non-empty string.' },
        { status: 400 }
      );
    }

    const submission = await db.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject,
        message: data.message,
        locale: data.locale || 'en',
      },
    });

    const hotelEmail = process.env.HOTEL_EMAIL;
    if (hotelEmail && process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Grand Boutique Hotel <onboarding@resend.dev>',
        to: [hotelEmail],
        subject: `New Contact: ${data.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      });

      await resend.emails.send({
        from: 'Grand Boutique Hotel <onboarding@resend.dev>',
        to: [data.email],
        subject: 'Thank you for contacting us',
        html: `
          <h2>Thank you for your message, ${data.name}!</h2>
          <p>We have received your inquiry and will get back to you shortly.</p>
          <p>Best regards,<br/>Grand Boutique Hotel Team</p>
        `,
      });
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
