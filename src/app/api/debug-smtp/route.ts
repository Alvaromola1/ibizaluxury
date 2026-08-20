import { NextResponse } from "next/server";
import { notifyConcierge } from "@/lib/email";

export async function GET() {
  try {
    // Try to send a test email
    const emailData = {
      name: "Debug Test",
      email: "alvarostrategy@gmail.com",
      phone: "+34 600 000 000",
      service: "Debug Service",
      language: "es",
    };

    await notifyConcierge(emailData);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error: any) {
    return NextResponse.json(
      { 
        success: false,
        error: error?.message || "Unknown error",
        stack: error?.stack || "No stack",
      },
      { status: 500 }
    );
  }
}
