"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { SceneCanvas } from "@/components/three/scene-canvas";
import { FadeIn, Magnetic, TextReveal } from "@/components/motion";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SelectedWorkSection } from "@/components/sections/selected-work-section";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowUpRight, Code2, FolderKanban, Terminal, ChevronDown } from "lucide-react";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";
import { STUDIO_STATUS } from "@/lib/constants";
import Link from "next/link";

export default function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* ─── 01 HERO SECTION (3D COSMIC UNIVERSE + EDITORIAL MESSAGING) ─── */}
      <div className="relative flex flex-1 flex-col items-center justify-center min-h-[calc(100vh-4.5rem)] overflow-hidden">
        {/* Dynamic Cosmic Ambient Background Glows with Subtle Parallax */}
        <div
          className="pointer-events-none absolute -top-28 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-studio-cyan/15 blur-[160px] dark:bg-studio-cyan/20 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(calc(-50% + ${mousePos.x * 0.5}px), ${mousePos.y * 0.5}px)`,
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-28 right-1/4 h-[550px] w-[550px] rounded-full bg-studio-lime/10 blur-[170px] dark:bg-studio-lime/15 transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${-mousePos.x * 0.4}px, ${-mousePos.y * 0.4}px)`,
          }}
        />
        <div
          className="pointer-events-none absolute top-1/3 -left-28 h-[480px] w-[480px] rounded-full bg-studio-purple/15 blur-[160px] transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
          }}
        />

        {/* 3D KOZMİK EVREN (Interactive 3D Scene Layer) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-auto">
          <SceneCanvas className="h-full w-full cursor-grab active:cursor-grabbing" />
        </div>

        {/* Hero Content Overlay (Zero LCP Delay & Crystal-Clear Readability) */}
        <Container className="relative z-10 text-center pointer-events-none py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center min-h-[calc(100vh-5.5rem)]">
          {/* Status & Engineering Badge */}
          <FadeIn direction="up" delay={0.08}>
            <Magnetic strength={0.18}>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 dark:border-white/10 bg-background/80 dark:bg-zinc-950/80 px-4 py-1.5 text-xs font-mono backdrop-blur-xl shadow-[0_0_25px_rgba(0,240,255,0.12)] pointer-events-auto hover:border-studio-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all cursor-default">
                <MecnunCatIcon size={18} />
                <span className="font-bold tracking-wider text-foreground">MECNUN</span>
                <span className="h-1.5 w-1.5 rounded-full bg-studio-lime animate-pulse" />
                <span className="text-muted-foreground hidden sm:inline">|</span>
                <span className="text-studio-cyan font-semibold flex items-center gap-1">
                  <Terminal className="h-3 w-3 text-studio-lime" />
                  <span>{STUDIO_STATUS.badgeText}</span>
                </span>
              </div>
            </Magnetic>
          </FadeIn>

          {/* Primary Hero Title with Word-by-Word Reveal */}
          <div className="mt-6 sm:mt-8 max-w-5xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight font-mono uppercase leading-[1.08] select-none">
              <span className="block text-foreground drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                <TextReveal text="Digital experiences," delay={0.15} />
              </span>
              <span className="block mt-1 bg-gradient-to-r from-studio-cyan via-studio-lime to-studio-fuchsia bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.35)]">
                <TextReveal text="engineered with purpose." delay={0.35} />
              </span>
            </h1>
          </div>

          {/* Subtitle / Description Card */}
          <FadeIn direction="up" delay={0.35} className="mt-6 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-white/10 dark:border-white/10 bg-background/70 dark:bg-zinc-950/75 p-4 sm:p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:border-white/20 transition-colors pointer-events-auto">
              <p className="text-sm sm:text-base md:text-lg font-medium text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Computer engineer</span> creating modern websites,
                web applications and interactive digital experiences for businesses and brands.
              </p>
            </div>
          </FadeIn>

          {/* Call to Action Buttons with Magnetic Pull */}
          <FadeIn
            direction="up"
            delay={0.45}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 pointer-events-auto"
          >
            {/* CTA 1: View Selected Work */}
            <Magnetic strength={0.22}>
              <Link href="/work">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-white/15 dark:border-white/15 bg-background/80 dark:bg-zinc-900/80 text-foreground hover:bg-white/10 hover:border-studio-cyan/60 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:scale-105 active:scale-98 transition-all duration-200 group font-bold"
                >
                  <FolderKanban className="h-4 w-4 text-studio-cyan" />
                  <span>View Selected Work</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </Magnetic>

            {/* CTA 2: Start a Project */}
            <Magnetic strength={0.22}>
              <Link href="/contact">
                <Button
                  variant="accent"
                  size="lg"
                  className="gap-2 text-black font-extrabold shadow-[0_0_28px_rgba(204,255,0,0.35)] hover:shadow-[0_0_38px_rgba(204,255,0,0.55)] hover:scale-105 active:scale-98 transition-all duration-200 group"
                >
                  <Sparkles className="h-4 w-4 fill-current text-black" />
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </Magnetic>
          </FadeIn>

          {/* Tech Stack / Engineering Indicator Bar */}
          <FadeIn direction="up" delay={0.55} className="mt-10 sm:mt-14">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-muted-foreground/80 pointer-events-auto">
              <div className="flex items-center gap-1.5">
                <Code2 className="h-3.5 w-3.5 text-studio-cyan" />
                <span>Next.js 14 & TypeScript</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-studio-lime" />
                <span>Three.js / WebGL</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-studio-fuchsia font-bold">60 FPS</span>
                <span>Hardware Accelerated</span>
              </div>
            </div>
          </FadeIn>

          {/* Subtle Scroll Prompt Indicator */}
          <FadeIn direction="up" delay={0.65} className="mt-8 hidden md:flex items-center justify-center">
            <div className="flex flex-col items-center gap-1 text-[11px] font-mono text-muted-foreground/60">
              <span className="tracking-widest uppercase text-[10px]">Scroll For Manifesto</span>
              <ChevronDown className="h-3.5 w-3.5 animate-bounce text-studio-cyan" />
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* ─── 02 EDITORIAL MANIFESTO SECTION (SCROLL-DRIVEN REVEAL) ─── */}
      <ManifestoSection />

      {/* ─── 03 SERVICES EXPERIENCE SECTION (INTERACTIVE EDITORIAL LIST & 3D WORLD) ─── */}
      <ServicesSection />

      {/* ─── 04 SELECTED WORK SECTION (DATA-DRIVEN EDITORIAL PORTFOLIO) ─── */}
      <SelectedWorkSection />
    </div>
  );
}
