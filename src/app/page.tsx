import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { ContactBanner } from "@/components/site-footer";
import { Capabilities, DeliverySteps, Differentiators, Eyebrow, FeatureIcon, InlineLink, SectionHeading } from "@/components/sections";
import { SITE, serviceItems } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero hero--home" aria-labelledby="home-heading">
        <div className="hero__halo hero__halo--one" aria-hidden="true" />
        <div className="hero__halo hero__halo--two" aria-hidden="true" />
        <div className="container-wide hero__grid">
          <div className="hero__content">
            <Eyebrow>ENGINEERED FOR WHAT&apos;S NEXT</Eyebrow>
            <h1 id="home-heading">Integration that keeps <span>business moving.</span></h1>
            <p className="hero__lead">From complex enterprise integrations to dependable managed support, we make the technology behind your business work better, together.</p>
            <div className="hero__actions">
              <a className="button button--primary button--large" href={SITE.contactUrl}>Book a discovery call <Icon name="arrow-up-right" size={18} /></a>
              <a className="button button--outline button--large" href="#services">Explore our services <Icon name="arrow-right" size={18} /></a>
            </div>
            <div className="hero__proof" aria-label="What sets our delivery apart">
              <div><Icon name="shield" size={21} /><span>Accountable<br /><strong>delivery</strong></span></div>
              <div><Icon name="activity" size={21} /><span>Operational<br /><strong>continuity</strong></span></div>
              <div><Icon name="handshake" size={21} /><span>Long-term<br /><strong>partnership</strong></span></div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__photo-frame">
              <Image src="/assets/team-collaboration-hd.webp" quality={95} alt="A collaborative team working together on a technology project" fill priority sizes="(max-width: 767px) 100vw, (max-width: 1080px) 90vw, 55vw" className="hero__image" />
            </div>
            <div className="hero__visual-orbit" aria-hidden="true" />
            <div className="hero-float hero-float--bottom">
              <span className="hero-float__icon"><Icon name="git-merge" size={23} /></span>
              <div><strong>People. Process. Technology.</strong><span>Connected for what&apos;s next</span></div>
              <span className="hero-float__arrow"><Icon name="arrow-up-right" size={17} /></span>
            </div>
            <span className="hero-visual-tag">CONNECTED THINKING <span>↗</span></span>
          </div>
        </div>
      </section>

      <section className="trust-ribbon" aria-label="Concept service principles">
        <div className="container-wide trust-ribbon__inner">
          <div className="trust-ribbon__intro"><span className="trust-ribbon__dot" /> A PARTNER FOR COMPLEX ENVIRONMENTS</div>
          <div className="trust-ribbon__values"><span>Integration-first thinking</span><span>Process-led delivery</span><span>Support beyond go-live</span></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container-wide">
          <div className="split-section-heading">
            <SectionHeading align="left" label="WHAT WE DO" title={<>Three service lines.<br /><span>One accountable partner.</span></>} description="Focused capabilities. One consistent approach to ownership, delivery and support." />
            <div className="split-section-heading__aside">We join the dots between people, platforms and processes—so your teams can focus on moving forward.</div>
          </div>
          <div className="services-grid">
            {serviceItems.map((service) => (
              <article className={`service-card service-card--${service.tone}`} key={service.title}>
                <div className="service-card__art">
                  {service.tone === "integration" && <div className="integration-art" aria-hidden="true"><span className="integration-art__chip integration-art__chip--a"><Icon name="database" size={27} /></span><span className="integration-art__chip integration-art__chip--b"><Icon name="git-merge" size={27} /></span><span className="integration-art__chip integration-art__chip--c"><Icon name="cloud" size={27} /></span><span className="integration-art__line integration-art__line--a"/><span className="integration-art__line integration-art__line--b"/><span className="integration-art__small">Connected systems, connected possibilities</span></div>}
                  {service.tone === "nonprofit" && <div className="nonprofit-art" aria-hidden="true"><Image src="/assets/team-culture-hd.webp" quality={95} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 1080px) 50vw, 33vw" className="cover-image" /><div className="nonprofit-art__overlay" /></div>}
                  {service.tone === "support" && <div className="support-art" aria-hidden="true"><div className="support-art__window"><div className="support-art__dots"><i/><i/><i/></div><div className="support-art__label">SYSTEM HEALTH <span>LIVE</span></div><div className="support-art__graph"><span/><span/><span/><span/><span/><span/><span/><span/></div><div className="support-art__checks"><span>Integrations online <b>●</b></span><span>Monitoring active <b>●</b></span></div></div></div>}
                  <span className="service-card__number">{service.number} / 03</span>
                </div>
                <div className="service-card__body">
                  <div className="service-card__top"><FeatureIcon name={service.icon} size={24}/><span>{service.kicker}</span></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <InlineLink href={service.href}>Explore this service</InlineLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section difference-section" id="about">
        <div className="difference-section__shape" aria-hidden="true" />
        <div className="container-wide">
          <SectionHeading label="OUR DIFFERENCE" title={<>Built for execution. <span>Not just implementation.</span></>} description="Technology projects do not end at launch. Our approach is designed for the people who depend on the systems every day." />
          <Differentiators />
          <div className="difference-section__foot"><span>Less complexity. Clearer accountability. More confidence.</span><Link className="inline-link" href="/why-globus">Discover our approach <Icon name="arrow-right" size={16} /></Link></div>
        </div>
      </section>

      <section className="section journey-section">
        <div className="container-wide journey-section__inner">
          <div className="journey-section__intro">
            <Eyebrow>HOW WE WORK</Eyebrow>
            <h2>A clearer path from <span>complex to confident.</span></h2>
            <p>A practical, three-stage delivery approach that brings people and technology together—from the first conversation through ongoing improvement.</p>
            <Link href="/why-globus" className="inline-link">Explore our delivery approach <Icon name="arrow-right" size={16}/></Link>
          </div>
          <DeliverySteps />
        </div>
      </section>

      <section className="section expertise-section" id="expertise">
        <div className="container-wide">
          <div className="split-section-heading split-section-heading--tight">
            <SectionHeading label="OUR EXPERTISE" align="left" title={<>Built for <span>complex environments.</span></>} description="Connecting legacy platforms, modern applications and the teams that run them." />
            <div className="split-section-heading__aside">Flexible technical capabilities with a consistent focus on practical outcomes.</div>
          </div>
          <Capabilities />
          <div className="expertise-panel">
            <div className="expertise-panel__copy">
              <Eyebrow light>ENGINEERED FOR RELIABILITY</Eyebrow>
              <h3>Better connected.<br /><span>Better supported.</span></h3>
              <p>Reliable systems come from a clear understanding of how the whole environment works—not from treating every issue in isolation.</p>
              <a className="button button--white" href={SITE.contactUrl}>Talk through your challenge <Icon name="arrow-up-right" size={17}/></a>
            </div>
            <div className="ecosystem-art" aria-label="Illustration of connected enterprise systems" role="img">
              <div className="ecosystem-art__ring ecosystem-art__ring--one"/><div className="ecosystem-art__ring ecosystem-art__ring--two"/>
              <div className="ecosystem-art__center"><Icon name="git-merge" size={36}/><strong>Global</strong><small>Connected delivery</small></div>
              <div className="ecosystem-art__satellite ecosystem-art__satellite--a"><Icon name="database" size={18}/> DATA</div>
              <div className="ecosystem-art__satellite ecosystem-art__satellite--b"><Icon name="cloud" size={18}/> CLOUD</div>
              <div className="ecosystem-art__satellite ecosystem-art__satellite--c"><Icon name="shield" size={18}/> SUPPORT</div>
              <div className="ecosystem-art__satellite ecosystem-art__satellite--d"><Icon name="network" size={18}/> API / EDI</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section outcomes-section">
        <div className="container-wide">
          <SectionHeading label="WHAT PARTNERSHIP SHOULD FEEL LIKE" title={<>Confidence in every <span>moving part.</span></>} description="Our work is designed to turn technical effort into a more dependable day-to-day experience for your team." />
          <div className="outcomes-grid">
            <article><span className="outcomes-grid__index">01</span><FeatureIcon name="target" size={25}/><h3>Clarity from day one</h3><p>Know what matters, who owns it and how delivery is progressing.</p></article>
            <article><span className="outcomes-grid__index">02</span><FeatureIcon name="activity" size={25}/><h3>Fewer recurring surprises</h3><p>Structured support and root cause thinking help keep issues from coming back.</p></article>
            <article><span className="outcomes-grid__index">03</span><FeatureIcon name="chart" size={25}/><h3>Room to grow</h3><p>Technology and operating practices prepared to evolve with your organisation.</p></article>
          </div>
        </div>
      </section>

      <section className="people-section">
        <div className="container-wide people-section__grid">
          <div className="people-section__copy"><Eyebrow>AN IMAGINED TEAM</Eyebrow><h2>Better collaboration starts <span>with shared ideas.</span></h2><p>This AI-generated scene illustrates a collaborative studio. It does not depict employees or customers.</p><Link href="/why-globus" className="inline-link">Get to know our approach <Icon name="arrow-right" size={17}/></Link></div>
          <div className="people-section__image"><Image src="/assets/team-culture-hd.webp" quality={95} alt="Technology professionals collaborating in an office" fill sizes="(max-width: 767px) 100vw, (max-width: 1080px) 90vw, 50vw" className="cover-image" /></div>
          <div className="people-section__badge"><Icon name="users" size={22}/><strong>One team.</strong><span>Shared accountability.</span></div>
        </div>
      </section>
      <ContactBanner />
    </>
  );
}
