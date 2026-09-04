import { ButtonLink, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section className="text-center">
      <p className="eyebrow justify-center text-brand">404</p>
      <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-ink">Page not found</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-ink-muted">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/contact" variant="outline">Contact us</ButtonLink>
      </div>
    </Section>
  );
}
