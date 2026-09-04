import type { Metadata } from "next";
import { PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Calview, Inc. collects, uses and protects the information you share with us.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" lede="How we collect, use and protect the information you share with us." />
      <Section>
        <div className="max-w-3xl space-y-6 text-ink-muted">
          <h2 className="font-display text-xl font-bold text-ink">Information we collect</h2>
          <p>
            When you contact us, subscribe to our newsletter, or book an assessment, we collect the
            details you provide — such as your name, company, email address and phone number — so we
            can respond to your request.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">How we use it</h2>
          <p>
            We use your information to deliver and improve our services, respond to enquiries, and
            send updates you have asked for. We do not sell your personal information.
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Your choices</h2>
          <p>
            You can unsubscribe from our emails at any time, or ask us to update or delete your
            details by writing to{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand hover:underline">
              {site.email}
            </a>
            .
          </p>
          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p>
            {site.name} · {site.address.line1}, {site.address.line2} · {site.phone}
          </p>
        </div>
      </Section>
    </>
  );
}
