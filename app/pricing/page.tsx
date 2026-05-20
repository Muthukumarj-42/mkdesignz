import Link from "next/link";
import { Check } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { pricingPlans } from "@/lib/data";

export const metadata = {
  title: "Pricing",
  description: "SaaS-style pricing packages for MK DESINGZ design, editing, branding, and content services in Indian Rupees."
};

export default function PricingPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple packages for single projects and monthly creative work."
            description="Start small, scale into a creator package, or build a premium monthly workflow with bulk discounts and priority support."
            align="center"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <Reveal
                key={plan.name}
                delay={index * 0.06}
                className={`rounded-[1.75rem] border p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium ${
                  plan.featured ? "border-ink bg-ink text-white" : "border-line bg-white text-ink"
                }`}
              >
                <p className={`text-sm font-bold uppercase tracking-[0.2em] ${plan.featured ? "text-cyan" : "text-royal"}`}>
                  {plan.name}
                </p>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
                  <span className={plan.featured ? "pb-2 text-white/65" : "pb-2 text-muted"}>/ month</span>
                </div>
                <p className={`mt-5 min-h-14 text-sm leading-7 ${plan.featured ? "text-white/72" : "text-muted"}`}>
                  {plan.description}
                </p>
                <div className="mt-7 grid gap-4">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-medium">
                      <span className={`flex h-6 w-6 items-center justify-center rounded-full ${plan.featured ? "bg-white text-ink" : "bg-royal/10 text-royal"}`}>
                        <Check size={15} />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link href="/contact" className={plan.featured ? "mt-8 inline-flex w-full justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5" : "btn-primary mt-8 w-full"}>
                  {plan.cta}
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 rounded-[1.5rem] border border-line bg-white p-6 text-center text-sm leading-7 text-muted shadow-sm">
            Bulk discounts are available for monthly thumbnails, shorts, social media posts, and agency white-label creative support.
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
