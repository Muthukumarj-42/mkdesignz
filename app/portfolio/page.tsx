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
            title="Creative work made to stop the scroll and build trust."
            description="A premium showcase of design directions for creators, businesses, brands, gaming channels, and digital campaigns."
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
