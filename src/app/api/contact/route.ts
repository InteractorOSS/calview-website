import { NextResponse } from "next/server";
import { badRequest, deliver, isEmail, readJson, str } from "@/lib/forms";

export async function POST(req: Request) {
  const body = await readJson(req);
  if (!body) return badRequest("Expected a JSON body.");

  const name = str(body.name, 120);
  const email = body.email;
  const subject = str(body.subject, 40);
  const message = str(body.message, 6000);
  if (!name || !isEmail(email) || !subject || !message) {
    return badRequest("Name, a valid email, a topic and a message are required.");
  }

  await deliver("contact", { name, email, subject, message });
  return NextResponse.json({ ok: true });
}
