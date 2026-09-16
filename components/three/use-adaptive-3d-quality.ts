"use client";

import { useState, useEffect } from "react";

export type QualityLevel = "high" | "medium" | "low";

export interface Adaptive3DQuality {
  quality: QualityLevel;
  dpr: number;
  particleCount: number;
  isWebGLSupported: boolean;
  reducedMotion: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

/**
 * Helper to check WebGL context availability safely
 */
export function checkWebGLSupport(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!(gl && gl instanceof WebGLRenderingContext || (window.WebGL2RenderingContext && gl instanceof WebGL2RenderingContext));
  } catch {
    return false;
  }
}

/**
 * Adaptive 3D Quality hook:
 * Detects device hardware profile, screen size, WebGL capability, and reduced-motion preferences.
 */
export function useAdaptive3DQuality(): Adaptive3DQuality {
  const [qualityState, setQualityState] = useState<Adaptive3DQuality>({
    quality: "high",
    dpr: 1.5,
    particleCount: 800,
    isWebGLSupported: true,
    reducedMotion: false,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const isSupported = checkWebGLSupport();
    const mediaReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const calculateQuality = () => {
      const width = window.innerWidth;
      const deviceDpr = window.devicePixelRatio || 1;
      const reducedMotion = mediaReducedMotion.matches;

      let quality: QualityLevel = "high";
      let dpr = Math.min(deviceDpr, 2);
      let particleCount = 1000;
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      if (isMobile) {
        quality = "low";
        dpr = 1;
        particleCount = 250;
      } else if (isTablet) {
        quality = "medium";
        dpr = Math.min(deviceDpr, 1.5);
        particleCount = 550;
      } else {
        quality = "high";
        dpr = Math.min(deviceDpr, 2);
        particleCount = 1000;
      }

      setQualityState({
        quality,
        dpr,
        particleCount,
        isWebGLSupported: isSupported,
        reducedMotion,
        isMobile,
        isTablet,
        isDesktop,
      });
    };

    calculateQuality();

    window.addEventListener("resize", calculateQuality, { passive: true });
    mediaReducedMotion.addEventListener("change", calculateQuality);

    return () => {
      window.removeEventListener("resize", calculateQuality);
      mediaReducedMotion.removeEventListener("change", calculateQuality);
    };
  }, []);

  return qualityState;
}
