import { NextResponse } from "next/server";
import { badRequest, deliver, isEmail, readJson } from "@/lib/forms";

export async function POST(req: Request) {
  const body = await readJson(req);
  if (!body || !isEmail(body.email)) return badRequest("A valid email is required.");
  await deliver("subscribe", { email: body.email });
  return NextResponse.json({ ok: true });
}
