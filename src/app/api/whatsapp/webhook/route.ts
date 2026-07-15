import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type WhatsAppMessage = {
  from: string;
  id?: string;
  type?: string;
  text?: { body?: string };
};

type WhatsAppValue = {
  messages?: WhatsAppMessage[];
  contacts?: Array<{ profile?: { name?: string }; wa_id?: string }>;
};

type IncomingPayload = {
  entry?: Array<{
    changes?: Array<{
      value?: WhatsAppValue;
    }>;
  }>;
  hub?: {
    mode?: string;
    challenge?: string;
    verify_token?: string;
  };
};

function getConfig() {
  return {
    accessToken: process.env.WHATSAPP_ACCESS_TOKEN || "",
    phoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || "",
    verifyToken: process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN || "",
    apiVersion: process.env.WHATSAPP_API_VERSION || "v22.0",
  };
}

async function sendReply(to: string, text: string) {
  const { accessToken, phoneNumberId, apiVersion } = getConfig();
  if (!accessToken || !phoneNumberId) return null;

  const response = await fetch(
    `https://graph.facebook.com/${apiVersion}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to,
        type: "text",
        text: { body: text },
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("WhatsApp send failed", response.status, errorText);
  }

  return response;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");
  const { verifyToken } = getConfig();

  if (mode === "subscribe" && token === verifyToken && challenge) {
    return new NextResponse(challenge, { status: 200, headers: { "content-type": "text/plain" } });
  }

  return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as IncomingPayload;

    const value = payload.entry?.[0]?.changes?.[0]?.value;
    const messages = value?.messages || [];

    if (messages.length === 0) {
      return NextResponse.json({ ok: true });
    }

    const message = messages[0];
    const from = message.from;
    const bodyText = message.text?.body?.trim() || "";

    const reply = bodyText
      ? `Gracias por escribir a Ibiza Luxury Dreams. Hemos recibido tu mensaje: “${bodyText}”. Un concierge te responderá en breve.`
      : "Gracias por escribir a Ibiza Luxury Dreams. Un concierge te responderá en breve.";

    await sendReply(from, reply);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("WhatsApp webhook error", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
