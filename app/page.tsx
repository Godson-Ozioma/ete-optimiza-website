import type { Metadata } from "next";

import { ContactSplit } from "@/components/home/contact-split";
import { Hero } from "@/components/home/hero";
import { ProcessPanels } from "@/components/home/process-panels";
import { ProjectsCarousel } from "@/components/home/projects-carousel";
import { ServicesNav } from "@/components/home/services-nav";
import { Testimonial } from "@/components/home/testimonial";
import { WhoWeAre } from "@/components/home/who-we-are";
import { XbmTeaser } from "@/components/home/xbm-teaser";
import { home } from "@/content/home";
import { contact, site } from "@/content/site";

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
  return (
    <main className="home-canvas flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Hero />
      <ServicesNav />
      <XbmTeaser />
      <WhoWeAre />
      <ProcessPanels />
      <Testimonial />
      <ProjectsCarousel />
      <ContactSplit />
    </main>
  );
}
