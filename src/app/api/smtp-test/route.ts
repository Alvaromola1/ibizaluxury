import { NextResponse } from "next/server";

export async function GET() {
  try {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER ? "configured" : "missing";
    const smtpPass = process.env.SMTP_PASS ? "configured" : "missing";
    const leadNotifyEmail = process.env.LEAD_NOTIFY_EMAIL;
    const emailFrom = process.env.EMAIL_FROM;

    return NextResponse.json({
      smtpHost,
      smtpPort,
      smtpUser,
      smtpPass,
      leadNotifyEmail,
      emailFrom,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to check SMTP config" },
      { status: 500 }
    );
  }
}
