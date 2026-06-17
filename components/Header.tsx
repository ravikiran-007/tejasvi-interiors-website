"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-pearl/92 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="group" onClick={() => setOpen(false)}>
          <span className="block text-lg font-semibold uppercase tracking-[0.22em] text-ink">
            {site.name}
          </span>
          <span className="mt-1 block text-[11px] font-medium uppercase tracking-[0.28em] text-bronze">
            Interiors
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition hover:text-bronze ${
                pathname === item.href ? "text-bronze" : "text-charcoal"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden min-h-11 items-center justify-center rounded-sm bg-ink px-5 text-sm font-semibold uppercase tracking-[0.16em] text-pearl transition hover:bg-bronze lg:inline-flex"
        >
          Request Quote
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-ink/15 text-ink lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-ink/10 bg-pearl px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-sm px-3 py-3 text-base font-medium ${
                  pathname === item.href ? "bg-linen text-bronze" : "text-charcoal"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
