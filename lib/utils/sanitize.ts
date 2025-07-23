import validator from 'validator';
import type { ContactInput } from '@/lib/schemas/contact';

export function sanitizeInput(data: ContactInput): ContactInput {
  return {
    name: validator.escape(data.name),
    email: validator.escape(data.email),
    subject: validator.escape(data.subject),
    message: validator.escape(data.message),
  };
}
