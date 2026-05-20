"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { portfolioCategories, portfolioItems, ShowcaseType, showcaseTabs } from "@/lib/data";
import { MotionDiv } from "./motion";

export function PortfolioFilter() {
  const [activeType, setActiveType] = useState<ShowcaseType>("design");
  const [active, setActive] = useState("All");
  const categories = portfolioCategories[activeType];
  const items = useMemo(
    () =>
      portfolioItems.filter(
        (item) => item.type === activeType && (active === "All" || item.category === active)
      ),
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

      <MotionDiv layout className="grid auto-rows-[290px] gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MotionDiv
            layout
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`group relative overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium ${"span" in item ? item.span : ""}`}
          >
            {"image" in item ? (
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
                    <div className="overflow-hidden rounded-xl bg-white p-4 transition duration-500 group-hover:scale-[1.03]">
                      <div className="h-5 w-2/3 rounded-full bg-ink" />
                      <div className="mt-3 h-3 w-full rounded-full bg-line" />
                      <div className="mt-2 h-3 w-3/4 rounded-full bg-line" />
                      <div className="mt-5 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-xl bg-royal/12" />
                        <div className="h-16 rounded-xl bg-cyan/14" />
                        <div className="h-16 rounded-xl bg-purple/12" />
                      </div>
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
                  </div>
                </div>
              </div>
            )}
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
}
