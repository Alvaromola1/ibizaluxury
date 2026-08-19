import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const redirect = url.searchParams.get("redirect") || "https://wa.me/34691785960";

    return NextResponse.redirect(redirect);
  } catch (error) {
    // Always redirect to WhatsApp even if tracking fails
    return NextResponse.redirect("https://wa.me/34691785960");
  }
}
