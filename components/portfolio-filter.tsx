"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { portfolioCategories, portfolioItems } from "@/lib/data";
import { MotionDiv } from "./motion";

export function PortfolioFilter() {
  const [active, setActive] = useState("All");
  const items = useMemo(
    () => portfolioItems.filter((item) => active === "All" || item.category === active),
    [active]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {portfolioCategories.map((category) => (
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

      <MotionDiv layout className="grid auto-rows-[270px] gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MotionDiv
            layout
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`group relative overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-sm ${item.span}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-ink/10 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">{item.category}</p>
              <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            </div>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
}
