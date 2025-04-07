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
              👋 About Me
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Passionate and detail-oriented{" "}
              <span className="font-semibold text-blue-600 dark:text-yellow-400">
                Frontend Developer
              </span>{" "}
              with around <strong>1 year</strong> of professional experience
              crafting responsive, scalable, and performance-driven web
              applications. I specialize in building sleek UIs using{" "}
              <strong>React, JavaScript, HTML, CSS, and Tailwind CSS</strong>.
              After a career pause, I redefined my technical journey through{" "}
              <strong>Crio.do</strong>—mastering{" "}
              <strong>Next.js, WebSocket, and real-world dev workflows</strong>{" "}
              in full-stack environments.
              <br />
              <br />
              I’ve solved over{" "}
              <span className="font-semibold text-blue-600 dark:text-yellow-400">
                200+ DSA problems
              </span>{" "}
              across platforms like LeetCode and GeeksforGeeks, enhancing my
              problem-solving abilities and logical thinking.
              <br />
              <br />I thrive in collaborative environments, take pride in clean
              code, and consistently aim to deliver{" "}
              <strong>high-impact user experiences</strong> that leave a lasting
              impression. Whether it's optimizing performance, building reusable
              components, or solving complex logic problems—I’m always eager to
              push the limits of what’s possible on the web.
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
                Collaborated with 6 developers & 2 stakeholders to deliver 16+
                features.
              </li>
              <li>
                Reviewed 50+ code submissions, improving code quality by 15%.
              </li>
              <li>
                Developed reusable components, reducing future development time.
              </li>
              <li>
                Optimized 3+ applications, achieving a 20% reduction in load
                times.
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
              project, showcasing strong technical proficiency.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <BookOpen className="text-blue-600 dark:text-yellow-400" />{" "}
              Education
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Bachelor of Engineering</strong> – SAIT, Bangalore (VTU){" "}
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
