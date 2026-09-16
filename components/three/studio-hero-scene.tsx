"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, OrbitControls, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useAdaptive3DQuality } from "./use-adaptive-3d-quality";
import { WebGLFallback } from "./WebGLFallback";

// Central Pulsating Holographic Quantum Core
function QuantumCore({
  isMobile,
  reducedMotion,
}: {
  isMobile: boolean;
  reducedMotion: boolean;
}) {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerMatrixRef = useRef<THREE.Mesh>(null);
  const innerEnergyRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (reducedMotion) return;

    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.18;
      coreRef.current.rotation.y += delta * 0.25;
    }
    if (outerMatrixRef.current) {
      outerMatrixRef.current.rotation.y -= delta * 0.12;
      outerMatrixRef.current.rotation.z += delta * 0.08;
    }
    if (innerEnergyRef.current) {
      innerEnergyRef.current.rotation.x -= delta * 0.2;
    }
  });

  const baseScale = isMobile ? 1.25 : 1.75;

  return (
    <group name="quantum-core">
      {/* Deepest Pulsing Plasma Sphere */}
      <mesh ref={innerEnergyRef} scale={baseScale * 0.65}>
        <sphereGeometry args={[1, isMobile ? 16 : 28, isMobile ? 16 : 28]} />
        <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Main Distorted Quantum Core */}
      <mesh ref={coreRef} scale={baseScale}>
        <icosahedronGeometry args={[1, isMobile ? 8 : 16]} />
        <MeshDistortMaterial
          color="#00F0FF"
          emissive="#002b3d"
          roughness={0.15}
          metalness={0.9}
          distort={reducedMotion ? 0.1 : 0.45}
          speed={reducedMotion ? 0.5 : 3.0}
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
          opacity={0.32}
        />
      </mesh>
    </group>
  );
}

// Multi-axis Luminous Planetary & Cyber Rings
function CelestialRings({
  isMobile,
  reducedMotion,
}: {
  isMobile: boolean;
  reducedMotion: boolean;
}) {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const ring4Ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (reducedMotion) return;

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.28;
      ring1Ref.current.rotation.y += delta * 0.16;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.22;
      ring2Ref.current.rotation.z += delta * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.18;
      ring3Ref.current.rotation.z -= delta * 0.12;
    }
    if (ring4Ref.current && !isMobile) {
      ring4Ref.current.rotation.y += delta * 0.14;
      ring4Ref.current.rotation.x -= delta * 0.1;
    }
  });

  const baseRadius = isMobile ? 1.7 : 2.45;
  const segments = isMobile ? 48 : 96;

  return (
    <group name="celestial-rings">
      {/* Cyan Plasma Primary Ring */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[baseRadius, 0.024, 12, segments]} />
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
        <torusGeometry args={[baseRadius * 1.25, 0.02, 12, segments]} />
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
        <torusGeometry args={[baseRadius * 1.52, 0.016, 12, segments]} />
        <meshStandardMaterial
          color="#9D00FF"
          emissive="#9D00FF"
          emissiveIntensity={1.8}
          roughness={0.1}
        />
      </mesh>

      {/* Radiant Magenta Outer Belt (Desktop/Tablet) */}
      {!isMobile && (
        <mesh ref={ring4Ref} rotation={[-Math.PI / 4, Math.PI / 6, Math.PI / 3]}>
          <torusGeometry args={[baseRadius * 1.78, 0.014, 12, segments]} />
          <meshStandardMaterial
            color="#FF007F"
            emissive="#FF007F"
            emissiveIntensity={2.0}
            roughness={0.1}
          />
        </mesh>
      )}
    </group>
  );
}

// Orbiting Quantum Satellites & Celestial Polyhedra
function OrbitingSatellites({
  isMobile,
  reducedMotion,
}: {
  isMobile: boolean;
  reducedMotion: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const count = isMobile ? 4 : 8;

  const satellites = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = (isMobile ? 2.4 : 3.4) + (i % 3) * 0.4;
      const speed = 0.35 + (i % 3) * 0.2;
      const yOffset = Math.sin(i * 1.5) * (isMobile ? 0.6 : 1.1);
      const colors = ["#CCFF00", "#00F0FF", "#FF007F", "#9D00FF", "#00FFAA"];
      const color = colors[i % colors.length];
      return { angle, radius, speed, yOffset, color, id: i };
    });
  }, [count, isMobile]);

  useFrame((state) => {
    if (reducedMotion) return;
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.12;
      groupRef.current.rotation.z = Math.sin(t * 0.08) * 0.08;
    }
  });

  return (
    <group ref={groupRef} name="orbiting-satellites">
      {satellites.map((sat) => (
        <Float
          key={sat.id}
          speed={reducedMotion ? 0 : 1.8}
          rotationIntensity={reducedMotion ? 0 : 2.0}
          floatIntensity={reducedMotion ? 0 : 1.4}
          position={[
            Math.cos(sat.angle) * sat.radius,
            sat.yOffset,
            Math.sin(sat.angle) * sat.radius,
          ]}
        >
          <mesh scale={isMobile ? 0.12 : 0.17}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={sat.color}
              emissive={sat.color}
              emissiveIntensity={2.0}
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
function CosmicLighting({ isMobile }: { isMobile: boolean }) {
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(t * 0.8) * 5.5;
      light1Ref.current.position.z = Math.cos(t * 0.8) * 5.5;
      light1Ref.current.position.y = Math.sin(t * 0.5) * 3;
    }
    if (light2Ref.current && !isMobile) {
      light2Ref.current.position.x = Math.cos(t * 0.6) * -5.5;
      light2Ref.current.position.z = Math.sin(t * 0.6) * -5.5;
      light2Ref.current.position.y = Math.cos(t * 0.4) * 3;
    }
  });

  return (
    <group name="cosmic-lighting">
      <ambientLight intensity={0.65} />
      <directionalLight position={[6, 10, 6]} intensity={1.6} color="#FFFFFF" />
      <pointLight
        ref={light1Ref}
        intensity={3.2}
        distance={16}
        color="#00F0FF"
      />
      {!isMobile && (
        <>
          <pointLight
            ref={light2Ref}
            intensity={3.0}
            distance={16}
            color="#CCFF00"
          />
          <pointLight position={[0, -5, 0]} intensity={2.2} color="#9D00FF" />
          <pointLight position={[0, 5, 2]} intensity={1.8} color="#FF007F" />
        </>
      )}
    </group>
  );
}

// Master Universe Scene Composition
function CosmicUniverse({
  isMobile,
  reducedMotion,
}: {
  isMobile: boolean;
  reducedMotion: boolean;
}) {
  const masterGroupRef = useRef<THREE.Group>(null);

  // Smooth mouse follow parallax & scroll transition
  useFrame((state) => {
    if (reducedMotion) return;

    const mouse = state.pointer;
    if (masterGroupRef.current) {
      const targetY = mouse.x * 0.2;
      const targetX = -mouse.y * 0.12;
      masterGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        masterGroupRef.current.rotation.y,
        targetY,
        0.04
      );
      masterGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        masterGroupRef.current.rotation.x,
        targetX,
        0.04
      );
    }
  });

  return (
    <>
      <CosmicLighting isMobile={isMobile} />

      <group ref={masterGroupRef}>
        <Float
          speed={reducedMotion ? 0 : 1.5}
          rotationIntensity={reducedMotion ? 0 : 0.5}
          floatIntensity={reducedMotion ? 0 : 0.7}
          floatingRange={[-0.12, 0.12]}
        >
          <QuantumCore isMobile={isMobile} reducedMotion={reducedMotion} />
          <CelestialRings isMobile={isMobile} reducedMotion={reducedMotion} />
          <OrbitingSatellites isMobile={isMobile} reducedMotion={reducedMotion} />
        </Float>
      </group>

      {/* Multi-layered Deep Space Nebula Sparkles (Memory-safe counts) */}
      <Sparkles
        count={isMobile ? 60 : 180}
        scale={isMobile ? 7 : 14}
        size={isMobile ? 2.0 : 3.2}
        speed={reducedMotion ? 0.05 : 0.35}
        opacity={0.8}
        color="#00F0FF"
      />
      <Sparkles
        count={isMobile ? 40 : 120}
        scale={isMobile ? 6 : 11}
        size={isMobile ? 1.8 : 2.8}
        speed={reducedMotion ? 0.05 : 0.45}
        opacity={0.75}
        color="#CCFF00"
      />
      {!isMobile && (
        <>
          <Sparkles
            count={80}
            scale={13}
            size={3.8}
            speed={reducedMotion ? 0.05 : 0.25}
            opacity={0.65}
            color="#FF007F"
          />
          <Sparkles
            count={60}
            scale={10}
            size={3.2}
            speed={reducedMotion ? 0.05 : 0.4}
            opacity={0.6}
            color="#9D00FF"
          />
        </>
      )}

      {/* Smooth Touch & Drag Interactivity */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.55}
        dampingFactor={0.06}
        enableDamping={true}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.5}
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
  const { dpr, isWebGLSupported, reducedMotion, isMobile } = useAdaptive3DQuality();

  if (!isWebGLSupported) {
    return <WebGLFallback className={className} />;
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, isMobile ? 7.2 : 6.6], fov: 45 }}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
        }}
        dpr={[1, dpr]}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <CosmicUniverse isMobile={isMobile} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}

export default StudioHeroScene;
