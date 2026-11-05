import { ArrowDownRight, ArrowRight, CalendarHeart, HeartHandshake } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { business, contact, eventServices, services } from "./site-content";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${business.website}/#business`,
  name: business.name,
  legalName: business.legalName,
  url: `${business.website}/`,
  logo: `${business.website}${business.logo}`,
  image: `${business.website}/og.png`,
  description: "Wedding planning guidance, officiant services, day-of coordination, and event support in Topeka and Northeast Kansas.",
  email: contact.email,
  telephone: contact.phoneHref,
  priceRange: "$$",
  areaServed: ["Topeka", "Shawnee County", "Northeast Kansas"],
  sameAs: [contact.instagramUrl],
  serviceType: [...services.map((service) => service.category), eventServices.name],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding and event services",
    itemListElement: [
      ...services.map((service) => ({
        "@type": "Offer",
        price: service.amount,
        priceCurrency: "USD",
        url: `${business.website}/services#${service.id}`,
        itemOffered: { "@type": "Service", name: `${service.title} — ${service.category}`, description: service.description },
      })),
      {
        "@type": "Offer",
        url: `${business.website}/services#${eventServices.id}`,
        priceSpecification: { "@type": "UnitPriceSpecification", minPrice: eventServices.startingHourlyRate, priceCurrency: "USD", unitText: "hour" },
        itemOffered: { "@type": "Service", name: eventServices.name, description: `${eventServices.priceLabel}. ${eventServices.description}` },
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader />
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">TOPEKA, KANSAS · WEDDING + EVENT SERVICES</p>
          <h1>Be present.<br /><em>I’ll handle</em><br />the details.</h1>
          <p className="hero-intro">Thoughtful support for your wedding or event, so you can feel calm, confident, and fully present.</p>
          <div className="hero-actions">
            <Button asChild size="lg"><a href="/services">Explore services <ArrowDownRight /></a></Button>
            <a className="text-link" href="/about">Meet Vicky <ArrowRight /></a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img className="hero-image" src="/assets/vicky-and-partner-field.webp" alt="A couple holding hands in a Kansas field at sunset" width={1120} height={800} fetchPriority="high" />
          <img className="hero-brand-seal" src={business.logo} alt="" width={100} height={100} />
          <div className="hero-note"><span>Calm presence.</span><span>Thoughtful details.</span><span>A day that feels like yours.</span></div>
        </div>
      </section>

      <div className="trust-strip" aria-label={`${business.name} services`}><span>Planning Guidance</span><i>✦</i><span>Wedding Officiant</span><i>✦</i><span>Coordination</span><i>✦</i><span>Event Services</span></div>

      <section className="home-services section-pad">
        <div className="home-section-heading">
          <p className="eyebrow">STEADY SUPPORT, THOUGHTFULLY DONE</p>
          <h2>More room to feel the day.</h2>
          <p>Choose planning guidance, a ceremony that reflects your story, day-of coordination, or support for your next event.</p>
          <a className="text-link" href="/services">Explore all services <ArrowRight /></a>
        </div>
        <div className="home-service-cards">
          <a className="home-service-card" href="/services#the-first-chapter"><span>01</span><CalendarHeart /><h3>The First Chapter</h3><p>A roadmap, budget, timeline, and local vendor resources for couples planning their own wedding.</p><b>Explore planning guidance <ArrowRight /></b></a>
          <a className="home-service-card" href="/services#the-heart-of-the-story"><span>02</span><HeartHandshake /><h3>Your ceremony. Your story.</h3><p>Micro-wedding and custom officiant services, with coordination available on its own or together.</p><b>Explore wedding services <ArrowRight /></b></a>
          <a className="home-service-card" href="/services#event-services"><span>03</span><CalendarHeart /><h3>Event Services</h3><p>Flexible planning and coordination for local private events. Starting at $40 per hour with a three-hour minimum.</p><b>Plan your next gathering <ArrowRight /></b></a>
        </div>
      </section>

      <section className="home-about section-pad">
        <div className="home-about-photo"><img src="/assets/vicky-finney-sunset.webp" alt="Vicky Finney standing outdoors at sunset" /><span>VICKY FINNEY · COORDINATOR + OFFICIANT</span></div>
        <div className="home-about-copy"><p className="eyebrow">A CALM, CARING PRESENCE</p><h2>There for the plans.<br /><em>Present for the people.</em></h2><p>Meet Vicky, a Topeka-based wedding coordinator and officiant whose work is grounded in thoughtful preparation and community care.</p><a className="text-link" href="/about">Get to know Vicky <ArrowRight /></a></div>
      </section>

      <section className="home-journey section-pad">
        <div><p className="eyebrow">SIMPLE FROM THE FIRST HELLO</p><h2>Start with a conversation.</h2><p>We’ll talk through your plans and the kind of support you need before any agreement or retainer.</p></div>
        <div className="home-journey-links"><a href="/process"><span>01</span><b>See how we’ll work together</b><ArrowRight /></a><a href="/faq"><span>02</span><b>Find answers to common questions</b><ArrowRight /></a></div>
      </section>

      <section className="photo-break">
        <img src="/assets/vicky-and-partner-field.webp" alt="Couple walking together through a field at sunset" />
        <div className="photo-break-copy"><blockquote>Your wedding should feel like<br />a celebration—<em>not a checklist.</em></blockquote><a href="/gallery">Visit the gallery <ArrowRight /></a></div>
      </section>

      <section className="home-contact section-pad">
        <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h2>Let’s talk about your day.</h2><p>Share a few details and Vicky will follow up personally.</p>
        <Button asChild size="lg"><a href="/contact">Start an inquiry <ArrowRight /></a></Button>
      </section>
      <SiteFooter />
    </main>
  );
}
