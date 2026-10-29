import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { ContactBanner } from "@/components/site-footer";
import { DeliverySteps, Differentiators, Eyebrow, FeatureIcon, SectionHeading } from "@/components/sections";
import { SITE, supportItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Why Us — Built for Dependable Delivery",
  description: "Discover the Global System difference: process-led delivery, clear ownership, structured support and long-term technology partnerships."
};

const outcomes = [
  { icon: "activity" as const, number: "01", title: "Greater reliability", body: "Processes and monitoring that help prevent repeat disruption." },
  { icon: "clock" as const, number: "02", title: "Faster decisions", body: "Clear priorities, communication and responsible ownership." },
  { icon: "target" as const, number: "03", title: "Better visibility", body: "A shared view of progress, issues and what comes next." },
  { icon: "shield" as const, number: "04", title: "Less delivery risk", body: "Validation and consistency from design to daily operations." }
];

const models = [
  { number: "01", title: "Build", body: "Assemble and enable the right team and delivery foundations.", icon: "users" as const },
  { number: "02", title: "Operate", body: "Run execution with transparent ownership and steady processes.", icon: "settings" as const },
  { number: "03", title: "Transfer", body: "Transition the capability when your business is ready.", icon: "git-merge" as const }
];

export default function WhyGlobusPage() {
  return (
    <>
      <section className="hero hero--why" aria-labelledby="why-heading">
        <div className="hero__halo hero__halo--one" aria-hidden="true" />
        <div className="container-wide hero__grid">
          <div className="hero__content">
            <Eyebrow>WHY US</Eyebrow>
            <h1 id="why-heading">Execution you can trust. <span>Partnership you can scale.</span></h1>
            <p className="hero__lead">Complex technology demands more than an implementation partner. It takes accountability, technical depth and a team that stays invested in your outcomes.</p>
            <div className="hero__actions">
              <a className="button button--primary button--large" href={SITE.contactUrl}>Talk to our team <Icon name="arrow-up-right" size={18}/></a>
              <a className="button button--outline button--large" href="#delivery-approach">See our approach <Icon name="arrow-right" size={18}/></a>
            </div>
            <div className="why-hero__note"><span className="why-hero__note-icon"><Icon name="check-circle" size={19}/></span> Built for the long game—not just the launch.</div>
          </div>
          <div className="hero__visual hero__visual--why">
            <div className="hero__photo-frame hero__photo-frame--why"><Image src="/assets/team-collaboration-hd.webp" quality={95} alt="A team discussing a shared technology solution" fill priority sizes="(max-width: 767px) 100vw, (max-width: 1080px) 90vw, 55vw" className="hero__image" /></div>
            <div className="why-hero__float"><span className="why-hero__float-mark"><Icon name="handshake" size={25}/></span><div><small>OUR COMMITMENT</small><strong>Ownership beyond delivery.</strong></div></div>
          </div>
        </div>
      </section>

      <section className="section why-values-section">
        <div className="container-wide">
          <SectionHeading label="OUR DIFFERENCE" title={<>More than a vendor. <span>A true technology partner.</span></>} description="The difference is how we show up: with disciplined delivery, open communication and the willingness to own the result." />
          <Differentiators mode="why" />
        </div>
      </section>

      <section className="section why-approach-section" id="delivery-approach">
        <div className="container-wide why-approach-section__grid">
          <div className="why-approach-section__photo">
            <Image src="/assets/team-planning-hd.webp" quality={95} alt="Consultants working together on a laptop" fill sizes="(max-width: 767px) 100vw, (max-width: 1080px) 90vw, 45vw" className="cover-image" />
            <div className="why-approach-section__photo-label"><Icon name="sparkles" size={18}/><span>Structure creates confidence.</span></div>
          </div>
          <div className="why-approach-section__content">
            <Eyebrow>OUR DELIVERY APPROACH</Eyebrow>
            <h2>A clear path from planning to <span>lasting impact.</span></h2>
            <p>We align on the challenge, deliver with care and stay accountable for what happens next. The process is simple by design.</p>
            <DeliverySteps detailed />
          </div>
        </div>
      </section>

      <section className="section support-section">
        <div className="container-wide">
          <SectionHeading label="STABLE SYSTEMS NEED STRUCTURED SUPPORT" title={<>Operational excellence, <span>without the guesswork.</span></>} description="The right people, processes and tools help complex operations remain stable, observable and ready for change." />
          <div className="support-grid">
            {supportItems.map((item, index) => (
              <article key={item.title} className="support-item"><span className="support-item__index">0{index+1}</span><FeatureIcon name={item.icon} size={27}/><h3>{item.title}</h3><p>{item.detail}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section impact-section">
        <div className="container-wide">
          <div className="split-section-heading split-section-heading--tight">
            <SectionHeading label="THE VALUE OF A BETTER OPERATING MODEL" align="left" title={<>What your team <span>should gain.</span></>} description="Not arbitrary vanity metrics—meaningful improvements you can feel in day-to-day work." />
            <div className="split-section-heading__aside">Reliable delivery is measured through sustained operational outcomes, not just project milestones.</div>
          </div>
          <div className="impact-grid">
            {outcomes.map((item) => <article className="impact-item" key={item.title}><span className="impact-item__top"><Icon name={item.icon} size={28} /><span>{item.number}</span></span><h3>{item.title}</h3><p>{item.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section partnership-section">
        <div className="container-wide partnership-section__grid">
          <div className="partnership-section__content"><Eyebrow light>FLEXIBLE ENGAGEMENT</Eyebrow><h2>A partnership built <span>around your business.</span></h2><p>Whether you are forming a new capability, running critical systems or planning a transition, the engagement adapts to your goals.</p><a href={SITE.contactUrl} className="button button--white">Discuss your needs <Icon name="arrow-up-right" size={17}/></a></div>
          <div className="partnership-model">
            {models.map((item, index) => <div className="partnership-model__row" key={item.title}><span className="partnership-model__line">{item.number}</span><span className="partnership-model__icon"><Icon name={item.icon} size={25}/></span><div><h3>{item.title}</h3><p>{item.body}</p></div>{index < models.length-1 && <span className="partnership-model__connector" />}</div>)}
          </div>
        </div>
      </section>

      <section className="section why-close-section">
        <div className="container-wide why-close-section__inner"><div className="why-close-section__symbol"><Icon name="handshake" size={34}/></div><Eyebrow>AT EVERY STEP</Eyebrow><h2>Reliable delivery. Clear responsibility. <span>Real partnership.</span></h2><p>That&apos;s the standard we believe enterprise technology deserves.</p></div>
      </section>
      <ContactBanner variant="compact" />
    </>
  );
}
