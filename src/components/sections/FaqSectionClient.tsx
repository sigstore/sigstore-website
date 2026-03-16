"use client";

import { useState } from "react";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import ChevronDown from "@/assets/icons/chevron_down.svg";

interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionClientProps {
  faqs: Faq[];
}

export function FaqSectionClient({ faqs }: FaqSectionClientProps) {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="py-64 bg-pastel-blue" data-header-text="text-purple-dark">
      <div className="text-gray-dark container inner text-center">
        <h3 className="text-36 pb-32">Frequently asked questions</h3>
        <p>Looking for something detailed around the API?</p>
        <p className="pb-40">
          Check out our{" "}
          <a href="https://docs.sigstore.dev/faq" target="_blank" rel="noopener noreferrer">
            developer docs
          </a>
        </p>
        {faqs.map((faq, index) => (
          <article
            key={index}
            className={`rounded-md p-24 bg-white mb-24 text-left md:w-832 w-full mx-auto cursor-pointer ${
              activeFaq === index ? "slideDown" : "slideUp"
            }`}
            onClick={() => setActiveFaq(index)}
          >
            <div className="flex justify-between items-center">
              <p className={`font-bold ${activeFaq === index ? "pb-24" : ""}`}>
                {faq.question}
              </p>
              <span
                className={`transition-transform duration-200 ${
                  activeFaq === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDown />
              </span>
            </div>
            {activeFaq === index && (
              <div className="markdown">
                <MarkdownRenderer content={faq.answer} />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
