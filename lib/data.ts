import {
  BadgeCheck,
  BarChart3,
  Blocks,
  BriefcaseBusiness,
  Brush,
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
  Search,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  Wand2,
  Zap
} from "lucide-react";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
];

export const showcaseTabs = [
  {
    id: "design",
    label: "Design Services",
    shortLabel: "Design",
    description: "Branding, thumbnails, editing, motion, and social creative."
  },
  {
    id: "web",
    label: "Web Solutions",
    shortLabel: "Web",
    description: "Premium websites, landing pages, UI builds, and responsive experiences."
  }
] as const;

export type ShowcaseType = (typeof showcaseTabs)[number]["id"];

export const services = [
  {
    type: "design",
    title: "Graphic Design",
    description: "Premium posters, ads, banners, and visual assets built for campaigns.",
    price: "₹499",
    icon: Brush
  },
  {
    type: "design",
    title: "Thumbnail Design",
    description: "High-click YouTube thumbnails with strong hierarchy and scroll-stopping hooks.",
    price: "₹299",
    icon: PlaySquare
  },
  {
    type: "design",
    title: "Video Editing",
    description: "Clean edits, pacing, transitions, titles, and creator-friendly storytelling.",
    price: "₹1,499",
    icon: Film
  },
  {
    type: "design",
    title: "Shorts Editing",
    description: "Fast vertical edits with captions, cuts, sound design, and retention flow.",
    price: "₹699",
    icon: Clapperboard
  },
  {
    type: "design",
    title: "Branding",
    description: "Logo direction, palettes, visual systems, and brand-ready launch kits.",
    price: "₹2,999",
    icon: BadgeCheck
  },
  {
    type: "design",
    title: "Social Media Design",
    description: "Carousels, posts, stories, and promotional creatives for consistent growth.",
    price: "₹399",
    icon: Share2
  },
  {
    type: "design",
    title: "YouTube SEO",
    description: "Titles, descriptions, tags, metadata, and upload strategy for discoverability.",
    price: "₹799",
    icon: Search
  },
  {
    type: "design",
    title: "Motion Graphics",
    description: "Intros, titles, lower thirds, kinetic text, and polished animated elements.",
    price: "₹1,999",
    icon: Sparkles
  },
  {
    type: "web",
    title: "Landing Pages",
    description: "Conversion-focused landing pages with strong copy hierarchy and premium UI.",
    price: "₹4,999",
    icon: MousePointerClick
  },
  {
    type: "web",
    title: "Portfolio Websites",
    description: "Modern personal and creative portfolios built to show proof and win clients.",
    price: "₹7,999",
    icon: BriefcaseBusiness
  },
  {
    type: "web",
    title: "Business Websites",
    description: "Trust-building websites for local brands, services, agencies, and startups.",
    price: "₹14,999",
    icon: Globe2
  },
  {
    type: "web",
    title: "UI/UX Development",
    description: "Figma-to-frontend builds with clean layouts, components, and responsive states.",
    price: "₹9,999",
    icon: LayoutTemplate
  },
  {
    type: "web",
    title: "React Websites",
    description: "Fast React and Next.js websites with reusable components and SEO-ready pages.",
    price: "₹12,999",
    icon: Code2
  },
  {
    type: "web",
    title: "Responsive Websites",
    description: "Mobile-first websites that feel polished across phones, tablets, and desktops.",
    price: "₹8,999",
    icon: MonitorSmartphone
  },
  {
    type: "web",
    title: "Modern SaaS Websites",
    description: "Premium SaaS-style marketing pages with structured sections and clean CTAs.",
    price: "₹18,999",
    icon: Blocks
  }
] as const;

export const designPortfolioItems = [
  {
    type: "design",
    title: "Gaming Thumbnail System",
    category: "Thumbnails",
    image: "/portfolio/mapla-gaming.jpg",
    span: "lg:row-span-2",
    summary: "High-impact creator thumbnail direction."
  },
  {
    type: "design",
    title: "Fashion Campaign Creative",
    category: "Social Media",
    image: "/portfolio/i-fashion.jpg",
    span: "",
    summary: "Campaign-ready visual for product promotion."
  },
  {
    type: "design",
    title: "SSG Brand Identity",
    category: "Branding",
    image: "/portfolio/ssg-logo.jpg",
    span: "",
    summary: "Clean brand asset for local business identity."
  },
  {
    type: "design",
    title: "Creator Promo Visual",
    category: "Thumbnails",
    image: "/portfolio/poona-kutty.jpg",
    span: "lg:row-span-2",
    summary: "Attention-led YouTube visual system."
  },
  {
    type: "design",
    title: "Video Overlay Pack",
    category: "Motion Graphics",
    image: "/portfolio/overlay-dsgt.png",
    span: "",
    summary: "Creator overlay and gaming stream visual."
  },
  {
    type: "design",
    title: "UI Style Exploration",
    category: "UI Design",
    image: "/portfolio/water-quality.jpg",
    span: "",
    summary: "Minimal visual exploration for a digital product."
  }
] as const;

export const webPortfolioItems = [
  {
    type: "web",
    title: "Creator Portfolio Website",
    category: "Portfolio Websites",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    accent: "from-royal/16 via-cyan/10 to-purple/12",
    summary: "A premium personal website with case studies, services, contact flow, and mobile-first layout."
  },
  {
    type: "web",
    title: "Business Landing Page",
    category: "Landing Pages",
    stack: ["React", "SEO", "Responsive UI"],
    accent: "from-cyan/16 via-white to-royal/10",
    summary: "A conversion-led landing page with trust sections, offer blocks, pricing, and WhatsApp CTA."
  },
  {
    type: "web",
    title: "SaaS Marketing UI",
    category: "Modern SaaS Websites",
    stack: ["UI System", "Components", "Animations"],
    accent: "from-purple/14 via-white to-cyan/12",
    summary: "A clean SaaS-style homepage direction with structured messaging and premium visual rhythm."
  }
] as const;

export const portfolioItems = [...designPortfolioItems, ...webPortfolioItems] as const;

export const portfolioCategories = {
  design: ["All", "Thumbnails", "Branding", "Video Editing", "UI Design", "Social Media", "Motion Graphics"],
  web: ["All", "Landing Pages", "Portfolio Websites", "Business Websites", "Modern SaaS Websites"]
};

export const designMatters = [
  {
    title: "Branding builds trust",
    description: "Professional identity helps clients understand your value before a conversation starts.",
    icon: ShieldCheck
  },
  {
    title: "Thumbnails improve clicks",
    description: "Clear hooks, contrast, and emotion make creator content easier to notice in busy feeds.",
    icon: MousePointerClick
  },
  {
    title: "Visuals drive engagement",
    description: "Strong layouts guide attention and make people spend more time with your content.",
    icon: BarChart3
  },
  {
    title: "Modern presence sells",
    description: "A polished digital presence makes businesses feel active, relevant, and easier to choose.",
    icon: Globe2
  },
  {
    title: "Consistency improves recall",
    description: "Repeated design systems help audiences recognize your brand faster across every channel.",
    icon: Layers3
  }
] as const;

export const reasons = [
  {
    title: "Fast delivery",
    description: "Clear timelines, quick turnarounds, and polished files ready for publishing.",
    icon: Clock3
  },
  {
    title: "Modern design strategy",
    description: "Every design is built around hierarchy, clarity, and the right audience signal.",
    icon: Target
  },
  {
    title: "Audience-focused visuals",
    description: "Creative direction made for viewers, buyers, subscribers, and decision-makers.",
    icon: BarChart3
  },
  {
    title: "Branding expertise",
    description: "Consistent visuals that help creators and businesses look memorable and serious.",
    icon: Palette
  },
  {
    title: "Content growth mindset",
    description: "Creative work aligned with clicks, watch time, recognition, and conversion.",
    icon: LineChart
  },
  {
    title: "Professional workflow",
    description: "Simple briefs, organized handoff, reliable revisions, and friendly communication.",
    icon: Wand2
  }
] as const;

export const counters = [
  { value: 250, suffix: "+", label: "Projects completed" },
  { value: 90, suffix: "+", label: "Happy clients" },
  { value: 600, suffix: "+", label: "Designs delivered" }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "₹499",
    description: "For single creatives and quick launch assets.",
    features: ["1 design request", "1 revision", "24-48 hour delivery", "Ready-to-post export"],
    cta: "Start a project"
  },
  {
    name: "Creator",
    price: "₹1,499",
    description: "For creators who need consistent, growth-focused content.",
    features: ["4 design/editing tasks", "Priority delivery", "Thumbnail or shorts support", "Content direction notes"],
    cta: "Choose Creator",
    featured: true
  },
  {
    name: "Premium",
    price: "₹4,999",
    description: "For brands that need a complete visual content system.",
    features: ["Monthly creative package", "Bulk design discounts", "Branding support", "Weekly planning call"],
    cta: "Go Premium"
  }
];

export const webPricing = [
  "Landing Page - Starts at ₹4,999",
  "Portfolio Website - Starts at ₹7,999",
  "Business Website - Starts at ₹14,999"
];

export const timeline = [
  {
    year: "2022",
    title: "Started with creator visuals",
    description: "Built thumbnails, overlays, and social creatives for gaming and content channels."
  },
  {
    year: "2023",
    title: "Expanded into brand systems",
    description: "Added logo direction, print assets, campaign graphics, and consistent content kits."
  },
  {
    year: "2024",
    title: "Moved into strategy-led design",
    description: "Focused on clean briefs, conversion goals, audience fit, and repeatable workflows."
  },
  {
    year: "Now",
    title: "Creative + web partner",
    description: "Helping businesses, agencies, startups, and creators look credible across design and web."
  }
];

export const tools = [
  "Photoshop",
  "Illustrator",
  "Premiere Pro",
  "After Effects",
  "Figma",
  "Canva",
  "CapCut",
  "Next.js",
  "React",
  "Tailwind CSS"
];

export const skills = [
  "Thumbnail strategy",
  "Brand identity",
  "Video storytelling",
  "Social campaigns",
  "Motion design",
  "Landing page UI",
  "Responsive web development",
  "Visual systems"
];

export const whatsappNumber = "917305514199";

export const buildWhatsappUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const defaultWhatsappMessage =
  "Hi MK DESINGZ, I'm interested in your services.";

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "WhatsApp", href: buildWhatsappUrl(defaultWhatsappMessage) },
  { label: "Email", href: "mailto:mkdesingz@example.com" }
];

export const heroStats = [
  "Branding",
  "Editing",
  "Thumbnails",
  "Websites"
];

export const valueProps = [
  { title: "Design clarity", icon: PenTool },
  { title: "Website polish", icon: Laptop },
  { title: "Client trust", icon: Megaphone },
  { title: "Launch speed", icon: Rocket },
  { title: "Growth focus", icon: Zap }
] as const;
