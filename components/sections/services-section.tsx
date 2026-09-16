"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { SERVICES_LIST } from "@/lib/constants";
import {
  ArrowUpRight,
  Terminal,
  Sparkles,
  Layout,
  Code2,
  Building2,
  ShoppingBag,
  Gauge,
  Box,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Lazy load the experimental 3D spatial world to maintain fast LCP
const ServicesSpatialWorld = dynamic(
  () => import("@/components/three/ServicesSpatialWorld"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-44 w-full items-center justify-center rounded-2xl border border-white/5 bg-zinc-950/40">
        <div className="h-10 w-10 animate-pulse rounded-full border border-studio-cyan/30 bg-studio-cyan/10" />
      </div>
    ),
  }
);

const SERVICE_META = [
  {
    index: "01",
    icon: Layout,
    color: "#00F0FF",
    gradientClass: "from-cyan-500/25 via-blue-500/10 to-transparent",
    pillColor: "text-studio-cyan border-studio-cyan/30 bg-studio-cyan/10",
    badge: "Design Systems & UI Architecture",
    previewDesc: "Pixel-precise visual systems with deep typography fidelity and interactive prototyping.",
    spatialGeometry: "Morphing Wireframe Icosahedron",
  },
  {
    index: "02",
    icon: Code2,
    color: "#CCFF00",
    gradientClass: "from-lime-400/25 via-emerald-500/10 to-transparent",
    pillColor: "text-studio-lime border-studio-lime/30 bg-studio-lime/10",
    badge: "Full-Stack Next.js & TypeScript",
    previewDesc: "Sub-second load times, server-driven architecture, and zero-compromise security.",
    spatialGeometry: "Cybernetic Logic Matrix",
  },
  {
    index: "03",
    icon: Building2,
    color: "#9D00FF",
    gradientClass: "from-purple-500/25 via-violet-500/10 to-transparent",
    pillColor: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    badge: "Enterprise Flagships & Multilingual",
    previewDesc: "Authoritative digital headquarters designed for global corporations and discerning brands.",
    spatialGeometry: "Enterprise Obelisk Pillar",
  },
  {
    index: "04",
    icon: ShoppingBag,
    color: "#FFB800",
    gradientClass: "from-amber-400/25 via-yellow-500/10 to-transparent",
    pillColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    badge: "Headless Shopify & Custom Stores",
    previewDesc: "High-velocity checkout pipelines, headless commerce, and frictionless purchasing flows.",
    spatialGeometry: "Circulation Flow Torus",
  },
  {
    index: "05",
    icon: Gauge,
    color: "#00FFAA",
    gradientClass: "from-emerald-400/25 via-teal-500/10 to-transparent",
    pillColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    badge: "Lighthouse 100 & Schema SEO",
    previewDesc: "Technical search indexing, edge CDN tuning, and structured data dominance.",
    spatialGeometry: "Orbit Radar Resonance Rings",
  },
  {
    index: "06",
    icon: Box,
    color: "#FF007F",
    gradientClass: "from-fuchsia-500/25 via-pink-500/10 to-transparent",
    pillColor: "text-studio-fuchsia border-studio-fuchsia/30 bg-studio-fuchsia/10",
    badge: "WebGL / Three.js & GLSL Shaders",
    previewDesc: "Spatial 3D digital worlds, interactive product configurators, and 60fps WebGL simulations.",
    spatialGeometry: "Quantum Polyhedral Core",
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [activeMobileIndex, setActiveMobileIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeMeta = SERVICE_META[hoveredIndex] || SERVICE_META[0];
  const activeService = SERVICES_LIST[hoveredIndex] || SERVICES_LIST[0];

  return (
    <section
      id="services"
      aria-labelledby="services-section-heading"
      className="relative z-10 w-full py-28 sm:py-36 md:py-44 border-t border-white/10 dark:border-white/5 bg-background/95 dark:bg-zinc-950/95 backdrop-blur-xl overflow-hidden"
    >
      {/* Dynamic Ambient Background Glow based on hovered service */}
      <div
        className={cn(
          "pointer-events-none absolute -top-1/4 right-0 h-[650px] w-[650px] rounded-full bg-gradient-to-br blur-[180px] transition-all duration-700 opacity-20 dark:opacity-30",
          activeMeta.gradientClass
        )}
      />
      <div className="pointer-events-none absolute bottom-10 left-10 h-[450px] w-[450px] rounded-full bg-studio-cyan/5 blur-[160px] dark:bg-studio-cyan/10" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 dark:border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-muted-foreground backdrop-blur-md">
              <Terminal className="h-3 w-3 text-studio-lime" />
              <span className="text-foreground font-bold">02 // CAPABILITIES</span>
            </div>
            <h2
              id="services-section-heading"
              className="mt-4 text-3xl sm:text-5xl md:text-6xl font-mono font-black uppercase tracking-tight text-foreground"
            >
              ENGINEERING <span className="text-studio-lime">SERVICES</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base font-medium text-muted-foreground leading-relaxed">
            Full-spectrum digital craftsmanship combining modern web engineering, editorial aesthetics, and spatial 3D WebGL.
          </p>
        </div>

        {/* Desktop Layout: Split View (Interactive List + 3D Spatial World Preview) */}
        <div className="mt-8 hidden lg:grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Editorial List (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-white/10">
            {SERVICES_LIST.map((service, index) => {
              const meta = SERVICE_META[index];
              const isHovered = hoveredIndex === index;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onFocus={() => setHoveredIndex(index)}
                  className={cn(
                    "group relative flex items-center justify-between py-6 px-4 -mx-4 rounded-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-cyan",
                    isHovered
                      ? "bg-white/[0.04] dark:bg-white/[0.03] pl-6"
                      : "hover:bg-white/[0.02]"
                  )}
                >
                  <div className="flex items-center gap-6">
                    {/* Index Number */}
                    <span
                      className={cn(
                        "font-mono text-sm sm:text-base font-bold transition-colors duration-300",
                        isHovered ? "text-studio-lime" : "text-muted-foreground/60"
                      )}
                    >
                      {meta.index}
                    </span>

                    {/* Title & Tagline */}
                    <div>
                      <h3
                        className={cn(
                          "font-mono text-2xl sm:text-3xl font-black uppercase tracking-tight transition-all duration-300",
                          isHovered
                            ? "text-foreground translate-x-1"
                            : "text-muted-foreground group-hover:text-foreground"
                        )}
                      >
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs font-mono text-muted-foreground/80">
                        {meta.badge}
                      </p>
                    </div>
                  </div>

                  {/* Right Action Indicator */}
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-all duration-300",
                        isHovered ? "bg-studio-lime scale-125 shadow-[0_0_8px_#CCFF00]" : "bg-transparent"
                      )}
                    />
                    <div
                      className={cn(
                        "h-10 w-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300",
                        isHovered
                          ? "border-studio-cyan/50 bg-studio-cyan/10 text-studio-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                          : "text-muted-foreground group-hover:text-foreground"
                      )}
                    >
                      <ArrowUpRight
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          isHovered ? "translate-x-0.5 -translate-y-0.5 scale-110" : ""
                        )}
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right Column: 3D Spatial World & Sticky Preview Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl border border-white/15 dark:border-white/10 bg-zinc-950/85 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Background gradient mesh */}
              <div
                className={cn(
                  "pointer-events-none absolute -top-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-br blur-[90px] opacity-35 transition-all duration-500",
                  activeMeta.gradientClass
                )}
              />

              {/* Service Indicator Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-xs text-studio-lime font-bold tracking-wider">
                  SPATIAL ARCHITECTURE // {activeMeta.index}
                </span>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono border",
                    activeMeta.pillColor
                  )}
                >
                  <Sparkles className="h-3 w-3" />
                  <span>{activeMeta.spatialGeometry}</span>
                </span>
              </div>

              {/* 3D Real-time Spatial Constellation Viewport */}
              <div className="relative z-10 my-4 h-48 w-full rounded-2xl border border-white/10 bg-black/50 overflow-hidden shadow-inner">
                <ServicesSpatialWorld activeIndex={hoveredIndex} className="h-full w-full" />
              </div>

              {/* Title & Tagline */}
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h4 className="font-mono text-xl font-black text-foreground uppercase">
                    {activeService.title}
                  </h4>
                  <p className="text-xs font-mono text-muted-foreground">{activeService.tagline}</p>
                </div>
              </div>

              {/* Description */}
              <div className="relative z-10 mt-4 pt-4 border-t border-white/10">
                <p className="text-xs sm:text-sm font-medium text-zinc-300 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Deliverables Matrix */}
              <div className="relative z-10 mt-4 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {activeService.features.map((feature, fIdx) => (
                    <span
                      key={fIdx}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-zinc-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Landing Page CTA */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
                <Link href={`/services/${activeService.slug}`} className="block w-full">
                  <Button
                    variant="outline"
                    className="w-full justify-between font-mono font-bold text-xs uppercase border-white/15 hover:border-studio-cyan hover:bg-studio-cyan/10 hover:text-studio-cyan transition-all py-5 group"
                  >
                    <span>Explore {activeService.title}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Interactive Accordion Layout (< 1024px) */}
        <div className="mt-8 lg:hidden space-y-4">
          {SERVICES_LIST.map((service, index) => {
            const meta = SERVICE_META[index];
            const isExpanded = activeMobileIndex === index;

            return (
              <div
                key={service.slug}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl",
                  isExpanded
                    ? "border-white/20 bg-zinc-950/90 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
                    : "border-white/10 bg-zinc-950/50 hover:border-white/15"
                )}
              >
                {/* Header / Tap Trigger */}
                <button
                  type="button"
                  onClick={() =>
                    setActiveMobileIndex((prev) => (prev === index ? null : index))
                  }
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-studio-lime">
                      {meta.index}
                    </span>
                    <div>
                      <h3 className="font-mono text-xl font-black uppercase text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-[11px] font-mono text-muted-foreground">
                        {meta.badge}
                      </p>
                    </div>
                  </div>

                  <div
                    className={cn(
                      "h-8 w-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300",
                      isExpanded ? "rotate-90 border-studio-cyan text-studio-cyan" : "text-muted-foreground"
                    )}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </button>

                {/* Collapsible Content Body with Optional Spatial Preview */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0.05 : 0.25 }}
                      className="overflow-hidden border-t border-white/10 px-5 pb-5 pt-4 space-y-4"
                    >
                      {/* Spatial Element Info */}
                      <div className="flex items-center justify-between text-[11px] font-mono text-studio-cyan bg-studio-cyan/10 px-3 py-1.5 rounded-lg border border-studio-cyan/20">
                        <span>SPATIAL OBJECT:</span>
                        <span className="font-bold">{meta.spatialGeometry}</span>
                      </div>

                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {service.features.map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-zinc-400"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>

                      {/* Link to dedicated landing page */}
                      <div className="pt-2">
                        <Link href={`/services/${service.slug}`} className="block">
                          <Button
                            variant="accent"
                            size="sm"
                            className="w-full justify-between font-bold text-black text-xs uppercase"
                          >
                            <span>Explore {service.title}</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Global CTA: Explore Services */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">
          <div className="text-center sm:text-left">
            <h4 className="font-mono text-lg font-bold text-foreground">
              Looking for a custom creative engineering scope?
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Explore the full services matrix or request a custom proposal.
            </p>
          </div>

          <Magnetic strength={0.2}>
            <Link href="/services">
              <Button
                variant="accent"
                size="lg"
                className="gap-2 text-black font-extrabold shadow-[0_0_25px_rgba(204,255,0,0.3)] hover:shadow-[0_0_35px_rgba(204,255,0,0.5)] transition-all"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </Magnetic>
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
