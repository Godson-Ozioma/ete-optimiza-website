import type { MetadataRoute } from "next";

import { site } from "@/content/site";

const routes = [
  "/",
  "/xbm",
  "/services",
  "/about",
  "/projects",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-09-21"),
    changeFrequency: path === "/" || path === "/xbm" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/xbm" ? 0.9 : 0.6,
  }));
}
