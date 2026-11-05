// Edit app/service-data.json for package prices, inclusions, add-ons, and event copy.
// Business identity, contact information, testimonials, and FAQs are grouped here.
import serviceData from "./service-data.json";

export const business = {
  ...serviceData.business,
  logo: "/assets/finch-and-folio-round.svg",
  monogram: "/assets/finch-and-folio-monogram.svg",
};

export const contact = {
  email: "victoria.finney91@gmail.com",
  phoneDisplay: "785-260-0497",
  phoneHref: "+17852600497",
  instagramHandle: "@lovebirdweddingsbyvfinney",
  instagramUrl: "https://www.instagram.com/lovebirdweddingsbyvfinney/",
};

const dollars = new Intl.NumberFormat("en-US", {
  style: "currency", currency: "USD", maximumFractionDigits: 0,
});

export const services = serviceData.weddingServices.map((service, index) => ({
  ...service,
  number: String(index + 1).padStart(2, "0"),
  title: service.name,
  amount: service.price,
  price: dollars.format(service.price),
  features: service.includes,
  consultation: "consultation" in service ? service.consultation : undefined,
}));

export const eventServices = serviceData.eventServices;

export const addOns = serviceData.addOns.map((addOn) => {
  const price = addOn.price === null
    ? addOn.priceLabel
    : `${dollars.format(addOn.price)}${addOn.unit === "flat" ? "" : `/${addOn.unit}`}`;
  return `${addOn.name} — ${price}`;
});

export const testimonials = [
  { quote: "Vicky is one of the most energetic and supportive people...", attribution: "CB" },
  { quote: "Vicky's commitment to going above and beyond for her clients is consistently evident.", attribution: "JH" },
];

export const faqs = [
  {
    question: "What exactly does a day-of coordinator do?",
    answer: "A day-of coordinator manages the wedding timeline, communicates with vendors, directs the ceremony processional, and oversees reception logistics. The Plot Comes Together is $750 and includes six total hours of event-day coordination, beginning two hours before the ceremony, plus planning meetings and a one-hour rehearsal if scheduled.",
  },
  {
    question: "Is day-of coordination the same as wedding planning?",
    answer: "Day-of coordination carries out the plans you have already made. Finch and Folio Events does not currently provide comprehensive wedding planning or event design. If you want to plan your own wedding but need a roadmap, The First Chapter offers budget, timeline, and vendor assistance for $150.",
  },
  {
    question: "Can we personalize our ceremony?",
    answer: "The Heart of the Story ($450) includes a customized ceremony script, multiple planning meetings, and rehearsal support. The Short Story ($175) offers a choice of five standard scripts with minor customizations to names, pronouns, and a personal detail.",
  },
  {
    question: "Who is The Short Story for?",
    answer: "This micro-wedding officiant service is for ceremonies with up to 49 guests and no more than eight people in the processional, including the couple. It includes two hours of event-day service, with arrival one hour before the ceremony.",
  },
  {
    question: "Do you travel outside Topeka?",
    answer: "Yes. Travel throughout Topeka and Shawnee County is included. Travel of 30–60 miles is $50 per day, 61–100 miles is $100 per day, and overnight travel is quoted by event. The First Chapter is currently limited to Northeast Kansas couples; inquire if you are outside that area.",
  },
  {
    question: "Can you coordinate and officiate our wedding?",
    answer: "Yes. The Duology combines officiant and day-of coordination services for $1,100, bringing both services together in one streamlined experience.",
  },
  {
    question: "Do you support events other than weddings?",
    answer: "Yes. Event Services provides flexible planning and coordination support for moderately sized, local, private events throughout Topeka and Northeast Kansas. Services start at $40 per hour with a three-hour minimum. Inquire for more details, availability, and pricing.",
  },
  {
    question: "What should we arrange for our officiant service?",
    answer: "Bring a valid marriage license and follow the issuing court's instructions for returning it after signing. Audio-visual equipment is not included, so please arrange any microphones with your DJ or other audio provider. Officiant coverage does not include general wedding coordination or the full reception.",
  },
  {
    question: "Why hire a professional instead of asking a guest?",
    answer: "A trained coordinator becomes the point person for vendors and logistics, while a professional officiant guides the ceremony with warmth and clarity. The people on your guest list get to stay present and enjoy the celebration with you.",
  },
];
