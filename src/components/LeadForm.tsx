"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useLang, useT } from "@/components/LanguageProvider";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  guests: string;
  dates: string;
  budget: string;
  message: string;
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
    service: t.form.services[5],
    guests: t.form.guestOptions[1],
    dates: "",
    budget: t.form.budgetOptions[2],
    message: "",
  });

  // Keep selected service in sync when language changes
  useEffect(() => {
    setForm((prev) => ({ ...prev, service: t.form.services[5] }));
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

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
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
      router.push("/gracias");
    } catch (err) {
      setError(err instanceof Error ? err.message : t.form.errorGeneric);
      setLoading(false);
    }
  }

  const inputClass = dark ? "dark-field" : "field";
  const labelClass = "mb-1.5 block text-[11px] uppercase tracking-[0.14em]";
  const labelStyle = dark ? { color: "rgba(247,243,236,0.55)" } : { color: "#6d655a" };
  const hintStyle = dark ? { color: "rgba(247,243,236,0.45)" } : { color: "#6d655a" };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className={compact ? "grid gap-3" : "grid gap-4 md:grid-cols-2"}>
        <div>
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
        <div>
          <label className={labelClass} style={labelStyle}>{t.form.service}</label>
          <select
            required
            className={inputClass}
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            {t.form.services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {!compact && (
          <>
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
            <div className="md:col-span-2">
              <label className={labelClass} style={labelStyle}>{t.form.budget}</label>
              <select
                className={inputClass}
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
              >
                {t.form.budgetOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className={labelClass} style={labelStyle}>{t.form.message}</label>
              <textarea
                rows={4}
                className={`${inputClass} resize-none`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.form.message}
              />
            </div>
          </>
        )}
      </div>

      <label className="flex items-start gap-3 text-xs leading-relaxed" style={labelStyle}>
        <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-[#b8924a]" />
        <span>
          {t.form.consent}{" "}
          <a href="/legal/privacidad" target="_blank" className="underline underline-offset-2" style={{ color: "#b8924a" }}>
            aquí
          </a>
          .
        </span>
      </label>

      {error && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>
      )}

      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? t.form.sending : t.form.submit}
      </button>

      <p className="text-center text-[11px] leading-relaxed" style={hintStyle}>{t.form.hint}</p>
    </form>
  );
}
