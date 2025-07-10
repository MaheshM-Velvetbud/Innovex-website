"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Services data
const services = [
  {
    title: 'Technical Consultancy',
    description: 'We generate tailored design and technical solutions to meet your project requirements, ensuring cost-effectiveness, high quality, and efficiency. Our team evaluates solutions to align with your needs before implementation.',
    icon: '🛠️',
  },
  {
    title: 'Industrial / Product Designing',
    description: 'We design innovative concepts based on your demands, considering production cost, aesthetics, usability, and material choices. Our services include animation, physical, and digital analysis, with a focus on:',
    subpoints: [
      'Manufacturable products and parts design',
      'Process-line and factories design',
      'Machine selection design',
    ],
    icon: '🎨',
  },
  {
    title: 'Prototyping',
    description: 'We transform designs into tangible prototypes to test and refine, ensuring the final product meets your requirements. Prototyping enhances quality and specifications through:',
    subpoints: [
      'Early error detection',
      'Reduced time and costs',
      'Improved user involvement',
    ],
    icon: '🔬',
  },
  {
    title: 'Link to Manufacturing',
    description: 'Move your product from prototype to production with our strategic manufacturing solutions. We design a solid plan to bring your product to market, sourcing the right machinery suppliers, ensuring safe equipment delivery, and coordinating with suppliers for success.',
    icon: '🏭',
  },
];

// Animation variants
const heroVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: 'easeOut' as const }
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: 'easeOut' as const, delay: i * 0.4 },
  }),
  hover: {
    y: -5,
    boxShadow: '0 8px 16px rgba(12, 124, 148, 0.3)',
    transition: { duration: 0.3, ease: 'easeOut' as const },
  },
};

const ServicesPage = () => {
  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('/Images/image.png')`,
      }}
    >
      {/* Black overlay for background image */}
      <div className="absolute inset-0 bg-white bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-200">
            Innovex Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Empower your business with our innovative services, from technical consultancy to advanced prototyping, crafted to deliver exceptional results.
          </p>
        </motion.section>

        {/* Timeline Section */}
        <motion.section className="relative space-y-12">
          {/* Central timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-[#0c7c94] h-full opacity-50" />
          
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className={`relative bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg p-6 sm:p-8 border-l-4 border-[#0c7c94] max-w-lg mx-auto ${
                index % 2 === 0 ? 'lg:mr-auto lg:ml-16' : 'lg:ml-auto lg:mr-16'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#0c7c94] rounded-full" />
              
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl bg-gradient-to-r from-[#0c7c94] to-gray-200 rounded-full p-3">
                  {service.icon}
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0c7c94] text-center mb-4">
                {service.title}
              </h2>
              <p className="text-gray-100 text-sm sm:text-base mb-4">{service.description}</p>
              {service.subpoints && (
                <ul className="text-gray-100 list-disc list-inside text-sm sm:text-base">
                  {service.subpoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default ServicesPage;