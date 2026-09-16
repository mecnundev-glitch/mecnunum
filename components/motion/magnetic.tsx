"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

/**
 * Magnetic button wrapper:
 * Gives a subtle, high-end magnetic pull effect towards the cursor.
 * Automatically disables on mobile / touch devices and when prefers-reduced-motion is active.
 */
export function Magnetic({
  children,
  strength = 0.22,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canHover, setCanHover] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Only enable magnetic tracking if device supports accurate hover (desktop)
    const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setCanHover(hasHover);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover || shouldReduceMotion || !ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({
      x: middleX * strength,
      y: middleY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (!canHover || shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
        mass: 0.1,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
