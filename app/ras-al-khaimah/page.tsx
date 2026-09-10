import type { Metadata } from "next"
import LocationHub from "@/components/LocationHub"
import { getLocationBySlug } from "@/data/locations"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift Ras Al Khaimah | Sharjah to RAK AED 31/day | M1 CarLift UAE",
  description:
    "Car lift from Sharjah to Ras Al Khaimah from AED 31/day or AED 680/month. Direct intercity service, verified drivers. Book on WhatsApp.",
  alternates: { canonical: `${BASE_URL}/ras-al-khaimah` },
}

export default function RAKPage() {
  const location = getLocationBySlug("ras-al-khaimah")
  if (!location) return null
  return <LocationHub location={location} />
}
