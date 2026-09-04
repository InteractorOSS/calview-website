import type { Metadata } from "next";
import { TestimonialCard } from "@/components/testimonial-card";
import { ButtonLink, PageHero, Section, SectionHeading } from "@/components/ui";
import { featuredTestimonials, moreTestimonials } from "@/lib/content/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Discover how our clients have transformed their businesses with Calview’s hosting, cloud security, data center and networking solutions.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Client Success Stories"
        lede="Discover how our clients have transformed their businesses with our expert solutions."
      >
        <ButtonLink href="/contact" size="lg" arrow>
          Work with us
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredTestimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Client feedback"
          title="Our clients appreciate our tailored solutions and dedicated support"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moreTestimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </div>
      </Section>
    </>
  );
}
