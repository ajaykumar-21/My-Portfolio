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
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    if (!formData.message.trim()) errs.message = "Message is required";
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
        "service_9xaiyu4", // 🔁 Your Service ID
        "template_jgkktbw", // 🔁 Your Template ID
        formData,
        "6bsC2eNIneVbZ05ac" // 🔁 Your Public Key
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      toast.error("Something went wrong. Try again!");
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-white dark:from-gray-950 dark:to-gray-900">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-blue-800 dark:text-yellow-400"
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
            <ContactInfo
              icon={<FaEnvelope />}
              text="ajaykumarpk789@gmail.com"
              link="mailto:ajaykumarpk789@gmail.com"
            />
            <ContactInfo
              icon={<FaPhone />}
              text="+91 9675523215"
              link="tel:+919675523215"
            />
            <ContactInfo
              icon={<FaLinkedin />}
              text="LinkedIn Profile"
              link="https://www.linkedin.com/in/ajaykumar789/"
            />
            <ContactInfo
              icon={<FaGithub />}
              text="GitHub Profile"
              link="https://github.com/ajaykumar-21"
            />
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 dark:bg-white/5 p-8 rounded-xl shadow-md space-y-5"
          >
            <FormInput
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <FormInput
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FormTextarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-yellow-500 text-white dark:text-black font-semibold py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-yellow-600 transition duration-300"
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

// 👇 Reusable Components
const ContactInfo = ({ icon, text, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 bg-blue-50 dark:bg-white/5 shadow-md p-5 rounded-xl hover:shadow-blue-100 dark:hover:shadow-yellow-300/20 transition"
  >
    <span className="text-xl text-blue-600 dark:text-yellow-400">{icon}</span>
    <span className="text-gray-800 dark:text-gray-200 hover:underline">
      {text}
    </span>
  </a>
);

const FormInput = ({ type, name, placeholder, value, onChange, error }) => (
  <div>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-400"
    />
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);

const FormTextarea = ({ name, placeholder, value, onChange, error }) => (
  <div>
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      rows={4}
      onChange={onChange}
      className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-yellow-400"
    ></textarea>
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);
