import type { Metadata } from "next"
import LocationHub from "@/components/LocationHub"
import { getLocationBySlug } from "@/data/locations"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift Sharjah | To Dubai, JLT, Business Bay | M1 CarLift UAE",
  description:
    "Car lift from Sharjah to Dubai from AED 22/day, Business Bay AED 26/day, JLT AED 28/day. All Sharjah areas covered. Monthly from AED 500. Ladies option. Book on WhatsApp.",
  alternates: { canonical: `${BASE_URL}/sharjah` },
  keywords: ["car lift sharjah", "car lift in sharjah", "sharjah car lift service"],
}

const FAQS = [
  {
    q: "Is there a car lift service in Sharjah?",
    a: "Yes. We operate daily car lifts from all major Sharjah areas including Al Nahda, Muwaileh, University City, Al Taawun, Al Khan, Rolla, and more to Dubai and other UAE destinations.",
  },
  {
    q: "Which areas in Sharjah do you cover for car lift?",
    a: "We cover Al Nahda, Muwaileh, University City, Al Taawun, Al Khan, Rolla, Al Majaz, Al Wahda, Al Qasimia, Bu Tina, Al Khalidiyah, Al Yarmook, Industrial Areas, and most other Sharjah neighbourhoods.",
  },
  {
    q: "How much is car lift from Sharjah?",
    a: "Car lift from Sharjah depends on your destination: Sharjah to Dubai from AED 22/day, Sharjah to Business Bay from AED 26/day, Sharjah to JLT from AED 28/day. Monthly plans start from AED 500.",
  },
]

export default function SharjahPage() {
  const location = getLocationBySlug("sharjah")
  if (!location) return null
  return <LocationHub location={location} faqs={FAQS} />
}
