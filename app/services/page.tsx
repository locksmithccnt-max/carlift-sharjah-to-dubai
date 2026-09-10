import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/JsonLd"
import { ROUTES, BASE_URL } from "@/data/routes"
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema"
import { IMAGES } from "@/data/images"

export const metadata: Metadata = {
  title: "All Car Lift Routes UAE | Sharjah, Dubai, Ajman | M1 CarLift UAE",
  description:
    "19 car lift routes across UAE: Sharjah, Dubai, Ajman, Al Ain, RAK, Abu Dhabi. Daily from AED 18, monthly from AED 450. Ladies option. Click any route to book on WhatsApp.",
  alternates: { canonical: `${BASE_URL}/services` },
  keywords: ["car lift services in dubai", "car lift service", "carpool dubai routes", "car lift routes uae"],
}

export default function ServicesPage() {
  const byEmirate: Record<string, typeof ROUTES> = {}
  for (const r of ROUTES) {
    const key = r.fromEmirate
    if (!byEmirate[key]) byEmirate[key] = []
    byEmirate[key].push(r)
  }

  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "All Car Lift Services", url: `${BASE_URL}/services` },
          ]),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#9ca3af]" aria-current="page">Services</span>
        </nav>

        <h1 className="text-4xl font-bold text-white mb-3">Car Lift Services in UAE</h1>
        <p className="text-[#9ca3af] text-base max-w-xl mb-6 leading-relaxed">
          All available car lift routes operated by Car Lift UAE. Click any route to see pricing, pickup/drop-off details, and to book.
        </p>

        {/* Fleet showcase */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          <Image
            {...IMAGES.vehicleCollage}
            className="w-full rounded-xl object-cover aspect-video"
            sizes="(max-width:768px) 50vw, 33vw"
          />
          <Image
            {...IMAGES.affordableService}
            className="w-full rounded-xl object-cover aspect-video"
            sizes="(max-width:768px) 50vw, 33vw"
          />
        </div>

        {Object.entries(byEmirate).map(([emirate, routes]) => (
          <div key={emirate} className="mb-12">
            <h2 className="text-lg font-bold text-white mb-4 pb-2 border-b border-[#252629]">
              From {emirate}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {routes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/routes/${r.slug}`}
                  className="group rounded-xl border border-[#252629] bg-[#161719] hover:border-[#f59e0b]/40 hover:bg-[#1e2023] p-5 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="text-sm font-semibold text-white">
                      {r.from} <span className="text-[#f59e0b]">→</span> {r.to}
                    </div>
                    {r.volume && (
                      <span className="text-xs text-[#6b7280] bg-[#0a0a0a] border border-[#252629] px-2 py-0.5 rounded-full">
                        {r.volume}/mo
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#9ca3af] line-clamp-2 mb-3">{r.shortDescription}</p>
                  <div className="flex gap-4 text-xs">
                    <div>
                      <span className="text-[#6b7280]">Daily </span>
                      <span className="text-white font-semibold">AED {r.priceFrom}</span>
                    </div>
                    <div>
                      <span className="text-[#6b7280]">Monthly </span>
                      <span className="text-[#f59e0b] font-bold">AED {r.monthlyPrice}</span>
                    </div>
                  </div>
                  <div className="text-xs text-[#f59e0b] mt-3 group-hover:translate-x-1 transition-transform">
                    View details →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
