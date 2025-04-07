"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name) errs.name = "Name is required";
    if (!formData.email) errs.email = "Email is required";
    if (!formData.message) errs.message = "Message is required";
    return errs;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      toast.error("Please fill out all fields.");
      return;
    }

    try {
      await emailjs.send(
        "service_eva5ocq",
        "template_a0zy1fn",
        formData,
        "4VF0gFoIUrMwUXgdr"
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      toast.error("Something went wrong. Try again!");
    }
  };
  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-800 dark:text-white"
        >
          📬 Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-12"
        >
          Whether you have a question, want to collaborate, or just say hello —
          my inbox is always open!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 bg-blue-50 dark:bg-white/5 shadow-md p-5 rounded-xl hover:shadow-blue-100 dark:hover:shadow-yellow-300/20 transition">
              <FaEnvelope className="text-xl text-blue-600 dark:text-yellow-400" />
              <span className="text-gray-800 dark:text-gray-200">
                your.email@example.com
              </span>
            </div>

            <div className="flex items-center gap-4 bg-blue-50 dark:bg-white/5 shadow-md p-5 rounded-xl hover:shadow-blue-100 dark:hover:shadow-yellow-300/20 transition">
              <FaPhone className="text-xl text-blue-600 dark:text-yellow-400" />
              <span className="text-gray-800 dark:text-gray-200">
                +91 9876543210
              </span>
            </div>

            <div className="flex items-center gap-4 bg-blue-50 dark:bg-white/5 shadow-md p-5 rounded-xl hover:shadow-blue-100 dark:hover:shadow-yellow-300/20 transition">
              <FaLinkedin className="text-xl text-blue-600 dark:text-yellow-400" />
              <a
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:underline"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center gap-4 bg-blue-50 dark:bg-white/5 shadow-md p-5 rounded-xl hover:shadow-blue-100 dark:hover:shadow-yellow-300/20 transition">
              <FaGithub className="text-xl text-blue-600 dark:text-yellow-400" />
              <a
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:underline"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 dark:bg-white/5 p-8 rounded-xl shadow-md space-y-5"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-400"
            />
            <textarea
              rows={4}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-400"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-yellow-600 transition duration-300"
            >
              ✉️ Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
