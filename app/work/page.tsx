import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { SAMPLE_PROJECTS } from "@/lib/constants";
import { ArrowUpRight, Sparkles, FolderKanban, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Selected Works & Case Studies | MECNUN",
  description:
    "Explore bespoke digital flagship platforms, 3D WebGL universes, and high-performance web engineering projects by MECNUN.",
  alternates: {
    canonical: `${siteConfig.url}/work`,
  },
  openGraph: {
    title: "Selected Works & Case Studies | MECNUN",
    description: "Curated archive of creative engineering and interactive WebGL case studies.",
    url: `${siteConfig.url}/work`,
  },
};

export default function WorkPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        {/* Header Badge & Title */}
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-studio-cyan/30 bg-background/80 px-4 py-1.5 text-xs font-mono text-studio-cyan">
            <Sparkles className="h-3.5 w-3.5 text-studio-lime" />
            <span>{"PORTFOLIO // SELECTED CASE STUDIES"}</span>
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase font-mono">
            SELECTED <span className="text-studio-cyan">WORKS</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A curated index of creative technology flagships, interactive 3D spaces, and full-stack engineering milestones.
          </p>
        </FadeIn>

        {/* Project Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_PROJECTS.map((project, i) => (
            <FadeIn key={project.slug} direction="up" delay={i * 0.1}>
              <Link
                href={`/work/${project.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-studio-cyan/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] hover:-translate-y-1 h-full"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                    <span className="text-studio-lime font-bold">{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-foreground group-hover:text-studio-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-foreground transition-transform group-hover:bg-studio-cyan group-hover:text-black group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Conversion Footer CTA (Portfolio -> Contact) */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <FadeIn direction="up">
            <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-8 sm:p-14 backdrop-blur-2xl text-center relative overflow-hidden shadow-2xl">
              <div className="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-studio-cyan/20 blur-[130px]" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-studio-lime bg-studio-lime/10 border border-studio-lime/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>START YOUR PROJECT</span>
                </span>

                <h2 className="text-3xl sm:text-5xl font-mono font-black uppercase text-foreground">
                  Ready to build something iconic?
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground">
                  Let&apos;s engineer a high-performance, bespoke digital flagship for your business.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
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
                    <Link href="/services">
                      <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 border-white/20 font-mono font-bold text-xs uppercase hover:border-studio-cyan"
                      >
                        <span>Explore Services</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
