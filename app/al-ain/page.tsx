import type { Metadata } from "next"
import LocationHub from "@/components/LocationHub"
import { getLocationBySlug } from "@/data/locations"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift Dubai to Al Ain | Shared AED 100",
  description:
    "Car lift Dubai to Al Ain: shared seat AED 100, private car AED 180 per trip. Early departures, reach Al Ain before 9 AM.",
  alternates: { canonical: `${BASE_URL}/al-ain` },
  openGraph: { url: `${BASE_URL}/al-ain` },
}

export default function AlAinPage() {
  const location = getLocationBySlug("al-ain")
  if (!location) return null
  return <LocationHub location={location} />
}
