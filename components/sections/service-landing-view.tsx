"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ChevronDown,
  Layers,
  Zap,
  ShieldCheck,
  Cpu,
  Palette,
  Eye,
  Maximize2,
  GitBranch,
  Briefcase,
  Globe2,
  Lock,
  Users,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  Search,
  BarChart3,
  Gauge,
  Share2,
  Box,
  Sliders,
  Terminal,
} from "lucide-react";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";
import { ServiceData } from "@/lib/services-data";
import { cn } from "@/lib/utils";

// Icon mapping helper
const ICON_MAP: Record<string, React.ElementType> = {
  Palette,
  Layers,
  Maximize2,
  Eye,
  Zap,
  ShieldCheck,
  Cpu,
  GitBranch,
  Briefcase,
  Globe2,
  Lock,
  Users,
  ShoppingCart,
  Smartphone,
  TrendingUp,
  Search,
  BarChart3,
  Gauge,
  Share2,
  Box,
  Sliders,
};

interface ServiceLandingViewProps {
  service: ServiceData;
}

export function ServiceLandingView({ service }: ServiceLandingViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      {/* ─── 01 HERO SECTION ─── */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-white/10 overflow-hidden">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-studio-cyan/10 blur-[150px]" />
        <div className="pointer-events-none absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-studio-lime/5 blur-[140px]" />

        <Container className="relative z-10">
          <FadeIn direction="up">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 mb-8 text-xs font-mono text-muted-foreground">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 hover:text-studio-cyan transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>SERVICES</span>
              </Link>
              <span>/</span>
              <span className="text-foreground uppercase">{service.title}</span>
            </div>

            {/* Badge & Number */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-studio-cyan/30 bg-studio-cyan/5 px-4 py-1.5 text-xs font-mono text-studio-cyan">
              <MecnunCatIcon size={16} />
              <span>{`${service.number} // ${service.eyebrow}`}</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-mono tracking-tight uppercase leading-[1.05]">
              {service.title}
            </h1>

            {/* Subtitle & Description */}
            <p className="mt-6 max-w-3xl text-lg sm:text-xl md:text-2xl font-medium text-zinc-300 leading-relaxed">
              {service.tagline}
            </p>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              {service.heroDescription}
            </p>

            {/* Quick Metrics Bar */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              {service.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md"
                >
                  <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                  <div className="mt-1 text-lg sm:text-xl font-bold font-mono text-studio-cyan">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <Button
                  variant="accent"
                  size="lg"
                  className="gap-2 font-bold text-black font-mono uppercase text-sm shadow-[0_0_25px_rgba(163,255,18,0.25)]"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-white/20 font-mono uppercase text-sm hover:border-studio-cyan"
                >
                  <span>View Case Studies</span>
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ─── 02 PROBLEM & SOLUTION COMPARISON ─── */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-zinc-950/40">
        <Container>
          <FadeIn direction="up">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Problem Column */}
              <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.03] p-8 sm:p-10 backdrop-blur-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1 text-xs font-mono text-rose-400">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  <span>THE INDUSTRY BOTTLENECK</span>
                </div>
                <h2 className="mt-5 text-2xl sm:text-3xl font-bold font-mono uppercase text-foreground">
                  {service.problem.headline}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {service.problem.description}
                </p>

                <div className="mt-8 space-y-4">
                  {service.problem.painPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-rose-500/10 bg-black/40 p-4"
                    >
                      <div className="text-sm font-bold font-mono text-rose-300 flex items-center gap-2">
                        <span className="text-rose-500">✕</span>
                        <span>{point.title}</span>
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {point.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution Column */}
              <div className="rounded-2xl border border-studio-cyan/30 bg-studio-cyan/[0.03] p-8 sm:p-10 backdrop-blur-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-studio-cyan/30 bg-studio-cyan/10 px-3 py-1 text-xs font-mono text-studio-cyan">
                  <Terminal className="h-3.5 w-3.5" />
                  <span>THE MECNUN ARCHITECTURE</span>
                </div>
                <h2 className="mt-5 text-2xl sm:text-3xl font-bold font-mono uppercase text-foreground">
                  {service.solution.headline}
                </h2>
                <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {service.solution.description}
                </p>

                <div className="mt-8 space-y-4">
                  {service.solution.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-studio-cyan/20 bg-black/40 p-4"
                    >
                      <div className="text-sm font-bold font-mono text-studio-cyan flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-studio-lime shrink-0" />
                        <span>{pillar.title}</span>
                      </div>
                      <div className="mt-1 text-xs text-zinc-300 leading-relaxed">
                        {pillar.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ─── 03 KEY BENEFITS ─── */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-2xl">
              <div className="text-xs font-mono text-studio-lime uppercase tracking-widest">
                {"// TANGIBLE VALUE & ADVANTAGE"}
              </div>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black font-mono uppercase">
                Why Brands Choose <span className="text-studio-lime">Our Approach</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.benefits.map((benefit, idx) => {
                const IconComponent = ICON_MAP[benefit.iconName] || CheckCircle2;
                return (
                  <div
                    key={idx}
                    className="group rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-studio-lime/40 hover:bg-studio-lime/[0.02]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-studio-lime/20 bg-studio-lime/10 text-studio-lime transition-transform group-hover:scale-110">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-bold font-mono uppercase text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ─── 04 SPECIALIZED PROCESS WORKFLOW ─── */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-zinc-950/40">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-2xl">
              <div className="text-xs font-mono text-studio-cyan uppercase tracking-widest">
                {"// EXECUTION LIFECYCLE"}
              </div>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black font-mono uppercase">
                Service <span className="text-studio-cyan">Workflow</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-zinc-950/90 p-6 backdrop-blur-xl"
                >
                  <div>
                    <div className="text-3xl font-black font-mono text-studio-cyan/40">
                      {step.step}
                    </div>
                    <h3 className="mt-4 text-lg font-bold font-mono uppercase text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">DELIVERABLE:</div>
                    <div className="mt-1 text-xs font-mono text-studio-lime font-semibold">
                      {step.deliverable}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ─── 05 TECHNOLOGIES & TOOLCHAIN ─── */}
      <section className="py-20 sm:py-28 border-b border-white/10">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-2xl">
              <div className="text-xs font-mono text-studio-purple uppercase tracking-widest">
                {"// TECH STACK & ARTIFACTS"}
              </div>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black font-mono uppercase">
                Technology <span className="text-studio-purple">Architecture</span>
              </h2>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.technologies.map((techGroup, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur-xl"
                >
                  <h3 className="text-xs font-mono uppercase tracking-wider text-studio-cyan font-bold mb-4">
                    {techGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techGroup.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-mono text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ─── 06 FREQUENTLY ASKED QUESTIONS (FAQ) ─── */}
      <section className="py-20 sm:py-28 border-b border-white/10 bg-zinc-950/40">
        <Container>
          <FadeIn direction="up">
            <div className="max-w-2xl">
              <div className="text-xs font-mono text-studio-cyan uppercase tracking-widest">
                {"// CLARIFICATIONS"}
              </div>
              <h2 className="mt-3 text-3xl sm:text-5xl font-black font-mono uppercase">
                Frequently Asked <span className="text-studio-cyan">Questions</span>
              </h2>
            </div>

            <div className="mt-12 max-w-3xl space-y-4">
              {service.faq.map((faqItem, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-white/[0.02]"
                    >
                      <span className="font-mono text-sm sm:text-base font-bold text-foreground">
                        {faqItem.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-studio-cyan shrink-0 transition-transform duration-200 ml-4",
                          isOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-white/5">
                            {faqItem.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ─── 07 FINAL SERVICE CTA ─── */}
      <section className="py-24 sm:py-32 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-studio-cyan/[0.05] to-transparent" />
        <Container className="relative z-10 text-center">
          <FadeIn direction="up">
            <div className="mx-auto max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/30 bg-studio-lime/10 px-4 py-1.5 text-xs font-mono text-studio-lime">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{"PROJECT INITIATION // READY FOR TRANSMISSION"}</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-mono uppercase tracking-tight">
                {service.cta.headline}
              </h2>
              <p className="mx-auto max-w-xl text-sm sm:text-base text-muted-foreground">
                {service.cta.subline}
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button
                    variant="accent"
                    size="lg"
                    className="gap-2 font-bold text-black font-mono uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(163,255,18,0.3)] h-14 px-8"
                  >
                    <span>{service.cta.buttonText}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 font-mono uppercase text-sm h-14 px-6 hover:border-studio-cyan"
                  >
                    <span>Explore All Services</span>
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
