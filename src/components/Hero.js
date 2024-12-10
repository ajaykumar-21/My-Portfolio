"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 dark:bg-gray-800 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl font-bold"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Hi, I'm Ajay Kumar
      </motion.h1>
      <motion.p
        className="mt-4 text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Frontend Developer | JavaScript Enthusiast
      </motion.p>
      <motion.a
        href="#projects"
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-400"
        whileHover={{ scale: 1.1 }}
      >
        View My Work
      </motion.a>
    </motion.section>
  );
};

export default Hero;
