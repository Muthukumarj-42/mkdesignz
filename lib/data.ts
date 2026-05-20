import {
  BadgeCheck,
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  Clapperboard,
  Clock3,
  Code2,
  Film,
  Globe2,
  Laptop,
  Layers3,
  LayoutTemplate,
  LineChart,
  Megaphone,
  MonitorSmartphone,
  MousePointerClick,
  Palette,
  PenTool,
  PlaySquare,
  Rocket,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  Wand2,
  Zap,
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const showcaseTabs = [
  {
    id: "design",
    label: "Design Services",
    shortLabel: "Design",
    description:
      "Thumbnails, branding, editing, overlays, motion, and social creative.",
  },
  {
    id: "web",
    label: "Web Solutions",
    shortLabel: "Web",
    description:
      "Landing pages, portfolios, business websites, React builds, and SaaS websites.",
  },
] as const;

export type ShowcaseType = (typeof showcaseTabs)[number]["id"];

export const services = [
  {
    type: "design",
    title: "Thumbnail Design",
    description:
      "High-click YouTube thumbnails with strong hierarchy and scroll-stopping hooks.",
    price: "₹179",
    icon: PlaySquare,
  },
  {
    type: "design",
    title: "Branding",
    description:
      "Logo direction, palettes, visual systems, and brand-ready launch kits.",
    price: "₹1,499",
    icon: BadgeCheck,
  },
  {
    type: "design",
    title: "Shorts Editing",
    description:
      "Fast vertical edits with captions, cuts, sound design, and retention flow.",
    price: "₹249",
    icon: Clapperboard,
  },
  {
    type: "design",
    title: "Video Editing",
    description:
      "Clean edits, pacing, transitions, titles, and creator-friendly storytelling.",
    price: "₹499+",
    icon: Film,
  },
  {
    type: "design",
    title: "Overlays",
    description:
      "Clean stream overlays, creator packs, branded frames, and banner-ready visuals.",
    price: "₹299",
    icon: LayoutTemplate,
  },
  {
    type: "design",
    title: "Motion Graphics",
    description:
      "Intros, titles, lower thirds, kinetic text, and polished animated elements.",
    price: "₹1,999",
    icon: Sparkles,
  },
  {
    type: "design",
    title: "Social Media Design",
    description:
      "Carousels, posts, stories, and promotional creatives for consistent growth.",
    price: "₹399",
    icon: Share2,
  },
  {
    type: "web",
    title: "Landing Pages",
    description:
      "Conversion-focused landing pages with strong copy hierarchy and premium UI.",
    price: "₹1,999",
    icon: MousePointerClick,
  },
  {
    type: "web",
    title: "Portfolio Websites",
    description:
      "Modern personal and creative portfolios built to show proof and win clients.",
    price: "₹4,999",
    icon: BriefcaseBusiness,
  },
  {
    type: "web",
    title: "Business Websites",
    description:
      "Trust-building websites for local brands, services, agencies, and startups.",
    price: "₹9,999",
    icon: Globe2,
  },
  {
    type: "web",
    title: "Responsive Websites",
    description:
      "Mobile-first websites that feel polished across phones, tablets, and desktops.",
    price: "₹4,999",
    icon: MonitorSmartphone,
  },
  {
    type: "web",
    title: "React Websites",
    description:
      "Fast React and Next.js websites with reusable components and SEO-ready pages.",
    price: "₹6,999",
    icon: Code2,
  },
  {
    type: "web",
    title: "SaaS Websites",
    description:
      "Premium SaaS-style marketing pages with structured sections and clean CTAs.",
    price: "₹9,999",
    icon: Blocks,
  },
] as const;

export const designPortfolioItems = [] as const;

export const webPortfolioItems = [
  {
    type: "web",
    title: "Muthukumar Portfolio",
    category: "Portfolio Websites",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    accent: "from-royal/16 via-cyan/10 to-purple/12",
    summary:
      "A modern personal portfolio with clean sections, proof-led layout, and smooth motion.",
    url: "https://muthukumarj-portfolio.vercel.app/",
  },
  {
    type: "web",
    title: "IronVault Website",
    category: "Landing Pages",
    stack: ["Landing Page", "Brand UI", "Responsive"],
    accent: "from-purple/14 via-white to-cyan/12",
    summary:
      "A bold landing page concept with strong brand presence and conversion-led content blocks.",
    url: "https://v0-ironvault-website.vercel.app/",
  },
  {
    type: "web",
    title: "Iron Vault Fitness",
    category: "SaaS Websites",
    stack: ["Fitness Website", "UI System", "Motion"],
    accent: "from-ink/10 via-white to-royal/12",
    summary:
      "A modern fitness website concept with strong hero hierarchy and premium layout rhythm.",
    url: "https://v0-iron-vault-fitness.vercel.app/",
  },
] as const;

export const portfolioItems = [
  ...designPortfolioItems,
  ...webPortfolioItems,
] as const;

export const portfolioCategories = {
  design: [
    "All",
    "Thumbnails",
    "Branding",
    "Video Editing",
    "Shorts",
    "Overlays & Banners",
    "Social Media",
  ],
  web: [
    "All",
    "Business Websites",
    "Portfolio Websites",
    "Landing Pages",
    "SaaS Websites",
  ],
};

export const designMediaProjects = [
  {
    type: "design",
    title: "Thumbnail Collection",
    category: "Thumbnails",
    image: "/portfolio/mapla-gaming.jpg",
    summary:
      "A linked gallery of creator and gaming thumbnails from the MK Designz archive.",
    url: "https://drive.google.com/drive/folders/1aiBcLeaQA6P7nlotTUT-oCjUhmJQzo8N",
    action: "Open Gallery",
  },
  {
    type: "design",
    title: "Overlays & Banners",
    category: "Overlays & Banners",
    image: "/portfolio/overlay-dsgt.png",
    summary: "Stream overlays, banners, and creator-ready visual packs.",
    url: "https://drive.google.com/drive/folders/1jrotMM781By-jLDCdmXNBG9MoKLB5jHf",
    action: "Open Gallery",
  },
  {
    type: "video",
    title: "Intro Video",
    category: "Video Editing",
    youtubeId: "GGkdrZMWntE",
    summary: "A creator intro edit with strong pacing and visual energy.",
  },
  {
    type: "video",
    title: "Montage Video",
    category: "Video Editing",
    youtubeId: "2OIJKwJNcvI",
    summary:
      "A montage edit focused on momentum, music sync, and creator identity.",
  },
  {
    type: "video",
    title: "Shorts Edit 01",
    category: "Shorts",
    youtubeId: "AFjoAttXp0Q",
    summary: "A vertical short with retention-friendly pacing and quick cuts.",
  },
  {
    type: "video",
    title: "Shorts Edit 02",
    category: "Shorts",
    youtubeId: "AjMAhaso9WU",
    summary: "A second short-form edit for social-first content delivery.",
  },
  {
    type: "external",
    title: "Instagram Reel",
    category: "Shorts",
    image: "/portfolio/instagram-reel.jpg",
    summary: "A reel-format content piece linked directly to Instagram.",
    url: "https://www.instagram.com/reel/DG0xMAzvUgA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    action: "Open Reel",
  },
] as const;

export const designMatters = [
  {
    title: "Branding builds trust",
    description:
      "Professional identity helps clients understand your value before a conversation starts.",
    icon: ShieldCheck,
  },
  {
    title: "Thumbnails improve clicks",
    description:
      "Clear hooks, contrast, and emotion make creator content easier to notice in busy feeds.",
    icon: MousePointerClick,
  },
  {
    title: "Visuals drive engagement",
    description:
      "Strong layouts guide attention and make people spend more time with your content.",
    icon: BarChart3,
  },
  {
    title: "Modern presence sells",
    description:
      "A polished digital presence makes businesses feel active, relevant, and easier to choose.",
    icon: Globe2,
  },
  {
    title: "Consistency improves recall",
    description:
      "Repeated design systems help audiences recognize your brand faster across every channel.",
    icon: Layers3,
  },
  {
    title: "Websites build confidence",
    description:
      "A modern website gives businesses a reliable home for proof, offers, contact, and credibility.",
    icon: MonitorSmartphone,
  },
  {
    title: "Responsive design matters",
    description:
      "Mobile-first pages help clients trust your brand on the device they already use most.",
    icon: Laptop,
  },
  {
    title: "Branding increases conversions",
    description:
      "Clear visuals make offers easier to understand and make high-intent visitors more likely to act.",
    icon: Rocket,
  },
  {
    title: "Creators need identity",
    description:
      "A consistent content look makes channels feel memorable, professional, and easier to follow.",
    icon: Sparkles,
  },
] as const;

export const reasons = [
  {
    title: "Fast delivery",
    description:
      "Clear timelines, quick turnarounds, and polished files ready for publishing.",
    icon: Clock3,
  },
  {
    title: "Modern design strategy",
    description:
      "Every design is built around hierarchy, clarity, and the right audience signal.",
    icon: Target,
  },
  {
    title: "Audience-focused visuals",
    description:
      "Creative direction made for viewers, buyers, subscribers, and decision-makers.",
    icon: BarChart3,
  },
  {
    title: "Branding expertise",
    description:
      "Consistent visuals that help creators and businesses look memorable and serious.",
    icon: Palette,
  },
  {
    title: "Content growth mindset",
    description:
      "Creative work aligned with clicks, watch time, recognition, and conversion.",
    icon: LineChart,
  },
  {
    title: "Professional workflow",
    description:
      "Simple briefs, organized handoff, reliable revisions, and friendly communication.",
    icon: Wand2,
  },
] as const;

export const counters = [
  { value: 250, suffix: "+", label: "Projects completed" },
  { value: 90, suffix: "+", label: "Happy clients" },
  { value: 600, suffix: "+", label: "Designs delivered" },
];

export const pricingPlans = [
  {
    type: "design",
    name: "Design Starter",
    price: "₹179",
    description: "For quick creator assets and single design requests.",
    features: [
      "Thumbnail design",
      "1 revision",
      "Ready-to-post export",
      "Fast WhatsApp delivery",
    ],
    cta: "Book design",
  },
  {
    type: "design",
    name: "Creator Pack",
    price: "₹499+",
    description:
      "For creators who need edits, banners, thumbnails, or social assets.",
    features: [
      "Video editing from ₹499",
      "Shorts editing ₹249",
      "Overlays from ₹299",
      "Bulk discounts available",
    ],
    cta: "Choose Creator",
    featured: true,
  },
  {
    type: "design",
    name: "Branding",
    price: "₹1,499",
    description:
      "For businesses and creators who need a stronger visual identity.",
    features: [
      "Brand direction",
      "Logo support",
      "Color and style guidance",
      "Launch-ready exports",
    ],
    cta: "Start branding",
  },
  {
    type: "web",
    name: "Simple Landing",
    price: "₹1,999",
    description: "For a focused one-page offer, campaign, or creator profile.",
    features: [
      "Simple landing page",
      "Responsive layout",
      "WhatsApp CTA",
      "Domain charges extra",
    ],
    cta: "Build landing",
  },
  {
    type: "web",
    name: "Advanced Landing",
    price: "₹2,999",
    description:
      "For a richer landing page with stronger sections and conversion flow.",
    features: [
      "Advanced page structure",
      "Trust sections",
      "Premium animations",
      "Domain charges extra",
    ],
    cta: "Choose advanced",
    featured: true,
  },
  {
    type: "web",
    name: "Portfolio Website",
    price: "₹4,999",
    description:
      "For creators and freelancers who need a polished personal website.",
    features: [
      "Multipage portfolio",
      "Project sections",
      "Contact flow",
      "Domain charges extra",
    ],
    cta: "Build portfolio",
  },
  {
    type: "web",
    name: "Business Website",
    price: "₹9,999",
    description:
      "For brands that need a modern website with trust and lead-generation sections.",
    features: [
      "Business pages",
      "Service structure",
      "Responsive design",
      "Domain charges extra",
    ],
    cta: "Build business site",
  },
] as const;

export const timeline = [
  {
    year: "2020",
    title: "Learning design",
    description:
      "Started exploring visual design, layout, typography, and creative tools.",
  },
  {
    year: "2021",
    title: "Freelancing journey",
    description:
      "Took on early client work and learned how to deliver clean files with clear communication.",
  },
  {
    year: "2022",
    title: "Gaming creator projects",
    description:
      "Built thumbnails, overlays, banners, and edits for gaming and creator channels.",
  },
  {
    year: "2024",
    title: "Web development expansion",
    description:
      "Expanded into React, Next.js, responsive websites, and premium landing pages.",
  },
  {
    year: "Now",
    title: "Brand building",
    description:
      "Positioning MK Designz as a creative and web partner for businesses, brands, and creators.",
  },
];

export const toolGroups = [
  {
    title: "Design",
    tools: [
      "Photoshop",
      "Illustrator",
      "Canva",
      "Figma",
      "After Effects",
      "Premiere Pro",
    ],
  },
  {
    title: "Development",
    tools: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Firebase",
      "Vercel",
    ],
  },
] as const;

export const tools = toolGroups.flatMap((group) => group.tools);

export const skills = [
  "Thumbnail strategy",
  "Brand identity",
  "Video storytelling",
  "Social campaigns",
  "Motion design",
  "Landing page UI",
  "Responsive web development",
  "Visual systems",
];

export const whatsappNumber = "917305514199";

export const buildWhatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultWhatsappMessage =
  "Hi MK DESINGZ, I'm interested in your services.";

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/_mkdesignz_/" },
  { label: "WhatsApp", href: buildWhatsappUrl(defaultWhatsappMessage) },
  { label: "Email", href: "mailto:mkdesingz@example.com" },
];

export const heroStats = ["Branding", "Editing", "Thumbnails", "Websites"];

export const valueProps = [
  { title: "Design clarity", icon: PenTool },
  { title: "Website polish", icon: Laptop },
  { title: "Client trust", icon: Megaphone },
  { title: "Launch speed", icon: Rocket },
  { title: "Growth focus", icon: Zap },
] as const;
