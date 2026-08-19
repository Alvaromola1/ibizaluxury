import { NextResponse } from "next/server";
import { desc } from "drizzle-orm";
import { db } from "@/db";
import { leads } from "@/db/schema";
import { notifyConcierge, sendClientConfirmation } from "@/lib/email";
import { Pool } from "pg";

export const dynamic = "force-dynamic";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const phone = String(body.phone || "").trim() || null;
    const service = String(body.service || "").trim();
    const guests = String(body.guests || "").trim() || null;
    const dates = String(body.dates || "").trim() || null;
    const budget = String(body.budget || "").trim() || null;
    const message = String(body.message || "").trim() || null;
    const source = String(body.source || "landing").trim();
    const utmSource = String(body.utmSource || "").trim() || null;
    const utmMedium = String(body.utmMedium || "").trim() || null;
    const utmCampaign = String(body.utmCampaign || "").trim() || null;
    const language = String(body.language || "es").trim() || "es";

    if (!name || name.length < 2) {
      return NextResponse.json(
        { error: "Por favor, indica tu nombre completo." },
        { status: 400 }
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Necesitamos un email válido para enviarte la propuesta." },
        { status: 400 }
      );
    }

    if (!service) {
      return NextResponse.json(
        { error: "Selecciona el servicio o paquete de interés." },
        { status: 400 }
      );
    }

    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      return NextResponse.json(
        { error: "Database configuration missing." },
        { status: 500 }
      );
    }

    const pool = new Pool({ connectionString: databaseUrl });
    
    try {
      const result = await pool.query(
        `INSERT INTO leads (
          name, email, phone, service, guests, dates, budget, message, 
          source, utm_source, utm_medium, utm_campaign, language, contacted
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING id`,
        [
          name,
          email,
          phone,
          service,
          guests,
          dates,
          budget,
          message,
          source,
          utmSource,
          utmMedium,
          utmCampaign,
          language,
          false
        ]
      );

      const leadId = result.rows[0].id;

      // Fire-and-forget emails (never block the response if they fail)
      const emailData = {
        name,
        email,
        phone,
        service,
        guests,
        dates,
        budget,
        message,
        language,
        source,
        utmSource,
        utmMedium,
        utmCampaign,
      };
      Promise.allSettled([
        notifyConcierge(emailData),
        sendClientConfirmation(emailData),
      ]).catch(() => {});

      return NextResponse.json({
        success: true,
        id: leadId,
        message: "Solicitud recibida. Te respondemos de inmediato.",
      });
    } finally {
      await pool.end();
    }
  } catch (error) {
    console.error("Lead creation failed", error);
    // Try to extract more error details for debugging
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Error: ${errorMessage}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const rows = await db.select().from(leads).orderBy(desc(leads.createdAt));
    return NextResponse.json({ leads: rows });
  } catch (error) {
    console.error("Lead fetch failed", error);
    return NextResponse.json(
      { error: "No se pudieron cargar los leads." },
      { status: 500 }
    );
  }
}
