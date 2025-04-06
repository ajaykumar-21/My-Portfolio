"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Hero = () => {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-6"
      id="home"
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm <span className="text-blue-500">Ajay Kumar</span>
      </motion.h2>

      <motion.h3
        className="text-lg sm:text-2xl mt-4 text-gray-600 dark:text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Typewriter
          words={["Frontend Developer", "React Enthusiast", "UI/UX Designer"]}
          loop={true}
          cursor
        />
      </motion.h3>

      <motion.div
        className="mt-6 flex space-x-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="mailto:ajay@example.com"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-all"
        >
          <FaEnvelope size={30} />
        </a>
      </motion.div>

      {/* Optional Swiper: Highlight skills */}
      <motion.div
        className="w-full max-w-2xl mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500 }}
        >
          <SwiperSlide>
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              Passionate about crafting intuitive user experiences.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              Focused on modern design principles and performance.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-gray-700 dark:text-gray-300 text-lg font-medium">
              Let's build something amazing together!
            </p>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Hero;
