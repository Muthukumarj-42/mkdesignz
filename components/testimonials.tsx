"use client";

import { ExternalLink, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Social proof"
          title="Trusted by creators and brands."
          description="Clear feedback from partners, creators, and clients who needed stronger visual systems and professional web presence."
          align="center"
        />

        <div className="mt-10 -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:overflow-visible md:pb-0 md:grid md:grid-cols-2 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Reveal
              key={testimonial.name}
              delay={index * 0.05}
              className="card-premium flex min-w-[300px] shrink-0 flex-col justify-between bg-surface p-6 md:min-w-0 sm:p-8"
            >
              <div>
                <Quote size={28} className="text-royal/20" />
                <p className="mt-4 text-base font-semibold leading-8 text-ink italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-line/60 pt-5">
                <div>
                  <p className="text-sm font-extrabold text-ink">{testimonial.name}</p>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    {testimonial.role}
                  </p>
                </div>
                {testimonial.projectLink ? (
                  <a
                    href={testimonial.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View project for ${testimonial.name}`}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal transition hover:bg-ink hover:text-white"
                  >
                    <ExternalLink size={15} />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
