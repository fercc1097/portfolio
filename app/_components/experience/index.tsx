import React, { FC } from "react";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from "@react-three/drei";
import { Avatar } from "../avatar";
import { useControls } from "leva";
import { Office } from "../office";

const Hero: FC = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Standing", "Typing", "Falling"],
    },
  });
  return (
    <>
      <OrbitControls />
      <Sky />
      <ambientLight intensity={0.8} />
      <group position-y={-1}>
        <Office />
        <Avatar
          animation={animation}
          position={[-0.2, 0.6, 0.3]}
          rotation={[0, 0, 3]}
        />
        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.0001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  );
};

export default Hero;
