import type { CtaLink, NavItem } from "./types";

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "XBM", href: "/xbm" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const primaryCta: CtaLink = {
  label: "Request a Pilot",
  href: "/contact?intent=pilot",
};
