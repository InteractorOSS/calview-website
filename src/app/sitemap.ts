import type { MetadataRoute } from "next";
import { services } from "@/lib/content/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/about-us",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/managed-software",
    "/testimonials",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/managed-software" ? 0.9 : 0.7,
  }));
}
