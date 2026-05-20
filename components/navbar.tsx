"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { buildWhatsappUrl, defaultWhatsappMessage, navItems } from "@/lib/data";

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

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-line/80 bg-white/88 shadow-sm backdrop-blur-xl" : "bg-white/70"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="MK DESINGZ home">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <Image src="/logo.png" alt="MK DESINGZ logo" width={38} height={38} className="object-contain" />
          </span>
          <span className="leading-none">
            <span className="block text-sm font-bold tracking-[0.18em] text-ink">MK</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-muted">DESINGZ</span>
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white text-ink shadow-sm lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-white px-5 py-5 shadow-soft lg:hidden">
          <nav className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                  pathname === item.href ? "bg-ink text-white" : "bg-surface text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
