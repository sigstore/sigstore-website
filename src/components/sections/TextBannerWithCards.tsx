"use client";

import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";

interface CardData {
  header: string;
  text: string;
  imageAsset?: string;
  ctaLink?: string;
  ctaText?: string;
}

interface TextBannerWithCardsProps {
  header?: string;
  text?: string;
  bgColour?: string;
  textAlign?: string;
  textColour?: string;
  showSupportedBy?: boolean;
  isScreenHeight?: boolean;
  card1?: CardData;
  card2?: CardData;
  slug?: string;
}

function headerTextClass(bgColour?: string): string {
  if (bgColour === "bg-purple-dark") return "text-white";
  if (bgColour === "bg-pastel-blue") return "text-purple-dark";
  return "text-gray-dark";
}

function WhiteExternalLinkIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 3H21V9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 14L21 3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function TextBannerWithCards({
  header,
  text,
  bgColour,
  textAlign,
  textColour,
  isScreenHeight = true,
  card1,
  card2,
  slug,
}: TextBannerWithCardsProps) {
  const animRef1 = useAnimateOnScroll();
  const animRef2 = useAnimateOnScroll();
  const animRef3 = useAnimateOnScroll();

  const isTrustSecurity = slug === "trust-security";
  const cardPadding = isTrustSecurity ? "px-15" : "px-30";

  return (
    <section
      className={`text_banner md:flex justify-center items-center ${bgColour || ""} ${
        isScreenHeight ? "min-h-screen md:flex-col" : "h-auto py-128"
      }`}
      data-header-text={headerTextClass(bgColour)}
    >
      <div className="flex items-center justify-center pt-216">
        <div
          className={`container inner relative ${
            textAlign === "center" ? "text-left md:text-center" : "text-left"
          }`}
        >
          {header && (
            <h1
              ref={animRef1}
              className={`delay-step_1 mb-30 text-gray-dark ${textColour || ""}`}
            >
              {header}
            </h1>
          )}
          {text && (
            <div
              ref={animRef2}
              className={`subheading text-24 delay-step_3 mb-26 text-gray-dark ${
                textAlign === "center"
                  ? "md:max-w-690 w-full mx-auto"
                  : ""
              } ${textColour || ""}`}
            >
              <MarkdownRenderer content={text} />
            </div>
          )}
        </div>
      </div>
      <div className="container container--card">
        <div className="p-0 md:p-32 lg:px-128 lg:pt-164 w-full mx-auto px-24 md:px-0">
          <div
            ref={animRef3}
            className="md:flex items-start justify-between md:-ml-30 md:-mr-30 mt-32 md:mt-64 delay-step_5"
          >
            {card1 && (
              <div className={`w-full md:w-1/2 ${cardPadding}`}>
                <div className="mb-32 md:mb-16 w-full p-32 md:p-32 rounded-xl border border-white text-white md:min-h-320">
                  {card1.imageAsset && (
                    <img
                      src={card1.imageAsset}
                      alt={`${card1.header} image`}
                      className="mb-24"
                    />
                  )}
                  <h4 className="mb-24 text-24">{card1.header}</h4>
                  <div className="markdown">
                    <MarkdownRenderer content={card1.text} />
                  </div>
                  {card1.ctaLink && (
                    <a
                      className="pt-64 flex items-center h text-12 md:text-16 inline--button-white"
                      href={card1.ctaLink}
                    >
                      {card1.ctaText}
                      <span className="ml-6">
                        <WhiteExternalLinkIcon />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            )}
            {card2 && (
              <div className={`w-full md:w-1/2 ${cardPadding}`}>
                <div className="mb-32 md:mb-16 w-full p-32 md:p-32 rounded-xl border border-white text-white md:min-h-320">
                  {card2.imageAsset && (
                    <img
                      src={card2.imageAsset}
                      alt={`${card2.header} image`}
                      className="mb-24"
                    />
                  )}
                  <h4 className="mb-24 text-24">{card2.header}</h4>
                  <div className="markdown">
                    <MarkdownRenderer content={card2.text} />
                  </div>
                  {card2.ctaLink && (
                    <a
                      className="pt-64 flex items-center h text-12 md:text-16 inline--button-white"
                      href={card2.ctaLink}
                    >
                      {card2.ctaText}
                      <span className="ml-6">
                        <WhiteExternalLinkIcon />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
