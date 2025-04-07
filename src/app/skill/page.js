"use client";

import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJson,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiAppian,
  SiBootstrap,
  SiMaterialdesign,
  SiTailwindcss,
  SiGithub,
  SiGit,
  SiPostman,
  SiFirebase,
  SiVercel,
  SiRender,
  SiFigma,
  SiBabel,
  SiNpm,
  SiGooglechrome,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaCode, FaTools, FaCogs } from "react-icons/fa";

const skills = {
  Languages: [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
    { name: "REST APIs", icon: <FaCode className="text-teal-400" /> },
    { name: "JSON", icon: <SiJson className="text-green-400" /> },
    { name: "DOM manipulation", icon: <FaCode className="text-pink-400" /> },
    { name: "ES6", icon: <FaCode className="text-purple-400" /> },
    { name: "Knockout JS", icon: <FaCode className="text-red-400" /> },
  ],
  Frameworks: [
    { name: "ReactJS", icon: <SiReact className="text-cyan-400" /> },
    {
      name: "NextJS",
      icon: <SiNextdotjs className="text-white dark:text-gray-200" />,
    },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
    {
      name: "Socket.Io",
      icon: <SiSocketdotio className="text-white dark:text-gray-200" />,
    },
    { name: "Appian", icon: <SiAppian className="text-indigo-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-violet-500" /> },
    {
      name: "Material UI",
      icon: <SiMaterialdesign className="text-sky-500" />,
    },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
  ],
  Tools: [
    { name: "Github", icon: <SiGithub className="text-white" /> },
    { name: "GIT", icon: <SiGit className="text-orange-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    {
      name: "Vercel",
      icon: <SiVercel className="text-white dark:text-gray-200" />,
    },
    { name: "Render", icon: <SiRender className="text-blue-300" /> },
    {
      name: "Chrome Dev Tools",
      icon: <SiGooglechrome className="text-yellow-200" />,
    },
    { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
    { name: "VS Code", icon: <DiVisualstudio className="text-blue-400" /> },
    { name: "Babel", icon: <SiBabel className="text-yellow-300" /> },
    { name: "NPM", icon: <SiNpm className="text-red-500" /> },
  ],
};

const Skills = () => {
  return (
    <section className="mt-10 py-12 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-5 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-10 text-blue-700 dark:text-yellow-400"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white dark:bg-gray-800 border border-blue-100 dark:border-yellow-700 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-3xl mb-3 flex justify-center">
                {category === "Languages" && (
                  <FaCode className="text-blue-600 dark:text-yellow-400" />
                )}
                {category === "Frameworks" && (
                  <FaCogs className="text-blue-600 dark:text-yellow-400" />
                )}
                {category === "Tools" && (
                  <FaTools className="text-blue-600 dark:text-yellow-400" />
                )}
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 dark:text-yellow-400 mb-5">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center justify-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-xl">{item.icon}</span>
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
