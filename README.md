# Calview website

Marketing site for Calview, Inc. — hosting, data centers, cloud security, networking, and the
new **Managed Software** service (managed hosting, extended to the software on top). Built on the same stack as `product-manager`:
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, lucide-react.

## Run

```bash
pnpm install
pnpm dev        # http://localhost:4030
pnpm build && pnpm start
pnpm typecheck
pnpm lint
```

Copy `.env.example` to `.env.local` to set the public site URL (used for canonical URLs,
sitemap, Open Graph) and the inbox that form submissions should reach.

## Pages

| Route | Content |
|---|---|
| `/` | Hero, journey & values, services, **Managed Software banner + What we build**, why Calview, notable projects, client feedback, CTA |
| `/about-us` | Mission & vision, story + facts, values, Meet Our Experts (9), Join Us CTA |
| `/services` | All four services with benefits, Managed Software callout |
| `/services/web-hosting` · `/cloud-security` · `/data-center-management` · `/networking` | Per-service hero + benefits |
| `/managed-software` | Full Managed Software landing page: hero, vision, what we build, how it works, why Calview, success story, who it's for, FAQ, assessment form |
| `/testimonials` | Client success stories + client feedback |
| `/contact` | Email / phone / address + contact form |
| `/privacy-policy`, `/terms-and-conditions` | Legal placeholders |
| `/sitemap.xml`, `/robots.txt` | Generated |

The compact **"NEW · Beyond hosting"** announcement strip renders under the header on every page
except the Managed Software page itself (`src/components/managed-software-strip-gate.tsx`). The wide banner is
`ManagedSoftwareBanner` in `src/components/managed-software-banner.tsx`.

## Structure

```
src/app/            routes (App Router), layout, globals.css, sitemap/robots
src/app/api/        form handlers: /api/assessment, /api/contact, /api/subscribe
src/components/     header, footer, banner, forms, shared UI primitives
src/lib/site.ts     name, contact details, navigation
src/lib/content/    all copy as typed data (services, team, testimonials, managed-software)
```

## Editing copy

All copy lives in `src/lib/content/*.ts` and `src/lib/site.ts` — pages only lay it out.
The Managed Software copy follows `Calview_AppDev_Landing_Page_Copy.md` (the service was renamed from "Application Development" to "Managed Software"): the success story stays in
narrative form with its attribution line, the assessment is never called "free", and the fee
is always "credited toward your first project".

## Forms

`/api/assessment`, `/api/contact` and `/api/subscribe` validate input and hand it to
`deliver()` in `src/lib/forms.ts`, which currently logs to the server console. Wire that one
function to Calview's mail provider or CRM before launch — there is deliberately no
third-party mail dependency in the repo.

## Design

- Brand: the maroon of the Calview wordmark (`--color-brand: #5f1928`) on a neutral base.
- Managed Software sub-brand: the teal/green of the banner reference (`--color-managed-*`).
- Fonts: Montserrat (headings, as on the current site), Inter (body), Nunito (wordmark).
- Tokens are in `src/app/globals.css` (`@theme`); utilities `container-site`, `card`,
  `eyebrow`, `managed-gradient`, `managed-orbs`, `hero-grid`.
- Fully responsive; the mobile drawer nav lives in `src/components/site-header.tsx`.
