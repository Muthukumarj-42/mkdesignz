import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { buildWhatsappUrl, defaultWhatsappMessage } from "@/lib/data";

export function FloatingWhatsapp() {
  return (
    <Link
      href={buildWhatsappUrl(defaultWhatsappMessage)}
      target="_blank"
      aria-label="Chat with MK Designz on WhatsApp"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-50 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#1fbf63] text-white shadow-[0_18px_44px_rgba(31,191,99,0.34)] ring-4 ring-white transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#19a955] sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
    >
      <span className="absolute inset-0 rounded-full bg-[#1fbf63] opacity-30 animate-ping" />
      <MessageCircle className="relative" size={23} />
    </Link>
  );
}
