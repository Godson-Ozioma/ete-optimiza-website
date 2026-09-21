import type { Metadata } from "next";

import { LegalDocument } from "@/components/legal-document";
import { legal } from "@/content/legal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: legal.terms.title,
  description: `Terms and Conditions for using the ${site.name} website at ete-optimiza.com.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title={legal.terms.title}
      paragraphs={legal.terms.paragraphs}
    />
  );
}
