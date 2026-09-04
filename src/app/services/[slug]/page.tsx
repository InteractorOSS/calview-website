import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { ButtonLink, IconBadge, Section, SectionHeading } from "@/components/ui";
import { getService, services } from "@/lib/content/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.shortName,
    description: service.heroBody,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const [pre, highlight, post] = service.heroTitle;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-surface-warm">
        <div className="hero-grid absolute inset-0" aria-hidden />
        <div className="container-site relative py-16 lg:py-24">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-muted">
            <Link href="/services" className="hover:text-brand">
              Services
            </Link>
            <span className="mx-2 text-ink-faint">/</span>
            <span className="text-ink">{service.shortName}</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <IconBadge className="size-14 rounded-2xl">
                <service.icon className="size-7" strokeWidth={1.5} aria-hidden />
              </IconBadge>
              <h1 className="font-display mt-6 text-4xl font-bold tracking-tight text-balance text-ink sm:text-5xl lg:text-6xl">
                {pre} <span className="text-brand">{highlight}</span> {post}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-ink-muted sm:text-xl">
                {service.heroBody}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" size="lg" arrow>
                  Contact Us
                </ButtonLink>
                <ButtonLink href="#benefits" size="lg" variant="outline">
                  Learn More
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="benefits">
        <SectionHeading eyebrow="Benefits" title={service.benefitsTitle} lede={service.benefitsIntro} />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {service.benefits.map((b, i) => (
            <div key={b.title} className="card p-7">
              <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
              <h3 className="font-display mt-3 text-xl font-bold text-ink">{b.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="More from Calview" title="Explore our other services" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card group flex flex-col p-6">
              <IconBadge>
                <s.icon className="size-5" strokeWidth={1.5} aria-hidden />
              </IconBadge>
              <h3 className="font-display mt-5 text-lg font-bold text-ink">{s.shortName}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{s.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Learn More
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
              </span>
            </Link>
          ))}
          <Link
            href="/managed-software"
            className="managed-gradient group flex flex-col rounded-card p-6 text-white shadow-card"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-managed-green px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-[0.14em]">
              New
            </span>
            <h3 className="font-display mt-5 text-lg font-bold">Managed Software</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-managed-text-dim">
              We develop and manage the software we host — custom applications, features &amp; AI.
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-managed-mint">
              Learn More
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
            </span>
          </Link>
        </div>
      </Section>
    </>
  );
}
