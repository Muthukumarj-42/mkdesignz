import { CtaBand } from "@/components/cta-band";
import { PricingSwitcher } from "@/components/pricing-switcher";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Pricing",
  description: "SaaS-style pricing packages for MK Designz design, editing, branding, and content services in Indian Rupees."
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
        </div>
      </section>
      <CtaBand />
    </>
  );
}
