import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";
import { sanitizeContactData, escapeHtml } from "@/lib/sanitize";
import { rateLimit } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_KEY);

const MAX_BODY_SIZE = 10 * 1024; // 10 KB  
const SITE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.DEVELOP_PROD
    : process.env.DEVELOP_LOCAL;

function isAllowedOrigin(request) {
  const origin = request.headers.get("origin");
  if (!origin) return true; // same-site navigations, curl, server-to-server

  // In local dev, always allow localhost regardless of what's configured.
  if (process.env.NODE_ENV !== "production") {
    return !SITE_URL || origin === SITE_URL || /^https?:\/\/localhost(:\d+)?$/.test(origin);
  }

  return !SITE_URL || origin === SITE_URL;
}

function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

function buildEmailHtml({ fullName, email, phone, subject, message }) {
  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const row = (label, value) => `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; width: 120px; color: #6b6b6b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; vertical-align: top;">
        ${label}
      </td>
      <td style="padding: 10px 0; border-bottom: 1px solid #eeeeee; color: #1a1a1a; font-size: 14px; vertical-align: top;">
        ${value}
      </td>
    </tr>
  `;

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f3f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f3f0; padding: 32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.06);">

              <!-- Header -->
              <tr>
                <td style="background-color: #1a1a1a; padding: 28px 36px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="color: #ffffff; font-size: 18px; font-weight: 700; letter-spacing: 0.02em;">
                        Fixbug Infotech
                      </td>
                      <td align="right" style="color: #d4a94a; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em;">
                        New Inquiry
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Title band -->
              <tr>
                <td style="padding: 32px 36px 8px 36px;">
                  <p style="margin: 0 0 4px 0; color: #d4a94a; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;">
                    Contact Form Submission
                  </p>
                  <h1 style="margin: 0; color: #1a1a1a; font-size: 22px; font-weight: 700; line-height: 1.3;">
                    ${escapeHtml(subject)}
                  </h1>
                  <p style="margin: 8px 0 0 0; color: #8a8a8a; font-size: 13px;">
                    Received on ${submittedAt} IST
                  </p>
                </td>
              </tr>

              <!-- Details table -->
              <tr>
                <td style="padding: 20px 36px 8px 36px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    ${row("Name", escapeHtml(fullName))}
                    ${row(
                      "Email",
                      `<a href="mailto:${escapeHtml(email)}" style="color: #1a1a1a; text-decoration: none; border-bottom: 1px solid #d4a94a;">${escapeHtml(email)}</a>`
                    )}
                    ${row(
                      "Phone",
                      `<a href="tel:${escapeHtml(phone)}" style="color: #1a1a1a; text-decoration: none; border-bottom: 1px solid #d4a94a;">${escapeHtml(phone)}</a>`
                    )}
                  </table>
                </td>
              </tr>

              <!-- Message -->
              <tr>
                <td style="padding: 20px 36px 32px 36px;">
                  <p style="margin: 0 0 10px 0; color: #6b6b6b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">
                    Message
                  </p>
                  <div style="background-color: #f9f8f6; border: 1px solid #eeeeee; border-radius: 12px; padding: 18px 20px; color: #1a1a1a; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(
                    message
                  )}</div>
                </td>
              </tr>

              <!-- CTA -->
              <tr>
                <td style="padding: 0 36px 36px 36px;">
                  <a href="mailto:${escapeHtml(email)}?subject=${encodeURIComponent(
                    "Re: " + subject
                  )}" style="display: inline-block; background-color: #1a1a1a; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 12px 24px; border-radius: 999px;">
                    Reply to ${escapeHtml(fullName)}
                  </a>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color: #f9f8f6; padding: 20px 36px; border-top: 1px solid #eeeeee;">
                  <p style="margin: 0; color: #9a9a9a; font-size: 12px; line-height: 1.6;">
                    This message was sent from the contact form on fixbuginfotech.online.
                    Reply-to has been set to the sender's email address above.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

export async function POST(request) {
  try {
    // 1. Origin check (basic CSRF / cross-site-abuse guard)
    if (!isAllowedOrigin(request)) {
      return NextResponse.json(
        { success: false, message: "Request origin not allowed" },
        { status: 403 }
      );
    }

    // 2. Content-Type enforcement
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Unsupported content type" },
        { status: 415 }
      );
    }

    // 3. Body size guard (DoS protection)
    const contentLength = request.headers.get("content-length");
    if (contentLength && Number(contentLength) > MAX_BODY_SIZE) {
      return NextResponse.json(
        { success: false, message: "Request body is too large" },
        { status: 413 }
      );
    }

    // 4. Rate limiting
    const ip = getClientIp(request);
    if (!rateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    // 5. Safe JSON parsing
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON body" },
        { status: 400 }
      );
    }

    // 6. Schema validation
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // 7. Honeypot check — pretend success so bots don't learn they were caught
    if (result.data.company) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully.",
      });
    }

    // 8. Sanitize before the data touches email or logs
    const clean = sanitizeContactData(result.data);

    // 9. Send via Resend
    const { error } = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>", // Resend's test sender — works without domain verification. Swap this for a verified domain (e.g. contact@yourrealdomain.com) once you own and verify one at resend.com/domains
      to: ["fixbuginfotech@gmail.com"],
      replyTo: clean.email,
      subject: `New inquiry: ${clean.subject}`,
      html: buildEmailHtml(clean),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send your message. Please try again later.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}