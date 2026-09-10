import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { WhatsAppFloat, MobileBottomBar } from "@/components/WhatsAppButton"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? ""
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? ""

const DOMAIN = "https://carlift-sharjahtodubai.com"

export const metadata: Metadata = {
  title: {
    default: "Car Lift Sharjah to Dubai | AED 500/day | M1 CarLift UAE",
    template: "%s | M1 CarLift UAE",
  },
  description:
    "Daily car lift from Sharjah to Dubai from AED 500/day or AED 5,000/month. Business Bay, JLT, DIP, Media City covered. Ladies-only option, verified drivers. Book on WhatsApp.",
  keywords: [
    "car lift", "car lift dubai", "car lift sharjah to dubai",
    "car lift dubai monthly", "car lift for ladies", "carpool dubai",
    "pick and drop service dubai", "car lift business bay",
    "carlift sharjah to dubai", "sharjah dubai car lift",
  ],
  metadataBase: new URL(DOMAIN),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { rel: "mask-icon", url: "/logo.webp" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: DOMAIN,
    siteName: "M1 CarLift UAE",
    title: "Car Lift Sharjah to Dubai | AED 500/day | M1 CarLift UAE",
    description:
      "Daily car lift Sharjah–Dubai from AED 500/day. Fixed monthly AED 5,000. Verified drivers, ladies-only option. Book on WhatsApp.",
    images: [
      {
        url: "/images/car-lift-sharjah-to-dubai-m1-coaster-bus.webp",
        width: 1080,
        height: 1080,
        alt: "M1 CarLift UAE — Toyota Coaster minibus for Sharjah to Dubai car lift service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Lift Sharjah to Dubai | M1 CarLift UAE",
    description: "Daily car lift Sharjah to Dubai — AED 500/day or AED 5,000/month. Ladies option. Book on WhatsApp.",
    images: ["/images/car-lift-sharjah-to-dubai-m1-coaster-bus.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: DOMAIN,
    languages: {
      "en-AE": DOMAIN,
      "en": DOMAIN,
    },
  },
  verification: {
    google: "44M3qJn7y4xzDZdipEednhKLgiiRmRZS2fOkUY3Nlfc",
  },
  category: "transportation",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//api.whatsapp.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="flex flex-col min-h-screen bg-[#0a0a0a] text-[#f0f0f2] pb-[68px] md:pb-0">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <MobileBottomBar />

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}

        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="lazyOnload">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
          </Script>
        )}
      </body>
    </html>
  )
}
