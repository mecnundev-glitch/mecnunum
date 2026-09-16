"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { NavLinks } from "@/components/navigation/nav-links";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { ThemeToggle } from "@/components/navigation/theme-toggle";
import { Button } from "@/components/ui/button";
import { MecnunLogo } from "@/components/ui/mecnun-logo";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  // Threshold of 20px scroll offset to transition from transparent to adaptive surface
  const isScrolled = useScrollPosition(20);

  return (
    <header
      role="banner"
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-out",
        isScrolled
          ? "border-b border-border/60 bg-background/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2.5"
          : "border-b border-transparent bg-transparent py-4 sm:py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Logo: MECNUN */}
        <Link
          href="/"
          className="flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-cyan"
          aria-label="MECNUN Creative Studio Home"
        >
          <MecnunLogo size={36} />
        </Link>

        {/* Desktop Navigation Links (Floating Glass Pill) */}
        <div className="hidden md:flex items-center rounded-full border border-white/10 dark:border-white/10 bg-zinc-950/50 dark:bg-zinc-900/60 p-1.5 backdrop-blur-lg shadow-inner">
          <NavLinks />
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact" tabIndex={-1}>
            <Button
              variant="accent"
              size="sm"
              className="font-black text-black gap-1.5 group shadow-[0_0_18px_rgba(204,255,0,0.25)] hover:shadow-[0_0_28px_rgba(204,255,0,0.45)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
