"use client";

import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";

interface FullWidthTextBannerProps {
  header?: string;
  text?: string;
  slug?: string;
}

export function FullWidthTextBanner({
  header,
  text,
}: FullWidthTextBannerProps) {
  const animRef1 = useAnimateOnScroll();
  const animRef2 = useAnimateOnScroll();

  return (
    <section className="h-screen bg-pastel-orange" data-header-text="text-gray-dark">
      <div className="flex items-center justify-center h-full">
        <div className="container inner">
          {header && (
            <h3 ref={animRef1} className="delay-step_1 mb-8">
              {header}
            </h3>
          )}
          {text && (
            <div ref={animRef2} className="subheading delay-step_3 mb-8">
              <MarkdownRenderer content={text} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
