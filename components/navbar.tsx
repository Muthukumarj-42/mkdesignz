"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, MessageCircle, X } from "lucide-react";
import { buildWhatsappUrl, defaultWhatsappMessage, navItems } from "@/lib/data";
import { MotionDiv } from "./motion";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line/80 bg-white/88 shadow-sm backdrop-blur-xl" : "bg-white/70"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="MK Designz home">
          <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-ink bg-ink shadow-[0_14px_36px_rgba(17,18,23,0.24)] sm:h-12 sm:w-12">
            <Image src="/logo.png" alt="MK Designz logo" width={42} height={42} className="object-contain" />
          </span>
          <span className="min-w-0 leading-none">
            <span className="block whitespace-nowrap text-sm font-extrabold tracking-[0.12em] text-ink sm:text-lg">
              MK Designz
            </span>
            <span className="mt-1 hidden text-[11px] font-bold uppercase tracking-[0.22em] text-muted sm:block">
              Creative + Web
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-white px-2 py-2 shadow-sm lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active ? "bg-ink text-white" : "text-muted hover:bg-surface hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={buildWhatsappUrl(defaultWhatsappMessage)} className="btn-secondary" target="_blank">
            WhatsApp
          </Link>
          <Link href="/contact" className="btn-primary">
            Hire Me
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-sm transition active:scale-95 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 top-16 z-40 bg-white/92 backdrop-blur-xl sm:top-20 lg:hidden"
        >
          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col justify-between px-4 pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-5"
          >
            <nav className="grid gap-3">
              {navItems.map((item, index) => {
                const active = pathname === item.href;
                return (
                  <MotionDiv
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.035 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex min-h-16 items-center justify-between rounded-[1.4rem] px-5 text-xl font-extrabold tracking-tight shadow-sm transition active:scale-[0.99] ${
                        active ? "bg-ink text-white" : "border border-line bg-white text-ink"
                      }`}
                    >
                      {item.label}
                      <ArrowRight size={20} className={active ? "text-cyan" : "text-muted"} />
                    </Link>
                  </MotionDiv>
                );
              })}
            </nav>
            <div className="grid gap-3">
              <Link
                href={buildWhatsappUrl(defaultWhatsappMessage)}
                target="_blank"
                onClick={() => setOpen(false)}
                className="btn-secondary w-full gap-2"
              >
                <MessageCircle size={18} /> WhatsApp
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Hire Me
              </Link>
            </div>
          </MotionDiv>
        </MotionDiv>
      ) : null}
    </header>
  );
}
