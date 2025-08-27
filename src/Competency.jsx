import React from "react"; 
import { motion } from "framer-motion";
import { SiDart, SiFlutter, SiJavascript, SiReact} from "react-icons/si";

const competencies = [
  {
    title: "Pawon App",
    description: "Mobile Applications with Supabase Integrated.",
    icons: [
      <SiFlutter style={{ color: "#02569B", fontSize: "1.5rem" }} />,
      <SiDart style={{ color: "#02569B", fontSize: "1.5rem" }} />,
    ],
    image: "/img/Iphone.jpg"
  },
  { 
    title: "Portal Berita", 
    description: "Commercial New's Letter Website based for PT. Winnicode Garuda.", 
    icons: [
       <SiReact style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
      <SiJavascript style={{ color: "#E7F527", fontSize: "1.5rem" }} />,
    ], 
    image: "/img/Berita.png" 
  },
  { 
    title: "Deep Learning", 
    description: "Brebes weather Predictions with Long Short-Term Memory Methods.", 
    icons: [
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
        alt="Python" 
        style={{ width: "30px", height: "30px" }}
      />
    ], 
    image: "/img/brebes.png" 
  },
  { title: "Incoming Project", description: "Coming soon.", icons: ["🎨", "❄️", "🌊"], image: "/img/white.jpg" },
];

const Competency = () => {
  return (
    <section
      id="competency"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden px-6 py-20"
    >
      {/* 🔵 Gradient horizontal di tengah */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 
                      h-[1px] bg-gradient-to-r from-transparent via-indigo-700/40 to-transparent 
                      pointer-events-none"></div>

      {/* 🔵 Animated Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[200px] h-[200px] bg-blue-500 rounded-full mix-blend-screen 
                      filter blur-3xl opacity-25 animate-move1"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[160px] h-[160px] bg-cyan-400 rounded-full mix-blend-screen 
                      filter blur-3xl opacity-15 animate-move2"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[120px] h-[120px] bg-indigo-500 rounded-full mix-blend-screen 
                      filter blur-3xl opacity-20 animate-move3"></div>

      {/* Konten */}
      <div className="relative z-10 container mx-auto">
        {/* Judul utama */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Project
          </h2>
          <p className="text-gray-400">Highlight</p>
        </motion.div>

        {/* Card List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencies.map((comp, index) => (
            <motion.div
              key={index}
              className="relative group p-6 rounded-2xl shadow-lg 
                         bg-white/5 backdrop-blur-md border border-white/10"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ y: -8, scale: 1.03 }}
            >
              {/* Gambar dengan overlay transparan */}
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <motion.img
                  src={comp.image}
                  alt={comp.title}
                  className="h-28 w-full object-cover opacity-60"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Judul card */}
              <motion.h3
                className="text-lg md:text-xl font-semibold text-indigo-300 mb-2"
                whileHover={{ color: "#60A5FA" }}
                transition={{ duration: 0.3 }}
              >
                {comp.title}
              </motion.h3>

              {/* Deskripsi */}
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                {comp.description}
              </p>

              {/* Ikon */}
              <motion.div
                className="flex space-x-2 text-xl mb-4 text-white/90"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {comp.icons.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competency;