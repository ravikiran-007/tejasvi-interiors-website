import type { Metadata } from "next";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionIntro } from "@/components/SectionIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Tejasvi Interiors to request a quote for modular kitchens, wardrobes, TV units, bedrooms, living rooms, and complete home interiors."
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-linen px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionIntro
              eyebrow="Contact"
              title="Start your interior project with a clear quote request."
              description="Share your service requirement, site location, and preferred timeline. We will continue the conversation on WhatsApp for a quick response."
            />
            <div className="mt-10 grid gap-4">
              <a href={`tel:${site.phoneHref}`} className="flex items-center gap-4 bg-pearl p-5 shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center bg-ink text-champagne">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-charcoal/60">Phone</span>
                  <span className="font-semibold text-ink">{site.phone}</span>
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 bg-pearl p-5 shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center bg-ink text-champagne">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-charcoal/60">Email</span>
                  <span className="font-semibold text-ink">{site.email}</span>
                </span>
              </a>
              <a
                href={site.maps}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-pearl p-5 shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-ink text-champagne">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-charcoal/60">Location</span>
                  <span className="font-semibold text-ink">{site.address}</span>
                </span>
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-pearl p-5 shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center bg-ink text-champagne">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm text-charcoal/60">Instagram</span>
                  <span className="font-semibold text-ink">@tejasvi.interiors</span>
                </span>
              </a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
