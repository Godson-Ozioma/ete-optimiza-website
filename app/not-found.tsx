import Link from "next/link";

import { EngineeringLabel } from "@/components/engineering-label";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="container-site section-y flex max-w-2xl flex-col gap-6">
        <EngineeringLabel as="p">404</EngineeringLabel>
        <h1 className="text-display text-balance">
          This page is not in the current site map.
        </h1>
        <p className="text-body-muted">
          The address may be incorrect, or the page may have moved. Return to
          the homepage or open the XBM platform overview.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button render={<Link href="/" />} nativeButton={false}>
            Home
          </Button>
          <Button
            variant="outline"
            render={<Link href="/xbm" />}
            nativeButton={false}
          >
            Explore XBM
          </Button>
        </div>
      </section>
    </main>
  );
}
