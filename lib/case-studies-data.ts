export interface CaseStudyData {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tagline: string;
  color: string;
  accentGradient: string;
  role: string;
  timeline: string;
  overview: string;
  challenge: {
    headline: string;
    description: string;
    keyPoints: string[];
  };
  approach: {
    headline: string;
    description: string;
    methodologies: string[];
  };
  solution: {
    headline: string;
    description: string;
    features: { title: string; description: string }[];
  };
  technologies: {
    name: string;
    category: string;
    purpose: string;
  }[];
  visuals: {
    title: string;
    description: string;
    aspectRatio?: string;
  }[];
  result: {
    headline: string;
    description: string;
    metrics: { label: string; value: string; detail: string }[];
  };
}

export const CASE_STUDIES: Record<string, CaseStudyData> = {
  "quantum-nexus": {
    slug: "quantum-nexus",
    title: "Quantum Nexus",
    client: "Quantum Nexus Labs",
    category: "3D WebGL / Creative Tech",
    year: "2026",
    tagline: "Interactive multidimensional universe & brand flagship.",
    color: "#00F0FF",
    accentGradient: "from-cyan-500/30 via-blue-500/15 to-transparent",
    role: "Creative Direction & WebGL Engineering",
    timeline: "8 Weeks",
    overview:
      "Quantum Nexus required a pioneering digital headquarters that could articulate complex multidimensional quantum compute concepts through an accessible, high-performance spatial WebGL universe. The platform needed to mesmerize visitors on desktop while maintaining 60 FPS on mobile devices.",
    challenge: {
      headline: "Balancing High-Fidelity Spatial Shaders with Mobile Performance",
      description:
        "Standard WebGL pipelines often struggle with severe frame drops, thermal throttling on mobile GPUs, and memory leaks during route transitions in client-heavy Next.js single-page applications.",
      keyPoints: [
        "Rendering over 10,000 instanced particles and custom raymarched shaders without dropping below 60 FPS.",
        "Eliminating Three.js WebGL memory leaks during rapid Next.js client-side route transitions.",
        "Ensuring 100% accessible navigation and typography readability across diverse screen sizes.",
      ],
    },
    approach: {
      headline: "Modular Scene Architecture & Dynamic DPR Throttling",
      description:
        "We engineered an isolated 3D subsystem using React Three Fiber, leveraging custom GLSL vertex distortion shaders and instanced buffer geometries with automatic resource disposal hooks.",
      methodologies: [
        "Isolating 3D canvas boundaries from React Server Components to preserve sub-second FCP.",
        "Hardware-adaptive DPR scaling that dynamically adjusts sampling rates based on GPU profile.",
        "Prefers-reduced-motion fallback that transitions spatial orbits into stable isometric layouts.",
      ],
    },
    solution: {
      headline: "An Immersive, Hardware-Accelerated Quantum Portal",
      description:
        "The resulting flagship platform delivers a breathtaking cosmic journey featuring a central holographic quantum core, gravitational planetary rings, and responsive pointer physics.",
      features: [
        {
          title: "Custom GLSL Distortion Shaders",
          description: "Real-time mathematical distortion simulating quantum plasma turbulence.",
        },
        {
          title: "Multi-axis Gyroscopic Rings",
          description: "Interactive planetary rings responding to mouse parallax and touch drag gestures.",
        },
        {
          title: "Zero-Latency Routing",
          description: "Instantaneous sub-second page transitions with background asset hydration.",
        },
      ],
    },
    technologies: [
      { name: "React Three Fiber", category: "Spatial Engine", purpose: "Declarative Three.js scene orchestration" },
      { name: "Next.js 14 App Router", category: "Core Framework", purpose: "High-speed SSR and route optimization" },
      { name: "GLSL Shaders", category: "Graphics", purpose: "Custom mathematical noise and particle distortion" },
      { name: "Framer Motion", category: "Motion", purpose: "Fluid UI micro-interactions and layout transitions" },
      { name: "Tailwind CSS", category: "Styling", purpose: "Design token architecture and glassmorphism" },
    ],
    visuals: [
      {
        title: "Quantum Holographic Core",
        description: "Distorted icosahedron matrix surrounded by multi-axis neon plasma rings.",
      },
      {
        title: "Spatial Constellation Viewport",
        description: "Dynamic particle field mapping interactive nodes in real-time 3D coordinate space.",
      },
    ],
    result: {
      headline: "60 FPS Everywhere & Exceptional Brand Distinction",
      description:
        "The platform launched globally with zero performance regressions, establishing Quantum Nexus as an indisputable authority in next-generation computing.",
      metrics: [
        { label: "Rendering Velocity", value: "60 FPS", detail: "Locked framerate across tested mobile & desktop GPUs" },
        { label: "Lighthouse Performance", value: "98/100", detail: "Fast First Contentful Paint & zero layout shifts" },
        { label: "Client Session Depth", value: "+340%", detail: "Increase in average time spent exploring interactive models" },
      ],
    },
  },

  "biomorphic-studio": {
    slug: "biomorphic-studio",
    title: "Biomorphic Studio",
    client: "Biomorphic Architectural Atelier",
    category: "Corporate & Visual Identity",
    year: "2026",
    tagline: "Generative organic architecture for an avant-garde design studio.",
    color: "#CCFF00",
    accentGradient: "from-lime-400/30 via-emerald-500/15 to-transparent",
    role: "Full-Stack Design Engineering",
    timeline: "6 Weeks",
    overview:
      "Biomorphic Studio is an avant-garde architectural atelier specializing in bio-inspired sustainable structures. They commissioned an authoritative digital flagship that reflects their radical geometric philosophies and precision engineering.",
    challenge: {
      headline: "Translating Physical Organic Architecture into Digital Precision",
      description:
        "The visual identity needed to avoid sterile corporate templates while preserving pristine typography readability, institutional trust, and high-performance image galleries.",
      keyPoints: [
        "Crafting bespoke typography-first layout systems with custom fluid scaling.",
        "Smooth scroll-driven storytelling without lag on high-refresh-rate displays.",
        "Curating high-resolution architectural photography with optimized responsive image loaders.",
      ],
    },
    approach: {
      headline: "Editorial Design System & Lenis Smooth Scroll Integration",
      description:
        "We developed a custom design token architecture in Tailwind CSS, integrated Lenis smooth scrolling with GSAP ScrollTrigger, and created an adaptive dark/light editorial palette.",
      methodologies: [
        "Strict typographic hierarchy inspired by Swiss architectural monographs.",
        "Virtual scroll virtualization for high-density image grids to prevent main thread blocking.",
        "Accessible contrast ratios compliant with WCAG AAA standards.",
      ],
    },
    solution: {
      headline: "A Harmonious Union of Biological Form and Modern Code",
      description:
        "The digital experience guides visitors through Biomorphic Studio's projects with tactile scroll-triggered transitions, rich editorial case studies, and seamless client enquiry flows.",
      features: [
        {
          title: "Lenis Virtualized Scroll",
          description: "Silky-smooth inertia scrolling optimized for trackpads and mouse wheels.",
        },
        {
          title: "Dynamic Token Theming",
          description: "Effortless dark and light theme switching with consistent typography contrast.",
        },
        {
          title: "Architectural Gallery Matrix",
          description: "Responsive multi-column visual showcase with subtle hover expansions.",
        },
      ],
    },
    technologies: [
      { name: "Next.js App Router", category: "Core Framework", purpose: "Static generation & SEO routing" },
      { name: "TypeScript", category: "Language", purpose: "Strict type safety across the entire design system" },
      { name: "GSAP ScrollTrigger", category: "Animation", purpose: "Scroll-linked narrative pacing" },
      { name: "Lenis", category: "Scroll Engine", purpose: "Hardware-accelerated smooth scrolling" },
      { name: "Tailwind CSS", category: "CSS Architecture", purpose: "Utility-first design tokens" },
    ],
    visuals: [
      {
        title: "Architectural Monograph Layout",
        description: "Editorial layout with high-contrast serif and monospace typography.",
      },
      {
        title: "Case Study Grid Showcase",
        description: "Responsive visual masonry displaying high-resolution project captures.",
      },
    ],
    result: {
      headline: "Award-Winning Editorial Presence & Inbound Inquiries",
      description:
        "The website established Biomorphic Studio as an elite architectural practice, doubling client inquiry rates within the first month of launch.",
      metrics: [
        { label: "Core Web Vitals", value: "100%", detail: "Sub-second LCP and zero Cumulative Layout Shift" },
        { label: "Inbound Leads", value: "+210%", detail: "Increase in high-value enterprise project inquiries" },
        { label: "Accessibility Score", value: "100/100", detail: "Full keyboard navigability and WCAG AAA contrast" },
      ],
    },
  },

  "hyperion-protocol": {
    slug: "hyperion-protocol",
    title: "Hyperion Protocol",
    client: "Hyperion Liquidity Network",
    category: "Web Application / Fintech",
    year: "2025",
    tagline: "Next-generation institutional financial analytics interface.",
    color: "#9D00FF",
    accentGradient: "from-purple-500/30 via-violet-500/15 to-transparent",
    role: "Frontend Architecture & Interface Engineering",
    timeline: "10 Weeks",
    overview:
      "Hyperion Protocol required an ultra-fast institutional financial dashboard capable of visualizing high-throughput decentralized liquidity streams in real-time with zero UI stutter.",
    challenge: {
      headline: "Visualizing Millisecond WebSockets Feeds Without Frame Drops",
      description:
        "High-frequency financial telemetry can easily overwhelm the DOM with continuous re-renders, causing browser freezing and unresponsiveness.",
      keyPoints: [
        "Handling over 1,000 WebSocket market updates per second without UI latency.",
        "Building lightweight canvas-based financial charts with sub-millisecond draw times.",
        "Ensuring bulletproof enterprise-grade security and authentication standards.",
      ],
    },
    approach: {
      headline: "Offscreen Canvas Rendering & State Batching",
      description:
        "We implemented a high-performance state architecture utilizing requestAnimationFrame batching, offscreen canvas chart rendering, and decoupled WebSocket subscribers.",
      methodologies: [
        "Decoupled React re-renders from raw WebSocket telemetry using custom event buffers.",
        "Modular grid layout enabling traders to customize their workspace layouts.",
        "Zero-dependency mathematical utility library for real-time liquidity aggregations.",
      ],
    },
    solution: {
      headline: "An Institutional Terminal Engineered for Speed",
      description:
        "The Hyperion Terminal delivers a desktop-grade financial workstation in the browser with dark-mode optimized cybernetic typography, custom depth charts, and live order books.",
      features: [
        {
          title: "Real-Time Telemetry Grid",
          description: "Sub-10ms data updates with visual flash indicators on price shifts.",
        },
        {
          title: "Custom Order Book Visualizer",
          description: "High-density liquidity depth charts with smooth zoom and pan controls.",
        },
        {
          title: "Multi-Monitor Workspace",
          description: "Responsive layouts adapted for ultra-wide trading monitor setups.",
        },
      ],
    },
    technologies: [
      { name: "Next.js 14", category: "Core Framework", purpose: "Production server and API edge routes" },
      { name: "TypeScript", category: "Language", purpose: "End-to-end type safety with backend schemas" },
      { name: "WebSockets", category: "Networking", purpose: "Persistent bidirectional streaming feeds" },
      { name: "HTML5 Canvas", category: "Data Visualization", purpose: "Sub-millisecond chart rendering" },
      { name: "Tailwind CSS", category: "Styling", purpose: "Low-overhead cybernetic dashboard themes" },
    ],
    visuals: [
      {
        title: "Institutional Order Book",
        description: "High-density real-time liquidity visualization with cybernetic accents.",
      },
      {
        title: "Live Liquidity Depth Chart",
        description: "Hardware-accelerated financial plotting with sub-millisecond latency.",
      },
    ],
    result: {
      headline: "Sub-10ms UI Latency & Institutional Adoption",
      description:
        "Hyperion Protocol successfully onboarded major institutional liquidity providers, handling over $500M in daily trading volume with zero client-side crashes.",
      metrics: [
        { label: "Telemetry Latency", value: "< 8ms", detail: "Real-time state update to screen paint latency" },
        { label: "Memory Footprint", value: "< 45MB", detail: "Sustained low heap memory over 24-hour trading sessions" },
        { label: "Client Uptime", value: "99.99%", detail: "Zero client-side crashes across all major browsers" },
      ],
    },
  },

  "aetheria-commerce": {
    slug: "aetheria-commerce",
    title: "Aetheria Commerce",
    client: "Aetheria Luxury Goods",
    category: "Headless E-Commerce",
    year: "2025",
    tagline: "High-conversion luxury lifestyle commerce experience.",
    color: "#FFB800",
    accentGradient: "from-amber-400/30 via-orange-500/15 to-transparent",
    role: "Headless Shopify Architecture & UI Engineering",
    timeline: "7 Weeks",
    overview:
      "Aetheria is an international luxury design house seeking a bespoke headless commerce platform to replace their restrictive legacy Shopify setup, focusing on instant page transitions and frictionless checkout.",
    challenge: {
      headline: "Eliminating Page Reload Latency in High-End Commerce",
      description:
        "Traditional ecommerce themes introduce noticeable lag during filtering and cart operations, causing drop-offs among high-net-worth customers.",
      keyPoints: [
        "Integrating Shopify Storefront GraphQL API with Next.js edge caching.",
        "Building instant client-side product filtering without network roundtrips.",
        "Delivering a bespoke sliding drawer cart with real-time currency conversion.",
      ],
    },
    approach: {
      headline: "Headless Architecture & Edge-Rendered Product Catalogs",
      description:
        "We decoupled the storefront using Next.js App Router, connected to Shopify's Storefront GraphQL API, and implemented optimistic UI updates for cart interactions.",
      methodologies: [
        "Optimistic cart state updates for immediate tactile customer feedback.",
        "Static page pre-rendering with On-Demand Revalidation upon Shopify inventory updates.",
        "Mobile-first checkout flow with Apple Pay and Google Pay one-tap purchasing.",
      ],
    },
    solution: {
      headline: "A Seamless Editorial Shopping Journey",
      description:
        "Aetheria Storefront blends high-fashion editorial imagery with instant shopping capabilities, resulting in an effortless digital boutique experience.",
      features: [
        {
          title: "Headless Cart Engine",
          description: "Zero-latency drawer cart with instant currency switching and stock checks.",
        },
        {
          title: "Editorial Lookbook Integration",
          description: "Interactive lookbooks allowing customers to shop directly from curated photoshoots.",
        },
        {
          title: "Sub-second Filtering",
          description: "Instantaneous multi-attribute search and filtering with zero layout shifts.",
        },
      ],
    },
    technologies: [
      { name: "Shopify GraphQL", category: "Commerce Engine", purpose: "Headless product catalog & checkout" },
      { name: "Next.js App Router", category: "Core Framework", purpose: "Edge rendering & incremental regeneration" },
      { name: "Framer Motion", category: "Animation", purpose: "Editorial layout transitions & cart slide" },
      { name: "Tailwind CSS", category: "Styling", purpose: "Minimalist luxury typography system" },
    ],
    visuals: [
      {
        title: "Editorial Lookbook Boutique",
        description: "Interactive shoppable campaign photography with hot-spot product links.",
      },
      {
        title: "Headless Cart Experience",
        description: "Instantaneous sliding drawer cart with one-tap payment options.",
      },
    ],
    result: {
      headline: "+45% Cart Conversion & Global Scale",
      description:
        "Following launch, Aetheria experienced an immediate surge in international sales and mobile conversions, setting a new benchmark for headless commerce.",
      metrics: [
        { label: "Checkout Conversion", value: "+45%", detail: "Increase in completed checkout transactions" },
        { label: "Page Load Speed", value: "0.4s", detail: "Sub-second global average page transition time" },
        { label: "Mobile Bounce Rate", value: "-32%", detail: "Significant reduction in mobile visitor abandonment" },
      ],
    },
  },
};
