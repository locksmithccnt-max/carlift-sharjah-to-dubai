import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import JsonLd from "@/components/JsonLd"
import { localBusinessSchema } from "@/lib/schema"
import { BASE_URL, WHATSAPP_NUMBER, PHONE_NUMBER } from "@/data/routes"
import { IMAGES } from "@/data/images"

export const metadata: Metadata = {
  title: "About Taimoor Carlift M1 Group | Sharjah–Dubai Car Lift Since 2020 | Taimoor Mughal",
  description:
    "Taimoor Carlift M1 Group founded by Taimoor Mughal in 2020. Toyota Coaster & Mitsubishi Fuso Rosa fleet. Verified drivers, ladies-only option, fixed pricing from AED 22/day.",
  alternates: { canonical: `${BASE_URL}/about` },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <nav aria-label="Breadcrumb" className="text-xs text-[#6b7280] mb-6 flex gap-2">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-[#9ca3af]">About</span>
        </nav>

        {/* Owner + brand intro */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">About Taimoor Carlift M1 Group</h1>
            <p className="text-[#9ca3af] text-base leading-relaxed mb-4">
              Taimoor Carlift M1 Group was founded by <strong className="text-white">Taimoor Mughal</strong> and has been operating daily commuter car lifts on the Sharjah–Dubai corridor since 2020. What started as a small shared-ride network has grown into one of the most trusted daily commute services in the UAE, covering routes across Sharjah, Dubai, Ajman, Abu Dhabi, Ras Al Khaimah, and Al Ain.
            </p>
            <p className="text-[#9ca3af] text-sm leading-relaxed">
              Our fleet includes Toyota Coaster and Mitsubishi Fuso Rosa minibuses — inspected, AC-comfortable, and branded with the M1 Smartline livery.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              {...IMAGES.ownerPhoto}
              className="w-full rounded-2xl object-cover max-h-80"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <Image
              {...IMAGES.brandBadge}
              className="w-32 mx-auto rounded-xl"
              sizes="128px"
            />
          </div>
        </div>

        {/* Fleet photos */}
        <div className="grid grid-cols-2 gap-3 mb-12">
          <Image
            {...IMAGES.coasterBus}
            className="w-full rounded-xl object-cover aspect-video"
            sizes="(max-width:768px) 50vw, 33vw"
          />
          <Image
            {...IMAGES.fusoBus}
            className="w-full rounded-xl object-cover aspect-video"
            sizes="(max-width:768px) 50vw, 33vw"
          />
        </div>

        <div className="space-y-6 text-[#9ca3af] text-base leading-relaxed mb-12">
          <h2 className="text-2xl font-bold text-white">Why We Exist</h2>
          <p>
            The Sharjah–Dubai commute is one of the most congested routes in the world during morning peak hours. Public transport options are limited for many residential areas, and solo rideshare costs have increased significantly. We bridge that gap: a comfortable, affordable, and reliable shared car lift that runs on your schedule, not a timetable.
          </p>

          <h2 className="text-2xl font-bold text-white">Our Drivers</h2>
          <p>
            Every driver on our network is UAE-licensed, verified by Emirates ID, and has passed a background check before their first ride. We do not list on third-party platforms like Dubizzle — you book directly with us, which means consistent standards and direct accountability.
          </p>

          <h2 className="text-2xl font-bold text-white">Schedule</h2>
          <div className="bg-[#161719] border border-[#252629] rounded-xl p-5">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-xs font-semibold text-[#f59e0b] mb-2 uppercase tracking-wide">Morning — Sharjah → Dubai</div>
                <div className="space-y-1 text-white">
                  <div>8:00 AM</div>
                  <div>9:00 AM</div>
                  <div>10:00 AM</div>
                </div>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#f59e0b] mb-2 uppercase tracking-wide">Evening — Dubai → Sharjah</div>
                <div className="space-y-1 text-white">
                  <div>5:00 PM</div>
                  <div>6:00 PM</div>
                  <div>7:00 PM</div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white">Fixed Pricing Promise</h2>
          <p>
            We do not surge-price. Monthly car lift subscribers pay a fixed amount at the start of the month and travel every working day without rebooking. Daily riders receive a confirmed price before the trip. There are no hidden fees or add-ons.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Taimoor%2C%20I%20want%20to%20book%20a%20car%20lift`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-bold py-3 px-6 rounded-xl text-sm"
          >
            WhatsApp Taimoor →
          </a>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="flex items-center justify-center gap-2 bg-[#161719] border border-[#252629] hover:border-[#f59e0b]/40 text-white font-semibold py-3 px-6 rounded-xl text-sm"
          >
            📞 {PHONE_NUMBER}
          </a>
        </div>
      </section>
    </>
  )
}
