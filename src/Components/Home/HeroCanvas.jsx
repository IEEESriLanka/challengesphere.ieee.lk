import React, { forwardRef, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import globeImg from "../../assets/home/CSbgLay1.webp";
import kingImg from "../../assets/home/CSbgLay3.webp";

const transparentMaterialProps = {
  transparent: true,
  depthWrite: false,
  toneMapped: false,
};

function ChessKingPlane() {
  const texture = useTexture(kingImg);

  return (
    <mesh position={[0, -0.6, 0.6]}>
      <planeGeometry args={[2.4, 3.6]} />
      <meshBasicMaterial map={texture} {...transparentMaterialProps} />
    </mesh>
  );
}

const GlobePlane = forwardRef(function GlobePlane({ onReady }, ref) {
  const texture = useTexture(globeImg);
  const meshRef = useRef();
  const readyFired = useRef(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.001;
    }
  });

  const assignRef = (node) => {
    meshRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
    if (node && onReady && !readyFired.current) {
      readyFired.current = true;
      onReady(node);
    }
  };

  return (
    <mesh ref={assignRef} position={[0, 0, -2.5]}>
      <planeGeometry args={[5.5, 5.5]} />
      <meshBasicMaterial map={texture} {...transparentMaterialProps} />
    </mesh>
  );
});

export default function HeroCanvas({ globeRef, onGlobeReady }) {
  return (
    <div className="absolute inset-0 z-10 h-full w-full overflow-hidden pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <GlobePlane ref={globeRef} onReady={onGlobeReady} />
        <ChessKingPlane />
      </Canvas>
    </div>
  );
}
