import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { IconBadge, PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Calview, Inc. for expert IT consulting, cloud computing, professional networking services, and all IT related needs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        lede="Reach out to us for expert IT consulting, cloud computing, professional networking services, and all IT related needs. We’re here to help your startup thrive with tailored solutions."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Contact Us
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              Reach out to us for any inquiries or support regarding our services.
            </p>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <IconBadge>
                  <Mail className="size-5" strokeWidth={1.5} aria-hidden />
                </IconBadge>
                <div>
                  <h3 className="font-display font-bold text-ink">Email Us</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    For any questions or support, feel free to email us at{" "}
                    <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
                      {site.email}
                    </a>
                    .
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <IconBadge>
                  <Phone className="size-5" strokeWidth={1.5} aria-hidden />
                </IconBadge>
                <div>
                  <h3 className="font-display font-bold text-ink">Call Us</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    You can reach us by phone at{" "}
                    <a href={site.phoneHref} className="font-semibold text-brand hover:underline">
                      {site.phone}
                    </a>
                    . We are here to assist you.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <IconBadge>
                  <MapPin className="size-5" strokeWidth={1.5} aria-hidden />
                </IconBadge>
                <div>
                  <h3 className="font-display font-bold text-ink">Visit Us</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    Our office is located at {site.address.line1}, {site.address.line2}. Make an
                    appointment with us — we’d welcome your visit.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
