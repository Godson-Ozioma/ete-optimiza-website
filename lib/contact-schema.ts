import { z } from "zod";

import { contactIntents } from "@/content/contact";

const intentValues = contactIntents.map((intent) => intent.value) as [
  (typeof contactIntents)[number]["value"],
  ...(typeof contactIntents)[number]["value"][],
];

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required.")
    .max(80, "First name is too long."),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required.")
    .max(80, "Last name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Enter a valid email address.")
    .max(254, "Email is too long."),
  phone: z.string().trim().max(40, "Phone number is too long.").optional(),
  company: z.string().trim().max(120, "Company name is too long.").optional(),
  intent: z.enum(intentValues),
  message: z
    .string()
    .trim()
    .min(1, "Message is required.")
    .max(5000, "Message is too long."),
  website: z.string().max(0).optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFieldErrors = Partial<
  Record<keyof ContactFormValues, string>
>;
