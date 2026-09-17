import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { SERVICES_LIST } from "@/lib/constants";
import { ArrowUpRight, CheckCircle2, Layers, Sparkles, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Engineering & Creative Services | MECNUN",
  description:
    "Explore our core services: Web Design, Web Development, Corporate Websites, E-Commerce, SEO, and 3D WebGL Experiences.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Engineering & Creative Services | MECNUN",
    description: "End-to-end digital craft tailored to propel forward-thinking companies into the vanguard of their industry.",
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        {/* Header */}
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/30 bg-background/80 px-4 py-1.5 text-xs font-mono text-studio-lime">
            <Layers className="h-3.5 w-3.5 text-studio-cyan" />
            <span>{"STUDIO CAPABILITIES // SERVICES"}</span>
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase font-mono">
            CORE <span className="text-studio-lime">SERVICES</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            End-to-end digital craft tailored to propel forward-thinking companies into the vanguard of their industry.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((service, i) => (
            <FadeIn key={service.slug} direction="up" delay={i * 0.1}>
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-studio-lime/50 hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] hover:-translate-y-1 h-full"
              >
                <div>
                  <span className="font-mono text-xs text-studio-cyan">
                    {`0${i + 1} // CAPABILITY`}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground group-hover:text-studio-lime transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {service.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs font-mono text-zinc-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-studio-lime shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-studio-lime font-bold">
                  <span>Explore Capability</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-foreground transition-transform group-hover:bg-studio-lime group-hover:text-black group-hover:scale-110">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Conversion Footer CTA (Services -> Contact) */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <FadeIn direction="up">
            <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-zinc-900/90 to-zinc-950 p-8 sm:p-14 backdrop-blur-2xl text-center relative overflow-hidden shadow-2xl">
              <div className="pointer-events-none absolute -top-1/2 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-studio-lime/20 blur-[130px]" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-studio-cyan bg-studio-cyan/10 border border-studio-cyan/20">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>PROJECT INTAKE</span>
                </span>

                <h2 className="text-3xl sm:text-5xl font-mono font-black uppercase text-foreground">
                  Have a specific technical requirement?
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground">
                  Let&apos;s evaluate your architectural requirements and create a bespoke proposal.
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
                    <Link href="/work">
                      <Button
                        variant="outline"
                        size="lg"
                        className="gap-2 border-white/20 font-mono font-bold text-xs uppercase hover:border-studio-lime"
                      >
                        <span>View Work</span>
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
