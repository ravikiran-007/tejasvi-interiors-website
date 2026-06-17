import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionIntro } from "@/components/SectionIntro";
import { TestimonialCards } from "@/components/TestimonialCards";
import { processSteps, reasons, services, site, stats } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-pearl">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=82"
            alt="Premium living room designed by Tejasvi Interiors"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.54]"
          />
          <div className="absolute inset-0 bg-ink/62" />
        </div>
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl content-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.75fr] lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-champagne">
              {site.experience} of Interior Design and Execution
            </p>
            <h1 className="mt-6 text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
              Tejasvi Interiors
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-pearl/82 sm:text-xl">
              Luxury home interiors shaped with measured design, premium materials, and dependable
              execution from concept to handover.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="secondary">
                Request Quote
              </ButtonLink>
              <ButtonLink href="/portfolio" variant="light">
                View Portfolio
              </ButtonLink>
            </div>
          </div>
          <div className="hidden self-end border-l border-champagne/40 pl-8 lg:block">
            <p className="max-w-sm text-2xl font-light leading-10 text-pearl/85">
              Premium kitchens, wardrobes, bedrooms, living rooms, TV units, and complete home
              interiors for refined everyday living.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-bronze/40 bg-linen px-5 py-6">
              <p className="text-4xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-charcoal/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Services"
            title="Complete interior solutions for every part of your home."
            description="Each service is designed around proportion, utility, material life, and the quiet luxury that makes a home feel composed."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="group overflow-hidden bg-linen shadow-soft">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={`${service.title} by Tejasvi Interiors`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Icon className="h-7 w-7 text-bronze" aria-hidden="true" />
                    <h3 className="mt-5 text-2xl font-semibold text-ink">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-charcoal/70">{service.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linen px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionIntro
              eyebrow="Why Tejasvi"
              title="A mature execution partner for homes that need refinement and reliability."
              description="With 25+ years in the field, Tejasvi Interiors brings the kind of practical judgment that makes premium design buildable, maintainable, and lasting."
            />
            <div className="mt-8 grid gap-4">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-ink text-champagne">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">{reason.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-charcoal/70">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="luxury-frame relative min-h-[520px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1500&q=82"
              alt="Luxury bedroom interior execution"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionIntro
              eyebrow="Portfolio"
              title="Homes crafted with warm materials, clean lines, and considered detail."
            />
            <ButtonLink href="/portfolio" variant="ghost">
              See Gallery
            </ButtonLink>
          </div>
          <div className="mt-12">
            <PortfolioGrid limit={3} />
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-pearl sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">
                Process
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Clear steps from first conversation to final handover.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <div key={step.title} className="border border-pearl/12 p-5">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-champagne">0{index + 1}</span>
                    <CheckCircle2 className="h-5 w-5 text-champagne" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-pearl/68">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linen px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Testimonials"
            title="Trusted by homeowners who value finish quality and follow-through."
            align="center"
          />
          <div className="mt-12">
            <TestimonialCards />
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionIntro
            eyebrow="Request a Quote"
            title="Tell us about your home. We will help shape the next step."
            description="Share your service requirement, location, and timeline. The form opens a WhatsApp request so the conversation can continue quickly."
          />
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
