"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Sparkles, Terminal, ArrowUpRight, Cpu, Layers, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { useLanguage } from "@/lib/i18n/language-context";

interface ScrollWordProps {
  children: string;
  range: [number, number];
  progress: any;
}

function ScrollWord({ children, range, progress }: ScrollWordProps) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(progress, range, ["rgba(255,255,255,0.2)", "rgba(255,255,255,1)"]);

  return (
    <span className="relative inline-block mx-[0.14em] my-[0.06em]">
      {/* Ghost background word for instant structure */}
      <span className="opacity-20 text-muted-foreground select-none">{children}</span>
      {/* Scrubbed luminous word */}
      <motion.span
        style={{ opacity, color }}
        className="absolute inset-0 select-none font-bold"
      >
        {children}
      </motion.span>
    </span>
  );
}

export function ManifestoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { t, language } = useLanguage();

  const manifestoText1 =
    language === "tr"
      ? "Sadece web sitesi yapmıyorum."
      : "I don't just build websites.";

  const manifestoText2 =
    language === "tr"
      ? "İşletmelerin iletişim kurmasını, performans göstermesini ve büyümesini sağlayan özel dijital deneyimler tasarlıyorum."
      : "I engineer bespoke digital experiences that help businesses communicate, perform and grow.";

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.4"],
  });

  const words1 = manifestoText1.split(" ");
  const words2 = manifestoText2.split(" ");
  const totalWords = words1.length + words2.length;

  return (
    <section
      ref={containerRef}
      aria-labelledby="manifesto-heading"
      className="relative z-10 w-full py-28 sm:py-36 md:py-44 border-t border-white/10 dark:border-white/5 bg-background/90 dark:bg-zinc-950/90 backdrop-blur-md overflow-hidden"
    >
      {/* Generative Atmospheric Ambient Backdrop */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-studio-cyan/8 blur-[180px] dark:bg-studio-cyan/10" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-[400px] w-[400px] rounded-full bg-studio-lime/5 blur-[160px] dark:bg-studio-lime/8" />

      {/* Cybernetic Geometric Grid Mask */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-30" />

      <Container className="relative z-10 max-w-5xl">
        {/* Section Header Badge */}
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 dark:border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-muted-foreground backdrop-blur-md">
            <Terminal className="h-3 w-3 text-studio-cyan" />
            <span className="text-foreground font-bold">{t.manifesto.badge}</span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
        </div>

        {/* Large Editorial Manifesto Typography */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <h2 id="manifesto-heading" className="sr-only">
            {t.manifesto.heading}
          </h2>

          {/* Statement 1 */}
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-black uppercase tracking-tight leading-[1.15]">
            {shouldReduceMotion ? (
              <p className="text-muted-foreground/80">{manifestoText1}</p>
            ) : (
              <p className="flex flex-wrap" key={`m1-${language}`}>
                {words1.map((word, i) => {
                  const start = (i / totalWords) * 0.45;
                  const end = start + 0.12;
                  return (
                    <ScrollWord key={i} range={[start, end]} progress={scrollYProgress}>
                      {word}
                    </ScrollWord>
                  );
                })}
              </p>
            )}
          </div>

          {/* Statement 2 */}
          <div className="mt-8 sm:mt-12 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-black uppercase tracking-tight leading-[1.15]">
            {shouldReduceMotion ? (
              <p className="bg-gradient-to-r from-studio-cyan via-studio-lime to-white bg-clip-text text-transparent">
                {manifestoText2}
              </p>
            ) : (
              <p className="flex flex-wrap" key={`m2-${language}`}>
                {words2.map((word, i) => {
                  const globalIndex = words1.length + i;
                  const start = 0.35 + (i / words2.length) * 0.55;
                  const end = Math.min(start + 0.15, 1);
                  return (
                    <ScrollWord
                      key={globalIndex}
                      range={[start, end]}
                      progress={scrollYProgress}
                    >
                      {word}
                    </ScrollWord>
                  );
                })}
              </p>
            )}
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="mt-20 sm:mt-28 grid gap-6 sm:gap-8 sm:grid-cols-3 pt-12 border-t border-white/10">
          {/* Pillar 1 */}
          <div className="group rounded-2xl border border-white/10 dark:border-white/5 bg-background/60 dark:bg-zinc-950/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-studio-cyan/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-studio-cyan">
                {language === "tr" ? "01 / MİMARİ" : "01 / ARCHITECTURE"}
              </span>
              <Layers className="h-4 w-4 text-studio-cyan transition-transform group-hover:scale-110" />
            </div>
            <h3 className="mt-4 text-lg font-mono font-bold text-foreground">
              {language === "tr" ? "Sıfır Şablon Saflığı" : "Zero-Template Purity"}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {language === "tr"
                ? "Her arayüz özel tasarım sistemleri, özgün animasyonlar ve amaca yönelik bileşen mimarisiyle sıfırdan inşa edilir."
                : "Every interface is handcrafted with tailored design systems, bespoke animations, and purpose-built component architectures."}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="group rounded-2xl border border-white/10 dark:border-white/5 bg-background/60 dark:bg-zinc-950/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-studio-lime/40 hover:shadow-[0_0_30px_rgba(204,255,0,0.1)]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-studio-lime">
                {language === "tr" ? "02 / HIZ & PERFORMANS" : "02 / VELOCITY"}
              </span>
              <Zap className="h-4 w-4 text-studio-lime transition-transform group-hover:scale-110" />
            </div>
            <h3 className="mt-4 text-lg font-mono font-bold text-foreground">
              {language === "tr" ? "1s Altı & 60 FPS" : "Sub-second & 60 FPS"}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {language === "tr"
                ? "Core Web Vitals için titiz optimizasyon, donanım hızlandırmalı 3D WebGL ve anlık edge önbellekleme."
                : "Obsessive optimization for Core Web Vitals, hardware-accelerated 3D WebGL rendering, and instant edge-cached page loads."}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="group rounded-2xl border border-white/10 dark:border-white/5 bg-background/60 dark:bg-zinc-950/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-studio-fuchsia/40 hover:shadow-[0_0_30px_rgba(255,0,127,0.1)]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-studio-fuchsia">
                {language === "tr" ? "03 / DÖNÜŞÜM" : "03 / CONVERSION"}
              </span>
              <Cpu className="h-4 w-4 text-studio-fuchsia transition-transform group-hover:scale-110" />
            </div>
            <h3 className="mt-4 text-lg font-mono font-bold text-foreground">
              {language === "tr" ? "Stratejik Otorite" : "Strategic Dominance"}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {language === "tr"
                ? "Sektörde güven oluşturan ve ziyaretçileri uzun vadeli müşterilere dönüştüren dijital amiral gemileri."
                : "Digital flagships designed to command industry authority, establish trust, and turn visitors into long-term clients."}
            </p>
          </div>
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/5">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-studio-lime animate-pulse" />
            <span>
              {language === "tr"
                ? "Dijital varlığınızı zirveye taşımaya hazır mısınız?"
                : "Ready to elevate your digital presence?"}
            </span>
          </div>
          <Magnetic strength={0.2}>
            <Link href="/services">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 border-white/10 text-xs font-mono font-bold hover:border-studio-cyan/60 hover:text-studio-cyan"
              >
                <span>{t.services.exploreAllServices}</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </Magnetic>
        </div>
      </Container>
    </section>
  );
}

export default ManifestoSection;
