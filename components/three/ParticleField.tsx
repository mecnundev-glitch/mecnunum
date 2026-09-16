"use client";

import { useMemo, useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { QualityLevel } from "./use-adaptive-3d-quality";

interface ParticleFieldProps {
  count?: number;
  radius?: number;
  quality?: QualityLevel;
  reducedMotion?: boolean;
}

/**
 * ParticleField component:
 * High-performance GPU particle galaxy with custom BufferGeometry and dual-color gradient.
 * Full resource disposal upon unmount to eliminate memory leaks.
 */
export function ParticleField({
  count,
  radius = 12,
  quality = "high",
  reducedMotion = false,
}: ParticleFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  // Determine particle count based on quality if count is not explicitly provided
  const particleCount = useMemo(() => {
    if (count) return count;
    if (quality === "low") return 200;
    if (quality === "medium") return 500;
    return 1000;
  }, [count, quality]);

  // Generate particle positions & colors
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color("#00F0FF");
    const limeColor = new THREE.Color("#CCFF00");
    const whiteColor = new THREE.Color("#FFFFFF");

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Spherical distribution with clustered core
      const r = Math.pow(Math.random(), 0.6) * radius;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);

      // Color selection (70% cyan, 20% lime, 10% white)
      const rand = Math.random();
      const chosenColor = rand < 0.7 ? cyanColor : rand < 0.9 ? limeColor : whiteColor;

      col[i3] = chosenColor.r;
      col[i3 + 1] = chosenColor.g;
      col[i3 + 2] = chosenColor.b;
    }

    return { positions: pos, colors: col };
  }, [particleCount, radius]);

  // Resource cleanup on unmount
  useEffect(() => {
    const geom = geometryRef.current;
    const mat = materialRef.current;

    return () => {
      geom?.dispose();
      mat?.dispose();
    };
  }, []);

  // Frame animation loop
  useFrame((state, delta) => {
    if (!pointsRef.current || reducedMotion) return;

    // Slow orbital rotation
    pointsRef.current.rotation.y += delta * 0.04;
    pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={quality === "low" ? 0.05 : 0.035}
        vertexColors
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}

export default ParticleField;
