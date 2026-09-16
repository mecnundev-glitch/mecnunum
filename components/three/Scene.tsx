"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useAdaptive3DQuality } from "./use-adaptive-3d-quality";
import { WebGLFallback } from "./WebGLFallback";
import { Experience } from "./Experience";
import { cn } from "@/lib/utils";

export interface SceneProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  fallbackMessage?: string;
  forceFallback?: boolean;
  cameraPosition?: [number, number, number];
  cameraFov?: number;
}

/**
 * Scene component:
 * Primary modular Canvas wrapper for Three.js / React Three Fiber.
 * Handles WebGL capability checks, adaptive DPR/quality, memory management,
 * reduced motion awareness, and seamless CSS fallback.
 */
export function Scene({
  className = "h-full w-full",
  style,
  children,
  fallbackMessage,
  forceFallback = false,
  cameraPosition = [0, 0, 7.5],
  cameraFov = 45,
}: SceneProps) {
  const [mounted, setMounted] = useState(false);
  const {
    quality,
    dpr,
    isWebGLSupported,
    reducedMotion,
    isMobile,
  } = useAdaptive3DQuality();

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR or unmounted initial state: render smooth fallback
  if (!mounted) {
    return <WebGLFallback className={className} message={fallbackMessage} />;
  }

  // If WebGL is not supported or forced fallback
  if (!isWebGLSupported || forceFallback) {
    return (
      <WebGLFallback
        className={className}
        message={fallbackMessage || "WebGL is not supported on this device."}
        showOverlay={false}
      />
    );
  }

  return (
    <div className={cn("relative h-full w-full overflow-hidden select-none", className)} style={style}>
      <Suspense fallback={<WebGLFallback className="h-full w-full" />}>
        <Canvas
          camera={{
            position: cameraPosition,
            fov: cameraFov,
            near: 0.1,
            far: 100,
          }}
          dpr={[1, dpr]}
          gl={{
            powerPreference: "high-performance",
            antialias: !isMobile,
            alpha: true,
            stencil: false,
            depth: true,
          }}
          onCreated={({ gl }) => {
            // Configure tone mapping and output color space
            gl.setClearColor(0x000000, 0);
          }}
          className="h-full w-full"
        >
          {children || (
            <Experience quality={quality} reducedMotion={reducedMotion} />
          )}
        </Canvas>
      </Suspense>
    </div>
  );
}

export default Scene;
