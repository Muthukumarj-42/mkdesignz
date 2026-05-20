import { CtaBand } from "@/components/cta-band";
import { PricingSwitcher } from "@/components/pricing-switcher";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { webPricing } from "@/lib/data";

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
            title="Simple pricing for design work and modern websites."
            description="Switch between design pricing and web development pricing. Domain charges are separate and can be purchased by the client."
            align="center"
          />
          <div className="mt-14">
            <PricingSwitcher />
          </div>
          <div className="mt-10 rounded-[1.5rem] border border-line bg-white p-6 text-center text-sm leading-7 text-muted shadow-sm">
            Bulk discounts are available for monthly thumbnails, shorts, social media posts, and agency white-label creative support.
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {webPricing.map((price) => (
              <Reveal key={price} className="rounded-[1.5rem] border border-line bg-white p-6 text-center shadow-sm">
                <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-royal">Web solution</p>
                <p className="mt-3 text-lg font-extrabold text-ink">{price}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
