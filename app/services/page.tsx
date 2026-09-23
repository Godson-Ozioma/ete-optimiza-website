import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { EngineeringLabel } from "@/components/engineering-label";
import { ProductVisual } from "@/components/product-visual";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: services.meta.title,
  description: services.meta.description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `${services.meta.title} | ${site.name}`,
    description: services.meta.description,
  },
};

export default function ServicesPage() {
  const {
    hero,
    collaboration,
    domains,
    platform,
    contextualVisual,
    pilotCta,
  } = services;

  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section
        aria-labelledby="services-hero-heading"
        className="rule-bottom engineering-grid"
      >
        <div className="container-site section-y">
          <div className="max-w-3xl flex flex-col gap-6 lg:gap-8">
            <EngineeringLabel as="p">{hero.eyebrow}</EngineeringLabel>
            <h1
              id="services-hero-heading"
              className="text-display max-w-2xl text-balance"
            >
              {hero.title}
            </h1>
            <p className="text-body-muted max-w-xl">{hero.description}</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                render={<Link href={hero.primaryCta.href} />}
                nativeButton={false}
              >
                {hero.primaryCta.label}
              </Button>
              <Button
                variant="outline"
                size="lg"
                render={<Link href={hero.secondaryCta.href} />}
                nativeButton={false}
              >
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section
        aria-labelledby="collaboration-heading"
        className="rule-bottom bg-surface"
      >
        <div className="container-site section-y">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <header className="flex flex-col gap-4">
              <EngineeringLabel>{collaboration.label}</EngineeringLabel>
              <h2 id="collaboration-heading" className="text-h1 text-balance">
                {collaboration.title}
              </h2>
              <div className="flex flex-col gap-4">
                {collaboration.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-body-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </header>

            <ul className="flex flex-col gap-0">
              {collaboration.principles.map((principle) => (
                <li
                  key={principle}
                  className="flex gap-4 border-t border-border-subtle py-5 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 bg-ete-green"
                  />
                  <p className="text-body">{principle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service groups */}
      <section
        aria-labelledby="domains-heading"
        className="rule-bottom bg-surface"
      >
        <div className="container-site section-y">
          <div className="flex flex-col gap-12 lg:gap-16">
            <SectionHeading
              label={domains.label}
              title={domains.title}
              description={domains.description}
              className="max-w-2xl"
              titleId="domains-heading"
            />

            <div className="flex flex-col gap-0">
              {domains.items.map((item) => (
                <article
                  key={item.id}
                  aria-labelledby={`domain-${item.id}-heading`}
                  className="grid gap-6 border-t border-border-subtle py-10 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,0.35fr)_minmax(0,1fr)] lg:gap-12 lg:py-12"
                >
                  <div className="flex flex-col gap-2">
                    <EngineeringLabel>{item.name}</EngineeringLabel>
                    <h3
                      id={`domain-${item.id}-heading`}
                      className="text-h3 text-balance"
                    >
                      {item.summary}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-body-muted">{item.detail}</p>
                    {item.themes ? (
                      <ul className="flex flex-col gap-2 border-l-2 border-ete-green pl-4">
                        {item.themes.map((theme) => (
                          <li
                            key={theme}
                            className="text-body text-sm leading-relaxed"
                          >
                            {theme}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform connection */}
      <section
        aria-labelledby="platform-heading"
        className="rule-bottom engineering-grid-fine"
      >
        <div className="container-site section-y">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
            <div className="flex flex-col gap-4">
              <EngineeringLabel>{platform.label}</EngineeringLabel>
              <h2 id="platform-heading" className="text-h1 text-balance">
                {platform.title}
              </h2>
              <p className="text-body-muted">{platform.description}</p>
              <div className="pt-2">
                <Button
                  variant="outline"
                  render={<Link href={platform.link.href} />}
                  nativeButton={false}
                  className="group/link"
                >
                  {platform.link.label}
                  <ArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-150 group-hover/link:translate-x-0.5"
                  />
                </Button>
              </div>
            </div>

            {contextualVisual ? (
              <ProductVisual
                src={contextualVisual.src}
                alt={contextualVisual.alt}
              />
            ) : null}
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <CtaBand
        title={pilotCta.title}
        description={pilotCta.description}
        primary={pilotCta.primary}
        secondary={pilotCta.secondary}
      />
    </main>
  );
}
