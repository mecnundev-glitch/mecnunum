"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { NAV_ITEMS, STUDIO_STATUS } from "@/lib/constants";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";
import { ArrowUpRight, Mail, Sparkles, X, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close on route change
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Handle Escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <div className="md:hidden">
      {/* Animated Hamburger / Close Button */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-background/60 backdrop-blur-md text-foreground transition-colors hover:border-studio-cyan/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-cyan cursor-pointer"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5 text-studio-cyan" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      {/* Fullscreen Animated Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-zinc-950/95 backdrop-blur-3xl px-6 py-8 overflow-y-auto"
          >
            {/* Top Brand & Status */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <MecnunCatIcon size={28} />
                <span className="font-mono text-xs text-studio-cyan tracking-wider uppercase font-bold">
                  MECNUNUM STUDIO
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-studio-lime bg-studio-lime/10 px-2.5 py-1 rounded-full border border-studio-lime/20">
                <span className="h-1.5 w-1.5 rounded-full bg-studio-lime animate-pulse" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Staggered Navigation Links */}
            <nav className="my-auto py-8 space-y-4">
              {NAV_ITEMS.map((item, index) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <motion.div
                    key={item.href}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, x: -24 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                      duration: 0.4,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "group flex items-center justify-between text-3xl sm:text-4xl font-black font-mono tracking-tight uppercase py-2 transition-colors",
                        isActive
                          ? "text-studio-cyan"
                          : "text-zinc-400 hover:text-white"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-zinc-600 group-hover:text-studio-lime transition-colors">
                          0{index + 1}
                        </span>
                        <span>{item.label}</span>
                      </div>
                      <ArrowUpRight
                        className={cn(
                          "h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",
                          isActive ? "text-studio-cyan" : "text-zinc-600 group-hover:text-white"
                        )}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions & Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.4, duration: 0.4 }}
              className="space-y-6 pt-6 border-t border-white/10"
            >
              <Link href="/contact" onClick={closeMenu} className="block w-full">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full gap-2 font-extrabold text-black shadow-[0_0_25px_rgba(204,255,0,0.35)]"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>

              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <a
                  href="mailto:contact@mecnunum.com"
                  className="flex items-center gap-1.5 hover:text-studio-cyan transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-studio-cyan" />
                  <span>contact@mecnunum.com</span>
                </a>
                <span className="text-[11px] text-zinc-500">
                  {STUDIO_STATUS.location}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNav;
