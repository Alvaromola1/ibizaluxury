"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { type Lang, translations, languages } from "@/lib/translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<Ctx>({ lang: "es", setLang: () => {} });

export function useLang() {
  return useContext(LangContext);
}

export function useT() {
  const { lang } = useContext(LangContext);
  return translations[lang];
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("ild-lang") as Lang | null;
    if (saved && ["es", "en", "de", "fr"].includes(saved)) {
      setLangState(saved);
    } else {
      const browser = typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "es";
      const detected = ["es", "en", "de", "fr"].includes(browser) ? (browser as Lang) : "es";
      setLangState(detected);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = translations[lang].htmlLang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("ild-lang", l);
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
  );
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition"
        style={{
          borderColor: "currentColor",
          color: "inherit",
          opacity: open ? 1 : 0.85,
        }}
        aria-label="Change language"
      >
        <span>{languages.find((l) => l.code === lang)?.label}</span>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} aria-hidden />
          <div
            className="absolute right-0 z-50 mt-2 min-w-[140px] overflow-hidden rounded-2xl border bg-white shadow-xl"
            style={{ borderColor: "#e6dfd2" }}
          >
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition hover:bg-[#f7f3ec]"
                style={{ color: l.code === lang ? "#b8924a" : "#0c1520" }}
              >
                <span className="font-bold uppercase tracking-wide">{l.label}</span>
                <span className="text-xs opacity-70">{l.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
