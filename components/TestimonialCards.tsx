import { Quote } from "lucide-react";
import { testimonials } from "@/lib/site";

export function TestimonialCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <figure key={testimonial.name} className="bg-pearl p-6 shadow-soft">
          <Quote className="h-8 w-8 text-champagne" aria-hidden="true" />
          <blockquote className="mt-5 text-base leading-8 text-charcoal/78">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-6">
            <p className="font-semibold text-ink">{testimonial.name}</p>
            <p className="mt-1 text-sm text-bronze">{testimonial.role}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
