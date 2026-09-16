"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { QualityLevel } from "./use-adaptive-3d-quality";

interface InteractiveObjectProps {
  position?: [number, number, number];
  scale?: number;
  hoverScale?: number;
  baseColor?: string;
  hoverColor?: string;
  quality?: QualityLevel;
  reducedMotion?: boolean;
  onClick?: () => void;
}

/**
 * InteractiveObject component:
 * 3D mesh that responds dynamically to pointer hover, clicks, and touches.
 * Includes smooth scale lerping, dynamic emissive boost, and memory cleanup.
 */
export function InteractiveObject({
  position = [0, 0, 0],
  scale = 1.2,
  hoverScale = 1.45,
  baseColor = "#00F0FF",
  hoverColor = "#CCFF00",
  quality = "high",
  reducedMotion = false,
  onClick,
}: InteractiveObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const [hovered, setHovered] = useState(false);

  // Resource cleanup on unmount
  useEffect(() => {
    const mesh = meshRef.current;
    const mat = materialRef.current;

    return () => {
      mesh?.geometry.dispose();
      mat?.dispose();
      document.body.style.cursor = "auto";
    };
  }, []);

  // Update cursor style safely
  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [hovered]);

  // Frame animation loop with smooth lerping
  useFrame((state, delta) => {
    if (!meshRef.current || !materialRef.current) return;

    // Smooth scale lerp
    const targetScale = hovered ? hoverScale : scale;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );

    // Continuous rotation
    if (!reducedMotion) {
      const rotSpeed = hovered ? 1.5 : 0.6;
      meshRef.current.rotation.x += delta * 0.4 * rotSpeed;
      meshRef.current.rotation.y += delta * 0.5 * rotSpeed;
    }

    // Emissive intensity lerp
    const targetEmissive = hovered ? 0.9 : quality === "low" ? 0.2 : 0.4;
    materialRef.current.emissiveIntensity = THREE.MathUtils.lerp(
      materialRef.current.emissiveIntensity,
      targetEmissive,
      0.1
    );
  });

  const isLowQuality = quality === "low";

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      onClick={onClick}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
      }}
    >
      <octahedronGeometry args={[1, isLowQuality ? 0 : 2]} />
      <meshPhysicalMaterial
        ref={materialRef}
        color={hovered ? hoverColor : baseColor}
        emissive={hovered ? hoverColor : baseColor}
        emissiveIntensity={0.3}
        roughness={0.15}
        metalness={0.8}
        clearcoat={isLowQuality ? 0 : 0.8}
        clearcoatRoughness={0.2}
        wireframe={false}
      />
    </mesh>
  );
}

export default InteractiveObject;
