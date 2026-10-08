import type { Metadata } from "next"
import LocationHub from "@/components/LocationHub"
import { getLocationBySlug } from "@/data/locations"
import { BASE_URL } from "@/data/routes"

export const metadata: Metadata = {
  title: "Car Lift Sharjah | To Dubai, JLT, Business Bay",
  description:
    "Car lift from Sharjah to Dubai, Business Bay, JLT and all Dubai districts: shared AED 100, private AED 180 per trip. Ladies option available.",
  alternates: { canonical: `${BASE_URL}/sharjah` },
  openGraph: { url: `${BASE_URL}/sharjah` },
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
    a: "Car lift pricing from Sharjah is flat on every destination: shared seat AED 100 per trip, private car AED 180 per trip. Monthly plan: AED 6,000 for 22 working days.",
  },
]

export default function SharjahPage() {
  const location = getLocationBySlug("sharjah")
  if (!location) return null
  return <LocationHub location={location} faqs={FAQS} />
}
