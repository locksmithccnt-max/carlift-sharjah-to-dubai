const BADGES = [
  { icon: "✅", label: "Verified Drivers", sub: "Emirates ID checked" },
  { icon: "👩", label: "Ladies-Only Option", sub: "Female drivers available" },
  { icon: "🕐", label: "Punctual Pick-ups", sub: "On-time guarantee" },
  { icon: "❄️", label: "AC Comfort", sub: "Clean, cool sedans" },
  { icon: "📅", label: "Fixed Monthly Price", sub: "No surge pricing" },
  { icon: "🔒", label: "No Dubizzle Listing", sub: "Direct booking only" },
]

export default function TrustRow() {
  return (
    <div className="border-y border-[#252629] bg-[#111213] py-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex gap-6 overflow-x-auto pb-1 scrollbar-hide">
          {BADGES.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 min-w-max"
              aria-label={`${badge.label}: ${badge.sub}`}
            >
              <span className="text-xl" aria-hidden="true">{badge.icon}</span>
              <div>
                <div className="text-xs font-semibold text-white whitespace-nowrap">{badge.label}</div>
                <div className="text-xs text-[#9ca3af] whitespace-nowrap">{badge.sub}</div>
              </div>
              <span className="text-[#252629] ml-3 hidden sm:block" aria-hidden="true">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
