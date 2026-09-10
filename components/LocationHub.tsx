import Link from "next/link"
import JsonLd from "@/components/JsonLd"
import FaqAccordion from "@/components/FaqAccordion"
import LeadForm from "@/components/LeadForm"
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema"
import { ROUTES, BASE_URL, WHATSAPP_NUMBER } from "@/data/routes"
import type { LocationData } from "@/data/locations"

interface LocationHubProps {
  location: LocationData
  faqs?: Array<{ q: string; a: string }>
}

export default function LocationHub({ location, faqs = [] }: LocationHubProps) {
  const routes = ROUTES.filter(
    (r) =>
      r.fromEmirate === location.emirate ||
      r.toEmirate === location.emirate ||
      location.routeSlugs.includes(r.slug)
  )

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: `Car Lift ${location.name}`, url: `${BASE_URL}/${location.slug}` },
          ]),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#9ca3af]" aria-current="page">Car Lift {location.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">Car Lift {location.name}</h1>
            <p className="text-base text-[#9ca3af] leading-relaxed mb-6 border-l-2 border-[#f59e0b] pl-4">
              {location.description}
            </p>

            {location.keyAreas.length > 0 && (
              <div className="mb-6">
                <h2 className="text-sm font-semibold text-white mb-2">Areas we cover in {location.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {location.keyAreas.map((area) => (
                    <span key={area} className="text-xs bg-[#161719] border border-[#252629] text-[#9ca3af] px-3 py-1.5 rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20need%20a%20car%20lift%20from%20${encodeURIComponent(location.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-bold py-3 px-6 rounded-xl text-sm"
            >
              Book Car Lift in {location.name} →
            </a>
          </div>

          <LeadForm defaultFrom={location.name} />
        </div>

        {routes.length > 0 && (
          <div className="mb-14">
            <h2 className="text-xl font-bold text-white mb-6">Car Lift Routes from/to {location.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {routes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/routes/${r.slug}`}
                  className="group rounded-xl border border-[#252629] bg-[#161719] hover:border-[#f59e0b]/40 p-4 transition-all"
                >
                  <div className="text-sm font-semibold text-white mb-1">
                    {r.from} <span className="text-[#f59e0b]">→</span> {r.to}
                  </div>
                  <div className="text-xs text-[#9ca3af] mb-2">{r.durationEst} · {r.distance}</div>
                  <div className="flex gap-3 text-xs">
                    <span className="text-[#9ca3af]">From <strong className="text-white">AED {r.priceFrom}</strong>/day</span>
                    <span className="text-[#6b7280]">|</span>
                    <span className="text-[#f59e0b] font-semibold">AED {r.monthlyPrice}/mo</span>
                  </div>
                  <div className="text-xs text-[#f59e0b] mt-2 group-hover:translate-x-1 transition-transform">Details →</div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {faqs.length > 0 && (
          <FaqAccordion faqs={faqs} title={`Car Lift ${location.name} — FAQ`} />
        )}
      </section>
    </>
  )
}
