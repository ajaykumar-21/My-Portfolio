"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaEnvelope className="text-blue-500 text-2xl" />,
    title: "Email",
    info: "your.email@example.com",
  },
  {
    icon: <FaPhone className="text-green-500 text-2xl" />,
    title: "Phone",
    info: "+123 456 7890",
  },
  {
    icon: <FaMapMarkerAlt className="text-red-500 text-2xl" />,
    title: "Location",
    info: "Your City, Country",
  },
];

const Contact = () => {
  return (
    <section
      className="py-20 bg-gradient-to-t from-white to-gray-100 dark:from-gray-800 dark:to-gray-900"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📬 Contact Me
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 mb-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Feel free to reach out via any of the channels below!
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {contactDetails.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center gap-4 transition-transform transform hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm break-all">
                {item.info}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
