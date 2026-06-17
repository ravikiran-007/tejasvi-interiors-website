import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View the Tejasvi Interiors portfolio gallery of premium kitchens, bedrooms, living rooms, wardrobes, TV units, and complete home interiors."
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-ink px-5 py-20 text-pearl sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-champagne">
            Portfolio Gallery
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            A gallery of refined homes, premium finishes, and practical luxury.
          </h1>
        </div>
      </section>

      <section className="bg-pearl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Selected Work"
            title="Interior spaces shaped for comfort, detail, and everyday ease."
          />
          <div className="mt-12">
            <PortfolioGrid />
          </div>
        </div>
      </section>
    </>
  );
}
