import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { legal } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: legal.privacy.title,
  description: `Privacy Policy for ${site.name}. How we collect, use, and protect information on ete-optimiza.com.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title={legal.privacy.title}
      intro={legal.privacy.intro}
      sections={legal.privacy.sections}
    />
  );
}
