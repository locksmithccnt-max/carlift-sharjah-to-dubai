import type { Metadata } from "next"
import Link from "next/link"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift UAE Blog | Commute Tips & Route Guides | Car Lift UAE",
  description:
    "Commute guides, route comparisons, and car lift pricing updates for UAE commuters. Sharjah–Dubai, Ajman–Dubai, and more.",
  alternates: { canonical: `${BASE_URL}/blog` },
}

const POSTS = [
  {
    slug: "sharjah-to-dubai-commute-cost-2026",
    title: "Sharjah to Dubai Commute Cost Comparison 2026",
    excerpt:
      "We compare the real monthly cost of commuting from Sharjah to Dubai by car lift, Careem, RTA bus, and personal car. Updated September 2026.",
    date: "2026-09-01",
    readTime: "5 min",
  },
  {
    slug: "car-lift-vs-careem-vs-rta-sharjah-dubai",
    title: "Car Lift vs Careem vs RTA Bus: Sharjah–Dubai Commute",
    excerpt:
      "A detailed breakdown of every realistic commuting option for the Sharjah–Dubai corridor — cost, convenience, comfort, and travel time.",
    date: "2026-08-15",
    readTime: "7 min",
  },
  {
    slug: "monthly-car-lift-dubai-guide",
    title: "How to Book a Monthly Car Lift in Dubai — Complete Guide",
    excerpt:
      "Everything you need to know about setting up a monthly car lift subscription: what to ask, what to expect, and how to get the best price.",
    date: "2026-08-01",
    readTime: "4 min",
  },
  {
    slug: "ladies-car-lift-sharjah-dubai",
    title: "Ladies Car Lift from Sharjah to Dubai — A Practical Guide",
    excerpt:
      "How the ladies-only car lift works, what routes are available, and what to look for when choosing a service. Safety-first guide for female commuters.",
    date: "2026-07-20",
    readTime: "5 min",
  },
]

export default function BlogPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-[#9ca3af]">Blog</span>
      </nav>

      <h1 className="text-4xl font-bold text-white mb-3">Car Lift UAE — Commute Guides</h1>
      <p className="text-[#9ca3af] text-base mb-10">
        Reference articles on UAE commuting costs, routes, and car lift options. Updated regularly with real pricing data.
      </p>

      <div className="space-y-4">
        {POSTS.map((post) => (
          <article
            key={post.slug}
            className="rounded-xl border border-[#252629] bg-[#161719] p-5 hover:border-[#f59e0b]/30 transition-all"
          >
            <div className="flex items-center gap-3 text-xs text-[#6b7280] mb-2">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-AE", { day: "numeric", month: "long", year: "numeric" })}
              </time>
              <span>·</span>
              <span>{post.readTime} read</span>
            </div>
            <h2 className="text-lg font-bold text-white mb-2">{post.title}</h2>
            <p className="text-sm text-[#9ca3af] leading-relaxed mb-3">{post.excerpt}</p>
            <span className="text-xs text-[#f59e0b]">Coming soon</span>
          </article>
        ))}
      </div>

      <p className="text-xs text-[#6b7280] mt-8 text-center">
        Full articles coming soon. In the meantime, book your car lift on{" "}
        <Link href="/contact" className="text-[#f59e0b] hover:underline">WhatsApp</Link>.
      </p>
    </section>
  )
}
