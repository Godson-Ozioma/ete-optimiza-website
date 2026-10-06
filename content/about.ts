import { companyValues, leadership } from "./site";
import type { AboutContent } from "./types";

export const aboutImages = {
  hero: {
    src: "/assets/about/about-engineering-hero.png",
    alt: "Illustrative scene of engineers reviewing production data in an operations room",
  },
  mission: {
    src: "/assets/about/mission-well-performance.png",
    alt: "Illustrative scene of engineers examining well-performance data beside wellhead equipment",
  },
  promises: {
    src: "/assets/about/promises-engineering-review.png",
    alt: "Illustrative scene of an engineering review of reports and production data",
  },
} as const;

export const about = {
  meta: {
    title: "About",
    description:
      "ETE-Optimiza is a technology firm established in 2020 in Richmond, Texas, working on upstream production optimization.",
  },
  hero: {
    title: "About ETE-Optimiza",
    image: aboutImages.hero,
    primary: {
      label: "Explore Services",
      href: "/services",
    },
    secondary: {
      label: "Contact Us",
      href: "/contact",
    },
  },
  mission: {
    index: "01",
    title: "Our Mission",
    statement:
      "Our mission is to deliver optimization solutions that maximize performance and efficiency in the upstream oil and gas sector.",
    paragraphs: [
      "As a cutting-edge technology company, we draw on more than thirty years of experience and pioneering technology to streamline production processes.",
      "We are committed to equipping our clients with innovative strategies that drive operational excellence and foster a culture of safety.",
      "Through our deep expertise and unwavering dedication, we empower clients with the tools and insights necessary to achieve their objectives.",
    ],
    image: aboutImages.mission,
  },
  promises: {
    eyebrow: "Production Optimization by ETE-Optimiza",
    title: "We Keep Our Promises",
    paragraphs: [
      "At ETE-Optimiza, we don't just make promises; we deliver results that reflect our dedication and hard work.",
      "Our commitment to excellence drives us to provide exceptional services that help our clients achieve their goals.",
      "With a skilled team of experts in petroleum engineering and production technology and a proven track record of success, we support our clients at every stage, ensuring that our actions align with our commitments. We take pride in our integrity, transparency, and the strong relationships we build, proving that when it comes to your success, we truly follow through.",
    ],
    image: aboutImages.promises,
    facts: [
      { term: "Founded", detail: "2020" },
      { term: "Based", detail: "Richmond, Texas" },
    ],
  },
  vision: {
    title: "Our Vision",
    paragraphs: [
      "We aspire to be recognized as the preeminent authority in optimization solutions within the upstream oil and gas sector.",
      "By placing a strong emphasis on innovation, efficiency, and execution, we are committed to refining our methodologies and enabling our clients to achieve exceptional levels of performance and resilience in the dynamic energy landscape.",
      "Our overarching objective is to foster a sustainable future while delivering exceptional value to our clients, employees, and the broader community.",
    ],
  },
  company: {
    title: "Our Company",
    paragraphs: [
      "ETE-Optimiza is a technology firm that was established in 2020. We specialize in production optimization technologies specifically designed for the oil, gas, and renewable energy sectors. Our solutions are tailored to meet the unique needs of our clients.",
      "Our product offerings include tools for production optimization, collaboration, automation of pressure transient analysis, production forecasting, and well engineering reporting.",
      "We create customized tools that automate workflows for petroleum and production engineers, helping to unlock well potential and improve production efficiency.",
    ],
    offerings: [
      "Production optimization",
      "Collaboration",
      "Pressure transient analysis automation",
      "Production forecasting",
      "Well engineering reporting",
      "Engineering workflow automation",
    ],
    image: {
      src: "/assets/home/plan-field.jpg",
      alt: "Production facility viewed from above.",
    },
  },
  values: {
    title: "Company Values",
    sequence: companyValues,
  },
  leadership: {
    title: "Our Leadership Team",
    portraitNote: "Portrait forthcoming",
    members: leadership,
  },
  closing: {
    title: "Let’s discuss your project",
    cta: {
      label: "Contact Us",
      href: "/contact",
    },
  },
} satisfies AboutContent;
