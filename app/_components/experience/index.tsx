import React, { FC, useEffect, useRef, useState } from "react";
import { Avatar } from "../avatar";
import { Office } from "../office";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import Background from "../background";
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  useScroll,
} from "@react-three/drei";
import { animate, useMotionValue } from "framer-motion";

interface ExperienceProps {
  isMenuOpen: boolean;
}

const Experience: FC<ExperienceProps> = ({ isMenuOpen }) => {
  const { viewport } = useThree();
  const data = useScroll();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

  useEffect(() => {
    animate(cameraPositionX, isMenuOpen ? -5 : 0, {
      type: "spring",
      mass: 5,
      stiffness: 500,
      damping: 50,
      restDelta: 0.0001,
    });
    animate(cameraLookAtX, isMenuOpen ? 5 : 0, {
      type: "spring",
      mass: 5,
      stiffness: 500,
      damping: 50,
      restDelta: 0.0001,
    });
  }, [isMenuOpen]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Typing");
  useEffect(() => {
    setCharacterAnimation("Falling");
    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Typing" : "Standing");
    }, 600);
  }, [section]);

  useFrame((state) => {
    let curSection = Math.floor(data.offset * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });
  return (
    <>
      <Background />
      <motion.group
        position={[1.9072935059634513, 0.14400000000000002, 2.681801948466054]}
        rotation={[-3.141592653589793, 1.2053981633974482, 3.141592653589793]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0.9,
            scaleY: 0.9,
            scaleZ: 0.9,
          },
          1: {
            y: -viewport.height + 0.5,
            x: 0,
            z: 7,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
          2: {
            x: -2,
            y: -viewport.height * 2 + 0.5,
            z: 0,
            rotateX: 0,
            rotateY: Math.PI / 2,
            rotateZ: 0,
          },
          3: {
            y: -viewport.height * 3 + 1,
            x: 0.3,
            z: 8.5,
            rotateX: 0,
            rotateY: -Math.PI / 4,
            rotateZ: 0,
          },
        }}
      >
        <Avatar animation={characterAnimation} />
      </motion.group>
      <ambientLight intensity={1} />
      <motion.group
        position={[1.5, 2, 3]}
        scale={[0.9, 0.9, 0.9]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <Office section={section} />
      </motion.group>

      {/* SKILLS */}
      <motion.group
        position={[0, -1.5, -10]}
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}
      >
        <directionalLight position={[-5, 3, 5]} intensity={0.4} />
        <Float>
          <mesh position={[1, -3, -15]} scale={[2, 2, 2]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={0.4}
              speed={4}
              color={"red"}
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[3, 3, 3]} position={[3, 1, -18]}>
            <sphereGeometry />
            <MeshDistortMaterial
              opacity={0.8}
              transparent
              distort={1}
              speed={5}
              color="yellow"
            />
          </mesh>
        </Float>
        <Float>
          <mesh scale={[1.4, 1.4, 1.4]} position={[-3, -1, -11]}>
            <boxGeometry />
            <MeshWobbleMaterial
              opacity={0.8}
              transparent
              factor={1}
              speed={5}
              color={"blue"}
            />
          </mesh>
        </Float>
      </motion.group>
    </>
  );
};

export default Experience;
