import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-black/80 overflow-hidden px-6 z-10"
    >
      {/* 🔵 Animated Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[280px] h-[280px] bg-blue-500 rounded-full mix-blend-screen 
                      filter blur-3xl opacity-30 animate-move1"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[240px] h-[240px] bg-cyan-400 rounded-full mix-blend-screen 
                      filter blur-3xl opacity-20 animate-move2"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[200px] h-[200px] bg-indigo-500 rounded-full mix-blend-screen 
                      filter blur-3xl opacity-25 animate-move3"></div>

      {/* 📨 Contact Card with Smooth Transition */}
      <motion.div
        className="relative z-10 bg-white/5 backdrop-blur-md rounded-2xl p-8 max-w-xl w-full shadow-lg text-center border border-white/10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl font-semibold text-white mb-3">Let's Collaborate!</h2>
        <p className="text-gray-300 text-sm mb-6">
          Get in touch via form or social media below. Let's have a conversation!
        </p>

        {/* 📧 Form Section with Smooth Transition */}
        <motion.form
          className="space-y-3 mb-6 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <label className="block text-gray-400 text-xs mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md bg-white/10 text-white text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs mb-1">Komentar</label>
            <textarea
              rows="3"
              placeholder="Write your message..."
              className="w-full px-3 py-2 rounded-md bg-white/10 text-white text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm font-medium transition-colors"
          >
            Send
          </button>
        </motion.form>

        {/* 🌐 Social Links Badge */}
        <motion.div
          className="flex justify-center gap-4 mt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/lutfiandra-pohan-6b7706289/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 text-lg transition-colors flex items-center gap-2"
          >
            <FaLinkedin /> <span className="text-xs">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/lutfiandrra/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-white/10 rounded-full text-gray-300 hover:text-white hover:bg-white/20 text-lg transition-colors flex items-center gap-2"
          >
            <FaInstagram /> <span className="text-xs">Instagram</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;