import React from "react";

interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <section
      className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col justify-center items-start
    `}
    >
      {children}
    </section>
  );
};

export default Section;
