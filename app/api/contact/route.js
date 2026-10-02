import { NextResponse } from "next/server";

export const runtime = "nodejs";

function clean(value, max = 3000) {
  return String(value ?? "").trim().slice(0, max);
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Simple bot trap.
    if (clean(body.website, 100)) {
      return NextResponse.json({ ok: true, message: "Request received." });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 180);
    const phone = clean(body.phone, 80);
    const customerType = clean(body.customerType, 100);
    const service = clean(body.service, 120);
    const company = clean(body.company, 160);
    const details = clean(body.details, 5000);
    const equipment = clean(body.equipment, 3000);

    if (!name || !email || !phone || !details) {
      return NextResponse.json(
        { message: "Please complete your name, email, phone, and project details." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.QUOTE_TO_EMAIL;
    const from = process.env.QUOTE_FROM_EMAIL || "Parmar Built Website <onboarding@resend.dev>";

    if (!apiKey || !to) {
      return NextResponse.json(
        {
          message:
            "The quote form is ready, but the email destination has not been configured yet. Add RESEND_API_KEY and QUOTE_TO_EMAIL in Vercel.",
        },
        { status: 503 }
      );
    }

    const emailBody = [
      `Name: ${name}`,
      `Company: ${company || "N/A"}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Customer type: ${customerType}`,
      `Service: ${service}`,
      "",
      "Project / Problem Details:",
      details,
      "",
      "Equipment information:",
      equipment || "N/A",
    ].join("\n");

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Parmar Built Quote Request — ${name}`,
        text: emailBody,
      }),
    });

    if (!resendResponse.ok) {
      return NextResponse.json(
        { message: "We couldn't send the request right now. Please call or email Parmar Built directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again or contact Parmar Built directly." },
      { status: 500 }
    );
  }
}
