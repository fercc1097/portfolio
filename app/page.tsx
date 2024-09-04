"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./_components/experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./_components/interface";
import ScrollManager from "./_components/scroll-manager";
import { useState } from "react";
export default function Home() {
  const [section, setSection] = useState(0);
  return (
    <div>
      <Canvas
        style={{ width: "100vw", height: "100vh" }}
        shadows
        camera={{ position: [0, 3, 10], fov: 42 }}
      >
        <color attach="background" args={["#e6e7ff"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} setSection={setSection} />
          <Scroll>
            <Experience section={section} />
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}
