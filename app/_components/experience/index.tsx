import React, { FC } from "react";
import { Avatar } from "../avatar";
import { useControls } from "leva";
import { Office } from "../office";

interface ExperienceProps {
  section: number;
}

const Experience: FC<ExperienceProps> = ({ section }) => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Standing", "Typing", "Falling"],
    },
  });
  return (
    <>
      <ambientLight intensity={0.8} />
      <group position-y={-1}>
        <Office />
        <Avatar
          animation={animation}
          position={[-0.2, 0.6, 0.3]}
          rotation={[0, 0, 3]}
        />
      </group>
    </>
  );
};

export default Experience;
