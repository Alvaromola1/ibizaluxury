"use client";

import { useT } from "@/components/LanguageProvider";
import { brand } from "@/lib/content";

export function Footer() {
  const t = useT();

  return (
    <footer style={{ background: "#0c1520", color: "#f7f3ec" }}>
      <div className="container-wide grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl">Ibiza Luxury Dreams</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: "rgba(247,243,236,0.65)" }}>
            {t.footer.tagline}
          </p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.22em]" style={{ color: "#d4b06a" }}>
            {brand.location}
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "rgba(247,243,236,0.4)" }}>
            {t.footer.explore}
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm" style={{ color: "rgba(247,243,236,0.7)" }}>
            <a href="/#servicios">{t.nav.servicios}</a>
            <a href="/#paquetes">{t.nav.paquetes}</a>
            <a href="/#galeria">{t.nav.galeria}</a>
            <a href="/#reserva">{t.nav.reservar}</a>
            <a href="/#faq">{t.nav.faq}</a>
          </div>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "rgba(247,243,236,0.4)" }}>
            {t.footer.contact}
          </p>
          <div className="mt-4 space-y-2 text-sm" style={{ color: "rgba(247,243,236,0.7)" }}>
            <a href={`mailto:${brand.email}`} className="block">{brand.email}</a>
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="block">{brand.phone}</a>
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer" className="block">
              WhatsApp Concierge
            </a>
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="block">Instagram</a>
          </div>
        </div>
      </div>

      <div
        className="px-5 py-5 text-center text-[11px] tracking-[0.14em]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(247,243,236,0.35)" }}
      >
        <p>{t.footer.legal}</p>
        <p className="mt-2" style={{ color: "rgba(247,243,236,0.3)" }}>
          <a href="/legal/privacidad" className="hover:text-[#d4b06a]">Privacidad</a>
          {" · "}
          <a href="/legal/cookies" className="hover:text-[#d4b06a]">Cookies</a>
          {" · "}
          <a href="/legal/terminos" className="hover:text-[#d4b06a]">Términos</a>
        </p>
      </div>
    </footer>
  );
}
