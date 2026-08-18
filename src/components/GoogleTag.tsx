import Script from "next/script";

const GOOGLE_ADS_ID = "AW-18395303339";

/**
 * Google Ads global tag (gtag.js).
 * Uses Next.js Script component for proper loading in head.
 */
export function GoogleTag() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        async
      />
      <Script
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `,
        }}
      />
    </>
  );
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
