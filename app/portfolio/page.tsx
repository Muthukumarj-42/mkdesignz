import { CtaBand } from "@/components/cta-band";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Portfolio",
  description: "Explore MK DESINGZ portfolio work across thumbnails, branding, UI design, social media, and motion graphics."
};

export default function PortfolioPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Portfolio"
            title="Design work and web experiences built for modern clients."
            description="Switch between creative design projects and web solution previews, including thumbnails, branding, landing pages, portfolio sites, and SaaS-style interfaces."
            align="center"
          />
          <div className="mt-12">
            <PortfolioFilter />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
