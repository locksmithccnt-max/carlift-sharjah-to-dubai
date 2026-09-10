import type { Metadata } from "next"
import LocationHub from "@/components/LocationHub"
import { getLocationBySlug } from "@/data/locations"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift Dubai | To Sharjah, Ajman & Al Ain | M1 Group",
  description:
    "Car lift from Dubai to Sharjah from AED 500/day, Dubai to Ajman AED 550/day, Dubai to Al Ain AED 600/day. AED 5,000/month. Intra-Dubai routes available. Book on WhatsApp.",
  alternates: { canonical: `${BASE_URL}/dubai` },
}

const FAQS = [
  {
    q: "Is there a car lift service in Dubai?",
    a: "Yes. We operate car lifts from Dubai to Sharjah, Ajman, Al Ain, and SAIF Zone, plus intra-Dubai routes like Silicon Oasis to Business Bay and International City to Business Bay.",
  },
  {
    q: "How much is car lift in Dubai?",
    a: "Car lift from Dubai depends on your route: Dubai to Sharjah from AED 500/day, Dubai to Ajman from AED 550/day, Dubai to Al Ain from AED 600/day. Monthly plans are AED 5,000.",
  },
]

export default function DubaiPage() {
  const location = getLocationBySlug("dubai")
  if (!location) return null
  return <LocationHub location={location} faqs={FAQS} />
}
