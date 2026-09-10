import type { Metadata } from "next"
import Link from "next/link"
import JsonLd from "@/components/JsonLd"
import FaqAccordion from "@/components/FaqAccordion"
import LeadForm from "@/components/LeadForm"
import { faqSchema, breadcrumbSchema } from "@/lib/schema"
import { BASE_URL, WHATSAPP_NUMBER } from "@/data/routes"

export const metadata: Metadata = {
  title: "Ladies Car Lift Dubai Sharjah | Women-Only Car Lift UAE | M1 Group",
  description:
    "Ladies-only car lift Sharjah to Dubai from AED 500/day or AED 5,000/month. Female drivers, verified & background-checked. Safe, AC-comfortable. Book on WhatsApp.",
  alternates: { canonical: `${BASE_URL}/ladies-car-lift` },
  keywords: [
    "car lift sharjah to dubai for ladies",
    "car lift from ajman to dubai for ladies",
    "ladies car lift dubai",
    "women only car lift uae",
    "ladies only car lift sharjah",
  ],
}

const FAQS = [
  {
    q: "Is there a car lift service for ladies in Dubai and Sharjah?",
    a: "Yes. We offer a ladies-only car lift on all major routes including Sharjah–Dubai, Ajman–Dubai, and Sharjah–Business Bay. Vehicles carry female passengers only, and our female drivers are verified and background-checked.",
  },
  {
    q: "How to book a ladies-only car lift from Sharjah to Dubai?",
    a: "WhatsApp or call us, specify your route and preferred departure time, and mention that you need the ladies-only option. We will match you with a female driver on the same route. Monthly subscriptions are available.",
  },
  {
    q: "Is there a car lift from Ajman to Dubai for ladies?",
    a: "Yes. Our Ajman–Dubai ladies car lift departs key Ajman pickup points in the morning and returns from Dubai in the evening. Female driver, women-only vehicle, door-to-door service.",
  },
  {
    q: "How much does the ladies car lift cost?",
    a: "Ladies-only car lift pricing is the same as our standard service: Sharjah–Dubai from AED 500/day or AED 5,000/month, Ajman–Dubai from AED 550/day or AED 5,000/month. No premium for the ladies option.",
  },
  {
    q: "Are the female drivers verified?",
    a: "Yes. All drivers — male and female — are UAE-licensed, verified by Emirates ID, and background-screened before joining our network.",
  },
]

const ROUTES_LADIES = [
  { from: "Sharjah", to: "Dubai (all areas)", price: 5000, href: "/sharjah-to-dubai" },
  { from: "Sharjah", to: "Business Bay", price: 5000, href: "/routes/sharjah-to-business-bay" },
  { from: "Sharjah", to: "JLT", price: 5000, href: "/routes/sharjah-to-jlt" },
  { from: "Sharjah", to: "Al Barsha", price: 5000, href: "/routes/sharjah-to-al-barsha" },
  { from: "Ajman", to: "Dubai", price: 5000, href: "/routes/ajman-to-dubai" },
  { from: "Dubai", to: "Sharjah", price: 5000, href: "/routes/dubai-to-sharjah" },
]

export default function LadiesCarLiftPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Ladies Car Lift", url: `${BASE_URL}/ladies-car-lift` },
          ]),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#9ca3af]">Ladies Car Lift</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full px-3 py-1 mb-4">
              <span className="text-xs font-semibold text-[#f59e0b]">👩 Women-only vehicles · Female drivers</span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-3">Ladies-Only Car Lift UAE</h1>

            <p className="text-base text-[#9ca3af] leading-relaxed mb-6 border-l-2 border-[#f59e0b] pl-4">
              A dedicated ladies car lift is available on all routes including Sharjah–Dubai, Ajman–Dubai, and Sharjah–Business Bay. Verified female drivers, women-only vehicles, same fixed pricing as our standard service.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { icon: "👩‍✈️", label: "Verified female drivers", sub: "Emirates ID checked, background-screened" },
                { icon: "🚗", label: "Women-only vehicle", sub: "No male co-passengers" },
                { icon: "🔒", label: "Safety-first service", sub: "Regular vehicle inspections" },
                { icon: "💰", label: "Same price", sub: "No premium over standard service" },
                { icon: "📅", label: "Daily or monthly", sub: "Flexible booking options" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-lg" aria-hidden="true">{item.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.label}</div>
                    <div className="text-xs text-[#9ca3af]">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20a%20ladies-only%20car%20lift`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-bold py-3 px-6 rounded-xl text-sm"
            >
              Book Ladies Car Lift →
            </a>
          </div>

          <LeadForm />
        </div>

        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Available Ladies Car Lift Routes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ROUTES_LADIES.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group rounded-xl border border-[#252629] bg-[#161719] hover:border-[#f59e0b]/40 p-4 transition-all"
              >
                <div className="text-sm font-semibold text-white mb-1">
                  {r.from} <span className="text-[#f59e0b]">→</span> {r.to}
                </div>
                <div className="text-xs text-[#9ca3af]">Monthly from AED {r.price}</div>
                <div className="text-xs text-[#f59e0b] mt-2 group-hover:translate-x-1 transition-transform">View route →</div>
              </Link>
            ))}
          </div>
        </div>

        <FaqAccordion faqs={FAQS} title="Ladies Car Lift — Common Questions" />
      </section>
    </>
  )
}
