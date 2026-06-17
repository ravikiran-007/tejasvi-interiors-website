import type { Metadata } from "next";
import { TestimonialCards } from "@/components/TestimonialCards";
import { SectionIntro } from "@/components/SectionIntro";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read client testimonials for Tejasvi Interiors premium interior design and execution projects."
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-linen px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Testimonials"
            title="Homeowners choose Tejasvi Interiors for finish quality, clarity, and reliable execution."
            description="The best interiors are felt in the small daily details: smooth storage, right lighting, clean installation, and a space that feels quietly personal."
          />
        </div>
      </section>
      <section className="bg-pearl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <TestimonialCards />
        </div>
      </section>
    </>
  );
}
