import { NextResponse } from "next/server";

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const MAX_MESSAGE_LENGTH = 5000;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

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

    if (trimmedName.length > MAX_NAME_LENGTH) {
      return NextResponse.json({ success: false, error: "Name is too long." }, { status: 400 });
    }

    if (trimmedEmail.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json({ success: false, error: "Email is too long." }, { status: 400 });
    }

    if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ success: false, error: "Message is too long." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    const to = process.env.CONTACT_TO_EMAIL?.trim();
    const from = process.env.CONTACT_FROM_EMAIL?.trim();

    if (!apiKey || !to || !from) {
      return NextResponse.json(
        { success: false, error: "Email service is not configured. Please set environment variables." },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br />");

    const subject = `New portfolio contact from ${trimmedName}`;

    const text = [
      `New Portfolio Contact`,
      ``,
      `Name: ${trimmedName}`,
      `Email: ${trimmedEmail}`,
      ``,
      `Message:`,
      trimmedMessage,
    ].join("\n");

    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>${subject}</title>
        </head>
        <body style="margin:0; padding:0; background-color:#020617; font-family:Arial, Helvetica, sans-serif; color:#e2e8f0;">
          <div style="margin:0; padding:32px 16px; background:linear-gradient(180deg, #020617 0%, #0f172a 100%);">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:680px; margin:0 auto; border-collapse:collapse;">
              <tr>
                <td style="padding:0;">
                  <div style="border:1px solid rgba(34,211,238,0.18); border-radius:24px; overflow:hidden; background:rgba(15,23,42,0.92); box-shadow:0 0 0 1px rgba(34,211,238,0.05), 0 20px 60px rgba(0,0,0,0.45);">
                    
                    <div style="padding:32px 32px 24px; background:
                      radial-gradient(circle at top right, rgba(34,211,238,0.16), transparent 35%),
                      radial-gradient(circle at top left, rgba(59,130,246,0.14), transparent 30%),
                      linear-gradient(180deg, rgba(15,23,42,0.98), rgba(2,6,23,0.98));">
                      
                      <div style="display:inline-block; padding:8px 14px; border:1px solid rgba(34,211,238,0.24); border-radius:999px; color:#67e8f9; font-size:12px; letter-spacing:0.18em; text-transform:uppercase; background:rgba(34,211,238,0.06);">
                        Portfolio Inquiry
                      </div>

                      <h1 style="margin:18px 0 10px; font-size:28px; line-height:1.2; color:#f8fafc; font-weight:700;">
                        New message from your portfolio
                      </h1>

                      <p style="margin:0; font-size:15px; line-height:1.7; color:#cbd5e1;">
                        Someone reached out through your portfolio contact form. Here are the details.
                      </p>
                    </div>

                    <div style="padding:24px 32px 32px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:separate; border-spacing:0 14px;">
                        <tr>
                          <td style="width:140px; padding:14px 16px; border:1px solid rgba(34,211,238,0.12); border-radius:14px; background:rgba(15,23,42,0.72); color:#67e8f9; font-size:12px; text-transform:uppercase; letter-spacing:0.14em;">
                            Name
                          </td>
                          <td style="padding:14px 16px; border:1px solid rgba(148,163,184,0.14); border-radius:14px; background:rgba(2,6,23,0.72); color:#f8fafc; font-size:15px;">
                            ${safeName}
                          </td>
                        </tr>

                        <tr>
                          <td style="width:140px; padding:14px 16px; border:1px solid rgba(34,211,238,0.12); border-radius:14px; background:rgba(15,23,42,0.72); color:#67e8f9; font-size:12px; text-transform:uppercase; letter-spacing:0.14em;">
                            Email
                          </td>
                          <td style="padding:14px 16px; border:1px solid rgba(148,163,184,0.14); border-radius:14px; background:rgba(2,6,23,0.72); color:#f8fafc; font-size:15px; word-break:break-word;">
                            <a href="mailto:${safeEmail}" style="color:#a5f3fc; text-decoration:none;">${safeEmail}</a>
                          </td>
                        </tr>
                      </table>

                      <div style="margin-top:18px; border:1px solid rgba(148,163,184,0.14); border-radius:18px; background:rgba(2,6,23,0.76); overflow:hidden;">
                        <div style="padding:14px 18px; border-bottom:1px solid rgba(148,163,184,0.12); color:#67e8f9; font-size:12px; text-transform:uppercase; letter-spacing:0.14em; background:rgba(15,23,42,0.72);">
                          Message
                        </div>
                        <div style="padding:20px 18px; color:#e2e8f0; font-size:15px; line-height:1.8; word-break:break-word;">
                          ${safeMessage}
                        </div>
                      </div>

                      <div style="margin-top:24px; padding-top:20px; border-top:1px solid rgba(148,163,184,0.12);">
                        <p style="margin:0; font-size:13px; line-height:1.7; color:#94a3b8;">
                          Sent from your portfolio contact form.<br />
                          Reply directly to this email to answer <span style="color:#e2e8f0;">${safeName}</span>.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p style="margin:16px 0 0; text-align:center; font-size:12px; color:#64748b;">
                    Aziz Dhifaoui • Full Stack JavaScript Developer & Network Expert
                  </p>
                </td>
              </tr>
            </table>
          </div>
        </body>
      </html>
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
      const errorText = await resendResponse.text();
      console.error("Contact API: Resend request failed", {
        status: resendResponse.status,
        errorText,
      });
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Unexpected error while sending message." },
      { status: 500 }
    );
  }
}
