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
      "Hi MK Designz, I want to discuss a project.",
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
        <label className="grid gap-2 text-base font-extrabold text-ink sm:text-sm">
          Name
          <input name="name" required className="field" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-base font-extrabold text-ink sm:text-sm">
          Email
          <input name="email" type="email" required className="field" placeholder="you@example.com" />
        </label>
        <label className="grid gap-2 text-base font-extrabold text-ink sm:text-sm">
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
        <label className="grid gap-2 text-base font-extrabold text-ink sm:text-sm">
          Related service
          <select name="service" required className="field">
            {serviceTypes[mainType].map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-base font-extrabold text-ink sm:text-sm">
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
        <label className="grid gap-2 text-base font-extrabold text-ink sm:text-sm">
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
        <label className="grid gap-2 text-base font-extrabold text-ink sm:col-span-2 sm:text-sm">
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
      <div className="sticky bottom-3 z-10 mt-6 rounded-full bg-white/80 p-1 backdrop-blur sm:static sm:bg-transparent sm:p-0">
        <button type="submit" className="btn-primary w-full gap-2 sm:w-auto">
        Send to WhatsApp <Send size={17} />
        </button>
      </div>
      {status ? <p className="mt-4 text-sm font-semibold text-royal">{status}</p> : null}
    </form>
  );
}
