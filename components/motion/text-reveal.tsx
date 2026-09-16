"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * TextReveal component:
 * Editorial word-by-word reveal with masked translateY animation.
 * Smoothly falls back to instant reveal when prefers-reduced-motion is active.
 */
export function TextReveal({
  text,
  className,
  wordClassName,
  delay = 0.1,
  stagger = 0.04,
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={cn("inline-flex flex-wrap gap-x-[0.28em] overflow-hidden", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden py-0.5">
          <motion.span
            initial={{ y: "115%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.65,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1], // Editorial smooth cubic-bezier
            }}
            className={cn("inline-block", wordClassName)}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default TextReveal;
