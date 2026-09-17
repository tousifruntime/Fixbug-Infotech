import { z } from "zod";

// Reject any field that contains raw line breaks — these have no legitimate
// use in a name/subject/phone and are a classic vector for header-injection
// style attacks against downstream systems (email, logs, etc.)
const noLineBreaks = (val) => !/[\r\n]/.test(val);

export const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name cannot exceed 80 characters")
    .refine(noLineBreaks, "Full name contains invalid characters"),

  email: z
    .string()
    .trim()
    .min(5, "Email address is required")
    .max(100, "Email cannot exceed 100 characters")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(20, "Phone number cannot exceed 20 characters")
    .regex(/^[+]?[0-9()\-.\s]{7,20}$/, "Please enter a valid phone number")
    .refine(noLineBreaks, "Phone number contains invalid characters"),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters")
    .max(150, "Subject cannot exceed 150 characters")
    .refine(noLineBreaks, "Subject contains invalid characters"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message cannot exceed 2000 characters"),

  // Honeypot: a real visitor never sees or fills this field (hidden via CSS
  // in the form). Any non-empty value here means it's almost certainly a bot.
  company: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});