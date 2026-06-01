"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Blob() {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = t * 0.12;
    ref.current.rotation.y = t * 0.18;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.35} floatIntensity={0.55}>
      <Sphere ref={ref} args={[1.15, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#c4b5fd"
          distort={0.45}
          speed={2.2}
          roughness={0.15}
          metalness={0.85}
        />
      </Sphere>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      className="h-full w-full touch-none bg-zinc-950"
      camera={{ position: [0, 0, 4.25], fov: 42 }}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#09090b"]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 3]} intensity={1.1} />
      <pointLight position={[-4, -1, 2]} intensity={0.7} color="#22d3ee" />
      <pointLight position={[3, -3, -2]} intensity={0.5} color="#a78bfa" />
      <Blob />
    </Canvas>
  );
}
