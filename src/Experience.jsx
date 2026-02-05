import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Experience() {
  const [certificateOpen, setCertificateOpen] = useState(false);

  const experiences = [
    { title: "Machine Learning Engineer", place: "Esa Unggul University (Academic).", date: "April 2025 - July 2025", desc: "Brebes Weather Prediction method with Deep Learning & Long Short-Term Memory" },
    { title: "Fullstack Developer", place: "Winnicode Garuda Tech (Internship).", date: "May 2025 - August 2025", desc: "Architectural Design and Implementation of a Web-Based News Portal System with Integrated News API Services.", certificateImage: "/img/sertifikatmagang.png" },
    { title: "Mobile App Back-end Developer", place: "Esa Unggul University (Academic)", date: "January 2025", desc: "Logic side & Data Structure with Supabase data API management." },
    { title: "Training as Backend Integration feature", place: "Solvera Global Teknologi (Training).", date: "20 November 2025 - 20 Desember 2025", desc: "Create design data model & integrating feature, new knowledge with SQLAlchemy Python library that provides SQL and Object Relational Mapping features for database PostgreSQL access." },
    { title: "Software Quality Assurance", place: "Esa Unggul (Academic)", date: "December 2025", desc: "Unit Testing with Jest from Javascript & Blackbox Testing on Report & Statistic System web based for Safety Officer" },
  ];

  return (
    <section id="experience" className="py-20 bg-black/80 text-gray-100 relative z-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Judul dengan transisi smooth */}
        <motion.div
          className="md:col-span-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
            Hall of Lutfiandra’s Experience
          </h2>
          <p className="text-gray-400">
            Personal Development, Academic & Non-Academic Growth
          </p>
        </motion.div>

        {/* Card Experience dengan transisi smooth */}
        <div className="md:col-span-2 space-y-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative bg-white/8 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/20 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {exp.certificateImage && (
                <button
                  type="button"
                  onClick={() => setCertificateOpen(true)}
                  className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-slate-200 bg-white/5 hover:bg-white/10 border border-slate-500/50 rounded-lg transition-colors"
                  aria-label="View certificate"
                >
                  <FaCertificate className="text-sm" />
                  View
                </button>
              )}
              <div className="flex items-start space-x-4">
                {/* FIX Lingkaran biar tidak oval */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-400 text-blue-400 font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-blue-400">{exp.title}</h3>
                  <p className="text-sm text-gray-400">
                    {exp.place} · {exp.date}
                  </p>
                  <p className="mt-2 text-gray-300 text-sm md:text-base">{exp.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate modal - floating image with close */}
      <AnimatePresence>
        {certificateOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setCertificateOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-2xl w-full max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setCertificateOpen(false)}
                className="absolute -top-10 right-0 flex items-center justify-center w-10 h-10 text-white hover:text-gray-300 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-10"
                aria-label="Close"
              >
                <IoMdClose className="text-2xl" />
              </button>
              <img
                src="/img/sertifikatmagang.png"
                alt="Sertifikat Magang"
                className="max-w-full max-h-[70vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}