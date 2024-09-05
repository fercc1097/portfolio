import React from "react";
import AboutSection from "../about-section";
import SkillsSection from "../skills-section";
import ContactSection from "../contact-section";
import ProjectsSection from "../projects-section";

const Interface = () => {
  return (
    <div
      className={`
    flex flex-col items-center w-screen
    `}
    >
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Interface;
