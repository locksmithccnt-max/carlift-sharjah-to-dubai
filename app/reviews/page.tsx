import type { Metadata } from "next"
import Link from "next/link"
import JsonLd from "@/components/JsonLd"
import { reviewsSchema } from "@/lib/schema"
import { TESTIMONIALS } from "@/data/testimonials"
import { BASE_URL, WHATSAPP_NUMBER } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift UAE Reviews | Customer Reviews & Ratings | Car Lift UAE",
  description:
    "Read genuine reviews from Car Lift UAE customers. 4.9/5 star rating from daily commuters on Sharjah–Dubai, Ajman–Dubai and other routes.",
  alternates: { canonical: `${BASE_URL}/reviews` },
}

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < n ? "#f59e0b" : "#252629"} aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const avg = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1)

  return (
    <>
      <JsonLd data={reviewsSchema(TESTIMONIALS)} />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#9ca3af]">Reviews</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">Car Lift UAE — Customer Reviews</h1>
          <div className="flex items-center gap-3 mt-2">
            <Stars n={5} />
            <span className="text-2xl font-black text-[#f59e0b]">{avg}</span>
            <span className="text-sm text-[#9ca3af]">out of 5 · {TESTIMONIALS.length} verified reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="rounded-xl border border-[#252629] bg-[#161719] p-5 flex flex-col gap-3"
              itemScope
              itemType="https://schema.org/Review"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-sm text-white" itemProp="author">{t.name}</p>
                  <p className="text-xs text-[#6b7280] mt-0.5">{t.route}</p>
                  <p className="text-xs text-[#6b7280]">{new Date(t.date).toLocaleDateString("en-AE", { month: "short", year: "numeric" })}</p>
                </div>
                <Stars n={t.rating} />
              </div>
              <blockquote className="text-sm text-[#9ca3af] leading-relaxed" itemProp="reviewBody">
                &ldquo;{t.review}&rdquo;
              </blockquote>
              {t.verified && <span className="text-xs text-[#25D366] font-medium">✓ Verified rider</span>}
            </article>
          ))}
        </div>

        <div className="rounded-xl border border-[#f59e0b]/20 bg-[#f59e0b]/5 p-6 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Join hundreds of daily commuters</h2>
          <p className="text-sm text-[#9ca3af] mb-4">Book your car lift today and experience the difference.</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20car%20lift`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-bold py-3 px-6 rounded-xl text-sm"
          >
            Book on WhatsApp →
          </a>
        </div>
      </section>
    </>
  )
}
