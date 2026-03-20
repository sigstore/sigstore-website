import type { Metadata } from "next";
import type { ContentDocument } from "./content";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sigstore.dev";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Sigstore";

export function buildPageMetadata(
  page: ContentDocument,
  pagePath: string
): Metadata {
  return {
    title: page.title as string,
    description:
      "Sigstore: sign, verify, and protect your software.",
    openGraph: {
      title: siteName,
      description:
        "sign. verify. protect. Make sure your software is what it claims to be.",
      type: "website",
      images: [{ url: `${siteUrl}/img/sigstore_logo.png` }],
      siteName,
    },
    twitter: {
      card: "summary",
      title: siteName,
      description:
        "sign. verify. protect. Make sure your software is what it claims to be.",
      images: ["/img/sigstore_logo.png"],
    },
    alternates: {
      canonical: `${siteUrl}${pagePath}`,
    },
    other: {
      "format-detection": "telephone=no",
    },
  };
}

export function buildJsonLd(pagePath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}${pagePath}`,
    },
    headline: "Sigstore",
    url: `${siteUrl}${pagePath}`,
  };
}
