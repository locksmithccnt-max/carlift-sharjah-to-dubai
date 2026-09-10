import { BUSINESS_NAME, BASE_URL, PHONE_NUMBER } from "@/data/routes"
import type { RouteData } from "@/data/routes"
import type { Testimonial } from "@/data/testimonials"

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.webp`,
    telephone: PHONE_NUMBER,
    areaServed: ["Sharjah", "Dubai", "Ajman", "Abu Dhabi", "Ras Al Khaimah", "Al Ain"],
    sameAs: [
      "https://wa.me/971565828471",
    ],
  }
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#business`,
    name: BUSINESS_NAME,
    description:
      "Daily car lift and shared ride service operating on Sharjah–Dubai corridor and intercity UAE routes. Fixed monthly pricing, verified drivers, ladies-only option available.",
    url: BASE_URL,
    telephone: PHONE_NUMBER,
    priceRange: "AED 500 – AED 5,000/month",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Bank Transfer",
    areaServed: [
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Ajman" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Ras Al Khaimah" },
      { "@type": "City", name: "Al Ain" },
    ],
    serviceType: ["Car Lift", "Carpool", "Shared Ride", "Pick and Drop Service"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "05:30",
        closes: "21:00",
      },
    ],
  }
}

export function serviceSchema(route: RouteData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Car Lift ${route.from} to ${route.to}`,
    description: route.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      url: BASE_URL,
    },
    areaServed: [
      { "@type": "City", name: route.fromEmirate },
      { "@type": "City", name: route.toEmirate },
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "AED",
      lowPrice: route.priceFrom,
      highPrice: route.monthlyPrice,
      offerCount: 2,
    },
  }
}

export function faqSchema(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }
}

export function reviewsSchema(reviews: Testimonial[]) {
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.review,
      datePublished: r.date,
    })),
  }
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
