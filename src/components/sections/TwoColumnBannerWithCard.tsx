"use client";

import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";

interface ColumnData {
  header: string;
  text: string;
  imageAsset?: string;
}

interface TwoColumnBannerWithCardProps {
  header?: string;
  text?: string;
  textBottom?: string;
  imageAsset?: string;
  alignment?: string;
  bgColour?: string;
  card?: Record<string, unknown>;
  cardTitle?: string;
  cardText?: string;
  column1?: ColumnData;
  column2?: ColumnData;
  column3?: ColumnData;
  slug?: string;
}

function headerTextClass(bgColour?: string): string {
  if (bgColour === "bg-purple-dark") return "text-white";
  if (bgColour === "bg-pastel-blue") return "text-purple-dark";
  return "text-gray-dark";
}

export function TwoColumnBannerWithCard({
  header,
  text,
  textBottom,
  imageAsset,
  alignment,
  bgColour,
  card,
  cardTitle,
  cardText,
  column1,
  column2,
  column3,
}: TwoColumnBannerWithCardProps) {
  const animRef1 = useAnimateOnScroll();
  const animRef2 = useAnimateOnScroll();

  const isTextRight = alignment === "textRight";

  return (
    <section
      className={`py-64 md:py-160 ${bgColour || ""}`}
      data-header-text={headerTextClass(bgColour)}
    >
      <div
        className={`md:flex justify-between container inner ${
          !isTextRight ? "items-start" : "items-start"
        }`}
      >
        <div ref={animRef1} className="w-full lg:w-1/2 delay-step_1 md:mr-80">
          <h2 className="text-36 leading-32 mb-64 md:mb-32 text-purple-dark">
            {header}
          </h2>
          {!isTextRight && text && (
            <div className={`md:mt-8 mb-64 md:mb-32 markdown ${!bgColour ? "text-purple-dark" : "text-gray-dark"}`}>
              <MarkdownRenderer content={text} />
              {textBottom && <MarkdownRenderer content={textBottom} />}
            </div>
          )}
        </div>
        {!card && (
          <div ref={animRef2} className="w-full lg:w-1/2 delay-step_5">
            {!isTextRight && imageAsset ? (
              <img src={imageAsset} alt="Right image for text column" />
            ) : (
              <>
                {text && (
                  <h3 className="text-24 leading-32 text-purple-dark mb-24">
                    {text}
                  </h3>
                )}
                {textBottom && (
                  <h3 className="text-24 leading-32 text-purple-dark">
                    {textBottom}
                  </h3>
                )}
              </>
            )}
          </div>
        )}
      </div>
      <div className="container container--card">
        <div
          className={`rounded-xl md:bg-white p-0 md:p-32 lg:p-64 mt-64 md:mt-128 w-full mx-auto ${
            bgColour !== "bg-white" ? "px-24" : "px-0"
          }`}
        >
          <div
            className={`w-full lg:w-1/2 p-24 md:p-0 bg-white md:bg-transparent md:rounded-none rounded-xl text-purple-dark ${
              cardText ? "" : "pb-0"
            }`}
          >
            <h4 className="text-25 md:text-36 leading-30 md:leading-44 mb-28">
              {cardTitle}
            </h4>
            {cardText && (
              <div className="text-gray-dark">
                <MarkdownRenderer content={cardText} />
              </div>
            )}
          </div>
          <div className="md:flex items-start justify-between md:-ml-10 md:-mr-10 mt-32 md:mt-64">
            {[column1, column2, column3].map(
              (col, i) =>
                col && (
                  <div
                    key={i}
                    className="mb-32 md:mb-16 w-full md:w-1/3 md:px-10 p-24 md:p-0 bg-white md:bg-transparent md:rounded-none rounded-xl md:max-w-315"
                  >
                    {col.imageAsset && (
                      <img
                        src={col.imageAsset}
                        alt={`${col.header} image`}
                        className="mb-24"
                      />
                    )}
                    <h4 className="mb-24 text-19 md:text-24 leading-23 md:leading-32 text-purple-dark">
                      {col.header}
                    </h4>
                    <p className="text-gray-dark">{col.text}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
