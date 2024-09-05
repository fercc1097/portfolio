import React from "react";
import { motion } from "framer-motion";
import Section from "../section";

const SkillsSection = () => {
  const technologies = [
    "React.js",
    "Next.js",
    "Node.js",
    "Redux",
    "Redux Thunk",
    "Redux Toolkit",
    "React Three Fiber",
    "React Testing Library",
    "Jest",
    "Cypress",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "SASS",
    "Material UI",
    "Shopify",
    "MongoDB",
    "PostgreSQL",
    "Firebase",
    "Git",
    "GitHub",
    "Jira",
    "Postman",
    "Vercel",
    "AWS",
    "Google Cloud",
    "GraphQL",
    "Docker",
  ];
  const languages = [
    {
      title: "🇲🇽 Spanish 🇪🇸",
      level: 100,
    },
    {
      title: "🇺🇸 English",
      level: 75,
    },
  ];
  return (
    <Section>
      <motion.div className="w-2/5" whileInView={"visible"}>
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className=" mt-8 space-y-4 flex flex-wrap gap-2 items-end justify-between ">
          {technologies.map((technologie, index) => (
            <div className="flex-grow align text-center" key={index}>
              <motion.h3
                className="font-bold bg-white text-gray-800 p-1 rounded-md"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {technologie}
              </motion.h3>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-5xl font-bold mt-10">Languages</h2>
          <div className=" mt-8 space-y-4">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                >
                  {lng.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-indigo-500 rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default SkillsSection;
