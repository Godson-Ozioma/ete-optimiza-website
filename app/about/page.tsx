import type { Metadata } from "next";

import { AboutView } from "@/components/about/about-view";
import { about } from "@/content/about";
import { site } from "@/content/site";

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
  return (
    <main className="about-page flex flex-1 flex-col">
      <AboutView />
    </main>
  );
}
