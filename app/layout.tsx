import type { Metadata } from "next";
import { FloatingWhatsapp } from "@/components/floating-whatsapp";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "MK DESINGZ | Premium Creative Design Portfolio",
    template: "%s | MK DESINGZ"
  },
  description:
    "MK DESINGZ helps creators, businesses, agencies, startups, and brands grow with modern design, editing, branding, thumbnails, and digital content solutions.",
  keywords: [
    "MK DESINGZ",
    "graphic design",
    "thumbnail design",
    "video editing",
    "branding",
    "social media design",
    "creative agency India"
  ],
  openGraph: {
    title: "MK DESINGZ | Designs That Build Attention",
    description:
      "Modern design, editing, branding, and digital content solutions for creators and businesses.",
    type: "website",
    images: ["/logo.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <FloatingWhatsapp />
      </body>
    </html>
  );
}
