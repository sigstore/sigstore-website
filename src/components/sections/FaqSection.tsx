import { getJsonContent } from "@/lib/content";
import { FaqSectionClient } from "./FaqSectionClient";

interface FaqData {
  faq: Array<{ question: string; answer: string }>;
}

export function FaqSection() {
  const data = getJsonContent<FaqData>("faq", "faqs");

  return <FaqSectionClient faqs={data.faq} />;
}
