import { notFound } from "next/navigation";
import { getContentBySlug } from "@/lib/content";
import { buildPageMetadata, buildJsonLd } from "@/lib/metadata";
import { SectionRenderer } from "@/components/SectionRenderer";
import { HeaderThemeSetter } from "@/components/HeaderThemeSetter";
import type { Metadata } from "next";

const validSlugs = ["community", "how-it-works", "trust-security"];

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!validSlugs.includes(slug)) return {};

  const page = getContentBySlug(slug);
  return buildPageMetadata(page, `/${slug}/`);
}

interface Section {
  type: string;
  bgColour?: string;
  textColour?: string;
  [key: string]: unknown;
}

export default async function SlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  const page = getContentBySlug(slug);
  const sections = (page.sections as Section[]) || [];

  const firstBanner = sections.find((s) => s.type === "textBanner");
  const firstBannerWithCards = sections.find(
    (s) => s.type === "textBannerWithcards"
  );
  const themeSection = firstBanner || firstBannerWithCards;
  const bgColour = themeSection?.bgColour || "";
  const textColour =
    slug === "trust-security" ? "text-white" : "text-gray-dark";

  const jsonLd = buildJsonLd(`/${slug}/`);

  return (
    <>
      <HeaderThemeSetter bgColour={bgColour} textColour={textColour} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectionRenderer sections={sections} slug={slug} />
    </>
  );
}
