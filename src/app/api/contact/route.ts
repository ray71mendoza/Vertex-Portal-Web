import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // Honeypot check for spam bots
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Received' }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Console logging submission securely on server side
    console.log('[Contact Form Submission Received]:', {
      name,
      email,
      organization: body.organization || 'N/A',
      phone: body.phone || 'N/A',
      service: body.service || 'General',
      preferredLanguage: body.preferredLanguage || 'es',
      timestamp: new Date().toISOString(),
    });

    // In production, integrate with email provider (Resend / SendGrid / Nodemailer)
    // using process.env.SMTP_USER, process.env.RESEND_API_KEY, etc.

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Contact Form API Error]:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
