"use client";

import { useEffect, useState } from "react";
import { useT } from "@/components/LanguageProvider";
import { brand } from "@/lib/content";

export function MobileCTA() {
  const t = useT();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-[#e6dfd2] bg-white/95 px-4 py-3 backdrop-blur-lg md:hidden"
      style={{
        paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
        transform: show ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease",
        boxShadow: "0 -8px 30px rgba(12,21,32,0.1)",
      }}
    >
      <a
        href={`https://wa.me/${brand.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e6dfd2]"
        aria-label="WhatsApp"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" aria-hidden>
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.1.55 4.1 1.6 5.9L0 24l6.4-1.7a11.8 11.8 0 0 0 5.65 1.45h.05c6.55 0 11.85-5.3 11.85-11.85 0-3.15-1.25-6.15-3.45-8.4Z" />
        </svg>
      </a>
      <a href="#reserva" className="btn-primary flex-1" style={{ padding: "0.85rem 1rem", fontSize: "0.72rem" }}>
        {t.hero.cta1}
      </a>
    </div>
  );
}
