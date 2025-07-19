import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { sendEmail } from '@/utilities/nodemailer';

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] 
          || req.headers.get('x-real-ip') 
          || 'unknown';  // reliably detect client IP :contentReference[oaicite:1]{index=1}
  console.log({
    ip,
    origin: req.headers.get('origin'),
    userAgent: req.headers.get('user-agent'),
    body: await req.clone().json(),
    timestamp: new Date().toISOString(),
  });  
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Configure the mail sending transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST!,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
      requireTLS: true,
      tls: {
        rejectUnauthorized: true,
      },
    });

    // Send the email to myself
    await sendEmail({
      //from: process.env.SMTP_USER!,
      to: process.env.CONTACT_EMAIL!,
      subject,
      text: message,
      replyTo: email,
    });

    await sendEmail({
      //from: process.env.SMTP_USER!,
      to: email,
      subject: `RE: "${subject}"`,
      html: `
        <p>Hello ${name},</p>
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

        <p><strong>Original</strong><br/>${message}</p>
      `,
      replyTo: process.env.CONTACT_EMAIL!,
    })

    return NextResponse.json(
      { message: 'Message sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
