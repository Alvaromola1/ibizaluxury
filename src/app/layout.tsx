import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleTag } from "@/components/GoogleTag";
import { MetaPixel } from "@/components/MetaPixel";
import { LiveChat } from "@/components/LiveChat";
import Script from "next/script";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display-var",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ibizaluxurydreams.com"),
  title: {
    default: "Ibiza Luxury Dreams | Concierge de Lujo · Villas, Yates & VIP",
    template: "%s | Ibiza Luxury Dreams",
  },
  description:
    "Concierge de lujo en Ibiza: 300+ villas privadas, 600+ barcos, superdeportivos y experiencias VIP. Respuesta inmediata, disponibilidad real. Tú disfrutas, del resto nos encargamos.",
  openGraph: {
    title: "Ibiza Luxury Dreams | Concierge de Lujo en Ibiza",
    description:
      "Villas, yates, coches premium y acceso VIP. Diseñamos tu estancia perfecta en Ibiza.",
    type: "website",
    locale: "es_ES",
    siteName: "Ibiza Luxury Dreams",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Ibiza Luxury Dreams Concierge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibiza Luxury Dreams | Concierge de Lujo en Ibiza",
    description: "Villas, yates, superdeportivos y acceso VIP. Tu única misión es estar de chill.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-US": "/",
      "de-DE": "/",
      "fr-FR": "/",
    },
  },
  keywords: [
    "concierge Ibiza",
    "villas de lujo Ibiza",
    "alquiler yate Ibiza",
    "luxury concierge Ibiza",
    "supercars Ibiza",
    "experiencias VIP Ibiza",
    "Ibiza luxury",
  ],
  authors: [{ name: "Ibiza Luxury Dreams" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <head>
        <GoogleTag />
        {/* Google Ads Global Tag - required for Google Ads verification */}
        <Script
          id="google-tag-manager"
          src="https://www.googletagmanager.com/gtag/js?id=AW-18395303339-TEST"
          strategy="beforeInteractive"
          async
        />
        <Script
          id="google-gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18395303339-TEST');
            `,
          }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${body.className} antialiased`} style={{ background: "#fcfaf6", color: "#0c1520" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Ibiza Luxury Dreams",
              description:
                "Concierge de lujo en Ibiza: villas privadas, yates, superdeportivos y experiencias VIP.",
              url: "https://ibizaluxurydreams.com",
              email: "info@ibizaluxurydreams.com",
              telephone: "+34691785960",
              areaServed: ["Ibiza", "Formentera", "Balearic Islands"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ibiza",
                addressRegion: "Balearic Islands",
                addressCountry: "ES",
              },
              sameAs: ["https://instagram.com/ibizaluxurydreams"],
            }),
          }}
        />
        {children}
        <CookieBanner />
        <MetaPixel />
        <LiveChat />
      </body>
    </html>
  );
}
