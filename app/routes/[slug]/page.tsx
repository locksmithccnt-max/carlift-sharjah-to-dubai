import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import JsonLd from "@/components/JsonLd"
import FaqAccordion from "@/components/FaqAccordion"
import LeadForm from "@/components/LeadForm"
import { ROUTES, getRouteBySlug, WHATSAPP_NUMBER } from "@/data/routes"
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"
import { BASE_URL } from "@/data/routes"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return ROUTES.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const route = getRouteBySlug(slug)
  if (!route) return {}

  const title = `Car Lift ${route.from} to ${route.to} | From AED ${route.priceFrom}/day`
  const description = route.shortDescription.slice(0, 155)
  const url = `${BASE_URL}/routes/${slug}`

  return {
    title,
    description,
    keywords: route.keywords,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  }
}

export default async function RoutePage({ params }: PageProps) {
  const { slug } = await params
  const route = getRouteBySlug(slug)
  if (!route) notFound()

  const schemas = [
    serviceSchema(route),
    faqSchema(route.faqs),
    breadcrumbSchema([
      { name: "Home", url: BASE_URL },
      { name: `Car Lift ${route.fromEmirate}`, url: `${BASE_URL}/${route.fromEmirate.toLowerCase()}` },
      { name: `${route.from} to ${route.to}`, url: `${BASE_URL}/routes/${slug}` },
    ]),
  ]

  return (
    <>
      <JsonLd data={schemas} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-5" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-xs text-[#6b7280]">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li><Link href={`/${route.fromEmirate.toLowerCase()}`} className="hover:text-white transition-colors">{route.fromEmirate}</Link></li>
          <li aria-hidden="true">/</li>
          <li className="text-[#9ca3af]" aria-current="page">{route.from} → {route.to}</li>
        </ol>
      </nav>

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 border border-[#f59e0b]/20 rounded-full px-3 py-1 mb-4">
              <span className="text-xs font-semibold text-[#f59e0b]">{route.distance} · {route.durationEst}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
              Car Lift {route.from} to {route.to}
            </h1>

            {/* AEO: direct extractable answer — first thing on page */}
            <p className="text-base text-[#9ca3af] leading-relaxed mb-6 border-l-2 border-[#f59e0b] pl-4">
              {route.shortDescription}
            </p>

            <div className="flex gap-4 mb-6">
              <div className="bg-[#161719] border border-[#252629] rounded-xl p-4 flex-1 text-center">
                <div className="text-xs text-[#9ca3af] mb-1">Daily rate from</div>
                <div className="text-2xl font-black text-[#f59e0b]">AED {route.priceFrom}</div>
              </div>
              <div className="bg-[#161719] border border-[#252629] rounded-xl p-4 flex-1 text-center">
                <div className="text-xs text-[#9ca3af] mb-1">Monthly from</div>
                <div className="text-2xl font-black text-white">AED {route.monthlyPrice}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20a%20car%20lift%20from%20${encodeURIComponent(route.from)}%20to%20${encodeURIComponent(route.to)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-bold py-3 px-5 rounded-xl transition-colors text-sm"
              >
                Book on WhatsApp →
              </a>
              <Link
                href="/monthly-car-lift"
                className="flex items-center justify-center text-sm text-[#9ca3af] hover:text-white border border-[#252629] px-5 py-3 rounded-xl transition-colors"
              >
                Monthly plans
              </Link>
            </div>
          </div>

          <LeadForm defaultFrom={route.from} defaultTo={route.to} />
        </div>
      </section>

      {/* ── ROUTE DETAILS ── */}
      <section className="bg-[#111213] border-y border-[#252629] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-white mb-6">Route Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Distance", value: route.distance },
              { label: "Est. Duration", value: route.durationEst },
              { label: "Daily Rate", value: `AED ${route.priceFrom}` },
              { label: "Monthly Rate", value: `AED ${route.monthlyPrice}` },
            ].map((d) => (
              <div key={d.label} className="bg-[#161719] border border-[#252629] rounded-xl p-4">
                <div className="text-xs text-[#6b7280] mb-1">{d.label}</div>
                <div className="font-bold text-white">{d.value}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Popular Pickup Points</h3>
              <ul className="flex flex-wrap gap-2">
                {route.popularPickups.map((p) => (
                  <li key={p} className="text-xs bg-[#0a0a0a] border border-[#252629] text-[#9ca3af] px-3 py-1.5 rounded-full">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-3">Popular Drop-off Points</h3>
              <ul className="flex flex-wrap gap-2">
                {route.popularDropoffs.map((d) => (
                  <li key={d} className="text-xs bg-[#0a0a0a] border border-[#252629] text-[#9ca3af] px-3 py-1.5 rounded-full">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── LONG DESCRIPTION ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold text-white mb-4">
            About This Car Lift Route
          </h2>
          <p className="text-[#9ca3af] text-sm leading-relaxed">{route.longDescription}</p>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <FaqAccordion
          faqs={route.faqs}
          title={`Car Lift ${route.from} to ${route.to} — FAQ`}
        />
      </section>
    </>
  )
}
