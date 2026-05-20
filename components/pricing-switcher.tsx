"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useMemo, useState } from "react";
import { MotionDiv } from "./motion";
import { pricingPlans, ShowcaseType, showcaseTabs } from "@/lib/data";

export function PricingSwitcher() {
  const [active, setActive] = useState<ShowcaseType>("design");
  const plans = useMemo(
    () => pricingPlans.filter((plan) => plan.type === active),
    [active]
  );

  return (
    <div>
      <div className="mx-auto mb-8 grid max-w-2xl grid-cols-2 rounded-[1.25rem] border border-line bg-white p-1.5 shadow-sm sm:mb-12 sm:rounded-full">
        {showcaseTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`relative min-h-12 rounded-[1rem] px-2 py-3 text-xs font-extrabold tracking-tight transition sm:rounded-full sm:px-5 sm:text-sm ${
              active === tab.id ? "text-white" : "text-muted hover:text-ink"
            }`}
          >
            {active === tab.id ? (
              <MotionDiv
                layoutId="pricing-active-tab"
                className="absolute inset-0 rounded-[1rem] bg-ink shadow-soft sm:rounded-full"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <span className="relative">
              {tab.id === "design" ? "Design Pricing" : "Web Pricing"}
            </span>
          </button>
        ))}
      </div>

      <MotionDiv layout className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          (() => {
            const featured = "featured" in plan && plan.featured;
            return (
          <MotionDiv
            layout
            key={plan.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className={`rounded-[1.5rem] border p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium sm:rounded-[1.75rem] sm:p-7 ${
              featured ? "border-ink bg-ink text-white" : "border-line bg-white text-ink"
            }`}
          >
            <p className={`text-sm font-extrabold uppercase tracking-[0.2em] ${featured ? "text-cyan" : "text-royal"}`}>
              {plan.name}
            </p>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-4xl font-extrabold tracking-tight sm:text-5xl">{plan.price}</span>
              <span className={featured ? "pb-2 text-white/65" : "pb-2 text-muted"}>starting</span>
            </div>
            <p className={`mt-5 text-base leading-8 sm:min-h-16 ${featured ? "text-white/72" : "text-muted"}`}>
              {plan.description}
            </p>
            <div className="mt-7 grid gap-4">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm font-semibold">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full ${featured ? "bg-white text-ink" : "bg-royal/10 text-royal"}`}>
                    <Check size={15} />
                  </span>
                  {feature}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className={featured ? "mt-8 inline-flex w-full justify-center rounded-full bg-white px-5 py-3.5 text-sm font-extrabold text-ink transition hover:-translate-y-0.5" : "btn-primary mt-8 w-full"}
            >
              {plan.cta}
            </Link>
          </MotionDiv>
            );
          })()
        ))}
      </MotionDiv>
    </div>
  );
}
