import { getContentFromDirectory } from "@/lib/content";
import { CarouselClient } from "./CarouselClient";

interface CaseStudy {
  slug: string;
  title?: string;
  brand?: string;
  caseColour?: string;
  caseStudyText?: string;
  caseStudyLink?: string;
  category?: string;
  name?: string;
  role?: string;
  body: string;
}

interface CarouselProps {
  carouselCaseItems?: string[];
  slug?: string;
}

export function Carousel({ carouselCaseItems }: CarouselProps) {
  const allCaseStudies = getContentFromDirectory("caseStudies") as unknown as CaseStudy[];

  const slideData = carouselCaseItems
    ? allCaseStudies.filter((cs) => carouselCaseItems.includes(cs.slug))
    : allCaseStudies;

  return (
    <section className="py-64 md:py-128">
      <CarouselClient slideData={slideData} />
    </section>
  );
}
