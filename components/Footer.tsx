import Link from "next/link"
import { PHONE_NUMBER, WHATSAPP_NUMBER, BUSINESS_NAME } from "@/data/routes"

const ROUTE_LINKS = [
  { label: "Sharjah to Dubai", href: "/sharjah-to-dubai" },
  { label: "Sharjah to Business Bay", href: "/routes/sharjah-to-business-bay" },
  { label: "Sharjah to JLT", href: "/routes/sharjah-to-jlt" },
  { label: "Sharjah to DIP", href: "/routes/sharjah-to-dip" },
  { label: "Sharjah to Al Quoz", href: "/routes/sharjah-to-al-quoz" },
  { label: "Ajman to Dubai", href: "/routes/ajman-to-dubai" },
  { label: "Dubai to Al Ain", href: "/routes/dubai-to-al-ain" },
  { label: "All Routes", href: "/services" },
]

const SERVICE_LINKS = [
  { label: "Daily Car Lift", href: "/services" },
  { label: "Monthly Car Lift", href: "/monthly-car-lift" },
  { label: "Ladies Car Lift", href: "/ladies-car-lift" },
  { label: "Carpool Dubai", href: "/carpool" },
  { label: "Pick and Drop", href: "/pick-and-drop" },
]

const LOCATION_LINKS = [
  { label: "Car Lift Sharjah", href: "/sharjah" },
  { label: "Car Lift Dubai", href: "/dubai" },
  { label: "Car Lift Ajman", href: "/ajman" },
  { label: "Car Lift Abu Dhabi", href: "/abu-dhabi" },
  { label: "Car Lift RAK", href: "/ras-al-khaimah" },
  { label: "Car Lift Al Ain", href: "/al-ain" },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#111213] border-t border-[#252629] mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="font-bold text-lg text-white">
              Car Lift <span className="text-[#f59e0b]">UAE</span>
            </Link>
            <p className="mt-3 text-sm text-[#9ca3af] leading-relaxed max-w-xs">
              Reliable daily car lift and shared ride service on Sharjah–Dubai and intercity UAE routes. Fixed monthly pricing, verified drivers, ladies option.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
                className="text-sm text-[#9ca3af] hover:text-white transition-colors"
              >
                📞 {PHONE_NUMBER}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#9ca3af] hover:text-[#25D366] transition-colors"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6b7280] mb-3">Popular Routes</h3>
            <ul className="space-y-2">
              {ROUTE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#9ca3af] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6b7280] mb-3">Services</h3>
            <ul className="space-y-2">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#9ca3af] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6b7280] mb-3">By Location</h3>
            <ul className="space-y-2">
              {LOCATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#9ca3af] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#6b7280] mb-3">Company</h3>
              <ul className="space-y-2">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Reviews", href: "/reviews" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Blog", href: "/blog" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#9ca3af] hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#252629] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-[#6b7280]">
            © {year} {BUSINESS_NAME}. All rights reserved. Service area: UAE.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-xs text-[#6b7280] hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-[#6b7280] hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
