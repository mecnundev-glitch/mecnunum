import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Compass, Terminal, ShieldCheck, Zap, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Engineering & Creative Process",
  description: "Discover how MECNUN transforms ambitious visions into ultra-fast, visually stunning digital flagships.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Architectural Blueprint",
    desc: "We analyze brand positioning, technical requirements, user psychology, and competitive landscape to architect a bulletproof engineering roadmap.",
    icon: Compass,
    color: "text-studio-cyan",
  },
  {
    step: "02",
    title: "Editorial Design & Interactive Prototyping",
    desc: "Sculpting high-contrast typographic systems, design tokens, and 3D spatial concepts with zero boilerplate templates.",
    icon: Layers,
    color: "text-studio-lime",
  },
  {
    step: "03",
    title: "High-Performance Engineering",
    desc: "Building with Next.js App Router, TypeScript, React Three Fiber, and custom GLSL shaders with strict 60fps performance budgets.",
    icon: Terminal,
    color: "text-studio-fuchsia",
  },
  {
    step: "04",
    title: "Optimization, Hardening & Launch",
    desc: "Sub-second Core Web Vitals optimization, deep SEO schema markup, edge CDN caching, and automated deployment pipelines.",
    icon: ShieldCheck,
    color: "text-studio-cyan",
  },
];

export default function ProcessPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/30 bg-background/80 px-4 py-1.5 text-xs font-mono text-studio-lime">
            <Zap className="h-3.5 w-3.5 text-studio-cyan" />
            <span>{"METHODOLOGY // HOW WE BUILD"}</span>
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase font-mono">
            OUR <span className="text-studio-lime">PROCESS</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A battle-tested 4-stage engineering and creative pipeline designed for clarity, velocity, and world-class craft.
          </p>

          {/* Process Timeline */}
          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-2xl font-black ${step.color}`}>
                      {step.step}
                    </span>
                    <Icon className={`h-6 w-6 ${step.color}`} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-2xl border border-studio-cyan/30 bg-zinc-950/80 p-8 text-center backdrop-blur-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Ready to execute your next flagship project?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Let&apos;s build something extraordinary together.
            </p>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="cyan" size="lg" className="gap-2 font-bold">
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
