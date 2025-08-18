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
      className="min-h-screen w-full overflow-x-hidden flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-blue-20 dark:from-gray-900 dark:to-gray-800 px-4 sm:px-6 py-16"
      id="home"
    >
      <motion.h1
        className="text-4xl sm:text-6xl font-extrabold tracking-tight mt-10 text-blue-900 dark:text-yellow-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        BuildWithAjay
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg mt-3 font-medium text-blue-700 dark:text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Crafting Fast, Modern Websites That Convert.
      </motion.p>

      <motion.h3
        className="text-base sm:text-xl mt-4 text-gray-600 dark:text-gray-300"
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

      <motion.p
        className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 mt-4 max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm{" "}
        <span className="font-semibold text-blue-600 dark:text-yellow-400">
          Ajay
        </span>
        , a frontend developer passionate about building responsive, modern web
        applications using React, Next.js, and Tailwind CSS. Whether you're
        launching a personal brand, SaaS product, or business site — I help you
        create sleek, scalable, and high-performing web experiences that stand
        out.
      </motion.p>

      {/* Highlight Slider */}
      {/* <motion.div
        className="w-full max-w-2xl mt-10 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
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
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-medium bg-white/60 dark:bg-white/10 backdrop-blur-md py-4 px-6 rounded-2xl shadow-md border border-gray-200 dark:border-white/10 max-w-xl">
                  {text}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div> */}

      {/* CTA Buttons */}
      <motion.div
        className="mt-6 flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <a
          href="/contact"
          className="px-5 py-2.5 rounded-lg shadow transition-all text-sm sm:text-base font-semibold
             bg-blue-600 text-white hover:bg-blue-700 
             dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500"
        >
          📩 Hire Me
        </a>

        <a
          href="/projects"
          className="px-5 py-2.5 rounded-lg border transition-all text-sm sm:text-base font-semibold
             border-blue-600 text-blue-600 hover:bg-blue-50 
             dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-gray-800"
        >
          💼 View My Work
        </a>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="mt-6 flex space-x-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <a
          href="https://github.com/ajaykumar-21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-400 transition-transform transform hover:scale-110"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/ajaykumar789"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-400 transition-transform transform hover:scale-110"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-400 transition-transform transform hover:scale-110"
        >
          <FaEnvelope size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
