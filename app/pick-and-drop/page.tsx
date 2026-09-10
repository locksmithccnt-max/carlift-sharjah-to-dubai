import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/JsonLd"
import FaqAccordion from "@/components/FaqAccordion"
import LeadForm from "@/components/LeadForm"
import { faqSchema, breadcrumbSchema } from "@/lib/schema"
import { BASE_URL, WHATSAPP_NUMBER } from "@/data/routes"
import { IMAGES } from "@/data/images"

export const metadata: Metadata = {
  title: "Pick and Drop Service Dubai & Sharjah | AED 500/day | M1 Group",
  description:
    "Door-to-door pick and drop service in Dubai and Sharjah. Fixed schedule, verified drivers. AED 500/day or AED 5,000/month. No surge pricing. Book on WhatsApp.",
  alternates: { canonical: `${BASE_URL}/pick-and-drop` },
  keywords: ["pick and drop service", "pick and drop service near me", "pick and drop dubai", "pick and drop sharjah"],
}

const FAQS = [
  {
    q: "What is a pick and drop service in Dubai?",
    a: "A pick and drop service in Dubai is a private door-to-door transport arrangement where a driver picks you up from your home or office and drops you at your specified destination at a fixed time. Unlike taxis or rideshare, pick and drop services are pre-booked with an agreed schedule and price.",
  },
  {
    q: "Is there a pick and drop service near me in Sharjah?",
    a: "Yes. We operate pick and drop from all major Sharjah areas including Al Nahda, Muwaileh, Al Taawun, Rolla, and more. We cover Sharjah to Dubai, Ajman to Dubai, and all intercity UAE routes.",
  },
  {
    q: "How much does pick and drop service cost in Dubai?",
    a: "Pick and drop from Sharjah to Dubai starts from AED 500 per trip. Monthly pick and drop subscriptions are AED 5,000 for 22 working days. Contact us for a custom quote based on your specific route.",
  },
  {
    q: "Do you offer pick and drop for school children?",
    a: "We do not currently offer school transport services. Our pick and drop service is for adult commuters only.",
  },
]

export default function PickAndDropPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Pick and Drop Service", url: `${BASE_URL}/pick-and-drop` },
          ]),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#9ca3af]">Pick and Drop</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">Pick and Drop Service Dubai &amp; Sharjah</h1>
            <p className="text-base text-[#9ca3af] leading-relaxed mb-6 border-l-2 border-[#f59e0b] pl-4">
              Our pick and drop service covers door-to-door commutes between Sharjah, Dubai, Ajman, and all major UAE emirates. A verified driver picks you up at your home or building entrance and drops you directly at your workplace.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { icon: "🏠", label: "Door-to-door pickup", sub: "From your building entrance" },
                { icon: "🏢", label: "Direct workplace drop-off", sub: "No intermediate stops unless agreed" },
                { icon: "⏰", label: "Fixed departure time", sub: "Same time every working day" },
                { icon: "📋", label: "Pre-arranged & confirmed", sub: "No last-minute uncertainty" },
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
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20a%20pick%20and%20drop%20service`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-bold py-3 px-6 rounded-xl text-sm"
            >
              Book Pick &amp; Drop →
            </a>
          </div>
          <LeadForm />
        </div>

        {/* Bus boarding photo */}
        <div className="mb-10">
          <Image
            {...IMAGES.busBoarding}
            className="w-full rounded-xl object-cover max-h-72"
            sizes="(max-width:768px) 100vw, 60vw"
          />
        </div>

        <FaqAccordion faqs={FAQS} title="Pick and Drop Service — FAQ" />
      </section>
    </>
  )
}
