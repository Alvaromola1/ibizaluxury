import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Ibiza Luxury Dreams.",
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <h1 className="mt-6 font-display text-4xl md:text-5xl">Política de Cookies</h1>
      <p className="mt-2 text-sm" style={{ color: "#6d655a" }}>
        Última actualización: enero 2026
      </p>

      <div className="legal-prose mt-8">
        <p>
          Esta página explica qué cookies utilizamos, para qué sirven y cómo puedes gestionarlas.
          Una cookie es un pequeño archivo de texto que se almacena en tu dispositivo cuando
          visitas una web.
        </p>

        <h2>Cookies técnicas (necesarias)</h2>
        <p>
          Son esenciales para el funcionamiento básico del sitio, como recordar tu idioma
          preferido. No requieren consentimiento y no se pueden desactivar si quieres usar la web.
        </p>

        <h2>Cookies analíticas</h2>
        <p>
          Si las habilitas, nos ayudan a entender cómo usan los visitantes la web para mejorarla.
          Pueden ser propias o de terceros (ej. Google Analytics). Solo se activan si aceptas
          el banner de cookies.
        </p>

        <h2>Cookies publicitarias</h2>
        <p>
          Si en el futuro utilizamos píxeles de publicidad (ej. Meta, Google), estos podrían
          instalar cookies para medir el rendimiento de las campañas. Se activarán únicamente
          con tu consentimiento.
        </p>

        <h2>Cómo gestionar las cookies</h2>
        <p>
          Puedes aceptar, rechazar o eliminar las cookies desde el banner que te mostramos al
          entrar en la web, o desde la configuración de tu navegador. Si las desactivas, algunas
          funciones podrían no estar disponibles.
        </p>

        <h2>¿Necesitas más información?</h2>
        <p>
          Escríbenos a{" "}
          <a href="mailto:info@ibizaluxurydreams.com">info@ibizaluxurydreams.com</a> y te
          ayudaremos encantados.
        </p>
      </div>
    </>
  );
}
