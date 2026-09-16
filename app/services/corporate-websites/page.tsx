import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Websites",
  description: "Enterprise digital flagships, institutional credibility, and multi-language corporate web platforms by MECNUN.",
};

export default function CorporateWebsitesPage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn direction="up">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-studio-cyan transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Services</span>
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-studio-cyan/30 bg-background/80 px-4 py-1.5 text-xs font-mono text-studio-cyan">
            <Building2 className="h-3.5 w-3.5 text-studio-lime" />
            <span>ENTERPRISE SOLUTIONS</span>
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl uppercase font-mono">
            CORPORATE <span className="text-studio-cyan">WEBSITES</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Enterprise-grade digital flagships that command industry respect, communicate value propositions, and convert discerning enterprise clientele.
          </p>

          <div className="mt-12 max-w-3xl rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold">Key Focus Areas</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Enterprise Architecture & Security",
                "Multi-language & Regional Localization",
                "Scalable Editorial CMS Pipelines",
                "Compliance & Accessibility (WCAG 2.1)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm font-mono text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-studio-cyan shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link href="/contact">
                <Button variant="cyan" size="lg" className="gap-2 font-bold">
                  <span>Inquire About Corporate Websites</span>
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
