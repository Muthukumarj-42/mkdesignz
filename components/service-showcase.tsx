"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { services, ShowcaseType, showcaseTabs } from "@/lib/data";
import { MotionDiv } from "./motion";
import { Reveal } from "./reveal";

function useAutoIndex(length: number, delay = 3600) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex(0);
  }, [length]);

  useEffect(() => {
    if (paused || length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % length);
    }, delay);

    return () => window.clearInterval(timer);
  }, [delay, length, paused, index]);

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
    <div className="mt-5 flex justify-center gap-2">
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

type ServiceShowcaseProps = {
  compact?: boolean;
};

export function ServiceShowcase({ compact = false }: ServiceShowcaseProps) {
  const [active, setActive] = useState<ShowcaseType>("web");
  const filteredServices = useMemo(
    () => {
      const all = services.filter((service) => service.type === active);
      return compact ? all.slice(0, 4) : all;
    },
    [active, compact]
  );

  const { index, setIndex, setPaused } = useAutoIndex(filteredServices.length, 3800);
  const currentService = filteredServices[index];

  return (
    <div>
      <div className="mx-auto mb-8 grid max-w-2xl grid-cols-2 rounded-[1.25rem] border border-line bg-white p-1.5 shadow-sm sm:mb-10 sm:rounded-full">
        {showcaseTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative min-h-12 rounded-[1rem] px-3 py-3 text-sm font-extrabold tracking-tight transition sm:rounded-full sm:px-5 ${
              active === tab.id ? "text-white" : "text-muted hover:text-ink"
            }`}
          >
            {active === tab.id ? (
              <MotionDiv
                layoutId="service-active-tab"
                className="absolute inset-0 rounded-[1rem] bg-ink shadow-soft sm:rounded-full"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <span className="relative hidden sm:inline">{tab.label}</span>
            <span className="relative sm:hidden">{tab.shortLabel}</span>
          </button>
        ))}
      </div>

      {/* Mobile Carousel View */}
      {currentService ? (
        <div className="mx-auto max-w-md md:hidden">
          <div
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="overflow-hidden rounded-[1.5rem] border border-line bg-white p-3 shadow-premium"
          >
            <MotionDiv
              key={currentService.title}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(event, info) => {
                const swipeThreshold = 50;
                if (info.offset.x < -swipeThreshold) {
                  setIndex((val) => (val + 1) % filteredServices.length);
                } else if (info.offset.x > swipeThreshold) {
                  setIndex((val) => (val - 1 + filteredServices.length) % filteredServices.length);
                }
              }}
              className="cursor-grab active:cursor-grabbing flex min-h-[260px] flex-col p-4 sm:p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal/10 text-royal transition duration-300">
                  <currentService.icon size={26} />
                </span>
                {!compact && (
                  <span className="rounded-full bg-surface px-3 py-2 text-xs font-extrabold text-ink">
                    {currentService.price}
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-ink sm:text-xl">
                {currentService.title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-7 text-muted sm:text-sm">{currentService.description}</p>
              <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-royal">
                Request quote <ArrowRight size={16} />
              </Link>
            </MotionDiv>
          </div>
          <Dots active={index} count={filteredServices.length} onSelect={setIndex} />
        </div>
      ) : null}

      {/* Desktop Grid View */}
      <MotionDiv layout className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredServices.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 0.03}
            className={`card-premium group flex h-full flex-col p-5 sm:p-6 ${compact ? "lg:p-6" : "lg:p-7"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal/10 text-royal transition duration-300 group-hover:bg-ink group-hover:text-white">
                <service.icon size={26} />
              </span>
              {!compact && (
                <span className="rounded-full bg-surface px-3 py-2 text-xs font-extrabold text-ink">
                  {service.price}
                </span>
              )}
            </div>
            <h3 className="mt-5 text-2xl font-extrabold tracking-tight text-ink sm:mt-6 sm:text-xl">
              {service.title}
            </h3>
            <p className="mt-3 flex-1 text-base leading-7 text-muted sm:text-sm">{service.description}</p>
            <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-royal">
              Request quote <ArrowRight size={16} />
            </Link>
          </Reveal>
        ))}
      </MotionDiv>

      {compact && (
        <div className="mt-10 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-base font-extrabold text-royal transition hover:text-ink">
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </div>
  );
}
