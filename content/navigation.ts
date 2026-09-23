import type { CtaLink, NavItem } from "./types";

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "XBM", href: "/xbm" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export const primaryCta: CtaLink = {
  label: "Contact Us",
  href: "/#contact",
};
