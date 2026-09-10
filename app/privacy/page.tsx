import type { Metadata } from "next"
import Link from "next/link"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Privacy Policy | Car Lift UAE",
  description: "Privacy policy for Car Lift UAE — how we handle your data.",
  alternates: { canonical: `${BASE_URL}/privacy` },
  robots: { index: false },
}

export default function PrivacyPage() {
  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-[#9ca3af]">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
      <p className="text-xs text-[#6b7280] mb-8">Last updated: September 2026</p>

      <div className="space-y-6 text-sm text-[#9ca3af] leading-relaxed">
        <p>Car Lift UAE (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is committed to protecting your privacy. This policy explains what personal information we collect and how we use it.</p>

        <h2 className="text-lg font-bold text-white">Information We Collect</h2>
        <p>When you contact us via WhatsApp or our booking form, we collect your name, phone number, and pickup/drop-off details. We use this information solely to arrange your car lift service.</p>

        <h2 className="text-lg font-bold text-white">How We Use Your Information</h2>
        <p>We use your contact details to confirm bookings, match you with a driver, and communicate about your trips. We do not sell or share your data with third parties outside of our driver network.</p>

        <h2 className="text-lg font-bold text-white">Analytics</h2>
        <p>This website uses Google Analytics 4 to understand how visitors use the site. This data is anonymised and does not identify you personally.</p>

        <h2 className="text-lg font-bold text-white">Contact</h2>
        <p>For privacy questions, contact us via <Link href="/contact" className="text-[#f59e0b] hover:underline">WhatsApp or phone</Link>.</p>
      </div>
    </section>
  )
}
