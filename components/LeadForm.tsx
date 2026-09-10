"use client"

import { useState } from "react"
import { WHATSAPP_NUMBER } from "@/data/routes"

interface FormState {
  name: string
  phone: string
  from: string
  to: string
  ladies: boolean
}

export default function LeadForm({ defaultFrom = "", defaultTo = "" }: { defaultFrom?: string; defaultTo?: string }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    from: defaultFrom,
    to: defaultTo,
    ladies: false,
  })

  function buildWaMessage() {
    const parts = [
      `Hi, I want to book a car lift.`,
      form.name && `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      form.from && `From: ${form.from}`,
      form.to && `To: ${form.to}`,
      form.ladies ? `Ladies-only: Yes` : "",
    ].filter(Boolean)
    return encodeURIComponent(parts.join("\n"))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = buildWaMessage()
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer")
  }

  const field =
    "w-full bg-[#0a0a0a] border border-[#252629] text-white text-sm rounded-lg px-4 py-3 focus:border-[#f59e0b] outline-none placeholder:text-[#6b7280]"

  return (
    <form onSubmit={handleSubmit} className="bg-[#161719] border border-[#252629] rounded-2xl p-6 flex flex-col gap-4">
      <h3 className="font-bold text-white">Get a Price — it&apos;s instant</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label htmlFor="lf-name" className="text-xs text-[#9ca3af] mb-1 block">Your name</label>
          <input
            id="lf-name"
            type="text"
            required
            placeholder="Ahmed / Sarah"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="lf-phone" className="text-xs text-[#9ca3af] mb-1 block">WhatsApp / Phone</label>
          <input
            id="lf-phone"
            type="tel"
            required
            placeholder="+971 5X XXX XXXX"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="lf-from" className="text-xs text-[#9ca3af] mb-1 block">Pickup area</label>
          <input
            id="lf-from"
            type="text"
            required
            placeholder="e.g. Al Nahda Sharjah"
            value={form.from}
            onChange={(e) => setForm((f) => ({ ...f, from: e.target.value }))}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="lf-to" className="text-xs text-[#9ca3af] mb-1 block">Drop-off</label>
          <input
            id="lf-to"
            type="text"
            required
            placeholder="e.g. Business Bay Dubai"
            value={form.to}
            onChange={(e) => setForm((f) => ({ ...f, to: e.target.value }))}
            className={field}
          />
        </div>
      </div>

      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.ladies}
          onChange={(e) => setForm((f) => ({ ...f, ladies: e.target.checked }))}
          className="w-4 h-4 accent-[#f59e0b] cursor-pointer"
        />
        <span className="text-sm text-[#9ca3af]">Ladies-only car lift</span>
      </label>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-black font-bold text-sm py-3 rounded-lg transition-colors"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Send via WhatsApp →
      </button>
      <p className="text-xs text-[#6b7280] text-center">We reply within 1 hour during operating hours</p>
    </form>
  )
}
