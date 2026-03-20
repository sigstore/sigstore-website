import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";

interface TwoColumnAnnouncementProps {
  header?: string;
  text?: string;
  imageAsset?: string;
  alignment?: string;
  bgColour?: string;
  card?: Record<string, unknown>;
  link?: string;
  slug?: string;
}

function headerTextClass(bgColour?: string): string {
  if (bgColour === "bg-purple-dark") return "text-white";
  if (bgColour === "bg-pastel-blue") return "text-purple-dark";
  return "text-gray-dark";
}

export function TwoColumnAnnouncement({
  header,
  text,
  imageAsset,
  alignment,
  bgColour,
  card,
  link,
}: TwoColumnAnnouncementProps) {
  const isTextRight = alignment === "textRight";

  return (
    <section
      className={`py-40 md:py-80 ${bgColour || ""}`}
      data-header-text={headerTextClass(bgColour)}
    >
      <div
        className={`md:flex justify-between container inner ${
          !isTextRight ? "items-center" : "items-start"
        }`}
      >
        <div className="w-full md:w-1/2 delay-step_1 md:mr-80 md:order-1 order-2">
          <h1 className="text-24 leading-23 md:leading-32 mb-32 text-purple-dark">
            {header}
          </h1>
          {!isTextRight && text && (
            <div className="mt-8 md:block hidden text-purple-dark">
              <MarkdownRenderer content={text} />
            </div>
          )}
          {!isTextRight && imageAsset && (
            <div className="block md:hidden">
              <a href={link}>
                <img alt={`${header} image`} src={imageAsset} />
              </a>
            </div>
          )}
        </div>
        {!card && (
          <div className="w-full md:w-1/2 delay-step_2 mt-32 md:mt-0 md:order-2">
            {!isTextRight && imageAsset && (
              <div className="md:block hidden">
                <a href={link}>
                  <img alt={`${header} image`} src={imageAsset} />
                </a>
              </div>
            )}
            {isTextRight && text && (
              <MarkdownRenderer content={text} />
            )}
            {!isTextRight && text && (
              <div className="mt-8 block md:hidden text-purple-dark">
                <MarkdownRenderer content={text} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
