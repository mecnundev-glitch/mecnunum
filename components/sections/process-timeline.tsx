"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import {
  Compass,
  Target,
  Layers,
  Code2,
  CheckCircle2,
  Rocket,
  Headphones,
  ArrowUpRight,
  Terminal,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const PROCESS_STAGES = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Research & Requirements Blueprint",
    tagline: "Uncovering core business objectives, technical constraints, and market opportunities.",
    icon: Compass,
    color: "#00F0FF",
    colorClass: "text-studio-cyan",
    borderClass: "border-studio-cyan/30",
    bgClass: "bg-studio-cyan/10",
    duration: "Week 1",
    deliverables: [
      "Technical Architecture Audit",
      "Brand Positioning Analysis",
      "User Persona & Journey Maps",
      "Project Scope & Roadmap Matrix",
    ],
    description:
      "We begin with deep stakeholder interviews, technical discovery sessions, and competitive benchmarks. We map every edge case to ensure the project architecture is rock-solid before writing a single line of code.",
  },
  {
    step: "02",
    title: "Strategy",
    subtitle: "Technical Architecture & System Design",
    tagline: "Architecting the data flow, design token hierarchy, and performance budget.",
    icon: Target,
    color: "#CCFF00",
    colorClass: "text-studio-lime",
    borderClass: "border-studio-lime/30",
    bgClass: "bg-studio-lime/10",
    duration: "Week 2",
    deliverables: [
      "Information Architecture Plan",
      "Component Hierarchy Specs",
      "Performance Budget (60 FPS / <1s LCP)",
      "Milestone & Sprint Schedule",
    ],
    description:
      "Translating discovery insights into precise technical specifications. We define the state management strategy, API schemas, and typographic tokens for maximum clarity and velocity.",
  },
  {
    step: "03",
    title: "Design",
    subtitle: "Editorial Design Systems & 3D Spatial Concepts",
    tagline: "Handcrafting bespoke visual languages that evoke emotion and authority.",
    icon: Layers,
    color: "#9D00FF",
    colorClass: "text-purple-400",
    borderClass: "border-purple-400/30",
    bgClass: "bg-purple-400/10",
    duration: "Weeks 3-4",
    deliverables: [
      "Bespoke Visual Identity & UI Kits",
      "Interactive High-Fidelity Prototypes",
      "3D Spatial & Motion Guidelines",
      "Responsive Viewport Artboards",
    ],
    description:
      "Zero boilerplate templates. We sculpt distinctive editorial aesthetics, custom glassmorphic surfaces, fluid typography scaling, and interactive 3D spatial models in Figma and Three.js prototypes.",
  },
  {
    step: "04",
    title: "Development",
    subtitle: "Full-Stack Next.js & WebGL Engineering",
    tagline: "Executing the vision with clean, type-safe, hardware-accelerated code.",
    icon: Code2,
    color: "#00FFAA",
    colorClass: "text-emerald-400",
    borderClass: "border-emerald-400/30",
    bgClass: "bg-emerald-400/10",
    duration: "Weeks 5-7",
    deliverables: [
      "Next.js 14 App Router Architecture",
      "Full-Stack TypeScript & Server Components",
      "Three.js / WebGL Shaders & Canvas",
      "Micro-Interactions & Motion Choreography",
    ],
    description:
      "Crafting production-grade, accessible code. We implement Server Components, interactive client boundaries, custom GLSL shaders, and continuous integration pipelines with strict code review standards.",
  },
  {
    step: "05",
    title: "Test",
    subtitle: "Rigorous QA, Performance & Security Hardening",
    tagline: "Stress-testing across devices, network speeds, and accessibility standards.",
    icon: CheckCircle2,
    color: "#FFB800",
    colorClass: "text-amber-400",
    borderClass: "border-amber-400/30",
    bgClass: "bg-amber-400/10",
    duration: "Week 8",
    deliverables: [
      "Cross-Browser & Hardware Testing",
      "Core Web Vitals & Lighthouse 100 Audit",
      "WCAG AAA Accessibility Verification",
      "Security Headers & Penetration Check",
    ],
    description:
      "We run automated test suites, conduct device lab testing (iOS, Android, macOS, Windows), profile GPU thermal loads for WebGL scenes, and harden security policies for enterprise compliance.",
  },
  {
    step: "06",
    title: "Launch",
    subtitle: "Global Edge Deployment & DNS Migration",
    tagline: "Executing a flawless, zero-downtime production deployment.",
    icon: Rocket,
    color: "#FF007F",
    colorClass: "text-studio-fuchsia",
    borderClass: "border-studio-fuchsia/30",
    bgClass: "bg-studio-fuchsia/10",
    duration: "Launch Day",
    deliverables: [
      "Zero-Downtime DNS Propagation",
      "Edge CDN Cache Warm-up",
      "Search Console & Sitemap Indexing",
      "Live Production Telemetry & Analytics",
    ],
    description:
      "Coordinating the launch with surgical precision. We warm CDN edge caches, configure domain records, submit XML sitemaps, verify analytics funnels, and celebrate your brand's new digital flagship.",
  },
  {
    step: "07",
    title: "Support",
    subtitle: "Continuous Optimization & Long-Term Partnership",
    tagline: "Guarding uptime, evolving features, and supporting your business growth.",
    icon: Headphones,
    color: "#00F0FF",
    colorClass: "text-studio-cyan",
    borderClass: "border-studio-cyan/30",
    bgClass: "bg-studio-cyan/10",
    duration: "Ongoing",
    deliverables: [
      "24/7 SLA Monitoring & Incident Response",
      "Quarterly Performance & SEO Audits",
      "Feature Iterations & Expansion Sprints",
      "Dedicated Engineering Support Channel",
    ],
    description:
      "Launch is just the beginning. We partner with you for continuous feature enhancements, framework updates, search algorithm adaptations, and proactive performance optimizations.",
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"],
  });

  const timelineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative mt-16 sm:mt-24">
      {/* Central Cinematic Connecting Line (Desktop) */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-10 bottom-10 w-0.5 bg-white/10">
        <motion.div
          style={{ height: shouldReduceMotion ? "100%" : timelineHeight }}
          className="w-full bg-gradient-to-b from-studio-cyan via-studio-lime to-studio-fuchsia shadow-[0_0_15px_rgba(0,240,255,0.8)]"
        />
      </div>

      {/* Mobile Left Connecting Line (< 1024px) */}
      <div className="lg:hidden absolute left-5 top-10 bottom-10 w-0.5 bg-white/10">
        <motion.div
          style={{ height: shouldReduceMotion ? "100%" : timelineHeight }}
          className="w-full bg-gradient-to-b from-studio-cyan via-studio-lime to-studio-fuchsia"
        />
      </div>

      {/* 7 Stage Nodes */}
      <div className="space-y-12 sm:space-y-20 lg:space-y-28">
        {PROCESS_STAGES.map((stage, index) => {
          const isEven = index % 2 === 0;
          const Icon = stage.icon;

          return (
            <motion.div
              key={stage.step}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "relative flex flex-col lg:flex-row items-start gap-8 lg:gap-16",
                isEven ? "lg:flex-row-reverse" : ""
              )}
            >
              {/* Central Pulsing Node (Desktop) */}
              <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 z-20 items-center justify-center">
                <div
                  className="h-10 w-10 rounded-full border-2 bg-zinc-950 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                  style={{ borderColor: stage.color }}
                >
                  <span className="font-mono text-xs font-bold" style={{ color: stage.color }}>
                    {stage.step}
                  </span>
                </div>
              </div>

              {/* Mobile Node Badge */}
              <div className="lg:hidden flex items-center gap-3 z-10 pl-1">
                <div
                  className="h-8 w-8 rounded-full border-2 bg-zinc-950 flex items-center justify-center shadow-md shrink-0"
                  style={{ borderColor: stage.color }}
                >
                  <span className="font-mono text-xs font-bold" style={{ color: stage.color }}>
                    {stage.step}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-muted-foreground uppercase flex items-center gap-1.5">
                  <span>PHASE {stage.step}</span>
                  <span className="opacity-40">•</span>
                  <span>{stage.duration}</span>
                </span>
              </div>

              {/* Stage Card Content (Takes 50% width on desktop) */}
              <div className="w-full lg:w-[calc(50%-3rem)] pl-8 sm:pl-12 lg:pl-0">
                <div
                  className={cn(
                    "rounded-3xl border border-white/10 bg-zinc-950/80 p-5 sm:p-8 backdrop-blur-2xl transition-all duration-300 hover:border-white/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                  )}
                >
                  {/* Subtle Background Glow */}
                  <div
                    className="pointer-events-none absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-br blur-[90px] opacity-15 transition-opacity group-hover:opacity-30"
                    style={{ backgroundColor: `${stage.color}15` }}
                  />

                  {/* Card Header */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className="h-10 w-10 rounded-xl border flex items-center justify-center"
                        style={{
                          borderColor: `${stage.color}40`,
                          backgroundColor: `${stage.color}15`,
                          color: stage.color,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[11px] text-muted-foreground uppercase">
                          STAGE {stage.step}
                        </span>
                        <h3 className="font-mono text-2xl font-black uppercase text-foreground">
                          {stage.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={cn(
                        "hidden sm:inline-block font-mono text-xs font-bold px-3 py-1 rounded-full border",
                        stage.borderClass,
                        stage.bgClass,
                        stage.colorClass
                      )}
                    >
                      {stage.duration}
                    </span>
                  </div>

                  {/* Subtitle & Tagline */}
                  <div className="relative z-10 mt-4">
                    <p className="font-mono text-xs font-bold" style={{ color: stage.color }}>
                      {stage.subtitle}
                    </p>
                    <p className="mt-2 text-sm text-zinc-300 leading-relaxed font-medium">
                      {stage.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="relative z-10 mt-6 pt-5 border-t border-white/10">
                    <span className="block font-mono text-[11px] text-muted-foreground uppercase mb-3">
                      Key Deliverables
                    </span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {stage.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2">
                          <span
                            className="h-1.5 w-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: stage.color }}
                          />
                          <span className="font-mono text-xs text-zinc-400">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer on Desktop for alignment */}
              <div className="hidden lg:block lg:w-[calc(50%-3rem)]" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ProcessTimeline;
