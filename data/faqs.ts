export interface FaqItem {
  q: string
  a: string
  category?: string
}

export const GLOBAL_FAQS: FaqItem[] = [
  {
    q: "What is a car lift service in Dubai/Sharjah?",
    a: "A car lift is a shared daily commute where 2–4 co-passengers travelling the same route share a private car and split the cost. It's more comfortable than the bus, cheaper than solo rideshare, and runs on a fixed daily or monthly schedule.",
    category: "general",
  },
  {
    q: "How do I book a car lift?",
    a: "WhatsApp or call us with your pickup location, drop-off point, and preferred departure time. We confirm a driver on your route within a few hours. Monthly subscriptions are set up once and auto-renewed.",
    category: "booking",
  },
  {
    q: "Is there a car lift service for ladies only?",
    a: "Yes. We offer a dedicated ladies-only car lift with verified female drivers for all major routes including Sharjah–Dubai, Ajman–Dubai, and Sharjah–Business Bay. Mention it when you book.",
    category: "ladies",
  },
  {
    q: "How much does a monthly car lift cost?",
    a: "Monthly car lift pricing is flat across all routes: AED 6,000/month for 22 working days of one-way travel. Two-way packages available on request.",
    category: "pricing",
  },
  {
    q: "Are the drivers verified?",
    a: "Yes. All drivers are UAE-licensed, verified by Emirates ID, and have undergone background screening. Vehicles are inspected for safety and AC functionality.",
    category: "safety",
  },
  {
    q: "What if my driver is late?",
    a: "Drivers message passengers in advance if running late. We track punctuality and act on consistent delays. In the rare case you're left stranded, we arrange an alternative or refund the day's fare.",
    category: "reliability",
  },
  {
    q: "Can I book a car lift for a week or a few days?",
    a: "Yes, short-term daily bookings are available. WhatsApp us with your required dates and route and we'll confirm availability.",
    category: "booking",
  },
  {
    q: "How to go to Sharjah from Dubai by car lift?",
    a: "Contact us with your Dubai pickup location (e.g. Deira, Downtown, Business Bay) and your Sharjah drop-off. We match you with an existing evening car lift on the same corridor. Return trips are AED 100 shared or AED 180 private per trip.",
    category: "general",
  },
  {
    q: "Is car lift cheaper than Careem or Uber in Dubai?",
    a: "Our pricing is fixed with no surge: a shared seat is AED 100 per trip, a private car AED 180 per trip — the same on every route. You get door-to-door pickup, a verified driver, and AC comfort at a price agreed upfront.",
    category: "pricing",
  },
  {
    q: "How to book a monthly car lift in Dubai?",
    a: "Send your pickup area, destination, and preferred departure time via WhatsApp. We confirm route, driver, and price. You pay the monthly amount upfront or in two instalments, and travel daily without further bookings.",
    category: "booking",
  },
]

export const MONTHLY_FAQS: FaqItem[] = [
  {
    q: "What is included in the monthly car lift package?",
    a: "22 working days of one-way daily transport, a dedicated driver for your route, fixed departure time, and AC-comfortable sedan or SUV. No surge pricing, no per-trip booking needed.",
  },
  {
    q: "What happens if there are public holidays?",
    a: "Public holiday days are excluded from the monthly count — you're billed only for working days. UAE public holidays and any additional days off agreed with your driver are not charged.",
  },
  {
    q: "Can I change my pickup time?",
    a: "Minor adjustments (±15 minutes) can usually be accommodated with 24 hours notice. Larger changes may require re-matching you with a different driver slot.",
  },
]
