import { NextRequest, NextResponse } from 'next/server';

interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  locale: string;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json() as ContactForm;
    
    // Validate required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user
    
    // For now, just log and return success
    console.log('Contact form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      locale: data.locale,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ 
      success: true,
      message: 'Your message has been received. We will respond within 24 hours.'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    );
  }
}
