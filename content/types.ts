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

export type XbmModule = {
  id: string;
  anchor: string;
  name: string;
  summary: string;
};

export type XbmField = {
  name: string;
  unit?: string;
};

export type XbmFieldGroup = {
  id: string;
  title: string;
  fields: readonly XbmField[];
};

export type XbmContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    name: string;
    statement: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    image: PageImage;
  };
  modules: readonly XbmModule[];
  dashboard: {
    id: string;
    title: string;
    paragraphs: readonly string[];
    features: readonly string[];
  };
  wellData: {
    id: string;
    title: string;
    intro: string;
    date: XbmField;
    groups: readonly XbmFieldGroup[];
    imports: {
      title: string;
      paragraphs: readonly string[];
      formats: readonly string[];
    };
  };
  envelope: {
    id: string;
    title: string;
    paragraphs: readonly string[];
    parameters: readonly string[];
    image: PageImage;
  };
  temperature: {
    id: string;
    title: string;
    paragraphs: readonly string[];
    flow: readonly string[];
    image: PageImage;
  };
  drawdown: {
    id: string;
    title: string;
    paragraphs: readonly string[];
    image: PageImage;
  };
  flux: {
    id: string;
    title: string;
    paragraphs: readonly string[];
  };
  pta: {
    id: string;
    title: string;
    paragraphs: readonly string[];
    objectives: readonly string[];
  };
  pseudoSkin: {
    id: string;
    title: string;
    paragraphs: readonly string[];
    windows: readonly string[];
  };
  pilot: {
    title: string;
    description: string;
    primary: CtaLink;
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

export type PageImage = {
  src: string;
  alt: string;
};

export type ServiceOffering = {
  id: string;
  title: string;
  label?: string;
  paragraphs: readonly string[];
  points?: readonly string[];
  parameters?: readonly string[];
  image?: PageImage;
  cta?: CtaLink;
};

export type ServicesContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    lede: string;
    body: string;
    cta: CtaLink;
    image: PageImage;
  };
  offerings: readonly ServiceOffering[];
};

export type AboutContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    support: string;
    body: string;
    image: PageImage;
  };
  mission: {
    title: string;
    text: string;
  };
  vision: {
    title: string;
    text: string;
  };
  company: {
    title: string;
    paragraphs: readonly string[];
    offerings: readonly string[];
    link: CtaLink;
  };
  values: {
    title: string;
    sequence: readonly string[];
  };
  leadership: {
    title: string;
    members: readonly LeadershipMember[];
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
    title: string;
    sentence: string;
    image: PageImage;
  };
  poStudio: {
    year: string;
    name: string;
    description: string;
    features: readonly string[];
    useCases: readonly string[];
    image: PageImage;
  };
  flowIq: {
    year: string;
    name: string;
    description: string;
    link: CtaLink;
    image: PageImage;
  };
  optimech: {
    name: string;
    status: string;
    image: PageImage;
  };
};

export type HomeImage = {
  src: string;
  alt: string;
};

export type HomeServiceLink = {
  name: string;
  href: string;
  image?: HomeImage;
};

export type HomeProcessPhase = {
  id: string;
  title: string;
  points: readonly string[];
  image: HomeImage;
};

export type HomeProject = {
  id: string;
  year?: string;
  name: string;
  description?: string;
  features?: readonly string[];
  useCases?: readonly string[];
  status?: string;
  href?: string;
  image?: HomeImage;
};

export type HomeContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    cta: CtaLink;
    image: HomeImage;
  };
  services: {
    title: string;
    phrases: readonly string[];
    items: readonly HomeServiceLink[];
  };
  xbm: {
    title: string;
    description: string;
    cta: CtaLink;
    image: HomeImage;
  };
  who: {
    title: string;
    body: string;
    facts: readonly string[];
    cta: CtaLink;
    image: HomeImage;
  };
  process: {
    phases: readonly HomeProcessPhase[];
  };
  testimonial: {
    title: string;
    quote: string;
    attribution: string;
  };
  projects: {
    title: string;
    items: readonly HomeProject[];
  };
  contact: {
    title: string;
    image: HomeImage;
  };
};
