import type { Metadata } from "next";
import { ArrowLeft, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Inquiry Received | Finch and Folio Events",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="thanks-page">
      <section className="thanks-card">
        <Heart aria-hidden="true" />
        <h1>Your inquiry is on its way.</h1>
        <p>
          Thank you for telling me about your wedding or event. A confirmation has been
          sent to your email, and I&apos;ll review your details and follow up
          personally soon.
        </p>
        <a href="/"><ArrowLeft aria-hidden="true" /> Return to Finch and Folio Events</a>
      </section>
    </main>
  );
}
