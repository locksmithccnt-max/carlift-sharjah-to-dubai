import type { Metadata } from "next"
import LocationHub from "@/components/LocationHub"
import { getLocationBySlug } from "@/data/locations"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift Abu Dhabi | Dubai to Abu Dhabi Routes",
  description:
    "Car lift from Dubai to Abu Dhabi. Daily and monthly pricing available. Fixed price, comfortable intercity service.",
  alternates: { canonical: `${BASE_URL}/abu-dhabi` },
  openGraph: { url: `${BASE_URL}/abu-dhabi` },
}

export default function AbuDhabiPage() {
  const location = getLocationBySlug("abu-dhabi")
  if (!location) return null
  return <LocationHub location={location} />
}
