import type { Metadata } from "next";
import { LinkedinIcon } from "@/components/social-icons";
import { Avatar, ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import { team, values } from "@/lib/content/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "At Calview, Inc., we empower startups with innovative IT solutions to thrive in a competitive landscape. Meet the team behind our hosting, security, data center, networking and managed software services.",
  alternates: { canonical: "/about-us" },
};

const facts = [
  { value: "’90s", label: "Serving startups since" },
  { value: "20+", label: "Years of IT leadership" },
  { value: "4", label: "Core infrastructure services" },
  { value: "1", label: "Accountable team, one roof" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Calview"
        title="Our Mission & Vision"
        lede="At Calview, Inc., we empower startups with innovative IT solutions to thrive in a competitive landscape. Our mission is to simplify technology, enabling clients to focus on their core objectives."
      >
        <ButtonLink href="/contact" size="lg" arrow>
          Contact Us
        </ButtonLink>
        <ButtonLink href="/services" size="lg" variant="outline">
          Our Services
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our story" title="Technology-ready from day one" />
            <dl className="mt-10 grid grid-cols-2 gap-6">
              {facts.map((f) => (
                <div key={f.label} className="border-l-2 border-brand pl-4">
                  <dd className="font-display text-3xl font-bold text-ink">{f.value}</dd>
                  <dt className="mt-1 text-sm text-ink-muted">{f.label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted lg:col-span-7">
            <p>
              Calview has been dedicated to empowering startups by providing tailored IT consulting
              services since the ’90s. We understand the unique challenges faced by startups and
              are here to support them every step of the way — from reliable web hosting and cloud
              security to data center management and networking.
            </p>
            <p>
              Our team has led more than a decade of work across the Information Technology
              industry: systems and network administration, cyber security, and engineering. We
              are committed to delivering cutting-edge solutions that drive success for new
              businesses.
            </p>
            <p>
              And now the software itself. With Managed Software, the same
              accountable team that runs your infrastructure develops and manages the applications,
              features, integrations and AI on top of it.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="What we value"
          title="Innovation, integrity, customer-centricity, and collaboration"
          lede="The four commitments that shape how we work — and why our clients stay."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={v.title} className="card p-6">
              <span className="font-display text-sm font-bold text-brand">0{i + 1}</span>
              <h3 className="font-display mt-3 text-lg font-bold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="team">
        <SectionHeading
          eyebrow="Leadership & team"
          title="Meet Our Experts"
          lede="Discover the talented individuals dedicated to your success."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <li key={m.name} className="card flex flex-col p-6">
              <div className="flex items-center gap-4">
                <Avatar name={m.name} />
                <div>
                  <h3 className="font-display text-lg font-bold leading-tight text-ink">{m.name}</h3>
                  <p className="mt-0.5 text-sm font-medium text-brand">{m.role}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">{m.bio}</p>
              <a
                href="https://www.linkedin.com/"
                className="mt-5 inline-flex min-h-8 items-center gap-2 text-sm font-semibold text-ink-muted transition-colors hover:text-brand"
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <section className="bg-brand text-white">
        <div className="container-site flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Join Us Today</h2>
            <p className="mt-4 text-lg text-white/80">
              Connect with our team to learn how we can help your startup.
            </p>
          </div>
          <ButtonLink href="/contact" variant="white" size="lg" arrow>
            Contact Us
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
