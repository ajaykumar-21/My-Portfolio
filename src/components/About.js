"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react"; // Student icon

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Student Icon on the left */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GraduationCap size={100} className="text-blue-600" />
        </motion.div>

        {/* About Me Text on the right */}
        <motion.div
          className="max-w-3xl text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <p className="mt-4 text-lg text-gray-700">
            I'm a passionate Frontend Developer with expertise in React,
            Next.js, and modern web technologies. With a strong foundation in
            UI/UX design, I build responsive and engaging web applications.
            Constantly learning and improving, I thrive in dynamic environments,
            always striving for innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
