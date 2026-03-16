import type { ComponentType } from "react";
import { TextBanner } from "@/components/sections/TextBanner";
import { TwoColumnBanner } from "@/components/sections/TwoColumnBanner";
import { TwoColumnAnnouncement } from "@/components/sections/TwoColumnAnnouncement";
import { TwoColumnBannerWithCard } from "@/components/sections/TwoColumnBannerWithCard";
import { ThreeColumnTextGrid } from "@/components/sections/ThreeColumnTextGrid";
import { TwoColumnTextGrid } from "@/components/sections/TwoColumnTextGrid";
import { FullWidthTextBanner } from "@/components/sections/FullWidthTextBanner";
import { TextBannerWithCards } from "@/components/sections/TextBannerWithCards";
import { SigstoreDivider } from "@/components/sections/SigstoreDivider";
import { SponsorsList } from "@/components/sections/SponsorsList";
import { SoftwareBehind } from "@/components/sections/SoftwareBehind";
import { StorySoFar } from "@/components/sections/StorySoFar";
import { FaqSection } from "@/components/sections/FaqSection";
import { SigstoreEcosystem } from "@/components/sections/SigstoreEcosystem";
import { NewsEvents } from "@/components/sections/NewsEvents";
import { Carousel } from "@/components/sections/Carousel";
import { SolidCtaBlue } from "@/components/sections/SolidCtaBlue";
import { SolidCtaPurple } from "@/components/sections/SolidCtaPurple";
import { TransparentCta } from "@/components/sections/TransparentCta";

/* eslint-disable @typescript-eslint/no-explicit-any */
const registry: Record<string, ComponentType<any>> = {
  textBanner: TextBanner,
  twoColumnBanner: TwoColumnBanner,
  twoColumnAnnouncement: TwoColumnAnnouncement,
  twoColumnBannerWithCard: TwoColumnBannerWithCard,
  threeColumnTextGrid: ThreeColumnTextGrid,
  twoColumnTextGrid: TwoColumnTextGrid,
  FullWidthTextBanner: FullWidthTextBanner,
  textBannerWithcards: TextBannerWithCards,
  sigstoreDivider: SigstoreDivider,
  sponsorsList: SponsorsList,
  softwareBehind: SoftwareBehind,
  storySoFar: StorySoFar,
  faqSection: FaqSection,
  sigstoreEcosystem: SigstoreEcosystem,
  newsEvents: NewsEvents,
  carousel: Carousel,
  solidCtaBlue: SolidCtaBlue,
  solidCtaPurple: SolidCtaPurple,
  transparentCta: TransparentCta,
};

interface Section {
  type: string;
  [key: string]: unknown;
}

interface SectionRendererProps {
  sections: Section[];
  slug: string;
}

export function SectionRenderer({ sections, slug }: SectionRendererProps) {
  return (
    <>
      {sections.map((section, index) => {
        const { type, ...props } = section;
        const Component = registry[type];

        if (!Component) {
          console.warn(`Unknown section type: ${type}`);
          return null;
        }

        return <Component key={index} {...props} slug={slug} />;
      })}
    </>
  );
}
