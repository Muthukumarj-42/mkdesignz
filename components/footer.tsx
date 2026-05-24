import Image from "next/image";
import Link from "next/link";
import { Camera, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { buildWhatsappUrl, defaultWhatsappMessage, navItems } from "@/lib/data";

const serviceLinks = [
  "Thumbnail Design",
  "Branding",
  "Video Editing",
  "Landing Pages",
  "Portfolio Websites",
  "Business Websites"
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(35,184,212,0.18),transparent_26rem),radial-gradient(circle_at_88%_10%,rgba(91,53,213,0.18),transparent_26rem)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_0.65fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-4">
            <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-black shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
              <Image src="/logo.png" alt="MK Designz logo" width={48} height={48} className="object-contain" />
            </span>
            <span>
              <span className="block whitespace-nowrap text-base font-extrabold tracking-[0.14em] text-white sm:text-lg sm:tracking-[0.16em]">MK Designz</span>
              <span className="text-sm font-semibold text-white/58">Creative + Web Studio</span>
            </span>
          </Link>
          <p className="mt-6 max-w-md text-base leading-8 text-white/62">
            Premium design, editing, branding, websites, and digital content support for creators, businesses, agencies, and startups.
          </p>
          <div className="mt-7 flex gap-3">
            <Link href="https://www.instagram.com/_mkdesignz_/" target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:bg-white hover:text-ink">
              <Camera size={18} />
            </Link>
            <Link href={buildWhatsappUrl(defaultWhatsappMessage)} target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:-translate-y-1 hover:bg-white hover:text-ink">
              <MessageCircle size={18} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-white">Quick links</h3>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="flex min-h-9 items-center text-base font-semibold text-white/58 transition hover:text-white sm:text-sm">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-white">Services</h3>
          <div className="mt-5 grid gap-3">
            {serviceLinks.map((service) => (
              <Link key={service} href="/services" className="flex min-h-9 items-center text-base font-semibold text-white/58 transition hover:text-white sm:text-sm">
                {service}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-white">Contact</h3>
          <div className="mt-5 grid gap-4 text-sm font-semibold text-white/62">
            <Link href={buildWhatsappUrl(defaultWhatsappMessage)} target="_blank" className="flex min-h-9 items-center gap-3 hover:text-white">
              <Phone size={16} /> 7305514199
            </Link>
            <span className="flex items-center gap-3">
              <MapPin size={16} /> India
            </span>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-5 py-5 text-center text-sm font-semibold text-white/48">
        © {new Date().getFullYear()} MK Designz. All rights reserved.
      </div>
    </footer>
  );
}
