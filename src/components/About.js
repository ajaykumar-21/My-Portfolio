"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left - Icon Section */}
        <motion.div
          className="p-8 bg-white dark:bg-gray-900 rounded-full shadow-xl border border-gray-300 dark:border-gray-700"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap
            size={140}
            className="text-blue-600 dark:text-yellow-400"
          />
        </motion.div>

        {/* Right - Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            🎓 About Me
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate{" "}
            <span className="font-semibold text-blue-600 dark:text-yellow-400">
              Frontend Developer
            </span>{" "}
            with hands-on experience in building responsive and interactive
            applications using{" "}
            <span className="font-semibold">React, Next.js</span> and modern web
            technologies.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I love crafting seamless user experiences, continuously improving my
            skills, and staying updated with the latest trends in frontend
            development. My goal is to create engaging digital products that
            make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
