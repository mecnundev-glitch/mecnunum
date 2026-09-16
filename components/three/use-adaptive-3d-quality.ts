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
  isLowEndGpu: boolean;
}

/**
 * Helper to check WebGL context availability and GPU renderer safely
 */
export function checkWebGLSupport(): { isSupported: boolean; isLowEnd: boolean } {
  if (typeof window === "undefined") return { isSupported: false, isLowEnd: false };
  try {
    const canvas = document.createElement("canvas");
    const gl =
      (canvas.getContext("webgl2") as WebGL2RenderingContext) ||
      (canvas.getContext("webgl") as WebGLRenderingContext) ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext);

    if (!gl) return { isSupported: false, isLowEnd: true };

    let isLowEnd = false;
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();
      if (
        renderer.includes("swiftshader") ||
        renderer.includes("llvmpipe") ||
        renderer.includes("software") ||
        renderer.includes("intel hd graphics 3000") ||
        renderer.includes("mali-400")
      ) {
        isLowEnd = true;
      }
    }

    // Hardware concurrency check (<= 4 cores indicates entry-tier mobile or legacy system)
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) {
      isLowEnd = true;
    }

    // Data-saver mode check
    // @ts-expect-error - connection is experimental
    if (navigator.connection && navigator.connection.saveData) {
      isLowEnd = true;
    }

    return { isSupported: true, isLowEnd };
  } catch {
    return { isSupported: false, isLowEnd: true };
  }
}

/**
 * Adaptive 3D Quality hook:
 * Detects device hardware profile, screen size, WebGL capability, and reduced-motion preferences.
 * Ensures GPU efficiency, clamps DPR to max 1.5 to save 4x fillrate overhead, and prioritizes mobile battery.
 */
export function useAdaptive3DQuality(): Adaptive3DQuality {
  const [qualityState, setQualityState] = useState<Adaptive3DQuality>({
    quality: "high",
    dpr: 1.25,
    particleCount: 750,
    isWebGLSupported: true,
    reducedMotion: false,
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    isLowEndGpu: false,
  });

  useEffect(() => {
    const { isSupported, isLowEnd } = checkWebGLSupport();
    const mediaReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const calculateQuality = () => {
      const width = window.innerWidth;
      const deviceDpr = window.devicePixelRatio || 1;
      const reducedMotion = mediaReducedMotion.matches;

      let quality: QualityLevel = "high";
      // Clamp max DPR to 1.5 to eliminate expensive retina overdraw while preserving sharp graphics
      let dpr = Math.min(deviceDpr, 1.5);
      let particleCount = 850;

      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;

      if (reducedMotion) {
        quality = "low";
        dpr = 1;
        particleCount = 100;
      } else if (isMobile || isLowEnd) {
        quality = "low";
        dpr = 1;
        particleCount = 200;
      } else if (isTablet) {
        quality = "medium";
        dpr = Math.min(deviceDpr, 1.25);
        particleCount = 450;
      } else {
        quality = "high";
        dpr = Math.min(deviceDpr, 1.5);
        particleCount = 850;
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
        isLowEndGpu: isLowEnd,
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
