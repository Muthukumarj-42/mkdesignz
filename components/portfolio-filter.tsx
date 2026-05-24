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
  const [activeType, setActiveType] = useState<ShowcaseType>("web");
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
      <div className="mx-auto mb-6 grid max-w-2xl grid-cols-2 rounded-[1.25rem] border border-line bg-white p-1.5 shadow-sm sm:mb-7 sm:rounded-full">
        {showcaseTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveType(tab.id);
              setActive("All");
            }}
            className={`relative min-h-12 rounded-[1rem] px-3 py-3 text-sm font-extrabold transition sm:rounded-full sm:px-5 ${
              activeType === tab.id ? "text-white" : "text-muted hover:text-ink"
            }`}
          >
            {activeType === tab.id ? (
              <MotionDiv
                layoutId="portfolio-active-tab"
                className="absolute inset-0 rounded-[1rem] bg-ink shadow-soft sm:rounded-full"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <span className="relative hidden sm:inline">{tab.label}</span>
            <span className="relative sm:hidden">{tab.shortLabel}</span>
          </button>
        ))}
      </div>

      <div className="mb-8 -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-10 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`min-h-11 shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
              active === category
                ? "bg-ink text-white shadow-soft"
                : "border border-line bg-white text-muted hover:border-ink/20 hover:text-ink"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <MotionDiv layout className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MotionDiv
            layout
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="group flex min-h-[420px] flex-col overflow-hidden rounded-[1.35rem] border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium sm:rounded-[1.5rem]"
          >
            {"youtubeId" in item ? (
              <button
                type="button"
                onClick={() => setVideoId(item.youtubeId)}
                className="flex h-full flex-col text-left"
              >
                <div className="relative aspect-video overflow-hidden bg-ink">
                  <Image
                    src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/20" />
                  <span className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-ink shadow-soft transition group-hover:scale-110">
                    <Play size={22} fill="currentColor" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-ink">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-muted sm:text-sm sm:leading-6">{item.summary}</p>
                  <span className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-extrabold text-royal">
                    Watch preview <Play size={15} fill="currentColor" />
                  </span>
                </div>
              </button>
            ) : "image" in item ? (
              <>
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-contain p-2 transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal">{item.category}</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-ink sm:text-xl">{item.title}</h3>
                  <p className="mt-2 text-base leading-7 text-muted sm:text-sm sm:leading-6">{item.summary}</p>
                  {"url" in item ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-extrabold text-royal transition hover:text-ink"
                    >
                      {item.action} <ExternalLink size={14} />
                    </a>
                  ) : null}
                </div>
              </>
            ) : (
              <div className={`flex h-full flex-col bg-gradient-to-br ${item.accent} p-3 sm:p-5`}>
                <div className="flex h-full flex-col rounded-[1.2rem] border border-white/70 bg-white/92 p-4 shadow-soft sm:p-5">
                  <div className="rounded-2xl border border-line bg-ink p-2 shadow-soft">
                    <div className="mb-2 flex gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                    </div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white transition duration-500 group-hover:scale-[1.02]">
                      <iframe
                        src={item.url}
                        title={`${item.title} website preview`}
                        className="pointer-events-none absolute left-0 top-0 h-[455%] w-[455%] origin-top-left scale-[0.22] border-0 sm:h-[500%] sm:w-[500%] sm:scale-[0.2] lg:h-[555%] lg:w-[555%] lg:scale-[0.18]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-1 flex-col">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-royal">{item.category}</p>
                    <h3 className="mt-2 text-2xl font-extrabold text-ink sm:text-xl">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-muted sm:text-sm sm:leading-6">{item.summary}</p>
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
                      className="mt-auto inline-flex min-h-11 items-center gap-2 pt-5 text-sm font-extrabold text-royal transition hover:text-ink"
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
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/82 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-[calc(0.75rem+env(safe-area-inset-top))] backdrop-blur-sm sm:p-5" onClick={() => setVideoId(null)}>
          <MotionDiv
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[1.25rem] bg-black shadow-premium sm:rounded-[1.5rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoId(null)}
              className="absolute right-3 top-3 z-10 min-h-10 rounded-full bg-white px-4 py-2 text-xs font-extrabold text-ink shadow-soft sm:right-4 sm:top-4"
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
