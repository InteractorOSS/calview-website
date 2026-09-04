import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ButtonLink, IconBadge, PageHero, Section, SectionHeading } from "@/components/ui";
import { services } from "@/lib/content/services";
import { whatWeBuild } from "@/lib/content/managed-software";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Reliable web hosting, robust cloud security, efficient data center management, seamless networking — and Managed Software. Tailored IT solutions to empower startups.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Explore Our Comprehensive IT Solutions"
        lede="At Calview, Inc., we specialize in providing tailored IT solutions to empower startups. Our services include reliable web hosting, robust cloud security, efficient data center management, and seamless networking solutions — ensuring technology readiness and operational efficiency."
      >
        <ButtonLink href="/contact" size="lg" arrow>
          Get Started
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="space-y-6">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="card grid gap-8 p-7 lg:grid-cols-12 lg:items-center lg:gap-12 lg:p-10"
            >
              <div className="lg:col-span-6">
                <div className="flex items-center gap-4">
                  <IconBadge>
                    <s.icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </IconBadge>
                  <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
                </div>
                <h2 className="font-display mt-5 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  {s.name}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">{s.summary}</p>
                <Link
                  href={`/services/${s.slug}`}
                  className="group mt-6 inline-flex min-h-11 items-center gap-1.5 font-semibold text-brand"
                >
                  Learn More
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
                </Link>
              </div>
              <ul className="space-y-4 rounded-xl bg-surface-soft p-6 lg:col-span-6">
                {s.benefits.map((b) => (
                  <li key={b.title} className="flex gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-managed-green" strokeWidth={2.5} aria-hidden />
                    <div>
                      <p className="font-semibold text-ink">{b.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">{b.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <section className="managed-gradient managed-orbs text-white">
        <div className="container-site relative py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center rounded-full bg-managed-green px-4 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-white">
                New · Managed Software
              </span>
              <h2 className="font-display mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                Beyond hosting. We develop and manage the software we host.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-managed-text-dim">
                Custom applications, new features, integrations and AI — built, deployed, and
                improved under one roof, on infrastructure you already trust.
              </p>
              <ButtonLink href="/managed-software" variant="green" size="lg" className="mt-8" arrow>
                Explore the service
              </ButtonLink>
            </div>
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-7">
              {whatWeBuild.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <IconBadge tone="light">
                    <item.icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </IconBadge>
                  <div>
                    <h3 className="font-display font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-managed-text-dim">{item.short}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Section tone="soft">
        <SectionHeading
          align="center"
          title="Not sure which service fits?"
          lede="Reach out — a Calview advisor will map your needs to the right mix of hosting, security, data center, networking and development services."
        />
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/contact" size="lg" arrow>
            Contact Us
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
