import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "@/components/social-icons";
import { Logo } from "@/components/logo";
import { NewsletterForm } from "@/components/newsletter-form";
import { footerNav, site } from "@/lib/site";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link
              href={l.href}
              className="inline-flex min-h-8 items-center text-sm text-ink-muted transition-colors hover:text-brand"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface-soft">
      <div className="container-site py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {site.tagline}. Hosting, data centers, cloud security, networking — and the
              software on top. Serving startups and growing businesses since the ’90s.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-ink-muted">
              <li>
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2.5 hover:text-brand">
                  <Mail className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="inline-flex items-center gap-2.5 hover:text-brand">
                  <Phone className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={1.5} aria-hidden />
                <span>
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <FooterColumn title="Company" links={footerNav.company} />
            <FooterColumn title="Services" links={footerNav.services} />
            <FooterColumn title="Support" links={footerNav.support} />
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Subscribe to our newsletter for the latest updates on IT solutions and services.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-faint">© {year} {site.name} All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {footerNav.legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink-muted transition-colors hover:text-brand"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-1">
              <a
                href={site.social.facebook}
                aria-label="Calview on Facebook"
                className="inline-flex size-10 items-center justify-center rounded-full text-ink-muted hover:bg-white hover:text-brand"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={site.social.linkedin}
                aria-label="Calview on LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-full text-ink-muted hover:bg-white hover:text-brand"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href={site.social.twitter}
                aria-label="Calview on Twitter"
                className="inline-flex size-10 items-center justify-center rounded-full text-ink-muted hover:bg-white hover:text-brand"
              >
                <TwitterIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
