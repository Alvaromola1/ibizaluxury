import { brand } from "@/lib/content";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
        "Hola, quiero diseñar mi experiencia de lujo en Ibiza."
      )}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,211,102,0.35)] transition hover:scale-[1.03] md:flex md:bottom-8 md:right-8"
      aria-label="Contactar por WhatsApp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.1.55 4.1 1.6 5.9L0 24l6.4-1.7a11.8 11.8 0 0 0 5.65 1.45h.05c6.55 0 11.85-5.3 11.85-11.85 0-3.15-1.25-6.15-3.45-8.4ZM12.1 21.6h-.05a9.8 9.8 0 0 1-5-1.35l-.35-.2-3.8 1 1-3.7-.25-.4a9.75 9.75 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.85-9.8 2.65 0 5.1 1.05 7 2.9a9.75 9.75 0 0 1 2.9 7c0 5.4-4.4 9.75-9.8 9.75Zm5.4-7.35c-.3-.15-1.75-.85-2-.95-.3-.1-.5-.15-.7.15-.2.3-.8.95-.95 1.15-.2.2-.35.2-.65.05-1.75-.85-2.9-1.55-4.05-3.5-.3-.55.3-.5.85-1.7.1-.2.05-.35 0-.5-.05-.15-.7-1.7-.95-2.3-.25-.6-.5-.5-.7-.5h-.6c-.2 0-.5.05-.75.35-.25.3-1 1-1 2.4s1.05 2.8 1.2 3c.15.2 2.05 3.15 5 4.4 1.85.8 2.55.85 3.45.7.55-.1 1.75-.7 2-1.4.25-.7.25-1.3.15-1.4-.05-.15-.25-.2-.55-.35Z" />
      </svg>
      <span className="hidden pr-1 sm:inline">WhatsApp</span>
    </a>
  );
}
