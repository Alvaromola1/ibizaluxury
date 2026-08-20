import nodemailer from "nodemailer";

/**
 * Email service. Configures via SMTP env vars. If not configured,
 * emails are gracefully skipped so the app still works (leads are
 * always saved to the database regardless).
 *
 * Required env vars to enable:
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
 *   LEAD_NOTIFY_EMAIL  (where concierge notifications go)
 */

type SmtpConfig = {
  host: string;
  port: number;
  user: string;
  pass: string;
};

function getSmtpConfig(): SmtpConfig | null {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  
  console.log("[email] SMTP config check:", {
    host: !!host,
    port: !!port,
    user: user ? "configured" : "missing",
    pass: pass ? "configured" : "missing"
  });
  
  if (!host || !port || !user || !pass) return null;
  return { host, port: Number(port), user, pass };
}

let cached: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (cached) return cached;
  const config = getSmtpConfig();
  if (!config) return null;
  cached = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass },
  });
  return cached;
}

const GOLD = "#b8924a";
const INK = "#0c1520";

function shell(inner: string): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4efe6;font-family:Georgia,'Times New Roman',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4efe6;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:20px;overflow:hidden;max-width:600px;width:100%;box-shadow:0 8px 30px rgba(12,21,32,0.08);">
        <tr><td style="background:${INK};padding:28px 32px;text-align:center;">
          <p style="margin:0;color:${GOLD};font-size:11px;letter-spacing:4px;text-transform:uppercase;">Private Concierge</p>
          <p style="margin:6px 0 0;color:#f7f3ec;font-size:24px;letter-spacing:1px;">Ibiza Luxury Dreams</p>
        </td></tr>
        <tr><td style="padding:36px 32px;color:${INK};">${inner}</td></tr>
        <tr><td style="background:#fcfaf6;padding:20px 32px;text-align:center;border-top:1px solid #e6dfd2;">
          <p style="margin:0;color:#6d655a;font-size:12px;">info@ibizaluxurydreams.com · +34 691 785 960</p>
          <p style="margin:6px 0 0;color:#9a9083;font-size:11px;">© 2026 Ibiza Luxury Dreams · Ibiza, Balearic Islands</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export type LeadEmailData = {
  name: string;
  email: string;
  phone?: string | null;
  service: string;
  guests?: string | null;
  dates?: string | null;
  budget?: string | null;
  message?: string | null;
  language?: string | null;
  source?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
};

function row(label: string, value?: string | null) {
  if (!value) return "";
  return `<tr><td style="padding:8px 0;color:#6d655a;font-size:13px;vertical-align:top;width:130px;">${label}</td><td style="padding:8px 0;color:${INK};font-size:14px;font-family:Arial,sans-serif;">${value}</td></tr>`;
}

export async function notifyConcierge(data: LeadEmailData): Promise<void> {
  const transporter = getTransporter();
  if (!transporter) {
    console.log("[email] SMTP not configured — skipping concierge notification");
    return;
  }
  const to = process.env.LEAD_NOTIFY_EMAIL || "info@ibizaluxurydreams.com";

  const inner = `
    <h1 style="margin:0 0 8px;font-size:26px;">Nueva solicitud 🥂</h1>
    <p style="margin:0 0 24px;color:#6d655a;font-family:Arial,sans-serif;font-size:14px;">Un cliente ha solicitado una propuesta. Responde de inmediato para cumplir la promesa de velocidad.</p>
    <table cellpadding="0" cellspacing="0" style="width:100%;border-top:1px solid #e6dfd2;">
      ${row("Nombre", data.name)}
      ${row("Email", `<a href="mailto:${data.email}" style="color:${GOLD};">${data.email}</a>`)}
      ${row("Teléfono", data.phone)}
      ${row("Servicio", data.service)}
      ${row("Huéspedes", data.guests)}
      ${row("Fechas", data.dates)}
      ${row("Presupuesto", data.budget)}
      ${row("Mensaje", data.message)}
      ${row("Idioma", data.language)}
      ${row("Origen", data.source)}
      ${row("UTM source", data.utmSource)}
      ${row("UTM medium", data.utmMedium)}
      ${row("UTM campaign", data.utmCampaign)}
    </table>
    <p style="margin:24px 0 0;"><a href="https://ibizaluxurydreams.com/admin" style="display:inline-block;background:${GOLD};color:${INK};padding:12px 24px;border-radius:999px;text-decoration:none;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;letter-spacing:1px;">VER EN EL PANEL</a></p>`;

  await transporter.sendMail({
    from: `"Ibiza Luxury Dreams" <${process.env.SMTP_USER}>`,
    to,
    subject: `🥂 Nueva solicitud: ${data.name} — ${data.service}`,
    html: shell(inner),
  });
}

const confirmations: Record<string, { subject: string; body: string }> = {
  es: {
    subject: "Recibido · Tu propuesta está en marcha",
    body: `
      <h1 style="margin:0 0 8px;font-size:26px;">Gracias, ${"{name}"} 🥂</h1>
      <p style="margin:0 0 20px;color:#6d655a;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">Hemos recibido tu solicitud. Un concierge de Ibiza Luxury Dreams se pondrá en contacto contigo de inmediato con varias propuestas reales, pensadas para tus fechas y tu estilo.</p>
      <table cellpadding="0" cellspacing="0" style="width:100%;background:#fcfaf6;border-radius:14px;">
        <tr><td style="padding:20px;">
          <p style="margin:0 0 8px;color:${GOLD};font-size:11px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">Lo que pasa ahora</p>
          <p style="margin:0;color:${INK};font-family:Arial,sans-serif;font-size:14px;line-height:1.7;">1. Revisamos disponibilidad real<br>2. Te enviamos varias propuestas a medida<br>3. Tú eliges y nosotros lo atamos todo</p>
        </td></tr>
      </table>
      <p style="margin:24px 0 0;color:#6d655a;font-family:Arial,sans-serif;font-size:14px;">¿Quieres ir más rápido? Escríbenos por WhatsApp:</p>
      <p style="margin:8px 0 0;"><a href="/api/track/whatsapp?redirect=https%3A%2F%2Fwa.me%2F34691785960" style="display:inline-block;background:#25D366;color:#fff;padding:12px 24px;border-radius:999px;text-decoration:none;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;">WhatsApp Concierge</a></p>`,
  },
  en: {
    subject: "Received · Your proposal is on its way",
    body: `
      <h1 style="margin:0 0 8px;font-size:26px;">Thank you, ${"{name}"} 🥂</h1>
      <p style="margin:0 0 20px;color:#6d655a;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">We've received your request. An Ibiza Luxury Dreams concierge will contact you immediately with several real proposals, designed for your dates and style.</p>
      <table cellpadding="0" cellspacing="0" style="width:100%;background:#fcfaf6;border-radius:14px;">
        <tr><td style="padding:20px;">
          <p style="margin:0 0 8px;color:${GOLD};font-size:11px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">What happens next</p>
          <p style="margin:0;color:${INK};font-family:Arial,sans-serif;font-size:14px;line-height:1.7;">1. We check real availability<br>2. We send you several tailored proposals<br>3. You choose and we lock everything in</p>
        </td></tr>
      </table>
      <p style="margin:24px 0 0;color:#6d655a;font-family:Arial,sans-serif;font-size:14px;">Want to move faster? Message us on WhatsApp:</p>
      <p style="margin:8px 0 0;"><a href="/api/track/whatsapp?redirect=https%3A%2F%2Fwa.me%2F34691785960" style="display:inline-block;background:#25D366;color:#fff;padding:12px 24px;border-radius:999px;text-decoration:none;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;">WhatsApp Concierge</a></p>`,
  },
  de: {
    subject: "Erhalten · Ihr Angebot ist unterwegs",
    body: `
      <h1 style="margin:0 0 8px;font-size:26px;">Danke, ${"{name}"} 🥂</h1>
      <p style="margin:0 0 20px;color:#6d655a;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">Wir haben Ihre Anfrage erhalten. Ein Concierge von Ibiza Luxury Dreams meldet sich umgehend mit mehreren echten Angeboten, die auf Ihre Daten und Ihren Stil zugeschnitten sind.</p>
      <table cellpadding="0" cellspacing="0" style="width:100%;background:#fcfaf6;border-radius:14px;">
        <tr><td style="padding:20px;">
          <p style="margin:0 0 8px;color:${GOLD};font-size:11px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">Wie es weitergeht</p>
          <p style="margin:0;color:${INK};font-family:Arial,sans-serif;font-size:14px;line-height:1.7;">1. Wir prüfen die echte Verfügbarkeit<br>2. Wir senden mehrere maßgeschneiderte Angebote<br>3. Sie wählen und wir sichern alles</p>
        </td></tr>
      </table>
      <p style="margin:24px 0 0;color:#6d655a;font-family:Arial,sans-serif;font-size:14px;">Schneller gehen? Schreiben Sie uns auf WhatsApp:</p>
      <p style="margin:8px 0 0;"><a href="/api/track/whatsapp?redirect=https%3A%2F%2Fwa.me%2F34691785960" style="display:inline-block;background:#25D366;color:#fff;padding:12px 24px;border-radius:999px;text-decoration:none;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;">WhatsApp Concierge</a></p>`,
  },
  fr: {
    subject: "Reçu · Votre offre est en route",
    body: `
      <h1 style="margin:0 0 8px;font-size:26px;">Merci, ${"{name}"} 🥂</h1>
      <p style="margin:0 0 20px;color:#6d655a;font-family:Arial,sans-serif;font-size:14px;line-height:1.6;">Nous avons bien reçu votre demande. Un concierge d'Ibiza Luxury Dreams vous contactera immédiatement avec plusieurs propositions réelles, conçues pour vos dates et votre style.</p>
      <table cellpadding="0" cellspacing="0" style="width:100%;background:#fcfaf6;border-radius:14px;">
        <tr><td style="padding:20px;">
          <p style="margin:0 0 8px;color:${GOLD};font-size:11px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">La suite</p>
          <p style="margin:0;color:${INK};font-family:Arial,sans-serif;font-size:14px;line-height:1.7;">1. On vérifie la disponibilité réelle<br>2. On envoie plusieurs propositions sur mesure<br>3. Vous choisissez et on sécurise tout</p>
        </td></tr>
      </table>
      <p style="margin:24px 0 0;color:#6d655a;font-family:Arial,sans-serif;font-size:14px;">Aller plus vite ? Écrivez-nous sur WhatsApp :</p>
      <p style="margin:8px 0 0;"><a href="/api/track/whatsapp?redirect=https%3A%2F%2Fwa.me%2F34691785960" style="display:inline-block;background:#25D366;color:#fff;padding:12px 24px;border-radius:999px;text-decoration:none;font-family:Arial,sans-serif;font-size:13px;font-weight:bold;">WhatsApp Concierge</a></p>`,
  },
};

export async function sendClientConfirmation(data: LeadEmailData): Promise<void> {
  const transporter = getTransporter();
  if (!transporter) {
    console.log("[email] SMTP not configured — skipping client confirmation");
    return;
  }
  const lang = (data.language || "es").slice(0, 2);
  const tmpl = confirmations[lang] || confirmations.es;
  const inner = tmpl.body.replace("{name}", data.name.split(" ")[0] || data.name);

  await transporter.sendMail({
    from: `"Ibiza Luxury Dreams" <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: tmpl.subject,
    html: shell(inner),
  });
}
