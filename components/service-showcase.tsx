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
      <div className="mx-auto mb-10 grid max-w-2xl grid-cols-2 rounded-full border border-line bg-white p-1.5 shadow-sm">
        {showcaseTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative rounded-full px-3 py-3 text-sm font-extrabold tracking-tight transition sm:px-5 ${
              active === tab.id ? "text-white" : "text-muted hover:text-ink"
            }`}
          >
            {active === tab.id ? (
              <MotionDiv
                layoutId="service-active-tab"
                className="absolute inset-0 rounded-full bg-ink shadow-soft"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <span className="relative hidden sm:inline">{tab.label}</span>
            <span className="relative sm:hidden">{tab.shortLabel}</span>
          </button>
        ))}
      </div>

      <MotionDiv layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredServices.map((service, index) => (
          <Reveal
            key={service.title}
            delay={index * 0.03}
            className={`card-premium group flex h-full flex-col p-6 ${compact ? "lg:p-6" : "lg:p-7"}`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-royal/10 text-royal transition duration-300 group-hover:bg-ink group-hover:text-white">
                <service.icon size={23} />
              </span>
              <span className="rounded-full bg-surface px-3 py-1.5 text-xs font-extrabold text-ink">
                {service.price}
              </span>
            </div>
            <h3 className="mt-6 text-xl font-extrabold tracking-tight text-ink">
              {service.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-muted">{service.description}</p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-royal">
              Request quote <ArrowRight size={16} />
            </Link>
          </Reveal>
        ))}
      </MotionDiv>
    </div>
  );
}
