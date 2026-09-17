"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { FadeIn } from "@/components/motion/fade-in";
import {
  Compass,
  Target,
  Layers,
  Code2,
  CheckCircle2,
  Rocket,
  Headphones,
  ArrowUpRight,
  Zap,
  Clock,
  Cpu,
  ShieldCheck,
} from "lucide-react";

const STAGES_OVERVIEW = [
  {
    step: "01",
    title: "Discover",
    duration: "Week 1",
    summary: "Technical audit, user persona mapping, and architectural roadmap.",
    icon: Compass,
    color: "#00F0FF",
    border: "border-studio-cyan/30",
    bg: "bg-studio-cyan/5",
    text: "text-studio-cyan",
  },
  {
    step: "02",
    title: "Strategy",
    duration: "Week 2",
    summary: "Information architecture, token hierarchy, and performance budget.",
    icon: Target,
    color: "#CCFF00",
    border: "border-studio-lime/30",
    bg: "bg-studio-lime/5",
    text: "text-studio-lime",
  },
  {
    step: "03",
    title: "Design",
    duration: "Weeks 3-4",
    summary: "Bespoke editorial layouts, 3D spatial models, and interactive Figma prototypes.",
    icon: Layers,
    color: "#9D00FF",
    border: "border-purple-400/30",
    bg: "bg-purple-400/5",
    text: "text-purple-400",
  },
  {
    step: "04",
    title: "Develop",
    duration: "Weeks 5-7",
    summary: "Next.js 14 App Router, full-stack TypeScript, and 60 FPS WebGL canvas.",
    icon: Code2,
    color: "#00FFAA",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/5",
    text: "text-emerald-400",
  },
  {
    step: "05",
    title: "Test",
    duration: "Week 8",
    summary: "Device lab verification, Lighthouse 95+ profiling, and security hardening.",
    icon: CheckCircle2,
    color: "#FFB800",
    border: "border-amber-400/30",
    bg: "bg-amber-400/5",
    text: "text-amber-400",
  },
  {
    step: "06",
    title: "Launch",
    duration: "Day 60",
    summary: "Zero-downtime DNS propagation, edge CDN warm-up, and search indexing.",
    icon: Rocket,
    color: "#FF007F",
    border: "border-studio-fuchsia/30",
    bg: "bg-studio-fuchsia/5",
    text: "text-studio-fuchsia",
  },
  {
    step: "07",
    title: "Support",
    duration: "Ongoing",
    summary: "Continuous telemetry, SLA uptime monitoring, and feature iteration.",
    icon: Headphones,
    color: "#00F0FF",
    border: "border-studio-cyan/30",
    bg: "bg-studio-cyan/5",
    text: "text-studio-cyan",
  },
];

export function HowIWorkSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="how-i-work-heading"
      className="relative z-10 w-full py-28 sm:py-36 border-t border-white/10 dark:border-white/5 bg-background/95 dark:bg-zinc-950/95 backdrop-blur-xl overflow-hidden"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="pointer-events-none absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-studio-lime/5 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-studio-cyan/5 blur-[160px]" />

      <Container className="relative z-10">
        {/* Section Header */}
        <FadeIn direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/30 bg-studio-lime/10 px-4 py-1.5 text-xs font-mono text-studio-lime">
                <Zap className="h-3.5 w-3.5 text-studio-cyan" />
                <span>03 // METHODOLOGY & VELOCITY</span>
              </div>
              <h2
                id="how-i-work-heading"
                className="mt-4 text-3xl sm:text-5xl md:text-6xl font-black font-mono uppercase tracking-tight text-foreground"
              >
                HOW I <span className="text-studio-lime">WORK</span>
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-muted-foreground leading-relaxed">
              A transparent, battle-tested 7-stage client pipeline engineered to eliminate black-box delays and deliver world-class digital craftsmanship on schedule.
            </p>
          </div>
        </FadeIn>

        {/* 7-Stage Horizontal Pipeline Grid */}
        <div className="mt-14 sm:mt-18 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES_OVERVIEW.map((stage, idx) => {
            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`relative rounded-2xl border ${stage.border} ${stage.bg} p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:-translate-y-1 group`}
              >
                <div className="flex items-center justify-between">
                  <div className={`h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center ${stage.text}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    <span className="text-muted-foreground">{stage.duration}</span>
                    <span className={`font-bold ${stage.text}`}>{stage.step}</span>
                  </div>
                </div>

                <h3 className="mt-4 font-mono text-xl font-bold text-foreground group-hover:text-white transition-colors">
                  {stage.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {stage.summary}
                </p>
              </motion.div>
            );
          })}

          {/* Process Summary & Deep Dive Card */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.56 }}
            className="rounded-2xl border border-studio-cyan/40 bg-gradient-to-br from-studio-cyan/15 via-zinc-950/80 to-zinc-950 p-6 backdrop-blur-xl flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-studio-cyan font-bold tracking-wider">
                RADICAL CLARITY
              </span>
              <h3 className="mt-2 font-mono text-xl font-bold text-foreground">
                Weekly Demos & Live Staging
              </h3>
              <p className="mt-2 text-xs text-zinc-300">
                You get direct access to development branches, test environments, and transparent sprint boards.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <Link
                href="/process"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-studio-cyan hover:underline"
              >
                <span>Full 7-Stage Roadmap</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Triple Guarantees Bar */}
        <div className="mt-12 sm:mt-16 grid gap-4 sm:grid-cols-3 pt-10 border-t border-white/10">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-studio-cyan shrink-0" />
            <span className="text-xs sm:text-sm font-mono text-zinc-300">
              Bi-weekly staging deployments & continuous client reviews
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Cpu className="h-5 w-5 text-studio-lime shrink-0" />
            <span className="text-xs sm:text-sm font-mono text-zinc-300">
              100% IP ownership & fully typed Next.js repository
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-studio-fuchsia shrink-0" />
            <span className="text-xs sm:text-sm font-mono text-zinc-300">
              Lighthouse 95+ benchmark & sub-second Core Web Vitals
            </span>
          </div>
        </div>

        {/* Section Action Transition */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          <Magnetic strength={0.2}>
            <Link href="/process">
              <Button
                variant="outline"
                size="lg"
                className="gap-2 border-white/20 font-mono font-bold text-xs uppercase hover:border-studio-cyan"
              >
                <span>Explore Full Process</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </Magnetic>

          <Magnetic strength={0.2}>
            <Link href="/contact">
              <Button
                variant="accent"
                size="lg"
                className="gap-2 font-extrabold text-black shadow-[0_0_28px_rgba(204,255,0,0.35)]"
              >
                <Zap className="h-4 w-4 fill-current text-black" />
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </Magnetic>
        </div>
      </Container>
    </section>
  );
}

export default HowIWorkSection;
