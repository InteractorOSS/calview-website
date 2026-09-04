"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const inputClass =
  "h-12 w-full rounded-lg border border-managed-line bg-white px-4 text-base text-ink placeholder:text-ink-faint focus:border-managed-cyan focus:outline-none focus:ring-2 focus:ring-managed-cyan/25";

const runsOptions = [
  { value: "own", label: "Our own software" },
  { value: "vendor", label: "Vendor software" },
  { value: "wordpress", label: "WordPress" },
  { value: "other", label: "Something else" },
];

export function AssessmentForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    try {
      const res = await fetch("/api/assessment", {
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
      <div
        role="status"
        className={cn(
          "rounded-card border border-managed-line bg-white p-8 text-center shadow-card",
          className,
        )}
      >
        <CheckCircle2 className="mx-auto size-10 text-managed-green" strokeWidth={1.5} aria-hidden />
        <h3 className="font-display mt-4 text-xl font-bold text-ink">Request received.</h3>
        <p className="mt-2 text-ink-muted">
          Your Calview advisor will reach out to schedule your technology &amp; AI assessment.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-card border border-managed-line bg-white p-6 text-left shadow-card sm:p-8",
        className,
      )}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="af-name" className="mb-1.5 block text-sm font-semibold text-ink">
            Name
          </label>
          <input id="af-name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="af-company" className="mb-1.5 block text-sm font-semibold text-ink">
            Company
          </label>
          <input id="af-company" name="company" required autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label htmlFor="af-email" className="mb-1.5 block text-sm font-semibold text-ink">
            Email
          </label>
          <input id="af-email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="af-phone" className="mb-1.5 block text-sm font-semibold text-ink">
            Phone <span className="font-normal text-ink-faint">(optional)</span>
          </label>
          <input id="af-phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="af-runs" className="mb-1.5 block text-sm font-semibold text-ink">
            What you run today
          </label>
          <select id="af-runs" name="runs" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select one
            </option>
            {runsOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="af-next" className="mb-1.5 block text-sm font-semibold text-ink">
            If engineering capacity weren’t a limit, what would you build next?
          </label>
          <textarea
            id="af-next"
            name="next"
            rows={4}
            className={cn(inputClass, "h-auto py-3 leading-relaxed")}
          />
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-faint">
          A small fixed investment, credited toward your first project.
        </p>
        <Button type="submit" variant="green" size="lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Book my assessment"}
        </Button>
      </div>
      {status === "error" ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          We couldn’t send that. Please try again, or email info@calview.com and we’ll set it up by hand.
        </p>
      ) : null}
    </form>
  );
}
