"use client";

import { motion } from "framer-motion";
import { FaCode, FaTools, FaCogs } from "react-icons/fa";
import { skills } from "@/data/skills";

const Skills = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-white dark:from-gray-950 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-5 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-blue-700 dark:text-yellow-400"
        >
          My Skills
        </motion.h2>

        <div className="flex flex-col gap-12 w-full">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center"
            >
              {/* Category title + icon */}
              <div className="flex items-center justify-center gap-3 mb-10">
                {category === "Languages" && (
                  <FaCode className="text-3xl text-blue-600 dark:text-yellow-400" />
                )}
                {category === "Frameworks" && (
                  <FaCogs className="text-3xl text-blue-600 dark:text-yellow-400" />
                )}
                {category === "Tools" && (
                  <FaTools className="text-3xl text-blue-600 dark:text-yellow-400" />
                )}
                <h3 className="text-2xl font-semibold text-blue-700 dark:text-yellow-400">
                  {category}
                </h3>
              </div>

              {/* Skill items */}
              <ul className="grid grid-cols-2 sm:grid-cols-5 gap-8">
                {items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-4xl mb-2">{item.icon}</span>
                    <span className="text-lg font-medium">{item.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
