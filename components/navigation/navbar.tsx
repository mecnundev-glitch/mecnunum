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
  const isScrolled = useScrollPosition(20);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-editorial",
        isScrolled
          ? "border-b border-white/10 dark:border-white/5 bg-background/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.15)] py-0"
          : "border-b border-transparent bg-transparent py-1.5"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <MecnunLogo size={38} />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center rounded-full border border-white/10 dark:border-white/5 bg-zinc-950/40 px-3 py-1.5 backdrop-blur-md">
          <NavLinks />
        </div>

        {/* Desktop CTA & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/contact">
            <Button
              variant="accent"
              size="sm"
              className="font-bold gap-1.5 group shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:shadow-[0_0_30px_rgba(204,255,0,0.45)] hover:scale-105 transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
