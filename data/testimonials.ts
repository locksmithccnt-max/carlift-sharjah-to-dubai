export interface Testimonial {
  id: string
  name: string
  route: string
  rating: number
  review: string
  date: string
  verified: boolean
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Fatima A.",
    route: "Sharjah (Al Nahda) → Business Bay",
    rating: 5,
    review:
      "Been using this car lift for 8 months. Driver is always on time at 7:15 AM, car is clean and AC works well. Monthly price is fixed — no surprise bills. Highly recommend for anyone commuting from Sharjah to Business Bay daily.",
    date: "2026-08-15",
    verified: true,
  },
  {
    id: "t2",
    name: "Mohammed R.",
    route: "Sharjah (Muwaileh) → JLT",
    rating: 5,
    review:
      "I was paying AED 40–50 each way on Careem. This monthly car lift saves me over AED 600 a month. Driver is professional, the car is comfortable, and I can work on my laptop during the commute. Worth every dirham.",
    date: "2026-07-22",
    verified: true,
  },
  {
    id: "t3",
    name: "Priya S.",
    route: "Ajman → Dubai (DIFC)",
    rating: 5,
    review:
      "I specifically asked for a ladies-only car lift and they arranged it without any hassle. Female driver, clean car, door-to-door service. This is exactly what working women in Ajman need.",
    date: "2026-08-01",
    verified: true,
  },
  {
    id: "t4",
    name: "Ahmed K.",
    route: "Sharjah → DIP (Dubai Investment Park)",
    rating: 4,
    review:
      "Good service for a long route. Driver knows the fastest way to avoid E311 traffic. Sometimes 5–10 mins late but they always message in advance. Monthly pricing is transparent and fair.",
    date: "2026-06-18",
    verified: true,
  },
  {
    id: "t5",
    name: "Sarah L.",
    route: "Silicon Oasis → Business Bay",
    rating: 5,
    review:
      "Saves me 45 minutes of Metro + bus every day. The car is always comfortable and the other passengers are professional and quiet. Best commute decision I've made since moving to Dubai.",
    date: "2026-08-29",
    verified: true,
  },
  {
    id: "t6",
    name: "Hassan M.",
    route: "Sharjah (University City) → Al Quoz",
    rating: 5,
    review:
      "Reliable, affordable, and the driver is genuinely punctual. I've referred three colleagues who all signed up for the monthly plan. Great for anyone working in Al Quoz Industrial Area.",
    date: "2026-07-10",
    verified: true,
  },
]
