import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Compass, Home, Sparkles } from "lucide-react";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";

export default function NotFound() {
  return (
    <div className="relative flex flex-1 items-center justify-center min-h-[75vh] py-24 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-studio-cyan/10 blur-[180px]" />

      <Container className="relative z-10 text-center max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-studio-cyan/30 bg-studio-cyan/5 px-4 py-1.5 text-xs font-mono text-studio-cyan">
          <MecnunCatIcon size={16} />
          <span>{"404 // SPATIAL COORDINATE UNREACHABLE"}</span>
        </div>

        <h1 className="mt-6 text-6xl sm:text-8xl font-black font-mono tracking-tight text-foreground">
          4<span className="text-studio-cyan">0</span>4
        </h1>

        <h2 className="mt-2 text-xl sm:text-2xl font-mono font-bold uppercase text-zinc-200">
          Page Not Found in Universe
        </h2>

        <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
          The requested coordinate or document does not exist in the studio matrix. It may have been relocated, decommissioned, or refactored.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link href="/">
            <Button
              variant="accent"
              size="lg"
              className="gap-2 font-extrabold text-black shadow-[0_0_25px_rgba(204,255,0,0.3)]"
            >
              <Home className="h-4 w-4 fill-current text-black" />
              <span>Return Home</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>

          <Link href="/work">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white/20 font-mono text-xs uppercase hover:border-studio-cyan"
            >
              <Compass className="h-4 w-4 text-studio-cyan" />
              <span>Explore Selected Work</span>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
