"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Central Pulsating Holographic Quantum Core
function QuantumCore({ isMobile }: { isMobile: boolean }) {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerMatrixRef = useRef<THREE.Mesh>(null);
  const innerEnergyRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.2;
      coreRef.current.rotation.y += delta * 0.3;
    }
    if (outerMatrixRef.current) {
      outerMatrixRef.current.rotation.y -= delta * 0.15;
      outerMatrixRef.current.rotation.z += delta * 0.1;
    }
    if (innerEnergyRef.current) {
      innerEnergyRef.current.rotation.x -= delta * 0.25;
    }
  });

  const baseScale = isMobile ? 1.3 : 1.85;

  return (
    <group>
      {/* Deepest Pulsing Plasma Sphere */}
      <mesh ref={innerEnergyRef} scale={baseScale * 0.65}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.4} />
      </mesh>

      {/* Main Distorted Quantum Core */}
      <mesh ref={coreRef} scale={baseScale}>
        <icosahedronGeometry args={[1, 16]} />
        <MeshDistortMaterial
          color="#00F0FF"
          emissive="#002b3d"
          roughness={0.15}
          metalness={0.9}
          distort={0.48}
          speed={3.5}
          wireframe={false}
        />
      </mesh>

      {/* Outer Holographic Matrix Cage */}
      <mesh ref={outerMatrixRef} scale={baseScale * 1.28}>
        <icosahedronGeometry args={[1, 2]} />
        <meshBasicMaterial
          color="#CCFF00"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </group>
  );
}

// Multi-axis Luminous Planetary & Cyber Rings
function CelestialRings({ isMobile }: { isMobile: boolean }) {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const ring4Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.35;
      ring1Ref.current.rotation.y += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.3;
      ring2Ref.current.rotation.z += delta * 0.4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.25;
      ring3Ref.current.rotation.z -= delta * 0.15;
    }
    if (ring4Ref.current) {
      ring4Ref.current.rotation.y += delta * 0.18;
      ring4Ref.current.rotation.x -= delta * 0.12;
    }
  });

  const baseRadius = isMobile ? 1.8 : 2.6;

  return (
    <group>
      {/* Cyan Plasma Primary Ring */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[baseRadius, 0.028, 16, 120]} />
        <meshStandardMaterial
          color="#00F0FF"
          emissive="#00F0FF"
          emissiveIntensity={1.8}
          roughness={0.1}
          metalness={1}
        />
      </mesh>

      {/* Neon Lime Secondary Orbit */}
      <mesh ref={ring2Ref} rotation={[0, Math.PI / 3.5, Math.PI / 5]}>
        <torusGeometry args={[baseRadius * 1.25, 0.022, 16, 120]} />
        <meshStandardMaterial
          color="#CCFF00"
          emissive="#CCFF00"
          emissiveIntensity={1.5}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Deep Violet Horizon Ring */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
        <torusGeometry args={[baseRadius * 1.52, 0.018, 16, 120]} />
        <meshStandardMaterial
          color="#9D00FF"
          emissive="#9D00FF"
          emissiveIntensity={1.8}
          roughness={0.1}
        />
      </mesh>

      {/* Radiant Magenta Outer Belt */}
      <mesh ref={ring4Ref} rotation={[-Math.PI / 4, Math.PI / 6, Math.PI / 3]}>
        <torusGeometry args={[baseRadius * 1.78, 0.015, 16, 120]} />
        <meshStandardMaterial
          color="#FF007F"
          emissive="#FF007F"
          emissiveIntensity={2.0}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

// Orbiting Quantum Satellites & Celestial Polyhedra
function OrbitingSatellites({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const count = isMobile ? 5 : 9;

  const satellites = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = (isMobile ? 2.6 : 3.6) + (i % 3) * 0.45;
      const speed = 0.4 + (i % 3) * 0.25;
      const yOffset = Math.sin(i * 1.5) * (isMobile ? 0.7 : 1.3);
      const colors = ["#CCFF00", "#00F0FF", "#FF007F", "#9D00FF", "#00FFAA"];
      const color = colors[i % colors.length];
      return { angle, radius, speed, yOffset, color, id: i };
    });
  }, [count, isMobile]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.16;
      groupRef.current.rotation.z = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {satellites.map((sat) => (
        <Float
          key={sat.id}
          speed={2.2}
          rotationIntensity={2.5}
          floatIntensity={1.6}
          position={[
            Math.cos(sat.angle) * sat.radius,
            sat.yOffset,
            Math.sin(sat.angle) * sat.radius,
          ]}
        >
          <mesh scale={isMobile ? 0.13 : 0.19}>
            <octahedronGeometry args={[1]} />
            <meshStandardMaterial
              color={sat.color}
              emissive={sat.color}
              emissiveIntensity={2.2}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Dynamic Cosmic Lighting Rig
function CosmicLighting() {
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(t * 0.9) * 6;
      light1Ref.current.position.z = Math.cos(t * 0.9) * 6;
      light1Ref.current.position.y = Math.sin(t * 0.6) * 3.5;
    }
    if (light2Ref.current) {
      light2Ref.current.position.x = Math.cos(t * 0.7) * -6;
      light2Ref.current.position.z = Math.sin(t * 0.7) * -6;
      light2Ref.current.position.y = Math.cos(t * 0.5) * 3.5;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 12, 6]} intensity={1.8} color="#FFFFFF" />
      <pointLight
        ref={light1Ref}
        intensity={3.5}
        distance={18}
        color="#00F0FF"
      />
      <pointLight
        ref={light2Ref}
        intensity={3.5}
        distance={18}
        color="#CCFF00"
      />
      <pointLight position={[0, -6, 0]} intensity={2.5} color="#9D00FF" />
      <pointLight position={[0, 6, 2]} intensity={2} color="#FF007F" />
    </>
  );
}

// Master Universe Scene Composition
function CosmicUniverse() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const masterGroupRef = useRef<THREE.Group>(null);

  // Smooth mouse follow tilt
  useFrame((state) => {
    const mouse = state.pointer;
    if (masterGroupRef.current) {
      const targetY = mouse.x * 0.22;
      const targetX = -mouse.y * 0.15;
      masterGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        masterGroupRef.current.rotation.y,
        targetY,
        0.05
      );
      masterGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        masterGroupRef.current.rotation.x,
        targetX,
        0.05
      );
    }
  });

  return (
    <>
      <CosmicLighting />

      <group ref={masterGroupRef}>
        <Float
          speed={1.6}
          rotationIntensity={0.6}
          floatIntensity={0.8}
          floatingRange={[-0.15, 0.15]}
        >
          <QuantumCore isMobile={isMobile} />
          <CelestialRings isMobile={isMobile} />
          <OrbitingSatellites isMobile={isMobile} />
        </Float>
      </group>

      {/* Multi-layered Deep Space Nebula Sparkles */}
      <Sparkles
        count={isMobile ? 120 : 260}
        scale={isMobile ? 8 : 15}
        size={isMobile ? 2.5 : 3.6}
        speed={0.4}
        opacity={0.85}
        color="#00F0FF"
      />
      <Sparkles
        count={isMobile ? 90 : 180}
        scale={isMobile ? 7 : 12}
        size={isMobile ? 2 : 3.2}
        speed={0.6}
        opacity={0.8}
        color="#CCFF00"
      />
      <Sparkles
        count={isMobile ? 60 : 120}
        scale={isMobile ? 8 : 14}
        size={isMobile ? 3 : 4.5}
        speed={0.3}
        opacity={0.7}
        color="#FF007F"
      />
      <Sparkles
        count={isMobile ? 50 : 100}
        scale={isMobile ? 6 : 11}
        size={isMobile ? 2.5 : 3.8}
        speed={0.5}
        opacity={0.65}
        color="#9D00FF"
      />

      {/* Smooth, Mobile-Friendly Touch & Drag Interactivity */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.6}
        dampingFactor={0.06}
        enableDamping={true}
        autoRotate={true}
        autoRotateSpeed={0.7}
        maxPolarAngle={Math.PI / 1.55}
        minPolarAngle={Math.PI / 3.2}
      />
    </>
  );
}

export function StudioHeroScene({
  className = "h-full w-full",
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 6.6], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <CosmicUniverse />
      </Canvas>
    </div>
  );
}

export default StudioHeroScene;
