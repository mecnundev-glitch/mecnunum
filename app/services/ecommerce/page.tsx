import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "E-Commerce Development",
  description: "High-conversion headless Shopify, bespoke commerce engines, and seamless checkout flows by MECNUN.",
};

export default function EcommercePage() {
  return (
    <div className="py-16 sm:py-24">
      <Container>
        <FadeIn direction="up">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-studio-fuchsia transition-colors mb-6"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Services</span>
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-studio-fuchsia/30 bg-background/80 px-4 py-1.5 text-xs font-mono text-studio-fuchsia">
            <ShoppingCart className="h-3.5 w-3.5 text-studio-lime" />
            <span>COMMERCE ARCHITECTURE</span>
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl uppercase font-mono">
            E-COMMERCE <span className="text-studio-fuchsia">DEVELOPMENT</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Custom commerce platforms designed to maximize cart conversion rates, fast checkout flows, and seamless inventory management.
          </p>

          <div className="mt-12 max-w-3xl rounded-2xl border border-white/10 bg-zinc-950/70 p-6 sm:p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold">Key Focus Areas</h3>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Headless Shopify & Next.js Commerce",
                "Custom Zero-Friction Checkout Flows",
                "Dynamic Instant Product Filtering & Search",
                "Full Funnel Analytics & Conversion Tracking",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm font-mono text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-studio-fuchsia shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10">
              <Link href="/contact">
                <Button variant="fuchsia" size="lg" className="gap-2 font-bold">
                  <span>Inquire About E-Commerce</span>
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
