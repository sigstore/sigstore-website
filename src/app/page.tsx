import { getContentBySlug } from "@/lib/content";
import { buildPageMetadata, buildJsonLd } from "@/lib/metadata";
import { SectionRenderer } from "@/components/SectionRenderer";
import { HeaderThemeSetter } from "@/components/HeaderThemeSetter";

export function generateMetadata() {
  const page = getContentBySlug("home");
  return buildPageMetadata(page, "/");
}

interface Section {
  type: string;
  bgColour?: string;
  textColour?: string;
  [key: string]: unknown;
}

export default function HomePage() {
  const page = getContentBySlug("home");
  const sections = (page.sections as Section[]) || [];

  const firstBanner = sections.find((s) => s.type === "textBanner");
  const firstBannerWithCards = sections.find(
    (s) => s.type === "textBannerWithcards"
  );
  const themeSection = firstBanner || firstBannerWithCards;
  const bgColour = themeSection?.bgColour || "";
  const textColour = themeSection?.textColour || "text-gray-dark";

  const jsonLd = buildJsonLd("/");

  return (
    <>
      <HeaderThemeSetter bgColour={bgColour} textColour={textColour} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectionRenderer sections={sections} slug="home" />
    </>
  );
}
