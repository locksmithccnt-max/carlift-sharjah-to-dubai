import type { Metadata } from "next"
import LocationHub from "@/components/LocationHub"
import { getLocationBySlug } from "@/data/locations"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift Ras Al Khaimah | Shared AED 100",
  description:
    "Car lift from Sharjah to Ras Al Khaimah: shared seat AED 100, private car AED 180 per trip. Direct intercity service, verified drivers. Book on WhatsApp.",
  alternates: { canonical: `${BASE_URL}/ras-al-khaimah` },
  openGraph: { url: `${BASE_URL}/ras-al-khaimah` },
}

export default function RAKPage() {
  const location = getLocationBySlug("ras-al-khaimah")
  if (!location) return null
  return <LocationHub location={location} />
}
