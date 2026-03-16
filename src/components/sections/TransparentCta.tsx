import { getJsonContent } from "@/lib/content";

interface CtaData {
  title: string;
  link: string;
  ctaicon?: string;
}

interface TransparentCtaProps {
  slug?: string;
  internalCta?: CtaData | null;
}

export function TransparentCta({ slug, internalCta }: TransparentCtaProps) {
  let ctaData: CtaData | null = internalCta || null;

  if (!ctaData && slug) {
    try {
      ctaData = getJsonContent<CtaData>("ctas", slug);
    } catch {
      return null;
    }
  }

  if (!ctaData) return null;

  return (
    <a
      className="button flex items-center text-purple-dark p-14 text-12 rounded-full"
      href={ctaData.link || "#"}
    >
      {ctaData.ctaicon && (
        <span className="w-20 mr-14 inline-block">
          <img src={ctaData.ctaicon} alt="CTA icon" />
        </span>
      )}
      {ctaData.title}
    </a>
  );
}
