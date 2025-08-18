"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";

const AboutMe = () => {
  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-100 to-white dark:from-gray-950 dark:to-gray-800"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start gap-12">
        {/* Left Icon */}
        <motion.div
          className="p-8 bg-white dark:bg-gray-900 rounded-full shadow-2xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap
            size={120}
            className="text-blue-600 dark:text-yellow-400"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-1 space-y-10"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Heading */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              🚀 Helping Brands & Founders Launch Better Websites
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a{" "}
              <span className="font-semibold text-blue-600 dark:text-yellow-400">
                Frontend Developer
              </span>{" "}
              with around <strong>years</strong> of professional experience
              building responsive, scalable, and performance-focused web
              applications. I specialize in{" "}
              <strong>React, JavaScript, HTML, CSS, and Tailwind CSS</strong>,
              with a passion for crafting seamless user interfaces.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              After a career pause, I reignited my development journey through{" "}
              <strong>Crio.do</strong>, gaining hands-on experience with{" "}
              <strong>Next.js, WebSocket, and real-world dev workflows</strong>.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I've solved over{" "}
              <span className="font-semibold text-blue-600 dark:text-yellow-400">
                200+ DSA problems
              </span>{" "}
              across LeetCode and GeeksforGeeks, sharpening my logical and
              problem-solving skills.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I take pride in writing clean, maintainable code and love building
              reusable components that enhance efficiency. My focus is always on
              delivering <strong>high-impact digital experiences</strong> that
              are fast, reliable, and user-friendly.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <Briefcase className="text-blue-600 dark:text-yellow-400" />{" "}
              Experience
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">
              Frontend Developer – <strong>Coforge</strong> (Nov 2021 - June
              2022)
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
              <li>
                Collaborated with developers and stakeholders to ship 16+
                features.
              </li>
              <li>
                Reviewed over 50 code submissions, improving quality and
                consistency.
              </li>
              <li>
                Built reusable UI components to reduce development time by 30%.
              </li>
              <li>
                Optimized applications leading to a 20% improvement in load
                time.
              </li>
            </ul>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <Award className="text-blue-600 dark:text-yellow-400" />{" "}
              Achievements
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Secured university-level funding for an innovative final-year
              project, demonstrating strong technical capability and vision.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <BookOpen className="text-blue-600 dark:text-yellow-400" />{" "}
              Education
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Bachelor of Engineering</strong> – SAIT, Bangalore (VTU)
              <br />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Electronics & Communication Engineering – Aug 2021
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
