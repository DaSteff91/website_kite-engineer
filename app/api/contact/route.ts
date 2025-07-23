import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/utilities/nodemailer';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { contactSchema, type ContactInput } from '@/lib/schemas/contact';
import { sanitizeInput } from '@/lib/utils/sanitize';


// Allowed CORS origins
const allowedOrigins = [
  'https://kite-engineer.de',
  'https://www.kite-engineer.de',
  'https://www-dev.kite-engineer.de',
  'http://localhost:3000',
];

function getCorsHeaders(origin?: string) {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  if (origin && allowedOrigins.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
}

export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin') ?? undefined;
  return NextResponse.json({}, { status: 200, headers: getCorsHeaders(origin) });
}

// Rate limiter: 5 requests per IP per minute
// Extract IP only for in-memory rate limiting. Do not store or log.

const limiter = new RateLimiterMemory({ points: 5, duration: 60 });


export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin') ?? undefined;
  const userAgent = req.headers.get('user-agent') ?? '';
  const forwarded = req.headers.get('x-forwarded-for');
  const ip = forwarded
    ? forwarded.split(',')[0].trim()
    : (req.headers.get('x-real-ip') ?? 'unknown');

  const corsHeaders = getCorsHeaders(origin);

  //  CORS-origin check
  if (!corsHeaders['Access-Control-Allow-Origin']) {
    return NextResponse.json(
      { message: 'CORS origin not allowed' },
      { status: 403, headers: corsHeaders }
    );
  }

  //  Block simple bots and curl
  if (userAgent.startsWith('curl/') && !origin) {
    return NextResponse.json(
      { message: 'Automated access blocked.' },
      { status: 403, headers: corsHeaders }
    );
  }

  // Rate limiting
  try {
    await limiter.consume(ip);
  } catch {
    return NextResponse.json(
      { message: 'Too many requests' },
      { status: 429, headers: corsHeaders }
    );
  }

  try {
    const raw = await req.json();
    const validated = contactSchema.parse(raw);

    const clean = sanitizeInput(validated);

    // Send email to yourself
    await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: clean.subject,
      text: clean.message,
      replyTo: clean.email,
    });

    // Send auto-reply to sender
    await sendEmail({
      to: clean.email,
      subject: `RE: "${clean.subject}"`,
      html: `
        <p>Hello ${clean.name},</p>
        <p>Thanks for reaching out to me – I’ve received your message and will reply as soon as possible.</p>
        <p>Schön, dass du mir schreibst – ich habe deine Nachricht erhalten und werde schnellstmöglich antworten.</p>
        <p>Obrigado por entrar em contato comigo – eu recebi sua mensagem e responderei o mais cedo que possível.</p>
        <p>Steff</p>
        <p><strong>Kite-Engineer by Stefan Merthan</strong></p>
        <p>
          <a href="https://www.kite-engineer.de" target="_blank">www.kite-engineer.de</a><br/>
          <a href="mailto:stefan@kite-engineer.de">stefan@kite-engineer.de</a>
        </p>
        <hr />
        <p><strong>Original</strong><br/>${clean.message}</p>
      `,
      replyTo: process.env.CONTACT_EMAIL!,
    });

    return NextResponse.json(
      { message: 'Message sent successfully.' },
      { status: 200, headers: corsHeaders }
    );
  } catch (err) {
    console.error('Error sending email:', err);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500, headers: corsHeaders }
    );
  }
}
