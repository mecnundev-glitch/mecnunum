"use client";

import React from "react";
import { Sparkles } from "@react-three/drei";
import { QualityLevel } from "./use-adaptive-3d-quality";

interface EnvironmentProps {
  fogColor?: string;
  fogNear?: number;
  fogFar?: number;
  quality?: QualityLevel;
  reducedMotion?: boolean;
}

/**
 * Environment component:
 * Configures atmospheric depth fog and subtle background sparkles.
 */
export function Environment({
  fogColor = "#030712",
  fogNear = 6,
  fogFar = 22,
  quality = "high",
  reducedMotion = false,
}: EnvironmentProps) {
  const isLowQuality = quality === "low";
  const sparkleCount = isLowQuality ? 25 : quality === "medium" ? 50 : 100;

  return (
    <group name="studio-environment">
      {/* Depth Fog for seamless dark page background blend */}
      <fog attach="fog" args={[fogColor, fogNear, fogFar]} />

      {/* Floating Micro Sparkles */}
      <Sparkles
        count={sparkleCount}
        scale={14}
        size={isLowQuality ? 1.5 : 2.5}
        speed={reducedMotion ? 0.05 : 0.4}
        opacity={0.6}
        color="#00F0FF"
      />

      {!isLowQuality && (
        <Sparkles
          count={Math.floor(sparkleCount * 0.5)}
          scale={16}
          size={2.0}
          speed={reducedMotion ? 0.05 : 0.3}
          opacity={0.4}
          color="#CCFF00"
        />
      )}
    </group>
  );
}

export default Environment;
