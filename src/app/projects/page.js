"use client";

import { motion } from "framer-motion";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "Built with Next.js and Tailwind CSS",
    },
    {
      id: 2,
      title: "E-commerce App",
      description: "React, Redux, and Firebase integration",
    },
  ];

  return (
    <motion.section
      className="py-16 px-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="p-6 bg-white dark:bg-gray-800 shadow rounded"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsPage;
