"use client";

import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import skillsForHome from "../data/skills";

const Skills = () => {
  return (
    <section
      className="relative py-16 bg-gray-100 dark:bg-gray-900"
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-blue-900 dark:text-yellow-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🧠 My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsForHome.map((skill, i) => (
            <motion.div
              key={i}
              className="relative group flex flex-col items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.1,
                rotate: 1,
                transition: { type: "spring", stiffness: 300, damping: 10 },
              }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div
                className="relative w-24 h-24 cursor-pointer"
                data-tooltip-id={`tooltip-${i}`}
                data-tooltip-content={`${skill.percentage}% proficiency in ${skill.name}`}
              >
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-300 dark:text-gray-700"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="42"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeLinecap="round"
                    className="text-blue-500 dark:text-yellow-400"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: skill.percentage / 100 }}
                    transition={{ duration: 1 }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-blue-600 dark:text-yellow-400 text-2xl">
                  {skill.icon}
                </div>
              </div>
              <p className="text-sm font-semibold text-blue-900 dark:text-yellow-300">
                {skill.name}
              </p>

              {/* Tooltip with animation and delay */}
              <Tooltip
                id={`tooltip-${i}`}
                className="z-50 !text-sm !bg-gray-900 !text-white !rounded-md !px-3 !py-2 dark:!bg-white dark:!text-gray-900"
                delayShow={200}
                float
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-gray-200 dark:to-gray-800 pointer-events-none" />
    </section>
  );
};

export default Skills;
