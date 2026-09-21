import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { EngineeringLabel } from "@/components/engineering-label";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: projects.meta.title,
  description: projects.meta.description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${projects.meta.title} | ${site.name}`,
    description: projects.meta.description,
  },
};

export default function ProjectsPage() {
  const { hero, evolution, timeline, contactCta } = projects;

  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section
        aria-labelledby="projects-hero-heading"
        className="rule-bottom engineering-grid"
      >
        <div className="container-site section-y">
          <div className="max-w-3xl flex flex-col gap-6 lg:gap-8">
            <EngineeringLabel as="p">{hero.eyebrow}</EngineeringLabel>
            <h1
              id="projects-hero-heading"
              className="text-display max-w-2xl text-balance"
            >
              {hero.title}
            </h1>
            <p className="text-body-muted max-w-xl">{hero.description}</p>
          </div>
        </div>
      </section>

      {/* Evolution timeline */}
      <section
        aria-labelledby="evolution-heading"
        className="rule-bottom bg-surface"
      >
        <div className="container-site section-y">
          <div className="flex flex-col gap-12 lg:gap-16">
            <SectionHeading
              label={evolution.label}
              title={evolution.title}
              description={evolution.description}
              className="max-w-2xl"
              titleId="evolution-heading"
            />

            <ol className="relative flex flex-col gap-0">
              {timeline.map((entry, index) => (
                <li
                  key={entry.id}
                  className="grid gap-6 border-t border-border-subtle py-10 first:border-t-0 first:pt-0 lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-12 lg:py-14"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-3xl font-medium tabular-nums text-foreground">
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
                      {entry.role}
                    </span>
                    {index < timeline.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="mt-4 hidden h-16 w-px bg-border-subtle lg:block"
                      />
                    ) : null}
                  </div>

                  <article
                    aria-labelledby={`project-${entry.id}-heading`}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4">
                      <h3
                        id={`project-${entry.id}-heading`}
                        className="text-h2"
                      >
                        {entry.name}
                      </h3>
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

                    <p className="text-body-muted max-w-2xl leading-relaxed">
                      {entry.summary}
                    </p>

                    {entry.features ? (
                      <div className="flex flex-col gap-3 pt-2">
                        <p className="text-label">Approved capabilities</p>
                        <ul className="grid gap-px border border-border-subtle bg-border-subtle sm:grid-cols-2">
                          {entry.features.map((feature) => (
                            <li
                              key={feature}
                              className="bg-background px-4 py-3 text-body text-sm leading-relaxed"
                            >
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {entry.link ? (
                      <div className="pt-2">
                        <Button
                          variant="outline"
                          render={<Link href={entry.link.href} />}
                          nativeButton={false}
                          className="group/link"
                        >
                          {entry.link.label}
                          <ArrowRight
                            aria-hidden="true"
                            className="transition-transform duration-150 group-hover/link:translate-x-0.5"
                          />
                        </Button>
                      </div>
                    ) : null}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Narrative bridge */}
      <section
        aria-labelledby="bridge-heading"
        className="rule-bottom"
      >
        <div className="container-site section-y">
          <div className="max-w-3xl flex flex-col gap-4 border-l-2 border-ete-green pl-6">
            <EngineeringLabel>Continuity</EngineeringLabel>
            <h2 id="bridge-heading" className="text-h2 text-balance">
              Collaboration and performance analysis carried forward
            </h2>
            <p className="text-body-muted leading-relaxed">
              PO-Studio established KPI visibility, collaborative review, and
              well performance analysis as core themes. XBM extends that direction
              into integrated exception-based surveillance—analyzing well data,
              identifying probable issues, and presenting engineering
              recommendations for review.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title={contactCta.title}
        description={contactCta.description}
        primary={contactCta.primary}
        secondary={contactCta.secondary}
      />
    </main>
  );
}
