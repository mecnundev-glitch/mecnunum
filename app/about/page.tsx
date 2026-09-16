import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { InteractiveTechMatrix } from "@/components/sections/interactive-tech-matrix";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Cpu,
  Code2,
  Server,
  Globe2,
  Gauge,
  Box,
  Terminal,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About — Computer Engineer & Web Developer | MECNUN",
  description:
    "Tayfur Parmak / MECNUN — Computer Engineer & Web Developer crafting modern full-stack web applications, bespoke design systems, and interactive 3D WebGL experiences.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About — Computer Engineer & Web Developer | MECNUN",
    description: "Engineering rigor meets creative direction. Discover our capabilities, technology stack, and engineering philosophy.",
    url: `${siteConfig.url}/about`,
  },
};

const CORE_DISCIPLINES = [
  {
    title: "Computer Engineering",
    tagline: "Systems architecture, algorithmic rigor, and clean abstraction.",
    icon: Cpu,
    color: "text-studio-cyan",
    border: "hover:border-studio-cyan/50",
    bgGlow: "bg-studio-cyan/5",
    desc: "Approaching web applications from foundational computer science principles: algorithmic efficiency, clean data structures, memory management, and robust error boundaries.",
  },
  {
    title: "Frontend Engineering",
    tagline: "High-precision components, fluid motion, and pixel perfection.",
    icon: Code2,
    color: "text-studio-lime",
    border: "hover:border-studio-lime/50",
    bgGlow: "bg-studio-lime/5",
    desc: "Handcrafted UI component architecture using React 18 and Next.js 14. Responsive layouts, accessible ARIA roles, and silky-smooth kinetic micro-interactions.",
  },
  {
    title: "Backend & Systems",
    tagline: "High-throughput APIs, data integrity, and microservices.",
    icon: Server,
    color: "text-purple-400",
    border: "hover:border-purple-400/50",
    bgGlow: "bg-purple-400/5",
    desc: "Building resilient REST & GraphQL API gateways, Node.js asynchronous runtimes, PostgreSQL relational data models, and edge-distributed serverless functions.",
  },
  {
    title: "Web Development",
    tagline: "Next.js App Router, SSR/SSG, and full-stack TypeScript.",
    icon: Globe2,
    color: "text-amber-400",
    border: "hover:border-amber-400/50",
    bgGlow: "bg-amber-400/5",
    desc: "Complete end-to-end full-stack development delivering scalable web flagships, headless ecommerce stores, and high-conversion commercial web applications.",
  },
  {
    title: "Technical SEO",
    tagline: "Structured JSON-LD schema, semantic DOM, and organic dominance.",
    icon: Layers,
    color: "text-emerald-400",
    border: "hover:border-emerald-400/50",
    bgGlow: "bg-emerald-400/5",
    desc: "Deep technical search engine optimization: automated sitemaps, open-graph metadata, dynamic canonical tags, and structured schema markup engineered to rank.",
  },
  {
    title: "Performance & CWV",
    tagline: "Sub-second LCP, 60 FPS rendering, and zero layout shift.",
    icon: Gauge,
    color: "text-sky-400",
    border: "hover:border-sky-400/50",
    bgGlow: "bg-sky-400/5",
    desc: "Obsessive optimization for Google Core Web Vitals. Hardware-accelerated GPU layers, tree-shaken bundles, edge caching, and memory leak elimination.",
  },
  {
    title: "Interactive Experiences",
    tagline: "WebGL, Three.js shaders, and spatial canvas universes.",
    icon: Box,
    color: "text-studio-fuchsia",
    border: "hover:border-studio-fuchsia/50",
    bgGlow: "bg-studio-fuchsia/5",
    desc: "Pushing the boundaries of the browser with custom GLSL shaders, React Three Fiber universes, physics-based simulations, and immersive spatial storytelling.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen py-16 sm:py-24 overflow-hidden">
      {/* Dynamic Cosmic Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-28 right-1/4 h-[650px] w-[650px] rounded-full bg-studio-cyan/10 blur-[190px] dark:bg-studio-cyan/15" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full bg-studio-lime/8 blur-[180px] dark:bg-studio-lime/10" />

      <Container className="relative z-10">
        {/* ─── 01 HERO BRAND IDENTITY ─── */}
        <FadeIn direction="up">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-studio-cyan/30 bg-white/5 px-4 py-1.5 text-xs font-mono text-studio-cyan backdrop-blur-md">
              <MecnunCatIcon size={18} />
              <span>COMPUTER ENGINEER & WEB DEVELOPER</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase font-mono text-foreground">
              ENGINEERING RIGOR. <br />
              <span className="bg-gradient-to-r from-studio-cyan via-studio-lime to-studio-fuchsia bg-clip-text text-transparent">
                CREATIVE DIRECTION.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-2xl font-medium text-zinc-200 leading-relaxed max-w-3xl">
              I am a <span className="text-foreground font-bold">Computer Engineer and Web Developer</span> building bespoke digital flagships, high-performance web applications, and interactive 3D WebGL experiences for forward-thinking brands.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-studio-lime" />
                <span>Zero-Template Engineering</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-studio-cyan" />
                <span>Full-Stack Architecture</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-studio-fuchsia" />
                <span>Global Remote & Istanbul</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ─── 02 7 CORE DISCIPLINES GRID ─── */}
        <section aria-labelledby="disciplines-heading" className="mt-20 sm:mt-28 pt-12 border-t border-white/10">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-xs text-studio-lime font-bold tracking-wider">
                  01 // CAPABILITIES MATRIX
                </span>
                <h2 id="disciplines-heading" className="mt-1 text-2xl sm:text-4xl font-mono font-black uppercase text-foreground">
                  Core Disciplines & Expertise
                </h2>
              </div>
              <p className="max-w-md text-xs sm:text-sm text-muted-foreground">
                Synthesizing engineering discipline, systems thinking, and high-fashion editorial aesthetics.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_DISCIPLINES.map((discipline, idx) => {
                const Icon = discipline.icon;

                return (
                  <div
                    key={idx}
                    className={cn(
                      "rounded-3xl border border-white/10 bg-zinc-950/70 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)]",
                      discipline.border,
                      discipline.bgGlow
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={cn(
                          "h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center",
                          discipline.color
                        )}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-[11px] text-muted-foreground/60 font-bold">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 font-mono text-xl font-bold text-foreground">
                      {discipline.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs font-semibold text-zinc-400">
                      {discipline.tagline}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {discipline.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </section>

        {/* ─── 03 INTERACTIVE TECHNOLOGY VISUALIZATION (NOT A BORING LOGO GRID!) ─── */}
        <section aria-labelledby="stack-heading" className="mt-20 sm:mt-28 pt-12 border-t border-white/10">
          <FadeIn direction="up">
            <InteractiveTechMatrix />
          </FadeIn>
        </section>

        {/* ─── 04 ENGINEERING MANIFESTO & PHILOSOPHY BOX ─── */}
        <section aria-labelledby="manifesto-box-heading" className="mt-20 sm:mt-28">
          <FadeIn direction="up">
            <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-8 sm:p-12 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
              <div className="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-studio-cyan/20 blur-[130px]" />

              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-mono text-studio-lime font-bold">
                  <Terminal className="h-4 w-4" />
                  <span>ENGINEERING PHILOSOPHY</span>
                </div>

                <h3 id="manifesto-box-heading" className="mt-4 text-2xl sm:text-4xl font-mono font-black uppercase text-foreground leading-tight">
                  &ldquo;Code is not just functionality. In modern digital craft, architecture is brand identity.&rdquo;
                </h3>

                <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Every interface we produce is handcrafted from the ground up. We eliminate sluggish third-party plugin bloat and heavy boilerplates in favor of tight TypeScript architecture, purpose-built components, and hardware-accelerated 3D rendering.
                </p>

                <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap items-center gap-4">
                  <Magnetic strength={0.2}>
                    <Link href="/contact">
                      <Button
                        variant="accent"
                        size="lg"
                        className="gap-2 font-extrabold text-black shadow-[0_0_30px_rgba(204,255,0,0.35)]"
                      >
                        <Sparkles className="h-4 w-4 fill-current text-black" />
                        <span>Start a Collaboration</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </Magnetic>

                  <Magnetic strength={0.2}>
                    <Link href="/work">
                      <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 border-white/15 font-mono font-bold text-xs uppercase"
                      >
                        <span>Explore Portfolio</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </Container>
    </div>
  );
}
