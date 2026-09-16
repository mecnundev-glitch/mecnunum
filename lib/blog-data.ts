export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  url?: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  codeSnippet?: {
    language: string;
    code: string;
    caption?: string;
  };
  quote?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: {
    introduction: string;
    sections: BlogSection[];
    conclusion: string;
  };
  cover: string;
  date: string;
  author: BlogAuthor;
  category: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  readingTime: string;
  featured?: boolean;
}

export const BLOG_AUTHORS: Record<string, BlogAuthor> = {
  tayfur: {
    name: "Tayfur Parmak",
    role: "Computer Engineer & Web Developer",
    avatar: "/brand/avatar-tayfur.jpg",
    url: "https://mecnun.dev/about",
  },
  mecnun: {
    name: "MECNUN Studio Lead",
    role: "Creative Technology & 3D Architecture",
    avatar: "/brand/avatar-studio.jpg",
    url: "https://mecnun.dev",
  },
};

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Engineering 60 FPS WebGL in Next.js 14 App Router",
    slug: "engineering-nextjs-webgl-creative-studios",
    excerpt:
      "A deep technical breakdown of managing Three.js canvas lifecycles, memory leaks, and dynamic imports within React Server Components.",
    cover: "/images/blog/webgl-nextjs.webp",
    date: "2026-08-15",
    author: BLOG_AUTHORS.tayfur,
    category: "Engineering & 3D",
    tags: ["Next.js", "Three.js", "WebGL", "Performance", "React 18"],
    seoTitle: "Engineering 60 FPS WebGL in Next.js 14 App Router // MECNUN",
    seoDescription:
      "Learn how to architect high-performance Three.js scenes and WebGL canvases inside Next.js 14 without degrading Core Web Vitals or bloating bundle sizes.",
    readingTime: "6 min read",
    featured: true,
    content: {
      introduction:
        "Embedding real-time 3D graphics into a commercial web platform is often viewed as a trade-off between visual flair and performance. However, with the right React Server Component (RSC) isolation, Draco model compression, and disciplined WebGL lifecycle management, you can achieve cinematic 60 FPS spatial interactions with sub-second page loads.",
      sections: [
        {
          heading: "1. The Server vs. Client Boundary Isolation",
          paragraphs: [
            "Next.js App Router defaults all pages to Server Components. Attempting to render Three.js or React Three Fiber directly on the server causes hydration crashes because WebGL contexts and window event listeners do not exist in Node.js.",
            "The solution is dynamic loading with SSR disabled. This ensures zero WebGL JavaScript is included in the initial server HTML payload, keeping the First Contentful Paint (FCP) lightning fast.",
          ],
          codeSnippet: {
            language: "tsx",
            caption: "Asynchronous WebGL Scene Isolation in Next.js",
            code: `import dynamic from "next/dynamic";

// Dynamic import with zero server-side bundle overhead
const CosmicHeroScene = dynamic(
  () => import("@/components/three/CosmicHeroScene").then((mod) => mod.CosmicHeroScene),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-background/50 backdrop-blur-md" />,
  }
);`,
          },
        },
        {
          heading: "2. Preventing GPU Memory Leaks on Unmount",
          paragraphs: [
            "Three.js does not automatically garbage collect geometries, materials, or textures when React unmounts a component. Over time, navigating between routes fills VRAM, eventually causing browser tab crashes on mobile devices.",
            "Every custom mesh must explicitly dispose of its geometry and materials during cleanup.",
          ],
          quote:
            "A WebGL memory leak is silent until your user's browser crashes. Explicit disposal in useEffect cleanups is non-negotiable for production creative engineering.",
          codeSnippet: {
            language: "typescript",
            caption: "Disciplined Resource Cleanup in Three.js",
            code: `useEffect(() => {
  return () => {
    geometry.dispose();
    if (Array.isArray(material)) {
      material.forEach((m) => m.dispose());
    } else {
      material.dispose();
    }
    renderer.dispose();
  };
}, [geometry, material, renderer]);`,
          },
        },
        {
          heading: "3. Adaptive Quality Tiering for Universal Hardware Support",
          paragraphs: [
            "Never assume your user is browsing on an Apple M3 Max with a dedicated GPU. Mobile devices and integrated laptop GPUs require automatic downscaling of device pixel ratios (DPR), shadow resolution, and particle counts.",
            "By implementing a lightweight hardware telemetry hook, the canvas automatically tunes itself from 1000 particles at 2x DPR down to 250 particles at 1x DPR without user intervention.",
          ],
        },
      ],
      conclusion:
        "High-performance 3D is not about overwhelming the GPU; it is about deliberate architectural restraint. By treating WebGL as a modular layer rather than a monolithic dependency, creative web developers can deliver world-class digital experiences that load instantly.",
    },
  },

  {
    title: "The Death of Template Web Design: Editorial Digital Experiences",
    slug: "future-of-editorial-digital-experiences",
    excerpt:
      "Why modern brands are abandoning cookie-cutter component libraries in favor of high-fashion typographic systems and bespoke spatial narratives.",
    cover: "/images/blog/editorial-design.webp",
    date: "2026-07-28",
    author: BLOG_AUTHORS.tayfur,
    category: "Design Systems",
    tags: ["UI/UX", "Editorial", "Typography", "Branding", "Creative Tech"],
    seoTitle: "The Death of Template Web Design: Editorial Digital Experiences // MECNUN",
    seoDescription:
      "Explore why high-end brands are rejecting generic UI kits in favor of custom editorial typography, deliberate whitespace, and narrative-driven digital flagships.",
    readingTime: "5 min read",
    featured: false,
    content: {
      introduction:
        "Look at the modern web: dozens of SaaS and studio websites use the exact same rounded cards, identical pastel button gradients, and generic hero illustrations. When every company uses the same off-the-shelf design system, digital presences become entirely interchangeable. The antidote is editorial web design.",
      sections: [
        {
          heading: "1. The Tyranny of the Component Card Grid",
          paragraphs: [
            "Modern frontend frameworks made it trivially easy to drop 3-column card grids onto every viewport. While functional, it treats content as homogeneous containers rather than a dynamic editorial narrative.",
            "Editorial design takes cues from architectural monographs and high-fashion editorial print: deliberate asymmetrical compositions, oversized monospaced typography, and intentional negative space that commands respect.",
          ],
        },
        {
          heading: "2. Typographic Hierarchy as Visual Art",
          paragraphs: [
            "In editorial web engineering, typography is not merely text — it is the primary graphic element. Combining geometric monospaced display headings with high-contrast serif details creates an immediate sense of prestige.",
            "By combining fluid CSS clamp() units with scroll-driven word reveals, typography transforms from static text into a living, responsive voice.",
          ],
          quote:
            "When typography is engineered with mathematical precision, you do not need decorative fluff to make a website feel premium.",
        },
        {
          heading: "3. Micro-Interactions that Serve Narrative",
          paragraphs: [
            "Micro-interactions should never be added simply because they look flashy. Magnetic CTA buttons, subtle cursor proximity glows, and smooth Lenis inertial scroll should feel like natural physical friction.",
            "Every motion curve should be unified under standard spring physics (damping: 20, stiffness: 300) to ensure a cohesive tactile sensation across the entire user journey.",
          ],
        },
      ],
      conclusion:
        "Building an editorial digital experience requires moving beyond template assembly and stepping into creative direction backed by strict engineering rigor.",
    },
  },

  {
    title: "Sub-Second Core Web Vitals: Eliminating Hydration Overhead",
    slug: "sub-second-performance-core-web-vitals",
    excerpt:
      "How to achieve 98+ Lighthouse scores and 0ms Cumulative Layout Shift (CLS) in complex Next.js applications.",
    cover: "/images/blog/performance-cwv.webp",
    date: "2026-07-10",
    author: BLOG_AUTHORS.tayfur,
    category: "Performance & SEO",
    tags: ["Performance", "Core Web Vitals", "Next.js", "SEO", "Optimization"],
    seoTitle: "Sub-Second Core Web Vitals: Eliminating Hydration Overhead // MECNUN",
    seoDescription:
      "A pragmatic guide to passing Google Core Web Vitals (INP, LCP, CLS) with 98+ scores using Next.js 14 and edge performance techniques.",
    readingTime: "7 min read",
    featured: false,
    content: {
      introduction:
        "Google's transition to Interaction to Next Paint (INP) as a core ranking signal has made real-world UI responsiveness a direct SEO ranking factor. Achieving perfect Core Web Vitals is no longer an afterthought — it is an engineering discipline.",
      sections: [
        {
          heading: "1. Zero-CLS Font Loading Architecture",
          paragraphs: [
            "Cumulative Layout Shift (CLS) is most frequently triggered by web font swaps where the fallback font dimensions differ from the final custom font. This causes content to jump when fonts load.",
            "Using next/font with local font preloading automatically calculates size-adjust, ascent-override, and descent-override CSS properties, resulting in absolute 0.00 CLS across all page transitions.",
          ],
        },
        {
          heading: "2. Slashing Largest Contentful Paint (LCP)",
          paragraphs: [
            "To hit sub-second LCP on image or text hero elements, priority resource hints and modern AVIF image encoding are essential.",
            "Avoid loading third-party tracking scripts in the <head> document. Defer all telemetry to next/script with strategy='lazyOnload' to free the main browser thread for critical DOM rendering.",
          ],
        },
        {
          heading: "3. Conquering Interaction to Next Paint (INP)",
          paragraphs: [
            "Long tasks over 50ms block the main thread and degrade INP scores. Break heavy state updates into non-blocking chunks using React's startTransition API and requestIdleCallback.",
          ],
          codeSnippet: {
            language: "typescript",
            caption: "Non-Blocking State Updates with React Transitions",
            code: `import { useTransition } from "react";

const [isPending, startTransition] = useTransition();

const handleFilterChange = (category: string) => {
  // Keeps the input or button response immediate while transitioning list items
  startTransition(() => {
    setActiveCategory(category);
  });
};`,
          },
        },
      ],
      conclusion:
        "Core Web Vitals optimization is not about hacking metrics; it is about building respectful, lightweight software that honors user time and battery life.",
    },
  },

  {
    title: "Headless Commerce Architecture: Blending Shopify Storefront API with Next.js",
    slug: "headless-shopify-nextjs-architecture",
    excerpt:
      "Architecting headless e-commerce platforms with optimistic cart mutations, ISR caching, and frictionless checkout handoff.",
    cover: "/images/blog/headless-commerce.webp",
    date: "2026-06-22",
    author: BLOG_AUTHORS.mecnun,
    category: "E-Commerce",
    tags: ["E-Commerce", "Shopify", "Headless", "Next.js", "GraphQL"],
    seoTitle: "Headless Commerce Architecture: Shopify Storefront API & Next.js // MECNUN",
    seoDescription:
      "How to build high-conversion headless e-commerce storefronts using Shopify Storefront GraphQL API and Next.js App Router.",
    readingTime: "6 min read",
    featured: false,
    content: {
      introduction:
        "Traditional monolithic e-commerce themes force merchants to choose between Shopify's robust backend and modern design freedom. Headless e-commerce bridges this gap by decoupling the frontend presentation layer from inventory management.",
      sections: [
        {
          heading: "1. The Power of the Shopify Storefront GraphQL API",
          paragraphs: [
            "By communicating directly with Shopify via GraphQL, Next.js can request only the exact product attributes, variants, and image ratios required for a given viewport.",
            "Using Incremental Static Regeneration (ISR), product listing pages are statically cached globally and revalidated in the background whenever inventory changes.",
          ],
        },
        {
          heading: "2. Optimistic UI for Zero-Latency Cart Actions",
          paragraphs: [
            "Traditional e-commerce carts display loading spinners while waiting for server confirmation. With optimistic state management via Zustand or React Server Actions, the cart drawer slides open and reflects the added product in 0ms.",
            "If the network request encounters a stock limit error, the UI gracefully rolls back with an actionable notification.",
          ],
        },
      ],
      conclusion:
        "Headless commerce delivers the ultimate shopping experience: lightning-speed browsing that maximizes revenue while retaining total enterprise backend security.",
    },
  },
];

/**
 * Extensible Provider Layer:
 * Can be swapped with Sanity, Strapi, Contentful, or PostgreSQL/Drizzle query without touching page UI.
 */
export async function getAllPosts(): Promise<BlogPost[]> {
  return BLOG_POSTS;
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export async function getRelatedPosts(
  currentSlug: string,
  category: string,
  tags: string[],
  limit = 2
): Promise<BlogPost[]> {
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== currentSlug);

  // Score posts by category match (+3) and tag matches (+1 per tag)
  const scored = otherPosts.map((post) => {
    let score = 0;
    if (post.category === category) score += 3;
    post.tags.forEach((tag) => {
      if (tags.includes(tag)) score += 1;
    });
    return { post, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.post);
}

export async function getAllCategories(): Promise<string[]> {
  const categories = new Set(BLOG_POSTS.map((p) => p.category));
  return Array.from(categories);
}

export async function getAllTags(): Promise<string[]> {
  const tags = new Set(BLOG_POSTS.flatMap((p) => p.tags));
  return Array.from(tags);
}
