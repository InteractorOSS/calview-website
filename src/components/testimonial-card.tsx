import { Quote } from "lucide-react";
import { Avatar } from "@/components/ui";
import type { Testimonial } from "@/lib/content/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="card flex h-full flex-col">
      <Quote className="size-6 text-brand/60" strokeWidth={1.5} aria-hidden />
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <Avatar name={t.name} className="size-11 text-sm" />
        <div>
          <p className="font-semibold text-ink">{t.name}</p>
          <p className="text-sm text-ink-muted">{t.title}</p>
        </div>
      </figcaption>
    </figure>
  );
}
