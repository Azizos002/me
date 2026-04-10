import { NextResponse } from "next/server";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  try {
    const { name, email, message } = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const trimmedName = name?.trim() ?? "";
    const trimmedEmail = email?.trim() ?? "";
    const trimmedMessage = message?.trim() ?? "";

    if (!trimmedName) {
      return NextResponse.json({ success: false, error: "Name is required." }, { status: 400 });
    }

    if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
      return NextResponse.json({ success: false, error: "A valid email is required." }, { status: 400 });
    }

    if (!trimmedMessage) {
      return NextResponse.json({ success: false, error: "Message is required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured. Please set environment variables." },
        { status: 500 }
      );
    }

    const subject = `New portfolio contact from ${trimmedName}`;
    const text = [
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      "",
      "Message:",
      trimmedMessage,
    ].join("\n");

    const html = `
      <h2>New Portfolio Contact</h2>
      <p><strong>Name:</strong> ${trimmedName}</p>
      <p><strong>Email:</strong> ${trimmedEmail}</p>
      <p><strong>Message:</strong></p>
      <p>${trimmedMessage.replace(/\n/g, "<br />")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject,
        text,
        html,
        reply_to: trimmedEmail,
      }),
    });

    if (!resendResponse.ok) {
      return NextResponse.json({ success: false, error: "Failed to send email." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Unexpected error while sending message." }, { status: 500 });
  }
}
