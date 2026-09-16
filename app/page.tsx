import React from "react";
import { Container } from "@/components/ui/container";
import { SceneCanvas } from "@/components/three/scene-canvas";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowUpRight, Compass, Zap } from "lucide-react";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center min-h-[calc(100vh-4rem-6rem)] overflow-hidden">
      {/* Dynamic Cosmic Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-studio-cyan/20 blur-[150px] dark:bg-studio-cyan/25" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-[500px] w-[500px] rounded-full bg-studio-lime/15 blur-[160px] dark:bg-studio-lime/20" />
      <div className="pointer-events-none absolute top-1/3 -left-24 h-[450px] w-[450px] rounded-full bg-studio-purple/15 blur-[150px]" />

      {/* 3D KOZMİK EVREN (Full Viewport Interactive 3D Canvas) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <SceneCanvas className="h-full w-full cursor-grab active:cursor-grabbing" />
      </div>

      {/* Interactive Hero Content Overlay */}
      <Container className="relative z-10 text-center pointer-events-none py-10">
        {/* Status & Identity Badge */}
        <FadeIn direction="up" delay={0.1}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-studio-cyan/40 bg-background/80 px-4 py-1.5 text-xs font-mono backdrop-blur-xl shadow-[0_0_25px_rgba(0,240,255,0.15)] pointer-events-auto hover:border-studio-cyan transition-colors">
            <MecnunCatIcon size={20} />
            <span className="font-bold tracking-wider text-foreground">MECNUNUM.COM</span>
            <span className="h-1.5 w-1.5 rounded-full bg-studio-lime animate-pulse" />
            <span className="text-studio-cyan font-semibold flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-studio-lime" />
              3D Kozmik Evren
            </span>
          </div>
        </FadeIn>

        {/* Hero Title: MECNUNUM */}
        <FadeIn direction="up" delay={0.2} className="mt-6 sm:mt-10">
          <h1 className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl uppercase font-mono select-none">
            <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              MECNUN
            </span>
            <span className="bg-gradient-to-r from-studio-cyan via-studio-lime to-studio-fuchsia bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              UM
            </span>
          </h1>
        </FadeIn>

        {/* Slogan: Himmetiyle Hizmetinizdeyiz */}
        <FadeIn direction="up" delay={0.3} className="mt-6 max-w-3xl mx-auto">
          <div className="inline-block relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-studio-cyan/30 via-studio-lime/30 to-studio-fuchsia/30 blur-lg opacity-80" />
            <h2 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-studio-lime to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(204,255,0,0.45)]">
              ✨ Himmetiyle Hizmetinizdeyiz. ✨
            </h2>
          </div>

          {/* Glowing Description Glass Card */}
          <div className="mt-6 rounded-2xl border border-white/10 dark:border-white/15 bg-zinc-950/70 p-4 sm:p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <p className="text-base sm:text-lg md:text-xl font-medium text-zinc-100 leading-relaxed">
              <span className="text-studio-cyan font-bold drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">
                Yaratıcı Teknoloji
              </span>
              ,{" "}
              <span className="text-studio-lime font-bold drop-shadow-[0_0_12px_rgba(204,255,0,0.6)]">
                3D Etkileşimli WebGL Evrenleri
              </span>{" "}
              ve sınırları zorlayan{" "}
              <span className="text-studio-fuchsia font-bold drop-shadow-[0_0_12px_rgba(255,0,127,0.6)]">
                Dijital Deneyimler
              </span>{" "}
              ile markanızı geleceğe taşıyoruz.
            </p>
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn
          direction="up"
          delay={0.4}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 pointer-events-auto"
        >
          <Link href="/work">
            <Button
              variant="accent"
              size="lg"
              className="gap-2 text-black font-extrabold shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:shadow-[0_0_40px_rgba(204,255,0,0.6)] hover:scale-105 transition-all duration-300 group"
            >
              <Zap className="h-4 w-4 fill-current text-black" />
              <span>Evreni Keşfet</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>

          <Link href="/services">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-studio-cyan/40 text-studio-cyan hover:bg-studio-cyan/10 hover:border-studio-cyan backdrop-blur-md bg-zinc-950/60 shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:scale-105 transition-all duration-300"
            >
              <Compass className="h-4 w-4 text-studio-cyan" />
              <span>Hizmetlerimiz</span>
            </Button>
          </Link>
        </FadeIn>

        {/* Interaction Hint */}
        <FadeIn direction="up" delay={0.5} className="mt-8 sm:mt-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-studio-cyan bg-zinc-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-studio-cyan/30 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
            <span className="inline-block h-2 w-2 rounded-full bg-studio-lime animate-ping" />
            <span>Fareyle çevir veya mobilde dokunarak 3D kozmik evreni 360° döndür</span>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
