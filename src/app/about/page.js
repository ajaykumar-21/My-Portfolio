"use client";

import { motion } from "framer-motion";

const Abc = () => {
  return (
    <motion.section
      id="about"
      className="py-12 px-4 sm:px-8 lg:px-16 text-center"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-semibold">About Me</h2>
      <p className="mt-4 text-lg text-gray-700">
        I’m a passionate Frontend Developer with experience in building
        responsive and scalable web applications using React, JavaScript, and
        modern web technologies.
      </p>
    </motion.section>
  );
};

export default Abc;
