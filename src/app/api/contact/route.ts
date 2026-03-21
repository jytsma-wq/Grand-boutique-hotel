import { NextRequest, NextResponse } from 'next/server';

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

// Basic email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest): Promise<NextResponse<ContactSuccessResponse | ContactErrorResponse>> {
  try {
    const data: ContactRequestBody = await request.json();
    
    // Validate required fields are present
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json<ContactErrorResponse>(
        { error: 'Missing required fields. Name, email, subject, and message are required.' },
        { status: 400 }
      );
    }

    // Validate name is not empty or whitespace only
    if (typeof data.name !== 'string' || data.name.trim().length === 0) {
      return NextResponse.json<ContactErrorResponse>(
        { error: 'Name must be a non-empty string.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (typeof data.email !== 'string' || !emailRegex.test(data.email)) {
      return NextResponse.json<ContactErrorResponse>(
        { error: 'Invalid email format. Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Validate message is not empty or whitespace only
    if (typeof data.message !== 'string' || data.message.trim().length === 0) {
      return NextResponse.json<ContactErrorResponse>(
        { error: 'Message must be a non-empty string.' },
        { status: 400 }
      );
    }

    // Validate subject is not empty or whitespace only
    if (typeof data.subject !== 'string' || data.subject.trim().length === 0) {
      return NextResponse.json<ContactErrorResponse>(
        { error: 'Subject must be a non-empty string.' },
        { status: 400 }
      );
    }

    // Log the validated submission
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      locale: data.locale,
      timestamp: new Date().toISOString(),
    });

    // ============================================================
    // EMAIL SENDING LOGIC PLACEHOLDER
    // ============================================================
    // Integrate your email service here (e.g., Resend, Nodemailer, SendGrid)
    // Example integration points:
    // 1. Send notification email to hotel admin
    // 2. Send confirmation email to the user
    // 3. Save submission to database for tracking
    //
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Batumi Boutique <onboarding@resend.dev>',
    //   to: ['admin@batumiboutique.com'],
    //   subject: `New Contact: ${data.subject}`,
    //   html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`,
    // });
    // ============================================================

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
