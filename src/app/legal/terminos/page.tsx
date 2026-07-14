import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de Ibiza Luxury Dreams.",
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <h1 className="mt-6 font-display text-4xl md:text-5xl">Términos y Condiciones</h1>
      <p className="mt-2 text-sm" style={{ color: "#6d655a" }}>
        Última actualización: enero 2026
      </p>

      <div className="legal-prose mt-8">
        <p>
          El acceso y uso de este sitio web implica la aceptación de los presentes términos y
          condiciones.
        </p>

        <h2>Objeto</h2>
        <p>
          Ibiza Luxury Dreams es un servicio de concierge de lujo que organiza estancias,
          experiencias y servicios a medida en Ibiza y alrededores. Las imágenes mostradas son
          orientativas y no constituyen una oferta vinculante.
        </p>

        <h2>Solicitudes y disponibilidad</h2>
        <p>
          Trabajamos de forma personalizada. La disponibilidad de villas, yates, vehículos y
          servicios está sujeta a confirmación en el momento de la propuesta. Las tarifas
          pueden variar según temporada, duración y servicios incluidos.
        </p>

        <h2>Reservas y pago</h2>
        <p>
          La confirmación de cualquier servicio requiere un depósito. El saldo y las condiciones
          específicas se comunicarán por escrito en cada propuesta. Las políticas de cancelación
          dependen de cada proveedor y se detallarán antes de la confirmación.
        </p>

        <h2>Responsabilidad</h2>
        <p>
          Ibiza Luxury Dreams actúa como organizador y coordinador de servicios prestados por
          terceros. No nos hacemos responsables de incidencias ajenas a nuestra organización
          directa, aunque trabajaremos siempre para resolverlas.
        </p>

        <h2>Privacidad</h2>
        <p>
          El tratamiento de datos personales se rige por nuestra{" "}
          <a href="/legal/privacidad">Política de Privacidad</a>.
        </p>

        <h2>Legislación aplicable</h2>
        <p>
          Estos términos se rigen por la legislación española. Para cualquier controversia, las
          partes se someten a los juzgados de Ibiza, renunciando a cualquier otro fuero.
        </p>
      </div>
    </>
  );
}
