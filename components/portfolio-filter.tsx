"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import {
  designMediaProjects,
  designPortfolioItems,
  portfolioCategories,
  ShowcaseType,
  showcaseTabs,
  webPortfolioItems
} from "@/lib/data";
import { MotionDiv } from "./motion";

export function PortfolioFilter() {
  const [activeType, setActiveType] = useState<ShowcaseType>("design");
  const [active, setActive] = useState("All");
  const [videoId, setVideoId] = useState<string | null>(null);
  const categories = portfolioCategories[activeType];
  const items = useMemo(
    () => {
      const source =
        activeType === "design"
          ? [...designPortfolioItems, ...designMediaProjects]
          : [...webPortfolioItems];

      return source.filter((item) => active === "All" || item.category === active);
    },
    [active, activeType]
  );

  return (
    <div>
      <div className="mx-auto mb-7 grid max-w-2xl grid-cols-2 rounded-full border border-line bg-white p-1.5 shadow-sm">
        {showcaseTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveType(tab.id);
              setActive("All");
            }}
            className={`relative rounded-full px-3 py-3 text-sm font-extrabold transition sm:px-5 ${
              activeType === tab.id ? "text-white" : "text-muted hover:text-ink"
            }`}
          >
            {activeType === tab.id ? (
              <MotionDiv
                layoutId="portfolio-active-tab"
                className="absolute inset-0 rounded-full bg-ink shadow-soft"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <span className="relative hidden sm:inline">{tab.label}</span>
            <span className="relative sm:hidden">{tab.shortLabel}</span>
          </button>
        ))}
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              active === category
                ? "bg-ink text-white shadow-soft"
                : "border border-line bg-white text-muted hover:border-ink/20 hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <MotionDiv layout className="grid auto-rows-[320px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MotionDiv
            layout
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`group relative overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium ${"span" in item ? item.span : ""}`}
          >
            {"youtubeId" in item ? (
              <button
                type="button"
                onClick={() => setVideoId(item.youtubeId)}
                className="absolute inset-0 text-left"
              >
                <Image
                  src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/86 via-ink/18 to-transparent" />
                <span className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink shadow-soft transition group-hover:scale-110">
                  <Play size={22} fill="currentColor" />
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{item.summary}</p>
                </div>
              </button>
            ) : "image" in item ? (
              <>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/10 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">{item.category}</p>
                  <h3 className="mt-2 text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/75">{item.summary}</p>
                  {"url" in item ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-ink transition hover:-translate-y-0.5"
                    >
                      {item.action} <ExternalLink size={14} />
                    </a>
                  ) : null}
                </div>
              </>
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} p-5`}>
                <div className="flex h-full flex-col justify-between rounded-[1.2rem] border border-white/70 bg-white/88 p-5 shadow-soft">
                  <div className="rounded-2xl border border-line bg-ink p-2 shadow-soft">
                    <div className="mb-2 flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                    </div>
                    <div className="relative h-28 overflow-hidden rounded-xl bg-white transition duration-500 group-hover:scale-[1.03]">
                      <iframe
                        src={item.url}
                        title={`${item.title} website preview`}
                        className="pointer-events-none h-[420px] w-[720px] origin-top-left scale-[0.18] border-0"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal">{item.category}</p>
                    <h3 className="mt-2 text-xl font-extrabold text-ink">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span key={tech} className="rounded-full bg-surface px-2.5 py-1 text-[11px] font-bold text-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-extrabold text-white transition hover:-translate-y-0.5"
                    >
                      Visit Website <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </MotionDiv>
        ))}
      </MotionDiv>

      {videoId ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/80 p-5 backdrop-blur-sm" onClick={() => setVideoId(null)}>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] bg-black shadow-premium"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoId(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-ink shadow-soft"
            >
              Close
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="MK Designz video preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </MotionDiv>
        </div>
      ) : null}
    </div>
  );
}
