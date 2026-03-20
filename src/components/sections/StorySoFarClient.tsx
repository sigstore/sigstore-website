"use client";

import { useAnimateOnScroll } from "@/hooks/useAnimateOnScroll";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";

interface StoryData {
  header: string;
  textBlock: string;
  recentHeader?: string;
  recentTextBlock?: string;
  initiativesHeader?: string;
  initiativesTextBlock?: string;
}

interface StorySoFarClientProps {
  story: StoryData;
}

function StorySection({
  header,
  content,
}: {
  header: string;
  content: string;
}) {
  const animRef1 = useAnimateOnScroll();
  const animRef2 = useAnimateOnScroll();

  return (
    <div className="md:flex justify-between items-start container inner">
      <div ref={animRef1} className="w-full md:w-1/2 delay-step_1">
        <h2 className="text-36 leading-32 mb-32 text-gray-dark">{header}</h2>
      </div>
      <div ref={animRef2} className="w-full md:w-1/2 delay-step_2">
        <div className="text-gray-dark markdown">
          <MarkdownRenderer content={content} />
        </div>
      </div>
    </div>
  );
}

export function StorySoFarClient({ story }: StorySoFarClientProps) {
  return (
    <section className="py-128 bg-white" data-header-text="text-gray-dark">
      {story.textBlock && (
        <StorySection header={story.header} content={story.textBlock} />
      )}
      {story.recentTextBlock && (
        <>
          <br />
          <br />
          <StorySection
            header={story.recentHeader || ""}
            content={story.recentTextBlock}
          />
        </>
      )}
      {story.initiativesTextBlock && (
        <>
          <br />
          <br />
          <StorySection
            header={story.initiativesHeader || ""}
            content={story.initiativesTextBlock}
          />
        </>
      )}
    </section>
  );
}
