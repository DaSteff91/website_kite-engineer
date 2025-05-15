// utils/nodemailer.ts

import nodemailer from 'nodemailer';

// Create a transporter object using SMTP with STARTTLS
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  requireTLS: true, // Enforce STARTTLS
  tls: {
    rejectUnauthorized: true, // Ensure the server certificate is valid
  },
});

// Function to send an email

export async function sendEmail({
    to,
    subject,
    text,
    replyTo,
  }: {
    to: string;
    subject: string;
    text: string;
    replyTo?: string;
  }) {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to,
      subject,
      text,
      replyTo,
    };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
