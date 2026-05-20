import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

export const metadata = {
  title: "Services",
  description: "Premium design, editing, branding, social media, UI/UX, YouTube SEO, and creator content services by MK DESINGZ."
};

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Services"
            title="A complete creative desk for brands and creators."
            description="Choose focused one-off deliverables or build a monthly creative workflow for thumbnails, edits, identity, campaigns, and platform content."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.03} className="card-premium p-7">
                <div className="flex items-start justify-between gap-5">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/10 text-royal">
                    <service.icon size={24} />
                  </span>
                  <span className="rounded-full bg-surface px-3 py-1.5 text-xs font-bold text-ink">
                    From {service.price}
                  </span>
                </div>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-ink">{service.title}</h2>
                <p className="mt-4 text-sm leading-7 text-muted">{service.description}</p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-royal">
                  Request service <ArrowRight size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
