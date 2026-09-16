import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { SERVICES_LIST } from "@/lib/constants";
import { ArrowUpRight, CheckCircle2, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering & Creative Services",
  description: "Explore our core services: Web Design, Web Development, Corporate Websites, E-Commerce, SEO, and 3D WebGL Experiences.",
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
      </Container>
    </div>
  );
}
