"use client";

import Link from "next/link";
import { LanguageProvider, useT } from "@/components/LanguageProvider";
import { brand } from "@/lib/content";

export default function GraciasPage() {
  return (
    <LanguageProvider>
      <GraciasContent />
    </LanguageProvider>
  );
}

function GraciasContent() {
  const t = useT();

  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-16" style={{ background: "#f7f3ec" }}>
      <div className="w-full max-w-2xl rounded-[32px] border bg-white p-8 text-center shadow-xl md:p-12" style={{ borderColor: "#e6dfd2" }}>
        <p className="section-label">{t.cta.label}</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl" style={{ color: "#0c1520" }}>
          {t.hero.h1a} {t.hero.h1b}
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed md:text-base" style={{ color: "#6d655a" }}>
          {t.noCatalog.quote}
        </p>

        <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
          {t.process.items.slice(0, 3).map((item) => (
            <div key={item.step} className="rounded-2xl border px-4 py-4" style={{ borderColor: "#e6dfd2", background: "#f7f3ec" }}>
              <p className="font-display text-2xl" style={{ color: "#b8924a" }}>{item.step}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em]" style={{ color: "#6d655a" }}>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent("Hi, I just sent my request from the website and want to proceed.")}`}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            {t.cta.whatsapp}
          </a>
          <Link href="/" className="btn-secondary w-full sm:w-auto">
            {t.nav.reservar}
          </Link>
        </div>
      </div>
    </main>
  );
}
