"use client"

import { useState } from "react"

interface FaqItem {
  q: string
  a: string
}

interface FaqAccordionProps {
  faqs: FaqItem[]
  title?: string
}

export default function FaqAccordion({ faqs, title = "Frequently Asked Questions" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section aria-label="FAQ" className="py-10">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
      <div className="space-y-2">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="rounded-xl border border-[#252629] bg-[#161719] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left flex items-start justify-between gap-4 px-5 py-4 text-sm font-medium text-white hover:bg-[#1e2023] transition-colors"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
              >
                <span>{faq.q}</span>
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full border border-[#252629] flex items-center justify-center text-[#9ca3af] text-xs transition-transform"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                hidden={!isOpen}
              >
                <p className="px-5 pb-4 text-sm text-[#9ca3af] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
