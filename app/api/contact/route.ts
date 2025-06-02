import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { sendEmail } from '@/utilities/nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Configure the transporter with STARTTLS
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

    // Send the email
    await sendEmail({
      //from: process.env.SMTP_USER!,
      to: process.env.CONTACT_EMAIL!,
      subject,
      text: message,
      replyTo: email,
    });

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
