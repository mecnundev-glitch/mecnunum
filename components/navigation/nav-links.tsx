"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  className?: string;
  itemClassName?: string;
}

export function NavLinks({ className, itemClassName }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex items-center gap-1 sm:gap-2", className)}>
      {NAV_ITEMS.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative rounded-full px-3.5 py-1.5 text-xs font-mono font-medium tracking-wide uppercase transition-colors duration-200",
              isActive
                ? "text-studio-cyan font-bold"
                : "text-foreground/75 hover:text-foreground",
              itemClassName
            )}
          >
            {/* Active Glow Pill Background */}
            {isActive && (
              <motion.div
                layoutId="activeNavPill"
                className="absolute inset-0 rounded-full border border-studio-cyan/30 bg-studio-cyan/10 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export default NavLinks;
