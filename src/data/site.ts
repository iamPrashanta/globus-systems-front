export const SITE = {
  name: "Global System",
  url: "https://example.com",
  email: "hello@example.com",
  phone: "Demo only",
  telephoneHref: "",
  contactUrl: "/contact-us",
  tagline: "Partnering in your success",
  locationUS: "Remote studio",
  locationIndia: "Virtual collaboration"
} as const;

export const serviceItems = [
  {
    number: "01",
    title: "EDI & Integration Services",
    kicker: "CONNECTED ENTERPRISE",
    description:
      "Connect trading partners, platforms and critical systems with integrations built for clarity, reliability and scale.",
    href: "/edi-services",
    icon: "network" as const,
    tone: "integration" as const
  },
  {
    number: "02",
    title: "Nonprofit Technology",
    kicker: "MISSION-LED TECHNOLOGY",
    description:
      "Make donor data, reporting and everyday workflows work harder for the communities you serve.",
    href: "/npo-services",
    icon: "people" as const,
    tone: "nonprofit" as const
  },
  {
    number: "03",
    title: "Managed Support",
    kicker: "OPERATIONAL CONTINUITY",
    description:
      "Keep essential platforms running through responsive support, practical monitoring and disciplined issue resolution.",
    href: "/cleo-support",
    icon: "shield" as const,
    tone: "support" as const
  }
];

export const differentiators = [
  { icon: "settings" as const, title: "Process-driven delivery", detail: "Repeatable practices, predictable outcomes and less rework." },
  { icon: "message" as const, title: "Transparent communication", detail: "Clear updates and visibility across every stage." },
  { icon: "target" as const, title: "Clear ownership", detail: "One accountable team, from planning to delivery." },
  { icon: "users" as const, title: "Flexible engagement", detail: "Delivery models designed around your needs." },
  { icon: "handshake" as const, title: "Long-term mindset", detail: "Partnership that continues beyond go-live." },
  { icon: "layers" as const, title: "Integration expertise", detail: "Experience across connected, complex environments." }
];

export const stages = [
  { number: "01", title: "Discover", detail: "Understand your business, environment, goals and dependencies.", icon: "search" as const },
  { number: "02", title: "Deliver", detail: "Design, implement, integrate, configure and optimise.", icon: "layers" as const },
  { number: "03", title: "Sustain", detail: "Monitor, support and improve continuously.", icon: "chart" as const }
];

export const capabilities = [
  { title: "EDI & Integration", icon: "network" as const },
  { title: "API & Middleware", icon: "link" as const },
  { title: "Managed Support", icon: "headphones" as const },
  { title: "ERP & CRM", icon: "layers" as const },
  { title: "Cloud & Data", icon: "cloud" as const },
  { title: "Nonprofit Technology", icon: "heart" as const }
];

export const supportItems = [
  { icon: "user-check" as const, title: "Dedicated ownership", detail: "Consistent points of contact who understand your environment." },
  { icon: "search" as const, title: "Root cause analysis", detail: "Investigate underlying issues, not just their symptoms." },
  { icon: "clock" as const, title: "Responsive support", detail: "Coverage and escalation designed around your business needs." },
  { icon: "activity" as const, title: "Proactive monitoring", detail: "Spot patterns and risks before they become bigger problems." },
  { icon: "check-circle" as const, title: "Release validation", detail: "Structured changes with testing and deployment discipline." },
  { icon: "chart" as const, title: "Meaningful reporting", detail: "Make performance, ownership and priorities easier to see." }
];
