import type { ReactNode } from "react";

import { EngineeringLabel } from "@/components/engineering-label";

type LegalSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  paragraphs?: readonly string[];
  sections?: readonly LegalSection[];
};

export function LegalDocument({
  eyebrow,
  title,
  intro,
  paragraphs,
  sections,
}: LegalDocumentProps) {
  return (
    <main className="flex flex-1 flex-col">
      <article className="container-site section-y max-w-3xl">
        <header className="mb-10 flex flex-col gap-4">
          <EngineeringLabel as="p">{eyebrow}</EngineeringLabel>
          <h1 className="text-display text-balance">{title}</h1>
          {intro ? <p className="text-body-muted">{intro}</p> : null}
        </header>

        {paragraphs
          ? paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-body-muted mb-5">
                {paragraph}
              </p>
            ))
          : null}

        {sections
          ? sections.map((section) => (
              <section
                key={section.heading}
                aria-labelledby={`legal-${section.heading}`}
                className="mt-10"
              >
                <h2
                  id={`legal-${section.heading}`}
                  className="text-h3 mb-4"
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 48)}
                    className="text-body-muted mb-4"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mb-4 flex flex-col gap-2 border-l border-border-subtle pl-4">
                    {section.bullets.map((item) => (
                      <li key={item} className="text-body text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))
          : null}
      </article>
    </main>
  );
}

export function LegalUnavailable({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="flex flex-1 flex-col">
      <article className="container-site section-y max-w-3xl">
        <h1 className="text-display mb-4">{title}</h1>
        <p className="text-body-muted">{children}</p>
      </article>
    </main>
  );
}
