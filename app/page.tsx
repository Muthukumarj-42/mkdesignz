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
      <section className="relative overflow-hidden px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-16">
        <div className="creative-grid absolute inset-x-0 top-0 h-[520px] sm:h-[620px]" />
        <div className="container-premium relative grid min-h-[calc(100vh-6rem)] items-center gap-10 sm:gap-14 lg:grid-cols-[1fr_0.92fr] lg:py-8">
          <div className="mx-auto w-full max-w-2xl lg:mx-0">
            <MotionDiv
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="eyebrow">Creative design + web development</p>
              <h1 className="mt-4 max-w-4xl text-[clamp(2.85rem,13vw,5rem)] font-extrabold leading-[0.98] tracking-tight text-ink lg:text-7xl">
                Designs That Build Attention
              </h1>
              <p className="mt-5 max-w-2xl text-[clamp(1.02rem,4.2vw,1.25rem)] leading-8 text-muted md:leading-9">
                Helping creators, businesses, and brands grow with modern design, editing, branding, websites, and digital content solutions.
              </p>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-row">
                <Link href="/portfolio" className="btn-primary w-full gap-2 sm:w-auto">
                  View Portfolio <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn-secondary w-full sm:w-auto">
                  Hire Me
                </Link>
              </div>
            </MotionDiv>

            <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
              {heroStats.map((stat) => (
                <span key={stat} className="chip">
                  {stat}
                </span>
              ))}
            </div>
          </div>

          <MotionDiv
            className="relative mx-auto w-full max-w-xl lg:mx-0 lg:justify-self-end"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="soft-gradient absolute -inset-4 rounded-[2.5rem] sm:-inset-5" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-line bg-white p-2.5 shadow-premium sm:rounded-[2rem] sm:p-4">
              <div className="relative overflow-hidden rounded-[1.25rem] bg-ink p-4 text-white sm:rounded-[1.5rem] sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(35,184,212,0.26),transparent_24rem),radial-gradient(circle_at_82%_10%,rgba(91,53,213,0.24),transparent_22rem)]" />
                <div className="relative z-10 flex min-h-[410px] flex-col items-center justify-between gap-6 py-5 sm:min-h-[460px] sm:py-7">
                  <div className="flex flex-1 items-center justify-center">
                    <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/15 bg-white shadow-[0_30px_90px_rgba(255,255,255,0.18)] sm:h-56 sm:w-56">
                      <div className="relative h-36 w-36 overflow-hidden rounded-full bg-ink sm:h-44 sm:w-44">
                        <Image src="/logo.png" alt="MK DESINGZ brand showcase" fill priority className="object-contain p-3" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full rounded-[1.35rem] border border-white/10 bg-white p-3 text-ink shadow-soft sm:p-4">
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
                      {valueProps.map((item) => (
                        <div
                          key={item.title}
                          className="flex min-h-20 items-center gap-3 rounded-2xl border border-line bg-surface p-3 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-royal/10 text-royal">
                            <item.icon size={18} />
                          </span>
                          <p className="text-xs font-extrabold leading-4 text-ink">{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </div>
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
          <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {designMatters.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04} className="card-premium p-5 sm:p-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal/10 text-royal">
                  <item.icon size={25} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight text-ink sm:mt-6">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-muted">{item.description}</p>
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
          <div className="mt-10 sm:mt-14">
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
          <div className="mt-10 sm:mt-12">
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
