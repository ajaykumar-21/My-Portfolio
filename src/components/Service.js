"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

// React Icons (you can replace these with Lucide if preferred)
import { FaLaptopCode, FaGlobe, FaRetweet, FaReact } from "react-icons/fa";

function Service() {
  const services = [
    {
      title: "🚀 One-Page Website",
      desc: "Responsive single-page site with sections like About, Services, Contact.",
      icon: (
        <FaGlobe
          size={40}
          className="text-blue-600 dark:text-yellow-400 mb-4"
        />
      ),
    },
    {
      title: "📄 Multi-Page Site",
      desc: "3–5 page sites for small businesses, personal brands, or portfolios.",
      icon: (
        <FaLaptopCode
          size={40}
          className="text-blue-600 dark:text-yellow-400 mb-4"
        />
      ),
    },
    {
      title: "⚙️ React SPA App",
      desc: "Interactive apps with routing, form integration, and dynamic components.",
      icon: (
        <FaReact
          size={40}
          className="text-blue-600 dark:text-yellow-400 mb-4 animate-spin-slow"
        />
      ),
    },
    {
      title: "🔁 Website Redesign",
      desc: "Upgrade outdated designs into modern, mobile-friendly UIs using Tailwind.",
      icon: (
        <FaRetweet
          size={40}
          className="text-blue-600 dark:text-yellow-400 mb-4"
        />
      ),
    },
  ];

  return (
   <section
  id="services"
  className="w-full py-24 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800"
>
  <div className="max-w-6xl mx-auto px-6">
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-yellow-400 mb-14">
      💼 Services I Offer
    </h2>

    {/* Swiper */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },   // Mobile
          768: { slidesPerView: 2 },   // Tablet
          1200: { slidesPerView: 3 },  // Laptop/Desktop
        }}
        modules={[Pagination]}
        className="!pb-10"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-start items-center bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center h-full min-h-[220px]">
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-yellow-400">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  </div>
</section>

  );
}

export default Service;
