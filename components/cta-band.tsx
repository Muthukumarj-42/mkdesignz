import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

export function CtaBand() {
  return (
    <section className="section-padding">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-line bg-ink px-5 py-10 text-white shadow-premium sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">Ready to grow your visual brand?</p>
            <h2 className="mt-4 max-w-3xl text-[clamp(2rem,8vw,3.4rem)] font-extrabold leading-[1.06] tracking-tight">
              Let&apos;s turn your next idea into clean, high-converting creative.
            </h2>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-ink transition hover:-translate-y-1 hover:shadow-soft sm:w-auto">
            Hire MK DESINGZ <ArrowRight size={18} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
