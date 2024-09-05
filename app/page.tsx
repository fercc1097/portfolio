"use client";
import { Canvas } from "@react-three/fiber";
import Experience from "./_components/experience";
import { Loader, Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./_components/interface";
import ScrollManager from "./_components/scroll-manager";
import { useEffect, useState } from "react";
import Menu from "./_components/menu";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { Cursor } from "./_components/cursor";
export default function Home() {
  const [section, setSection] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [section]);

  return (
    <>
      <MotionConfig
        transition={{
          type: "spring",
          stiffness: 100,
          mass: 5,
          damping: 30,
          restDelta: 0.0001,
        }}
      >
        <Canvas
          style={{ width: "100vw", height: "100vh" }}
          shadows
          camera={{ position: [0, 3, 10], fov: 42 }}
        >
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} setSection={setSection} />
            <Scroll>
              <Experience section={section} isMenuOpen={isMenuOpen} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          isOpen={isMenuOpen}
          setOpen={setIsMenuOpen}
        />
        <Cursor />
      </MotionConfig>
      <Leva hidden />
    </>
  );
}
