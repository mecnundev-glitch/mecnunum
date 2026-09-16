import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { siteConfig } from "@/lib/site-config";
import {
  ArrowUpRight,
  Terminal,
  Zap,
  Sparkles,
  ShieldCheck,
  Cpu,
  Clock,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering & Creative Process — How We Build | MECNUN",
  description:
    "Explore our 7-stage client engineering pipeline: Discover, Strategy, Design, Development, Test, Launch, and Support. Engineered for velocity, clarity, and world-class craft.",
  alternates: {
    canonical: `${siteConfig.url}/process`,
  },
  openGraph: {
    title: "Engineering & Creative Process — MECNUN",
    description: "A battle-tested 7-stage engineering and creative pipeline designed for clarity, velocity, and world-class craft.",
    url: `${siteConfig.url}/process`,
  },
};

export default function ProcessPage() {
  return (
    <div className="relative min-h-screen py-16 sm:py-24 overflow-hidden">
      {/* Dynamic Cosmic Ambient Background Glows */}
      <div className="pointer-events-none absolute -top-28 left-1/3 h-[600px] w-[600px] rounded-full bg-studio-cyan/10 blur-[180px] dark:bg-studio-cyan/15" />
      <div className="pointer-events-none absolute top-2/3 right-10 h-[500px] w-[500px] rounded-full bg-studio-lime/8 blur-[180px] dark:bg-studio-lime/10" />

      <Container className="relative z-10">
        {/* Page Hero Header */}
        <FadeIn direction="up">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/30 bg-white/5 px-4 py-1.5 text-xs font-mono text-studio-lime backdrop-blur-md">
              <Zap className="h-3.5 w-3.5 text-studio-cyan" />
              <span>METHODOLOGY // 7-STAGE PIPELINE</span>
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase font-mono text-foreground">
              HOW WE <span className="text-studio-lime">ENGINEER</span>
            </h1>

            <p className="mt-5 text-base sm:text-xl font-medium text-muted-foreground leading-relaxed">
              A transparent, battle-tested 7-stage creative technology pipeline engineered for maximum velocity, zero ambiguity, and world-class execution.
            </p>
          </div>
        </FadeIn>

        {/* ─── 01 CINEMATIC 7-STAGE PROCESS TIMELINE ─── */}
        <ProcessTimeline />

        {/* ─── 02 CLIENT PRINCIPLES (WHY OUR PROCESS WORKS) ─── */}
        <section aria-labelledby="principles-heading" className="mt-24 sm:mt-36 pt-16 border-t border-white/10">
          <FadeIn direction="up">
            <div className="max-w-2xl">
              <span className="font-mono text-xs text-studio-cyan font-bold tracking-wider">
                COLLABORATION PRINCIPLES
              </span>
              <h2 id="principles-heading" className="mt-2 text-2xl sm:text-4xl font-mono font-black uppercase text-foreground">
                Built For Radical Transparency
              </h2>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {/* Principle 1 */}
              <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-studio-cyan font-mono text-xs font-bold">
                  <Clock className="h-4 w-4" />
                  <span>DIRECT SPRINT ACCESS</span>
                </div>
                <h3 className="mt-3 font-mono text-lg font-bold text-foreground">
                  Weekly Demos & Live Previews
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  You get staging environment deployments every sprint. No multi-month black-box delays; see your product evolve continuously.
                </p>
              </div>

              {/* Principle 2 */}
              <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-studio-lime font-mono text-xs font-bold">
                  <Cpu className="h-4 w-4" />
                  <span>MODULAR CODEBASES</span>
                </div>
                <h3 className="mt-3 font-mono text-lg font-bold text-foreground">
                  100% IP & Clean Architecture
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Complete ownership of all design assets, tokens, and typed Next.js source repositories with thorough documentation.
                </p>
              </div>

              {/* Principle 3 */}
              <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-studio-fuchsia font-mono text-xs font-bold">
                  <ShieldCheck className="h-4 w-4" />
                  <span>GUARANTEED BENCHMARKS</span>
                </div>
                <h3 className="mt-3 font-mono text-lg font-bold text-foreground">
                  Lighthouse 95+ & 60 FPS
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Performance is an engineering requirement, not an afterthought. We test across low-end mobile devices before sign-off.
                </p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ─── 03 BOTTOM CTA ─── */}
        <footer className="mt-20 sm:mt-28 pt-12 border-t border-white/10">
          <FadeIn direction="up">
            <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-8 sm:p-14 backdrop-blur-2xl text-center relative overflow-hidden shadow-2xl">
              <div className="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-studio-lime/20 blur-[120px]" />

              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-studio-lime bg-studio-lime/10 border border-studio-lime/20">
                  <Sparkles className="h-3 w-3" />
                  <span>START PHASE 01</span>
                </span>

                <h2 className="mt-6 text-3xl sm:text-5xl font-mono font-black uppercase text-foreground">
                  Ready to start your discovery sprint?
                </h2>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                  Book an initial architectural consultation and let&apos;s map out your project roadmap together.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Magnetic strength={0.22}>
                    <Link href="/contact">
                      <Button
                        variant="accent"
                        size="lg"
                        className="gap-2 font-extrabold text-black shadow-[0_0_30px_rgba(204,255,0,0.35)]"
                      >
                        <Zap className="h-4 w-4 fill-current text-black" />
                        <span>Start a Project</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </Magnetic>

                  <Magnetic strength={0.22}>
                    <Link href="/work">
                      <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 border-white/15 font-mono font-bold text-xs uppercase"
                      >
                        <span>Explore Selected Works</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </FadeIn>
        </footer>
      </Container>
    </div>
  );
}
