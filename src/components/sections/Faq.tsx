"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems } from "@/lib/constants/faq";

function FaqRow({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm font-bold text-brand-dark md:text-base">
          <span className="mr-2 text-brand-green">Q.</span>
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand-green transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
          <span className="mr-2 font-bold text-brand-dark">A.</span>
          {answer}
        </p>
      )}
    </div>
  );
}

export function Faq() {
  return (
    <section className="bg-brand-green-tint py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="FAQ" title="よくある質問" />
        <div className="mx-auto max-w-2xl">
          <Reveal className="rounded-lg border border-gray-200 bg-white px-6">
            {faqItems.map((item) => (
              <FaqRow
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
