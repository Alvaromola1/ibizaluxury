"use client";

import { grantGoogleConsent } from "@/components/GoogleTag";
import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("ild-cookie-consent");
    if (!consent) {
      setVisible(true);
      return;
    }
    if (consent === "accepted") grantGoogleConsent();
  }, []);

  function choose(value: "accepted" | "rejected") {
    localStorage.setItem("ild-cookie-consent", value);
    if (value === "accepted") grantGoogleConsent();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 md:pb-6">
      <div
        className="flex items-center gap-4 rounded-full px-5 py-2.5 backdrop-blur-xl"
        style={{
          background: "rgba(12, 21, 32, 0.55)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 8px 30px rgba(12,21,32,0.18)",
          maxWidth: "min(560px, calc(100vw - 2rem))",
          paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))",
        }}
      >
        <p className="flex-1 text-xs leading-tight" style={{ color: "rgba(247,243,236,0.85)" }}>
          Usamos cookies propias y de análisis.{" "}
          <a href="/legal/cookies" className="underline underline-offset-2" style={{ color: "rgba(212,176,106,0.9)" }}>
            Saber más
          </a>
        </p>
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="shrink-0 text-xs font-semibold transition hover:opacity-80"
          style={{ color: "#d4b06a" }}
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => choose("rejected")}
          className="shrink-0 text-xs font-semibold underline underline-offset-2 transition hover:opacity-80"
          style={{ color: "rgba(247,243,236,0.6)" }}
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
