import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { EngineeringLabel } from "@/components/engineering-label";
import { ProductVisual } from "@/components/product-visual";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StatusIndicator } from "@/components/status-indicator";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { xbm } from "@/content/xbm";
import type { XbmCapabilitySection, XbmSupportingCapability } from "@/content/types";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: xbm.meta.title,
  description: xbm.meta.description,
  alternates: { canonical: "/xbm" },
  openGraph: {
    title: `${xbm.meta.title} | ${site.name}`,
    description: xbm.meta.description,
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "XBM",
  alternateName: "Xception Based Monitoring",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: xbm.meta.description,
  url: `${site.url}/xbm`,
  provider: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

const sectionAnchor = "scroll-mt-20";

function FluxConceptPanel({ capability }: { capability: XbmCapabilitySection }) {
  return (
    <figure className="flex flex-col gap-3">
      <div className="rule-top rule-bottom bg-surface engineering-grid-fine p-1">
        <div className="border border-border-subtle bg-background p-6 sm:p-8 lg:p-10">
          <p className="text-label mb-8">Conceptual flux relationships</p>

          <div className="flex flex-col gap-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3 border border-border-subtle p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-data">
                  Rate
                </p>
                <p className="text-body-muted text-sm leading-relaxed">
                  Production rate context monitored alongside operating changes.
                </p>
              </div>
              <div className="flex flex-col gap-3 border border-border-subtle p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-data">
                  Effective screen area
                </p>
                <p className="text-body-muted text-sm leading-relaxed">
                  Completion and sand-control geometry context for velocity screening.
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="flex items-center justify-center font-mono text-data text-sm"
            >
              ↓
            </div>

            <div className="border border-ete-green/30 bg-ete-green-muted p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-ete-green mb-2">
                Flux indicator
              </p>
              <p className="text-body text-sm leading-relaxed">
                Flow velocity through effective screen area—an additional
                integrity-related engineering indicator for sand-control
                surveillance.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="flex items-center justify-center font-mono text-data text-sm"
            >
              ↓
            </div>

            <div className="border-l-2 border-ete-green pl-5">
              <p className="text-label mb-3">Screening focus</p>
              <ul className="flex flex-col gap-2">
                {capability.points?.map((point) => (
                  <li key={point} className="text-body text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="flex items-center gap-2 text-caption">
        <span aria-hidden="true" className="font-mono text-data">
          {"//"}
        </span>
        <span>
          Conceptual diagram — sand-control and screen-integrity screening
          relationships (not product interface)
        </span>
      </figcaption>
    </figure>
  );
}

function PrimaryCapabilityBlock({
  capability,
  index,
}: {
  capability: XbmCapabilitySection;
  index: number;
}) {
  const visualFirst = capability.layout === "visual-left";
  const isFlux = capability.layout === "text-only";

  return (
    <article
      id={capability.anchor}
      aria-labelledby={`capability-${capability.id}-heading`}
      className={cn(sectionAnchor, "grid items-center gap-8 lg:gap-12", {
        "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]": !isFlux,
      })}
    >
      {isFlux ? (
        <>
          <div className="flex flex-col gap-4 lg:gap-5 lg:col-span-2">
            <EngineeringLabel>{capability.title}</EngineeringLabel>
            <h3
              id={`capability-${capability.id}-heading`}
              className="text-h2 text-balance"
            >
              {capability.summary}
            </h3>
            <div className="flex flex-col gap-4">
              {capability.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-body-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <FluxConceptPanel capability={capability} />
          </div>
        </>
      ) : (
        <>
          <div
            className={cn(
              "min-w-0",
              visualFirst ? "lg:order-1" : "lg:order-2",
            )}
          >
            {capability.visual ? (
              <ProductVisual
                src={capability.visual.src}
                alt={capability.visual.alt}
                caption={capability.visual.caption}
              />
            ) : null}
          </div>

          <div
            className={cn(
              "flex flex-col gap-4 lg:gap-5",
              visualFirst ? "lg:order-2" : "lg:order-1",
              index % 2 === 1 && "lg:pl-4 xl:pl-8",
              index % 2 === 0 && "lg:pr-4 xl:pr-8",
            )}
          >
            <EngineeringLabel>{capability.title}</EngineeringLabel>
            <h3
              id={`capability-${capability.id}-heading`}
              className="text-h2 text-balance"
            >
              {capability.summary}
            </h3>
            <div className="flex flex-col gap-4">
              {capability.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-body-muted">
                  {paragraph}
                </p>
              ))}
            </div>
            {capability.points ? (
              <ul className="flex flex-col gap-2 border-l border-border-subtle pl-4">
                {capability.points.map((point) => (
                  <li key={point} className="text-body text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </>
      )}
    </article>
  );
}

function SupportingPrimaryBlock({ item }: { item: XbmSupportingCapability }) {
  return (
    <article
      id={item.anchor}
      aria-labelledby={`support-${item.id}-heading`}
      className={cn(
        sectionAnchor,
        "grid items-center gap-8 border-t border-border-subtle pt-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12 lg:pt-16",
      )}
    >
      <div className="flex flex-col gap-4 lg:gap-5">
        <EngineeringLabel>{item.title}</EngineeringLabel>
        <h3 id={`support-${item.id}-heading`} className="text-h2 text-balance">
          {item.summary}
        </h3>
        <p className="text-body-muted">{item.detail}</p>
        {item.points ? (
          <ul className="flex flex-col gap-2">
            {item.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 border-t border-border-subtle pt-3 first:border-t-0 first:pt-0"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 bg-ete-green"
                />
                <span className="text-body text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {item.visual ? (
        <ProductVisual
          src={item.visual.src}
          alt={item.visual.alt}
          caption={item.visual.caption}
        />
      ) : null}
    </article>
  );
}

function SupportingSecondaryBlock({ item }: { item: XbmSupportingCapability }) {
  return (
    <article
      id={item.anchor}
      aria-labelledby={`support-${item.id}-heading`}
      className={cn(sectionAnchor, "flex flex-col gap-5 border-t border-border-subtle pt-10 lg:pt-12")}
    >
      <div className="flex flex-col gap-3">
        <EngineeringLabel>{item.title}</EngineeringLabel>
        <h3 id={`support-${item.id}-heading`} className="text-h3 text-balance">
          {item.summary}
        </h3>
        <p className="text-body-muted text-sm leading-relaxed">{item.detail}</p>
      </div>
      {item.points ? (
        <ul className="flex flex-col gap-2 border-l border-border-subtle pl-4">
          {item.points.map((point) => (
            <li key={point} className="text-body text-sm leading-relaxed">
              {point}
            </li>
          ))}
        </ul>
      ) : null}
      {item.visual ? (
        <ProductVisual
          src={item.visual.src}
          alt={item.visual.alt}
          caption={item.visual.caption}
          className="mt-2"
        />
      ) : null}
    </article>
  );
}

function SupportingTertiaryBlock({ item }: { item: XbmSupportingCapability }) {
  return (
    <article
      id={item.anchor}
      aria-labelledby={`support-${item.id}-heading`}
      className={cn(
        sectionAnchor,
        "grid gap-6 border-t border-border-subtle py-8 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] sm:gap-8 lg:py-10",
      )}
    >
      <div className="flex flex-col gap-3">
        <EngineeringLabel>{item.title}</EngineeringLabel>
        <h3 id={`support-${item.id}-heading`} className="text-h3 text-balance">
          {item.summary}
        </h3>
        <p className="text-body-muted text-sm leading-relaxed">{item.detail}</p>
        {item.points ? (
          <ul className="mt-2 flex flex-col gap-1.5">
            {item.points.map((point) => (
              <li
                key={point}
                className="font-mono text-xs leading-relaxed text-data"
              >
                {point}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {item.visual ? (
        <ProductVisual
          src={item.visual.src}
          alt={item.visual.alt}
          caption={item.visual.caption}
        />
      ) : null}
    </article>
  );
}

export default function XbmPage() {
  const {
    hero,
    moduleIndex,
    workflow,
    exceptionStates,
    primaryCapabilities,
    supportingCapabilities,
    dataSources,
    alertsReporting,
    methodology,
    pilotCta,
  } = xbm;

  const dashboard = supportingCapabilities.items.find(
    (item) => item.id === "dashboard",
  );
  const wellDataBook = supportingCapabilities.items.find(
    (item) => item.id === "well-data-book",
  );
  const temperatureRates = supportingCapabilities.items.find(
    (item) => item.id === "temperature-derived-rates",
  );
  const pseudoSkin = supportingCapabilities.items.find(
    (item) => item.id === "pseudo-skin",
  );
  const productionAggregation = supportingCapabilities.items.find(
    (item) => item.id === "production-aggregation",
  );
  const integratedSurveillance = supportingCapabilities.items.find(
    (item) => item.id === "integrated-surveillance",
  );

  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      {/* Hero */}
      <section
        aria-labelledby="xbm-hero-heading"
        className="rule-bottom engineering-grid"
      >
        <div className="container-site section-y">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-12 xl:gap-16">
            <div className="flex flex-col gap-6 lg:gap-8">
              <EngineeringLabel as="p">{hero.eyebrow}</EngineeringLabel>
              <h1 id="xbm-hero-heading" className="text-display max-w-2xl text-balance">
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

      {/* Module index */}
      <section
        id="modules"
        aria-labelledby="modules-heading"
        className={cn(sectionAnchor, "rule-bottom bg-surface")}
      >
        <div className="container-site section-y">
          <div className="flex flex-col gap-10 lg:gap-12">
            <SectionHeading
              label={moduleIndex.label}
              title={moduleIndex.title}
              description={moduleIndex.description}
              className="max-w-3xl"
              titleId="modules-heading"
            />

            <nav aria-label="XBM module index">
              <ol className="grid gap-px border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-3">
                {moduleIndex.modules.map((module, index) => (
                  <li key={module.id} className="bg-background">
                    <Link
                      href={`#${module.anchor}`}
                      className="group/link flex h-full flex-col gap-2 p-4 sm:p-5 focus-ring hover:bg-surface-elevated/50"
                    >
                      <span className="flex items-center justify-between gap-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-ete-green">
                          {module.name}
                        </span>
                        <span
                          aria-hidden="true"
                          className="font-mono text-xs text-muted-foreground tabular-nums"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </span>
                      <span className="text-caption leading-relaxed group-hover/link:text-foreground">
                        {module.summary}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section
        id="workflow"
        aria-labelledby="workflow-heading"
        className={cn(sectionAnchor, "rule-bottom")}
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
                      isEngineerReview && "bg-ete-green-muted",
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
          </div>
        </div>
      </section>

      {/* Exception states */}
      <section
        id="exception-states"
        aria-labelledby="exception-states-heading"
        className={cn(sectionAnchor, "rule-bottom bg-surface")}
      >
        <div className="container-site section-y">
          <div className="flex flex-col gap-10 lg:gap-12">
            <SectionHeading
              label={exceptionStates.label}
              title={exceptionStates.title}
              description={exceptionStates.description}
              className="max-w-3xl"
              titleId="exception-states-heading"
            />

            <ul className="grid gap-px border border-border-subtle bg-border-subtle sm:grid-cols-2">
              {exceptionStates.states.map((state) => (
                <li
                  key={state.status}
                  className="flex flex-col gap-3 bg-background p-5 sm:p-6"
                >
                  <StatusIndicator status={state.status} />
                  <p className="text-body-muted text-sm leading-relaxed">
                    {state.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Primary capabilities */}
      <section
        id="capabilities"
        aria-labelledby="capabilities-heading"
        className={cn(sectionAnchor, "rule-bottom")}
      >
        <div className="container-site section-y">
          <div className="flex flex-col gap-16 lg:gap-24">
            <SectionHeading
              label={primaryCapabilities.label}
              title={primaryCapabilities.title}
              description={primaryCapabilities.description}
              className="max-w-2xl"
              titleId="capabilities-heading"
            />

            <div className="flex flex-col gap-20 lg:gap-28">
              {primaryCapabilities.items.map((capability, index) => (
                <PrimaryCapabilityBlock
                  key={capability.id}
                  capability={capability}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supporting capabilities */}
      <section
        id="supporting-capabilities"
        aria-labelledby="supporting-capabilities-heading"
        className={cn(sectionAnchor, "rule-bottom bg-surface")}
      >
        <div className="container-site section-y">
          <div className="flex flex-col gap-10 lg:gap-14">
            <SectionHeading
              label={supportingCapabilities.label}
              title={supportingCapabilities.title}
              description={supportingCapabilities.description}
              className="max-w-2xl"
              titleId="supporting-capabilities-heading"
            />

            {dashboard ? <SupportingPrimaryBlock item={dashboard} /> : null}

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              {wellDataBook ? (
                <SupportingSecondaryBlock item={wellDataBook} />
              ) : null}
              {temperatureRates ? (
                <SupportingSecondaryBlock item={temperatureRates} />
              ) : null}
            </div>

            {pseudoSkin ? <SupportingTertiaryBlock item={pseudoSkin} /> : null}
            {productionAggregation ? (
              <SupportingTertiaryBlock item={productionAggregation} />
            ) : null}

            {integratedSurveillance ? (
              <SupportingPrimaryBlock item={integratedSurveillance} />
            ) : null}
          </div>
        </div>
      </section>

      {/* Data sources */}
      <section
        id="data-sources"
        aria-labelledby="data-sources-heading"
        className={cn(sectionAnchor, "rule-bottom")}
      >
        <div className="container-site section-y">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
            <SectionHeading
              label={dataSources.label}
              title={dataSources.title}
              description={dataSources.description}
              titleId="data-sources-heading"
            />

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-label">Supported formats</p>
                <ul className="flex flex-wrap gap-2">
                  {dataSources.formats.map((format) => (
                    <li
                      key={format}
                      className="border border-border-subtle px-3 py-1.5 font-mono text-xs uppercase tracking-wide text-data"
                    >
                      {format}
                    </li>
                  ))}
                </ul>
              </div>
              {dataSources.parameters ? (
                <div className="flex flex-col gap-4 border-t border-border-subtle pt-8">
                  <p className="text-label">Typical parameter context</p>
                  <ul className="flex flex-col gap-2">
                    {dataSources.parameters.map((parameter) => (
                      <li
                        key={parameter}
                        className="text-body text-sm leading-relaxed"
                      >
                        {parameter}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* Alerts and reporting */}
      <section
        id="alerts-reporting"
        aria-labelledby="alerts-reporting-heading"
        className={cn(sectionAnchor, "rule-bottom bg-surface")}
      >
        <div className="container-site section-y">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <SectionHeading
              label={alertsReporting.label}
              title={alertsReporting.title}
              description={alertsReporting.description}
              titleId="alerts-reporting-heading"
            />

            <ul className="flex flex-col gap-0">
              {alertsReporting.capabilities.map((capability, index) => (
                <li
                  key={capability}
                  className="flex gap-4 border-t border-border-subtle py-5 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-data tabular-nums"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-body text-sm leading-relaxed">
                    {capability}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section
        id="methodology"
        aria-labelledby="methodology-heading"
        className={cn(sectionAnchor, "rule-bottom")}
      >
        <div className="container-site section-y">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <header className="flex flex-col gap-4">
              <EngineeringLabel>{methodology.label}</EngineeringLabel>
              <h2 id="methodology-heading" className="text-h1 text-balance">
                {methodology.title}
              </h2>
              <div className="flex flex-col gap-4">
                {methodology.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-body-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </header>

            <ul className="flex flex-col gap-0">
              {methodology.principles.map((principle, index) => (
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
