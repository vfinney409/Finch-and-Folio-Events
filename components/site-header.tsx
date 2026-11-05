import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/app/site-content";

const links = [
  ["About", "/about"],
  ["Services", "/services"],
  ["Process", "/process"],
  ["Gallery", "/gallery"],
  ["Kind Words", "/testimonials"],
  ["FAQ", "/faq"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-logo header-logo" href="/" aria-label={`${business.name} home`}>
        <img src={business.monogram} alt="" width={80} height={80} />
        <span className="brand-wordmark"><strong>Finch &amp; Folio</strong><small>Events</small></span>
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
      </nav>
      <Button asChild className="header-cta"><a href="/contact">Check your date <ArrowRight /></a></Button>
      <details className="mobile-nav">
        <summary aria-label="Open navigation"><Menu /></summary>
        <nav aria-label="Mobile navigation">
          {links.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
          <a href="/contact">Check your date</a>
        </nav>
      </details>
    </header>
  );
}
