"use client";

import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";

interface TwoColumnBannerProps {
  header?: string;
  text?: string;
  imageAsset?: string;
  alignment?: string;
  bgColour?: string;
  card?: Record<string, unknown>;
  slug?: string;
}

function headerTextClass(bgColour?: string): string {
  if (bgColour === "bg-purple-dark") return "text-white";
  if (bgColour === "bg-pastel-blue") return "text-purple-dark";
  return "text-gray-dark";
}

export function TwoColumnBanner({
  header,
  text,
  imageAsset,
  alignment,
  bgColour,
  card,
}: TwoColumnBannerProps) {
  const animRef1 = useAnimateOnScroll();
  const animRef2 = useAnimateOnScroll();

  const isTextRight = alignment === "textRight";

  return (
    <section
      className={`py-80 md:py-160 ${bgColour || ""}`}
      data-header-text={headerTextClass(bgColour)}
    >
      <div
        className={`md:flex justify-between container inner ${
          !isTextRight ? "items-center" : "items-start"
        }`}
      >
        <div
          ref={animRef1}
          className="w-full md:w-1/2 delay-step_1 md:mr-80 md:order-1 order-2"
        >
          <h2
            className={`text-24 leading-23 md:leading-32 mb-32 ${
              !bgColour ? "text-purple-dark" : "text-white"
            }`}
          >
            {header}
          </h2>
          {!isTextRight && text && (
            <div
              className={`mt-8 md:block hidden ${
                !bgColour ? "text-purple-dark" : "text-white"
              }`}
            >
              <MarkdownRenderer content={text} />
            </div>
          )}
          {!isTextRight && imageAsset && (
            <div className="block md:hidden">
              <img alt={`${header} image`} src={imageAsset} />
            </div>
          )}
        </div>
        {!card && (
          <div
            ref={animRef2}
            className="w-full md:w-1/2 delay-step_2 mt-32 md:mt-0 md:order-2"
          >
            {!isTextRight && imageAsset && (
              <div className="md:block hidden">
                <img alt={`${header} image`} src={imageAsset} />
              </div>
            )}
            {isTextRight && text && (
              <MarkdownRenderer content={text} />
            )}
            {!isTextRight && text && (
              <div
                className={`mt-8 block md:hidden ${
                  !bgColour ? "text-purple-dark" : "text-white"
                }`}
              >
                <MarkdownRenderer content={text} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
