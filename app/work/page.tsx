import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { SAMPLE_PROJECTS } from "@/lib/constants";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Works & Case Studies",
  description: "Explore bespoke digital flagship platforms, 3D WebGL universes, and high-performance web engineering projects by MECNUN.",
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
      </Container>
    </div>
  );
}
