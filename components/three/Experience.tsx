"use client";

import React from "react";
import { CameraRig } from "./CameraRig";
import { Lighting } from "./Lighting";
import { Environment } from "./Environment";
import { ParticleField } from "./ParticleField";
import { FloatingObject } from "./FloatingObject";
import { QualityLevel } from "./use-adaptive-3d-quality";

export interface ExperienceProps {
  quality?: QualityLevel;
  reducedMotion?: boolean;
  enableCameraRig?: boolean;
  enableLighting?: boolean;
  enableEnvironment?: boolean;
  enableParticles?: boolean;
  enableFloatingObject?: boolean;
  children?: React.ReactNode;
}

/**
 * Experience component:
 * Central 3D scene coordinator that combines lighting, camera rigging,
 * environment, particle systems, and customizable floating geometry.
 */
export function Experience({
  quality = "high",
  reducedMotion = false,
  enableCameraRig = true,
  enableLighting = true,
  enableEnvironment = true,
  enableParticles = true,
  enableFloatingObject = true,
  children,
}: ExperienceProps) {
  return (
    <group name="mecnun-experience-root">
      {/* Dynamic Camera Rig & Parallax */}
      {enableCameraRig && <CameraRig reducedMotion={reducedMotion} />}

      {/* Adaptive Studio Lighting */}
      {enableLighting && <Lighting quality={quality} />}

      {/* Atmospheric Fog & Sparkles */}
      {enableEnvironment && (
        <Environment quality={quality} reducedMotion={reducedMotion} />
      )}

      {/* GPU Particle Field */}
      {enableParticles && (
        <ParticleField quality={quality} reducedMotion={reducedMotion} />
      )}

      {/* Primary Floating Geometric Monolith */}
      {enableFloatingObject && (
        <FloatingObject
          geometryType="icosahedron"
          position={[0, 0, 0]}
          scale={1.3}
          color="#00F0FF"
          quality={quality}
          reducedMotion={reducedMotion}
        />
      )}

      {/* Custom slotted 3D children */}
      {children}
    </group>
  );
}

export default Experience;
