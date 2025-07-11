
"use client"
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '@/Components/Footer/Footer';
// import { Link } from 'react-router-dom';

// Animation variants
const heroVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const contentVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 } },
  hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
};

const IndustrialDesigning = () => {
  return (
    <>
    <div className="min-h-screen pt-32 py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/1191609321/photo/graphic-designer-drawing-sketches-logo-design.jpg?s=612x612&w=0&k=20&c=UOJSXYUWaPwMa3urhbzmY7yuDiQUeKYIAMb08bNk2Sk=')] bg-cover opacity-10" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-800">
            Industrial Designing
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Crafting innovative, functional, and aesthetically pleasing industrial designs tailored to your needs.
          </p>
          {/* <Link
            to="/services"
            className="mt-6 inline-block bg-[#0c7c94] text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            Back to Services
          </Link> */}
        </motion.section>

        {/* Content Section */}
        <motion.section
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-[#0c7c94] mb-4">Our Approach</h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Our industrial designing process combines creativity with practicality. We start by understanding your project goals, followed by in-depth research into materials, ergonomics, and production feasibility. Our designs prioritize:
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Aesthetic appeal and brand alignment</li>
              <li>Cost-effective production methods</li>
              <li>User-centric functionality</li>
              <li>Sustainable material choices</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0c7c94] mb-2">Concept Development</h3>
              <p className="text-gray-700">
                We create initial sketches and 3D models to visualize your product, iterating based on feedback to ensure alignment with your vision.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0c7c94] mb-2">Prototyping & Testing</h3>
              <p className="text-gray-700">
                We build prototypes to test functionality, ergonomics, and durability, refining designs to meet industry standards.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default IndustrialDesigning;