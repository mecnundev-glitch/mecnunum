import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { SAMPLE_PROJECTS } from "@/lib/constants";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, Tag } from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return SAMPLE_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = SAMPLE_PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = SAMPLE_PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn direction="up">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-studio-cyan transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Works</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
            <span className="text-studio-lime font-bold">{project.category}</span>
            <span>•</span>
            <span>YEAR {project.year}</span>
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl uppercase font-mono">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-medium text-zinc-100 leading-relaxed">
            {project.tagline}
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl">
              <h2 className="text-xl font-bold">Project Overview & Architecture</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-sm font-mono text-studio-cyan">TECHNOLOGY STACK</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl">
              <div>
                <h3 className="text-lg font-bold">Need a similar solution?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We engineer tailor-made digital flagships and interactive 3D platforms.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="accent" size="lg" className="w-full gap-2 font-bold text-black">
                    <span>Start Your Project</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}
