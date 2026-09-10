"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/data/routes"

const FROM_OPTIONS = [
  "Sharjah", "Ajman", "Dubai", "Ras Al Khaimah",
]

const TO_OPTIONS: Record<string, string[]> = {
  "Sharjah": ["Dubai", "Business Bay", "JLT", "DIP", "Al Quoz", "Al Barsha", "Jebel Ali", "Internet City", "Media City", "Silicon Oasis", "Ras Al Khaimah"],
  "Ajman": ["Dubai", "Sharjah"],
  "Dubai": ["Sharjah", "Ajman", "Al Ain", "SAIF Zone", "Silicon Oasis → Business Bay", "International City → Business Bay"],
  "Ras Al Khaimah": ["Sharjah", "Dubai"],
}

const ROUTE_MAP: Record<string, Record<string, string>> = {
  "Sharjah": {
    "Dubai": "/sharjah-to-dubai",
    "Business Bay": "/routes/sharjah-to-business-bay",
    "JLT": "/routes/sharjah-to-jlt",
    "DIP": "/routes/sharjah-to-dip",
    "Al Quoz": "/routes/sharjah-to-al-quoz",
    "Al Barsha": "/routes/sharjah-to-al-barsha",
    "Jebel Ali": "/routes/sharjah-to-jebel-ali",
    "Internet City": "/routes/sharjah-to-internet-city",
    "Media City": "/routes/sharjah-to-media-city",
    "Silicon Oasis": "/routes/sharjah-to-silicon-oasis",
    "Ras Al Khaimah": "/routes/sharjah-to-ras-al-khaimah",
  },
  "Ajman": {
    "Dubai": "/routes/ajman-to-dubai",
    "Sharjah": "/routes/ajman-to-sharjah",
  },
  "Dubai": {
    "Sharjah": "/routes/dubai-to-sharjah",
    "Ajman": "/routes/dubai-to-ajman",
    "Al Ain": "/routes/dubai-to-al-ain",
    "SAIF Zone": "/routes/dubai-to-sharjah-saif-zone",
    "Silicon Oasis → Business Bay": "/routes/silicon-oasis-to-business-bay",
    "International City → Business Bay": "/routes/international-city-to-business-bay",
  },
  "Ras Al Khaimah": {
    "Sharjah": "/routes/sharjah-to-ras-al-khaimah",
    "Dubai": "/routes/sharjah-to-ras-al-khaimah",
  },
}

export default function RouteSelector() {
  const router = useRouter()
  const [from, setFrom] = useState("Sharjah")
  const [to, setTo] = useState("")

  const toOptions = TO_OPTIONS[from] ?? []

  function handleFrom(v: string) {
    setFrom(v)
    setTo("")
  }

  function handleSearch() {
    if (!to) return
    const path = ROUTE_MAP[from]?.[to]
    if (path) router.push(path)
  }

  return (
    <div className="bg-[#161719] border border-[#252629] rounded-2xl p-5 sm:p-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#6b7280] mb-4">Find your route</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="from-select" className="sr-only">From</label>
          <select
            id="from-select"
            value={from}
            onChange={(e) => handleFrom(e.target.value)}
            className="w-full bg-[#0a0a0a] border border-[#252629] text-white text-sm rounded-lg px-4 py-3 appearance-none cursor-pointer focus:border-[#f59e0b] outline-none"
          >
            {FROM_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-center text-[#9ca3af] text-lg font-light select-none" aria-hidden="true">
          →
        </div>

        <div className="flex-1">
          <label htmlFor="to-select" className="sr-only">To</label>
          <select
            id="to-select"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full bg-[#0a0a0a] border border-[#252629] text-white text-sm rounded-lg px-4 py-3 appearance-none cursor-pointer focus:border-[#f59e0b] outline-none"
          >
            <option value="">Select destination</option>
            {toOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSearch}
          disabled={!to}
          className="bg-[#f59e0b] hover:bg-[#fbbf24] disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold text-sm px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
        >
          See Prices →
        </button>
      </div>
    </div>
  )
}
