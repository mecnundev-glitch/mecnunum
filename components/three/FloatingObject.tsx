"use client";

import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { QualityLevel } from "./use-adaptive-3d-quality";

export type FloatingGeometryType = "icosahedron" | "octahedron" | "torusKnot" | "dodecahedron";

interface FloatingObjectProps {
  geometryType?: FloatingGeometryType;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
  color?: string;
  wireframe?: boolean;
  roughness?: number;
  metalness?: number;
  speed?: number;
  quality?: QualityLevel;
  reducedMotion?: boolean;
}

/**
 * FloatingObject component:
 * Modular floating geometric monolith with smooth levitation and organic gyroscopic rotation.
 * Automatically disposes materials and geometries when unmounted.
 */
export function FloatingObject({
  geometryType = "icosahedron",
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  color = "#00F0FF",
  wireframe = false,
  roughness = 0.2,
  metalness = 0.85,
  speed = 1,
  quality = "high",
  reducedMotion = false,
}: FloatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);

  // Resource cleanup on unmount
  useEffect(() => {
    const mesh = meshRef.current;
    const mat = materialRef.current;

    return () => {
      mesh?.geometry.dispose();
      mat?.dispose();
    };
  }, []);

  // Frame animation loop
  useFrame((state, delta) => {
    if (!meshRef.current || reducedMotion) return;

    meshRef.current.rotation.x += delta * 0.25 * speed;
    meshRef.current.rotation.y += delta * 0.35 * speed;
  });

  const isLowQuality = quality === "low";
  const detailLevel = isLowQuality ? 0 : quality === "medium" ? 1 : 2;

  const renderGeometry = () => {
    switch (geometryType) {
      case "octahedron":
        return <octahedronGeometry args={[1, detailLevel]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, detailLevel]} />;
      case "torusKnot":
        return (
          <torusKnotGeometry
            args={[
              0.8,
              0.25,
              isLowQuality ? 48 : 96,
              isLowQuality ? 8 : 16,
            ]}
          />
        );
      case "icosahedron":
      default:
        return <icosahedronGeometry args={[1, detailLevel]} />;
    }
  };

  return (
    <Float
      speed={reducedMotion ? 0 : 2 * speed}
      rotationIntensity={reducedMotion ? 0 : 0.8}
      floatIntensity={reducedMotion ? 0 : 1.2}
      floatingRange={[-0.15, 0.15]}
    >
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        scale={scale}
      >
        {renderGeometry()}
        <meshStandardMaterial
          ref={materialRef}
          color={color}
          roughness={roughness}
          metalness={metalness}
          wireframe={wireframe}
          emissive={color}
          emissiveIntensity={isLowQuality ? 0.2 : 0.4}
        />
      </mesh>
    </Float>
  );
}

export default FloatingObject;
