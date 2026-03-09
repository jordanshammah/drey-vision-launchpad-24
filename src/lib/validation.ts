import { z } from "zod";

const trimmedString = (maxLen: number) =>
  z.string().trim().max(maxLen, { message: `Must be ${maxLen} characters or fewer` });

const requiredTrimmedString = (maxLen: number, label: string) =>
  trimmedString(maxLen).min(1, { message: `${label} is required` });

const optionalUrl = z
  .string()
  .trim()
  .max(500)
  .refine((v) => !v || /^https?:\/\/.+/.test(v), { message: "Must be a valid URL starting with http(s)://" })
  .optional()
  .or(z.literal(""));

const optionalHandle = z
  .string()
  .trim()
  .max(100)
  .optional()
  .or(z.literal(""));

// ── Contact Form ──
export const contactFormSchema = z.object({
  name: requiredTrimmedString(100, "Name"),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: trimmedString(200).optional().or(z.literal("")),
  instagram: optionalHandle,
  message: requiredTrimmedString(2000, "Message"),
});
export type ContactFormData = z.infer<typeof contactFormSchema>;

// ── Apply Form ──
export const applyFormSchema = z.object({
  name: requiredTrimmedString(100, "Name"),
  email: z.string().trim().email("Invalid email address").max(255),
  businessName: requiredTrimmedString(200, "Business name"),
  businessType: requiredTrimmedString(100, "Business type"),
  website: optionalUrl,
  instagram: optionalHandle,
  facebook: optionalHandle,
  tiktok: optionalHandle,
  linkedin: optionalHandle,
  budgetRange: requiredTrimmedString(100, "Budget range"),
  challenges: trimmedString(3000).optional().or(z.literal("")),
  goals: trimmedString(3000).optional().or(z.literal("")),
});
export type ApplyFormData = z.infer<typeof applyFormSchema>;
