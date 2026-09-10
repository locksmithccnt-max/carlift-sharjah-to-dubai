import type { Metadata } from "next"
import Link from "next/link"
import LeadForm from "@/components/LeadForm"
import { BASE_URL, WHATSAPP_NUMBER, PHONE_NUMBER } from "@/data/routes"

export const metadata: Metadata = {
  title: "Contact Car Lift UAE | Book a Car Lift | Car Lift UAE",
  description:
    "Contact Car Lift UAE to book a daily or monthly car lift. WhatsApp, call, or fill in the quick booking form. We reply within 1 hour.",
  alternates: { canonical: `${BASE_URL}/contact` },
}

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
        <Link href="/" className="hover:text-white">Home</Link>
        <span>/</span>
        <span className="text-[#9ca3af]">Contact</span>
      </nav>

      <h1 className="text-4xl font-bold text-white mb-3">Contact Us</h1>
      <p className="text-[#9ca3af] mb-10">
        Reach out via WhatsApp, call, or use the form below. We reply within 1 hour during operating hours (5:30 AM – 9:00 PM, Mon–Sat).
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20car%20lift`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#161719] border border-[#252629] hover:border-[#25D366]/40 rounded-xl p-4 transition-all"
          >
            <div className="w-10 h-10 bg-[#25D366]/10 rounded-lg flex items-center justify-center text-xl">💬</div>
            <div>
              <div className="font-semibold text-white text-sm">WhatsApp (fastest)</div>
              <div className="text-xs text-[#9ca3af]">+971 50 123 4567 — typical reply in &lt;30 min</div>
            </div>
          </a>

          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="flex items-center gap-4 bg-[#161719] border border-[#252629] hover:border-[#f59e0b]/40 rounded-xl p-4 transition-all"
          >
            <div className="w-10 h-10 bg-[#f59e0b]/10 rounded-lg flex items-center justify-center text-xl">📞</div>
            <div>
              <div className="font-semibold text-white text-sm">Call Us</div>
              <div className="text-xs text-[#9ca3af]">{PHONE_NUMBER}</div>
            </div>
          </a>

          <div className="flex items-start gap-4 bg-[#161719] border border-[#252629] rounded-xl p-4">
            <div className="w-10 h-10 bg-[#161719] border border-[#252629] rounded-lg flex items-center justify-center text-xl">🕐</div>
            <div>
              <div className="font-semibold text-white text-sm">Operating Hours</div>
              <div className="text-xs text-[#9ca3af] mt-1 space-y-0.5">
                <div>Mon–Fri: 5:30 AM – 9:00 PM</div>
                <div>Saturday: 6:00 AM – 6:00 PM</div>
                <div>Sunday: WhatsApp only</div>
              </div>
            </div>
          </div>

          <div className="bg-[#161719] border border-[#252629] rounded-xl p-4">
            <div className="font-semibold text-white text-sm mb-2">Service Area</div>
            <div className="text-xs text-[#9ca3af] leading-relaxed">
              Sharjah · Dubai · Ajman · Abu Dhabi · Ras Al Khaimah · Al Ain
            </div>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  )
}
