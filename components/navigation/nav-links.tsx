"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  className?: string;
  itemClassName?: string;
}

export function NavLinks({ className, itemClassName }: NavLinksProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  return (
    <nav
      aria-label="Main navigation"
      className={cn("flex items-center gap-1 sm:gap-1.5", className)}
      onMouseLeave={() => setHoveredHref(null)}
    >
      {NAV_ITEMS.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));
        const isHovered = hoveredHref === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onMouseEnter={() => setHoveredHref(item.href)}
            onFocus={() => setHoveredHref(item.href)}
            onBlur={() => setHoveredHref(null)}
            className={cn(
              "relative px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider uppercase transition-colors duration-200 rounded-full select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              isActive
                ? "text-studio-cyan font-bold"
                : "text-muted-foreground hover:text-foreground",
              itemClassName
            )}
            aria-current={isActive ? "page" : undefined}
          >
            {/* Hover Background Capsule */}
            {isHovered && !isActive && (
              <motion.div
                layoutId={shouldReduceMotion ? undefined : "hoverNavCapsule"}
                className="absolute inset-0 rounded-full bg-white/5 dark:bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            {/* Active Pill Glow */}
            {isActive && (
              <motion.div
                layoutId={shouldReduceMotion ? undefined : "activeNavPill"}
                className="absolute inset-0 rounded-full border border-studio-cyan/35 bg-studio-cyan/10 shadow-[0_0_16px_rgba(0,240,255,0.22)]"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
              />
            )}

            {/* Text and active indicator dot */}
            <span className="relative z-10 flex items-center gap-1.5">
              {item.label}
              {isActive && (
                <span
                  className="h-1 w-1 rounded-full bg-studio-cyan shadow-[0_0_6px_#00F0FF]"
                  aria-hidden="true"
                />
              )}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

export default NavLinks;
