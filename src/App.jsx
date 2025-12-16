import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import Home from "./Home";
import Competency from "./Competency";
import Experience from "./Experience";
import Contact from "./Contact";
import StarsBackground from "./component/StarsBackground";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollY);
          
          // Threshold untuk menghindari flickering saat scroll kecil
          if (scrollDifference < 5) {
            ticking = false;
            return;
          }
          
          // Jika di bagian atas halaman (kurang dari 50px), selalu show navbar
          if (currentScrollY < 50) {
            setIsNavbarVisible(true);
          }
          // Jika scroll ke bawah lebih dari 100px, hide navbar
          else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            setIsNavbarVisible(false);
          } 
          // Jika scroll ke atas, show navbar
          else if (currentScrollY < lastScrollY) {
            setIsNavbarVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div 
      className="min-h-screen bg-black text-gray-100 flex flex-col relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Stars Background */}
      <StarsBackground />
      
      {/* Navbar */}
      <motion.nav 
        className="fixed top-4 left-0 right-0 z-50 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isNavbarVisible ? 1 : 0,
          y: isNavbarVisible ? 0 : -120,
          scale: isNavbarVisible ? 1 : 0.95
        }}
        transition={{ 
          duration: 0.4, 
          ease: [0.4, 0, 0.2, 1],
          opacity: { duration: 0.3 },
          y: { duration: 0.4 },
          scale: { duration: 0.35 }
        }}
        style={{ pointerEvents: isNavbarVisible ? 'auto' : 'none' }}
      >
        <div className="max-w-5xl mx-auto bg-white/8 backdrop-blur-md rounded-[70px] px-6 py-4 flex items-center justify-between relative border border-white/20">
          {/* Logo */}
          <h1 className="text-lg md:text-xl font-semibold text-blue-400">
            Lutfiandra Pohan
          </h1>

          {/* Desktop Menu - dipusatkan */}
          <ul className="hidden md:flex space-x-8 text-sm md:text-base font-medium mx-auto">
            <li>
              <a href="#home" className="nav-link-glow">
                Home
              </a>
            </li>
            <li>
              <a href="#competency" className="nav-link-glow">
                Project
              </a>
            </li>
            <li>
              <a href="#experience" className="nav-link-glow">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link-glow">
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
              className="md:hidden bg-white/8 backdrop-blur-md rounded-[70px] px-6 py-4 space-y-4 mt-2 border border-white/20"
            >
              <a
                href="#home"
                className="block nav-link-glow"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#competency"
                className="block nav-link-glow"
                onClick={() => setIsOpen(false)}
              >
                Project
              </a>
              <a
                href="#experience"
                className="block nav-link-glow"
                onClick={() => setIsOpen(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="block nav-link-glow"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <motion.main 
        className="flex-1 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
      >
        <Home />
        <Competency />
        <Experience />
        <Contact />
      </motion.main>
    </motion.div>
  );
}

export default App;