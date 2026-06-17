import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const styles = {
    primary: "bg-ink text-pearl hover:bg-bronze",
    secondary: "bg-champagne text-ink hover:bg-bronze hover:text-pearl",
    ghost: "border border-ink/20 text-ink hover:border-bronze hover:text-bronze",
    light: "border border-pearl/35 text-pearl hover:border-champagne hover:text-champagne"
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 text-sm font-semibold uppercase tracking-[0.18em] transition ${styles[variant]}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
