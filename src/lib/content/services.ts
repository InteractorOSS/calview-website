import type { LucideIcon } from "lucide-react";
import { Server, ShieldCheck, Database, Network } from "lucide-react";

export type ServiceBenefit = { title: string; body: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  summary: string;
  heroTitle: [string, string, string];
  heroBody: string;
  benefitsTitle: string;
  benefitsIntro: string;
  benefits: ServiceBenefit[];
};

export const services: Service[] = [
  {
    slug: "web-hosting",
    name: "Reliable and Scalable Web Hosting",
    shortName: "Web Hosting",
    icon: Server,
    summary:
      "Our web hosting solutions ensure your website is always accessible and performs optimally. We offer various plans to meet the needs of different businesses, with 24/7 support and high uptime guarantees.",
    heroTitle: ["Empower Your", "Journey", "with Reliable Hosting"],
    heroBody:
      "Our web hosting solutions offer unmatched reliability and scalability to ensure your startup’s online presence is always accessible and performing optimally. Choose from a variety of plans tailored to your business needs.",
    benefitsTitle: "Key Benefits of Our Hosting",
    benefitsIntro:
      "Experience unmatched support and reliability with our web hosting services tailored for startups.",
    benefits: [
      {
        title: "24/7 Customer Support",
        body: "Our dedicated support team is available around the clock to resolve any issues you may encounter, ensuring your website runs smoothly at all times.",
      },
      {
        title: "High Uptime Guarantees",
        body: "We promise high uptime rates, so your website remains accessible to your customers without interruptions. Trust us to keep your online presence strong.",
      },
      {
        title: "Scalable Solutions",
        body: "Our hosting plans are designed to grow with your business. Whether you're just starting or expanding, we have options that fit your needs perfectly.",
      },
    ],
  },
  {
    slug: "cloud-security",
    name: "Comprehensive Cloud Security Solutions",
    shortName: "Cloud Security",
    icon: ShieldCheck,
    summary:
      "Protect your data with our cloud security services, including risk assessments and compliance checks. We provide ongoing monitoring to safeguard your business against cyber threats.",
    heroTitle: ["Secure Your", "Business", "with Confidence"],
    heroBody:
      "At Calview, Inc., we provide comprehensive cloud security solutions to safeguard your data and applications. Our services include risk assessments, compliance checks, and ongoing monitoring to protect against cyber threats.",
    benefitsTitle: "Key Benefits of Cloud Security",
    benefitsIntro:
      "Our cloud security solutions offer enhanced protection against data breaches, ensuring your startup’s data remains safe and secure.",
    benefits: [
      {
        title: "Data Breach Protection",
        body: "With our advanced security measures, we provide robust protection against potential data breaches, safeguarding your sensitive information and maintaining your clients' trust.",
      },
      {
        title: "Regular Security Audits",
        body: "We conduct regular security audits to ensure compliance with industry standards, helping your startup stay ahead of potential threats and vulnerabilities.",
      },
      {
        title: "Expert Guidance",
        body: "Our team of experts offers tailored guidance on best security practices, empowering your startup to implement effective security strategies and mitigate risks.",
      },
    ],
  },
  {
    slug: "data-center-management",
    name: "Efficient Data Center Management",
    shortName: "Data Center Management",
    icon: Database,
    summary:
      "Optimize your IT infrastructure with our data center management services. We handle everything from hardware maintenance to network management, ensuring increased efficiency and reduced downtime.",
    heroTitle: ["Optimize Your", "Infrastructure", "Today"],
    heroBody:
      "Our expert team ensures your IT infrastructure is optimized for peak performance and reliability. From hardware maintenance to network management, we provide tailored solutions to meet your specific needs, reducing downtime and increasing efficiency.",
    benefitsTitle: "Benefits of Data Center Management",
    benefitsIntro:
      "Our services provide expert management of your IT resources, ensuring increased efficiency and reduced downtime tailored to your specific needs.",
    benefits: [
      {
        title: "Expert Management",
        body: "Our team specializes in managing your IT infrastructure, ensuring optimal performance and reliability. We focus on hardware maintenance and network management to keep your systems running smoothly.",
      },
      {
        title: "Increased Efficiency",
        body: "With our data center management, you can expect a significant reduction in downtime. We implement proactive measures to ensure your systems are always operational and efficient.",
      },
      {
        title: "Tailored Solutions",
        body: "We understand that every startup has unique needs. Our solutions are customized to fit your specific requirements, ensuring that you receive the best possible support for your IT infrastructure.",
      },
    ],
  },
  {
    slug: "networking",
    name: "Seamless Networking Solutions",
    shortName: "Networking Solutions",
    icon: Network,
    summary:
      "Connect your business to the world with our networking solutions. From setup to maintenance, we ensure your network is secure and efficient, supporting your business growth.",
    heroTitle: ["Connect Your", "Business", "to the World"],
    heroBody:
      "Our networking solutions connect your business to the world. From setup to maintenance, we ensure that your network is secure and efficient, providing seamless connectivity for your operations.",
    benefitsTitle: "Benefits of Our Networking Solutions",
    benefitsIntro:
      "Secure, efficient connectivity designed around how your team works — set up correctly the first time and maintained by the people who built it.",
    benefits: [
      {
        title: "Design and Setup",
        body: "We design and implement network infrastructure that fits your office, your data center footprint, and your growth plans — high-performance from day one.",
      },
      {
        title: "Secure by Default",
        body: "Segmentation, access control, and monitoring are built into every network we deliver, so connectivity never comes at the cost of security.",
      },
      {
        title: "Ongoing Maintenance",
        body: "From firmware to failover, we keep your network current and reliable, so your team can work without interruptions.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const projects = [
  {
    title: "Cloud Migration",
    body: "We assisted a startup in migrating their entire infrastructure to the cloud, resulting in improved scalability and reduced costs.",
    client: "Classic Cafe (Franchise)",
    date: "September 2020",
    outcome: "Enhanced scalability",
  },
  {
    title: "Security Enhancement",
    body: "Implemented advanced security measures for a real estate application platform, significantly reducing the risk of data breaches.",
    client: "Maxim Equity",
    date: "March 2021",
    outcome: "Reduced data breach risks",
  },
  {
    title: "Data Center Optimization",
    body: "Optimized the data center operations for a tech firm, leading to a 30% increase in efficiency and a reduction in operational costs.",
    client: "NubeAccess Technologies",
    date: "December 2021",
    outcome: "30% increase in efficiency",
  },
];
