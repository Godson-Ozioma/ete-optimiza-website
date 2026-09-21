import type { Metadata } from "next";
import { CtaBand } from "@/components/cta-band";
import { EngineeringLabel } from "@/components/engineering-label";
import { SectionHeading } from "@/components/section-heading";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: about.meta.title,
  description: about.meta.description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${about.meta.title} | ${site.name}`,
    description: about.meta.description,
  },
};

export default function AboutPage() {
  const {
    hero,
    positioning,
    missionVision,
    company,
    values,
    leadership,
    collaboration,
    contactCta,
    contact,
  } = about;

  const fullAddress = `${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.postalCode}`;

  return (
    <main className="flex flex-1 flex-col">
      {/* Hero */}
      <section
        aria-labelledby="about-hero-heading"
        className="rule-bottom engineering-grid"
      >
        <div className="container-site section-y">
          <div className="max-w-3xl flex flex-col gap-6 lg:gap-8">
            <EngineeringLabel as="p">{hero.eyebrow}</EngineeringLabel>
            <h1
              id="about-hero-heading"
              className="text-display max-w-2xl text-balance"
            >
              {hero.title}
            </h1>
            <p className="text-body-muted max-w-xl">{hero.description}</p>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section
        aria-labelledby="positioning-heading"
        className="rule-bottom bg-surface"
      >
        <div className="container-site section-y">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
            <header className="flex flex-col gap-4">
              <EngineeringLabel>{positioning.label}</EngineeringLabel>
              <h2 id="positioning-heading" className="text-h1 text-balance">
                {positioning.title}
              </h2>
              <div className="flex flex-col gap-4">
                {positioning.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)} className="text-body-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </header>

            <dl className="flex flex-col gap-0 border-l border-border-subtle pl-6 lg:pl-8">
              <div className="flex flex-col gap-1 border-b border-border-subtle py-5 first:pt-0">
                <dt className="text-label">Founded</dt>
                <dd className="font-mono text-lg tabular-nums text-foreground">
                  {company.founded}
                </dd>
              </div>
              <div className="flex flex-col gap-1 border-b border-border-subtle py-5">
                <dt className="text-label">Location</dt>
                <dd className="text-body">{company.location}</dd>
                <dd className="text-caption">{fullAddress}</dd>
              </div>
              <div className="flex flex-col gap-1 py-5">
                <dt className="text-label">Industry</dt>
                <dd className="text-body-muted text-sm leading-relaxed">
                  {company.industry}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        aria-labelledby="mission-vision-heading"
        className="rule-bottom"
      >
        <div className="container-site section-y">
          <h2 id="mission-vision-heading" className="sr-only">
            Mission and vision
          </h2>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <article className="flex flex-col gap-4 border-l-2 border-ete-green pl-6">
              <EngineeringLabel>{missionVision.mission.label}</EngineeringLabel>
              <p className="text-body leading-relaxed">
                {missionVision.mission.text}
              </p>
            </article>
            <article className="flex flex-col gap-4 border-l border-border-subtle pl-6">
              <EngineeringLabel>{missionVision.vision.label}</EngineeringLabel>
              <p className="text-body-muted leading-relaxed">
                {missionVision.vision.text}
              </p>
            </article>
          </div>

          <aside className="rule-top mt-12 flex flex-col gap-3 pt-8 sm:flex-row sm:items-start sm:gap-6 lg:mt-16">
            <EngineeringLabel className="shrink-0">
              Combined experience
            </EngineeringLabel>
            <p className="text-body-muted max-w-3xl">{company.expertiseNote}</p>
          </aside>
        </div>
      </section>

      {/* Values */}
      <section
        aria-labelledby="values-heading"
        className="rule-bottom bg-surface"
      >
        <div className="container-site section-y">
          <div className="flex flex-col gap-10 lg:gap-12">
            <SectionHeading
              label={values.label}
              title={values.title}
              description={values.description}
              className="max-w-2xl"
              titleId="values-heading"
            />

            <ol
              aria-label="Company values in sequence"
              className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2"
            >
              {values.sequence.map((value, index) => (
                <li key={value} className="flex items-center gap-2">
                  <span
                    className={cn(
                      "font-mono text-sm uppercase tracking-widest",
                      index === 0 ? "text-ete-green" : "text-foreground",
                    )}
                  >
                    {value}
                  </span>
                  {index < values.sequence.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="hidden font-mono text-data sm:inline"
                    >
                      →
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        aria-labelledby="leadership-heading"
        className="rule-bottom"
      >
        <div className="container-site section-y">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
            <header className="flex flex-col gap-4">
              <EngineeringLabel>{leadership.label}</EngineeringLabel>
              <h2 id="leadership-heading" className="text-h1 text-balance">
                {leadership.title}
              </h2>
              <p className="text-body-muted">{leadership.description}</p>
            </header>

            <ul className="flex flex-col gap-0">
              {leadership.members.map((member) => (
                <li
                  key={member.name}
                  className="flex flex-col gap-1 border-t border-border-subtle py-6 first:border-t-0 first:pt-0"
                >
                  <span className="text-h3">{member.name}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-data">
                    {member.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Collaboration emphasis */}
      <section
        aria-labelledby="collaboration-heading"
        className="rule-bottom bg-surface"
      >
        <div className="container-site section-y">
          <div className="max-w-3xl flex flex-col gap-4">
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
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        aria-labelledby="contact-info-heading"
        className="rule-bottom"
      >
        <div className="container-site section-y">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end lg:gap-16">
            <div className="flex flex-col gap-4">
              <EngineeringLabel>Contact</EngineeringLabel>
              <h2 id="contact-info-heading" className="text-h2">
                {contact.email}
              </h2>
              <p className="text-body-muted">{fullAddress}</p>
              <p className="text-caption">{contact.hours}</p>
            </div>
            <p className="text-caption lg:text-right">
              Use the contact options below to reach the team.
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
