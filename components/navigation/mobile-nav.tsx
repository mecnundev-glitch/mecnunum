"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { NAV_ITEMS, STUDIO_STATUS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { MecnunCatIcon } from "@/components/ui/mecnun-logo";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    // Return focus to trigger button
    triggerButtonRef.current?.focus();
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle Escape key, body scroll lock, and Focus Trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }

      // Simple focus trap
      if (e.key === "Tab" && navContainerRef.current) {
        const focusableElements = navContainerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
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
        ref={triggerButtonRef}
        type="button"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label={isOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
        className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 dark:border-white/10 bg-background/80 backdrop-blur-md text-foreground transition-all hover:border-studio-cyan/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-cyan cursor-pointer"
      >
        <div className="relative h-4 w-5 flex flex-col justify-between items-center">
          <motion.span
            animate={
              isOpen
                ? { rotate: 45, y: 6.5, backgroundColor: "#00F0FF" }
                : { rotate: 0, y: 0, backgroundColor: "currentColor" }
            }
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.25 }}
            className="h-0.5 w-5 rounded-full block origin-center"
          />
          <motion.span
            animate={
              isOpen
                ? { opacity: 0, scaleX: 0 }
                : { opacity: 1, scaleX: 1, backgroundColor: "currentColor" }
            }
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.2 }}
            className="h-0.5 w-5 rounded-full block"
          />
          <motion.span
            animate={
              isOpen
                ? { rotate: -45, y: -6.5, backgroundColor: "#00F0FF" }
                : { rotate: 0, y: 0, backgroundColor: "currentColor" }
            }
            transition={{ duration: shouldReduceMotion ? 0.05 : 0.25 }}
            className="h-0.5 w-5 rounded-full block origin-center"
          />
        </div>
      </button>

      {/* Fullscreen Accessible Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            ref={navContainerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.1 : 0.28 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-background/98 dark:bg-zinc-950/98 backdrop-blur-3xl px-6 py-6 overflow-y-auto"
          >
            {/* Top Brand Header */}
            <div className="flex items-center justify-between pt-2 border-b border-white/5 pb-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-cyan rounded-lg p-1"
              >
                <MecnunCatIcon size={26} />
                <span className="font-mono text-sm tracking-wider uppercase font-extrabold text-foreground">
                  MECNUN<span className="text-studio-cyan">UM</span>
                </span>
              </Link>
              <div className="flex items-center gap-2 text-[10px] font-mono text-studio-lime bg-studio-lime/10 px-3 py-1 rounded-full border border-studio-lime/25">
                <span className="h-1.5 w-1.5 rounded-full bg-studio-lime animate-pulse" />
                <span>STUDIO LIVE</span>
              </div>
            </div>

            {/* Staggered Navigation Links */}
            <nav className="my-auto py-8 space-y-3" aria-label="Mobile Navigation">
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
                        : { opacity: 0, x: -28 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : index * 0.06,
                      duration: 0.35,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={cn(
                        "group flex items-center justify-between text-2xl sm:text-3xl font-black font-mono tracking-tight uppercase py-2.5 px-3 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studio-cyan",
                        isActive
                          ? "text-studio-cyan bg-studio-cyan/10 border border-studio-cyan/25"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <div className="flex items-center gap-3.5">
                        <span
                          className={cn(
                            "text-xs font-mono transition-colors",
                            isActive
                              ? "text-studio-cyan"
                              : "text-muted-foreground/60 group-hover:text-studio-lime"
                          )}
                        >
                          0{index + 1}
                        </span>
                        <span>{item.label}</span>
                      </div>
                      <ArrowUpRight
                        className={cn(
                          "h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1",
                          isActive
                            ? "text-studio-cyan"
                            : "text-muted-foreground/50 group-hover:text-foreground"
                        )}
                        aria-hidden="true"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions, CTA & Status */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.35, duration: 0.35 }}
              className="space-y-4 pt-5 border-t border-white/10"
            >
              <Link href="/contact" onClick={closeMenu} className="block w-full">
                <Button
                  variant="accent"
                  size="lg"
                  className="w-full gap-2 font-black text-black shadow-[0_0_25px_rgba(204,255,0,0.3)] hover:shadow-[0_0_35px_rgba(204,255,0,0.5)] transition-all active:scale-[0.98]"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>

              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground pt-1">
                <a
                  href="mailto:contact@mecnunum.com"
                  className="flex items-center gap-1.5 hover:text-studio-cyan transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-studio-cyan rounded"
                >
                  <Mail className="h-3.5 w-3.5 text-studio-cyan" />
                  <span>contact@mecnunum.com</span>
                </a>
                <span className="text-[11px] text-muted-foreground/80">
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
