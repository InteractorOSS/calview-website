import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "The terms that govern use of the Calview, Inc. website and services.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms and Conditions" lede="The terms that govern use of this website and our services." />
      <Section>
        <div className="max-w-3xl space-y-6 text-ink-muted">
          <h2 className="font-display text-xl font-bold text-ink">Use of this website</h2>
          <p>
            The content on this site is provided for general information about {site.name} and its
            services. It may change without notice. You may not misuse the site or attempt to gain
            unauthorized access to it or the systems behind it.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Services</h2>
          <p>
            Hosting, cloud security, data center, networking and managed software services
            are provided under a separate written agreement that sets out scope, pricing, service
            levels and ownership. Where the two conflict, that agreement governs.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Liability</h2>
          <p>
            To the fullest extent permitted by law, {site.name} is not liable for any indirect or
            consequential loss arising from use of this website.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}
