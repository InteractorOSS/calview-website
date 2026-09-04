import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isEmail(v: unknown): v is string {
  return typeof v === "string" && v.length <= 254 && EMAIL_RE.test(v);
}

export function str(v: unknown, max = 2000): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  if (!t || t.length > max) return null;
  return t;
}

/**
 * Where submissions go. There is deliberately no third-party mail dependency in
 * this repo; wire `deliver` to whichever provider Calview uses (SMTP, Resend,
 * a CRM webhook). Until then every submission is logged server-side so nothing
 * is silently dropped.
 */
export async function deliver(kind: "assessment" | "contact" | "subscribe", payload: Record<string, unknown>) {
  const inbox = process.env.CONTACT_INBOX_EMAIL ?? "info@calview.com";
  console.info(`[forms] ${kind} → ${inbox}`, JSON.stringify(payload));
}

export function badRequest(message: string) {
  return NextResponse.json({ error: "invalid_request", message }, { status: 400 });
}

export async function readJson(req: Request): Promise<Record<string, unknown> | null> {
  try {
    const body = (await req.json()) as unknown;
    return body && typeof body === "object" ? (body as Record<string, unknown>) : null;
  } catch {
    return null;
  }
}
