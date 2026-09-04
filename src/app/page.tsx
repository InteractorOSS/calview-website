import Link from "next/link";
import { ArrowRight, Server, ShieldCheck, Database, Network, Clock, Headset, Building2, Cpu } from "lucide-react";
import { ManagedSoftwareBanner } from "@/components/managed-software-banner";
import { TestimonialCard } from "@/components/testimonial-card";
import { ButtonLink, IconBadge, Section, SectionHeading } from "@/components/ui";
import { projects, services } from "@/lib/content/services";
import { featuredTestimonials } from "@/lib/content/testimonials";
import { whatWeBuild } from "@/lib/content/managed-software";

const heroTiles = [
  { icon: Server, label: "Web Hosting", note: "24/7 support · high uptime" },
  { icon: ShieldCheck, label: "Cloud Security", note: "audits · monitoring" },
  { icon: Database, label: "Data Centers", note: "co-location · management" },
  { icon: Network, label: "Networking", note: "design · maintenance" },
];

const whyPoints = [
  {
    icon: Clock,
    title: "Since the ’90s",
    body: "Decades of experience in systems, network administration, cyber security and engineering — focused on new businesses.",
  },
  {
    icon: Headset,
    title: "24/7 support",
    body: "A dedicated support team around the clock, so your site and systems run smoothly at all times.",
  },
  {
    icon: Building2,
    title: "Co-location and data centers",
    body: "From hardware maintenance to network oversight, we run the infrastructure your business depends on.",
  },
  {
    icon: Cpu,
    title: "And now, the software on top",
    body: "Our engineering team develops and manages custom applications, features, integrations and AI on the infrastructure we already run for you.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-surface-warm">
        <div className="hero-grid absolute inset-0" aria-hidden />
        <div className="container-site relative grid gap-12 py-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-28">
          <div className="lg:col-span-7">
            <p className="eyebrow text-brand">IT solutions for startups &amp; growing businesses</p>
            <h1 className="font-display mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl lg:text-7xl">
              Empower Your <span className="text-brand">Journey</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-muted sm:text-xl">
              At Calview, Inc., we provide cutting-edge IT solutions tailored for startups. From web
              hosting to cloud security, our services ensure your business is technology-ready.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services" size="lg" arrow>
                Explore Services
              </ButtonLink>
              <ButtonLink href="/about-us" size="lg" variant="outline">
                Learn More
              </ButtonLink>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Serving startups</dt>
                <dd className="font-display mt-1 text-2xl font-bold text-ink">Since ’90s</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Support</dt>
                <dd className="font-display mt-1 text-2xl font-bold text-ink">24/7</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Based in</dt>
                <dd className="font-display mt-1 text-2xl font-bold text-ink">San Jose</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {heroTiles.map((t, i) => (
                <div
                  key={t.label}
                  className={`card p-5 ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
                >
                  <IconBadge>
                    <t.icon className="size-5" strokeWidth={1.5} aria-hidden />
                  </IconBadge>
                  <p className="font-display mt-4 font-bold text-ink">{t.label}</p>
                  <p className="mt-1 text-sm text-ink-muted">{t.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="About Calview"
              title="Discover Our Journey and Values"
            />
            <ButtonLink href="/about-us" variant="outline" className="mt-8" arrow>
              Meet the team
            </ButtonLink>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted lg:col-span-7">
            <p>
              Calview has been dedicated to empowering startups by providing tailored IT consulting
              services since the ’90s. Our mission is to simplify technology, enabling our clients to
              focus on their core business objectives. We value innovation, integrity,
              customer-centricity, and collaboration, ensuring that we exceed our clients’
              expectations.
            </p>
            <p>
              Our team brings more than a decade of experience across the Information Technology
              industry — systems and network administration, cyber security, and engineering. We are
              committed to delivering cutting-edge solutions that drive success for new businesses,
              and we understand the unique challenges startups face and are here to support them
              every step of the way.
            </p>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section tone="soft" id="services">
        <SectionHeading
          eyebrow="What we do"
          title="Explore Our Comprehensive IT Services"
          lede="Reliable web hosting, robust cloud security, efficient data center management, and seamless networking solutions — each designed to enhance your business’s technology readiness and ensure smooth operations."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card group flex flex-col p-6"
            >
              <IconBadge>
                <s.icon className="size-5" strokeWidth={1.5} aria-hidden />
              </IconBadge>
              <h3 className="font-display mt-5 text-lg font-bold leading-snug text-ink">
                {s.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{s.summary}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                Learn More
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Managed Software banner + what we build */}
      <ManagedSoftwareBanner id="managed-software" />
      <Section className="border-b border-line">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow text-managed">Managed Software</p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              What we build
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Managed Software starts where WordPress and off-the-shelf software stop. Bring us the roadmap
              your team can’t get to — we turn it into running software on infrastructure you
              already trust.
            </p>
            <ButtonLink href="/managed-software" variant="green" className="mt-8" arrow>
              See how it works
            </ButtonLink>
          </div>
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-8">
            {whatWeBuild.map((item) => (
              <li key={item.title} className="flex gap-4">
                <IconBadge tone="managed">
                  <item.icon className="size-5" strokeWidth={1.5} aria-hidden />
                </IconBadge>
                <div>
                  <h3 className="font-display font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.short}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Why choose */}
      <Section>
        <SectionHeading
          eyebrow="Why Calview"
          title="Why Choose Calview, Inc. for Your IT Needs"
          lede="Partnering with us means gaining a trusted ally in your journey towards technological excellence — reliable web hosting, robust cloud security, efficient data center management, co-location, and seamless networking, from one accountable team."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((p) => (
            <div key={p.title}>
              <IconBadge>
                <p.icon className="size-5" strokeWidth={1.5} aria-hidden />
              </IconBadge>
              <h3 className="font-display mt-5 text-lg font-bold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Success stories"
          title="Our Notable Projects"
          lede="Explore how we have transformed businesses through our innovative IT solutions and consulting services."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="card flex flex-col p-7">
              <h3 className="font-display text-xl font-bold text-ink">{p.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink-muted">{p.body}</p>
              <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 border-t border-line pt-5 text-sm">
                <dt className="font-semibold text-ink-faint">Client</dt>
                <dd className="text-ink">{p.client}</dd>
                <dt className="font-semibold text-ink-faint">Date</dt>
                <dd className="text-ink">{p.date}</dd>
                <dt className="font-semibold text-ink-faint">Outcome</dt>
                <dd className="font-semibold text-brand">{p.outcome}</dd>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Client feedback"
            title="What our clients say"
            lede="Discover how our clients have transformed their businesses with our services."
          />
          <ButtonLink href="/testimonials" variant="outline" className="shrink-0" arrow>
            All testimonials
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredTestimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-brand text-white">
        <div className="container-site flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Ready to be technology-ready from day one?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Talk to a Calview advisor about hosting, security, data centers, networking — or the
              software your business runs on.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="white" size="lg">
              Contact Us
            </ButtonLink>
            <ButtonLink href="/managed-software#book" variant="ghost-light" size="lg">
              Book an assessment
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
