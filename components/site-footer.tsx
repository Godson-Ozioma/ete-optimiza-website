import Link from "next/link";

import { legal } from "@/content/legal";
import { primaryNav } from "@/content/navigation";
import { contact, site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const addressLine = `${contact.address.street}, ${contact.address.city}, ${contact.address.state} ${contact.address.postalCode}`;

  return (
    <footer className="rule-top mt-auto bg-surface">
      <div className="container-site py-12 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <p className="text-label">Menu</p>
            <ul className="space-y-2">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground focus-ring rounded-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-label">Location</p>
            <address className="not-italic text-sm leading-relaxed text-muted-foreground">
              <p>{site.name}</p>
              <p>{addressLine}</p>
            </address>
          </div>

          <div className="space-y-3">
            <p className="text-label">Hours</p>
            <p className="text-sm text-muted-foreground">{contact.hours}</p>
          </div>

          <div className="space-y-3">
            <p className="text-label">Contact</p>
            <p className="text-sm text-muted-foreground">
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-foreground focus-ring rounded-sm"
              >
                {contact.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border-subtle pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption">
            © {year} {legal.copyright}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link
                href={legal.privacy.href}
                className="text-caption hover:text-foreground focus-ring rounded-sm"
              >
                {legal.privacy.title}
              </Link>
            </li>
            <li>
              <Link
                href={legal.terms.href}
                className="text-caption hover:text-foreground focus-ring rounded-sm"
              >
                {legal.terms.title}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
