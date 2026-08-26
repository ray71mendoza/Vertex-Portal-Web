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

    return NextResponse.json(
      {
        success: false,
        error: 'Contact delivery provider is not configured. Use mailto fallback or configure RESEND_API_KEY/SMTP.',
      },
      { status: 501 }
    );
  } catch (error) {
    console.error('[Contact Form API Error]:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
