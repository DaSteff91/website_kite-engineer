import { createClient } from 'npm:@supabase/supabase-js@2.39.0';
import { SmtpClient } from 'npm:@orama/smtp-client@2.0.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const payload: EmailPayload = await req.json();
    const { name, email, subject, message } = payload;

    // Rate limiting check would go here
    
    const smtp = new SmtpClient({
      host: Deno.env.get('EMAIL_HOST')!,
      port: parseInt(Deno.env.get('EMAIL_PORT')!),
      secure: Deno.env.get('EMAIL_SECURE') === 'true',
      auth: {
        user: Deno.env.get('EMAIL_USER')!,
        pass: Deno.env.get('EMAIL_PASS')!,
      },
    });

    await smtp.send({
      from: Deno.env.get('EMAIL_USER')!,
      to: Deno.env.get('EMAIL_RECIPIENT')!,
      subject: `Contact Form: ${subject}`,
      content: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});