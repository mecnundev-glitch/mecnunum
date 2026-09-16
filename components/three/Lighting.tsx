"use client";

import React from "react";
import { QualityLevel } from "./use-adaptive-3d-quality";

interface LightingProps {
  quality?: QualityLevel;
  primaryColor?: string;
  accentColor?: string;
  intensity?: number;
}

/**
 * Modular Studio Lighting component:
 * Configures cybernetic neon ambient, key, fill, and rim lights.
 * Scales GPU complexity dynamically based on the device quality profile.
 */
export function Lighting({
  quality = "high",
  primaryColor = "#00F0FF", // Studio Cyan
  accentColor = "#CCFF00",  // Studio Lime
  intensity = 1,
}: LightingProps) {
  const isLowQuality = quality === "low";

  return (
    <group name="studio-lighting">
      {/* Base Ambient Illumination */}
      <ambientLight intensity={0.4 * intensity} />

      {/* Hemisphere Light for soft gradient between sky and ground */}
      <hemisphereLight
        args={["#ffffff", "#050814", isLowQuality ? 0.8 * intensity : 0.5 * intensity]}
      />

      {/* Main Directional Key Light */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={1.2 * intensity}
        color="#ffffff"
      />

      {/* Secondary Directional Fill Light */}
      <directionalLight
        position={[-6, -4, -3]}
        intensity={0.5 * intensity}
        color="#38bdf8"
      />

      {/* Cyan Neon Accent Point Light */}
      <pointLight
        position={[-4, 3, 2]}
        color={primaryColor}
        intensity={(isLowQuality ? 2.0 : 3.5) * intensity}
        distance={15}
        decay={2}
      />

      {/* Lime / Warm Rim Point Light (Only on medium & high quality) */}
      {!isLowQuality && (
        <>
          <pointLight
            position={[4, -3, 2]}
            color={accentColor}
            intensity={2.5 * intensity}
            distance={15}
            decay={2}
          />
          <pointLight
            position={[0, 5, -4]}
            color="#818cf8"
            intensity={1.8 * intensity}
            distance={12}
            decay={2}
          />
        </>
      )}
    </group>
  );
}

export default Lighting;
