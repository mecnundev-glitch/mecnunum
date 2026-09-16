"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useAdaptive3DQuality } from "./use-adaptive-3d-quality";
import { WebGLFallback } from "./WebGLFallback";

interface ServicesSpatialWorldProps {
  activeIndex?: number;
  className?: string;
}

// 01 Web Design: Morphing Wireframe Icosahedron (Spatial Form)
function WebDesignObject({ isSelected, reducedMotion }: { isSelected: boolean; reducedMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (reducedMotion || !meshRef.current) return;
    meshRef.current.rotation.x += delta * (isSelected ? 0.6 : 0.2);
    meshRef.current.rotation.y += delta * (isSelected ? 0.8 : 0.3);
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#00F0FF"
        emissive="#00F0FF"
        emissiveIntensity={isSelected ? 1.6 : 0.4}
        wireframe={true}
        roughness={0.2}
      />
    </mesh>
  );
}

// 02 Web Development: Code Structure Matrix (Logic Blocks)
function WebDevObject({ isSelected, reducedMotion }: { isSelected: boolean; reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (reducedMotion || !groupRef.current) return;
    groupRef.current.rotation.y += delta * (isSelected ? 0.7 : 0.25);
    groupRef.current.rotation.z += delta * (isSelected ? 0.4 : 0.15);
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.9, 0.9, 0.9]} />
        <meshStandardMaterial
          color="#CCFF00"
          emissive="#CCFF00"
          emissiveIntensity={isSelected ? 1.5 : 0.35}
          wireframe={true}
        />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <octahedronGeometry args={[0.45]} />
        <meshStandardMaterial
          color="#CCFF00"
          emissive="#CCFF00"
          emissiveIntensity={isSelected ? 2.0 : 0.6}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

// 03 Corporate Websites: Enterprise Monolith (Pillar Architecture)
function CorporateObject({ isSelected, reducedMotion }: { isSelected: boolean; reducedMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (reducedMotion || !meshRef.current) return;
    meshRef.current.rotation.y += delta * (isSelected ? 0.5 : 0.2);
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[0.5, 0.6, 1.4, 6]} />
      <meshStandardMaterial
        color="#9D00FF"
        emissive="#9D00FF"
        emissiveIntensity={isSelected ? 1.6 : 0.4}
        roughness={0.15}
        metalness={0.85}
      />
    </mesh>
  );
}

// 04 E-Commerce: Transaction Circulation Ring (Flow Dynamics)
function EcommerceObject({ isSelected, reducedMotion }: { isSelected: boolean; reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (reducedMotion || !groupRef.current) return;
    groupRef.current.rotation.x += delta * (isSelected ? 0.8 : 0.3);
    groupRef.current.rotation.y += delta * (isSelected ? 0.6 : 0.2);
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <torusGeometry args={[0.75, 0.16, 12, 36]} />
        <meshStandardMaterial
          color="#FFB800"
          emissive="#FFB800"
          emissiveIntensity={isSelected ? 1.8 : 0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

// 05 SEO & Performance: Orbit Radar System (Signal Nodes)
function SeoObject({ isSelected, reducedMotion }: { isSelected: boolean; reducedMotion: boolean }) {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (reducedMotion) return;
    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * (isSelected ? 1.2 : 0.4);
    if (ring2Ref.current) ring2Ref.current.rotation.x -= delta * (isSelected ? 0.9 : 0.3);
  });

  return (
    <group>
      <mesh ref={ring1Ref}>
        <ringGeometry args={[0.65, 0.75, 24]} />
        <meshBasicMaterial
          color="#00FFAA"
          side={THREE.DoubleSide}
          wireframe={true}
        />
      </mesh>
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[0.4, 0.48, 20]} />
        <meshBasicMaterial
          color="#00FFAA"
          side={THREE.DoubleSide}
          wireframe={true}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.2, 12, 12]} />
        <meshStandardMaterial
          color="#00FFAA"
          emissive="#00FFAA"
          emissiveIntensity={isSelected ? 2.2 : 0.6}
        />
      </mesh>
    </group>
  );
}

// 06 3D Experiences: Quantum Polyhedral Core (Spatial Shaders)
function ThreeDExperienceObject({ isSelected, reducedMotion }: { isSelected: boolean; reducedMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (reducedMotion || !meshRef.current) return;
    meshRef.current.rotation.x += delta * (isSelected ? 0.9 : 0.3);
    meshRef.current.rotation.y += delta * (isSelected ? 0.7 : 0.25);
  });

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial
        color="#FF007F"
        emissive="#FF007F"
        emissiveIntensity={isSelected ? 1.9 : 0.5}
        roughness={0.1}
        metalness={0.9}
        wireframe={false}
      />
    </mesh>
  );
}

// Constellation Lines linking all 6 spatial objects
function ConstellationGrid({ activeIndex }: { activeIndex: number }) {
  const linePositions = useMemo(() => {
    const points: number[] = [];
    const count = 6;
    const radius = 2.4;

    for (let i = 0; i < count; i++) {
      const angle1 = (i / count) * Math.PI * 2;
      const angle2 = (((i + 1) % count) / count) * Math.PI * 2;

      const x1 = Math.cos(angle1) * radius;
      const y1 = Math.sin(angle1) * radius;
      const z1 = 0;

      const x2 = Math.cos(angle2) * radius;
      const y2 = Math.sin(angle2) * radius;
      const z2 = 0;

      points.push(x1, y1, z1, x2, y2, z2);

      // Center cross lines
      points.push(x1, y1, z1, 0, 0, 0);
    }
    return new Float32Array(points);
  }, []);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={linePositions.length / 3}
          array={linePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.12}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

// Spatial System Coordinator
function SpatialSystem({
  activeIndex = 0,
  reducedMotion = false,
}: {
  activeIndex: number;
  reducedMotion: boolean;
}) {
  const rootGroupRef = useRef<THREE.Group>(null);
  const objectsCount = 6;
  const orbitRadius = 2.4;

  // Render object based on index
  const renderObject = (idx: number, isSelected: boolean) => {
    switch (idx) {
      case 0:
        return <WebDesignObject isSelected={isSelected} reducedMotion={reducedMotion} />;
      case 1:
        return <WebDevObject isSelected={isSelected} reducedMotion={reducedMotion} />;
      case 2:
        return <CorporateObject isSelected={isSelected} reducedMotion={reducedMotion} />;
      case 3:
        return <EcommerceObject isSelected={isSelected} reducedMotion={reducedMotion} />;
      case 4:
        return <SeoObject isSelected={isSelected} reducedMotion={reducedMotion} />;
      case 5:
        return <ThreeDExperienceObject isSelected={isSelected} reducedMotion={reducedMotion} />;
      default:
        return <WebDesignObject isSelected={isSelected} reducedMotion={reducedMotion} />;
    }
  };

  useFrame((state, delta) => {
    if (!rootGroupRef.current || reducedMotion) return;

    // Smooth subtle tilt based on pointer
    const mouse = state.pointer;
    rootGroupRef.current.rotation.x = THREE.MathUtils.lerp(
      rootGroupRef.current.rotation.x,
      -mouse.y * 0.15,
      0.05
    );
    rootGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      rootGroupRef.current.rotation.y,
      mouse.x * 0.2,
      0.05
    );
  });

  return (
    <group ref={rootGroupRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} />
      <pointLight position={[0, 0, 3]} intensity={2.0} color="#00F0FF" />

      <ConstellationGrid activeIndex={activeIndex} />

      {Array.from({ length: objectsCount }, (_, i) => {
        const isSelected = activeIndex === i;
        // Position on circular orbit or brought forward when selected
        const angle = (i / objectsCount) * Math.PI * 2;
        const targetX = Math.cos(angle) * (isSelected ? 0 : orbitRadius);
        const targetY = Math.sin(angle) * (isSelected ? 0 : orbitRadius);
        const targetZ = isSelected ? 1.4 : -0.4;
        const scale = isSelected ? 1.3 : 0.65;

        return (
          <Float
            key={i}
            speed={reducedMotion ? 0 : isSelected ? 2.2 : 1.2}
            rotationIntensity={reducedMotion ? 0 : 0.4}
            floatIntensity={reducedMotion ? 0 : 0.6}
          >
            <group
              position={[targetX, targetY, targetZ]}
              scale={scale}
            >
              {renderObject(i, isSelected)}
            </group>
          </Float>
        );
      })}
    </group>
  );
}

export function ServicesSpatialWorld({
  activeIndex = 0,
  className = "h-full w-full",
}: ServicesSpatialWorldProps) {
  const { dpr, isWebGLSupported, reducedMotion, isMobile } = useAdaptive3DQuality();

  if (!isWebGLSupported) {
    return <WebGLFallback className={className} />;
  }

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, isMobile ? 1 : Math.min(dpr, 1.5)]}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <SpatialSystem activeIndex={activeIndex} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}

export default ServicesSpatialWorld;
