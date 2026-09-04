import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendContactEmail } from '@/lib/mailer';
import { checkRateLimit } from '@/lib/rateLimit';

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  organization: z.string().trim().max(200).optional(),
  email: z.string().trim().min(1).email().max(320),
  phone: z.string().trim().max(50).optional(),
  service: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10).max(5000),
  preferredLanguage: z.enum(['es', 'en']),
  honeypot: z.string().max(500).optional().default(''),
});

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ success: false, error: 'Too many requests' }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: 'Invalid or missing fields' },
      { status: 400 }
    );
  }

  const { honeypot, ...data } = parsed.data;

  // Honeypot check for spam bots — pretend success without sending anything.
  if (honeypot) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  try {
    await sendContactEmail(data);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof Error && error.message.includes('SMTP is not configured')) {
      console.error('[Contact Form API] Email delivery is not configured:', error.message);
      return NextResponse.json(
        { success: false, error: 'Contact delivery is not configured on the server yet.' },
        { status: 503 }
      );
    }

    console.error('[Contact Form API Error]:', error);
    return NextResponse.json(
      { success: false, error: 'We could not send your message. Please try again later.' },
      { status: 502 }
    );
  }
}
