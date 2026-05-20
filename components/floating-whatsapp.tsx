import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { buildWhatsappUrl, defaultWhatsappMessage } from "@/lib/data";

export function FloatingWhatsapp() {
  return (
    <Link
      href={buildWhatsappUrl(defaultWhatsappMessage)}
      target="_blank"
      aria-label="Chat with MK DESINGZ on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1fbf63] text-white shadow-[0_18px_40px_rgba(31,191,99,0.32)] transition duration-300 hover:-translate-y-1 hover:bg-[#19a955] sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 rounded-full bg-[#1fbf63] opacity-30 animate-ping" />
      <MessageCircle className="relative" size={25} />
    </Link>
  );
}
