"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface CameraRigProps {
  intensity?: number;
  damping?: number;
  reducedMotion?: boolean;
}

/**
 * CameraRig component:
 * Adds smooth mouse/touch parallax and subtle breathing motion to the scene camera.
 * Automatically respects reduced-motion preferences to prevent motion sickness.
 */
export function CameraRig({
  intensity = 0.45,
  damping = 0.05,
  reducedMotion = false,
}: CameraRigProps) {
  const { camera, pointer } = useThree();
  const initialPosition = useRef<THREE.Vector3>(camera.position.clone());

  useFrame((state) => {
    if (reducedMotion) {
      // Keep camera stable at default position without motion sway
      camera.position.lerp(initialPosition.current, damping);
      camera.lookAt(0, 0, 0);
      return;
    }

    const t = state.clock.getElapsedTime();

    // Target positions with gentle sinusoidal float + pointer parallax
    const targetX =
      initialPosition.current.x + pointer.x * intensity + Math.sin(t * 0.4) * 0.1;
    const targetY =
      initialPosition.current.y + pointer.y * (intensity * 0.6) + Math.cos(t * 0.5) * 0.08;
    const targetZ = initialPosition.current.z;

    // Smooth damping
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, damping);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, damping);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, damping);

    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default CameraRig;
