"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { buildWhatsappUrl } from "@/lib/data";

const serviceTypes = {
  Design: ["Thumbnail Design", "Branding", "Video Editing", "Shorts Editing", "Overlays", "Banner Design"],
  "Web Development": ["Landing Page", "Portfolio Website", "Business Website", "UI/UX Design"]
};

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [mainType, setMainType] = useState<keyof typeof serviceTypes>("Design");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hi MK DESINGZ, I want to discuss a project.",
      "",
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Main Service: ${form.get("mainService")}`,
      `Service Type: ${form.get("service")}`,
      `Budget: ${form.get("budget")}`,
      `Timeline: ${form.get("timeline")}`,
      `Project Details: ${form.get("details")}`
    ].join("\n");

    setStatus("Opening WhatsApp with your project details...");
    window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="card-premium p-5 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-ink">
          Name
          <input name="name" required className="field" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Email
          <input name="email" type="email" required className="field" placeholder="you@example.com" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Main selection
          <select
            name="mainService"
            required
            className="field"
            value={mainType}
            onChange={(event) => setMainType(event.target.value as keyof typeof serviceTypes)}
          >
            <option>Design</option>
            <option>Web Development</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Related service
          <select name="service" required className="field">
            {serviceTypes[mainType].map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Budget
          <select name="budget" required className="field">
            <option value="">Select budget</option>
            <option>Under ₹500</option>
            <option>₹500 - ₹2,000</option>
            <option>₹2,000 - ₹5,000</option>
            <option>₹5,000 - ₹10,000</option>
            <option>₹10,000+</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink">
          Timeline
          <select name="timeline" required className="field">
            <option value="">Select timeline</option>
            <option>Urgent</option>
            <option>2-3 days</option>
            <option>1 week</option>
            <option>2-4 weeks</option>
            <option>Flexible</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-bold text-ink sm:col-span-2">
          Project details
          <textarea
            name="details"
            required
            rows={6}
            className="field resize-none"
            placeholder="Tell me about your project, timeline, platform, references, and final delivery needs."
          />
        </label>
      </div>
      <button type="submit" className="btn-primary mt-6 w-full gap-2 sm:w-auto">
        Send to WhatsApp <Send size={17} />
      </button>
      {status ? <p className="mt-4 text-sm font-semibold text-royal">{status}</p> : null}
    </form>
  );
}
