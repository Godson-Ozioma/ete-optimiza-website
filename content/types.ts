export type NavItem = {
  label: string;
  href: string;
};

export type CtaLink = {
  label: string;
  href: string;
};

export type ContactInfo = {
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
  };
  hours: string;
};

export type LeadershipMember = {
  name: string;
  title: string;
};

export type ProductModule = {
  id: string;
  name: string;
  summary: string;
};

export type ServiceItem = {
  id: string;
  name: string;
  summary: string;
};

export type ProjectEntry = {
  year: number;
  name: string;
  summary: string;
  status: "current" | "predecessor";
};

export type ProductVisualAsset = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export type ExceptionStatus = "critical" | "warning" | "normal" | "undefined";

export type WorkflowStep = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export type CapabilityHighlight = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  visual: ProductVisualAsset;
  layout: "visual-left" | "visual-right";
};

export type XbmModuleEntry = ProductModule & {
  anchor: string;
};

export type XbmExceptionState = {
  status: ExceptionStatus;
  description: string;
};

export type XbmCapabilitySection = {
  id: string;
  anchor: string;
  title: string;
  summary: string;
  paragraphs: readonly string[];
  points?: readonly string[];
  visual?: ProductVisualAsset;
  layout: "visual-left" | "visual-right" | "text-only";
};

export type XbmSupportingCapability = {
  id: string;
  anchor: string;
  title: string;
  summary: string;
  detail: string;
  points?: readonly string[];
  visual?: ProductVisualAsset;
  emphasis: "primary" | "secondary" | "tertiary";
};

export type XbmContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    visual: ProductVisualAsset;
  };
  moduleIndex: {
    label: string;
    title: string;
    description: string;
    modules: readonly XbmModuleEntry[];
  };
  workflow: {
    label: string;
    title: string;
    description: string;
    sequence: string;
    steps: readonly WorkflowStep[];
  };
  exceptionStates: {
    label: string;
    title: string;
    description: string;
    states: readonly XbmExceptionState[];
  };
  primaryCapabilities: {
    label: string;
    title: string;
    description: string;
    items: readonly XbmCapabilitySection[];
  };
  supportingCapabilities: {
    label: string;
    title: string;
    description: string;
    items: readonly XbmSupportingCapability[];
  };
  dataSources: {
    label: string;
    title: string;
    description: string;
    formats: readonly string[];
    parameters?: readonly string[];
  };
  alertsReporting: {
    label: string;
    title: string;
    description: string;
    capabilities: readonly string[];
  };
  methodology: {
    label: string;
    title: string;
    paragraphs: readonly string[];
    principles: readonly string[];
  };
  pilotCta: {
    title: string;
    description: string;
    primary: CtaLink;
    secondary: CtaLink;
  };
};

export type EngagementPhase = {
  id: string;
  label: string;
  title: string;
  description: string;
};

export type ServiceArea = {
  id: string;
  name: string;
  summary: string;
  detail: string;
  themes?: readonly string[];
};

export type ServicesContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  collaboration: {
    label: string;
    title: string;
    paragraphs: readonly string[];
    principles: readonly string[];
  };
  engagement: {
    label: string;
    title: string;
    description: string;
    phases: readonly EngagementPhase[];
  };
  domains: {
    label: string;
    title: string;
    description: string;
    items: readonly ServiceArea[];
  };
  platform: {
    label: string;
    title: string;
    description: string;
    link: CtaLink;
    note: string;
  };
  contextualVisual?: ProductVisualAsset;
  pilotCta: {
    title: string;
    description: string;
    primary: CtaLink;
    secondary: CtaLink;
  };
};

export type AboutContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  positioning: {
    label: string;
    title: string;
    paragraphs: readonly string[];
  };
  missionVision: {
    mission: { label: string; text: string };
    vision: { label: string; text: string };
  };
  company: {
    founded: number;
    location: string;
    industry: string;
    expertiseNote: string;
  };
  values: {
    label: string;
    title: string;
    sequence: readonly string[];
    description: string;
  };
  leadership: {
    label: string;
    title: string;
    description: string;
    members: readonly LeadershipMember[];
  };
  collaboration: {
    label: string;
    title: string;
    paragraphs: readonly string[];
  };
  contactCta: {
    title: string;
    description: string;
    primary: CtaLink;
    secondary: CtaLink;
  };
};

export type ProjectTimelineEntry = ProjectEntry & {
  id: string;
  role: string;
  features?: readonly string[];
  link?: CtaLink;
};

export type ProjectsContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  evolution: {
    label: string;
    title: string;
    description: string;
  };
  timeline: readonly ProjectTimelineEntry[];
  contactCta: {
    title: string;
    description: string;
    primary: CtaLink;
    secondary: CtaLink;
  };
};

export type HomeContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    visual: ProductVisualAsset;
  };
  problem: {
    label: string;
    title: string;
    paragraphs: readonly string[];
    points: readonly string[];
  };
  workflow: {
    label: string;
    title: string;
    description: string;
    sequence: string;
    steps: readonly WorkflowStep[];
    engineerNote: string;
  };
  platform: {
    label: string;
    title: string;
    description: string;
    link: CtaLink;
    visual: ProductVisualAsset;
  };
  capabilities: {
    label: string;
    title: string;
    description: string;
    items: readonly CapabilityHighlight[];
  };
  credibility: {
    label: string;
    title: string;
    paragraphs: readonly string[];
    principles: readonly string[];
  };
  services: {
    label: string;
    title: string;
    description: string;
    expertise: string;
    links: readonly CtaLink[];
  };
  projects: {
    label: string;
    title: string;
    description: string;
    entries: readonly ProjectEntry[];
  };
  pilotCta: {
    title: string;
    description: string;
    primary: CtaLink;
    secondary: CtaLink;
  };
};
