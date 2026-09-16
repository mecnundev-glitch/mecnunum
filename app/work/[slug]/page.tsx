import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { SAMPLE_PROJECTS } from "@/lib/constants";
import { CASE_STUDIES } from "@/lib/case-studies-data";
import { siteConfig } from "@/lib/site-config";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Layers,
  Cpu,
  CheckCircle2,
  Zap,
  Gauge,
  Code2,
  Calendar,
  UserCheck,
  Clock,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
  const study = CASE_STUDIES[params.slug];
  const project = SAMPLE_PROJECTS.find((p) => p.slug === params.slug);

  if (!study && !project) {
    return {
      title: "Case Study Not Found — MECNUN",
    };
  }

  const title = `${study?.title || project?.title} — Case Study | MECNUN`;
  const description =
    study?.overview ||
    project?.description ||
    "In-depth engineering and creative direction case study.";
  const canonicalUrl = `${siteConfig.url}/work/${params.slug}`;

  return {
    title,
    description,
    keywords: [
      study?.title || "",
      study?.category || "",
      ...(study?.technologies.map((t) => t.name) || []),
      "Case Study",
      "Creative Technology",
      "Next.js",
      "WebGL",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: "article",
      images: [
        {
          url: `${siteConfig.url}/og-work-${params.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@mecnunum",
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const study = CASE_STUDIES[params.slug];
  const project = SAMPLE_PROJECTS.find((p) => p.slug === params.slug);

  if (!study && !project) {
    notFound();
  }

  const data = study || {
    slug: project!.slug,
    title: project!.title,
    client: "Flagship Client",
    category: project!.category,
    year: project!.year,
    tagline: project!.tagline,
    color: project!.color || "#00F0FF",
    accentGradient: project!.accentGradient || "from-cyan-500/30 to-transparent",
    role: "Full-Stack Design Engineering",
    timeline: "6 Weeks",
    overview: project!.description,
    challenge: {
      headline: "Scalable Architecture & Design Precision",
      description: "Engineering a bespoke digital presence with zero template compromises.",
      keyPoints: ["High performance", "Accessibility", "Design fidelity"],
    },
    approach: {
      headline: "Modern Component Architecture",
      description: "Implementing strict design tokens and performant animations.",
      methodologies: ["Next.js App Router", "Tailwind CSS Design System"],
    },
    solution: {
      headline: "A Purpose-Built Digital Flagship",
      description: project!.description,
      features: [
        { title: "Custom Architecture", description: "Bespoke engineered layout." },
      ],
    },
    technologies: project!.technologies.map((t) => ({
      name: t,
      category: "Stack",
      purpose: "Core Engineering",
    })),
    visuals: [
      { title: "System Visuals", description: "High-resolution interface views." },
    ],
    result: {
      headline: "Successful Deployment",
      description: "Delivered with 100% performance satisfaction.",
      metrics: [
        { label: "Performance", value: "100%", detail: "Lighthouse optimization" },
      ],
    },
  };

  // Find next project for bottom navigation
  const currentIndex = SAMPLE_PROJECTS.findIndex((p) => p.slug === params.slug);
  const nextProject =
    SAMPLE_PROJECTS[(currentIndex + 1) % SAMPLE_PROJECTS.length];

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${data.title} — Case Study`,
    description: data.overview,
    author: {
      "@type": "Person",
      name: "Tayfur Parmak",
      jobTitle: "Computer Engineer & Creative Technologist",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: `${data.year}-01-01`,
    inLanguage: "en-US",
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative min-h-screen py-12 sm:py-20 overflow-hidden">
        {/* Dynamic Ambient Background Glows */}
        <div
          className={cn(
            "pointer-events-none absolute -top-28 right-0 h-[650px] w-[650px] rounded-full bg-gradient-to-br blur-[190px] opacity-25 dark:opacity-35",
            data.accentGradient
          )}
        />
        <div className="pointer-events-none absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full bg-studio-cyan/5 blur-[180px]" />

        <Container className="relative z-10 max-w-6xl">
          {/* Back Navigation Bar */}
          <FadeIn direction="up">
            <div className="flex items-center justify-between pb-8 border-b border-white/10">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-studio-cyan transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>ALL CASE STUDIES</span>
              </Link>

              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-studio-lime animate-pulse" />
                <span>CASE STUDY ARCHIVE // {data.year}</span>
              </div>
            </div>
          </FadeIn>

          {/* ─── 01 PROJECT HERO ─── */}
          <header className="mt-10 sm:mt-16">
            <FadeIn direction="up" delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-muted-foreground backdrop-blur-md">
                <Terminal className="h-3 w-3" style={{ color: data.color }} />
                <span className="text-foreground font-bold">{data.category}</span>
              </div>

              <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase font-mono tracking-tight text-foreground">
                {data.title}
              </h1>

              <p className="mt-4 max-w-3xl text-lg sm:text-2xl font-medium text-zinc-300 leading-relaxed">
                {data.tagline}
              </p>
            </FadeIn>

            {/* Project Metadata Ribbon */}
            <FadeIn direction="up" delay={0.2} className="mt-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur-xl">
                <div>
                  <span className="block font-mono text-[11px] text-muted-foreground uppercase">
                    CLIENT
                  </span>
                  <span className="font-mono text-sm font-bold text-foreground mt-1 block">
                    {data.client}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] text-muted-foreground uppercase">
                    ROLE / SCOPE
                  </span>
                  <span className="font-mono text-sm font-bold text-foreground mt-1 block">
                    {data.role}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] text-muted-foreground uppercase">
                    TIMELINE
                  </span>
                  <span className="font-mono text-sm font-bold text-foreground mt-1 block">
                    {data.timeline}
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[11px] text-muted-foreground uppercase">
                    DELIVERY YEAR
                  </span>
                  <span className="font-mono text-sm font-bold text-studio-lime mt-1 block">
                    {data.year}
                  </span>
                </div>
              </div>
            </FadeIn>
          </header>

          {/* ─── 02 OVERVIEW ─── */}
          <section aria-labelledby="overview-heading" className="mt-16 sm:mt-24 pt-12 border-t border-white/10">
            <FadeIn direction="up">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs text-studio-cyan font-bold tracking-wider">
                    01 // PROJECT OVERVIEW
                  </span>
                  <h2 id="overview-heading" className="mt-2 text-2xl sm:text-3xl font-mono font-black uppercase text-foreground">
                    Strategic Vision & Architecture
                  </h2>
                </div>
                <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-xl">
                  <p className="text-base sm:text-lg font-medium text-zinc-200 leading-relaxed">
                    {data.overview}
                  </p>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* ─── 03 THE CHALLENGE ─── */}
          <section aria-labelledby="challenge-heading" className="mt-16 sm:mt-24 pt-12 border-t border-white/10">
            <FadeIn direction="up">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs text-studio-fuchsia font-bold tracking-wider">
                    02 // THE CHALLENGE
                  </span>
                  <h2 id="challenge-heading" className="mt-2 text-2xl sm:text-3xl font-mono font-black uppercase text-foreground">
                    {data.challenge.headline}
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-xl">
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {data.challenge.description}
                    </p>
                    <div className="mt-6 space-y-3 pt-6 border-t border-white/10">
                      {data.challenge.keyPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="h-2 w-2 rounded-full bg-studio-fuchsia mt-2 shrink-0" />
                          <p className="text-xs sm:text-sm font-mono text-zinc-300">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* ─── 04 APPROACH & 05 SOLUTION ─── */}
          <section aria-labelledby="approach-heading" className="mt-16 sm:mt-24 pt-12 border-t border-white/10">
            <FadeIn direction="up">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4">
                  <span className="font-mono text-xs text-studio-lime font-bold tracking-wider">
                    03 // APPROACH & SOLUTION
                  </span>
                  <h2 id="approach-heading" className="mt-2 text-2xl sm:text-3xl font-mono font-black uppercase text-foreground">
                    {data.solution.headline}
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 sm:p-8 backdrop-blur-xl">
                    <h3 className="font-mono text-lg font-bold text-foreground">
                      Methodology & Execution
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {data.approach.description}
                    </p>
                  </div>

                  {/* Solution Features Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {data.solution.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-white/10 bg-zinc-950/50 p-6 backdrop-blur-xl"
                      >
                        <div className="flex items-center gap-2 text-studio-lime font-mono text-xs font-bold">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>FEATURE 0{idx + 1}</span>
                        </div>
                        <h4 className="mt-3 font-mono text-base font-bold text-foreground">
                          {feature.title}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </section>

          {/* ─── 06 TECHNOLOGY STACK ─── */}
          <section aria-labelledby="tech-heading" className="mt-16 sm:mt-24 pt-12 border-t border-white/10">
            <FadeIn direction="up">
              <div>
                <span className="font-mono text-xs text-studio-cyan font-bold tracking-wider">
                  04 // ARCHITECTURAL STACK
                </span>
                <h2 id="tech-heading" className="mt-2 text-2xl sm:text-3xl font-mono font-black uppercase text-foreground">
                  Engineered With Purpose
                </h2>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5 backdrop-blur-xl hover:border-white/20 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-studio-cyan uppercase">
                        {tech.category}
                      </span>
                      <Code2 className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <h3 className="mt-2 font-mono text-lg font-bold text-foreground">
                      {tech.name}
                    </h3>
                    <p className="mt-2 text-xs font-mono text-muted-foreground leading-relaxed">
                      {tech.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* ─── 07 VISUALS (FULL-SCREEN / EDITORIAL MOCKUP SHOWCASE) ─── */}
          <section aria-labelledby="visuals-heading" className="mt-16 sm:mt-24 pt-12 border-t border-white/10">
            <FadeIn direction="up">
              <div>
                <span className="font-mono text-xs text-studio-lime font-bold tracking-wider">
                  05 // INTERFACE VISUALS
                </span>
                <h2 id="visuals-heading" className="mt-2 text-2xl sm:text-3xl font-mono font-black uppercase text-foreground">
                  Digital Craft & Fidelity
                </h2>
              </div>

              <div className="mt-8 space-y-6">
                {data.visuals.map((vis, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-3xl border border-white/15 bg-zinc-950/90 p-8 sm:p-12 backdrop-blur-2xl overflow-hidden shadow-2xl"
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr blur-[90px] opacity-20",
                        data.accentGradient
                      )}
                    />
                    <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                      <div>
                        <span className="font-mono text-xs text-studio-lime">
                          EXHIBIT 0{idx + 1}
                        </span>
                        <h3 className="mt-1 font-mono text-2xl font-black text-foreground uppercase">
                          {vis.title}
                        </h3>
                        <p className="mt-2 text-sm text-zinc-300 max-w-xl">
                          {vis.description}
                        </p>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono text-muted-foreground">
                        <Sparkles className="h-3.5 w-3.5 text-studio-cyan" />
                        <span>High-Fidelity Render</span>
                      </div>
                    </div>

                    {/* Cybernetic Wireframe Graphic */}
                    <div className="relative z-10 mt-8 h-64 sm:h-96 w-full rounded-2xl border border-white/10 bg-black/60 flex items-center justify-center p-6 overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]" />
                      <div className="relative flex flex-col items-center justify-center text-center">
                        <Layers className="h-16 w-16 mb-4" style={{ color: data.color }} />
                        <span className="font-mono text-sm font-bold text-foreground">
                          {data.title} • {vis.title}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground mt-1">
                          60 FPS WebGL & High-Performance Core Architecture
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* ─── 08 RESULT & METRICS ─── */}
          <section aria-labelledby="result-heading" className="mt-16 sm:mt-24 pt-12 border-t border-white/10">
            <FadeIn direction="up">
              <div>
                <span className="font-mono text-xs text-studio-cyan font-bold tracking-wider">
                  06 // BENCHMARKS & RESULTS
                </span>
                <h2 id="result-heading" className="mt-2 text-2xl sm:text-3xl font-mono font-black uppercase text-foreground">
                  {data.result.headline}
                </h2>
                <p className="mt-3 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {data.result.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {data.result.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl"
                  >
                    <span className="font-mono text-xs text-muted-foreground uppercase">
                      {metric.label}
                    </span>
                    <div
                      className="mt-2 text-4xl sm:text-5xl font-mono font-black"
                      style={{ color: data.color }}
                    >
                      {metric.value}
                    </div>
                    <p className="mt-2 text-xs font-mono text-zinc-400">
                      {metric.detail}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </section>

          {/* ─── 09 PROJECT CTA & NEXT PROJECT ─── */}
          <footer className="mt-20 sm:mt-28 pt-12 border-t border-white/10">
            <FadeIn direction="up">
              <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-8 sm:p-14 backdrop-blur-2xl text-center relative overflow-hidden shadow-2xl">
                <div
                  className={cn(
                    "pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-gradient-to-b blur-[100px] opacity-30",
                    data.accentGradient
                  )}
                />

                <div className="relative z-10 max-w-2xl mx-auto">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-studio-lime bg-studio-lime/10 border border-studio-lime/20">
                    <Sparkles className="h-3 w-3" />
                    <span>NEXT-STAGE COLLABORATION</span>
                  </span>

                  <h2 className="mt-6 text-3xl sm:text-5xl font-mono font-black uppercase text-foreground">
                    Ready to engineer your next digital flagship?
                  </h2>

                  <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                    Let&apos;s build an extraordinary digital experience engineered for purpose, performance, and growth.
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

                    {nextProject && (
                      <Magnetic strength={0.22}>
                        <Link href={`/work/${nextProject.slug}`}>
                          <Button
                            variant="outline"
                            size="lg"
                            className="gap-2 border-white/15 font-mono font-bold text-xs uppercase"
                          >
                            <span>Next: {nextProject.title}</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </Magnetic>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          </footer>
        </Container>
      </article>
    </>
  );
}
