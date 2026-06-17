import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Tejasvi Interiors | Luxury Interior Design and Execution",
    template: "%s | Tejasvi Interiors"
  },
  description:
    "Tejasvi Interiors delivers premium modular kitchens, wardrobes, TV units, bedrooms, living rooms, and complete home interiors with 25+ years of experience.",
  keywords: [
    "Tejasvi Interiors",
    "interior design",
    "home interiors",
    "modular kitchens",
    "wardrobes",
    "luxury interiors",
    "interior execution"
  ],
  openGraph: {
    title: "Tejasvi Interiors",
    description: "Luxury interior design and execution for modern homes.",
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 1067,
        alt: "Luxury living room interior"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejasvi Interiors",
    description: "Premium interior design and execution with 25+ years of experience."
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: "Interior design and execution company with 25+ years of experience.",
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500072",
      addressCountry: "IN"
    },
    url: site.url,
    hasMap: site.maps,
    areaServed: "India",
    sameAs: [site.instagram]
  };

  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
