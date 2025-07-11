"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Services data
const services = [
  {
    title: 'Industrial Engineering',
    description: 'We optimize complex systems and processes, enhancing efficiency, productivity, and sustainability in industrial operations. Our expertise includes process engineering, system design, and operational analysis.',
    icon: '🎨',
    link: '/services/industrial-engineering',
  },
  {
    title: 'IT Services',
    description: 'Our IT services provide comprehensive solutions, including software development, cloud integration, and cybersecurity. We tailor our offerings to enhance your business’s technological capabilities and efficiency.',
    icon: '💻',
    link: '/services/itservice',
  },
  {
    title: 'Business Development',
    description: 'We drive your business growth through strategic planning, market analysis, and partnership building. Our team helps you identify opportunities and develop actionable strategies to achieve your goals.',
    icon: '📈',
    link: '/services/business-development',
  },
  {
    title: 'Training',
    description: 'Our training programs empower your team with the skills and knowledge needed to excel. We offer customized workshops and courses in technical, leadership, and industry-specific domains.',
    icon: '📚',
    link: '/services/training',
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
            Empower your business with our innovative services, from industrial designing to comprehensive training, crafted to deliver exceptional results.
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
              <a
                href={service.link}
                className="inline-block bg-white text-black border border-gray-300 rounded-md px-4 py-2 text-sm sm:text-base hover:text-[#0c7c94] transition-colors duration-300"
              >
                Discover More
              </a>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </div>
  );
};

export default ServicesPage;