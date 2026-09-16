"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useAdaptive3DQuality } from "./use-adaptive-3d-quality";
import { WebGLFallback } from "./WebGLFallback";

function HolographicNode({ quality }: { quality: "low" | "medium" | "high" }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.15;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.25;
      wireRef.current.rotation.z += delta * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.4;
      ringRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
      <group position={[0, 0, 0]}>
        {/* Inner Solid Core */}
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.3, 0]} />
          <meshStandardMaterial
            color="#00f2fe"
            roughness={0.2}
            metalness={0.9}
            emissive="#00f2fe"
            emissiveIntensity={0.4}
            wireframe={false}
          />
        </mesh>

        {/* Outer Wireframe Cage */}
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[1.9, quality === "high" ? 2 : 1]} />
          <meshBasicMaterial
            color="#a3ff12"
            wireframe
            transparent
            opacity={0.35}
          />
        </mesh>

        {/* Orbital Resonance Rings */}
        <group ref={ringRef}>
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[2.5, 0.02, 16, 64]} />
            <meshBasicMaterial color="#00f2fe" transparent opacity={0.4} />
          </mesh>
          <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
            <torusGeometry args={[2.8, 0.015, 16, 64]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.25} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export function ContactSpatialNode() {
  const { isWebGLSupported, quality, reducedMotion } = useAdaptive3DQuality();

  if (!isWebGLSupported || reducedMotion || quality === "low") {
    return (
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
        <div className="h-64 w-64 rounded-full bg-gradient-to-tr from-studio-cyan/20 to-studio-lime/10 blur-3xl" />
      </div>
    );
  }


  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={quality === "high" ? [1, 1.5] : 1}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="h-full w-full pointer-events-none"
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2fe" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a3ff12" />
        <HolographicNode quality={quality} />
      </Canvas>
    </div>
  );
}
