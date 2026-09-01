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
              🚀 Building Fast, Scalable Web Experiences
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a{" "}
              <span className="font-semibold text-blue-600 dark:text-yellow-400">
                Frontend Developer
              </span>{" "}
              with <strong>2 years</strong> of experience building scalable,
              performance-focused web applications. I specialize in{" "}
              <strong>React.js, Next.js, JavaScript, and TypeScript</strong>,
              with a focus on polished, accessible user interfaces.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I have hands-on experience with{" "}
              <strong>
                Redux, Tailwind CSS, Material UI, REST APIs, Firebase, and
                Socket.IO
              </strong>
              , using modern workflows to deliver production-ready solutions.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I optimize Core Web Vitals and technical SEO through code
              splitting, lazy loading, structured data, semantic HTML, and
              rendering optimizations.
            </p>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I take pride in writing clean, maintainable code and building
              reusable components that help teams ship fast, reliable, and
              user-friendly digital experiences.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <Briefcase className="text-blue-600 dark:text-yellow-400" />{" "}
              Experience
            </h3>
            <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">
              Frontend Developer – <strong>ApyHub</strong> (Sept 2025 - Aug 2026)
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
              <li>
                Improved Largest Contentful Paint from approximately 5 seconds
                to under 2.5 seconds in production.
              </li>
              <li>
                Improved Core Web Vitals with code splitting, lazy loading,
                asset optimization, and fewer unnecessary React re-renders.
              </li>
              <li>
                Improved technical SEO with Schema.org structured data, semantic
                HTML, and indexing fixes across key landing pages.
              </li>
              <li>
                Built reusable React and Next.js components and collaborated
                across design, backend, and product teams.
              </li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">
              Frontend Developer (Freelance) (Feb 2023 - July 2025)
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
              <li>
                Developed responsive web applications with React.js, Next.js,
                Tailwind CSS, and Material UI.
              </li>
              <li>
                Built real-time applications using REST APIs, Firebase, and
                Socket.IO.
              </li>
              <li>
                Delivered scalable solutions using reusable components,
                Git-based workflows, and deployments on Vercel and Render.
              </li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">
              Frontend Developer – <strong>Coforge</strong> (Nov 2021 - June
              2022)
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2 space-y-1">
              <li>
                Developed responsive React-based user interfaces for enterprise
                applications.
              </li>
              <li>
                Integrated REST APIs with backend services to deliver seamless
                user experiences.
              </li>
              <li>
                Built reusable UI components to improve consistency and reduce
                duplication across modules.
              </li>
              <li>
                Participated in code reviews and worked with cross-functional
                teams to improve application quality.
              </li>
            </ul>
          </div>

          {/* Projects / Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
              <Award className="text-blue-600 dark:text-yellow-400" /> Projects
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Showcased multiple full-stack and frontend-focused projects,
              demonstrating skills in React, Next.js, Redux Toolkit, Socket.IO,
              and API integrations. These projects highlight my ability to
              deliver <strong>production-ready, scalable applications</strong>.
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
