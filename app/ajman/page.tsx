import type { Metadata } from "next"
import LocationHub from "@/components/LocationHub"
import { getLocationBySlug } from "@/data/locations"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift Ajman to Dubai & Sharjah | From AED 18/day | M1 CarLift UAE",
  description:
    "Car lift from Ajman to Dubai from AED 27/day or AED 600/month. Ajman to Sharjah from AED 18/day. Ladies-only option. Verified drivers. Book on WhatsApp.",
  alternates: { canonical: `${BASE_URL}/ajman` },
}

const FAQS = [
  {
    q: "Is there a car lift service in Ajman?",
    a: "Yes. We operate car lifts from Ajman to Dubai (from AED 27/day) and Ajman to Sharjah (from AED 18/day). Ladies-only option available on all Ajman routes.",
  },
  {
    q: "How much is a car lift from Ajman to Dubai?",
    a: "Car lift from Ajman to Dubai starts from AED 27 per day or AED 600 per month (22 working days, one-way).",
  },
]

export default function AjmanPage() {
  const location = getLocationBySlug("ajman")
  if (!location) return null
  return <LocationHub location={location} faqs={FAQS} />
}
