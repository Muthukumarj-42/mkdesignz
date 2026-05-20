"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { buildWhatsappUrl } from "@/lib/data";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hi MK DESINGZ, I'm interested in your services.",
      "",
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Service: ${form.get("service")}`,
      `Budget: ${form.get("budget")}`,
      `Project Details: ${form.get("details")}`
    ].join("\n");

    setStatus("Opening WhatsApp with your project details...");
    window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="card-premium p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Name
          <input name="name" required className="field" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Email
          <input name="email" type="email" required className="field" placeholder="you@example.com" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Service type
          <select name="service" required className="field">
            <option value="">Select a service</option>
            <option>Graphic Design</option>
            <option>Thumbnail Design</option>
            <option>Video Editing</option>
            <option>Branding</option>
            <option>Social Media Design</option>
            <option>UI/UX Design</option>
            <option>Motion Graphics</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Budget
          <select name="budget" required className="field">
            <option value="">Select budget</option>
            <option>Under ₹1,000</option>
            <option>₹1,000 - ₹5,000</option>
            <option>₹5,000 - ₹15,000</option>
            <option>₹15,000+</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-ink sm:col-span-2">
          Project details
          <textarea
            name="details"
            required
            rows={6}
            className="field resize-none"
            placeholder="Tell me about your project, timeline, platform, and reference style."
          />
        </label>
      </div>
      <button type="submit" className="btn-primary mt-6 w-full gap-2 sm:w-auto">
        Send to WhatsApp <Send size={17} />
      </button>
      {status ? <p className="mt-4 text-sm font-medium text-royal">{status}</p> : null}
    </form>
  );
}
