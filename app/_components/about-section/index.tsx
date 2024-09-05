import React from "react";
import { motion } from "framer-motion";
import Section from "../section";

const AboutSection = () => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug">
        Hi!, I&apos;m
        <br />
        <span className="bg-slate-900 px-1 italic">Fernando Castelán</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        6+ Years Full Stack Web Developer
        <br />
        Frontend oriented with Next.js and React
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact me
      </motion.button>
    </Section>
  );
};

export default AboutSection;
