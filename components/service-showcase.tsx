"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { services, ShowcaseType, showcaseTabs } from "@/lib/data";
import { MotionDiv } from "./motion";
import { Reveal } from "./reveal";

type ServiceShowcaseProps = {
  compact?: boolean;
};

export function ServiceShowcase({ compact = false }: ServiceShowcaseProps) {
  const [active, setActive] = useState<ShowcaseType>("design");
  const filteredServices = useMemo(
    () => services.filter((service) => service.type === active),
    [active]
  );

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

      <MotionDiv layout className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
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
              <span className="rounded-full bg-surface px-3 py-2 text-xs font-extrabold text-ink">
                {service.price}
              </span>
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
    </div>
  );
}
