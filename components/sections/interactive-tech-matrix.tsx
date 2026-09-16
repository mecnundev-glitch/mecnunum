"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Code2,
  Cpu,
  Layers,
  Server,
  Database,
  Box,
  Zap,
  Palette,
  Sparkles,
  Terminal,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface TechItem {
  id: string;
  name: string;
  category: "Core Framework" | "Language & Type" | "Backend & Data" | "Spatial & Motion" | "Styling Architecture";
  icon: any;
  color: string;
  borderClass: string;
  bgClass: string;
  role: string;
  details: string;
  metrics: string;
}

export const TECH_STACK: TechItem[] = [
  {
    id: "nextjs",
    name: "Next.js",
    category: "Core Framework",
    icon: Server,
    color: "#00F0FF",
    borderClass: "border-studio-cyan/35",
    bgClass: "bg-studio-cyan/10",
    role: "Full-Stack Production Engine",
    details:
      "Leveraging App Router, React Server Components (RSC), dynamic parallel routing, and edge API caching for sub-second global responses.",
    metrics: "Sub-second TTFB & Edge Caching",
  },
  {
    id: "react",
    name: "React",
    category: "Core Framework",
    icon: Code2,
    color: "#00F0FF",
    borderClass: "border-cyan-400/35",
    bgClass: "bg-cyan-400/10",
    role: "Component & State Architecture",
    details:
      "Crafting declarative, isolated component trees with concurrent rendering, custom hooks, and optimized reconciliation pipelines.",
    metrics: "Predictable Pure UI States",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language & Type",
    icon: Cpu,
    color: "#38bdf8",
    borderClass: "border-sky-400/35",
    bgClass: "bg-sky-400/10",
    role: "Strict Type Safety & Schemas",
    details:
      "End-to-end type safety eliminating runtime bugs. Generic data models and strict contracts shared between client and server APIs.",
    metrics: "Zero-Runtime Bug Leaks",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend & Data",
    icon: Terminal,
    color: "#CCFF00",
    borderClass: "border-studio-lime/35",
    bgClass: "bg-studio-lime/10",
    role: "High-Throughput Runtime",
    details:
      "Event-driven asynchronous microservices, serverless compute functions, WebSocket streaming, and rapid API gateways.",
    metrics: "Non-blocking I/O & Microservices",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Backend & Data",
    icon: Database,
    color: "#818cf8",
    borderClass: "border-indigo-400/35",
    bgClass: "bg-indigo-400/10",
    role: "Relational Data Integrity",
    details:
      "ACID-compliant relational database architectures, structured relational models, optimized indexing, and robust migration lifecycles.",
    metrics: "ACID Guaranteed Persistence",
  },
  {
    id: "threejs",
    name: "Three.js",
    category: "Spatial & Motion",
    icon: Box,
    color: "#FF007F",
    borderClass: "border-studio-fuchsia/35",
    bgClass: "bg-studio-fuchsia/10",
    role: "Spatial 3D & WebGL Shaders",
    details:
      "Direct WebGL buffer geometries, custom GLSL vertex/fragment shaders, procedural particles, and declarative React Three Fiber orchestration.",
    metrics: "Hardware-Accelerated 60 FPS",
  },
  {
    id: "gsap",
    name: "GSAP",
    category: "Spatial & Motion",
    icon: Zap,
    color: "#00FFAA",
    borderClass: "border-emerald-400/35",
    bgClass: "bg-emerald-400/10",
    role: "Kinetic Scroll Choreography",
    details:
      "High-precision timeline sequencing, ScrollTrigger scroll scrubbing, physics springs, and seamless viewport morphing animations.",
    metrics: "Sub-pixel Smooth Interpolation",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    category: "Styling Architecture",
    icon: Palette,
    color: "#38bdf8",
    borderClass: "border-sky-400/35",
    bgClass: "bg-sky-400/10",
    role: "Design Token Architecture",
    details:
      "Utility-first styling systems with customized CSS variables, dark/light token palettes, fluid typography clamps, and zero runtime overhead.",
    metrics: "Zero-CSS Bloat Production Bundle",
  },
];

export function InteractiveTechMatrix() {
  const [selectedTechId, setSelectedTechId] = useState<string>("nextjs");
  const shouldReduceMotion = useReducedMotion();

  const selectedTech =
    TECH_STACK.find((t) => t.id === selectedTechId) || TECH_STACK[0];
  const IconComponent = selectedTech.icon;

  return (
    <div className="relative mt-12 rounded-3xl border border-white/15 bg-zinc-950/85 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl overflow-hidden">
      {/* Dynamic Ambient Reactor Glow */}
      <div
        className="pointer-events-none absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-br blur-[120px] opacity-25 transition-all duration-700"
        style={{ backgroundColor: `${selectedTech.color}25` }}
      />

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <span className="font-mono text-xs text-studio-lime font-bold tracking-wider">
            ARCHITECTURE RADAR // CORE TECHNOLOGIES
          </span>
          <h3 className="mt-1 font-mono text-2xl sm:text-3xl font-black uppercase text-foreground">
            Curated Technology Stack
          </h3>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-muted-foreground self-start">
          <Sparkles className="h-3.5 w-3.5 text-studio-cyan" />
          <span>Interactive Radar Matrix</span>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-8 lg:grid-cols-12 items-start">
        {/* Left Column: Interactive 8-Node Selector Grid (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {TECH_STACK.map((tech) => {
            const isSelected = selectedTechId === tech.id;
            const Icon = tech.icon;

            return (
              <button
                key={tech.id}
                type="button"
                onClick={() => setSelectedTechId(tech.id)}
                onMouseEnter={() => setSelectedTechId(tech.id)}
                onFocus={() => setSelectedTechId(tech.id)}
                className={cn(
                  "group relative flex flex-col items-center justify-center p-5 rounded-2xl border text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-cyan cursor-pointer select-none",
                  isSelected
                    ? "border-white/30 bg-white/10 shadow-[0_0_25px_rgba(255,255,255,0.1)] scale-105"
                    : "border-white/10 bg-zinc-950/60 hover:border-white/20 hover:bg-white/5"
                )}
                aria-pressed={isSelected}
              >
                {/* Active Indicator Top Dot */}
                {isSelected && (
                  <motion.div
                    layoutId={shouldReduceMotion ? undefined : "activeTechIndicator"}
                    className="absolute -top-1.5 h-3 w-3 rounded-full border-2 border-zinc-950 shadow-md"
                    style={{ backgroundColor: tech.color }}
                  />
                )}

                <div
                  className="h-12 w-12 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    borderColor: isSelected ? `${tech.color}60` : "rgba(255,255,255,0.1)",
                    backgroundColor: isSelected ? `${tech.color}15` : "rgba(255,255,255,0.03)",
                    color: isSelected ? tech.color : "#a1a1aa",
                  }}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <span
                  className={cn(
                    "mt-3 font-mono text-sm font-bold tracking-tight transition-colors",
                    isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )}
                >
                  {tech.name}
                </span>

                <span className="mt-1 font-mono text-[10px] text-muted-foreground/60 uppercase">
                  {tech.category.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Live Technology Telemetry & Engineering Readout (5 cols) */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTech.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-white/15 bg-black/60 p-6 sm:p-7 backdrop-blur-xl shadow-inner relative overflow-hidden"
            >
              {/* Telemetry Header */}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted-foreground uppercase">
                  TELEMETRY READOUT // {selectedTech.id.toUpperCase()}
                </span>
                <span
                  className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full border"
                  style={{
                    borderColor: `${selectedTech.color}40`,
                    backgroundColor: `${selectedTech.color}15`,
                    color: selectedTech.color,
                  }}
                >
                  {selectedTech.category}
                </span>
              </div>

              {/* Title & Role */}
              <div className="mt-5 flex items-center gap-3.5">
                <div
                  className="h-12 w-12 rounded-xl border flex items-center justify-center shrink-0"
                  style={{
                    borderColor: `${selectedTech.color}50`,
                    backgroundColor: `${selectedTech.color}15`,
                    color: selectedTech.color,
                  }}
                >
                  <IconComponent className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-mono text-2xl font-black text-foreground uppercase">
                    {selectedTech.name}
                  </h4>
                  <p className="font-mono text-xs font-bold" style={{ color: selectedTech.color }}>
                    {selectedTech.role}
                  </p>
                </div>
              </div>

              {/* Architectural Application */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <span className="block font-mono text-[11px] text-muted-foreground uppercase mb-2">
                  Engineering Application
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                  {selectedTech.details}
                </p>
              </div>

              {/* Production Benchmark Metric */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-studio-lime">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                <span className="font-bold">{selectedTech.metrics}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default InteractiveTechMatrix;
