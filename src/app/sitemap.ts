import type { MetadataRoute } from "next";
import { getDocSlugs } from "@/lib/content";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sigstore.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${siteUrl}/`, lastModified: new Date(), priority: 1.0 },
    {
      url: `${siteUrl}/community/`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${siteUrl}/how-it-works/`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${siteUrl}/trust-security/`,
      lastModified: new Date(),
      priority: 0.8,
    },
    { url: `${siteUrl}/docs/`, lastModified: new Date(), priority: 0.7 },
  ];

  const docSlugs = getDocSlugs();
  const docPages = docSlugs.map((slug) => ({
    url: `${siteUrl}/docs/${slug}/`,
    lastModified: new Date(),
    priority: 0.6,
  }));

  return [...staticPages, ...docPages];
}
