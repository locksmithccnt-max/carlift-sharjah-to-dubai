export interface LocationData {
  slug: string
  name: string
  nameAr?: string
  emirate: string
  type: "emirate" | "district"
  description: string
  keyAreas: string[]
  routeSlugs: string[]
  metaTitle: string
  metaDescription: string
}

export const LOCATIONS: LocationData[] = [
  {
    slug: "sharjah",
    name: "Sharjah",
    nameAr: "الشارقة",
    emirate: "Sharjah",
    type: "emirate",
    description:
      "Sharjah is the third-largest emirate in the UAE and home to hundreds of thousands of commuters who travel daily to Dubai and other emirates for work. Our car lift service covers every major Sharjah neighbourhood.",
    keyAreas: [
      "Al Nahda", "Muwaileh", "University City", "Al Taawun", "Al Khan",
      "Rolla", "Al Majaz", "Al Wahda", "Al Qasimia", "Bu Tina",
      "Al Khalidiyah", "Al Yarmook", "Industrial Area 1-18", "Al Ramtha",
    ],
    routeSlugs: [
      "sharjah-to-business-bay", "sharjah-to-dubai", "sharjah-to-jlt",
      "sharjah-to-dip", "sharjah-to-al-quoz", "sharjah-to-al-barsha",
      "sharjah-to-jebel-ali", "sharjah-to-internet-city", "sharjah-to-media-city",
      "sharjah-to-silicon-oasis", "sharjah-to-ras-al-khaimah",
    ],
    metaTitle: "Car Lift from Sharjah | Daily Routes to Dubai & Beyond | Car Lift UAE",
    metaDescription:
      "Book a car lift from Sharjah to Dubai, Business Bay, JLT, DIP, Al Quoz and more. Daily & monthly pricing from AED 25. Ladies option available.",
  },
  {
    slug: "dubai",
    name: "Dubai",
    nameAr: "دبي",
    emirate: "Dubai",
    type: "emirate",
    description:
      "Dubai is the commercial heart of the UAE. Our car lift service connects Dubai areas with Sharjah, Ajman, Abu Dhabi, and intercity destinations, and runs intra-Dubai routes between key residential and commercial zones.",
    keyAreas: [
      "Deira", "Bur Dubai", "Downtown", "Business Bay", "DIFC", "JLT",
      "Internet City", "Media City", "Al Quoz", "Al Barsha", "Jebel Ali",
      "Silicon Oasis", "International City", "DIP", "Al Garhoud",
    ],
    routeSlugs: [
      "dubai-to-sharjah", "dubai-to-ajman", "dubai-to-al-ain",
      "dubai-to-sharjah-saif-zone", "silicon-oasis-to-business-bay",
      "international-city-to-business-bay",
    ],
    metaTitle: "Car Lift Dubai | Daily Commuter Routes from Dubai | Car Lift UAE",
    metaDescription:
      "Car lift service from Dubai to Sharjah, Ajman, Al Ain and within Dubai. Daily from AED 25, monthly from AED 550. Verified drivers, AC comfort.",
  },
  {
    slug: "ajman",
    name: "Ajman",
    nameAr: "عجمان",
    emirate: "Ajman",
    type: "emirate",
    description:
      "Ajman is the smallest emirate in the UAE by area but has a large resident population, many of whom commute daily to Sharjah and Dubai. Our car lift covers key Ajman pickup points.",
    keyAreas: [
      "Ajman Corniche", "Al Rashidiya", "Al Jurf", "City Centre Ajman",
      "Al Hamidiyah", "Al Nuaimiyah", "Al Mwaihat",
    ],
    routeSlugs: ["ajman-to-dubai", "ajman-to-sharjah", "dubai-to-ajman"],
    metaTitle: "Car Lift Ajman | Daily Routes to Dubai & Sharjah | Car Lift UAE",
    metaDescription:
      "Car lift from Ajman to Dubai and Sharjah. Daily pricing from AED 20, monthly from AED 420. Ladies-only option available.",
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    nameAr: "أبوظبي",
    emirate: "Abu Dhabi",
    type: "emirate",
    description:
      "Abu Dhabi routes serve workers commuting between Dubai and the UAE capital. Our Dubai–Abu Dhabi car lift is one of our most popular intercity services.",
    keyAreas: [
      "Abu Dhabi Island", "Khalidiyah", "Mushrif", "Mussafah",
      "Mohammed Bin Zayed City", "Khalifa City", "Reem Island",
    ],
    routeSlugs: [],
    metaTitle: "Car Lift to Abu Dhabi | Dubai–Abu Dhabi Daily Route | Car Lift UAE",
    metaDescription:
      "Car lift from Dubai to Abu Dhabi from AED 55/day. Monthly packages available. Comfortable, punctual intercity service.",
  },
  {
    slug: "ras-al-khaimah",
    name: "Ras Al Khaimah",
    nameAr: "رأس الخيمة",
    emirate: "RAK",
    type: "emirate",
    description:
      "Ras Al Khaimah is the northernmost emirate with a growing economy. We connect RAK residents with Sharjah and Dubai via daily car lift.",
    keyAreas: [
      "RAK City", "Khuzam", "Al Qurm", "Al Hamra", "Julphar", "Saqr Port",
    ],
    routeSlugs: ["sharjah-to-ras-al-khaimah"],
    metaTitle: "Car Lift Ras Al Khaimah | RAK–Sharjah–Dubai Routes | Car Lift UAE",
    metaDescription:
      "Car lift from Ras Al Khaimah to Sharjah and Dubai. Daily and monthly pricing available. Book via WhatsApp.",
  },
  {
    slug: "al-ain",
    name: "Al Ain",
    nameAr: "العين",
    emirate: "Abu Dhabi",
    type: "emirate",
    description:
      "Al Ain is a major inland city in Abu Dhabi emirate. Our Dubai–Al Ain car lift serves the large commuter population travelling between the two cities.",
    keyAreas: [
      "Al Ain City", "Hili", "Zakher", "Al Muwaiji", "Sandstone Hill area",
    ],
    routeSlugs: ["dubai-to-al-ain"],
    metaTitle: "Car Lift Al Ain | Dubai to Al Ain Daily Route | Car Lift UAE",
    metaDescription:
      "Car lift from Dubai to Al Ain from AED 60/day or AED 1,100/month. Early departures to reach Al Ain before 9 AM.",
  },
]

export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS.find((l) => l.slug === slug)
}
