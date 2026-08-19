"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useLang, useT } from "@/components/LanguageProvider";
import { triggerGoogleConversion } from "@/components/GoogleTag";

type FormState = {
  name: string;
  email: string;
  phone: string;
  selectedServices: string[];
  guests: string;
  dates: string;
  budget: string;
  message: string;
};

const SERVICE_ICONS: Record<string, string> = {
  "Exclusive villas": "🏠",
  "Villas exclusivas": "🏠",
  "Exklusive Villen": "🏠",
  "Villas exclusives": "🏠",
  
  "Yachts & charter": "⛵",
  "Yachten & Charter": "⛵",
  "Yachts & bateaux": "⛵",
  
  "Premium fleet": "🚗",
  "Flota premium": "🚗",
  "Premium-Flotte": "🚗",
  "Flotte premium": "🚗",
  
  "VIP experiences": "🥂",
  "Experiencias VIP": "🥂",
  "VIP-Erlebnisse": "🥂",
  
  "Escape Essentials package": "🏷️",
  "Paquete Escape Essentials": "🏷️",
  "Escape Essentials Paket": "🏷️",
  "Forfait Escape Essentials": "🏷️",
  
  "Signature Week package": "⭐",
  "Paquete Signature Week": "⭐",
  "Signature Week Paket": "⭐",
  "Forfait Signature Week": "⭐",
  
  "Ultra Private package": "💎",
  "Paquete Ultra Private": "💎",
  "Ultra Private Paket": "💎",
  "Forfait Ultra Private": "💎",
  
  "Everything bespoke": "✨",
  "Todo a medida": "✨",
  "Alles maßgeschneidert": "✨",
  "Tout sur mesure": "✨",
};

export function LeadForm({
  compact = false,
  dark = false,
}: {
  compact?: boolean;
  dark?: boolean;
}) {
  const router = useRouter();
  const t = useT();
  const { lang } = useLang();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    selectedServices: [],
    guests: t.form.guestOptions[1],
    dates: "",
    budget: t.form.budgetOptions[2],
    message: "",
  });

  // Reset selected services on language change to sync with translation array
  useEffect(() => {
    setForm((prev) => ({ ...prev, selectedServices: [t.form.services[7] || t.form.services[0]] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  const [utm, setUtm] = useState({ utmSource: "", utmMedium: "", utmCampaign: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtm({
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
    });
  }, []);

  const toggleService = (srv: string) => {
    setForm((prev) => {
      const isSelected = prev.selectedServices.includes(srv);
      let updated: string[];
      if (isSelected) {
        // keep at least one selected
        updated = prev.selectedServices.filter((s) => s !== srv);
        if (updated.length === 0) updated = [srv];
      } else {
        updated = [...prev.selectedServices, srv];
      }
      return { ...prev, selectedServices: updated };
    });
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    
    // Prevent duplicate conversion tracking
    if (typeof window !== "undefined" && window.localStorage) {
      const conversionKey = "google_ads_conversion_tracked";
      if (localStorage.getItem(conversionKey)) {
        // Conversion already tracked, skip
        router.push("/gracias");
        return;
      }
    }
    
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          // Backwards compatibility for API that expects single 'service' string
          service: form.selectedServices.join(", "),
          ...utm,
          source: compact ? "hero-form" : "main-form",
          language: lang,
        }),
      });

      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || t.form.errorGeneric);
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }
      // Trigger Google Ads conversion with specific conversion label
      if (typeof window !== "undefined" && window.gtag) {
        triggerGoogleConversion("sVf7CKCGruMcEKubyMNE");
        // Mark conversion as tracked to prevent duplicates
        if (window.localStorage) {
          localStorage.setItem("google_ads_conversion_tracked", "true");
        }
      }
      router.push("/gracias");
    } catch (err) {
      setError(err instanceof Error ? err.message : t.form.errorGeneric);
      setLoading(false);
    }
  }

  const inputClass = dark ? "dark-field" : "field";
  const labelClass = "mb-2.5 block text-[11px] uppercase tracking-[0.14em] font-semibold";
  const labelStyle = dark ? { color: "rgba(247,243,236,0.75)" } : { color: "#6d655a" };
  const hintStyle = dark ? { color: "rgba(247,243,236,0.45)" } : { color: "#6d655a" };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="space-y-4">
        {/* Name / Email / Phone in proper responsive grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelClass} style={labelStyle}>{t.form.name}</label>
            <input
              required
              className={inputClass}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t.form.name.replace(" *", "")}
              autoComplete="name"
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>{t.form.email}</label>
            <input
              required
              type="email"
              className={inputClass}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>{t.form.phone}</label>
            <input
              className={inputClass}
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+34 600 000 000"
              autoComplete="tel"
            />
          </div>
        </div>

        {/* Visual Service Toggles */}
        <div>
          <label className={labelClass} style={labelStyle}>
            {t.form.service} <span className="text-[9px] tracking-wider text-[#b8924a] normal-case font-normal">(Multi-select)</span>
          </label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {t.form.services.map((s) => {
              const active = form.selectedServices.includes(s);
              const icon = SERVICE_ICONS[s] || "✨";
              return (
                <button
                  type="button"
                  key={s}
                  onClick={() => toggleService(s)}
                  className={`service-toggle ${dark ? "dark-toggle" : ""} ${active ? "active" : ""}`}
                >
                  <span className="toggle-icon">{icon}</span>
                  <span className="text-[10px] tracking-tight">{s}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Extra inputs shown if not compact */}
        {!compact && (
          <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-[#e6dfd2]/50">
            <div>
              <label className={labelClass} style={labelStyle}>{t.form.guests}</label>
              <select
                className={inputClass}
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
              >
                {t.form.guestOptions.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} style={labelStyle}>{t.form.dates}</label>
              <input
                className={inputClass}
                value={form.dates}
                onChange={(e) => setForm({ ...form, dates: e.target.value })}
                placeholder={t.form.dates}
              />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} style={labelStyle}>{t.form.budget}</label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {t.form.budgetOptions.map((b) => {
                  const active = form.budget === b;
                  return (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setForm({ ...form, budget: b })}
                      className={`py-2 px-3 text-xs border rounded-xl font-medium tracking-wide transition-all ${
                        active
                          ? dark
                            ? "border-[#d4b06a] bg-[#d4b06a]/20 text-[#d4b06a]"
                            : "border-[#b8924a] bg-[#b8924a]/10 text-[#8f6d34]"
                          : dark
                            ? "border-white/10 bg-white/5 text-white/70 hover:bg-white/10"
                            : "border-[#e6dfd2] bg-white text-[#6d655a] hover:bg-[#fcfaf6]"
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} style={labelStyle}>{t.form.message}</label>
              <textarea
                rows={3}
                className={`${inputClass} resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.form.message}
              />
            </div>
          </div>
        )}
      </div>

      <label className="flex items-start gap-3 text-xs leading-relaxed" style={labelStyle}>
        <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#b8924a]" />
        <span>
          {t.form.consent}{" "}
          <a href="/legal/privacidad" target="_blank" className="underline underline-offset-2 hover:text-[#d4b06a]" style={{ color: "#b8924a" }}>
            aquí
          </a>
          .
        </span>
      </label>

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-xs tracking-[0.2em]">
        {loading ? t.form.sending : t.form.submit}
      </button>

      <p className="text-center text-[10px] leading-relaxed tracking-wider uppercase opacity-85" style={hintStyle}>{t.form.hint}</p>
    </form>
  );
}

