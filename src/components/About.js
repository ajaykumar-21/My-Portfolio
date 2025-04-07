"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* Left - Icon Section */}
        <motion.div
          className="p-10 bg-white dark:bg-gray-900 rounded-full shadow-2xl border border-gray-300 dark:border-gray-700"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap
            size={160}
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
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

          {/* CTA Button */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/about" // Or wherever you want it to go
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 font-semibold text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              More About Me
              <ArrowRight size={20} className="ml-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
