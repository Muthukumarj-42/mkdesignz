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
      <div className="mx-auto mb-12 grid max-w-2xl grid-cols-2 rounded-full border border-line bg-white p-1.5 shadow-sm">
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
                layoutId="pricing-active-tab"
                className="absolute inset-0 rounded-full bg-ink shadow-soft"
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : null}
            <span className="relative">{active === "design" ? tab.label.replace("Services", "Pricing").replace("Solutions", "Development Pricing") : tab.label.replace("Services", "Pricing").replace("Solutions", "Development Pricing")}</span>
          </button>
        ))}
      </div>

      <MotionDiv layout className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <MotionDiv
            layout
            key={plan.name}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className={`rounded-[1.75rem] border p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-premium ${
              plan.featured ? "border-ink bg-ink text-white" : "border-line bg-white text-ink"
            }`}
          >
            <p className={`text-sm font-extrabold uppercase tracking-[0.2em] ${plan.featured ? "text-cyan" : "text-royal"}`}>
              {plan.name}
            </p>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
              <span className={plan.featured ? "pb-2 text-white/65" : "pb-2 text-muted"}>starting</span>
            </div>
            <p className={`mt-5 min-h-16 text-base leading-8 ${plan.featured ? "text-white/72" : "text-muted"}`}>
              {plan.description}
            </p>
            <div className="mt-7 grid gap-4">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm font-semibold">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full ${plan.featured ? "bg-white text-ink" : "bg-royal/10 text-royal"}`}>
                    <Check size={15} />
                  </span>
                  {feature}
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className={plan.featured ? "mt-8 inline-flex w-full justify-center rounded-full bg-white px-5 py-3.5 text-sm font-extrabold text-ink transition hover:-translate-y-0.5" : "btn-primary mt-8 w-full"}
            >
              {plan.cta}
            </Link>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
}
