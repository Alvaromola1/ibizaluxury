"use client";

import { useEffect, useState } from "react";
import { brand } from "@/lib/content";

const WA_MSG = encodeURIComponent(
  "Hi! I'd like to design my private Ibiza experience. Can you help?"
);

export function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Show tooltip 8s after load, auto-dismiss after 5s
  useEffect(() => {
    const show = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 8000);

    const hide = setTimeout(() => {
      setShowTooltip(false);
    }, 13000);

    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [dismissed]);

  // Hide tooltip on scroll
  useEffect(() => {
    const onScroll = () => {
      if (showTooltip) {
        setShowTooltip(false);
        setDismissed(true);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showTooltip]);

  return (
    <div className="fixed bottom-5 right-5 z-50 hidden flex-col items-end gap-2 md:flex md:bottom-8 md:right-8">
      {showTooltip && (
        <div className="float-up flex items-center gap-2 rounded-2xl border border-[#e6dfd2] bg-white px-4 py-2.5 shadow-[0_8px_30px_rgba(12,21,32,0.12)]">
          <span className="pulse-ring text-emerald-500">
            <span className="block h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-wide text-[#0c1520]">
            Respuesta en minutos
          </span>
        </div>
      )}

      <a
        href={`https://wa.me/${brand.whatsapp}?text=${WA_MSG}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group relative flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition hover:scale-[1.04] hover:shadow-[0_16px_40px_rgba(37,211,102,0.45)]"
        onClick={() => setShowTooltip(false)}
      >
        {/* Pulse ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-0 animate-[ping_2s_ease_infinite]" />

        <span className="flex items-center justify-center rounded-full bg-white/20 px-3 py-2 text-[10px] font-black uppercase tracking-widest">
          WHATSAPP
        </span>
      </a>
    </div>
  );
}
