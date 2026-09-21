import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { EngineeringLabel } from "@/components/engineering-label";
import {
  contactPage,
  resolveContactIntent,
} from "@/content/contact";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: contactPage.meta.title,
  description: contactPage.meta.description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${contactPage.meta.title} | ${site.name}`,
    description: contactPage.meta.description,
  },
};

type ContactPageProps = {
  searchParams: Promise<{ intent?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const intent = resolveContactIntent(params.intent);
  const { hero, details } = contactPage;
  const address = `${details.address.street}, ${details.address.city}, ${details.address.state} ${details.address.postalCode}`;

  return (
    <main className="flex flex-1 flex-col">
      <section
        aria-labelledby="contact-hero-heading"
        className="rule-bottom engineering-grid"
      >
        <div className="container-site section-y">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="flex flex-col gap-6">
              <EngineeringLabel as="p">{hero.eyebrow}</EngineeringLabel>
              <h1
                id="contact-hero-heading"
                className="text-display max-w-xl text-balance"
              >
                {hero.title}
              </h1>
              <p className="text-body-muted max-w-md">{hero.description}</p>

              <dl className="flex flex-col gap-6 border-t border-border-subtle pt-8">
                <div className="flex flex-col gap-1">
                  <dt className="text-label">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${details.email}`}
                      className="text-body hover:text-ete-green focus-ring rounded-sm"
                    >
                      {details.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-label">Location</dt>
                  <dd className="text-body">{address}</dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-label">Hours</dt>
                  <dd className="text-body">{details.hours}</dd>
                </div>
              </dl>
            </div>

            <div className="border border-border-subtle bg-surface p-5 sm:p-8">
              <ContactForm initialIntent={intent} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
