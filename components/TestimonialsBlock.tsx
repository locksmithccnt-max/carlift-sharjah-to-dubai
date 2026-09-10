import { TESTIMONIALS } from "@/data/testimonials"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={i < rating ? "#f59e0b" : "#252629"}
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsBlock() {
  const avg = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1)

  return (
    <section aria-label="Customer reviews" className="py-12">
      <div className="flex items-baseline gap-4 mb-8">
        <h2 className="text-2xl font-bold text-white">What Commuters Say</h2>
        <div className="flex items-center gap-2">
          <StarRating rating={5} />
          <span className="text-sm font-semibold text-[#f59e0b]">{avg}</span>
          <span className="text-xs text-[#9ca3af]">({TESTIMONIALS.length} reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              </div>
              <StarRating rating={t.rating} />
            </div>
            <blockquote
              className="text-sm text-[#9ca3af] leading-relaxed"
              itemProp="reviewBody"
            >
              &ldquo;{t.review}&rdquo;
            </blockquote>
            {t.verified && (
              <span className="text-xs text-[#25D366] font-medium">✓ Verified rider</span>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
