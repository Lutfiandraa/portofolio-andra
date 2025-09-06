import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import Home from "./Home";
import Competency from "./Competency";
import Experience from "./Experience";
import Contact from "./Contact";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-900/80 border-b border-gray-700 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <h1 className="text-lg md:text-xl font-semibold text-blue-400">
            Lutfiandra Pohan
          </h1>

          {/* Desktop Menu - dipusatkan */}
          <ul className="hidden md:flex space-x-8 text-sm md:text-base font-medium mx-auto">
            <li>
              <a href="#home" className="hover:text-indigo-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#competency" className="hover:text-indigo-400 transition-colors">
                Project
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-indigo-400 transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 focus:outline-none z-50"
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu with Smooth Transition */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-gray-900/95 px-6 py-4 space-y-4 border-t border-gray-700"
            >
              <a
                href="#home"
                className="block hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#competency"
                className="block hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Project
              </a>
              <a
                href="#experience"
                className="block hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block hover:text-indigo-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Home />
        <Competency />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;