"use client";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaCode,
} from "react-icons/fa";
import {
  SiRedux,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJson,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
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
  SiJavascript,
} from "react-icons/si";

import { DiVisualstudio } from "react-icons/di";

const skillsForHome = [
  {
    name: "React",
    icon: <FaReact className="text-blue-500" />,
    percentage: 90,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-blue-900" />,
    percentage: 85,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-500" />,
    percentage: 85,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
    percentage: 75,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-600" />,
    percentage: 92,
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-600" />,
    percentage: 80,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-blue-400" />,
    percentage: 88,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-orange-600" />,
    percentage: 85,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-blue-600" />,
    percentage: 90,
  },
  { name: "Git", icon: <FaGitAlt className="text-red-600" />, percentage: 85 },
];

export default skillsForHome;

export const skills = {
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
