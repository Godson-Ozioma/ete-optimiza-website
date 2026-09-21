import { contact as contactInfo, site } from "./site";

export const contactIntents = [
  { value: "general", label: "General inquiry" },
  { value: "pilot", label: "Request an XBM pilot" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
] as const;

export type ContactIntentValue = (typeof contactIntents)[number]["value"];

export const contactPage = {
  meta: {
    title: "Contact",
    description:
      "Contact ETE-Optimiza to request an XBM pilot, discuss your field, or explore partnership opportunities in upstream production optimization.",
  },
  hero: {
    eyebrow: "Contact",
    title: "Discuss your field with the ETE-Optimiza team.",
    description:
      "Request an XBM pilot, ask about engineering collaboration, or send a general inquiry. We respond during business hours.",
  },
  details: contactInfo,
  fallbackEmail: contactInfo.email,
  companyName: site.name,
} as const;

export function resolveContactIntent(
  value: string | undefined,
): ContactIntentValue {
  if (value === "pilot") return "pilot";
  if (value === "partnership") return "partnership";
  if (value === "other") return "other";
  return "general";
}
