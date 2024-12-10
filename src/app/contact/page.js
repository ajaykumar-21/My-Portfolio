"use client";

const ContactPage = () => {
  return (
    <section className="py-16 px-4 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold">Get In Touch</h2>
      <form className="mt-8 max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 rounded bg-gray-800 text-white"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
