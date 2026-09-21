import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { EngineeringLabel } from "@/components/engineering-label";
import { ProductVisual } from "@/components/product-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { home } from "@/content/home";
import { contact, site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | ${home.meta.title}`,
  },
  description: home.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | ${home.meta.title}`,
    description: home.meta.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/assets/brand/ete-optimiza-logo.png`,
  email: contact.email,
  foundingDate: String(site.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.street,
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    postalCode: contact.address.postalCode,
    addressCountry: "US",
  },
  description: site.description,
};

export default function Home() {
  const {
    hero,
    problem,
    workflow,
    platform,
    capabilities,
    credibility,
    services,
    projects,
    pilotCta,
  } = home;

  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="rule-bottom engineering-grid"
      >
        <div className="container-site section-y">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-6 lg:gap-8">
              <EngineeringLabel as="p">{hero.eyebrow}</EngineeringLabel>
              <h1
                id="hero-heading"
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

            <Reveal className="min-w-0 lg:-mr-4 xl:-mr-8">
              <ProductVisual
                src={hero.visual.src}
                alt={hero.visual.alt}
                caption={hero.visual.caption}
                priority
                className="w-full"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Problem / context */}
      <section
        aria-labelledby="problem-heading"
        className="rule-bottom bg-surface"
      >
        <div className="container-site section-y">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-20">
            <header className="flex max-w-xl flex-col gap-4">
              <EngineeringLabel>{problem.label}</EngineeringLabel>
              <h2 id="problem-heading" className="text-h1 text-balance">
                {problem.title}
              </h2>
              <div className="flex flex-col gap-4">
                {problem.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-body-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </header>

            <div className="flex flex-col gap-0 border-l border-border-subtle pl-6 lg:pl-8">
              <p className="text-label mb-6">Engineering context</p>
              <ul className="flex flex-col gap-5">
                {problem.points.map((point, index) => (
                  <li
                    key={point}
                    className="flex gap-4 border-t border-border-subtle pt-5 first:border-t-0 first:pt-0"
                  >
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-data tabular-nums"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-body">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        aria-labelledby="workflow-heading"
        className="rule-bottom"
      >
        <div className="container-site section-y">
          <div className="flex flex-col gap-12 lg:gap-16">
            <SectionHeading
              label={workflow.label}
              title={workflow.title}
              description={workflow.description}
              className="max-w-3xl"
              titleId="workflow-heading"
            />

            <p className="font-mono text-xs font-medium uppercase tracking-widest text-data sm:text-sm">
              {workflow.sequence}
            </p>

            <ol className="grid gap-px border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
              {workflow.steps.map((step, index) => {
                const isEngineerReview = step.id === "engineer-review";

                return (
                  <li
                    key={step.id}
                    className={cn(
                      "flex flex-col gap-3 bg-background p-5 sm:p-6",
                      isEngineerReview &&
                        "bg-ete-green-muted lg:col-span-1 lg:row-span-1",
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-xs font-medium uppercase tracking-widest text-ete-green">
                        {step.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-mono text-xs text-muted-foreground tabular-nums"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-h3">{step.title}</h3>
                    <p className="text-caption leading-relaxed">
                      {step.description}
                    </p>
                  </li>
                );
              })}
            </ol>

            <aside className="rule-top flex flex-col gap-3 pt-8 sm:flex-row sm:items-start sm:gap-6">
              <EngineeringLabel className="shrink-0">
                Engineer-in-the-loop
              </EngineeringLabel>
              <p className="text-body-muted max-w-3xl">{workflow.engineerNote}</p>
            </aside>
          </div>
        </div>
      </section>

      {/* XBM platform */}
      <section
        aria-labelledby="platform-heading"
        className="rule-bottom bg-surface engineering-grid-fine"
      >
        <div className="container-site section-y">
          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-end lg:gap-12">
              <SectionHeading
                label={platform.label}
                title={platform.title}
                description={platform.description}
                titleId="platform-heading"
              />
              <div className="flex lg:justify-end">
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

            <ProductVisual
              src={platform.visual.src}
              alt={platform.visual.alt}
              caption={platform.visual.caption}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Key capabilities */}
      <section
        aria-labelledby="capabilities-heading"
        className="rule-bottom"
      >
        <div className="container-site section-y">
          <div className="flex flex-col gap-16 lg:gap-24">
            <SectionHeading
              label={capabilities.label}
              title={capabilities.title}
              description={capabilities.description}
              className="max-w-2xl"
              titleId="capabilities-heading"
            />

            <div className="flex flex-col gap-20 lg:gap-28">
              {capabilities.items.map((item, index) => {
                const visualFirst = item.layout === "visual-left";

                return (
                  <article
                    key={item.id}
                    aria-labelledby={`capability-${item.id}-heading`}
                    className={cn(
                      "grid items-center gap-8 lg:gap-12",
                      visualFirst
                        ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
                        : "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]",
                    )}
                  >
                    <div
                      className={cn(
                        "min-w-0",
                        !visualFirst && "lg:order-2",
                      )}
                    >
                      <ProductVisual
                        src={item.visual.src}
                        alt={item.visual.alt}
                        caption={item.visual.caption}
                      />
                    </div>

                    <div
                      className={cn(
                        "flex flex-col gap-4 lg:gap-5",
                        !visualFirst && "lg:order-1",
                        index % 2 === 1 && "lg:pl-4 xl:pl-8",
                        index % 2 === 0 && "lg:pr-4 xl:pr-8",
                      )}
                    >
                      <EngineeringLabel>{item.title}</EngineeringLabel>
                      <h3
                        id={`capability-${item.id}-heading`}
                        className="text-h2 text-balance"
                      >
                        {item.summary}
                      </h3>
                      <p className="text-body-muted">{item.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering credibility */}
      <section
        aria-labelledby="credibility-heading"
        className="rule-bottom bg-surface"
      >
        <div className="container-site section-y">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <header className="flex flex-col gap-4">
              <EngineeringLabel>{credibility.label}</EngineeringLabel>
              <h2 id="credibility-heading" className="text-h1 text-balance">
                {credibility.title}
              </h2>
              <div className="flex flex-col gap-4">
                {credibility.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-body-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </header>

            <ul className="flex flex-col gap-0">
              {credibility.principles.map((principle, index) => (
                <li
                  key={principle}
                  className="flex gap-4 border-t border-border-subtle py-5 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 size-1.5 shrink-0 bg-ete-green"
                  />
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-data tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="text-body">{principle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services / company */}
      <section
        aria-labelledby="services-heading"
        className="rule-bottom"
      >
        <div className="container-site section-y">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
            <div className="flex flex-col gap-4">
              <EngineeringLabel>{services.label}</EngineeringLabel>
              <h2 id="services-heading" className="text-h1 text-balance">
                {services.title}
              </h2>
              <p className="text-body-muted max-w-xl">{services.description}</p>
              <p className="text-body max-w-xl border-l-2 border-ete-green pl-4">
                {services.expertise}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start lg:gap-3">
              {services.links.map((link) => (
                <Button
                  key={link.href}
                  variant="outline"
                  render={<Link href={link.href} />}
                  nativeButton={false}
                  className="w-full sm:w-auto lg:w-full"
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project progression */}
      <section
        aria-labelledby="projects-heading"
        className="rule-bottom bg-surface"
      >
        <div className="container-site section-y">
          <div className="flex flex-col gap-12">
            <SectionHeading
              label={projects.label}
              title={projects.title}
              description={projects.description}
              className="max-w-2xl"
              titleId="projects-heading"
            />

            <ol className="relative flex flex-col gap-0">
              {projects.entries.map((entry, index) => (
                <li
                  key={entry.name}
                  className="grid gap-4 border-t border-border-subtle py-8 first:border-t-0 first:pt-0 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-8"
                >
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-2xl font-medium tabular-nums text-foreground">
                      {entry.year}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-xs uppercase tracking-widest",
                        entry.status === "current"
                          ? "text-ete-green"
                          : "text-muted-foreground",
                      )}
                    >
                      {entry.status === "current" ? "Current" : "Predecessor"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <h3 className="text-h3">{entry.name}</h3>
                      {index < projects.entries.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="hidden h-px flex-1 bg-border-subtle sm:block"
                        />
                      ) : null}
                    </div>
                    <p className="text-body-muted max-w-2xl">{entry.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
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
