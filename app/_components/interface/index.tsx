import React from "react";
import AboutSection from "../about-section";
import SkillsSection from "../skills-section";
import ContactSection from "../contact-section";

const Interface = () => {
  return (
    <div
      className={`
    flex flex-col items-center w-screen
    `}
    >
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
};

export default Interface;
