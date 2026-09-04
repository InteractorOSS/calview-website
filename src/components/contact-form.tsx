"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const inputClass =
  "h-12 w-full rounded-lg border border-line bg-white px-4 text-base text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div role="status" className="card p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-managed-green" strokeWidth={1.5} aria-hidden />
        <h3 className="font-display mt-4 text-xl font-bold text-ink">Message sent.</h3>
        <p className="mt-2 text-ink-muted">We’ll get back to you within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-sm font-semibold text-ink">
            Name
          </label>
          <input id="cf-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-sm font-semibold text-ink">
            Email
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-subject" className="mb-1.5 block text-sm font-semibold text-ink">
            How can we help?
          </label>
          <select id="cf-subject" name="subject" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a topic
            </option>
            <option value="hosting">Web hosting</option>
            <option value="security">Cloud security</option>
            <option value="datacenter">Data center management</option>
            <option value="networking">Networking</option>
            <option value="managed-software">Managed software</option>
            <option value="support">Customer support</option>
            <option value="other">Something else</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="mb-1.5 block text-sm font-semibold text-ink">
            Message
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            required
            className={cn(inputClass, "h-auto py-3 leading-relaxed")}
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end">
        <Button type="submit" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </Button>
      </div>
      {status === "error" ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          We couldn’t send that. Please try again, or email info@calview.com directly.
        </p>
      ) : null}
    </form>
  );
}
