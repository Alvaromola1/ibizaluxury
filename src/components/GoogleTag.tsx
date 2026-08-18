const GOOGLE_ADS_ID = "AW-18395303339";

/**
 * Google Ads conversion tracker.
 * The actual script tags are injected directly in the layout for proper head rendering.
 * This component is kept for conversion triggering logic only.
 */
export function GoogleTag() {
  return null;
}

export function triggerGoogleConversion(conversionLabel: string = "") {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  
  if (conversionLabel) {
    // Trigger specific conversion
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${conversionLabel}`,
      event_callback: () => {
        console.log(`Google Ads conversion triggered: ${conversionLabel}`);
      }
    });
  } else {
    // Just initialize conversion tracking
    window.gtag("event", "page_view", {
      send_to: GOOGLE_ADS_ID
    });
  }
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}
