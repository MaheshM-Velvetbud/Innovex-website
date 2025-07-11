"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut', type: 'spring', bounce: 0.3 } },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 0.2 } },
};

// const buttonVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.8 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 } },
//   hover: { scale: 1.1, transition: { duration: 0.3 } },
// };

// Particle animation keyframes
const particleStyles = `
  @keyframes particle {
    0% { transform: translateY(0) scale(1); opacity: 0.8; }
    50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
    100% { transform: translateY(0) scale(1); opacity: 0.8; }
  }
  .particle {
    animation: particle 4s infinite ease-in-out;
  }
  .particle:nth-child(2) { animation-delay: -1s; }
  .particle:nth-child(3) { animation-delay: -2s; }
  .particle:nth-child(4) { animation-delay: -3s; }
`;

const OmanVision2040Section = () => {
  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 ">
      <style>{particleStyles}</style>
      {/* Particle background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-4 h-4 bg-[#F6E05E] rounded-full opacity-50 particle" style={{ top: '20%', left: '10%' }}></div>
        <div className="absolute w-3 h-3 bg-[#F6E05E] rounded-full opacity-50 particle" style={{ top: '40%', left: '80%' }}></div>
        <div className="absolute w-5 h-5 bg-[#F6E05E] rounded-full opacity-50 particle" style={{ top: '60%', left: '30%' }}></div>
        <div className="absolute w-3 h-3 bg-[#F6E05E] rounded-full opacity-50 particle" style={{ top: '80%', left: '60%' }}></div>
      </div>

      {/* Content */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ rotateX: 5, rotateY: 5, transition: { duration: 0.3 } }}
        className="relative z-10 max-w-4xl mx-auto bg-white bg-opacity-90 backdrop-blur-md rounded-xl p-6 sm:p-8 lg:p-10 shadow-2xl text-center"
        style={{ transform: 'perspective(1000px)' }}
      >
        <motion.h2
          variants={textVariants}
          className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-800 mb-4 mx-auto"
        >
          Oman Vision 2040
        </motion.h2>
        <motion.p
          variants={textVariants}
          className="text-sm sm:text-base lg:text-lg text-gray-800 max-w-2xl mx-auto text-center"
        >
          Oman Vision 2040 is the Sultanate’s gateway to overcome challenges keep pace with regional and global changes, generate and seize opportunities to foster economic competitiveness and social well-being, stimulate growth, and build confidence in all economic, social, and developmental relations nationwide.
        </motion.p>
        {/* <motion.a
          href="/about"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="mt-6 inline-block bg-gray-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-black hover:text-[#6B46C1] transition-colors duration-300 mx-auto"
        >
          Learn About Our Alignment
        </motion.a> */}
      </motion.div>
    </div>
  );
};

export default OmanVision2040Section;