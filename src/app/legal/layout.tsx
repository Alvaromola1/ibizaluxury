import type { ReactNode } from "react";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#fcfaf6] px-5 pt-28 pb-20 md:px-8">
      <article className="mx-auto max-w-3xl" style={{ color: "#0c1520" }}>
        <a
          href="/"
          className="text-[11px] uppercase tracking-[0.2em]"
          style={{ color: "#b8924a" }}
        >
          ← Ibiza Luxury Dreams
        </a>
        {children}
      </article>
    </main>
  );
}
