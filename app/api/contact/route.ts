import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/lib/utils/nodemailer';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { contactSchema, type ContactInput } from '@/lib/schemas/contact';
import { sanitizeInput } from '@/lib/utils/sanitize';
import { getTranslations } from 'next-intl/server';

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

// Supported locales whitelist (keep in sync with your routing/locales)
const SUPPORTED_LOCALES = ["en-US", "de-DE", "pt-BR"];
const DEFAULT_LOCALE = "en-US";

function sanitizeHeaderValue(value: string, maxLen = 200): string {
  // Remove CR/LF to avoid header injection, collapse whitespace, and limit length
  if (!value) return "";
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, maxLen);
}

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
    // Parse request body (may contain optional locale)
    const raw = await req.json();
    // Validate the main contact fields (contactSchema now allows optional locale)
    const validated = contactSchema.parse(raw as unknown);

    // Determine locale: prefer client-sent locale if valid; fallback to DEFAULT_LOCALE
    const requestedLocale = typeof (raw as any).locale === "string" ? (raw as any).locale : undefined;
    const locale = requestedLocale && SUPPORTED_LOCALES.includes(requestedLocale) ? requestedLocale : DEFAULT_LOCALE;

    const clean: ContactInput = sanitizeInput(validated);

    // Send email to yourself
    await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: sanitizeHeaderValue(clean.subject),
      text: clean.message,
      replyTo: clean.email,
    });

    // Build localized auto-reply using next-intl translations stored under ContactForm.nodemailerAutoReplies
    const t = await getTranslations({locale, namespace: "ContactForm"});

    // Compose localized subject (safe for headers)
    const localizedSubject = t("nodemailerAutoReplies.subject", {subject: clean.subject});
    const emailReplySubject = sanitizeHeaderValue(localizedSubject);

    const rawTemplate = t.raw("nodemailerAutoReplies.body");

    const localizedBodyHtml = rawTemplate
      .replaceAll("{name}", clean.name)
      .replaceAll("{subject}", clean.subject)
      .replaceAll("{originalMessage}", clean.message);

    // Send auto-reply to sender
    await sendEmail({
      to: clean.email,
      subject: emailReplySubject,
      html: localizedBodyHtml,
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
