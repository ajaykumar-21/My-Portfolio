"use client";

import { motion } from "framer-motion";
import { CheckCircle, ExternalLink } from "lucide-react";
import projects from "../../../public/data/projects-all-data.json";

const Projects = () => {
  return (
    <section
      className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-yellow-300 dark:to-yellow-500"
        >
          🌟 My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-md hover:shadow-yellow-400/20 dark:hover:shadow-yellow-500/30 transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-yellow-700 dark:text-yellow-300">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle
                      size={16}
                      className="text-yellow-500 dark:text-yellow-400"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-700/20 dark:text-yellow-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-yellow-600 dark:text-yellow-400 font-semibold hover:underline"
              >
                View Project <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
