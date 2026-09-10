import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/JsonLd"
import TrustRow from "@/components/TrustRow"
import RouteSelector from "@/components/RouteSelector"
import TestimonialsBlock from "@/components/TestimonialsBlock"
import FaqAccordion from "@/components/FaqAccordion"
import LeadForm from "@/components/LeadForm"
import { localBusinessSchema, organizationSchema, faqSchema, reviewsSchema } from "@/lib/schema"
import { GLOBAL_FAQS } from "@/data/faqs"
import { TESTIMONIALS } from "@/data/testimonials"
import { WHATSAPP_NUMBER, PHONE_NUMBER } from "@/data/routes"
import { IMAGES } from "@/data/images"

export const metadata: Metadata = {
  title: "Car Lift Sharjah to Dubai | From AED 500/day | M1 CarLift UAE",
  description:
    "Daily car lift from Sharjah to Dubai from AED 500/day or AED 5,000/month. Business Bay, JLT, DIP, Media City covered. Ladies option, verified drivers. Book on WhatsApp.",
  alternates: { canonical: "https://carlift-sharjahtodubai.com" },
}

const POPULAR_ROUTES = [
  { from: "Sharjah", to: "Business Bay", price: 5000, slug: "/routes/sharjah-to-business-bay", vol: "480 searches/mo" },
  { from: "Sharjah", to: "Dubai (general)", price: 5000, slug: "/sharjah-to-dubai", vol: "880 searches/mo" },
  { from: "Sharjah", to: "JLT", price: 5000, slug: "/routes/sharjah-to-jlt", vol: "High demand" },
  { from: "Sharjah", to: "DIP", price: 5000, slug: "/routes/sharjah-to-dip", vol: "" },
  { from: "Ajman", to: "Dubai", price: 5000, slug: "/routes/ajman-to-dubai", vol: "" },
  { from: "Dubai", to: "Al Ain", price: 5000, slug: "/routes/dubai-to-al-ain", vol: "" },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={[localBusinessSchema(), organizationSchema(), reviewsSchema(TESTIMONIALS), faqSchema(GLOBAL_FAQS.slice(0, 6))]} />

      {/* ── HERO ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#f59e0b]/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-12 md:pt-20 md:pb-16 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="md:hidden order-first mb-2">
            <Image
              {...IMAGES.coasterBus}
              priority
              className="w-full rounded-2xl object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full px-3 py-1 mb-6">
              <span className="w-2 h-2 bg-[#f59e0b] rounded-full animate-pulse" aria-hidden="true" />
              <span className="text-xs font-semibold text-[#f59e0b]">Daily service — Sharjah · Dubai · Ajman · Abu Dhabi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4">
              Car Lift<br />
              <span className="text-[#f59e0b]">Sharjah ↔ Dubai</span><br />
              <span className="text-[#9ca3af] text-3xl sm:text-4xl font-semibold">from AED 500/day</span>
            </h1>

            <p className="text-base sm:text-lg text-[#9ca3af] max-w-xl mb-8 leading-relaxed">
              Reliable daily car lift on Sharjah–Dubai and intercity UAE routes. Fixed monthly pricing, verified drivers, AC comfort.
              Ladies-only option available on all routes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20car%20lift`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-bold text-base px-6 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-[#25D366]/20"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book on WhatsApp
              </a>
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 bg-[#161719] hover:bg-[#1e2023] border border-[#252629] text-white font-semibold text-base px-6 py-3.5 rounded-xl transition-colors"
              >
                📞 {PHONE_NUMBER}
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-[#9ca3af]">
              <span>⭐ 4.9/5 rated</span>
              <span className="text-[#252629]">|</span>
              <span>500+ daily riders</span>
              <span className="text-[#252629]">|</span>
              <span>5+ years operating</span>
            </div>
          </div>

          {/* Hero image — desktop only */}
          <div className="hidden md:block">
            <Image
              {...IMAGES.coasterBus}
              priority
              className="w-full rounded-2xl object-cover shadow-2xl shadow-black/50"
              sizes="(max-width:1280px) 50vw, 600px"
            />
          </div>
          </div>
        </div>
      </section>

      {/* ── TRUST ROW ── */}
      <TrustRow />

      {/* ── ROUTE SELECTOR ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-bold text-white mb-4">Find Your Car Lift Route</h2>
        <RouteSelector />
      </section>

      {/* ── POPULAR ROUTES ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Most Booked Routes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {POPULAR_ROUTES.map((route) => (
            <Link
              key={route.slug}
              href={route.slug}
              className="group rounded-xl border border-[#252629] bg-[#161719] hover:border-[#f59e0b]/40 hover:bg-[#1e2023] p-5 flex flex-col gap-3 transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">
                    {route.from} <span className="text-[#f59e0b]">→</span> {route.to}
                  </div>
                  {route.vol && <div className="text-xs text-[#6b7280] mt-0.5">{route.vol}</div>}
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#9ca3af]">Monthly from</div>
                  <div className="font-bold text-[#f59e0b]">AED {route.price}</div>
                </div>
              </div>
              <div className="text-xs text-[#f59e0b] group-hover:translate-x-1 transition-transform">
                View route →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#111213] border-y border-[#252629] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-10 text-center">How to Book a Car Lift</h2>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "WhatsApp or Call Us", body: "Send your pickup area, destination, and preferred departure time. We confirm your route within a few hours." },
              { step: "02", title: "Get Matched & Price", body: "We match you with a verified driver on your route and send a fixed daily or monthly quote — no hidden fees." },
              { step: "03", title: "Commute Every Day", body: "Your driver picks you up at the agreed time. Monthly subscribers travel automatically with no repeat bookings needed." },
            ].map((item) => (
              <li key={item.step} className="flex flex-col gap-3">
                <span className="text-3xl font-black text-[#f59e0b]/30 leading-none">{item.step}</span>
                <h3 className="font-bold text-white text-lg">{item.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FLEET PHOTOS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="text-xl font-bold text-white mb-5">Our Fleet</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <Image
            {...IMAGES.fusoBus}
            className="w-full rounded-xl object-cover aspect-video"
            sizes="(max-width:768px) 50vw, 33vw"
          />
          <Image
            {...IMAGES.vehicleCollage}
            className="w-full rounded-xl object-cover aspect-video"
            sizes="(max-width:768px) 50vw, 33vw"
          />
          <Image
            {...IMAGES.busBoarding}
            className="w-full rounded-xl object-cover aspect-video col-span-2 md:col-span-1"
            sizes="(max-width:768px) 100vw, 33vw"
          />
        </div>
      </section>

      {/* ── PRICING OVERVIEW ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">Fixed Pricing. No Surprises.</h2>
            <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">
              Unlike rideshare apps that surge during morning rush, our car lift pricing is fixed.
              Pay once a month and commute every working day without thinking about it.
            </p>
            <div className="space-y-3">
              {[
                { route: "Sharjah → Dubai", daily: 500, monthly: 5000 },
                { route: "Sharjah → Business Bay", daily: 530, monthly: 5000 },
                { route: "Sharjah → JLT", daily: 550, monthly: 5000 },
                { route: "Ajman → Dubai", daily: 550, monthly: 5000 },
                { route: "Dubai → Al Ain", daily: 600, monthly: 5000 },
              ].map((p) => (
                <div key={p.route} className="flex items-center justify-between py-3 border-b border-[#252629]">
                  <span className="text-sm text-[#9ca3af]">{p.route}</span>
                  <div className="flex gap-4 text-right">
                    <div>
                      <div className="text-xs text-[#6b7280]">Daily</div>
                      <div className="text-sm font-semibold text-white">AED {p.daily}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6b7280]">Monthly</div>
                      <div className="text-sm font-bold text-[#f59e0b]">AED {p.monthly}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[#6b7280] mt-3">Prices last updated September 2026. Contact for exact quote.</p>
          </div>

          <LeadForm />
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="bg-[#111213] border-y border-[#252629] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-8">Car Lift Services We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🗓️", title: "Daily Car Lift", desc: "Per-trip booking, flexible. Ideal for irregular schedules.", href: "/services" },
              { icon: "📆", title: "Monthly Car Lift", desc: "Best value. Fixed price, 22 working days, auto-scheduled.", href: "/monthly-car-lift" },
              { icon: "👩", title: "Ladies-Only Car Lift", desc: "Female drivers, verified. Available on all major routes.", href: "/ladies-car-lift" },
              { icon: "🚗", title: "Carpool Dubai/Sharjah", desc: "Share a ride with co-passengers going the same way.", href: "/carpool" },
              { icon: "📍", title: "Pick and Drop Service", desc: "Door-to-door service with a dedicated driver.", href: "/pick-and-drop" },
              { icon: "🌆", title: "Intercity Routes", desc: "Abu Dhabi, Al Ain, RAK, Ajman — covered.", href: "/services" },
            ].map((s) => (
              <Link
                key={s.href + s.title}
                href={s.href}
                className="group rounded-xl border border-[#252629] bg-[#161719] hover:border-[#f59e0b]/30 p-5 transition-all"
              >
                <div className="text-2xl mb-3" aria-hidden="true">{s.icon}</div>
                <h3 className="font-semibold text-white text-sm mb-1">{s.title}</h3>
                <p className="text-xs text-[#9ca3af] leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <TestimonialsBlock />
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <FaqAccordion faqs={GLOBAL_FAQS} title="Car Lift UAE — Common Questions" />
      </section>
    </>
  )
}
