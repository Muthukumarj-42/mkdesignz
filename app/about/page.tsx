import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { skills, timeline, tools } from "@/lib/data";

export const metadata = {
  title: "About",
  description: "Learn about MK DESINGZ, a premium creative freelance brand focused on modern design, content, branding, and client-focused workflows."
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-premium grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">About MK DESINGZ</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              A creative partner for brands that want to look credible everywhere.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              MK DESINGZ was built around a simple idea: strong visuals should make people pause, understand, and trust faster. The work blends design taste, content strategy, and practical delivery for creators, businesses, agencies, and startups.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="relative">
            <div className="soft-gradient absolute -inset-4 rounded-[2.5rem]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-4 shadow-premium">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-surface">
                <Image src="/logo.png" alt="MK DESINGZ professional brand mark" fill className="object-contain p-12" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium grid gap-10 lg:grid-cols-2">
          <Reveal className="card-premium p-8">
            <h2 className="text-3xl font-semibold tracking-tight text-ink">Mission</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              To help every client show up with visuals that are modern, intentional, and commercially useful, whether it is a single thumbnail or an entire monthly content system.
            </p>
          </Reveal>
          <Reveal className="card-premium p-8" delay={0.08}>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">Creative workflow</h2>
            <p className="mt-5 text-base leading-8 text-muted">
              Brief, research, concept, design, refine, deliver. Every project is handled with organized communication, clear files, platform-ready exports, and thoughtful revisions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-premium grid gap-12 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeading
            eyebrow="Experience"
            title="From creator assets to brand systems."
            description="The brand has evolved through content-focused design, identity work, editing support, and strategy-led creative delivery."
          />
          <div className="grid gap-5">
            {timeline.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05} className="card-premium p-6">
                <p className="text-sm font-bold text-royal">{item.year}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-premium grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">Skills</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-3xl font-semibold tracking-tight text-ink">Tools</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="chip">
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
