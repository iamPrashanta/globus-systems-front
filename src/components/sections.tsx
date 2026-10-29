import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/icons";
import { capabilities, differentiators, stages } from "@/data/site";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <div className={`eyebrow ${light ? "eyebrow--light" : ""}`}><span className="eyebrow__dash" /> {children}</div>;
}

export function SectionHeading({ label, title, description, align = "center" }: {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <Eyebrow>{label}</Eyebrow>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function FeatureIcon({ name, size = 24 }: { name: IconName; size?: number }) {
  return <span className="feature-icon"><Icon name={name} size={size} /></span>;
}

export function Differentiators({ mode = "home" }: { mode?: "home" | "why" }) {
  return (
    <div className={`difference-grid ${mode === "why" ? "difference-grid--cards" : ""}`}>
      {differentiators.map((item, index) => (
        <div className="difference-item" key={item.title}>
          {mode === "why" && <span className="difference-item__number">0{index + 1} / OUR DIFFERENCE</span>}
          <FeatureIcon name={item.icon} size={29} />
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function DeliverySteps({ detailed = false }: { detailed?: boolean }) {
  return (
    <ol className={`delivery-steps ${detailed ? "delivery-steps--detailed" : ""}`}>
      {stages.map((step, index) => (
        <li key={step.number} className="delivery-step">
          <div className="delivery-step__head">
            <span className="delivery-step__number">{step.number}</span>
            {index !== stages.length - 1 && <span className="delivery-step__line" aria-hidden="true"><Icon name="arrow-right" size={16} /></span>}
          </div>
          <h3>{step.title}</h3>
          <p>{step.detail}</p>
          {detailed && <span className="delivery-step__detail">{index === 0 ? "Clarity before code" : index === 1 ? "Execution with ownership" : "Value beyond go-live"}</span>}
        </li>
      ))}
    </ol>
  );
}

export function Capabilities() {
  return (
    <div className="capability-grid">
      {capabilities.map((item) => (
        <div className="capability-item" key={item.title}>
          <span className="capability-item__icon"><Icon name={item.icon} size={23} /></span>
          <strong>{item.title}</strong>
          <Icon name="arrow-up-right" size={16} className="capability-item__arrow" />
        </div>
      ))}
    </div>
  );
}

export function InlineLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  const className = "inline-link";
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children} <Icon name="arrow-up-right" size={15} /></a>;
  }
  return <Link href={href} className={className}>{children} <Icon name="arrow-right" size={15} /></Link>;
}
