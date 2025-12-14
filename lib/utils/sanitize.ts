import { escape } from 'validator';
import type { ContactInput } from '@/lib/schemas/contact';

export function sanitizeInput(data: ContactInput): ContactInput {
  return {
    name: escape(data.name),
    email: escape(data.email),
    subject: escape(data.subject),
    message: escape(data.message),
  };
}
