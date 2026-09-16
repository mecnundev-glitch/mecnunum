import { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const STUDIO_STATUS = {
  isAvailable: true,
  badgeText: "Available for Q4/2026 Projects",
  location: "Istanbul / Global Remote",
};

export const SERVICES_LIST = [
  {
    slug: "web-design",
    title: "Web Design",
    tagline: "High-end editorial aesthetics and interface design.",
    description: "Bespoke digital design systems tailored for brands that demand distinctiveness, high typography fidelity, and intuitive user psychology.",
    features: ["Visual Identity Systems", "Design Systems & UI Kits", "Interactive Prototyping", "Design Token Architecture"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Ultra-fast Next.js & TypeScript engineering.",
    description: "High-performance full-stack web applications built on modern frameworks with zero compromise on scalability, security, and clean architecture.",
    features: ["Next.js App Router Architecture", "Full-Stack TypeScript", "API & Headless CMS Integration", "Core Web Vitals Optimization"],
  },
  {
    slug: "corporate-websites",
    title: "Corporate Websites",
    tagline: "Authoritative, scalable enterprise web solutions.",
    description: "Enterprise-grade digital flagships that command industry respect, communicate value propositions, and convert discerning enterprise clientele.",
    features: ["Enterprise Architecture", "Multi-language & Localization", "Scalable CMS Workflows", "Strict Security Compliance"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce",
    tagline: "High-conversion commerce experiences.",
    description: "Custom commerce platforms designed to maximize cart conversion rates, fast checkout flows, and seamless inventory management.",
    features: ["Headless Shopify & Custom Stores", "Custom Checkout Flows", "Dynamic Filtering & Search", "Analytics & Conversion Tracking"],
  },
  {
    slug: "seo",
    title: "SEO & Performance",
    tagline: "Technical SEO and lighthouse 100 performance.",
    description: "Deep technical search engine optimization, structured schema markup, and sub-second load times engineered to dominate organic search rankings.",
    features: ["Technical SEO Auditing", "Structured JSON-LD Schema", "Edge Caching & CDN Tuning", "Automated Sitemap & Indexing"],
  },
  {
    slug: "3d-experiences",
    title: "3D Experiences",
    tagline: "Immersive WebGL & Three.js digital worlds.",
    description: "WebGL, Three.js, and React Three Fiber interactive universes, product configurators, and spatial canvas designs that mesmerize audiences.",
    features: ["Custom Three.js Shaders", "Interactive WebGL Universes", "Physics-based Simulations", "Mobile 60fps Optimization"],
  },
] as const;

export const SAMPLE_PROJECTS = [
  {
    slug: "quantum-nexus",
    title: "Quantum Nexus",
    category: "3D WebGL / Creative Tech",
    year: "2026",
    tagline: "Interactive multidimensional universe & brand flagship.",
    description: "An experimental 3D WebGL portal engineered with React Three Fiber, custom GLSL shaders, and real-time physics simulation.",
    tags: ["Three.js", "Next.js", "GLSL Shaders", "Framer Motion"],
  },
  {
    slug: "biomorphic-studio",
    title: "Biomorphic Studio",
    category: "Corporate & Identity",
    year: "2026",
    tagline: "Generative organic architecture for an avant-garde design studio.",
    description: "A digital flagship blending organic generative shapes with strict editorial typographic hierarchy.",
    tags: ["TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
  },
  {
    slug: "hyperion-protocol",
    title: "Hyperion Protocol",
    category: "Web Development / Fintech",
    year: "2025",
    tagline: "Next-generation institutional financial analytics interface.",
    description: "Ultra-fast low-latency dashboard built for visualizing high-throughput decentralized liquidity telemetry in real-time.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets"],
  },
] as const;

export const SAMPLE_BLOG_POSTS = [
  {
    slug: "engineering-nextjs-webgl-creative-studios",
    title: "Engineering Scalable WebGL in Next.js App Router",
    date: "2026-09-15",
    readTime: "6 min read",
    excerpt: "How to isolate client boundaries and prevent Three.js canvas from degrading SSR performance.",
    tags: ["Next.js", "Three.js", "WebGL", "Architecture"],
  },
  {
    slug: "future-of-editorial-digital-experiences",
    title: "The Convergence of High-Fashion Editorial & Creative Engineering",
    date: "2026-09-02",
    readTime: "4 min read",
    excerpt: "Why modern digital flagships are abandoning boilerplate templates in favor of typography-first design systems.",
    tags: ["Design Systems", "Typography", "Creative Direction"],
  },
] as const;
