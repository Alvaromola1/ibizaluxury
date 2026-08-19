import { desc } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Panel de leads",
  robots: { index: false, follow: false },
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default async function AdminPage() {
  const rows = await db.select().from(leads).orderBy(desc(leads.createdAt));

  const total = rows.length;
  const last24h = rows.filter(
    (lead) => lead.createdAt && Date.now() - new Date(lead.createdAt).getTime() < 24 * 60 * 60 * 1000
  ).length;
  const highTicket = rows.filter((lead) =>
    ["60k-120k", "120k+", "Signature Week", "Ultra Private"].some(
      (value) =>
        lead.budget === value ||
        lead.service.includes("Signature") ||
        lead.service.includes("Ultra")
    )
  ).length;

  return (
    <main className="min-h-screen px-5 py-10 md:px-8" style={{ background: "#fcfaf6" }}>
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-[11px] uppercase tracking-[0.2em]" style={{ color: "#b8924a" }}>
          ← Volver a la landing
        </Link>
        <h1 className="mt-3 font-display text-4xl md:text-5xl" style={{ color: "#0c1520" }}>
          Panel de leads
        </h1>
        <p className="mt-2 text-sm" style={{ color: "#6d655a" }}>
          Capturas desde formularios de campaña · más recientes primero
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Total leads", value: total },
            { label: "Últimas 24h", value: last24h },
            { label: "High-ticket signals", value: highTicket },
          ].map((card) => (
            <div key={card.label} className="card-lux p-5">
              <p className="text-[11px] uppercase tracking-[0.16em]" style={{ color: "#6d655a" }}>
                {card.label}
              </p>
              <p className="mt-2 font-display text-4xl" style={{ color: "#b8924a" }}>
                {card.value}
              </p>
            </div>
          ))}
        </div>

        <div className="card-lux mt-8 overflow-hidden">
          {rows.length === 0 ? (
            <div className="p-10 text-center" style={{ color: "#6d655a" }}>
              Aún no hay leads. Cuando alguien envíe el formulario aparecerán aquí.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead style={{ background: "#efe8db", color: "#6d655a" }}>
                  <tr className="text-[11px] uppercase tracking-[0.14em]">
                    <th className="px-4 py-4">Fecha</th>
                    <th className="px-4 py-4">Contacto</th>
                    <th className="px-4 py-4">Servicio</th>
                    <th className="px-4 py-4">Detalle</th>
                    <th className="px-4 py-4">UTM</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((lead) => (
                    <tr key={lead.id} className="align-top" style={{ borderTop: "1px solid #e6dfd2" }}>
                      <td className="whitespace-nowrap px-4 py-4" style={{ color: "#6d655a" }}>
                        {lead.createdAt && formatDate(new Date(lead.createdAt))}
                        <div className="mt-1 text-[10px] uppercase tracking-[0.12em]">{lead.source}</div>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-medium" style={{ color: "#0c1520" }}>{lead.name}</p>
                        <a href={`mailto:${lead.email}`} style={{ color: "#b8924a" }}>{lead.email}</a>
                        {lead.phone && <p className="mt-1" style={{ color: "#6d655a" }}>{lead.phone}</p>}
                      </td>
                      <td className="px-4 py-4" style={{ color: "#0c1520" }}>
                        <p>{lead.service}</p>
                        {lead.budget && (
                          <p className="mt-1 text-xs uppercase tracking-[0.12em]" style={{ color: "#b8924a" }}>
                            {lead.budget}
                          </p>
                        )}
                      </td>
                      <td className="max-w-xs px-4 py-4" style={{ color: "#6d655a" }}>
                        {(lead.guests || lead.dates) && (
                          <p className="text-xs uppercase tracking-[0.12em]">
                            {[lead.guests, lead.dates].filter(Boolean).join(" · ")}
                          </p>
                        )}
                        <p className="mt-1 line-clamp-3">{lead.message || "—"}</p>
                      </td>
                      <td className="px-4 py-4 text-xs" style={{ color: "#6d655a" }}>
                        {lead.utmSource || lead.utmMedium || lead.utmCampaign ? (
                          <div className="space-y-1">
                            {lead.utmSource && <p>src: {lead.utmSource}</p>}
                            {lead.utmMedium && <p>med: {lead.utmMedium}</p>}
                            {lead.utmCampaign && <p>cmp: {lead.utmCampaign}</p>}
                          </div>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
