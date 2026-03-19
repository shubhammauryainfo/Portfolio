import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const inboxEmail = "shubhammaurya8828@gmail.com";

function sanitize(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildOwnerEmail(payload: Required<ContactPayload>) {
  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const subject = escapeHtml(payload.subject);
  const message = escapeHtml(payload.message).replace(/\n/g, "<br />");

  return `
    <div style="margin:0;background:#101010;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#f5f1d8;">
      <div style="max-width:680px;margin:0 auto;border:4px solid #111111;background:linear-gradient(180deg,#fff3b0 0%,#ffffff 100%);box-shadow:12px 12px 0 #000000;">
        <div style="padding:24px 24px 12px;">
          <div style="display:inline-block;padding:8px 14px;background:#ffd400;border:3px solid #111111;color:#111111;font-size:12px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;box-shadow:4px 4px 0 #000000;">
            New Portfolio Message
          </div>
          <h1 style="margin:18px 0 10px;color:#111111;font-size:34px;line-height:1.05;text-transform:uppercase;">
            Someone reached out from your portfolio
          </h1>
          <p style="margin:0;color:#343434;font-size:16px;line-height:1.8;">
            A new contact form submission just landed in your inbox. Here are the details:
          </p>
        </div>
        <div style="padding:12px 24px 24px;">
          <div style="border:4px solid #111111;background:#ffffff;padding:18px 18px 6px;box-shadow:8px 8px 0 #000000;">
            <p style="margin:0 0 12px;color:#111111;font-size:14px;"><strong>Name:</strong> ${name}</p>
            <p style="margin:0 0 12px;color:#111111;font-size:14px;"><strong>Email:</strong> ${email}</p>
            <p style="margin:0 0 12px;color:#111111;font-size:14px;"><strong>Subject:</strong> ${subject}</p>
            <div style="margin-top:18px;border-top:2px solid #111111;padding-top:18px;">
              <p style="margin:0 0 10px;color:#111111;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;">Message</p>
              <p style="margin:0;color:#2f2f2f;font-size:15px;line-height:1.8;">${message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function buildUserEmail(payload: Required<ContactPayload>) {
  const name = escapeHtml(payload.name);
  const subject = escapeHtml(payload.subject);

  return `
    <div style="margin:0;background:#111111;padding:32px 16px;font-family:Arial,Helvetica,sans-serif;color:#f5f1d8;">
      <div style="max-width:680px;margin:0 auto;border:4px solid #111111;background:linear-gradient(180deg,#1c1c1c 0%,#262626 100%);box-shadow:12px 12px 0 #000000;">
        <div style="padding:28px 24px;background:linear-gradient(135deg,#ff5d73 0%,#ff9234 35%,#ffd400 75%,#59b8ff 100%);border-bottom:4px solid #111111;">
          <div style="display:inline-block;padding:8px 14px;background:#111111;border:3px solid #111111;color:#f7f1d6;font-size:12px;font-weight:800;letter-spacing:0.18em;text-transform:uppercase;box-shadow:4px 4px 0 rgba(0,0,0,0.32);">
            Thanks For Reaching Out
          </div>
          <h1 style="margin:18px 0 8px;color:#111111;font-size:34px;line-height:1.02;text-transform:uppercase;">
            Message received, ${name}
          </h1>
          <p style="margin:0;color:#1c1c1c;font-size:16px;line-height:1.8;font-weight:700;">
            Your note about "${subject}" is safely in my inbox.
          </p>
        </div>
        <div style="padding:24px;">
          <div style="border:4px solid #f5d10d;background:#181818;padding:20px;box-shadow:8px 8px 0 #000000;">
            <p style="margin:0 0 14px;color:#f6f1d6;font-size:16px;line-height:1.8;">
              I appreciate you taking the time to reach out through my portfolio.
            </p>
            <p style="margin:0 0 14px;color:#e7ddb8;font-size:15px;line-height:1.8;">
              I usually reply as soon as I can after reviewing the message properly. If your message is about freelance work, collaboration, or a project idea, I&apos;ll respond with the next best step.
            </p>
            <p style="margin:0;color:#e7ddb8;font-size:15px;line-height:1.8;">
              Until then, thank you again for visiting my portfolio.
            </p>
          </div>
          <div style="margin-top:20px;padding:18px;border:3px solid #111111;background:#fff3b0;color:#111111;box-shadow:8px 8px 0 #000000;">
            <p style="margin:0;font-size:14px;line-height:1.8;">
              Shubham Maurya<br />
              Frontend Developer<br />
              Portfolio: <a href="https://shubhammaurya.me" style="color:#111111;font-weight:700;">shubhammaurya.info</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const payload = {
      name: sanitize(body.name || ""),
      email: sanitize(body.email || ""),
      subject: sanitize(body.subject || ""),
      message: sanitize(body.message || "")
    };

    if (!payload.name || !payload.email || !payload.subject || !payload.message) {
      return NextResponse.json({ error: "Please fill out all fields." }, { status: 400 });
    }

    const senderEmail = process.env.EMAIL_USER;
    const senderPassword = process.env.EMAIL_PASS;

    if (!senderEmail || !senderPassword) {
      return NextResponse.json(
        { error: "Email configuration is missing. Please check your environment variables." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: senderEmail,
        pass: senderPassword
      }
    });

    await Promise.all([
      transporter.sendMail({
        from: `"Shubham Maurya Portfolio" <${senderEmail}>`,
        to: inboxEmail,
        replyTo: payload.email,
        subject: `Portfolio inquiry from ${payload.name}: ${payload.subject}`,
        text: `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject}\n\n${payload.message}`,
        html: buildOwnerEmail(payload)
      }),
      transporter.sendMail({
        from: `"Shubham Maurya Portfolio" <${senderEmail}>`,
        to: payload.email,
        subject: `Thanks for reaching out to Shubham Maurya`,
        text: `Hi ${payload.name},\n\nThanks for reaching out through my portfolio. I received your message about "${payload.subject}" and will get back to you soon.\n\nBest,\nShubham Maurya`,
        html: buildUserEmail(payload)
      })
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      { error: "Your message could not be sent right now. Please try again in a moment." },
      { status: 500 }
    );
  }
}
