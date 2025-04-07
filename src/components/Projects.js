"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import projectsData from "../../public/data/projects-data.json";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-gray-100 to-white text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-14"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          🚀 My Projects
        </motion.h2>

        {/* <div className="relative overflow-visible"> */}
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          className="w-full px-4"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide
              key={index}
              className={`max-w-[400px] min-h-[200px] transition-all duration-300 ${
                activeIndex === index
                  ? "opacity-100 scale-105 z-20"
                  : "opacity-60 scale-95"
              }`}
            >
              <motion.div
                className={`relative min-h-[240px] h-full flex flex-col justify-between bg-white/90 dark:bg-white/10 backdrop-blur-xl border border-gray-300 dark:border-white/10 rounded-2xl p-6 shadow-xl transition-all duration-300 ${
                  activeIndex === index
                    ? "ring-2 ring-yellow-400 shadow-2xl"
                    : ""
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-600 dark:text-yellow-400">
                    {project.title}
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 self-center inline-flex items-center justify-center px-4 py-3 w-fit bg-yellow-400 text-sm font-bold text-blue-900 rounded-full hover:bg-yellow-300 transition"
                >
                  🔗 View Details
                </a>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </div> */}
    </section>
  );
}
