import type { Metadata } from "next";

import { site } from "@/content/site";
import { utilityTools } from "@/content/utility-tools";
import { UtilityToolsView } from "@/components/utility-tools/utility-tools-view";

export const metadata: Metadata = {
  title: utilityTools.meta.title,
  description: utilityTools.meta.description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${utilityTools.meta.title} | ${site.name}`,
    description: utilityTools.meta.description,
  },
};

export default function UtilityToolsPage() {
  return (
    <main className="utility-canvas flex flex-1 flex-col">
      <UtilityToolsView />
    </main>
  );
}
