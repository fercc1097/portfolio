import React from "react";
import Section from "../section";

const ProjectsSection = () => {
  return (
    <Section className="items-end">
      <h2 className="text-5xl font-bold">Professional Experience</h2>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <h3 className="text-lg font-bold text-slate-900">
          Cochair / Tech Lead
        </h3>
        <p className="text-slate-700 text-sm">2023 - Present</p>
        <div className="mt-2" />
      </div>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <h3 className="text-lg font-bold text-slate-900">
          Distillery / Sr Full Stack Developer
        </h3>
        <p className="text-slate-700 text-sm">2022 - 2023</p>
        <div className="mt-2" />
      </div>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <h3 className="text-lg font-bold text-slate-900">
          Encora / Frontend Developer
        </h3>
        <p className="text-slate-700 text-sm">2021 - 2022</p>
        <div className="mt-2" />
      </div>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <h3 className="text-lg font-bold text-slate-900">
          Open Sky Information / Full Stack Developer
        </h3>
        <p className="text-slate-700 text-sm">2020 - 2021</p>
        <div className="mt-2" />
      </div>
      <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
        <h3 className="text-lg font-bold text-slate-900">
          Freelance / Software Developer
        </h3>
        <p className="text-slate-700 text-sm">2018 - 2020</p>
        <div className="mt-2" />
      </div>
    </Section>
  );
};

export default ProjectsSection;
