"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MecnunLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function MecnunCatIcon({
  className,
  size = 36,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-transform duration-300 group-hover:scale-105 shrink-0", className)}
    >
      {/* Background Rounded Shield / Badge */}
      <rect
        width="100"
        height="100"
        rx="26"
        className="fill-zinc-100 dark:fill-zinc-900 transition-colors"
      />

      {/* Head Outline */}
      <ellipse
        cx="50"
        cy="55"
        rx="30"
        ry="34"
        className="stroke-zinc-900 dark:stroke-zinc-100"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Left Ear Outer */}
      <path
        d="M24 44L12 18L38 30"
        className="stroke-zinc-900 dark:stroke-zinc-100"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Left Ear Inner - Neon Cyan Accent */}
      <path
        d="M23 40L15 22L34 30Z"
        className="fill-cyan-400 dark:fill-cyan-400 stroke-zinc-900 dark:stroke-zinc-900"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Right Ear Outer */}
      <path
        d="M62 30L88 18L76 44"
        className="stroke-zinc-900 dark:stroke-zinc-100"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Right Ear Inner - Neon Cyan Accent */}
      <path
        d="M66 30L85 22L77 40Z"
        className="fill-cyan-400 dark:fill-cyan-400 stroke-zinc-900 dark:stroke-zinc-900"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Eyes */}
      <circle
        cx="41"
        cy="52"
        r="4.2"
        className="fill-zinc-900 dark:fill-zinc-100"
      />
      <circle
        cx="59"
        cy="52"
        r="4.2"
        className="fill-zinc-900 dark:fill-zinc-100"
      />

      {/* Nose */}
      <polygon
        points="50,66 46,62 54,62"
        className="fill-cyan-500 dark:fill-cyan-400"
      />
    </svg>
  );
}

export function MecnunLogo({
  className,
  size = 36,
  showText = true,
}: MecnunLogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3 group cursor-pointer select-none", className)}>
      <div className="relative flex items-center justify-center shrink-0">
        <div className="absolute -inset-1 rounded-2xl bg-cyan-500/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
        <MecnunCatIcon size={size} />
      </div>
      {showText && (
        <div className="flex flex-col text-left justify-center">
          <span className="font-extrabold tracking-wider text-base uppercase leading-tight font-mono text-foreground">
            MECNUN<span className="text-cyan-500 dark:text-studio-lime">UM</span>
          </span>
          <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase leading-none mt-0.5">
            Creative Studio
          </span>
        </div>
      )}
    </div>
  );
}

export default MecnunLogo;
