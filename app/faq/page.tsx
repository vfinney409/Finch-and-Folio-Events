import { InteriorPage } from "@/components/interior-page";
import { faqs } from "@/app/site-content";
export const metadata = { title: "Wedding FAQ | Finch and Folio Events", description: "Answers about coordination, officiant services, and travel.", alternates: { canonical: "/faq" } };
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};
export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><InteriorPage page="faq" /></>;
}
