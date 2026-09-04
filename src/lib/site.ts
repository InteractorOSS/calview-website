export const site = {
  name: "Calview, Inc.",
  shortName: "Calview",
  tagline: "Empower Your Journey",
  description:
    "Calview, Inc. provides cutting-edge IT solutions tailored for startups and growing businesses — web hosting, cloud security, data center management, networking, and now Managed Software.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://calview.com",
  email: "info@calview.com",
  phone: "+1 (408) 727-4601",
  phoneHref: "tel:+14087274601",
  address: {
    line1: "84 W. Santa Clara Street, Suite 700",
    line2: "San Jose, CA 95113, United States",
  },
  social: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    twitter: "https://twitter.com/",
  },
} as const;

export type NavItem = { label: string; href: string; badge?: string };

export const primaryNav: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Managed Software", href: "/managed-software", badge: "New" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Hosting", href: "/services/web-hosting" },
    { label: "Cloud Security", href: "/services/cloud-security" },
    { label: "Data Center Management", href: "/services/data-center-management" },
    { label: "Networking Solutions", href: "/services/networking" },
    { label: "Managed Software", href: "/managed-software" },
  ],
  support: [
    { label: "FAQs", href: "/managed-software#faq" },
    { label: "Customer Support", href: "/contact" },
    { label: "Book an Assessment", href: "/managed-software#book" },
  ],
  legal: [
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
} as const;
