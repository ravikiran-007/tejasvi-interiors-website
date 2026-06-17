import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { SectionIntro } from "@/components/SectionIntro";
import { processSteps, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Tejasvi Interiors, a premium interior design and execution company with 25+ years of experience."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-ink px-5 py-20 text-pearl sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-champagne">
              About {site.name}
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Interior design backed by 25+ years of execution maturity.
            </h1>
            <p className="mt-6 text-lg leading-8 text-pearl/74">
              Tejasvi Interiors creates refined homes through a complete design-and-build approach.
              Our work blends space planning, material selection, modular production, installation,
              and finishing supervision into one accountable process.
            </p>
          </div>
          <div className="luxury-frame relative min-h-[430px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1500&q=82"
              alt="Premium interior design detail"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-linen px-5 py-6">
              <p className="text-4xl font-semibold text-ink">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-charcoal/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-linen px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionIntro
            eyebrow="Our Standard"
            title="Premium interiors should feel composed, practical, and personal."
            description="Every project is evaluated through real-life use: movement, storage, cleaning, lighting, family routines, and the way materials age over time."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Site-aware planning",
              "Premium finish coordination",
              "Durable modular systems",
              "Transparent project stages",
              "Detail-led installation",
              "Final quality review"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-pearl p-4">
                <Check className="h-5 w-5 text-bronze" aria-hidden="true" />
                <span className="font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Workflow"
            title="A disciplined process that keeps decisions clear."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="border border-ink/10 bg-pearl p-6 shadow-soft">
                <p className="text-sm font-semibold text-bronze">0{index + 1}</p>
                <h2 className="mt-5 text-xl font-semibold text-ink">{step.title}</h2>
                <p className="mt-3 text-sm leading-7 text-charcoal/70">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
