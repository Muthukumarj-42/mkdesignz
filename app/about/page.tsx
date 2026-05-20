import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skills, timeline, toolGroups } from "@/lib/data";

export const metadata = {
  title: "About",
  description: "Learn about MK DESINGZ, a premium creative and web development freelance brand."
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-premium grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">About MK DESINGZ</p>
            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-ink md:text-7xl">
              A creative and web partner for brands that want to look credible everywhere.
            </h1>
            <p className="mt-7 text-lg leading-9 text-muted md:text-xl">
              MK DESINGZ blends design taste, content strategy, web structure, and practical delivery for creators, businesses, agencies, and startups that need stronger visual presence.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink p-8 shadow-premium">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(35,184,212,0.22),transparent_24rem),radial-gradient(circle_at_90%_20%,rgba(91,53,213,0.22),transparent_22rem)]" />
              <div className="relative mx-auto flex aspect-square max-w-sm items-center justify-center rounded-full border border-white/10 bg-white shadow-[0_28px_80px_rgba(255,255,255,0.14)]">
                <div className="relative h-56 w-56 overflow-hidden rounded-full bg-ink">
                  <Image src="/logo.png" alt="MK DESINGZ professional brand mark" fill className="object-contain p-5" />
                </div>
              </div>
              <p className="relative mt-8 text-center text-sm font-extrabold uppercase tracking-[0.24em] text-white/70">
                Creative identity + web presence
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-ink text-white">
        <div className="container-premium grid gap-10 lg:grid-cols-2">
          <Reveal className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-4xl font-extrabold tracking-tight">Mission</h2>
            <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">
              To help every client show up with visuals and websites that are modern, intentional, commercially useful, and easy to trust.
            </p>
          </Reveal>
          <Reveal className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8" delay={0.08}>
            <h2 className="text-4xl font-extrabold tracking-tight">Creative workflow</h2>
            <p className="mt-5 text-base leading-8 text-white/68 md:text-lg">
              Brief, research, concept, build, refine, deliver. Every project is organized around clear communication, platform-ready exports, and thoughtful revisions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-royal">Journey</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
              A roadmap from learning design to building digital brands.
            </h2>
            <p className="mt-6 text-lg leading-9 text-muted">
              The MK Designz journey has moved through design practice, creator work, freelancing, web development, and brand building.
            </p>
          </Reveal>
          <div className="relative mt-16">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan via-line to-purple lg:left-1/2" />
            <div className="grid gap-8">
              {timeline.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 0.05}
                  className={`relative grid gap-5 lg:grid-cols-2 ${index % 2 === 0 ? "" : "lg:[&>div]:col-start-2"}`}
                >
                  <div className="ml-12 rounded-[1.5rem] border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium lg:ml-0">
                    <span className="absolute left-3 top-7 h-4 w-4 rounded-full border-4 border-white bg-cyan shadow-soft lg:left-1/2 lg:-translate-x-1/2" />
                    <p className="text-sm font-extrabold text-royal">{item.year}</p>
                    <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium">
          <SectionHeading
            eyebrow="Skills & tools"
            title="A practical creative stack for design and development."
            description="A focused toolset for fast creative delivery, polished websites, responsive layouts, editing, motion, and brand systems."
            align="center"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {toolGroups.map((group) => (
              <Reveal key={group.title} className="card-premium p-7">
                <h3 className="text-3xl font-extrabold tracking-tight text-ink">{group.title}</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.tools.map((tool) => (
                    <div key={tool} className="rounded-2xl border border-line bg-surface p-4 text-sm font-extrabold text-ink transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-soft">
                      {tool}
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
