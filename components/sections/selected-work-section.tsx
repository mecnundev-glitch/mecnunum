"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { SAMPLE_PROJECTS } from "@/lib/constants";
import { Project } from "@/types";
import { ArrowUpRight, Terminal, Sparkles, FolderKanban, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

// Visual Geometric Canvas Mockup / Artwork for each project (zero broken placeholders)
function ProjectArtwork({ project, isHovered }: { project: Project; isHovered: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-zinc-950 flex items-center justify-center p-8 select-none">
      {/* Dynamic Ambient Background Glow */}
      <div
        className={cn(
          "absolute -inset-10 rounded-full bg-gradient-to-tr blur-[90px] opacity-30 transition-all duration-700",
          project.accentGradient,
          isHovered ? "opacity-60 scale-110" : ""
        )}
      />

      {/* Cybernetic Grid Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />

      {/* Futuristic Geometric Vector Artwork */}
      <div
        className={cn(
          "relative z-10 transition-all duration-500 transform",
          isHovered ? "scale-105 rotate-1" : "scale-100"
        )}
      >
        <div className="relative flex flex-col items-center justify-center">
          {/* Outer glowing ring */}
          <div
            className={cn(
              "h-40 w-40 sm:h-52 sm:w-52 rounded-full border border-dashed flex items-center justify-center transition-all duration-700",
              isHovered ? "border-white/40 rotate-45 scale-105" : "border-white/15"
            )}
            style={{ borderColor: isHovered ? project.color : "rgba(255,255,255,0.15)" }}
          >
            {/* Inner polygon badge */}
            <div
              className="h-24 w-24 sm:h-32 sm:w-32 rounded-2xl border border-white/20 bg-zinc-900/80 backdrop-blur-xl flex flex-col items-center justify-center p-4 shadow-2xl transition-transform duration-500"
              style={{
                boxShadow: isHovered ? `0 0 35px ${project.color}33` : "none",
              }}
            >
              <Layers
                className="h-8 w-8 sm:h-10 sm:w-10 transition-transform duration-500"
                style={{ color: project.color || "#00F0FF" }}
              />
              <span className="mt-2 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                {project.year}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Category Pill */}
      <div className="absolute top-4 left-4 z-20">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-950/80 px-3 py-1 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: project.color || "#00F0FF" }}
          />
          <span>{project.category}</span>
        </span>
      </div>

      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center gap-1 rounded-full border border-studio-lime/30 bg-studio-lime/10 px-2.5 py-0.5 text-[10px] font-mono text-studio-lime font-bold backdrop-blur-md">
            <Sparkles className="h-3 w-3" />
            <span>FEATURED</span>
          </span>
        </div>
      )}
    </div>
  );
}

export function SelectedWorkSection() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      aria-labelledby="selected-work-heading"
      className="relative z-10 w-full py-28 sm:py-36 md:py-44 border-t border-white/10 dark:border-white/5 bg-background/90 dark:bg-zinc-950/90 backdrop-blur-xl overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-0 h-[600px] w-[600px] rounded-full bg-studio-cyan/5 blur-[180px] dark:bg-studio-cyan/10" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-[500px] w-[500px] rounded-full bg-studio-lime/5 blur-[180px] dark:bg-studio-lime/10" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 dark:border-white/10 bg-white/5 px-3.5 py-1 text-xs font-mono text-muted-foreground backdrop-blur-md">
              <Terminal className="h-3 w-3 text-studio-cyan" />
              <span className="text-foreground font-bold">03 // PORTFOLIO</span>
            </div>
            <h2
              id="selected-work-heading"
              className="mt-4 text-3xl sm:text-5xl md:text-6xl font-mono font-black uppercase tracking-tight text-foreground"
            >
              SELECTED <span className="text-studio-cyan">WORK</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base font-medium text-muted-foreground leading-relaxed">
            Curated engineering case studies, full-stack applications, and interactive 3D WebGL flagships.
          </p>
        </div>

        {/* Large Editorial Project Cards Grid */}
        <div className="mt-12 sm:mt-16 grid gap-10 lg:gap-14 md:grid-cols-2">
          {SAMPLE_PROJECTS.map((project, index) => {
            const isHovered = hoveredSlug === project.slug;

            return (
              <motion.div
                key={project.slug}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative"
                onMouseEnter={() => setHoveredSlug(project.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
              >
                <Link
                  href={`/work/${project.slug}`}
                  onFocus={() => setHoveredSlug(project.slug)}
                  onBlur={() => setHoveredSlug(null)}
                  className="block rounded-3xl border border-white/10 dark:border-white/10 bg-zinc-950/60 p-5 sm:p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/25 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-cyan"
                >
                  {/* Card Visual Artwork / Display Container */}
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-transform duration-500 group-hover:border-white/20">
                    <ProjectArtwork project={project} isHovered={isHovered} />

                    {/* Hover Floating Action Capsule */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none z-30">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/90 px-5 py-2.5 text-xs font-mono font-bold text-foreground backdrop-blur-xl shadow-2xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="h-3.5 w-3.5 text-studio-cyan" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content & Metadata */}
                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                        <span>{project.category}</span>
                        <span className="opacity-40">•</span>
                        <span>{project.year}</span>
                      </span>
                      <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-studio-cyan group-hover:bg-studio-cyan/10 group-hover:text-studio-cyan text-muted-foreground">
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    <h3 className="mt-2 text-2xl sm:text-3xl font-mono font-black uppercase tracking-tight text-foreground transition-colors group-hover:text-studio-cyan">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Technology Stack Tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-zinc-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">
          <div className="text-center sm:text-left">
            <h4 className="font-mono text-lg font-bold text-foreground">
              Explore the complete project archive
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Deep dives, architectural breakdowns, and engineering specifications.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5">
            <Magnetic strength={0.2}>
              <Link href="/work">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-white/15 hover:border-studio-cyan hover:text-studio-cyan font-mono font-bold text-xs uppercase"
                >
                  <FolderKanban className="h-4 w-4" />
                  <span>View Work</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </Magnetic>

            <Magnetic strength={0.2}>
              <Link href="/contact">
                <Button
                  variant="accent"
                  size="lg"
                  className="gap-2 font-extrabold text-black shadow-[0_0_24px_rgba(204,255,0,0.3)]"
                >
                  <Sparkles className="h-4 w-4 fill-current text-black" />
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </Magnetic>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default SelectedWorkSection;
