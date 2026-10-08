import type { Metadata } from "next"
import LocationHub from "@/components/LocationHub"
import { getLocationBySlug } from "@/data/locations"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift Dubai | To Sharjah, Ajman & Al Ain",
  description:
    "Car lift from Dubai to Sharjah, Ajman, Al Ain and within Dubai: shared AED 100, private AED 180 per trip. Book on WhatsApp.",
  alternates: { canonical: `${BASE_URL}/dubai` },
  openGraph: { url: `${BASE_URL}/dubai` },
}

const FAQS = [
  {
    q: "Is there a car lift service in Dubai?",
    a: "Yes. We operate car lifts from Dubai to Sharjah, Ajman, Al Ain, and SAIF Zone, plus intra-Dubai routes like Silicon Oasis to Business Bay and International City to Business Bay.",
  },
  {
    q: "How much is car lift in Dubai?",
    a: "Car lift pricing from Dubai is flat on every route: shared seat AED 100 per trip, private car AED 180 per trip — whether Sharjah, Ajman, or Al Ain.",
  },
]

export default function DubaiPage() {
  const location = getLocationBySlug("dubai")
  if (!location) return null
  return <LocationHub location={location} faqs={FAQS} />
}
