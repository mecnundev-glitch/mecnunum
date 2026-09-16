"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface WebGLFallbackProps {
  className?: string;
  message?: string;
  showOverlay?: boolean;
}

/**
 * CSS-based atmospheric mesh fallback for devices without WebGL support,
 * low-power battery saving mode, or during initial 3D canvas hydration.
 */
export function WebGLFallback({
  className,
  message,
  showOverlay = false,
}: WebGLFallbackProps) {
  return (
    <div
      role="img"
      aria-label="Atmospheric Background Graphic Fallback"
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden bg-background/50 select-none",
        className
      )}
    >
      {/* Cosmic Gradient Spheres */}
      <div className="absolute -top-1/4 -left-1/4 h-[150%] w-[150%] pointer-events-none">
        <div className="absolute top-1/3 left-1/3 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-studio-cyan/15 blur-[100px] animate-pulse" />
        <div
          className="absolute top-1/2 right-1/4 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-studio-lime/10 blur-[120px] animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 h-80 w-80 rounded-full bg-indigo-500/10 blur-[140px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
      </div>

      {/* Cybernetic Geometric Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" />

      {/* Optional fallback notice */}
      {message && showOverlay && (
        <div className="relative z-10 rounded-full border border-white/10 bg-zinc-950/80 px-4 py-2 backdrop-blur-md">
          <span className="font-mono text-xs text-muted-foreground">{message}</span>
        </div>
      )}
    </div>
  );
}

export default WebGLFallback;
