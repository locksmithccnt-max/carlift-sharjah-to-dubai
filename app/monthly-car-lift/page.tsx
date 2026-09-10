import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/JsonLd"
import FaqAccordion from "@/components/FaqAccordion"
import LeadForm from "@/components/LeadForm"
import { faqSchema, breadcrumbSchema } from "@/lib/schema"
import { MONTHLY_FAQS } from "@/data/faqs"
import { ROUTES, BASE_URL, WHATSAPP_NUMBER } from "@/data/routes"
import { IMAGES } from "@/data/images"

export const metadata: Metadata = {
  title: "Monthly Car Lift Dubai Sharjah | AED 5,000/month | M1 Group",
  description:
    "Monthly car lift Sharjah to Dubai — AED 5,000/month (22 working days). No rebooking, fixed price, no surge, verified drivers. WhatsApp to book your monthly plan today.",
  alternates: { canonical: `${BASE_URL}/monthly-car-lift` },
  keywords: ["car lift dubai monthly", "monthly car lift", "car lift dubai to abu dhabi monthly", "monthly carpool dubai"],
}

const FAQS = [
  ...MONTHLY_FAQS,
  {
    q: "How much is a monthly car lift from Sharjah to Dubai?",
    a: "Monthly car lift from Sharjah to Dubai is AED 5,000 for one-way service covering 22 working days. Contact us for two-way (morning + evening) monthly pricing.",
  },
  {
    q: "What is a monthly car lift in Dubai?",
    a: "A monthly car lift is a fixed-price subscription where you pay once a month and travel every working day without rebooking. Your driver picks you up at an agreed time each morning and drops you at your workplace.",
  },
  {
    q: "Is the monthly car lift cheaper than daily rideshare?",
    a: "Yes. At AED 5,000/month for 22 working days, you get a fixed, comfortable, door-to-door commute without rebooking — versus daily rideshare uncertainty and surge pricing.",
  },
]

export default function MonthlyCarLiftPage() {
  const monthlyRoutes = ROUTES.map((r) => ({
    from: r.from,
    to: r.to,
    monthly: r.monthlyPrice,
    slug: r.slug,
  }))

  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", url: BASE_URL },
            { name: "Monthly Car Lift", url: `${BASE_URL}/monthly-car-lift` },
          ]),
        ]}
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#9ca3af]">Monthly Car Lift</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 items-start mb-14">
          <div>
            <h1 className="text-4xl font-bold text-white mb-3">Monthly Car Lift Dubai & UAE</h1>
            <p className="text-base text-[#9ca3af] leading-relaxed mb-6 border-l-2 border-[#f59e0b] pl-4">
              Monthly car lift subscription from Sharjah to Dubai is AED 5,000 per month for 22 working days of one-way transport. Fixed price, no surge, no rebooking — your driver picks you up every morning at the agreed time.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { icon: "📅", label: "22 working days", sub: "Full month of commuting" },
                { icon: "💰", label: "Fixed monthly price", sub: "No surge, no surprises" },
                { icon: "🕐", label: "Agreed departure time", sub: "No need to rebook daily" },
                { icon: "❄️", label: "AC comfortable sedan", sub: "Inspected vehicles" },
                { icon: "✅", label: "Verified driver", sub: "Background-checked" },
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
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20monthly%20car%20lift`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-bold py-3 px-6 rounded-xl text-sm"
            >
              Book Monthly Plan →
            </a>
          </div>

          <LeadForm />
        </div>

        {/* Bus charter / schedule poster */}
        <div className="mb-10">
          <Image
            {...IMAGES.busCharterSchedule}
            className="w-full rounded-xl object-cover max-h-96"
            sizes="(max-width:768px) 100vw, 60vw"
          />
        </div>

        {/* Monthly pricing table */}
        <div className="mb-14">
          <h2 className="text-xl font-bold text-white mb-6">Monthly Car Lift Pricing by Route</h2>
          <div className="overflow-x-auto rounded-xl border border-[#252629]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#252629] bg-[#161719]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#9ca3af]">Route</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-[#9ca3af]">Monthly (1-way)</th>
                  <th className="text-right px-4 py-3 text-xs font-semibold text-[#9ca3af] hidden sm:table-cell">Per Day</th>
                  <th className="px-4 py-3 text-right"></th>
                </tr>
              </thead>
              <tbody>
                {monthlyRoutes.map((r, i) => (
                  <tr key={r.slug} className={`border-b border-[#252629] ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#111213]"}`}>
                    <td className="px-4 py-3 text-white font-medium">
                      {r.from} → {r.to}
                    </td>
                    <td className="px-4 py-3 text-right font-bold text-[#f59e0b]">
                      AED {r.monthly}
                    </td>
                    <td className="px-4 py-3 text-right text-[#9ca3af] hidden sm:table-cell">
                      ≈ AED {Math.round(r.monthly / 22)}/day
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link href={`/routes/${r.slug}`} className="text-xs text-[#f59e0b] hover:underline">
                        Details →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[#6b7280] mt-2">Prices last updated September 2026. Contact for exact quote and two-way pricing.</p>
        </div>

        <FaqAccordion faqs={FAQS} title="Monthly Car Lift — Common Questions" />
      </section>
    </>
  )
}
