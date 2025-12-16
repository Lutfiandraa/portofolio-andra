import React from "react";
import { motion } from "framer-motion";

const StarsBackground = () => {
  // Generate bintang dengan posisi dan delay yang berbeda (dikurangi jumlahnya)
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4, // 3-7 detik (lebih cepat)
    size: Math.random() * 2 + 1, // 1-3px
  }));

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full star-morph"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            backgroundColor: '#ffffff',
          }}
        />
      ))}
    </motion.div>
  );
};

export default StarsBackground;

