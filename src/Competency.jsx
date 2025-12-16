import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiDart, SiFlutter, SiJavascript, SiReact, SiVuedotjs, SiAngular, SiTypescript, SiNextdotjs } from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ⬅️ tambahan

const competencies = [
  {
    title: "Pawon App",
    description: "Back-end Mobile Applications with Flutter, Dart & Supabase Integrated.",
    icons: [
      <SiFlutter style={{ color: "#02569B", fontSize: "1.5rem" }} />,
      <SiDart style={{ color: "#02569B", fontSize: "1.5rem" }} />,
    ],
    images: ["/img/Iphone.jpg", "/img/Iphone2.jpg"],
    link: "https://github.com/Lutfiandraa/Pawon-main"
  },
  { 
    title: "Portal Berita", 
    description: "Commercial New's Letter Web based for PT. Winnicode Garuda. (Maintenance API control) ", 
    icons: [
      <SiReact style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
      <SiJavascript style={{ color: "#E7F527", fontSize: "1.5rem" }} />,
    ], 
    images: ["/img/Berita.png", "/img/Laptop.jpg"],
    link: "https://portal-berita-px6z.vercel.app/"
  },
  { 
    title: "Deep Learning", 
    description: "Brebes Temperature Predictions with Long Short-Term Memory Methods.", 
    icons: [
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
        alt="Python" 
        style={{ width: "30px", height: "30px" }}
      />
    ], 
    images: ["/img/suhu.png", "/img/brebes.png"],
    link: "https://github.com/Lutfiandraa/LongShort-TermMemory"
  },
  { 
    title: "On Going Project", 
    description: "Digitalize Mid Micro Business Toasted Bread Gerobar.", 
    icons: [
      <SiVuedotjs style={{ color: "#3cb371", fontSize: "1.5rem" }} />,
    ], 
    images: ["/img/Gerobar.png", "/img/banner.png"],
    link: "https://gerobar-umkm.vercel.app/"
  },
  {
    title: "Key-In",
    description: "an Pariwisata, Online Booking Destination website with framework Angular.js and Typescript library react for responsive ui",
    icons: [
      <SiAngular style={{ color: "#DD0031", fontSize: "1.5rem" }} />,
      <SiTypescript style={{ color: "#3178C6", fontSize: "1.5rem" }} />,
    ],
    images: ["/img/kerinaiko.png", "/img/manhattan.png"],
    link: "https://keyin-pariwisata.vercel.app/"
  },
  {
    title: "Royal Merchant",
    description: "Website to aim a trusted global partner by delivering reliable supply, exceptional service, and charcoal products",
    icons: [
      <SiNextdotjs style={{ color: "#ffffff", fontSize: "1.5rem" }} />,
      <SiTypescript style={{ color: "#3178C6", fontSize: "1.5rem" }} />,
      <SiReact style={{ color: "#61DAFB", fontSize: "1.5rem" }} />,
    ],
    images: ["/img/charcoaldefault.jpg", "/img/OOCLshipping.jpg"],
    link: "https://royalmerchant.vercel.app/"
  },
];

const Competency = () => {
  return (
    <section
      id="competency"
      className="relative min-h-screen flex items-center justify-center bg-black/80 overflow-hidden px-6 py-20 z-10"
    >
      {/* 🔵 Background effect */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 
                      h-[1px] bg-gradient-to-r from-transparent via-indigo-700/40 to-transparent 
                      pointer-events-none"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[200px] h-[200px] bg-blue-500 rounded-full mix-blend-screen 
                      filter blur-3xl opacity-25 animate-move1"></div>

      {/* Konten */}
      <div className="relative z-10 container mx-auto">
        {/* Judul */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Project
          </h2>
          <p className="text-gray-400">Highlight</p>
        </motion.div>

        {/* Card List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {competencies.map((comp, index) => (
            <Card key={index} comp={comp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ comp, index }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () =>
    setCurrent((prev) => (prev + 1) % comp.images.length);
  const prevImage = () =>
    setCurrent((prev) =>
      prev === 0 ? comp.images.length - 1 : prev - 1
    );

  return (
    <motion.div
      className="relative group p-6 rounded-2xl shadow-lg 
                 bg-white/5 backdrop-blur-md border border-white/10 flex flex-col"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -8, scale: 1.03 }}
    >
      {/* Slider Gambar */}
      <div className="relative mb-4 overflow-hidden rounded-xl">
        <motion.img
          key={current}
          src={comp.images[current]}
          alt={comp.title}
          className="h-28 w-full object-cover opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Tombol navigasi kiri/kanan */}
        {comp.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 
                         bg-black/40 hover:bg-black/60 text-white 
                         p-2 rounded-full opacity-0 group-hover:opacity-100 
                         transition-opacity"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 
                         bg-black/40 hover:bg-black/60 text-white 
                         p-2 rounded-full opacity-0 group-hover:opacity-100 
                         transition-opacity"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Judul */}
      <motion.h3
        className="text-lg md:text-xl font-semibold text-indigo-300 mb-2"
        whileHover={{ color: "#60A5FA" }}
        transition={{ duration: 0.3 }}
      >
        {comp.title}
      </motion.h3>

      {/* Deskripsi */}
      <p className="text-sm text-gray-300 leading-relaxed mb-4 flex-grow">
        {comp.description}
      </p>

      {/* Ikon + Link */}
      <motion.div
        className="flex items-center justify-between text-xl text-white/90"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex space-x-3">
          {comp.icons.map((icon, i) => (
            <span key={i}>{icon}</span>
          ))}
        </div>

        <a
          href={comp.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300 transition"
        >
          🔗
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Competency;