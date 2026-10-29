"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons";
import { SITE } from "@/data/site";

const services = [
  { label: "EDI Services", href: "/edi-services" },
  { label: "NPO Services", href: "/npo-services" },
  { label: "CLEO Support", href: "/cleo-support" }
];

export function Logo({ inverted = false, onNavigate }: { inverted?: boolean; onNavigate?: () => void }) {
  return (
    <Link href="/" onClick={onNavigate} className={`brand ${inverted ? "brand--inverted" : ""}`} aria-label="Global System – homepage">
      <span className="brand__symbol" aria-hidden="true"><svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39 14a18 18 0 1 0 1 18H26V22h17" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M24 6c-9 10-9 26 0 36M8 17h23M6 28h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="41" cy="8" r="3" fill="currentColor"/></svg></span>
      <span className="brand__type">
        <span className="brand__name">GLOBAL SYSTEM</span>
        <span className="brand__tagline">CONNECTED THINKING</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen && !servicesOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 1080) setMenuOpen(false);
    };
    const originalOverflow = document.body.style.overflow;
    if (menuOpen) document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen, servicesOpen]);

  const closeNavigation = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };
  const home = pathname === "/";

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="site-header__inner container-wide">
        <Logo onNavigate={closeNavigation} />
        <nav id="primary-navigation" className={`site-nav ${menuOpen ? "site-nav--open" : ""}`} aria-label="Main navigation">
          <Link className={`nav-link ${home ? "nav-link--active" : ""}`} href="/" onClick={closeNavigation}>Home</Link>
          <div className="nav-dropdown">
            <button
              type="button"
              className={`nav-link nav-dropdown__trigger ${servicesOpen || services.some(service => service.href === pathname) ? "nav-link--active" : ""}`}
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((previous) => !previous)}
            >
              Our Services <Icon name="chevron-down" size={14} />
            </button>
            <div id="services-menu" className={`nav-dropdown__menu ${servicesOpen ? "nav-dropdown__menu--open" : ""}`}>
              {services.map((service) => <a href={service.href} key={service.label} onClick={closeNavigation}>{service.label} <Icon name="arrow-up-right" size={14} /></a>)}
            </div>
          </div>
          <Link className={`nav-link ${pathname === "/why-globus" ? "nav-link--active" : ""}`} href="/why-globus" onClick={closeNavigation}>Why Us</Link>
          <Link className={`nav-link ${pathname === "/webinar" ? "nav-link--active" : ""}`} href="/webinar" onClick={closeNavigation}>Webinar</Link>
          <Link className={`nav-link ${pathname === "/innovation-lab" ? "nav-link--active" : ""}`} href="/innovation-lab" onClick={closeNavigation}>Innovation Lab</Link>
          <a className={`nav-link ${pathname === "/contact-us" ? "nav-link--active" : ""}`} href={SITE.contactUrl} onClick={closeNavigation}>Contact</a>
          <a className="button button--primary site-nav__mobile-cta" href={SITE.contactUrl} onClick={closeNavigation}>
            Book a discovery call <Icon name="arrow-up-right" size={17} />
          </a>
        </nav>
        <a className="button button--primary site-header__cta" href={SITE.contactUrl}>
          Let&apos;s talk <Icon name="arrow-up-right" size={16} />
        </a>
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => { setMenuOpen((previous) => !previous); setServicesOpen(false); }}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={24} />
        </button>
      </div>
    </header>
  );
}
