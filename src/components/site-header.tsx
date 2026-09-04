"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui";
import { primaryNav } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  // Keyed on the pathname so navigating remounts the header with the drawer closed.
  return <HeaderInner key={pathname} pathname={pathname} />;
}

function HeaderInner({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container-site flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {primaryNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium transition-colors",
                  active ? "text-brand" : "text-ink-muted hover:text-ink",
                )}
              >
                {item.label}
                {item.badge ? (
                  <span className="rounded-full bg-managed-green px-1.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-white">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href="/services" variant="outline">
            Learn More
          </ButtonLink>
          <ButtonLink href="/contact">Get Started</ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-ink hover:bg-surface-soft lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" strokeWidth={1.5} /> : <Menu className="size-6" strokeWidth={1.5} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="container-site flex flex-col py-3">
          {primaryNav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex min-h-12 items-center justify-between rounded-lg px-2 text-lg font-medium",
                  active ? "text-brand" : "text-ink",
                )}
              >
                {item.label}
                {item.badge ? (
                  <span className="rounded-full bg-managed-green px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-white">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            );
          })}
          <div className="mt-3 flex flex-col gap-3 border-t border-line pt-4 pb-2">
            <ButtonLink href="/contact" size="lg">
              Get Started
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" size="lg">
              Learn More
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
