import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Rocket,
  Puzzle,
  Bot,
  Link2,
  Wrench,
  MonitorCog,
  Home,
  Hammer,
  Target,
} from "lucide-react";

export const managedSoftware = {
  eyebrow: "Calview Managed Software",
  headline: "Beyond hosting. We develop and manage the software we host.",
  subhead:
    "For years, Calview has kept your software running — hosting, data centers, security, networks. Now our engineering team develops and manages the software itself: custom applications, new features, integrations, and AI — built, deployed, and improved under one roof, on infrastructure you already trust.",
  primaryCta: "Book a technology & AI assessment",
  secondaryCta: "See what we build",
  trust: [
    { strong: "Since the ’90s", rest: "serving startups & growing businesses" },
    { strong: "Hosting · Data Centers · Cloud Security · Networking", rest: "" },
    { strong: "And now", rest: "the software on top" },
  ],
};

export const situations = [
  {
    title: "You built your own software",
    body: "The backlog is longer than your team. Features your customers keep asking for sit in “next quarter.” Hiring engineers is slow and expensive, and the founding team is already stretched.",
  },
  {
    title: "You run vendor software",
    body: "It almost fits. You’ve bent your business around someone else’s product, and every customization request goes into their queue — not yours.",
  },
  {
    title: "You started on WordPress",
    body: "And you’ve outgrown it. The site was never the business; it was the beginning of one.",
  },
];

export type BuildItem = { icon: LucideIcon; title: string; body: string; short: string };

export const whatWeBuild: BuildItem[] = [
  {
    icon: Blocks,
    title: "Custom applications",
    body: "The system that runs your business or product — built around how you work, not around a template or a vendor’s roadmap.",
    short: "Built for you, not a vendor’s roadmap.",
  },
  {
    icon: Rocket,
    title: "The features your backlog is waiting for",
    body: "Bring us the goals your team can’t get to; we deliver them into your own software — scoped, built, tested, shipped.",
    short: "Scoped, built, tested, shipped.",
  },
  {
    icon: Puzzle,
    title: "Vendor software, made yours",
    body: "Customizations, integrations, and — when you’ve truly outgrown it — a platform of your own to replace it.",
    short: "Customize, integrate, or replace.",
  },
  {
    icon: Bot,
    title: "AI in your product & operations",
    body: "Assistants that serve your customers 24/7, automation in your workflows, intelligence in your decisions.",
    short: "Assistants, automation, intelligence.",
  },
  {
    icon: Link2,
    title: "Everything connected",
    body: "Your systems, your vendors’ APIs, your data — joined into one flow.",
    short: "Your systems, joined into one flow.",
  },
  {
    icon: Wrench,
    title: "Modernization",
    body: "Legacy applications rebuilt for today: cloud-native, secure, maintainable — and hosted where they’re built.",
    short: "Legacy apps rebuilt for today.",
  },
];

export const steps = [
  {
    title: "Technology & AI assessment",
    body: "A working session with your Calview advisor and an engineering lead: where your software is today, what your roadmap needs, and what it’s worth. A small fixed investment — credited toward your first project.",
  },
  {
    title: "A plan priced up front",
    body: "Fixed scope, clear timeline, and the ROI goal we’re aiming at — agreed before the build begins. No surprise bills.",
  },
  {
    title: "We build it, end to end",
    body: "Design, build, test, deploy — onto infrastructure we already run for you. You approve at every step.",
  },
  {
    title: "We keep multiplying it",
    body: "Software isn’t a project — it’s an asset. Month after month we ship features, automations, and AI, measured against your goals.",
  },
];

export const whyCalview: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: MonitorCog,
    title: "We already run your stack",
    body: "Nobody has to “get up to speed” on your environment — your infrastructure, your security posture, your uptime requirements are already our day job.",
  },
  {
    icon: Home,
    title: "Built where it runs",
    body: "The team that writes the code is the team that deploys, secures, and keeps it online. No handoff between an agency and a host — one roof, one accountable team.",
  },
  {
    icon: Hammer,
    title: "Proven engineering",
    body: "Our engineering team builds and runs production platforms and AI for businesses from startups to global brands.",
  },
  {
    icon: Target,
    title: "Your number is the goal",
    body: "Every project starts with the metric it should move — users, revenue, hours saved, time-to-market — and we measure against it.",
  },
];

export const successStory = {
  label: "Success story",
  title: "AI running a global brand’s advertising",
  body: "A global consumer-electronics brand trusted our engineering team to put its advertising in the hands of AI agents. Today those agents create, launch, track, and optimize campaigns around the clock — with humans approving what matters — live in production and rolling out internationally under a multi-year program.",
  stats: [
    { value: "55%", label: "higher return on ad spend" },
    { value: "28%", label: "lower ad costs" },
    { value: "60%", label: "less time on campaign management" },
  ],
  attribution:
    "Published averages across campaigns managed on the platform; individual results vary by business. The same engineering team builds for Calview clients.",
};

export const audiences = [
  "Startups shipping their first product",
  "SaaS teams with more roadmap than engineers",
  "Businesses bending around vendor software",
  "Companies that outgrew WordPress",
  "Legacy apps that deserve a second life",
];

export const faqs = [
  {
    q: "What does the assessment cost?",
    a: "A small fixed fee, credited in full toward your first project. It’s a working session with a real engineering lead — you leave with a concrete plan for your application and roadmap, whether or not you build with us.",
  },
  {
    q: "We already have developers. Why would we use Managed Software?",
    a: "Keep them — Managed Software adds delivery capacity without headcount. Bring us the goals your team can’t get to; we deliver finished, tested features into your codebase, and your team stays in control of what ships.",
  },
  {
    q: "Our software isn’t hosted with Calview. Can you still build it?",
    a: "Yes. And when it makes sense, we can bring it home — build, host, secure, and run it under one roof.",
  },
  {
    q: "We run vendor software. What can you actually do?",
    a: "Three things, in order: integrate it properly with the rest of your stack, customize around its edges, and — when you’ve truly outgrown it — replace it with a platform that’s yours.",
  },
  {
    q: "Who owns what you build?",
    a: "You do. Your application, your code, your data — they belong to your business.",
  },
  {
    q: "Who actually does the work?",
    a: "A dedicated Calview engineering team — the same group that builds and runs production platforms and AI for businesses from startups to global brands. Your Calview advisor stays your single point of contact from first call to launch and beyond.",
  },
  {
    q: "Isn’t this what our WordPress plan is for?",
    a: "WordPress is perfect for your website — and we’ll keep running it. Managed Software is for what comes after: the product, the platform, the software your business actually runs on.",
  },
];
