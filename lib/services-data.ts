export interface ServiceData {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  tagline: string;
  heroDescription: string;
  metrics: { label: string; value: string }[];
  problem: {
    headline: string;
    description: string;
    painPoints: { title: string; desc: string }[];
  };
  solution: {
    headline: string;
    description: string;
    pillars: { title: string; desc: string }[];
  };
  benefits: {
    iconName: string;
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
    deliverable: string;
  }[];
  technologies: {
    category: string;
    items: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  cta: {
    headline: string;
    subline: string;
    buttonText: string;
  };
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "web-design": {
    slug: "web-design",
    number: "01",
    title: "Web Design",
    eyebrow: "Editorial Visual Architecture",
    tagline: "Bespoke digital design systems that command authority and captivate audiences.",
    heroDescription:
      "We design distinctive, high-fashion editorial interfaces and fluid user journeys that elevate your brand narrative far above cookie-cutter templates.",
    metrics: [
      { label: "Design Token Architecture", value: "100% Custom" },
      { label: "Figma to Code Fidelity", value: "Pixel-Exact" },
      { label: "Responsive Breakpoints", value: "Fluid Scalable" },
    ],
    problem: {
      headline: "The Homogenized Web Dilemma",
      description:
        "Most digital products today look identical. Generic UI component libraries and lazy templates strip brands of their distinct personality, resulting in high bounce rates and low perceived value.",
      painPoints: [
        {
          title: "Template Fatigue",
          desc: "Users immediately recognize generic themes, eroding brand trust before they read a single sentence.",
        },
        {
          title: "Neglected Typographic Hierarchy",
          desc: "Poor editorial layouts fail to guide user attention through key value propositions.",
        },
        {
          title: "Disjointed Brand Identity",
          desc: "Digital assets that don't align with high-end print, product, or architectural brand guidelines.",
        },
      ],
    },
    solution: {
      headline: "Editorial Aesthetics Driven by Engineering Precision",
      description:
        "We approach UI/UX from an editorial perspective — treating every viewport like a high-end publication layout while ensuring strict technical feasibility.",
      pillars: [
        {
          title: "Art Direction & Typographic Hierarchy",
          desc: "Carefully calibrated fonts, deliberate whitespace, and dynamic editorial rhythms.",
        },
        {
          title: "Modular Design Token Systems",
          desc: "Custom color palettes, spatial units, and component libraries ready for production code.",
        },
        {
          title: "Interactive Prototyping",
          desc: "High-fidelity micro-interactions and transitions tested before writing a single line of CSS.",
        },
      ],
    },
    benefits: [
      {
        iconName: "Palette",
        title: "Unforgettable Brand Recall",
        description: "Distinctive editorial layouts that leave lasting impressions on high-value clients and investors.",
      },
      {
        iconName: "Layers",
        title: "Scalable Component Library",
        description: "Fully organized Figma components mapped directly to production Tailwind and CSS tokens.",
      },
      {
        iconName: "Maximize2",
        title: "Flawless Responsive Behavior",
        description: "Art-directed layouts that adapt gracefully across mobile, tablet, desktop, and ultra-wide displays.",
      },
      {
        iconName: "Eye",
        title: "Accessibility by Design",
        description: "Strict WCAG AA contrast compliance and deliberate semantic hierarchy built into every screen.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Visual Audit & Moodboard",
        description: "Analyzing brand tone, typography references, and competitive positioning.",
        deliverable: "Creative Direction Manifesto & Moodboard",
      },
      {
        step: "02",
        title: "Wireframing & Information Architecture",
        description: "Structuring user flows and key conversion pathways without visual distractions.",
        deliverable: "Low-Fidelity UX Wireframe Architecture",
      },
      {
        step: "03",
        title: "High-Fidelity Editorial UI",
        description: "Crafting full visual designs with typography, imagery, colors, and dynamic states.",
        deliverable: "Interactive Figma Prototype & Design Tokens",
      },
      {
        step: "04",
        title: "Design System Documentation",
        description: "Preparing comprehensive handoff specs, typography scales, and motion parameters.",
        deliverable: "Production Design System Specs",
      },
    ],
    technologies: [
      { category: "Design Tools", items: ["Figma", "Adobe Creative Cloud", "Blender", "Penpot"] },
      { category: "Prototyping", items: ["Figma Interactive Components", "Principle", "After Effects"] },
      { category: "Handoff & Tokens", items: ["Style Dictionary", "Tailwind Token Config", "CSS Custom Properties"] },
    ],
    faq: [
      {
        question: "Do you design from existing templates or create custom layouts?",
        answer: "Every single layout we produce is crafted from scratch in Figma. We never use pre-made Bootstrap or ThemeForest templates.",
      },
      {
        question: "Will the design be delivered ready for frontend developers?",
        answer: "Yes. Our background in Computer Engineering ensures that every Figma file is structured with auto-layout, exact component variants, responsive constraints, and CSS token mappings.",
      },
      {
        question: "How do you handle revisions during the design phase?",
        answer: "We structure our workflow in iterative review milestones (Moodboard → Wireframe → High-Fidelity UI) to ensure complete alignment before advancing.",
      },
    ],
    cta: {
      headline: "Ready to elevate your digital visual identity?",
      subline: "Let's craft a bespoke editorial design system tailored to your vision.",
      buttonText: "Start Web Design Inquiry",
    },
  },

  "web-development": {
    slug: "web-development",
    number: "02",
    title: "Web Development",
    eyebrow: "Full-Stack Modern Engineering",
    tagline: "Ultra-fast Next.js applications engineered for rock-solid stability and scale.",
    heroDescription:
      "We build production-ready web applications using Next.js App Router, TypeScript, and modern edge infrastructure with sub-second load times.",
    metrics: [
      { label: "Core Web Vitals Target", value: "98+ Score" },
      { label: "Type Safety", value: "100% Strict" },
      { label: "Rendering Architecture", value: "SSR / ISR / Edge" },
    ],
    problem: {
      headline: "The High Cost of Technical Debt",
      description:
        "Bloated monolithic WordPress installs, unmaintained spaghetti JavaScript, and slow server response times drain customer conversions and create massive security risks.",
      painPoints: [
        {
          title: "Sluggish Page Transitions",
          desc: "Full-page reloads and unoptimized script bundles that cause users to abandon transactions.",
        },
        {
          title: "Brittle Codebases",
          desc: "Lack of static typing and modern architecture causing unexpected production bugs during feature updates.",
        },
        {
          title: "Vulnerable Dependencies",
          desc: "Dozens of third-party plugins that compromise security and require constant manual firefighting.",
        },
      ],
    },
    solution: {
      headline: "Modular React & Next.js App Router Architecture",
      description:
        "We build clean, strictly-typed frontends backed by serverless edge runtimes, ensuring instantaneous routing, airtight security, and seamless developer experience.",
      pillars: [
        {
          title: "React Server Components (RSC)",
          desc: "Zero-bundle-size server components that minimize client JavaScript and accelerate First Contentful Paint.",
        },
        {
          title: "Strict TypeScript Safety",
          desc: "End-to-end type safety preventing runtime exceptions across APIs and user interactions.",
        },
        {
          title: "Edge Caching & Incremental Static Regeneration",
          desc: "Global CDN delivery combined with dynamic on-demand revalidation for real-time freshness.",
        },
      ],
    },
    benefits: [
      {
        iconName: "Zap",
        title: "Sub-Second Response Times",
        description: "Optimized server execution and intelligent asset prefetching for instant page navigation.",
      },
      {
        iconName: "ShieldCheck",
        title: "Enterprise Grade Security",
        description: "Static generation, server actions with CSRF protection, and sanitized server-side execution.",
      },
      {
        iconName: "Cpu",
        title: "Clean Maintainable Codebase",
        description: "Modular component hierarchy adhering to SOLID principles and comprehensive documentation.",
      },
      {
        iconName: "GitBranch",
        title: "Automated CI/CD Workflows",
        description: "Continuous integration pipelines with automated type checking, linting, and preview deployments.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Technical Architecture & Schema Design",
        description: "Defining data models, API endpoints, routing patterns, and rendering strategies.",
        deliverable: "System Architecture & Component Blueprint",
      },
      {
        step: "02",
        title: "Core Component Engineering",
        description: "Developing reusable UI components with Tailwind CSS, TypeScript, and motion primitives.",
        deliverable: "Modular Component Storybook / Library",
      },
      {
        step: "03",
        title: "API Integration & State Management",
        description: "Connecting databases, authentication, server actions, and third-party webhooks.",
        deliverable: "Fully Functional Dynamic Staging Environment",
      },
      {
        step: "04",
        title: "Performance Optimization & Production Launch",
        description: "Bundle size audits, lighthouse optimization, edge caching configuration, and DNS cutover.",
        deliverable: "Production Release on Global Edge Infrastructure",
      },
    ],
    technologies: [
      { category: "Framework & Core", items: ["Next.js 14/15 App Router", "React 18", "TypeScript", "Node.js"] },
      { category: "Styling & Motion", items: ["Tailwind CSS", "Framer Motion", "GSAP", "Radix UI"] },
      { category: "Data & Storage", items: ["PostgreSQL", "Prisma / Drizzle", "Redis / Upstash", "Supabase"] },
      { category: "Infrastructure", items: ["Vercel Edge Network", "Cloudflare Workers", "AWS S3", "Docker"] },
    ],
    faq: [
      {
        question: "Why do you use Next.js instead of traditional CMS platforms?",
        answer: "Next.js delivers unmatched performance, global CDN distribution, advanced SEO rendering options (SSR/ISR), and total freedom from plugin bloat or database vulnerabilities.",
      },
      {
        question: "Can we integrate a Headless CMS so non-technical staff can edit content?",
        answer: "Absolutely. We seamlessly connect Next.js frontends to Headless CMS platforms like Sanity, Strapi, or Contentful with live visual previews.",
      },
      {
        question: "Will our internal team be able to maintain the codebase?",
        answer: "Yes. We deliver cleanly structured, fully-typed TypeScript code with comprehensive README documentation and standard npm scripts.",
      },
    ],
    cta: {
      headline: "Ready to build high-performance web applications?",
      subline: "Let's engineer your next digital platform with modern Next.js architecture.",
      buttonText: "Discuss Development Scope",
    },
  },

  "corporate-websites": {
    slug: "corporate-websites",
    number: "03",
    title: "Corporate Websites",
    eyebrow: "Enterprise Digital Flagships",
    tagline: "Authoritative digital flagships built to inspire investor, partner, and enterprise client confidence.",
    heroDescription:
      "We architect institutional corporate websites combining executive-level aesthetics, enterprise security, multi-region scalability, and clear stakeholder messaging.",
    metrics: [
      { label: "Uptime SLA Guarantee", value: "99.99%" },
      { label: "Compliance & Security", value: "GDPR / TLS 1.3" },
      { label: "Multi-Language Ready", value: "Native i18n" },
    ],
    problem: {
      headline: "Outdated Corporate Perception",
      description:
        "Many established enterprises operate websites that lag behind their actual industry status, alienating enterprise buyers, prospective talent, and institutional investors.",
      painPoints: [
        {
          title: "Loss of Market Credibility",
          desc: "A dated or slow website signals operational stagnation in competitive corporate RFPs.",
        },
        {
          title: "Complex Multi-Stakeholder Messaging",
          desc: "Unfocused information architecture that confuses clients, investors, press, and job seekers.",
        },
        {
          title: "Compliance & Security Concerns",
          desc: "Legacy server setups that fail modern data protection standards and accessibility regulations.",
        },
      ],
    },
    solution: {
      headline: "Engineered for Institutional Prestige & Reliability",
      description:
        "We build enterprise web presences that convey market leadership, articulate complex corporate offerings, and provide frictionless pathways for high-value business development.",
      pillars: [
        {
          title: "Strategic Stakeholder Hierarchy",
          desc: "Dedicated user pathways tailored for enterprise clients, partners, investors, and media.",
        },
        {
          title: "Enterprise Headless CMS & i18n",
          desc: "Multi-language support and role-based publishing workflows for distributed corporate marketing teams.",
        },
        {
          title: "Zero-Downtime Global Edge Hosting",
          desc: "Geographically distributed infrastructure resilient against high traffic spikes and DDoS attacks.",
        },
      ],
    },
    benefits: [
      {
        iconName: "Briefcase",
        title: "Elevated Institutional Trust",
        description: "Establishes immediate market authority in high-stakes negotiations and client evaluations.",
      },
      {
        iconName: "Globe2",
        title: "Multi-Region Global Reach",
        description: "Localized content, currency, and multi-language routing with automatic geo-detection.",
      },
      {
        iconName: "Lock",
        title: "Airtight Security Posture",
        description: "Static file generation eliminates SQL injection and traditional web server attack vectors.",
      },
      {
        iconName: "Users",
        title: "Seamless Content Governance",
        description: "Streamlined publishing workflows with granular permission tiers for corporate communication teams.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Stakeholder Discovery & Information Architecture",
        description: "Mapping corporate goals, compliance requirements, target buyer personas, and content maps.",
        deliverable: "Enterprise Information Architecture & Taxonomy",
      },
      {
        step: "02",
        title: "Brand Translation & Executive UI Design",
        description: "Creating premium digital design language that aligns with corporate guidelines.",
        deliverable: "Interactive Corporate Layout Prototypes",
      },
      {
        step: "03",
        title: "Headless CMS & Multi-Language Integration",
        description: "Setting up structured content models, localization pipelines, and workflow roles.",
        deliverable: "Connected CMS Environment with Visual Editing",
      },
      {
        step: "04",
        title: "Security Hardening, Compliance & Launch",
        description: "Penetration testing, GDPR cookie compliance, automated backups, and global DNS routing.",
        deliverable: "Production Deployment & Team Training Manual",
      },
    ],
    technologies: [
      { category: "Frontend Core", items: ["Next.js Enterprise", "TypeScript", "Tailwind CSS", "Next-Intl"] },
      { category: "Content Management", items: ["Sanity.io", "Strapi", "Payload CMS", "Contentful"] },
      { category: "Security & Compliance", items: ["Cloudflare Enterprise", "Klaviyo / HubSpot Integration", "Cookiebot / Osano"] },
      { category: "Analytics & Telemetry", items: ["PostHog (Privacy-First)", "Google Tag Manager", "Datadog RUM"] },
    ],
    faq: [
      {
        question: "Can we migrate our existing corporate blog and news archive?",
        answer: "Yes. We execute automated data migration scripts to transfer thousands of legacy articles, press releases, and PDF assets while preserving 301 redirect SEO integrity.",
      },
      {
        question: "How do you handle multi-language localization?",
        answer: "We utilize sub-path routing (e.g., /en, /de, /tr) with localized metadata, hreflang tags, and automated translation workflow hooks within the headless CMS.",
      },
      {
        question: "Do you offer post-launch maintenance and SLA support?",
        answer: "Yes. We provide scheduled retainer packages covering security updates, dependency audits, uptime monitoring, and feature enhancements.",
      },
    ],
    cta: {
      headline: "Ready to upgrade your enterprise digital flagship?",
      subline: "Let's build a corporate website that reflects your market leadership.",
      buttonText: "Schedule Corporate Consultation",
    },
  },

  "ecommerce": {
    slug: "ecommerce",
    number: "04",
    title: "E-Commerce",
    eyebrow: "High-Conversion Commerce Architecture",
    tagline: "Headless e-commerce storefronts engineered for lightning-fast checkouts and maximum revenue.",
    heroDescription:
      "We design and build bespoke shopping experiences combining Headless Shopify, custom cart mechanics, 3D product previews, and sub-second page transitions.",
    metrics: [
      { label: "Checkout Speedup", value: "Sub-Second" },
      { label: "Architecture", value: "Headless Shopify / Custom" },
      { label: "Mobile Cart UX", value: "Native App Feel" },
    ],
    problem: {
      headline: "The E-Commerce Revenue Leak",
      description:
        "Standard monolithic e-commerce themes suffer from heavy plugin bloat, sluggish mobile catalog browsing, and rigid checkout flows that suppress conversion rates.",
      painPoints: [
        {
          title: "Slow Product Page Loads",
          desc: "Every second of delay on product pages directly increases cart abandonment rates.",
        },
        {
          title: "Cookie-Cutter Storefronts",
          desc: "Brands unable to stand out against mass-market marketplaces due to rigid template constraints.",
        },
        {
          title: "Mobile UX Friction",
          desc: "Clunky drop-down menus, slow cart drawer updates, and fragmented payment flows on mobile devices.",
        },
      ],
    },
    solution: {
      headline: "Decoupled Headless Storefronts for Unrivaled Speed",
      description:
        "We separate the user-facing storefront from backend inventory management, giving you absolute creative design freedom while retaining Shopify's battle-tested checkout security.",
      pillars: [
        {
          title: "Shopify Storefront API & Next.js",
          desc: "Instantaneous product catalog filtering, dynamic stock availability, and secure checkout handoff.",
        },
        {
          title: "Optimistic Cart & Drawer Mechanics",
          desc: "Instant UI feedback upon adding items to cart with zero page refresh or loading spinners.",
        },
        {
          title: "3D & Interactive Product Showcases",
          desc: "Engaging 360-degree spatial viewers and material configurators that build buyer confidence.",
        },
      ],
    },
    benefits: [
      {
        iconName: "ShoppingCart",
        title: "Higher Conversion Velocity",
        description: "Frictionless navigation and instant cart interactions turn casual visitors into paying customers.",
      },
      {
        iconName: "Smartphone",
        title: "App-Like Mobile Experience",
        description: "Smooth swipe gestures, tactile sheet drawers, and native Apple Pay / Google Pay one-touch checkout.",
      },
      {
        iconName: "Sparkles",
        title: "Bespoke Product Storytelling",
        description: "Rich editorial product pages with custom ingredient, dimension, and video modules.",
      },
      {
        iconName: "TrendingUp",
        title: "Advanced Omnichannel Sync",
        description: "Real-time synchronization with ERP, inventory systems, warehouse fulfillment, and POS.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Commercial Strategy & Catalog Taxonomy",
        description: "Auditing product attributes, variants, bundles, shipping tiers, and conversion bottlenecks.",
        deliverable: "E-Commerce Strategy Blueprint & Taxonomy Plan",
      },
      {
        step: "02",
        title: "Storefront UX & Conversion Flow Design",
        description: "Designing bespoke product listing pages (PLP), product detail pages (PDP), and slide-out cart drawers.",
        deliverable: "High-Conversion Figma Storefront System",
      },
      {
        step: "03",
        title: "Headless Storefront Engineering",
        description: "Developing the Next.js frontend with GraphQL Storefront API, optimistic state, and WebGL viewers.",
        deliverable: "Staging Storefront with Live Inventory Sync",
      },
      {
        step: "04",
        title: "Payment Gateway Testing & Launch",
        description: "Simulating live checkout transactions, tax calculation, multi-currency routing, and webhook triggers.",
        deliverable: "Live Commercial Storefront Cutover",
      },
    ],
    technologies: [
      { category: "Commerce Engine", items: ["Shopify Plus (Storefront API)", "Commerce Layer", "Stripe", "MedusaJS"] },
      { category: "Frontend Stack", items: ["Next.js Commerce", "TypeScript", "Tailwind CSS", "Zustand"] },
      { category: "Spatial & Media", items: ["Three.js 3D Viewer", "Cloudinary Video", "Lottie"] },
      { category: "Marketing & Retention", items: ["Klaviyo Sync", "Gorgias", "Yotpo Reviews", "Google Analytics 4 Enhanced"] },
    ],
    faq: [
      {
        question: "Do we still manage products and orders in Shopify admin?",
        answer: "Yes! Your marketing and fulfillment team continues to use the standard Shopify Admin dashboard. Our headless frontend connects via secure APIs automatically.",
      },
      {
        question: "Is checkout secure on a headless storefront?",
        answer: "Absolutely. All payment processing is seamlessly routed through Shopify's Level 1 PCI-compliant hosted checkout or Stripe elements.",
      },
      {
        question: "Can we support international currencies and shipping zones?",
        answer: "Yes. We support automated multi-currency switching, localized pricing lists, and international duty calculation via Shopify Markets.",
      },
    ],
    cta: {
      headline: "Ready to scale your e-commerce revenue?",
      subline: "Let's engineer a headless storefront that transforms your conversion metrics.",
      buttonText: "Launch E-Commerce Project",
    },
  },

  "seo": {
    slug: "seo",
    number: "05",
    title: "SEO & Performance",
    eyebrow: "Technical Search & Core Web Vitals",
    tagline: "Engineering-grade search engine optimization and performance tuning for maximum organic visibility.",
    heroDescription:
      "We build deep technical SEO architecture from day one — combining structured JSON-LD data, semantic HTML5 hierarchy, sub-second TTFB, and perfect Core Web Vitals.",
    metrics: [
      { label: "Target Lighthouse Performance", value: "95 - 100" },
      { label: "Structured Data Coverage", value: "100% Validated" },
      { label: "Core Web Vitals Pass Rate", value: "100% Green" },
    ],
    problem: {
      headline: "The Invisible Architecture Penalty",
      description:
        "Visually pleasing websites frequently suffer from catastrophic SEO errors: missing server rendering, client-side hydration traps, bloated payloads, and unindexed JavaScript.",
      painPoints: [
        {
          title: "JavaScript Rendering Blocker",
          desc: "Search engine crawlers failing to index dynamic single-page application content effectively.",
        },
        {
          title: "Failing Core Web Vitals (INP / LCP / CLS)",
          desc: "Google search algorithm penalties caused by sluggish interactivity and layout shifts.",
        },
        {
          title: "Missing Structured Data (Schema.org)",
          desc: "Losing valuable rich snippets, author authority, FAQs, and product cards in search results.",
        },
      ],
    },
    solution: {
      headline: "Search Dominance Built on Clean Code & Speed",
      description:
        "We treat SEO not as a post-launch checklist, but as a foundational engineering discipline embedded directly into the codebase and build pipeline.",
      pillars: [
        {
          title: "Pre-Rendered & Static HTML Architecture",
          desc: "Every page delivers complete semantic HTML to search engine bots on initial request.",
        },
        {
          title: "Automated Rich Schema Markup (JSON-LD)",
          desc: "Structured data for Organizations, Articles, Services, FAQs, Breadcrumbs, and Products.",
        },
        {
          title: "Sub-Millisecond Asset & Font Optimization",
          desc: "Zero-CLS font loading (next/font), automated modern AVIF/WebP image pipelines, and critical CSS inlining.",
        },
      ],
    },
    benefits: [
      {
        iconName: "Search",
        title: "Higher Organic Search Rankings",
        description: "Consistent algorithm-friendly signals that build domain authority and organic traffic growth.",
      },
      {
        iconName: "BarChart3",
        title: "Google Rich Snippets & Knowledge Graphs",
        description: "Enhanced search visibility with star ratings, FAQ accordions, and sitelinks search boxes.",
      },
      {
        iconName: "Gauge",
        title: "100% Core Web Vitals Compliance",
        description: "Instantaneous INP (Interaction to Next Paint) and sub-second LCP (Largest Contentful Paint).",
      },
      {
        iconName: "Share2",
        title: "Dynamic OpenGraph Social Previews",
        description: "Automated social preview card generation ensuring professional link sharing on X, LinkedIn, and Slack.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Technical SEO & Speed Audit",
        description: "Inspecting crawl errors, TTFB, canonical hierarchies, redirect chains, and indexing roadblocks.",
        deliverable: "Comprehensive Technical SEO & Web Vitals Audit",
      },
      {
        step: "02",
        title: "Semantic Information Architecture & Keyword Strategy",
        description: "Structuring H1-H6 heading hierarchy, metadata templates, internal linking, and taxonomy.",
        deliverable: "Semantic Keyword & Content Architecture Map",
      },
      {
        step: "03",
        title: "Structured Data Implementation & Asset Budgeting",
        description: "Coding JSON-LD schemas, next/image pipelines, font preloading, and critical resource hints.",
        deliverable: "Validated Schema & Performance Optimization Suite",
      },
      {
        step: "04",
        title: "Search Console Setup & Real-User Monitoring",
        description: "Configuring dynamic sitemap.xml, robots.txt, Google Search Console indexing, and continuous RUM telemetry.",
        deliverable: "Live Indexing Verification & Telemetry Dashboard",
      },
    ],
    technologies: [
      { category: "SEO Infrastructure", items: ["Next.js Metadata API", "Schema.org (JSON-LD)", "Dynamic Sitemap Generator", "Hreflang Config"] },
      { category: "Audit & Crawling", items: ["Google Search Console", "Screaming Frog", "Ahrefs / Semrush", "Lighthouse CI"] },
      { category: "Performance Stack", items: ["Next/Image Pipeline", "next/font (Self-Hosted)", "Brotli / Gzip", "Cloudflare Early Hints"] },
      { category: "Telemetry & RUM", items: ["Vercel Speed Insights", "Google PageSpeed Insights", "Web Vitals JS"] },
    ],
    faq: [
      {
        question: "How does Next.js SSR help our Google rankings compared to client-side React?",
        answer: "With SSR (Server-Side Rendering) or SSG (Static Site Generation), Googlebot receives fully formed semantic HTML immediately without having to run expensive client-side JavaScript execution cycles.",
      },
      {
        question: "Will you implement Schema.org structured data?",
        answer: "Yes! Every page is equipped with tailored JSON-LD schemas (Service, FAQPage, Article, Organization, BreadcrumbList) validated against Google Rich Results tests.",
      },
      {
        question: "How do you guarantee Core Web Vitals scores?",
        answer: "We enforce strict performance budgets during build time, optimize critical font display swap, lazy-load non-critical scripts, and eliminate all cumulative layout shifts (CLS = 0).",
      },
    ],
    cta: {
      headline: "Ready to dominate search rankings with engineering speed?",
      subline: "Let's perform a technical SEO overhaul that elevates your brand visibility.",
      buttonText: "Request SEO & Performance Audit",
    },
  },

  "3d-experiences": {
    slug: "3d-experiences",
    number: "06",
    title: "3D Interactive Experiences",
    eyebrow: "Real-Time WebGL & Spatial Engineering",
    tagline: "Immersive 3D environments, spatial product configurators, and GLSL shaders running smoothly in the browser.",
    heroDescription:
      "We engineer hardware-accelerated 3D graphics using Three.js and React Three Fiber that captivate users while maintaining strict 60fps performance and graceful fallbacks.",
    metrics: [
      { label: "Target Frame Rate", value: "60 FPS Locked" },
      { label: "WebGL Architecture", value: "Three.js / R3F / GLSL" },
      { label: "Adaptive Quality", value: "Mobile / Low-GPU Safe" },
    ],
    problem: {
      headline: "The Heavy 3D Performance Trap",
      description:
        "Many 3D websites crash mobile browsers, cause fan-spinning GPU overheating, and suffer from massive multi-megabyte model downloads that destroy page speed.",
      painPoints: [
        {
          title: "Browser Freezes & Crashes",
          desc: "Unoptimized polygon counts and memory leaks causing tab crashes on mobile and tablet devices.",
        },
        {
          title: "10+ Second Loading Spinners",
          desc: "Giant uncompressed .gltf/.glb files causing users to bounce before the scene ever renders.",
        },
        {
          title: "Accessibility Neglect",
          desc: "3D canvases that trap keyboard focus and ignore prefers-reduced-motion user requirements.",
        },
      ],
    },
    solution: {
      headline: "Lightweight, Adaptive & Accessible 3D Engineering",
      description:
        "We build spatial web experiences with a strict performance budget: compressed DRACO/Meshopt geometries, procedural materials, custom vertex/fragment shaders, and dynamic tier scaling.",
      pillars: [
        {
          title: "Adaptive Quality Engine",
          desc: "Automatic hardware tier detection scaling particle counts, anti-aliasing, and shadow maps to match the user device.",
        },
        {
          title: "Draco & Meshopt Compression",
          desc: "3D models optimized to under 500KB with zero visual fidelity loss for instantaneous loading.",
        },
        {
          title: "Accessible Layering & Reduced Motion",
          desc: "All text and interactive UI remains standard HTML/CSS layered above the canvas with full screen reader support.",
        },
      ],
    },
    benefits: [
      {
        iconName: "Box",
        title: "Unrivaled User Engagement",
        description: "Interactive 3D exploration keeps visitors immersed on your site up to 3x longer than flat pages.",
      },
      {
        iconName: "Sliders",
        title: "Real-Time 3D Product Customization",
        description: "Enable customers to inspect products from any angle, toggle materials, and view intricate components.",
      },
      {
        iconName: "Cpu",
        title: "60 FPS Across Modern Devices",
        description: "Rigorous GPU memory management, draw call batching, and geometry instancing for silky smoothness.",
      },
      {
        iconName: "Sparkles",
        title: "Bespoke Custom Shaders",
        description: "Tailored GLSL fragment and vertex shaders creating signature holographic, liquid, and refractive effects.",
      },
    ],
    process: [
      {
        step: "01",
        title: "3D Concept & Scene Art Direction",
        description: "Storyboarding spatial camera paths, lighting concepts, geometry geometry, and shader look-dev.",
        deliverable: "Spatial Storyboard & 3D Visual Moodboard",
      },
      {
        step: "02",
        title: "Geometry Modeling & Draco Optimization",
        description: "Crafting custom low-poly models, baking normal maps, and applying Draco/Meshopt compression.",
        deliverable: "Production-Ready Compressed 3D Assets (< 500KB)",
      },
      {
        step: "03",
        title: "React Three Fiber & Shader Engineering",
        description: "Programming camera rigs, mouse parallax, scroll triggers, custom GLSL materials, and lighting.",
        deliverable: "Interactive Staging Scene with 60 FPS Telemetry",
      },
      {
        step: "04",
        title: "Adaptive Device Profiling & Fallbacks",
        description: "Implementing device tier fallbacks, reduced-motion controls, and WebGL context restoration handlers.",
        deliverable: "Production Deployment with Universal Accessibility",
      },
    ],
    technologies: [
      { category: "3D & WebGL", items: ["Three.js", "React Three Fiber", "@react-three/drei", "GLSL Shaders"] },
      { category: "3D Asset Pipeline", items: ["Blender", "Draco Compression", "gltf-transform", "Meshoptimizer"] },
      { category: "Motion & Parallax", items: ["GSAP ScrollTrigger", "Lenis Smooth Scroll", "Framer Motion"] },
      { category: "Performance & Debug", items: ["r3f-perf", "Spector.js", "Three-mesh-bvh", "LOD (Level of Detail)"] },
    ],
    faq: [
      {
        question: "Will a 3D scene slow down our website's initial page load?",
        answer: "No. We load our 3D engine asynchronously via dynamic imports with progressive background asset streaming, ensuring your initial HTML/text content displays in under 200ms.",
      },
      {
        question: "What happens if a user visits on an older mobile phone or disables WebGL?",
        answer: "Our Adaptive Quality Engine instantly falls back to a sleek, hardware-accelerated CSS animated gradient or static render, preserving full site functionality without crashes.",
      },
      {
        question: "Can 3D elements react to user scroll position and cursor movements?",
        answer: "Yes! We tie 3D camera transforms, object rotations, and shader uniforms directly to smooth scroll progress and mouse coordinates with inertial dampening.",
      },
    ],
    cta: {
      headline: "Ready to engineer an immersive 3D spatial experience?",
      subline: "Let's push the boundaries of WebGL for your brand.",
      buttonText: "Explore 3D Project Scope",
    },
  },
};
