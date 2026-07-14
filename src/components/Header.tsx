"use client";

import { useEffect, useState } from "react";
import { brand } from "@/lib/content";
import { useT, LanguageSwitcher } from "@/components/LanguageProvider";

export function Header() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#modelo", label: t.nav.modelo },
    { href: "/#servicios", label: t.nav.servicios },
    { href: "/#paquetes", label: t.nav.paquetes },
    { href: "/#galeria", label: t.nav.galeria },
    { href: "/#faq", label: t.nav.faq },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const inkOnLight = scrolled ? "#6d655a" : "rgba(247,243,236,0.85)";

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: "rgba(252,250,246,0.96)",
              borderBottom: "1px solid #e6dfd2",
              boxShadow: "0 8px 30px rgba(12,21,32,0.06)",
              backdropFilter: "blur(10px)",
            }
          : { background: "transparent" }
      }
    >
      <div className="container-wide flex items-center justify-between py-4">
        <a href="/#top" className="flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full border text-xs font-bold tracking-[0.2em]"
            style={
              scrolled
                ? { borderColor: "rgba(184,146,74,0.4)", background: "rgba(184,146,74,0.1)", color: "#8f6d34" }
                : { borderColor: "rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.1)", color: "#f7f3ec" }
            }
          >
            IL
          </span>
          <div>
            <p className="font-display text-xl leading-none" style={{ color: scrolled ? "#0c1520" : "#f7f3ec" }}>
              Ibiza Luxury
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.24em]" style={{ color: scrolled ? "#b8924a" : "#d4b06a" }}>
              Dreams Concierge
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-[11px] uppercase tracking-[0.18em] transition" style={{ color: inkOnLight }}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span style={{ color: inkOnLight }}>
            <LanguageSwitcher />
          </span>
          <a
            href={`https://wa.me/${brand.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] uppercase tracking-[0.16em]"
            style={{ color: inkOnLight }}
          >
            {t.nav.whatsapp}
          </a>
          <a href="/#reserva" className="btn-primary" style={{ padding: "0.7rem 1.2rem", fontSize: "0.68rem" }}>
            {t.nav.reservar}
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border lg:hidden"
          style={
            scrolled
              ? { borderColor: "#e6dfd2", background: "#fff", color: "#0c1520" }
              : { borderColor: "rgba(255,255,255,0.25)", background: "rgba(255,255,255,0.1)", color: "#f7f3ec" }
          }
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-5 rounded bg-current" />
            <span className="block h-0.5 w-3 rounded bg-current" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t px-5 py-5 lg:hidden" style={{ background: "#fcfaf6", borderColor: "#e6dfd2" }}>
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-[0.16em]" style={{ color: "#0c1520" }}>
                {link.label}
              </a>
            ))}
            <div className="my-1 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.14em]" style={{ color: "#6d655a" }}>
                {t.nav.reservar}
              </span>
              <span style={{ color: "#0c1520" }}>
                <LanguageSwitcher />
              </span>
            </div>
            <a href="/#reserva" onClick={() => setOpen(false)} className="btn-primary mt-2">
              {t.nav.reservar}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
