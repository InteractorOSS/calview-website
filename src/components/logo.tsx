import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The Calview wordmark: lowercase, rounded, wide-tracked, maroon — the same
 * shape as the calview2020 logo on the current site, rendered as text so it
 * stays crisp at every size and inverts cleanly on dark surfaces.
 */
export function Logo({
  className,
  inverted = false,
  href = "/",
}: {
  className?: string;
  inverted?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label="Calview, Inc. — home"
      className={cn(
        "font-wordmark inline-flex items-baseline text-[1.7rem] font-extrabold lowercase leading-none tracking-[0.32em]",
        inverted ? "text-white" : "text-brand",
        className,
      )}
    >
      calview
    </Link>
  );
}
