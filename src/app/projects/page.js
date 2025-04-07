"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle, X } from "lucide-react";
import projects from "../../../public/data/projects-all-data.json";

const techFilters = ["All", "React", "Next.js", "Full Stack"];

const ProjectSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((p) => p.technologies.includes(selectedFilter));

  return (
    <section
      className="py-24 bg-gradient-to-br from-gray-100 to-white dark:from-gray-950 dark:to-gray-800"
      id="projects"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 text-blue-600 dark:text-yellow-400"
        >
          📽️ My Projects
        </motion.h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {techFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full font-medium border transition-all duration-300 ${
                selectedFilter === filter
                  ? "bg-blue-600 dark:bg-yellow-400 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 rounded-2xl shadow-sm hover:shadow-md hover:shadow-blue-100 dark:hover:shadow-yellow-500/20 transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-blue-600 dark:text-yellow-300">
                  {project.title}
                </h3>

                <p className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-400 mb-5">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle
                        size={16}
                        className="text-blue-400 dark:text-yellow-300"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-yellow-700/20 dark:text-yellow-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-yellow-400 font-medium hover:underline"
                >
                  View Project <ExternalLink size={16} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-2xl w-full shadow-xl relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
                >
                  <X />
                </button>
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-yellow-400 mb-4">
                  {activeProject.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {activeProject.description}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-4">
                  {activeProject.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-5">
                  {activeProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-blue-200 text-blue-800 dark:bg-yellow-800 dark:text-yellow-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={activeProject.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600 dark:text-yellow-400 font-semibold hover:underline"
                >
                  View Live Project ↗
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectSection;
