import nodemailer from 'nodemailer';
import type { SendMailOptions } from 'nodemailer';

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

/**
 * Sends an email using the configured transporter.
 *
 * @param options - A `SendMailOptions` object containing the email details.
 * @returns The Nodemailer `SentMessageInfo` object.
 * @throws Will throw an error if sending the email fails.
 */
export async function sendEmail(options: SendMailOptions) {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      ...options,
    });

    console.log('Email sent:', info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
