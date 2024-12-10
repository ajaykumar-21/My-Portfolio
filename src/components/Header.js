"use client";

import DarkModeToggle from "./DarkModeToggle";
import Link from "next/link";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 dark:bg-gray-700 text-white fixed top-0 z-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Ajay Kumar</h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="/about">About</Link>
            </motion.div>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
