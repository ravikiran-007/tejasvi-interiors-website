import Image from "next/image";
import { portfolio } from "@/lib/site";

type PortfolioGridProps = {
  limit?: number;
};

export function PortfolioGrid({ limit }: PortfolioGridProps) {
  const items = typeof limit === "number" ? portfolio.slice(0, limit) : portfolio;

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="group overflow-hidden bg-pearl shadow-soft">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={item.image}
              alt={`${item.title} by Tejasvi Interiors`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-bronze">{item.category}</p>
            <h3 className="mt-3 text-xl font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm text-charcoal/65">{item.location}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
