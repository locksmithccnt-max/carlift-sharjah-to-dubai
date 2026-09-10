import type { Metadata } from "next"
import Link from "next/link"
import JsonLd from "@/components/JsonLd"
import FaqAccordion from "@/components/FaqAccordion"
import { faqSchema } from "@/lib/schema"
import { GLOBAL_FAQS, MONTHLY_FAQS } from "@/data/faqs"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift FAQ | Pricing, Booking & Routes | M1 CarLift UAE",
  description:
    "Answers to common car lift questions: pricing from AED 22/day, how to book, ladies option, monthly plans, routes covered across Sharjah, Dubai, and UAE.",
  alternates: { canonical: `${BASE_URL}/faq` },
}

const ALL_FAQS = [...GLOBAL_FAQS, ...MONTHLY_FAQS]

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(ALL_FAQS)} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#9ca3af]">FAQ</span>
        </nav>

        <h1 className="text-4xl font-bold text-white mb-3">Car Lift UAE — Frequently Asked Questions</h1>
        <p className="text-[#9ca3af] text-base mb-10">
          Everything you need to know about booking, pricing, drivers, and our car lift service in Dubai and Sharjah.
        </p>

        <FaqAccordion faqs={ALL_FAQS} title="General Questions" />
      </section>
    </>
  )
}
