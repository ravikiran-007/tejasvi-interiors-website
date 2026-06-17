import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { navItems, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-pearl">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div>
          <p className="text-xl font-semibold uppercase tracking-[0.22em]">{site.name}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-pearl/70">
            Premium interior design and execution for modern homes, led by {site.experience} of
            practical craft, project discipline, and refined material judgment.
          </p>
          <div className="mt-7 grid gap-3 text-sm text-pearl/75">
            <a className="flex items-center gap-3 hover:text-champagne" href={`tel:${site.phoneHref}`}>
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
            <a className="flex items-center gap-3 hover:text-champagne" href={`mailto:${site.email}`}>
              <Mail className="h-4 w-4" /> {site.email}
            </a>
            <a
              className="flex items-center gap-3 hover:text-champagne"
              href={site.maps}
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="h-4 w-4" /> {site.address}
            </a>
            <a
              className="flex items-center gap-3 hover:text-champagne"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-champagne">Pages</p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-pearl/75 hover:text-champagne">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-champagne">Services</p>
          <div className="mt-5 grid gap-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="text-sm text-pearl/75 hover:text-champagne"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-pearl/10 px-5 py-5 text-center text-xs text-pearl/55 sm:px-8">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
