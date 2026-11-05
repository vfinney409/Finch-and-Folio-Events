import { AtSign, Mail, MapPin, Phone } from "lucide-react";
import { business, contact } from "@/app/site-content";

export function SiteFooter() {
  return (
    <footer>
      <a className="brand-logo footer-logo" href="/" aria-label={`${business.name} home`}>
        <img src={business.logo} alt={business.name} width={200} height={200} />
      </a>
      <div className="footer-location"><MapPin />Topeka, Kansas</div>
      <div className="footer-links">
        <a href={`mailto:${contact.email}`}><Mail />Email Vicky</a>
        <a href={`tel:${contact.phoneHref}`}><Phone />{contact.phoneDisplay}</a>
        <a href={contact.instagramUrl} target="_blank" rel="noreferrer"><AtSign />Instagram</a>
      </div>
      <p>© 2026 {business.legalName} · Brand portraits by Faith Valentine Photography</p>
    </footer>
  );
}
