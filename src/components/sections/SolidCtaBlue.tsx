import { getJsonContent } from "@/lib/content";

interface CtaData {
  title: string;
  link: string;
  ctaicon?: string;
}

interface SolidCtaBlueProps {
  slug?: string;
}

export function SolidCtaBlue({ slug }: SolidCtaBlueProps) {
  if (!slug) return null;

  let ctaData: CtaData | null = null;
  try {
    ctaData = getJsonContent<CtaData>("ctas", slug);
  } catch {
    return null;
  }

  return (
    <a
      className="button text-white border border-blue-medium bg-blue-medium flex flex-row justify-between items-center"
      href={ctaData.link || "#"}
    >
      {ctaData.ctaicon && (
        <img className="w-[20%] mr-5" src={ctaData.ctaicon} alt="CTA icon" />
      )}
      {ctaData.title}
    </a>
  );
}
