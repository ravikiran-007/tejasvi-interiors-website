import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  const href = `https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Tejasvi Interiors on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1f8f52] text-white shadow-soft transition hover:scale-105 hover:bg-[#187642]"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
