"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold">Hi, I'm Ajay Kumar</h1>
      <p className="mt-4 text-xl">Frontend Developer | JavaScript Enthusiast</p>
      <motion.a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-400"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Work
      </motion.a>
    </motion.section>
  );
};

export default Hero;
