import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    { title: "Machine Learning Engineer", place: "Esa Unggul University (Academic).", date: "April 2025 - July 2025", desc: "Brebes Weather Prediction method with Deep Learning & Long Short-Term Memory" },
    { title: "Fullstack Developer", place: "Winnicode Garuda Tech (Internship).", date: "May 2025 - August 2025", desc: "Architectural Design and Implementation of a Web-Based News Portal System with Integrated News API Services." },
    { title: "Mobile App Back-end Developer", place: "Esa Unggul University (Academic)", date: "Janury 2025", desc: "Logic side & Data Structure with Supabase data API management." },
  ];

  return (
    <section id="experience" className="py-20 bg-black text-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Judul dengan transisi smooth */}
        <motion.div
          className="md:col-span-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
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
              className="bg-gray-800/70 border border-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/20 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: idx * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-start space-x-4">
                {/* FIX Lingkaran biar tidak oval */}
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-blue-400 text-blue-400 font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-indigo-300">{exp.title}</h3>
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
    </section>
  );
}