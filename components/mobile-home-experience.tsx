"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Play, Quote } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { designMatters, projectHighlights, testimonials } from "@/lib/data";
import { MotionDiv } from "./motion";

function useAutoIndex(length: number, delay = 3600) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % length);
    }, delay);

    return () => window.clearInterval(timer);
  }, [delay, length, paused]);

  return { index, setIndex, setPaused };
}

function Dots({
  active,
  count,
  onSelect
}: {
  active: number;
  count: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="mt-4 flex justify-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          aria-label={`Go to slide ${index + 1}`}
          onClick={() => onSelect(index)}
          className={`h-2 rounded-full transition-all ${
            active === index ? "w-7 bg-ink" : "w-2 bg-ink/20"
          }`}
        />
      ))}
    </div>
  );
}

export function MobileProjectSlider() {
  const { index, setIndex, setPaused } = useAutoIndex(projectHighlights.length, 3800);
  const [videoId, setVideoId] = useState<string | null>(null);
  const project = projectHighlights[index];

  const preview = useMemo(() => {
    if ("youtubeId" in project) {
      return (
        <button
          type="button"
          onClick={() => setVideoId(project.youtubeId)}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-[1.15rem] bg-ink"
        >
          <Image
            src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-soft">
            <Play size={20} fill="currentColor" />
          </span>
        </button>
      );
    }

    if ("image" in project) {
      return (
        <div className="relative aspect-[16/10] overflow-hidden rounded-[1.15rem] bg-surface">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-contain p-2"
          />
        </div>
      );
    }

    return (
      <div className={`rounded-[1.15rem] bg-gradient-to-br ${project.accent} p-3`}>
        <div className="rounded-2xl border border-white/70 bg-white p-2 shadow-soft">
          <div className="rounded-xl bg-ink p-2">
            <div className="mb-2 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
              <span className="h-2 w-2 rounded-full bg-white/40" />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-white">
              <iframe
                src={project.url}
                title={`${project.title} preview`}
                className="pointer-events-none absolute left-0 top-0 h-[455%] w-[455%] origin-top-left scale-[0.22] border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }, [project]);

  return (
    <section className="px-4 py-10 lg:hidden">
      <div className="mx-auto max-w-md">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Proof fast</p>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-ink">
              Real project work.
            </h2>
          </div>
          <Link href="/portfolio" className="text-sm font-extrabold text-royal">
            View all
          </Link>
        </div>

        <div
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="overflow-hidden rounded-[1.5rem] border border-line bg-white p-3 shadow-premium"
        >
          <MotionDiv
            key={project.title}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            {preview}
            <div className="p-3">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-royal">
                {project.category}
              </p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                {project.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted">{project.summary}</p>
              {"url" in project ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-5 w-full gap-2"
                >
                  View Full Project <ExternalLink size={16} />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => "youtubeId" in project && setVideoId(project.youtubeId)}
                  className="btn-primary mt-5 w-full gap-2"
                >
                  View Full Project <Play size={16} fill="currentColor" />
                </button>
              )}
            </div>
          </MotionDiv>
        </div>
        <Dots active={index} count={projectHighlights.length} onSelect={setIndex} />
      </div>

      {videoId ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/82 p-3 backdrop-blur-sm"
          onClick={() => setVideoId(null)}
        >
          <div
            className="relative w-full overflow-hidden rounded-[1.25rem] bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoId(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-ink"
            >
              Close
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Project video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export function MobileDesignImpactSlider() {
  const { index, setIndex, setPaused } = useAutoIndex(designMatters.length, 3400);
  const item = designMatters[index];

  return (
    <section className="bg-white px-4 py-10 lg:hidden">
      <div className="mx-auto max-w-md">
        <p className="eyebrow">Why it works</p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-ink">
          Design that earns trust faster.
        </h2>
        <div
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
          className="mt-6 overflow-hidden rounded-[1.5rem] border border-line bg-white p-5 shadow-premium"
        >
          <MotionDiv
            key={item.title}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal/10 text-royal">
              <item.icon size={25} />
            </span>
            <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-8 text-muted">{item.description}</p>
          </MotionDiv>
        </div>
        <Dots active={index} count={designMatters.length} onSelect={setIndex} />
      </div>
    </section>
  );
}

export function MobileTestimonials() {
  return (
    <section className="bg-white px-4 py-10 lg:hidden">
      <div className="mx-auto max-w-md">
        <p className="eyebrow">Social proof</p>
        <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-ink">
          Trusted by creators and brands.
        </h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="min-w-[82%] rounded-[1.35rem] border border-line bg-surface p-5"
            >
              <Quote size={22} className="text-royal" />
              <p className="mt-4 text-base font-semibold leading-7 text-ink">
                {testimonial.quote}
              </p>
              <p className="mt-5 text-sm font-extrabold text-ink">{testimonial.name}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-muted">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
