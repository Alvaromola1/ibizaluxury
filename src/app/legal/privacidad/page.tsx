import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Ibiza Luxury Dreams.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <h1 className="mt-6 font-display text-4xl md:text-5xl">Política de Privacidad</h1>
      <p className="mt-2 text-sm" style={{ color: "#6d655a" }}>
        Última actualización: enero 2026
      </p>

      <div className="legal-prose mt-8">
        <p>
          Ibiza Luxury Dreams (&ldquo;nosotros&rdquo;) es el responsable del tratamiento de
          los datos personales que nos proporcionas a través de este sitio web. Esta política
          explica cómo recogemos, usamos y protegemos tu información.
        </p>

        <h2>Datos que recogemos</h2>
        <p>
          Cuando rellenas nuestro formulario de solicitud, recogemos: nombre, email, teléfono
          (si lo facilitas), servicio de interés, fechas, número de huéspedes, presupuesto
          orientativo y cualquier mensaje que incluyas. También podemos registrar datos
          analíticos anónimos y parámetros de campaña (UTM).
        </p>

        <h2>Finalidad del tratamiento</h2>
        <p>
          Tratamos tus datos con el único fin de responder a tu solicitud, preparar propuestas
          personalizadas y gestionar los servicios de concierge que nos pidas.
        </p>

        <h2>Legitimación</h2>
        <p>
          La base legal es tu consentimiento al enviar el formulario y, en su caso, la
          ejecución de las precontratales o contractuales que se deriven de los servicios
          solicitados.
        </p>

        <h2>Conservación</h2>
        <p>
          Conservaremos tus datos mientras dure la relación y, posteriormente, durante los
          plazos legalmente exigibles, salvo que solicites su supresión.
        </p>

        <h2>Comunicación de datos</h2>
        <p>
          No cedemos tus datos a terceros con fines comerciales. Solo podrán acceder proveedores
          de servicios (ej. alojamiento, transporte, catering) en la medida estrictamente
          necesaria para organizar tu experiencia, siempre bajo acuerdos de confidencialidad.
        </p>

        <h2>Derechos del interesado</h2>
        <p>
          Puedes ejercer en cualquier momento tus derechos de acceso, rectificación,
          supresión, oposición, limitación y portabilidad escribiendo a{" "}
          <a href="mailto:info@ibizaluxurydreams.com">info@ibizaluxurydreams.com</a>.
        </p>

        <h2>Medidas de seguridad</h2>
        <p>
          Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos frente
          a accesos no autorizados, alteración o divulgación.
        </p>
      </div>
    </>
  );
}
