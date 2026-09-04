"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email");
    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="mt-4 rounded-lg bg-white px-4 py-3 text-sm text-ink" role="status">
        Thanks — you’re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email"
        className="h-11 min-w-0 flex-1 rounded-full border border-line bg-white px-4 text-sm text-ink placeholder:text-ink-faint focus:border-brand focus:outline-none"
      />
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Subscribing…" : "Subscribe"}
      </Button>
      {status === "error" ? (
        <p className="text-xs text-red-600 sm:basis-full" role="alert">
          Something went wrong. Please try again or email us directly.
        </p>
      ) : null}
    </form>
  );
}
