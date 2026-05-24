import Link from "next/link";
import { Camera, Clock3, Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { buildWhatsappUrl, defaultWhatsappMessage } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description: "Contact MK Designz for graphic design, thumbnail design, branding, video editing, UI/UX, and social media design projects."
};

const contactCards = [
  {
    title: "WhatsApp",
    detail: "7305514199",
    href: buildWhatsappUrl(defaultWhatsappMessage),
    icon: MessageCircle
  },
  {
    title: "Instagram",
    detail: "Send a project DM",
    href: "https://www.instagram.com/_mkdesignz_/",
    icon: Camera
  },
  {
    title: "Response time",
    detail: "Usually within 2-6 hours",
    href: "/contact",
    icon: Clock3
  }
];

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-premium">
        <SectionHeading
          eyebrow="Contact"
          title="Tell us what you need. We will open WhatsApp with the full brief."
          description="Share your service, budget, and project details. The form formats your message and opens WhatsApp directly to MK Designz."
          align="center"
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <Reveal>
            <ContactForm />
          </Reveal>
          <div className="grid gap-5">
            {contactCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <Link
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  className="card-premium flex items-center gap-5 p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-royal/10 text-royal">
                    <card.icon size={22} />
                  </span>
                  <span>
                    <span className="block text-sm font-bold uppercase tracking-[0.18em] text-muted">{card.title}</span>
                    <span className="mt-1 block text-lg font-semibold text-ink">{card.detail}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
