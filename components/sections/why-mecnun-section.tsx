"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { FadeIn } from "@/components/motion/fade-in";
import { InteractiveTechMatrix } from "@/components/sections/interactive-tech-matrix";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";
import {
  Sparkles,
  Terminal,
  Cpu,
  Code2,
  Gauge,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const WHY_DIFFERENTIATORS = [
  {
    number: "01",
    title: "Computer Engineer Rigor",
    subtitle: "Built from algorithmic first principles",
    desc: "Not a template agency relying on fragile page-builders. Every component, state machine, and data pipeline is architected for clean scale and security.",
    icon: Cpu,
    color: "text-studio-cyan",
    border: "border-studio-cyan/30",
    glow: "bg-studio-cyan/5",
  },
  {
    number: "02",
    title: "Editorial Digital Artistry",
    subtitle: "Awwwards-level bespoke aesthetics",
    desc: "Balancing high-fashion editorial typography, fluid spring dynamics, and subtle dark-mode glassmorphism that gives your brand immediate authority.",
    icon: Sparkles,
    color: "text-studio-lime",
    border: "border-studio-lime/30",
    glow: "bg-studio-lime/5",
  },
  {
    number: "03",
    title: "Purpose-Driven 3D & WebGL",
    subtitle: "Narrative, interaction, and information",
    desc: "Zero gratuitous particle noise. 3D scenes are engineered with adaptive GPU throttling, 60 FPS hardware acceleration, and accessible WebGL fallbacks.",
    icon: Layers,
    color: "text-studio-fuchsia",
    border: "border-studio-fuchsia/30",
    glow: "bg-studio-fuchsia/5",
  },
  {
    number: "04",
    title: "Sub-Second Performance",
    subtitle: "Core Web Vitals & Lighthouse 95+",
    desc: "Edge-distributed Next.js 14 App Router, modern AVIF/WebP image streaming, and tree-shaken bundles that convert visitors without lag.",
    icon: Gauge,
    color: "text-amber-400",
    border: "border-amber-400/30",
    glow: "bg-amber-400/5",
  },
];

export function WhyMecnunSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why-mecnun"
      aria-labelledby="why-mecnun-heading"
      className="relative z-10 w-full py-28 sm:py-36 border-t border-white/10 dark:border-white/5 bg-background/90 dark:bg-zinc-950/90 backdrop-blur-xl overflow-hidden"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-[600px] w-[600px] rounded-full bg-studio-cyan/10 blur-[190px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-studio-lime/8 blur-[180px]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-studio-cyan/30 bg-studio-cyan/10 px-4 py-1.5 text-xs font-mono text-studio-cyan">
                <MecnunCatIcon size={16} />
                <span>04 // IDENTITY & VALUE PROPOSITION</span>
              </div>
              <h2
                id="why-mecnun-heading"
                className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black font-mono uppercase tracking-tight text-foreground"
              >
                WHY <span className="text-studio-cyan">MECNUN</span>
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
              Bridging the gap between software engineering discipline and bespoke creative direction. We build enduring digital assets that elevate brands.
            </p>
          </div>
        </FadeIn>

        {/* 4 Core Value Pillars Grid */}
        <div className="mt-14 sm:mt-18 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_DIFFERENTIATORS.map((diff, idx) => {
            const Icon = diff.icon;

            return (
              <motion.div
                key={diff.number}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.09 }}
                className={`rounded-2xl border ${diff.border} ${diff.glow} p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between">
                  <div className={`h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center ${diff.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-muted-foreground/60">
                    {diff.number}
                  </span>
                </div>

                <h3 className="mt-5 font-mono text-lg font-bold text-foreground">
                  {diff.title}
                </h3>
                <p className="mt-1 font-mono text-xs font-semibold text-zinc-300">
                  {diff.subtitle}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {diff.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Technology Matrix Showcase */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <FadeIn direction="up">
            <InteractiveTechMatrix />
          </FadeIn>
        </div>

        {/* Philosophy Callout & Pre-Contact Conversion Bridge */}
        <div className="mt-16 sm:mt-20 rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-8 sm:p-12 backdrop-blur-2xl relative overflow-hidden shadow-2xl">
          <div className="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-studio-cyan/20 blur-[130px]" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-studio-lime font-bold">
                <Terminal className="h-4 w-4" />
                <span>STUDIO PHILOSOPHY</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-mono font-black uppercase text-foreground leading-snug">
                &ldquo;Code is not just functionality. Architecture is brand identity.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Ready to transform your digital presence into a high-performance, conversion-driven flagship?
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 shrink-0">
              <Magnetic strength={0.2}>
                <Link href="#contact">
                  <Button
                    variant="accent"
                    size="lg"
                    className="gap-2 font-extrabold text-black shadow-[0_0_28px_rgba(204,255,0,0.35)]"
                  >
                    <Sparkles className="h-4 w-4 fill-current text-black" />
                    <span>Let&apos;s Talk</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </Magnetic>

              <Magnetic strength={0.2}>
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 border-white/20 font-mono font-bold text-xs uppercase hover:border-studio-cyan"
                  >
                    <span>About The Engineer</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyMecnunSection;
