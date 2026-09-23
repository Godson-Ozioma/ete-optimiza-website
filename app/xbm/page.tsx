import type { Metadata } from "next";

import { XbmView } from "@/components/xbm/xbm-view";
import { site } from "@/content/site";
import { xbm } from "@/content/xbm";

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
  name: "Exception-Based Monitoring (XBM)",
  alternateName: "XBM",
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

export default function XbmPage() {
  return (
    <main className="xbm-canvas flex flex-1 flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <XbmView />
    </main>
  );
}
