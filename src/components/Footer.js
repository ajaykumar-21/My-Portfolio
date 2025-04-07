"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    icon: <FaGithub />,
    url: "https://github.com/ajaykumar-21",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/ajaykumar789/",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    url: "#",
    label: "Twitter",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white relative">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-t from-transparent to-gray-200 dark:to-gray-800 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col items-center text-center">
        <motion.p
          className="text-base md:text-lg font-medium text-gray-600 dark:text-gray-300 mb-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-blue-600 dark:text-yellow-400 font-semibold tracking-wide">
            Ajay Kumar
          </span>
          . All rights reserved.
        </motion.p>

        <motion.p
          className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-1 italic tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Crafting engaging digital experiences with modern web technologies.
        </motion.p>

        <motion.div
          className="flex space-x-6 mt-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-2xl text-blue-600 dark:text-gray-300 hover:text-blue-800 dark:hover:text-yellow-400 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
