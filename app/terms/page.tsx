import type { Metadata } from "next"
import Link from "next/link"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Terms of Service | Car Lift UAE",
  description: "Terms of service for Car Lift UAE.",
  alternates: { canonical: `${BASE_URL}/terms` },
  robots: { index: false },
}

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-[#9ca3af]">Terms of Service</span>
      </nav>

      <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
      <p className="text-xs text-[#6b7280] mb-8">Last updated: September 2026</p>

      <div className="space-y-6 text-sm text-[#9ca3af] leading-relaxed">
        <p>By booking a car lift with Car Lift UAE, you agree to the following terms.</p>

        <h2 className="text-lg font-bold text-white">Bookings & Cancellations</h2>
        <p>Bookings are confirmed by WhatsApp or phone. Monthly subscriptions are non-refundable once the month has started, except where the driver fails to provide service. Daily bookings cancelled less than 2 hours before departure may be charged the trip fee.</p>

        <h2 className="text-lg font-bold text-white">Conduct</h2>
        <p>Passengers are expected to be ready at the agreed pickup point at the agreed time. Excessive lateness (more than 10 minutes) may result in the vehicle departing without you. No smoking in vehicles. Respectful conduct toward drivers and co-passengers is required.</p>

        <h2 className="text-lg font-bold text-white">Liability</h2>
        <p>Car Lift UAE is not liable for delays caused by traffic, accidents, or road conditions beyond our control. We will make best efforts to notify passengers of significant delays as early as possible.</p>

        <h2 className="text-lg font-bold text-white">Contact</h2>
        <p>For any disputes or questions, contact us via <Link href="/contact" className="text-[#f59e0b] hover:underline">WhatsApp or phone</Link>.</p>
      </div>
    </section>
  )
}
