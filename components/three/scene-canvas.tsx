"use client";

import dynamic from "next/dynamic";
import React from "react";

const StudioHeroScene = dynamic(
  () => import("@/components/three/studio-hero-scene"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-24 w-24 animate-pulse rounded-full border border-primary/20 bg-primary/5" />
      </div>
    ),
  }
);

interface SceneCanvasProps {
  className?: string;
}

export function SceneCanvas({ className = "h-full w-full" }: SceneCanvasProps) {
  return <StudioHeroScene className={className} />;
}
