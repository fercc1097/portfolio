"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./_components/experience";

export default function Home() {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      shadows
      camera={{ position: [3, 3, 3], fov: 30 }}
    >
      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
}
