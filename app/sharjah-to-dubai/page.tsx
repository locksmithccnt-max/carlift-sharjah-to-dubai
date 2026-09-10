import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/JsonLd"
import FaqAccordion from "@/components/FaqAccordion"
import LeadForm from "@/components/LeadForm"
import TestimonialsBlock from "@/components/TestimonialsBlock"
import { faqSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema"
import { getRouteBySlug, WHATSAPP_NUMBER, BASE_URL } from "@/data/routes"
import { IMAGES } from "@/data/images"

export const metadata: Metadata = {
  title: "Car Lift Sharjah to Dubai | AED 500/day or AED 5,000/month | M1 CarLift",
  description:
    "Car lift Sharjah to Dubai from AED 500/day or AED 5,000/month (22 working days). Al Nahda, Muwaileh, Al Taawun pickup — JLT, Business Bay, Media City drop-off. Ladies option, verified drivers.",
  alternates: { canonical: `${BASE_URL}/sharjah-to-dubai` },
  keywords: ["car lift sharjah to dubai", "dubai to sharjah car lift", "sharjah dubai carpool", "car lift sharjah dubai monthly"],
}

const FAQS = [
  {
    q: "How much is a car lift from Sharjah to Dubai?",
    a: "A daily car lift from Sharjah to Dubai starts from AED 500 per trip. Monthly packages covering 22 working days are AED 5,000 one-way. Contact us for two-way monthly pricing.",
  },
  {
    q: "Is there a car lift service from Dubai to Sharjah?",
    a: "Yes. We run return (Dubai to Sharjah) evening trips. You can book one-way Sharjah–Dubai in the morning and return Dubai–Sharjah in the evening, or subscribe to a two-way monthly package.",
  },
  {
    q: "How long does the car lift from Sharjah to Dubai take?",
    a: "Typically 30–55 minutes depending on destination and departure time. Peak morning hours (7:30–9:00 AM) can add 15–20 minutes. We plan departure times to reach your drop-off before 9 AM.",
  },
  {
    q: "Which Sharjah areas do you cover for Dubai car lifts?",
    a: "We pick up from Al Nahda, Muwaileh, University City, Al Taawun, Al Khan, Rolla, Al Majaz, Bu Tina, Al Wahda, Al Qasimia, and most central Sharjah neighbourhoods.",
  },
  {
    q: "Do you offer a ladies-only car lift from Sharjah to Dubai?",
    a: "Yes. We have a dedicated ladies-only option with verified female drivers for the Sharjah–Dubai route. Mention it when you book and we will arrange a women-only vehicle.",
  },
  {
    q: "How to go to Sharjah from Dubai by car lift?",
    a: "WhatsApp or call us with your Dubai pickup point and Sharjah destination. We match you with an existing evening car lift on the same corridor and confirm a fixed price.",
  },
]

const DUBAI_DISTRICTS = [
  { name: "Business Bay", slug: "sharjah-to-business-bay", price: 5000 },
  { name: "JLT", slug: "sharjah-to-jlt", price: 5000 },
  { name: "Al Quoz", slug: "sharjah-to-al-quoz", price: 5000 },
  { name: "Al Barsha", slug: "sharjah-to-al-barsha", price: 5000 },
  { name: "DIP", slug: "sharjah-to-dip", price: 5000 },
  { name: "Jebel Ali", slug: "sharjah-to-jebel-ali", price: 5000 },
  { name: "Internet City", slug: "sharjah-to-internet-city", price: 5000 },
  { name: "Media City", slug: "sharjah-to-media-city", price: 5000 },
  { name: "Silicon Oasis", slug: "sharjah-to-silicon-oasis", price: 5000 },
]

const mainRoute = getRouteBySlug("sharjah-to-dubai")

export default function SharjahToDubaiPage() {
  return (
    <>
      <JsonLd
        data={[
          ...(mainRoute ? [serviceSchema(mainRoute)] : []),
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Sharjah", url: `${BASE_URL}/sharjah` },
            { name: "Car Lift Sharjah to Dubai", url: `${BASE_URL}/sharjah-to-dubai` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-5">
              <ol className="flex gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/sharjah" className="hover:text-white">Sharjah</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-[#9ca3af]" aria-current="page">Sharjah to Dubai</li>
              </ol>
            </nav>

            <h1 className="text-4xl font-bold text-white leading-tight mb-3">
              Car Lift Sharjah to Dubai
            </h1>

            {/* AEO-optimised direct answer */}
            <p className="text-base text-[#9ca3af] leading-relaxed mb-6 border-l-2 border-[#f59e0b] pl-4">
              Daily car lift from Sharjah to Dubai starts from AED 500 per trip or AED 5,000 per month for 22 working days. We cover all major Sharjah pickup areas (Al Nahda, Muwaileh, Al Taawun) and all Dubai districts. Ladies-only option available with female drivers.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: "From (daily)", value: "AED 500" },
                { label: "Monthly (one-way)", value: "AED 5,000" },
                { label: "Duration", value: "30–55 min" },
                { label: "Distance", value: "20–35 km" },
              ].map((d) => (
                <div key={d.label} className="bg-[#161719] border border-[#252629] rounded-xl p-3">
                  <div className="text-xs text-[#6b7280] mb-0.5">{d.label}</div>
                  <div className="font-bold text-[#f59e0b]">{d.value}</div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20a%20car%20lift%20from%20Sharjah%20to%20Dubai`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-bold py-3 px-6 rounded-xl text-sm transition-colors"
            >
              Book on WhatsApp →
            </a>
          </div>

          <LeadForm defaultFrom="Sharjah" defaultTo="Dubai" />
        </div>
      </section>

      {/* Route posters */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-10">
        <div className="grid grid-cols-2 gap-3">
          <Image
            {...IMAGES.routePickupDropoff}
            className="w-full rounded-xl object-cover"
            sizes="(max-width:768px) 50vw, 33vw"
          />
          <Image
            {...IMAGES.destinationsPoster}
            className="w-full rounded-xl object-cover"
            sizes="(max-width:768px) 50vw, 33vw"
          />
        </div>
      </section>

      {/* Dubai districts */}
      <section className="bg-[#111213] border-y border-[#252629] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-white mb-2">Car Lift from Sharjah to Specific Dubai Areas</h2>
          <p className="text-sm text-[#9ca3af] mb-6">Each route page has exact pricing, pickup points, and FAQs.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {DUBAI_DISTRICTS.map((d) => (
              <Link
                key={d.slug}
                href={`/routes/${d.slug}`}
                className="group rounded-xl border border-[#252629] bg-[#161719] hover:border-[#f59e0b]/40 p-4 transition-all"
              >
                <div className="text-sm font-semibold text-white">{d.name}</div>
                <div className="text-xs text-[#f59e0b] mt-1">AED {d.price}/mo</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <TestimonialsBlock />
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <FaqAccordion faqs={FAQS} title="Car Lift Sharjah to Dubai — FAQ" />
      </section>
    </>
  )
}
