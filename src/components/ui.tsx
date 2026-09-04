import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "brand" | "outline" | "ghost-light" | "green" | "white";
type ButtonSize = "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  brand: "bg-brand text-white hover:bg-brand-hover shadow-sm",
  outline: "border border-line bg-surface text-ink hover:border-ink-faint hover:bg-surface-soft",
  "ghost-light": "border border-white/50 text-white hover:bg-white/10",
  green: "bg-managed-green text-white hover:bg-managed-green-hover shadow-[0_8px_24px_-8px_rgb(47_180_124/0.6)]",
  white: "bg-white text-managed-deep hover:bg-managed-soft",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export function ButtonLink({
  href,
  variant = "brand",
  size = "md",
  arrow = false,
  className,
  children,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-150",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
      {arrow ? <ArrowRight className="size-4" strokeWidth={2} aria-hidden /> : null}
    </Link>
  );
}

export function Button({
  variant = "brand",
  size = "md",
  className,
  children,
  ...rest
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
} & ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Section({
  id,
  className,
  children,
  tone = "white",
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: "white" | "soft" | "warm";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        tone === "soft" && "bg-surface-soft",
        tone === "warm" && "bg-surface-warm",
        className,
      )}
    >
      <div className="container-site">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow mb-4", light ? "text-managed-mint" : "text-brand")}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-pretty",
            light ? "text-managed-text-dim" : "text-ink-muted",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
  tone = "warm",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  tone?: "warm" | "soft";
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-line",
        tone === "warm" ? "bg-surface-warm" : "bg-surface-soft",
      )}
    >
      <div className="hero-grid absolute inset-0" aria-hidden />
      <div className="container-site relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow ? <p className="eyebrow mb-4 text-brand">{eyebrow}</p> : null}
          <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-ink sm:text-5xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-5 text-lg leading-relaxed text-pretty text-ink-muted sm:text-xl">
              {lede}
            </p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function IconBadge({
  children,
  tone = "brand",
  className,
}: {
  children: ReactNode;
  tone?: "brand" | "managed" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-xl",
        tone === "brand" && "bg-brand-soft text-brand",
        tone === "managed" && "bg-managed-soft text-managed",
        tone === "light" && "bg-white/10 text-managed-mint",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Avatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(/\s+/)
    .filter((p) => p && !p.endsWith("."))
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
  return (
    <span
      aria-hidden
      className={cn(
        "font-display inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-soft text-lg font-bold text-brand",
        className,
      )}
    >
      {initials}
    </span>
  );
}
