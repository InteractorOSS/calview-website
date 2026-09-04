import type { Metadata } from "next";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AssessmentForm } from "@/components/assessment-form";
import { ButtonLink, IconBadge, Section } from "@/components/ui";
import {
  managedSoftware,
  audiences,
  faqs,
  situations,
  steps,
  successStory,
  whatWeBuild,
  whyCalview,
} from "@/lib/content/managed-software";

export const metadata: Metadata = {
  title: "Managed Software",
  description:
    "Beyond hosting: Calview develops and manages the software it hosts — custom applications, new features, integrations, and AI, built under one roof on infrastructure you already trust.",
  alternates: { canonical: "/managed-software" },
  openGraph: {
    title: "Managed Software | Calview",
    description:
      "Beyond hosting. Managed Software: we develop and manage the software we host — custom applications, features & AI, all under one roof.",
  },
};

function ManagedHeading({
  eyebrow,
  title,
  lede,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={`eyebrow mb-4 ${light ? "text-managed-mint" : "text-managed-cyan"}`}>{eyebrow}</p>
      ) : null}
      <h2
        className={`font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl ${
          light ? "text-white" : "text-managed"
        }`}
      >
        {title}
      </h2>
      {lede ? (
        <p className={`mt-4 text-lg leading-relaxed text-pretty ${light ? "text-managed-text-dim" : "text-ink-muted"}`}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}

export default function ApplicationDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <header className="managed-gradient managed-orbs text-white">
        <div className="container-site relative py-16 lg:py-24">
          <span className="inline-flex items-center rounded-full border border-managed-green/60 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-managed-mint">
            {managedSoftware.eyebrow}
          </span>
          <h1 className="font-display mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {managedSoftware.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-pretty text-managed-text-dim sm:text-xl">
            {managedSoftware.subhead}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#book" variant="green" size="lg">
              {managedSoftware.primaryCta}
              <ArrowRight className="size-5" strokeWidth={2} aria-hidden />
            </ButtonLink>
            <ButtonLink href="#build" variant="ghost-light" size="lg">
              {managedSoftware.secondaryCta}
            </ButtonLink>
          </div>
          <ul className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-managed-text-dim/80 sm:flex-row sm:flex-wrap sm:gap-x-10">
            {managedSoftware.trust.map((t) => (
              <li key={t.strong}>
                <span className="font-semibold text-white">{t.strong}</span>
                {t.rest ? <> · {t.rest}</> : null}
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Vision */}
      <Section>
        <ManagedHeading
          title="Your roadmap shouldn’t be the bottleneck."
          lede="If your software runs on our servers, we’ve probably seen your situation up close. It’s one of three:"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {situations.map((s) => (
            <div key={s.title} className="rounded-card border border-managed-line bg-managed-soft p-6">
              <h3 className="font-display text-lg font-bold text-managed">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-muted">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl space-y-4 text-lg leading-relaxed text-ink-muted">
          <p>
            Here’s what we believe, and what the smartest investors are betting on:{" "}
            <strong className="font-semibold text-ink">
              the next generation of great companies won’t be built by programmers — they’ll be
              built by the people who know their products, their customers, and their industries
              best.
            </strong>{" "}
            People like you. What’s been missing is the engineering partner who can turn your
            roadmap into running software.
          </p>
          <p>
            That’s what Managed Software is: like managed hosting, but for the applications on
            top. We build it, run it, secure it, and keep improving it — one accountable team.
            Empower your journey — now including the software itself.
          </p>
        </div>
      </Section>

      {/* What we build */}
      <Section tone="soft" id="build" className="bg-managed-soft">
        <ManagedHeading title="What we build" />
        <p className="mt-4 max-w-3xl text-base italic text-ink-muted">
          If you just need a website, our WordPress hosting has you covered. Managed Software starts where
            WordPress and off-the-shelf software stop.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeBuild.map((item) => (
            <div key={item.title} className="card border-managed-line p-6">
              <IconBadge tone="managed">
                <item.icon className="size-5" strokeWidth={1.5} aria-hidden />
              </IconBadge>
              <h3 className="font-display mt-5 text-lg font-bold leading-snug text-managed">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <ManagedHeading
          title="How it works"
          lede="Four steps, priced up front, on infrastructure we already run for you."
        />
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card relative border-managed-line p-6">
              <span className="font-display inline-flex size-9 items-center justify-center rounded-full bg-managed text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="font-display mt-4 text-lg font-bold leading-snug text-managed">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Why Calview */}
      <Section className="bg-managed-soft">
        <ManagedHeading title="Why Calview" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {whyCalview.map((w) => (
            <div key={w.title} className="card flex gap-5 border-managed-line p-6">
              <IconBadge tone="managed">
                <w.icon className="size-5" strokeWidth={1.5} aria-hidden />
              </IconBadge>
              <div>
                <h3 className="font-display text-lg font-bold text-managed">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{w.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Success story — kept in narrative form with attribution, per copy notes */}
      <section className="bg-managed-deep text-white">
        <div className="container-site py-16 lg:py-24">
          <span className="inline-flex items-center rounded-full bg-managed-green px-3.5 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-white">
            {successStory.label}
          </span>
          <h2 className="font-display mt-6 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {successStory.title}
          </h2>
          <p className="mt-5 max-w-4xl text-lg leading-relaxed text-pretty text-managed-text-dim">
            {successStory.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {successStory.stats.map((s) => (
              <div
                key={s.label}
                className="min-w-52 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-5"
              >
                <p className="font-display text-4xl font-bold text-managed-mint">{s.value}</p>
                <p className="mt-1 text-sm text-managed-text-dim">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs italic text-managed-text-dim/70">{successStory.attribution}</p>
        </div>
      </section>

      {/* Who it's for */}
      <Section>
        <ManagedHeading
          title="Who it’s for"
          lede="The next great companies will be built by the people who know their products best. If it runs on your servers — or ours — we can build it."
        />
        <ul className="mt-8 flex flex-wrap gap-3">
          {audiences.map((a) => (
            <li
              key={a}
              className="rounded-full border border-managed-line bg-white px-4 py-2 text-sm font-medium text-managed"
            >
              {a}
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-managed-soft">
        <ManagedHeading title="Questions customers ask us" />
        <div className="mt-10 max-w-3xl space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              open={i === 0}
              className="group rounded-xl border border-managed-line bg-white px-5 py-4 open:shadow-card"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-managed">
                {f.q}
                <ChevronDown
                  className="size-5 shrink-0 text-ink-faint transition-transform group-open:rotate-180"
                  strokeWidth={1.5}
                  aria-hidden
                />
              </summary>
              <p className="mt-3 leading-relaxed text-ink-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Final CTA + form */}
      <section id="book" className="managed-gradient managed-orbs text-white">
        <div className="container-site relative grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Your product deserves the roadmap you imagined for it.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-managed-text-dim">
              Book a technology &amp; AI assessment — a small fixed investment, credited toward your
              first project. You’ll leave knowing what to build first, what it costs, and what it’s
              worth.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-managed-text-dim">
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-managed-green" aria-hidden />
                A working session with your Calview advisor and a real engineering lead
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-managed-green" aria-hidden />
                A concrete plan for your application and roadmap — whether or not you build with us
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-managed-green" aria-hidden />
                Your Calview advisor stays your single point of contact from first call to launch
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <AssessmentForm />
          </div>
        </div>
      </section>
    </>
  );
}
