import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/design-system";
import { ArrowUpRight, Cpu, Code2, Layers, Terminal } from "lucide-react";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";

export const metadata: Metadata = {
  title: "About Mecnun — Computer Engineer & Creative Technologist",
  description: "Learn about Mecnun, computer engineering philosophy, digital experience architecture, and creative studio vision.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-studio-cyan/30 bg-background/80 px-4 py-1.5 text-xs font-mono text-studio-cyan">
            <MecnunCatIcon size={18} />
            <span>{"ABOUT // ENGINEERING IDENTITY"}</span>
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase font-mono">
            MECNUN <span className="text-studio-lime">STUDIO</span>
          </h1>

          {/* Bio Lead */}
          <p className="mt-6 max-w-3xl text-xl font-medium text-zinc-100 leading-relaxed">
            {BRAND.bio}
          </p>

          {/* Three Core Disciplines */}
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Cpu,
                title: "Computer Engineering",
                color: "text-studio-cyan",
                border: "hover:border-studio-cyan/50",
                desc: "Rigorous software engineering, systems architecture, low-latency algorithms, and strict type safety.",
              },
              {
                icon: Code2,
                title: "Web Development",
                color: "text-studio-lime",
                border: "hover:border-studio-lime/50",
                desc: "Modern Next.js App Router, full-stack microservices, edge caching, and scalable cloud deployments.",
              },
              {
                icon: Layers,
                title: "Digital Experiences",
                color: "text-studio-fuchsia",
                border: "hover:border-studio-fuchsia/50",
                desc: "Interactive 3D WebGL worlds, kinetic micro-interactions, and high-fashion editorial aesthetics.",
              },
            ].map((d, i) => {
              const Icon = d.icon;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl transition-all duration-300 ${d.border}`}
                >
                  <Icon className={`h-6 w-6 ${d.color}`} />
                  <h3 className="mt-4 text-lg font-bold text-foreground">{d.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Engineering Manifesto Box */}
          <div className="mt-12 rounded-2xl border border-white/10 bg-zinc-950/70 p-8 backdrop-blur-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-studio-lime">
              <Terminal className="h-4 w-4" />
              <span>ENGINEERING MANIFESTO</span>
            </div>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-mono">
              &ldquo;We reject slow, generic templates. Every line of code is sculpted for maximum performance, aesthetic gravity, and unforgettable user delight.&rdquo;
            </p>
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="gap-2 font-bold text-black">
                  <span>Collaborate With Us</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/process">
                <Button variant="outline" size="lg">
                  Explore Our Process
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
