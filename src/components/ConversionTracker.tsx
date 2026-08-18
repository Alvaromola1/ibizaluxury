"use client";

import { useEffect } from "react";
import { triggerGoogleConversion } from "./GoogleTag";

/**
 * Componente para rastrear conversiones de Google Ads.
 * Se usa en páginas de conversión (como /gracias) para notificar a Google Ads.
 */
export function ConversionTracker({ label }: { label?: string }) {
  useEffect(() => {
    // Disparar conversión cuando el componente se monte
    triggerGoogleConversion(label);
  }, [label]);

  return null;
}
