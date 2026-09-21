import { companyValues, contact, leadership, mission, site, vision } from "./site";
import type { AboutContent } from "./types";

export const about = {
  meta: {
    title: "About",
    description:
      "Founded in 2020 in Richmond, Texas, ETE-Optimiza combines petroleum-engineering expertise with software development for upstream production optimization and well surveillance.",
  },
  hero: {
    eyebrow: "Company",
    title: "An engineering technology company for upstream production optimization.",
    description:
      "ETE-Optimiza develops software and engineering solutions intended to improve well surveillance, production optimization, engineering workflows, and operational decision support in upstream oil and gas.",
  },
  positioning: {
    label: "Who we are",
    title: "Petroleum engineering expertise paired with software development",
    paragraphs: [
      "ETE-Optimiza is an upstream oil and gas production optimization technology and engineering services company. The team combines petroleum-engineering expertise with software development and automation to deliver tools and insights that support better engineering decisions.",
      "Safety, efficiency, innovation, and engineering judgement remain central to how the company operates. ETE-Optimiza seeks to help clients achieve stronger operational performance while contributing to a sustainable energy future.",
    ],
  },
  missionVision: {
    mission: {
      label: "Mission",
      text: mission,
    },
    vision: {
      label: "Vision",
      text: vision,
    },
  },
  company: {
    founded: site.founded,
    location: site.location,
    industry: site.industry,
    expertiseNote:
      "The team draws on more than 30 years of combined industry experience in petroleum engineering, production optimization, and software development.",
  },
  values: {
    label: "Values",
    title: "Honesty → Integrity → Innovation → Collaboration",
    sequence: companyValues,
    description:
      "These values guide how ETE-Optimiza builds software, engages with engineering teams, and approaches production optimization work.",
  },
  leadership: {
    label: "Leadership",
    title: "Founding team",
    description: "ETE-Optimiza is led by its co-founders.",
    members: leadership,
  },
  collaboration: {
    label: "Engineering judgement",
    title: "Collaboration built into how we work",
    paragraphs: [
      "ETE-Optimiza develops XBM as an engineering workflow and surveillance platform—not a system that replaces petroleum engineers. Screening outputs, exception alerts, and recommendations are presented for engineer review; operational decisions remain with qualified engineering staff.",
      "The company emphasizes knowledge transfer between its engineers and client teams, reducing repetitive surveillance work while preserving engineering judgement in every engagement.",
    ],
  },
  contactCta: {
    title: "Get in touch",
    description:
      "Reach ETE-Optimiza to discuss production optimization, engineering services, or XBM collaboration. The team is available Monday–Friday, 8:00 am–5:00 pm CST.",
    primary: {
      label: "Contact Us",
      href: "/contact",
    },
    secondary: {
      label: "Request a Pilot",
      href: "/contact?intent=pilot",
    },
  },
  contact,
} satisfies AboutContent & { readonly contact: typeof contact };
