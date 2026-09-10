export interface RouteData {
  slug: string
  from: string
  to: string
  fromEmirate: string
  toEmirate: string
  priceFrom: number
  monthlyPrice: number
  durationEst: string
  distance: string
  popularPickups: string[]
  popularDropoffs: string[]
  shortDescription: string
  longDescription: string
  faqs: Array<{ q: string; a: string }>
  keywords: string[]
  volume?: number
}

export const ROUTES: RouteData[] = [
  {
    slug: "sharjah-to-business-bay",
    from: "Sharjah",
    to: "Business Bay",
    fromEmirate: "Sharjah",
    toEmirate: "Dubai",
    priceFrom: 530,
    monthlyPrice: 5000,
    durationEst: "35–50 min",
    distance: "28 km",
    popularPickups: ["Al Nahda", "Muwaileh", "University City", "Al Taawun", "Al Khan"],
    popularDropoffs: ["Executive Towers", "Bay Avenue", "Damac Maison", "Opus Tower", "Dubai Canal"],
    shortDescription:
      "Reliable daily car lift from Sharjah to Business Bay from AED 530/day or AED 5,000/month. AC-comfortable, punctual pick-ups from Al Nahda, Muwaileh, Al Taawun, and surrounding Sharjah areas.",
    longDescription:
      "Business Bay is one of the busiest commercial hubs in Dubai, and commuters from Sharjah make this trip every weekday. Our car lift covers the full Sharjah–Business Bay corridor with flexible morning departure slots (6:00 AM – 9:00 AM) and evening return trips. Fixed monthly pricing means no meter anxiety.",
    faqs: [
      {
        q: "How much is a car lift from Sharjah to Business Bay?",
        a: "Daily car lift from Sharjah to Business Bay costs AED 530 per trip. Monthly packages are AED 5,000 covering 22 working days of one-way service.",
      },
      {
        q: "How long does it take to travel from Sharjah to Business Bay?",
        a: "The journey typically takes 35–50 minutes depending on traffic. Morning rush (7:30–9:00 AM) can extend to 55–65 minutes. We plan departure times to get you there by 9 AM.",
      },
      {
        q: "Do you offer ladies-only car lift from Sharjah to Business Bay?",
        a: "Yes. We have a dedicated ladies-only option with female drivers for the Sharjah–Business Bay route. Mention it when booking.",
      },
      {
        q: "Which areas in Sharjah do you pick up from for Business Bay?",
        a: "We cover Al Nahda, Muwaileh, University City, Al Taawun, Al Khan, Al Majaz, Al Wahda, and most central Sharjah neighbourhoods. Contact us to confirm your exact pickup point.",
      },
    ],
    keywords: ["car lift sharjah to business bay", "sharjah to business bay car lift", "car pool business bay sharjah"],
    volume: 480,
  },
  {
    slug: "sharjah-to-dubai",
    from: "Sharjah",
    to: "Dubai",
    fromEmirate: "Sharjah",
    toEmirate: "Dubai",
    priceFrom: 500,
    monthlyPrice: 5000,
    durationEst: "30–55 min",
    distance: "20–35 km",
    popularPickups: ["Al Nahda", "Al Wahda", "Rolla", "Al Qasimiya", "Abu Shagara", "Al Khan", "Butina"],
    popularDropoffs: ["JLT", "Media City", "TECOM", "Al Barsha", "Business Bay", "Internet City", "JBR", "Marina"],
    shortDescription:
      "Daily car lift from Sharjah to Dubai from AED 500/day or AED 5,000/month. Morning departures at 8, 9, 10 AM — evening returns at 5, 6, 7 PM. Verified drivers, AC comfort, fixed pricing.",
    longDescription:
      "The Sharjah–Dubai corridor is one of the busiest commuting routes in the UAE. M1 CarLift UAE operates Toyota Coaster and Mitsubishi Fuso Rosa minibuses on this route every working day. Morning pick-ups from Sharjah at 8:00, 9:00, and 10:00 AM. Evening returns from Dubai at 5:00, 6:00, and 7:00 PM. Fixed monthly pricing means no surge and no rebooking.",
    faqs: [
      {
        q: "How much is a car lift from Sharjah to Dubai?",
        a: "Car lift from Sharjah to Dubai costs AED 500 per day. Monthly subscriptions are AED 5,000 for one-way daily trips (22 working days).",
      },
      {
        q: "Is there a car lift service from Dubai to Sharjah?",
        a: "Yes. We run return trips from Dubai to Sharjah in the evening. Both directions can be combined in a monthly package.",
      },
      {
        q: "How to go to Sharjah from Dubai by car lift?",
        a: "WhatsApp or call us with your pickup location, drop-off point, and preferred departure time. We match you with a driver on the same route and confirm a fixed monthly or daily rate.",
      },
    ],
    keywords: ["car lift sharjah to dubai", "dubai to sharjah car lift", "sharjah dubai carpool"],
    volume: 880,
  },
  {
    slug: "dubai-to-sharjah",
    from: "Dubai",
    to: "Sharjah",
    fromEmirate: "Dubai",
    toEmirate: "Sharjah",
    priceFrom: 500,
    monthlyPrice: 5000,
    durationEst: "30–55 min",
    distance: "20–35 km",
    popularPickups: ["Deira", "Downtown", "Business Bay", "BurJuman", "Al Garhoud"],
    popularDropoffs: ["Al Nahda", "Muwaileh", "Al Taawun", "Rolla", "Industrial Area"],
    shortDescription:
      "Evening and morning car lift from Dubai to Sharjah from AED 500/day. Fixed monthly pricing AED 5,000, no surge, verified drivers.",
    longDescription:
      "Many Sharjah residents working in Dubai need a reliable evening car lift back home. Our Dubai-to-Sharjah service runs from key Dubai drop-off points and covers all major Sharjah neighbourhoods.",
    faqs: [
      {
        q: "How much does a car lift from Dubai to Sharjah cost?",
        a: "AED 500 per trip, or AED 5,000/month for daily one-way service. Two-way monthly packages also available — contact us for pricing.",
      },
      {
        q: "What time do Dubai to Sharjah car lifts depart?",
        a: "Morning pick-ups from Sharjah at 6:30–8:30 AM, return from Dubai at 5:00–7:30 PM. Custom times available for shift workers.",
      },
    ],
    keywords: ["dubai to sharjah car lift", "car lift dubai to sharjah", "dubai sharjah carpool"],
    volume: 110,
  },
  {
    slug: "sharjah-to-jlt",
    from: "Sharjah",
    to: "JLT (Jumeirah Lake Towers)",
    fromEmirate: "Sharjah",
    toEmirate: "Dubai",
    priceFrom: 550,
    monthlyPrice: 5000,
    durationEst: "45–65 min",
    distance: "42 km",
    popularPickups: ["Al Nahda", "Muwaileh", "University City", "Al Taawun"],
    popularDropoffs: ["Cluster A", "Cluster B", "Cluster C", "JLT Metro", "DMCC"],
    shortDescription:
      "Car lift from Sharjah to JLT from AED 550/day or AED 5,000/month. Covers all JLT clusters and DMCC area.",
    longDescription:
      "Jumeirah Lake Towers is a major business and residential district 42 km from central Sharjah. Our car lift covers morning departures from key Sharjah areas and drop-offs across all JLT clusters.",
    faqs: [
      {
        q: "How much is the car lift from Sharjah to JLT?",
        a: "AED 550 per day or AED 5,000 per month for one-way daily trips. Two-way monthly packages are available.",
      },
      {
        q: "How long is the car lift journey from Sharjah to JLT?",
        a: "Approximately 45–65 minutes on weekday mornings. We depart early enough to beat the worst of the E11 and Sheikh Zayed Road traffic.",
      },
    ],
    keywords: ["car lift sharjah to jlt", "sharjah to jumeirah lake towers car lift", "sharjah jlt carpool"],
  },
  {
    slug: "sharjah-to-dip",
    from: "Sharjah",
    to: "Dubai Investment Park (DIP)",
    fromEmirate: "Sharjah",
    toEmirate: "Dubai",
    priceFrom: 560,
    monthlyPrice: 5000,
    durationEst: "50–70 min",
    distance: "48 km",
    popularPickups: ["Al Nahda", "Muwaileh", "Al Taawun", "Rolla"],
    popularDropoffs: ["DIP 1", "DIP 2", "Al Maktoum Airport area"],
    shortDescription:
      "Car lift from Sharjah to Dubai Investment Park (DIP) from AED 560/day or AED 5,000/month. Direct, punctual service covering DIP 1 and DIP 2.",
    longDescription:
      "DIP is a large mixed-use zone in southwest Dubai. Workers commuting from Sharjah benefit most from a shared car lift given the limited public transport options on this route.",
    faqs: [
      {
        q: "Is there a car lift from Sharjah to DIP?",
        a: "Yes. We operate daily car lifts from Sharjah to Dubai Investment Park (DIP 1 and DIP 2), departing Sharjah between 6:00–8:00 AM.",
      },
      {
        q: "How much is the car lift from Sharjah to DIP?",
        a: "AED 560 per trip or AED 5,000 per month (one-way, 22 working days).",
      },
    ],
    keywords: ["car lift sharjah to dip", "sharjah to dubai investment park car lift", "car lift sharjah dip"],
  },
  {
    slug: "sharjah-to-al-quoz",
    from: "Sharjah",
    to: "Al Quoz",
    fromEmirate: "Sharjah",
    toEmirate: "Dubai",
    priceFrom: 520,
    monthlyPrice: 5000,
    durationEst: "40–55 min",
    distance: "33 km",
    popularPickups: ["Al Nahda", "Muwaileh", "Rolla", "Al Wahda"],
    popularDropoffs: ["Al Quoz Industrial", "Al Quoz Mall", "Etihad Museum area"],
    shortDescription:
      "Daily car lift from Sharjah to Al Quoz from AED 520/day or AED 5,000/month. Serves Al Quoz Industrial and residential zones.",
    longDescription:
      "Al Quoz is home to a large industrial and light-commercial zone popular with technicians, retail staff, and creative-industry workers. Our Sharjah–Al Quoz car lift runs morning and evening.",
    faqs: [
      {
        q: "How much is a car lift from Sharjah to Al Quoz?",
        a: "AED 520 per trip, or AED 5,000 per month for daily one-way service.",
      },
    ],
    keywords: ["car lift sharjah to al quoz", "sharjah al quoz carpool"],
  },
  {
    slug: "sharjah-to-al-barsha",
    from: "Sharjah",
    to: "Al Barsha",
    fromEmirate: "Sharjah",
    toEmirate: "Dubai",
    priceFrom: 540,
    monthlyPrice: 5000,
    durationEst: "40–60 min",
    distance: "37 km",
    popularPickups: ["Al Nahda", "Muwaileh", "Al Taawun", "Rolla"],
    popularDropoffs: ["Al Barsha 1", "Mall of the Emirates area", "Al Barsha South"],
    shortDescription:
      "Car lift from Sharjah to Al Barsha from AED 540/day or AED 5,000/month. Covers Al Barsha 1, 2, 3, and Al Barsha South.",
    longDescription:
      "Al Barsha is a prime residential and commercial district on Sheikh Zayed Road. Workers from Sharjah commuting to Al Barsha schools, clinics, and offices find the monthly car lift cost significantly lower than rideshare apps.",
    faqs: [
      {
        q: "How much is a car lift from Sharjah to Al Barsha?",
        a: "AED 540 per day or AED 5,000 per month (22 working days, one-way).",
      },
    ],
    keywords: ["car lift sharjah to al barsha", "sharjah al barsha car lift"],
  },
  {
    slug: "sharjah-to-jebel-ali",
    from: "Sharjah",
    to: "Jebel Ali",
    fromEmirate: "Sharjah",
    toEmirate: "Dubai",
    priceFrom: 580,
    monthlyPrice: 5000,
    durationEst: "55–80 min",
    distance: "55 km",
    popularPickups: ["Al Nahda", "Muwaileh", "Al Taawun", "Industrial Area"],
    popularDropoffs: ["Jebel Ali Free Zone (JAFZA)", "Jebel Ali Port", "DWC area"],
    shortDescription:
      "Long-route car lift from Sharjah to Jebel Ali / JAFZA from AED 580/day or AED 5,000/month. Early departures to beat E11 traffic.",
    longDescription:
      "Sharjah–Jebel Ali is one of the longer commuting routes in the UAE. Our shared car lift service pools 3–4 co-workers on the same route, dramatically cutting costs versus solo Careem rides.",
    faqs: [
      {
        q: "How much is a car lift from Sharjah to Jebel Ali?",
        a: "AED 580/trip or AED 5,000/month. Jebel Ali Free Zone specific drop-offs available.",
      },
      {
        q: "How long is the drive from Sharjah to Jebel Ali?",
        a: "55–80 minutes, depending on morning traffic on Sheikh Zayed Road and E11. We depart Sharjah at 6:00–6:30 AM for workers with 8 AM starts.",
      },
    ],
    keywords: ["car lift sharjah to jebel ali", "sharjah jafza car lift", "sharjah jebel ali carpool"],
  },
  {
    slug: "sharjah-to-internet-city",
    from: "Sharjah",
    to: "Dubai Internet City",
    fromEmirate: "Sharjah",
    toEmirate: "Dubai",
    priceFrom: 550,
    monthlyPrice: 5000,
    durationEst: "45–65 min",
    distance: "40 km",
    popularPickups: ["Al Nahda", "Muwaileh", "University City", "Al Taawun"],
    popularDropoffs: ["DIC Tower", "Axiom Telecom HQ", "Microsoft Gulf", "IN5 Tech"],
    shortDescription:
      "Car lift from Sharjah to Dubai Internet City from AED 550/day or AED 5,000/month. Serving tech-sector commuters at DIC and neighboring Media City.",
    longDescription:
      "Dubai Internet City hosts hundreds of tech companies and attracts a large professional workforce from Sharjah. Our car lift offers a comfortable, Wi-Fi-friendly commute with fixed monthly pricing.",
    faqs: [
      {
        q: "Is there a car lift from Sharjah to Dubai Internet City?",
        a: "Yes, we operate daily departures from major Sharjah areas to Dubai Internet City. Monthly plans are AED 5,000.",
      },
    ],
    keywords: ["car lift sharjah to internet city", "sharjah dubai internet city car lift", "car lift sharjah dic"],
  },
  {
    slug: "sharjah-to-media-city",
    from: "Sharjah",
    to: "Dubai Media City",
    fromEmirate: "Sharjah",
    toEmirate: "Dubai",
    priceFrom: 550,
    monthlyPrice: 5000,
    durationEst: "45–65 min",
    distance: "40 km",
    popularPickups: ["Al Nahda", "Muwaileh", "University City", "Al Taawun"],
    popularDropoffs: ["CNN Building", "Al Thuraya Tower", "Dubai Media City Amphitheatre"],
    shortDescription:
      "Car lift from Sharjah to Dubai Media City from AED 550/day or AED 5,000/month.",
    longDescription:
      "Media City is home to broadcasters, publishing houses, and PR agencies. Our Sharjah–Media City car lift is popular with morning-shift media professionals.",
    faqs: [
      {
        q: "How much is a car lift from Sharjah to Dubai Media City?",
        a: "AED 550 per day or AED 5,000 per month (one-way, 22 working days).",
      },
    ],
    keywords: ["car lift sharjah to media city", "sharjah dubai media city car lift"],
  },
  {
    slug: "sharjah-to-silicon-oasis",
    from: "Sharjah",
    to: "Dubai Silicon Oasis",
    fromEmirate: "Sharjah",
    toEmirate: "Dubai",
    priceFrom: 510,
    monthlyPrice: 5000,
    durationEst: "25–40 min",
    distance: "22 km",
    popularPickups: ["Al Nahda", "Muwaileh", "University City", "Halwan Suburb"],
    popularDropoffs: ["DSO Tech Hub", "Cedre Villas", "Silicon Gate"],
    shortDescription:
      "Short-route car lift from Sharjah to Dubai Silicon Oasis (DSO) from AED 510/day or AED 5,000/month. One of the closest Dubai tech zones to Sharjah.",
    longDescription:
      "Dubai Silicon Oasis is only 22 km from central Sharjah, making this one of the quickest commutes on our network. Ideal for tech workers, university staff, and healthcare workers.",
    faqs: [
      {
        q: "How much is a car lift from Sharjah to Silicon Oasis?",
        a: "AED 510 per trip or AED 5,000 per month for daily one-way service.",
      },
    ],
    keywords: ["car lift sharjah to silicon oasis", "sharjah dso car lift", "silicon oasis sharjah carpool"],
  },
  {
    slug: "silicon-oasis-to-business-bay",
    from: "Dubai Silicon Oasis",
    to: "Business Bay",
    fromEmirate: "Dubai",
    toEmirate: "Dubai",
    priceFrom: 500,
    monthlyPrice: 5000,
    durationEst: "30–45 min",
    distance: "25 km",
    popularPickups: ["DSO Tech Hub", "Cedre Villas", "Silicon Gate"],
    popularDropoffs: ["Executive Towers", "Bay Avenue", "Opus Tower", "Dubai Canal Bridge"],
    shortDescription:
      "Intra-Dubai car lift from Silicon Oasis to Business Bay from AED 500/day or AED 5,000/month. Avoids Metro interchange hassle.",
    longDescription:
      "Residents of Dubai Silicon Oasis commuting to Business Bay face a lengthy Metro + bus journey. Our direct car lift cuts travel time significantly.",
    faqs: [
      {
        q: "Is there a car lift from Silicon Oasis to Business Bay?",
        a: "Yes. We operate daily car lifts from Dubai Silicon Oasis to Business Bay, starting from AED 500/trip.",
      },
    ],
    keywords: ["car lift silicon oasis to business bay", "dso business bay carpool"],
  },
  {
    slug: "international-city-to-business-bay",
    from: "International City",
    to: "Business Bay",
    fromEmirate: "Dubai",
    toEmirate: "Dubai",
    priceFrom: 500,
    monthlyPrice: 5000,
    durationEst: "30–50 min",
    distance: "24 km",
    popularPickups: ["China Cluster", "England Cluster", "Spain Cluster", "Persia Cluster"],
    popularDropoffs: ["Executive Towers", "Damac Maison", "Bay Avenue"],
    shortDescription:
      "Car lift from International City to Business Bay from AED 500/day or AED 5,000/month.",
    longDescription:
      "International City has a large resident population with limited direct public transport to Business Bay. Our shared car lift solves this gap affordably.",
    faqs: [
      {
        q: "How much is a car lift from International City to Business Bay?",
        a: "AED 500 per day or AED 5,000 per month (22 working days, one-way).",
      },
    ],
    keywords: ["car lift international city to business bay", "international city business bay carpool"],
  },
  {
    slug: "ajman-to-dubai",
    from: "Ajman",
    to: "Dubai",
    fromEmirate: "Ajman",
    toEmirate: "Dubai",
    priceFrom: 550,
    monthlyPrice: 5000,
    durationEst: "40–65 min",
    distance: "40 km",
    popularPickups: ["Ajman City Centre", "Al Rashidiya", "Al Jurf", "Al Hamidiyah", "Corniche"],
    popularDropoffs: ["Deira", "Bur Dubai", "Downtown", "Business Bay", "DIFC"],
    shortDescription:
      "Daily car lift from Ajman to Dubai from AED 550/day or AED 5,000/month. Comfortable, fixed-price alternative to RTA or solo rideshare.",
    longDescription:
      "Commuters from Ajman travelling to Dubai's major business districts save significantly on monthly transport costs with our shared car lift versus Careem or Uber at peak-hour surge prices.",
    faqs: [
      {
        q: "How much is a car lift from Ajman to Dubai?",
        a: "AED 550 per day or AED 5,000 per month for daily one-way service.",
      },
      {
        q: "Do you offer ladies-only car lift from Ajman to Dubai?",
        a: "Yes. We offer a ladies-only option for the Ajman–Dubai route with female drivers.",
      },
    ],
    keywords: ["car lift ajman to dubai", "ajman dubai car lift", "car lift from ajman to dubai for ladies"],
  },
  {
    slug: "ajman-to-sharjah",
    from: "Ajman",
    to: "Sharjah",
    fromEmirate: "Ajman",
    toEmirate: "Sharjah",
    priceFrom: 500,
    monthlyPrice: 5000,
    durationEst: "20–35 min",
    distance: "18 km",
    popularPickups: ["Ajman City Centre", "Al Rashidiya", "Al Jurf", "Corniche"],
    popularDropoffs: ["Rolla Square", "Al Taawun", "University City", "Sharjah City Centre"],
    shortDescription:
      "Short-route car lift from Ajman to Sharjah from AED 500/day or AED 5,000/month.",
    longDescription:
      "Ajman and Sharjah are neighbours, and many residents commute between them for work, study, or shopping. Our car lift connects key Ajman pickup points with Sharjah business and university zones.",
    faqs: [
      {
        q: "How much is a car lift from Ajman to Sharjah?",
        a: "AED 500 per trip or AED 5,000 per month.",
      },
    ],
    keywords: ["car lift ajman to sharjah", "ajman sharjah carpool"],
  },
  {
    slug: "dubai-to-ajman",
    from: "Dubai",
    to: "Ajman",
    fromEmirate: "Dubai",
    toEmirate: "Ajman",
    priceFrom: 550,
    monthlyPrice: 5000,
    durationEst: "40–65 min",
    distance: "40 km",
    popularPickups: ["Deira", "Bur Dubai", "Al Qusais", "Al Nahda Dubai"],
    popularDropoffs: ["Ajman Corniche", "Al Rashidiya", "City Centre Ajman", "Al Jurf"],
    shortDescription:
      "Car lift from Dubai to Ajman from AED 550/day or AED 5,000/month. Evening return service from major Dubai areas.",
    longDescription:
      "Workers in Dubai who live in Ajman benefit from our evening return car lift. Fixed pricing, comfortable sedans, and punctual departure from key Dubai drop-off zones.",
    faqs: [
      {
        q: "How much is a car lift from Dubai to Ajman?",
        a: "AED 550 per day or AED 5,000 per month for daily one-way service back to Ajman.",
      },
    ],
    keywords: ["car lift dubai to ajman", "dubai ajman carpool", "car lift from dubai to ajman"],
  },
  {
    slug: "dubai-to-al-ain",
    from: "Dubai",
    to: "Al Ain",
    fromEmirate: "Dubai",
    toEmirate: "Abu Dhabi",
    priceFrom: 600,
    monthlyPrice: 5000,
    durationEst: "90–120 min",
    distance: "130 km",
    popularPickups: ["Deira", "Downtown", "Business Bay", "Al Quoz", "Al Barsha"],
    popularDropoffs: ["Al Ain City Centre", "Al Ain Hospital", "UAEU", "Bawadi Mall area"],
    shortDescription:
      "Intercity car lift from Dubai to Al Ain from AED 600/day or AED 5,000/month. Long-distance shared ride with scheduled departures.",
    longDescription:
      "Dubai to Al Ain is a 130 km intercity route popular with students, healthcare workers, and government employees. Our scheduled departures at 6:30 AM and 7:00 AM get you to Al Ain before 9 AM.",
    faqs: [
      {
        q: "How much is a car lift from Dubai to Al Ain?",
        a: "AED 600 per trip or AED 5,000 per month for daily one-way service.",
      },
      {
        q: "How long is the drive from Dubai to Al Ain?",
        a: "Approximately 1.5–2 hours depending on traffic on E66 (Al Ain Road). We depart early to avoid delays.",
      },
    ],
    keywords: ["car lift dubai to al ain", "dubai al ain carpool", "car lift from dubai to al ain"],
  },
  {
    slug: "sharjah-to-ras-al-khaimah",
    from: "Sharjah",
    to: "Ras Al Khaimah",
    fromEmirate: "Sharjah",
    toEmirate: "RAK",
    priceFrom: 590,
    monthlyPrice: 5000,
    durationEst: "60–90 min",
    distance: "80 km",
    popularPickups: ["Al Nahda", "Muwaileh", "Al Taawun", "Rolla"],
    popularDropoffs: ["RAK City", "Khuzam", "Al Qurm", "RAK Hospital"],
    shortDescription:
      "Car lift from Sharjah to Ras Al Khaimah from AED 590/day or AED 5,000/month. Direct intercity service.",
    longDescription:
      "RAK residents working in Sharjah or Sharjah residents commuting to RAK benefit from our shared intercity service. Fixed pricing makes monthly budgeting predictable.",
    faqs: [
      {
        q: "How much is a car lift from Sharjah to Ras Al Khaimah?",
        a: "AED 590 per day or AED 5,000 per month.",
      },
    ],
    keywords: ["car lift sharjah to ras al khaimah", "sharjah rak car lift", "sharjah ras al khaimah carpool"],
  },
  {
    slug: "dubai-to-sharjah-saif-zone",
    from: "Dubai",
    to: "Sharjah Airport / SAIF Zone",
    fromEmirate: "Dubai",
    toEmirate: "Sharjah",
    priceFrom: 510,
    monthlyPrice: 5000,
    durationEst: "25–45 min",
    distance: "22 km",
    popularPickups: ["Deira", "Al Qusais", "Al Nahda Dubai", "Airport Terminal 1/2/3"],
    popularDropoffs: ["SAIF Zone Gate 1", "SAIF Zone Gate 2", "Sharjah Airport Freezone"],
    shortDescription:
      "Car lift from Dubai to Sharjah SAIF Zone from AED 510/day or AED 5,000/month. Popular with freezone workers commuting from Dubai.",
    longDescription:
      "Sharjah Airport International Free Zone (SAIF Zone) hosts thousands of workers who live in Dubai. Our car lift provides direct, affordable morning service from Dubai areas.",
    faqs: [
      {
        q: "Is there a car lift from Dubai to SAIF Zone?",
        a: "Yes. We run daily morning car lifts from Deira, Al Qusais, and Al Nahda Dubai directly to SAIF Zone gates.",
      },
      {
        q: "How much is the car lift from Dubai to SAIF Zone?",
        a: "AED 510 per day or AED 5,000 per month.",
      },
    ],
    keywords: ["car lift dubai to saif zone", "dubai sharjah saif zone car lift", "car lift saif zone"],
  },
]

export function getRouteBySlug(slug: string): RouteData | undefined {
  return ROUTES.find((r) => r.slug === slug)
}

export function getRoutesByEmirate(emirate: string): RouteData[] {
  return ROUTES.filter(
    (r) => r.fromEmirate === emirate || r.toEmirate === emirate
  )
}

export const WHATSAPP_NUMBER = "971565828471"
export const PHONE_NUMBER = "+971 56 582 8471"
export const BUSINESS_NAME = "M1 CarLift UAE"
export const BASE_URL = "https://carlift.ae"
