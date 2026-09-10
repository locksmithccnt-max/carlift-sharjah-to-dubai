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
  title: "Carpool Dubai Sharjah | Share a Ride from AED 22/day | M1 CarLift UAE",
  description:
    "Carpool from Sharjah to Dubai from AED 22/day or AED 500/month. Share an AC-comfortable minibus with verified co-passengers. Fixed price, no surge. Book on WhatsApp.",
  alternates: { canonical: `${BASE_URL}/carpool` },
  keywords: ["carpool dubai", "car pool dubai", "carpool uae", "carpool sharjah dubai", "carpool sharjah"],
}

const FAQS = [
  {
    q: "What is a carpool in Dubai?",
    a: "Carpool in Dubai means sharing a private car with 2–4 co-passengers who travel the same route daily. Each person pays a share of the journey cost, making it much cheaper than solo rideshare while maintaining the comfort of a private vehicle.",
  },
  {
    q: "How is carpool different from a bus or metro?",
    a: "Carpool offers door-to-door pickup and drop-off, unlike buses or Metro which require walking to stops. It's faster, air-conditioned, and operates at your preferred departure time rather than fixed timetables.",
  },
  {
    q: "How much does carpool in Dubai cost?",
    a: "Carpool from Sharjah to Dubai starts from AED 22 per trip, or AED 500 per month. Compared to the same journey on a rideshare app (AED 45–70 with surge), carpooling saves the average commuter AED 400–1,000 per month.",
  },
  {
    q: "Is carpooling legal in UAE?",
    a: "Informal carpooling between friends and colleagues has always been common in the UAE. Our service operates as a licensed pick-and-drop and shared transport arrangement.",
  },
]

export default function CarpoolPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Carpool Dubai", url: `${BASE_URL}/carpool` },
          ]),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#9ca3af]">Carpool</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">Carpool Dubai &amp; Sharjah</h1>
            <p className="text-base text-[#9ca3af] leading-relaxed mb-6 border-l-2 border-[#f59e0b] pl-4">
              Carpool in Dubai and Sharjah means sharing a private, air-conditioned car with 2–4 commuters on the same route. Pay only your share — from AED 22/day — and save AED 400–1,000 compared to daily rideshare apps.
            </p>

            <div className="bg-[#161719] border border-[#252629] rounded-xl p-5 mb-6">
              <h2 className="text-sm font-bold text-white mb-3">Carpool vs Alternatives</h2>
              <div className="space-y-2">
                {[
                  { option: "Carpool (ours)", cost: "AED 22–34/day", note: "Fixed, door-to-door" },
                  { option: "Rideshare (Careem/Uber)", cost: "AED 45–70/day", note: "Surges in peak hours" },
                  { option: "RTA Bus", cost: "AED 5–6/day", note: "No door-to-door, long journey" },
                  { option: "Own car", cost: "AED 60–80/day", note: "Fuel, parking, wear and tear" },
                ].map((r) => (
                  <div key={r.option} className="flex items-center justify-between py-2 border-b border-[#252629] last:border-0">
                    <div>
                      <div className="text-sm text-white">{r.option}</div>
                      <div className="text-xs text-[#6b7280]">{r.note}</div>
                    </div>
                    <div className="text-sm font-semibold text-[#f59e0b]">{r.cost}</div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20join%20a%20carpool%20from%20Sharjah%20to%20Dubai`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-bold py-3 px-6 rounded-xl text-sm"
            >
              Join a Carpool →
            </a>
          </div>
          <LeadForm />
        </div>

        {/* Fleet photo */}
        <div className="mb-10">
          <Image
            {...IMAGES.vehicleCollage}
            className="w-full rounded-xl object-cover max-h-72"
            sizes="(max-width:768px) 100vw, 60vw"
          />
        </div>

        <FaqAccordion faqs={FAQS} title="Carpool Dubai — FAQ" />
      </section>
    </>
  )
}
