"use client";

import { useState } from "react";
import { useT } from "@/components/LanguageProvider";

export function Faq() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {t.faq.items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={index} className="card-lux overflow-hidden">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-xl text-[#0c1520] md:text-2xl">{item.q}</span>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg transition"
                style={{
                  borderColor: "rgba(184,146,74,0.3)",
                  color: "#b8924a",
                  background: isOpen ? "rgba(184,146,74,0.1)" : "#f7f3ec",
                  transform: isOpen ? "rotate(45deg)" : "none",
                }}
              >
                +
              </span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-[#6d655a]">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
