import {
  ArrowRight,
  CalendarHeart,
  Check,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { addOns, business, contact, eventServices, faqs, services, testimonials } from "@/app/site-content";

const pages = {
  about: {
    eyebrow: "MEET YOUR COORDINATOR",
    title: "Hi, I’m Vicky.",
    intro: "I bring a calm, organized, and supportive presence to life’s most meaningful moments.",
  },
  services: {
    eyebrow: "WEDDING + EVENT SERVICES",
    title: "Support for the moments that matter most.",
    intro: "From your first planning steps to the celebration itself, find thoughtful support for your wedding or event.",
  },
  process: {
    eyebrow: "THE PROCESS",
    title: "What working together looks like.",
    intro: "A simple, supportive path from your first note to the last planned moment of your celebration.",
  },
  testimonials: {
    eyebrow: "KIND WORDS",
    title: "Support you can feel.",
    intro: "A few words from people who have experienced Vicky’s thoughtful, steady support.",
  },
  faq: {
    eyebrow: "QUESTIONS, ANSWERED",
    title: "A little clarity before we begin.",
    intro: "Details about coordination, ceremonies, travel, and what it’s like to work together.",
  },
  gallery: {
    eyebrow: "A FEW BEAUTIFUL MOMENTS",
    title: "Every detail, held with care.",
    intro: "Kansas roots, meaningful celebrations, and the moments that stay with you.",
  },
  contact: {
    eyebrow: "YOUR NEXT CHAPTER STARTS HERE",
    title: "Let’s bring your celebration together.",
    intro: "Tell me about your plans and we’ll find the support that fits. Every inquiry starts with a free consultation, before an agreement or retainer.",
  },
} as const;

type PageKey = keyof typeof pages;

const processSteps = [
  { title: "Inquire", text: "Share your date, venue, plans, and the kind of support you need." },
  { title: "Consult", text: "Meet for a free consultation over coffee, brunch, Zoom, or Google Meet. There’s no agreement or retainer before this conversation." },
  { title: "Prepare", text: "We’ll bring timelines, ceremony details, vendors, and final plans together." },
  { title: "Celebrate", text: "Enjoy your day while the details keep moving behind the scenes." },
];

function PageHeading({ page }: { page: PageKey }) {
  const content = pages[page];
  return (
    <section className={`page-heading page-heading-${page}`}>
      <div className="page-heading-copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p className="lead">{content.intro}</p>
      </div>
      {page === "process" && (
        <Image
          className="process-heading-photo"
          src="/assets/cup-and-saucer-on-table.webp"
          alt="A cup of coffee and saucer on a wooden table"
          width={1200}
          height={800}
          unoptimized
          sizes="(max-width: 1000px) 100vw, 42vw"
          loading="eager"
          fetchPriority="high"
        />
      )}
    </section>
  );
}

function AboutContent() {
  return (
    <>
      <section className="about section-pad">
        <div className="about-portrait">
          <img className="about-photo-main" src="/assets/vicky-finney-sunset.webp" alt="Vicky Finney standing outdoors at sunset" />
          <img className="about-photo-inset" src="/assets/vicky-finney-portrait.webp" alt="Portrait of Vicky Finney" />
          <div className="about-photo-caption">
            <span>Vicky Finney</span>
            <small>COORDINATOR · OFFICIANT</small>
            <small className="photo-credit">PORTRAITS BY FAITH VALENTINE PHOTOGRAPHY</small>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A PEOPLE-FIRST APPROACH</p>
          <h2>Here for the people behind the plans.</h2>
          <p className="lead">I’m a Topeka-based wedding coordinator and officiant who believes your wedding day should feel like a celebration—not another event to manage.</p>
          <p>A public educator in Northeast Kansas since 2013, I’ve planned workshops and professional development, spoken at local and national education conferences, and supported events since 2016.</p>
          <p>My wedding-industry journey began as an Event Assistant for the best wedding venue in Topeka in 2022, growing into a Venue Coordinator role by 2024. By the end of 2026 I have coordinated 30 weddings, and worked nearly 100 events in total.</p>
          <p>In addition to education, events and weddings, I try to routinely give back to my local community through community service. From working fundraising events at the Topeka Zoo, cooking dinner at The Ronald McDonald House, and sorting donations at Harvesters, I keep people at the heart of how I serve.</p>
          <blockquote><Quote />You should be celebrating—not worrying about what happens next.</blockquote>
        </div>
      </section>
      <section className="about-journey section-pad">
        <p className="eyebrow">A LITTLE OF MY STORY</p>
        <h2>Years spent planning, supporting, and bringing people together.</h2>
        <div className="experience-grid" aria-label="Vicky’s experience">
          <span><strong>2013</strong>Education</span>
          <span><strong>2016</strong>Events</span>
          <span><strong>2022</strong>Weddings</span>
          <span><strong>2024</strong>Venue Coordinator</span>
        </div>
        <a className="text-link" href="/services">See how I can support your day <ArrowRight /></a>
      </section>
    </>
  );
}

function ServicesContent() {
  return (
    <>
      <section className="services section-pad">
        <div className="section-heading centered">
          <p className="eyebrow">A SERVICE FOR EVERY CHAPTER</p>
          <h2>Find the right kind of support.</h2>
          <p>Planning guidance, intimate ceremonies, custom officiating, and day-of coordination — on their own or together.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className={`service-card${service.id === "the-duology" ? " service-bundle" : ""}`} id={service.id} key={service.id}>
              <div className="card-top"><span>{service.number}</span><HeartHandshake /></div>
              <div className="service-title-row"><h3>{service.title}</h3><p className="price"><span className="sr-only">Service fee </span><strong>{service.price}</strong></p></div>
              <p className="service-category">{service.category}</p>
              <p>{service.description}</p>
              {(service.features.length > 0 || service.consultation || service.notes.length > 0) && <details className="service-details"><summary>What’s included</summary>{service.consultation && <p>{service.consultation}</p>}{service.features.length > 0 && <ul>{service.features.map((feature) => <li key={feature}><Check aria-hidden="true" />{feature}</li>)}</ul>}{service.notes.map((note) => <p key={note}>{note}</p>)}</details>}
              <a href={`/contact?service=${service.id}#inquiry-form`}>Ask about this service <ArrowRight /></a>
            </article>
          ))}
        </div>
      </section>
      <section className="event-services section-pad" id={eventServices.id}>
        <div className="section-heading">
          <p className="eyebrow">BEYOND THE WEDDING DAY</p>
          <h2>{eventServices.name}</h2>
          <p className="event-rate">{eventServices.priceLabel}</p>
          <p>{eventServices.description}</p>
          <p>{eventServices.inquiryText}</p>
          <Button asChild size="lg"><a href={`/contact?service=${eventServices.id}#inquiry-form`}>Inquire about your event <ArrowRight /></a></Button>
        </div>
      </section>
      <section className="coordination-feature section-pad">
        <div className="feature-copy">
          <p className="eyebrow">DAY-OF COORDINATION</p>
          <h2>You’ve planned the wedding.<br /><em>Now let someone run it.</em></h2>
          <p>From the first processional step to the last planned reception moment, Finch and Folio Events keeps your timeline moving and your vendor team aligned. The Plot Comes Together carries out the wedding plans you have already made.</p>
          <div className="mini-grid">
            <span><b>01</b>Keep the timeline moving</span>
            <span><b>02</b>Coordinate your vendors</span>
            <span><b>03</b>Handle the unexpected</span>
          </div>
        </div>
        <div className="feature-photo"><img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=86" alt="Elegant wedding reception tablescape" /></div>
        <aside className="good-to-know"><span>GOOD TO KNOW</span><h3>Day-of coordination ≠ full wedding planning.</h3><p>Most vendor contracts and major decisions should already be in place when coordination begins.</p></aside>
      </section>
      <section className="officiant-feature section-pad">
        <div className="officiant-photo"><img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=88" alt="Wedding ceremony beneath a floral arch" /></div>
        <div className="officiant-copy">
          <p className="eyebrow">WEDDING OFFICIANT</p>
          <h2>A ceremony that<br /><em>feels like you.</em></h2>
          <p>I proudly officiate ceremonies for couples of all genders and identities. Choose The Short Story for a simple, intimate ceremony with a standard script and minor customizations, or The Heart of the Story for a customized ceremony script, multiple planning meetings, and rehearsal support.</p>
          <div className="officiant-list"><span><CalendarHeart />Personalized ceremony script</span><span><HeartHandshake />Rehearsal support</span><span><Check />Marriage-license signing</span></div>
        </div>
      </section>
      <section className="pricing section-pad">
        <div><p className="eyebrow">WEDDING SUPPORT, YOUR WAY</p><h2>Clear support.<br />Thoughtful value.</h2><p>All services begin with a complimentary conversation to make sure the fit and scope are clear.</p></div>
        <div className="price-list">
          {services.map((service) => <div key={service.id}><span>{service.title}<small>{service.category}</small></span><strong>{service.price}</strong></div>)}
          <div><span>{eventServices.name}<small>{eventServices.minimumHours}-hour minimum</small></span><strong>from ${eventServices.startingHourlyRate}/hour</strong></div>
          <details><summary>Need a little more help? <span>+</span></summary><ul>{addOns.map((addOn) => <li key={addOn}>{addOn}</li>)}</ul><p className="scope-note">Other services outside the listed scope can be discussed when your contract is prepared.</p></details>
        </div>
      </section>
      <section className="travel section-pad">
        <div><MapPin /><p className="eyebrow">NORTHEAST KANSAS SERVICE AREA</p><h2>Based in Topeka.<br /><em>Happy to travel.</em></h2></div>
        <div className="travel-copy"><p>Serving weddings throughout Northeast Kansas. Local travel is included, with simple distance-based rates for celebrations farther from Topeka.</p><a href="/contact">Ask about your venue <ArrowRight /></a></div>
        <div className="travel-rates" aria-label="Travel rates"><span><strong>LOCAL</strong>Topeka &amp; Shawnee County · Free</span><span><strong>30–60 MILES</strong>$50 per day</span><span><strong>61–100 MILES</strong>$100 per day</span><span><strong>OVERNIGHT</strong>Quoted by event</span></div>
        <div className="travel-photo"><img src="/assets/sunflower-field-couple.webp" alt="Couple standing together in a Kansas sunflower field" /><span>KANSAS ROOTS · MEANINGFUL CELEBRATIONS</span></div>
      </section>
    </>
  );
}

function ProcessContent() {
  return (
    <>
      <section className="process section-pad">
        <div className="section-heading"><p className="eyebrow">A CLEAR, LOW-PRESSURE START</p><h2>First, we get to know each other.</h2><p>Before any agreement or retainer, we’ll talk through your plans and the support you’re looking for.</p></div>
        <div className="process-grid">{processSteps.map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </section>
      <section className="consultation-note-band section-pad">
        <CalendarHeart /><div><p className="eyebrow">YOUR CONSULTATION, YOUR WAY</p><h2>Coffee, brunch, Zoom, or Google Meet.</h2><p>Bring your questions, your ideas, or just your date and venue. We’ll figure out the next step together.</p></div><Button asChild size="lg"><a href="/contact">Start an inquiry <ArrowRight /></a></Button>
      </section>
    </>
  );
}

function GalleryContent() {
  return (
    <>
      <section className="gallery section-pad">
        <div className="section-heading centered"><p className="eyebrow">KANSAS ROOTS · MEANINGFUL CELEBRATIONS</p><h2>Moments you can be fully present for.</h2></div>
        <div className="gallery-grid">
          <img className="g1" src="/assets/vicky-and-partner-field.webp" alt="Couple walking together through a field at sunset" />
          <img className="g2" src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=86" alt="Wedding couple sharing a joyful moment" />
          <img className="g3" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=86" alt="Wedding rings and florals" />
          <div className="gallery-quote"><Quote /><p>The moments you remember should be the ones you felt—not the details you managed.</p></div>
        </div>
      </section>
      <section className="gallery-secondary section-pad">
        <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=86" alt="Wedding celebration detail" />
        <div><p className="eyebrow">A DAY THAT FEELS LIKE YOURS</p><h2>Thoughtful details.<br /><em>Room to celebrate.</em></h2><p>From ceremony to reception, calm coordination leaves more room to take in the people and moments around you.</p></div>
      </section>
    </>
  );
}

function TestimonialsContent() {
  return (
    <>
      <section className="testimonials section-pad">
        <div className="testimonial-grid">{testimonials.map((testimonial) => <blockquote key={testimonial.attribution}><Quote /><p>{testimonial.quote}</p><cite>— {testimonial.attribution}</cite></blockquote>)}</div>
      </section>
      <section className="testimonial-note section-pad"><img src="/assets/vicky-finney-portrait.webp" alt="Vicky Finney" /><p>Every celebration deserves a steady, thoughtful presence behind the scenes.</p><a className="text-link" href="/about">Meet Vicky <ArrowRight /></a></section>
    </>
  );
}

function FAQContent() {
  return (
    <section className="faq section-pad">
      <div className="faq-heading"><p className="eyebrow">HAVE ANOTHER QUESTION?</p><h2>Let’s talk it through.</h2><p>Vicky is happy to answer anything that would help you feel ready.</p><a href={`mailto:${contact.email}`}><Mail />Send Vicky a note</a></div>
      <div className="faq-list">{faqs.map((faq, index) => <details key={faq.question} open={index === 0}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<b>+</b></summary><p>{faq.answer}</p></details>)}</div>
    </section>
  );
}

function ContactContent({ serviceId }: { serviceId?: string }) {
  const selectedWeddingService = services.find((service) => service.id === serviceId);
  const selectedService = selectedWeddingService
    ? `${selectedWeddingService.title} — ${selectedWeddingService.category}`
    : serviceId === eventServices.id ? eventServices.name : "";
  return (
    <section className="contact section-pad">
      <div className="contact-copy">
        <p className="eyebrow">A SIMPLE FIRST STEP</p><h2>Tell me about your day.</h2>
        <p>Share a few details below and Vicky will follow up personally. Meet over coffee, brunch, Zoom, or Google Meet.</p>
        <div className="contact-links"><a className="contact-link" href={`mailto:${contact.email}`}><Mail />{contact.email}</a><a className="contact-link" href={`tel:${contact.phoneHref}`}><Phone />{contact.phoneDisplay}</a><a className="contact-link" href={contact.instagramUrl} target="_blank" rel="noreferrer">{contact.instagramHandle}</a></div>
      </div>
      <form id="inquiry-form" action={`https://formsubmit.co/${contact.email}`} method="POST" className="inquiry-form">
        <input type="hidden" name="_subject" value={`New ${business.name} inquiry`} />
        <input type="hidden" name="_next" value={`${business.website}/thank-you`} />
        <input type="hidden" name="_url" value={`${business.website}/contact#inquiry-form`} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_autoresponse" value={`Thank you for reaching out to ${business.name}! Your inquiry has been received. Vicky will review your wedding or event details and follow up personally as soon as possible.`} />
        <input className="honeypot-field" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="form-heading"><CalendarHeart aria-hidden="true" /><h3>Tell me about your day.</h3><p>Share a few details below and Vicky will follow up personally.</p></div>
        <FieldGroup className="form-grid">
          <Field><FieldLabel htmlFor="contact-name">Your name</FieldLabel><Input id="contact-name" name="Name" autoComplete="name" required /></Field>
          <Field><FieldLabel htmlFor="contact-partner">Partner&apos;s name (if applicable)</FieldLabel><Input id="contact-partner" name="Partner's name" /></Field>
          <Field><FieldLabel htmlFor="contact-email">Email</FieldLabel><Input id="contact-email" name="email" type="email" autoComplete="email" required /></Field>
          <Field><FieldLabel htmlFor="contact-phone">Phone</FieldLabel><Input id="contact-phone" name="Phone" type="tel" autoComplete="tel" /></Field>
          <Field><FieldLabel htmlFor="contact-date">Wedding / event date</FieldLabel><Input id="contact-date" name="Event date" type="date" /></Field>
          <Field><FieldLabel htmlFor="contact-venue">Venue / city</FieldLabel><Input id="contact-venue" name="Venue or city" autoComplete="organization" /></Field>
          <Field className="full-field"><FieldLabel htmlFor="contact-service">Service</FieldLabel><NativeSelect id="contact-service" name="Service" className="w-full" defaultValue={selectedService} required><NativeSelectOption value="">Choose a service</NativeSelectOption>{services.map((service) => <NativeSelectOption value={`${service.title} — ${service.category}`} key={service.id}>{service.title} — {service.category}</NativeSelectOption>)}<NativeSelectOption value={eventServices.name}>{eventServices.name}</NativeSelectOption><NativeSelectOption>Not Sure Yet</NativeSelectOption></NativeSelect></Field>
          <Field className="full-field"><FieldLabel htmlFor="contact-message">Tell me about your wedding or event</FieldLabel><Textarea id="contact-message" name="Wedding or event details" rows={5} required /></Field>
        </FieldGroup>
        <Button type="submit" size="lg">Send my inquiry <ArrowRight /></Button>
        <p className="form-note">Protected against spam. You&apos;ll receive an email confirming your submission.</p>
      </form>
    </section>
  );
}

export function InteriorPage({ page, serviceId }: { page: PageKey; serviceId?: string }) {
  return (
    <main>
      <SiteHeader />
      <PageHeading page={page} />
      {page === "about" && <AboutContent />}
      {page === "services" && <ServicesContent />}
      {page === "process" && <ProcessContent />}
      {page === "gallery" && <GalleryContent />}
      {page === "testimonials" && <TestimonialsContent />}
      {page === "faq" && <FAQContent />}
      {page === "contact" && <ContactContent serviceId={serviceId} />}
      <SiteFooter />
    </main>
  );
}
