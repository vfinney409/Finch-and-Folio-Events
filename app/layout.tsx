import type { Metadata } from "next";
import { business } from "./site-content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(business.website),
  title: "Finch and Folio Events | Topeka Wedding & Event Services",
  description:
    "Wedding planning guidance, micro-wedding and custom officiant services, day-of coordination, and event support in Topeka and Northeast Kansas.",
  alternates: { canonical: "/" },
  keywords: [
    "Topeka wedding coordinator",
    "Kansas wedding officiant",
    "day-of wedding coordination",
    "Northeast Kansas weddings",
    "Finch and Folio Events",
    "Topeka event services",
  ],
  authors: [{ name: business.name }],
  openGraph: {
    title: business.name,
    siteName: business.name,
    description: "Wedding & Event Services · Topeka and Northeast Kansas",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description: "Wedding & Event Services · Topeka and Northeast Kansas",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
