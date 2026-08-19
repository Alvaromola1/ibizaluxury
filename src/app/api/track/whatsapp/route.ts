import { NextResponse } from "next/server";
import { TriggerGoogleConversion } from "@/components/GoogleTag";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const redirect = url.searchParams.get("redirect") || "https://wa.me/34691785960";

    // Trigger Google Ads conversion
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "conversion", {
        send_to: "AW-18395303339/sVf7CKCGruMcEKubyMNE",
      });
    }

    return NextResponse.redirect(redirect);
  } catch (error) {
    // Always redirect to WhatsApp even if tracking fails
    return NextResponse.redirect("https://wa.me/34691785960");
  }
}
