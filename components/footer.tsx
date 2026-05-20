import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { buildWhatsappUrl, defaultWhatsappMessage, navItems, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-[1.3fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-ink bg-ink shadow-soft">
              <Image src="/logo.png" alt="MK DESINGZ logo" width={42} height={42} className="object-contain" />
            </span>
            <span>
              <span className="block font-bold tracking-[0.18em] text-ink">MK DESINGZ</span>
              <span className="text-sm text-muted">Your Brand, Perfectly Designed</span>
            </span>
          </Link>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted">
            Premium design, editing, branding, and digital content support for creators, businesses, agencies, and startups.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">Quick links</h3>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">Contact</h3>
          <div className="mt-5 grid gap-3 text-sm text-muted">
            <Link href={buildWhatsappUrl(defaultWhatsappMessage)} target="_blank" className="flex items-center gap-3 hover:text-ink">
              <Phone size={16} /> 7305514199
            </Link>
            <Link href="mailto:mkdesingz@example.com" className="flex items-center gap-3 hover:text-ink">
              <Mail size={16} /> mkdesingz@example.com
            </Link>
            <span className="flex items-center gap-3">
              <MapPin size={16} /> India
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <Link key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} className="chip">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-line px-5 py-5 text-center text-sm text-muted">
        © {new Date().getFullYear()} MK DESINGZ. All rights reserved.
      </div>
    </footer>
  );
}
