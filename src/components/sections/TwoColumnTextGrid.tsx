"use client";

import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { Card } from "@/components/sections/Card";

interface ColumnData {
  header?: string;
  subHeader?: string;
  text?: string;
  imageAsset?: string;
  bgColour?: string;
  ctaLink?: string;
  ctaText?: string;
  isCardStyle?: boolean;
  [key: string]: unknown;
}

interface TwoColumnTextGridProps {
  header?: string;
  subHeader?: string;
  text?: string;
  column1?: ColumnData;
  column2?: ColumnData;
  slug?: string;
}

export function TwoColumnTextGrid({
  header,
  subHeader,
  text,
  column1,
  column2,
  slug,
}: TwoColumnTextGridProps) {
  const animRef1 = useAnimateOnScroll();
  const animRef2 = useAnimateOnScroll();

  const isTrustSecurity = slug === "trust-security";
  const isCommunity = slug === "community";

  return (
    <section
      className={`py-64 md:py-0 md:px-16 ${
        isTrustSecurity ? "bg-purple-dark" : "bg-white"
      }`}
      data-header-text="text-gray-dark"
    >
      <div className="container">
        <div className="md:max-w-[50%] w-full">
          {header && (
            <h3
              ref={animRef1}
              className={`pb-64 delay-step_1 ${
                isCommunity ? "text-orange-dark" : "text-purple-dark"
              }`}
            >
              {header}
            </h3>
          )}
          {text && (
            <div ref={animRef2} className="delay-step_3 pb-64 text-gray-dark">
              <MarkdownRenderer content={text} />
            </div>
          )}
        </div>
        {subHeader && (
          <h3 className="pb-64 text-white text-center flex-none block w-full">
            {subHeader}
          </h3>
        )}
        <div
          className={`md:flex items-start md:-ml-30 md:-mr-30 md:pr-30 ${
            column2?.header ? "justify-between" : "justify-start"
          }`}
        >
          {column1 && <Card {...column1} slug={slug} />}
          {column2 && <Card {...column2} slug={slug} />}
        </div>
      </div>
    </section>
  );
}
