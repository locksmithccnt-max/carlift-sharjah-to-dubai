import type { Metadata } from "next"
import LocationHub from "@/components/LocationHub"
import { getLocationBySlug } from "@/data/locations"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift Ajman to Dubai & Sharjah | Shared AED 100",
  description:
    "Car lift from Ajman to Dubai and Sharjah: shared seat AED 100, private car AED 180 per trip. Ladies-only option. Verified drivers. Book on WhatsApp.",
  alternates: { canonical: `${BASE_URL}/ajman` },
  openGraph: { url: `${BASE_URL}/ajman` },
}

const FAQS = [
  {
    q: "Is there a car lift service in Ajman?",
    a: "Yes. We operate car lifts from Ajman to Dubai and Ajman to Sharjah: shared seat AED 100, private car AED 180 per trip. Ladies-only option available on all Ajman routes.",
  },
  {
    q: "How much is a car lift from Ajman to Dubai?",
    a: "Car lift from Ajman to Dubai is AED 100 per trip shared or AED 180 private. Monthly plans (22 working days): AED 2,200 shared, AED 3,960 private.",
  },
]

export default function AjmanPage() {
  const location = getLocationBySlug("ajman")
  if (!location) return null
  return <LocationHub location={location} faqs={FAQS} />
}
