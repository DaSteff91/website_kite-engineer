import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string()
    .min(2, "Name too short")
    .max(30, "Name too long")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string()
    .min(4, "Email too short")
    .max(30, "Email too long")
    .email("Invalid email format"),
  subject: z.string()
    .min(2, "Subject too short")
    .max(50, "Subject too long"),
  message: z.string()
    .min(2, "Message too short")
    .max(1000, "Message too long"),
});
export type ContactInput = z.infer<typeof contactSchema>;
