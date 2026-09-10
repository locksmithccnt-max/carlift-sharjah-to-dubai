import type { Metadata } from "next"
import LocationHub from "@/components/LocationHub"
import { getLocationBySlug } from "@/data/locations"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift Dubai to Al Ain | AED 600/day or AED 5,000/month | M1 Group",
  description:
    "Car lift from Dubai to Al Ain from AED 600/day or AED 5,000/month. Early morning departures to reach Al Ain before 9 AM. Verified drivers, AC comfort.",
  alternates: { canonical: `${BASE_URL}/al-ain` },
}

export default function AlAinPage() {
  const location = getLocationBySlug("al-ain")
  if (!location) return null
  return <LocationHub location={location} />
}
