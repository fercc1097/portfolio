import React, { FC, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "../avatar";

type CubeProps = {
  position: [number, number, number];
};

const Hero: FC = () => {
  return (
    <div id="canvas-container">
      <Canvas
        shadows
        camera={{ position: [0, 2, 5], fov: 30 }}
        style={{ height: "100vh", width: "100vw" }}
      >
        <ambientLight intensity={1} />z
        <directionalLight position={[0, 0, 5]} color="white" />
        <OrbitControls />
        <group position={[0, -1, 0]}>
          <Avatar />
        </group>
      </Canvas>
    </div>
  );
};

export default Hero;
