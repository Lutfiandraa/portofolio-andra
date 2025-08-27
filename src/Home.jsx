import React from "react";
import TypedText from "./component/TypedText";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-black text-slate-200"
    >
      {/* Foto Profil */}
      <motion.div
        className="
          w-40 h-40
          sm:w-48 sm:h-48
          md:w-56 md:h-56
          lg:w-64 lg:h-64
          rounded-full overflow-hidden
          bg-transparent
        "
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/img/circle.png"
          alt="Profile"
          className="block w-full h-full object-cover bg-transparent"
        />
      </motion.div>

      {/* Sosial Media */}
      <motion.div
        className="flex space-x-6 mt-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <a
          href="https://linkedin.com/in/lutfiandra-pohan-6b7706289"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Lutfiandraa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-500 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:lutfiandrapohann@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-500 text-2xl"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Typed Text */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <TypedText
          strings={[
            `<span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400 font-bold text-4xl drop-shadow-lg">Hi, I’m Lutfiandra Pohan</span>`,
          ]}
        />
      </motion.div>

      {/* Deskripsi */}
      <motion.p
        className="max-w-2xl text-slate-300 leading-relaxed mt-4 text-lg text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        I am a Computer Science student beginner with a strong passion for
        learning and technology development. I continuously enhance my skills
        both within and beyond the academic environment while expanding my
        professional network to achieve my long-term career goals.
      </motion.p>
    </section>
  );
}

export default Home;