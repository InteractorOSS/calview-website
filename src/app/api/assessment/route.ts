import { NextResponse } from "next/server";
import { badRequest, deliver, isEmail, readJson, str } from "@/lib/forms";

export async function POST(req: Request) {
  const body = await readJson(req);
  if (!body) return badRequest("Expected a JSON body.");

  const name = str(body.name, 120);
  const company = str(body.company, 160);
  const email = body.email;
  const runs = str(body.runs, 40);
  if (!name || !company || !isEmail(email) || !runs) {
    return badRequest("Name, company, a valid email and what you run today are required.");
  }

  await deliver("assessment", {
    name,
    company,
    email,
    phone: str(body.phone, 40),
    runs,
    next: str(body.next, 4000),
  });
  return NextResponse.json({ ok: true });
}
