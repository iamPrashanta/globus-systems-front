import Link from "next/link";
import { Icon } from "@/components/icons";
import { Logo } from "@/components/site-header";
import { SITE } from "@/data/site";

export function ContactBanner({ variant = "default" }: { variant?: "default" | "compact" }) {
  return (
    <section className={`cta-band ${variant === "compact" ? "cta-band--compact" : ""}`} aria-labelledby="cta-title">
      <div className="container-wide cta-band__inner">
        <div>
          <div className="eyebrow eyebrow--light"><span className="eyebrow__dash" /> LET&apos;S BUILD WHAT&apos;S NEXT</div>
          <h2 id="cta-title">Need a technology partner <em>you can count on?</em></h2>
          <p>From connected systems to steady-state support, let&apos;s make the complex feel manageable.</p>
        </div>
        <a className="button button--white" href={SITE.contactUrl}>
          Book a discovery call <Icon name="arrow-up-right" size={18} />
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container-wide footer-main">
        <div className="footer-brand">
          <Logo />
          <p>Practical technology. Dependable delivery.<br />Partnership beyond implementation.</p>
          <span className="footer-email"><Icon name="mail" size={16} /> {SITE.email}</span>
        </div>
        <div className="footer-col">
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/why-globus">Why Us</Link>
          <Link href="/#services">Our services</Link>
          <Link href="/#expertise">Our expertise</Link><Link href="/innovation-lab">Innovation Lab</Link><Link href="/webinar">Webinar</Link>
        </div>
        <div className="footer-col">
          <h3>What we do</h3>
          <a href="/edi-services">EDI & integration</a>
          <a href="/npo-services">Nonprofit technology</a>
          <a href="/cleo-support">Managed support</a>
          <a href={SITE.contactUrl}>Contact us</a>
        </div>
        <div className="footer-col footer-locations">
          <h3>Where we work</h3>
          <p><Icon name="map-pin" size={17} /><span>{SITE.locationUS}<small>Fictional concept</small></span></p>
          <p><Icon name="map-pin" size={17} /><span>{SITE.locationIndia}<small>Demo environment</small></span></p>
          <span>Demo website · No live contact service</span>
        </div>
      </div>
      <div className="container-wide footer-bottom">
        <span>© {new Date().getFullYear()} Global System. All rights reserved.</span>
        <Link href="/contact-us">Let’s connect</Link>
      </div>
    </footer>
  );
}
