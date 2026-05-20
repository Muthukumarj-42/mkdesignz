import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { CtaBand } from "@/components/cta-band";
import { MotionDiv } from "@/components/motion";
import { PortfolioFilter } from "@/components/portfolio-filter";
import { Reveal } from "@/components/reveal";
import { ServiceShowcase } from "@/components/service-showcase";
import { SectionHeading } from "@/components/section-heading";
import { counters, designMatters, heroStats, reasons, valueProps } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="creative-grid absolute inset-x-0 top-0 h-[620px]" />
        <div className="container-premium relative grid items-center gap-14 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow">Creative design + web development</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-extrabold tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Designs That Build Attention
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl md:leading-9">
                Helping creators, businesses, and brands grow with modern design, editing, branding, websites, and digital content solutions.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/portfolio" className="btn-primary gap-2">
                  View Portfolio <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Hire Me
                </Link>
              </div>
            </MotionDiv>

            <div className="mt-10 flex flex-wrap gap-3">
              {heroStats.map((stat) => (
                <span key={stat} className="chip">
                  {stat}
                </span>
              ))}
            </div>
          </div>

          <MotionDiv
            className="relative"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="soft-gradient absolute -inset-5 rounded-[2.5rem]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-4 shadow-premium">
              <div className="grid gap-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-surface">
                  <Image src="/portfolio/mapla-gaming.jpg" alt="MK DESINGZ creative preview" fill priority className="object-cover" />
                </div>
                <div className="grid gap-3 sm:grid-cols-5">
                  {valueProps.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-line bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                      <item.icon size={20} className="text-royal" />
                      <p className="mt-3 text-xs font-extrabold leading-5 text-ink">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Design impact"
            title="Why Great Design Matters"
            description="Great design is more than decoration. It builds confidence, creates recognition, improves performance, and makes every client touchpoint feel intentional."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {designMatters.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="card-premium p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/10 text-royal">
                  <item.icon size={23} />
                </span>
                <h3 className="mt-6 text-lg font-extrabold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Services"
            title="Creative and web support for every growth channel."
            description="Switch between design services and web solutions. Each offer is built to help your brand look sharper, feel more credible, and convert better."
            align="center"
          />
          <div className="mt-14">
            <ServiceShowcase compact />
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work with real creative range."
            description="A clean showcase across thumbnails, branding, creator visuals, motion-led assets, UI direction, and social content."
            align="center"
          />
          <div className="mt-12">
            <PortfolioFilter />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
            <SectionHeading
              eyebrow="Why choose us"
              title="Trust-building creative that understands attention and conversion."
              description="Professional design and websites need to guide the viewer, support your offer, and fit the platform where your audience spends time."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason, index) => (
                <Reveal key={reason.title} delay={index * 0.04} className="card-premium p-6">
                  <reason.icon size={24} className="text-royal" />
                  <h3 className="mt-5 text-lg font-extrabold text-ink">{reason.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{reason.description}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {counters.map((counter) => (
              <Reveal key={counter.label} className="rounded-[1.5rem] border border-line bg-surface p-8 text-center">
                <p className="text-4xl font-semibold text-ink md:text-5xl">
                  <AnimatedCounter value={counter.value} suffix={counter.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted">{counter.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium grid gap-8 lg:grid-cols-3">
          {["Businesses", "YouTubers", "Startups"].map((client) => (
            <Reveal key={client} className="card-premium p-7">
              <CheckCircle2 className="text-cyan" size={24} />
              <h3 className="mt-5 text-xl font-semibold text-ink">Built for {client}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                Clear visual systems, platform-ready content, and polished creative output that makes your brand easier to trust.
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
