import {
  BadgeCheck,
  BarChart3,
  Brush,
  Clapperboard,
  Clock3,
  Code2,
  Film,
  Layers3,
  LineChart,
  Megaphone,
  Palette,
  PenTool,
  PlaySquare,
  Search,
  Share2,
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

export const services = [
  {
    title: "Graphic Design",
    description: "Premium posters, ads, banners, and visual assets built for campaigns.",
    price: "₹499",
    icon: Brush
  },
  {
    title: "Thumbnail Design",
    description: "High-click YouTube thumbnails with strong hierarchy and scroll-stopping hooks.",
    price: "₹299",
    icon: PlaySquare
  },
  {
    title: "Video Editing",
    description: "Clean edits, pacing, transitions, titles, and creator-friendly storytelling.",
    price: "₹1,499",
    icon: Film
  },
  {
    title: "Shorts Editing",
    description: "Fast vertical edits with captions, cuts, sound design, and retention flow.",
    price: "₹699",
    icon: Clapperboard
  },
  {
    title: "Branding",
    description: "Logo direction, palettes, visual systems, and brand-ready launch kits.",
    price: "₹2,999",
    icon: BadgeCheck
  },
  {
    title: "Social Media Design",
    description: "Carousels, posts, stories, and promotional creatives for consistent growth.",
    price: "₹399",
    icon: Share2
  },
  {
    title: "UI/UX Design",
    description: "Modern landing pages, app screens, wireframes, and conversion-focused layouts.",
    price: "₹3,999",
    icon: Code2
  },
  {
    title: "YouTube SEO",
    description: "Titles, descriptions, tags, metadata, and upload strategy for discoverability.",
    price: "₹799",
    icon: Search
  },
  {
    title: "Motion Graphics",
    description: "Intros, titles, lower thirds, kinetic text, and polished animated elements.",
    price: "₹1,999",
    icon: Sparkles
  },
  {
    title: "Stream Overlays",
    description: "Creator overlays, webcam frames, alerts, panels, and gaming identity assets.",
    price: "₹1,499",
    icon: Layers3
  }
];

export const portfolioItems = [
  {
    title: "Gaming Thumbnail System",
    category: "Thumbnails",
    image: "/portfolio/mapla-gaming.jpg",
    span: "lg:row-span-2"
  },
  {
    title: "Fashion Campaign Creative",
    category: "Social Media",
    image: "/portfolio/i-fashion.jpg",
    span: ""
  },
  {
    title: "SSG Brand Identity",
    category: "Branding",
    image: "/portfolio/ssg-logo.jpg",
    span: ""
  },
  {
    title: "Creator Promo Visual",
    category: "Thumbnails",
    image: "/portfolio/poona-kutty.jpg",
    span: "lg:row-span-2"
  },
  {
    title: "Video Overlay Pack",
    category: "Motion Graphics",
    image: "/portfolio/overlay-dsgt.png",
    span: ""
  },
  {
    title: "UI Style Exploration",
    category: "UI Design",
    image: "/portfolio/water-quality.jpg",
    span: ""
  }
];

export const portfolioCategories = [
  "All",
  "Thumbnails",
  "Branding",
  "Video Editing",
  "UI Design",
  "Social Media",
  "Motion Graphics"
];

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
];

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
    title: "Creative partner for modern brands",
    description: "Helping businesses, agencies, startups, and creators look credible everywhere online."
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
  "YouTube Studio"
];

export const skills = [
  "Thumbnail strategy",
  "Brand identity",
  "Video storytelling",
  "Social campaigns",
  "Motion design",
  "Landing page UI",
  "Creator growth",
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
  "UI/UX"
];

export const valueProps = [
  { title: "Design clarity", icon: PenTool },
  { title: "Creator speed", icon: Zap },
  { title: "Client trust", icon: Megaphone }
];
