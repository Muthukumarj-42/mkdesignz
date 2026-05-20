import { CtaBand } from "@/components/cta-band";
import { ServiceShowcase } from "@/components/service-showcase";
import { SectionHeading } from "@/components/section-heading";

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
            title="A complete creative and web desk for modern brands."
            description="Choose design services for visual content or web solutions for polished websites, landing pages, and responsive digital experiences."
            align="center"
          />
          <div className="mt-14">
            <ServiceShowcase />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
