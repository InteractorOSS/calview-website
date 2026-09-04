import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui";
import { cn } from "@/lib/utils";

/**
 * Compact announcement strip — sits under the header on every page except the
 * Managed Software landing page itself. Matches the "NEW · Beyond hosting" reference.
 */
export function ManagedSoftwareStrip({ className }: { className?: string }) {
  return (
    <div className={cn("managed-gradient managed-orbs text-white", className)}>
      <div className="container-site relative flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-5">
        <div className="flex items-start gap-4">
          <span className="mt-0.5 inline-flex shrink-0 items-center rounded-full bg-managed-green px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-white">
            New
          </span>
          <div>
            <p className="font-display text-base font-bold leading-snug text-balance sm:text-lg">
              Beyond hosting: we develop &amp; manage the software we host.
            </p>
            <p className="mt-1 text-sm text-managed-text-dim">
              Managed software: custom applications, features &amp; AI — all under one roof.
            </p>
          </div>
        </div>
        <ButtonLink
          href="/managed-software"
          variant="green"
          className="w-full shrink-0 sm:w-auto"
        >
          Tech &amp; AI assessment
          <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
        </ButtonLink>
      </div>
    </div>
  );
}

/**
 * Full-width feature banner — the wide "Beyond hosting." reference. Used as a
 * section on the home page (and reusable anywhere a big Managed Software callout fits).
 */
export function ManagedSoftwareBanner({ id }: { id?: string }) {
  return (
    <section id={id} className="managed-gradient managed-orbs text-white">
      <div className="container-site relative grid gap-10 py-16 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-24">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center rounded-full bg-managed-green px-4 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-white">
            New · Managed Software
          </span>
          <h2 className="font-display mt-7 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Beyond hosting.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-managed-text-dim sm:text-xl">
            Managed software from the team that manages your servers — we develop and run the
            custom applications, features &amp; AI your business runs on, all under one roof.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 lg:col-span-5 lg:items-center">
          <ButtonLink
            href="/managed-software#book"
            variant="green"
            size="lg"
            className="w-full sm:w-auto lg:w-full"
          >
            Book a technology &amp; AI assessment
            <ArrowRight className="size-5" strokeWidth={2} aria-hidden />
          </ButtonLink>
          <p className="text-sm text-managed-text-dim/80">
            A working session with a real engineering lead
          </p>
          <Link
            href="/managed-software"
            className="mt-2 text-sm font-semibold text-managed-mint underline-offset-4 hover:underline"
          >
            Learn about Managed Software
          </Link>
        </div>
      </div>
    </section>
  );
}
