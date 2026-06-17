import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionIntro } from "@/components/SectionIntro";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Tejasvi Interiors services including modular kitchens, wardrobes, TV units, bedrooms, living rooms, and complete home interiors."
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-linen px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Services"
            title="Design and execution services for complete premium homes."
            description="From a focused modular kitchen to an entire residence, every service is planned for proportion, comfort, storage, and long-term finish quality."
          />
        </div>
      </section>

      <section className="bg-pearl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="grid gap-0 overflow-hidden bg-linen shadow-soft lg:grid-cols-2"
              >
                <div className={`relative min-h-[320px] ${index % 2 ? "lg:order-2" : ""}`}>
                  <Image
                    src={service.image}
                    alt={`${service.title} interior service`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-10">
                  <Icon className="h-8 w-8 text-bronze" aria-hidden="true" />
                  <h2 className="mt-5 text-3xl font-semibold text-ink">{service.title}</h2>
                  <p className="mt-4 text-base leading-8 text-charcoal/72">{service.description}</p>
                  <div className="mt-7">
                    <ButtonLink href="/contact" variant="primary">
                      Request Quote
                    </ButtonLink>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
