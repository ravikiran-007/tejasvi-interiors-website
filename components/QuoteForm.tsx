"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { services, site } from "@/lib/site";

export function QuoteForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const service = String(form.get("service") || "");
    const message = String(form.get("message") || "");
    const text = encodeURIComponent(
      `Quote request for Tejasvi Interiors\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
    );

    window.open(`https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${text}`, "_blank", "noopener,noreferrer");
    setStatus("Your quote request is ready in WhatsApp.");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 bg-ink p-5 text-pearl shadow-soft sm:p-8">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-pearl/80">
          Full name
        </label>
        <input
          id="name"
          name="name"
          required
          className="min-h-12 rounded-sm border border-pearl/15 bg-pearl/8 px-4 text-pearl outline-none transition placeholder:text-pearl/40 focus:border-champagne"
          placeholder="Your name"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-pearl/80">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="min-h-12 rounded-sm border border-pearl/15 bg-pearl/8 px-4 text-pearl outline-none transition placeholder:text-pearl/40 focus:border-champagne"
          placeholder="+91"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="service" className="text-sm font-medium text-pearl/80">
          Service
        </label>
        <select
          id="service"
          name="service"
          required
          className="min-h-12 rounded-sm border border-pearl/15 bg-ink px-4 text-pearl outline-none transition focus:border-champagne"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-pearl/80">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="rounded-sm border border-pearl/15 bg-pearl/8 px-4 py-3 text-pearl outline-none transition placeholder:text-pearl/40 focus:border-champagne"
          placeholder="Tell us about your space, location, and timeline."
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-champagne px-6 text-sm font-semibold uppercase tracking-[0.18em] text-ink transition hover:bg-bronze hover:text-pearl"
      >
        Send Request
        <Send className="h-4 w-4" aria-hidden="true" />
      </button>
      {status ? <p className="text-sm text-champagne">{status}</p> : null}
    </form>
  );
}
