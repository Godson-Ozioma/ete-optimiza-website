import { NextResponse } from "next/server";

import { contactIntents } from "@/content/contact";
import { contact } from "@/content/site";
import { contactFormSchema } from "@/lib/contact-schema";

const MAX_BODY_BYTES = 20_000;

function escapeText(value: string): string {
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "");
}

function formatIntent(value: string): string {
  return (
    contactIntents.find((intent) => intent.value === value)?.label ?? value
  );
}

async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body,
    },
  );

  if (!response.ok) return false;
  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: "Request is too large." },
      { status: 413 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const record = payload as Record<string, unknown>;
  const honeypot =
    typeof record.website === "string" ? record.website.trim() : "";
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactFormSchema.safeParse(record);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return NextResponse.json(
      { error: "Please check the form and try again.", fieldErrors },
      { status: 400 },
    );
  }

  const turnstileToken =
    typeof record.turnstileToken === "string"
      ? record.turnstileToken
      : undefined;
  const turnstileOk = await verifyTurnstile(turnstileToken);
  if (!turnstileOk) {
    return NextResponse.json(
      { error: "Verification failed. Please try again." },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL?.trim() || contact.email;
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const isProduction = process.env.NODE_ENV === "production";

  if (!apiKey) {
    if (!isProduction) {
      console.info("[contact] RESEND_API_KEY is not configured. Submission:", {
        to,
        intent: data.intent,
        email: data.email,
      });
      return NextResponse.json(
        {
          error:
            "Email is not configured. Set RESEND_API_KEY in the environment to deliver messages.",
          development: true,
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        error:
          "The message could not be sent. Email admin@ete-optimiza.com directly.",
      },
      { status: 503 },
    );
  }

  const subject = `ETE-Optimiza website: ${formatIntent(data.intent)}`;
  const text = [
    `Intent: ${formatIntent(data.intent)}`,
    `Name: ${escapeText(data.firstName)} ${escapeText(data.lastName)}`,
    `Email: ${escapeText(data.email)}`,
    `Phone: ${escapeText(data.phone || "—")}`,
    `Company: ${escapeText(data.company || "—")}`,
    "",
    escapeText(data.message),
  ].join("\n");

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "ETE-Optimiza Website <beth.t@example.com>";

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject,
    text,
  });

  if (error) {
    return NextResponse.json(
      {
        error:
          "The message could not be sent. Email admin@ete-optimiza.com directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
