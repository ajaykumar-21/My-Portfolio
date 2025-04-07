"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-6"
      id="home"
    >
      <motion.h2
        className="text-4xl sm:text-6xl font-extrabold text-gray-800 dark:text-white tracking-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm{" "}
        <span className="text-blue-600 dark:text-yellow-400">Ajay Kumar</span>
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
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="mailto:ajay@example.com"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
        >
          <FaEnvelope size={30} />
        </a>
      </motion.div>

      {/* Highlight Slider */}
      <motion.div
        className="w-full max-w-3xl mt-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2500 }}
        >
          {[
            "Passionate about crafting intuitive user experiences.",
            "Focused on modern design principles and performance.",
            "Let's build something amazing together!",
          ].map((text, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="text-gray-700 dark:text-gray-300 text-lg font-medium bg-white/60 dark:bg-white/10 backdrop-blur-md py-4 px-6 rounded-2xl shadow-xl border border-gray-300 dark:border-white/10 max-w-xl">
                  {text}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Hero;
