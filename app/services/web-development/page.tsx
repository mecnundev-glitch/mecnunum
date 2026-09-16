import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services",
  description: "Next.js App Router, TypeScript, and modern full-stack web engineering by MECNUN.",
};

export default function WebDevelopmentPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn direction="up">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-studio-lime transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Services</span>
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-studio-lime/30 bg-background/80 px-4 py-1.5 text-xs font-mono text-studio-lime">
            <Code2 className="h-3.5 w-3.5 text-studio-cyan" />
            <span>ENGINEERING EXCELLENCE</span>
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl uppercase font-mono">
            WEB <span className="text-studio-lime">DEVELOPMENT</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Ultra-fast full-stack web applications built with Next.js App Router, TypeScript, Tailwind CSS, and strict clean architecture.
          </p>

          <div className="mt-12 max-w-3xl rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold">Key Focus Areas</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Next.js App Router & Server Components",
                "Full-Stack TypeScript Safety",
                "Sub-second Core Web Vitals",
                "Headless CMS & Scalable API Integrations",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm font-mono text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-studio-lime shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link href="/contact">
                <Button variant="accent" size="lg" className="gap-2 font-bold text-black">
                  <span>Inquire About Web Development</span>
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
