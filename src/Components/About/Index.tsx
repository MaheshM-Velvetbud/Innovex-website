"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Company values or highlights
const values = [
  {
    title: 'Technical Innovation',
    description: 'We deliver cutting-edge technical consultancy and AI/ML solutions to drive transformative business outcomes.',
    icon: '💡',
  },
  {
    title: 'Design Excellence',
    description: 'Our expertise in industrial and product design creates innovative, user-centered solutions that stand out.',
    icon: '🎨',
  },
  {
    title: 'Seamless Transition to Manufacturing',
    description: 'We bridge the gap from prototype to production, ensuring seamless manufacturing processes and market success.',
    icon: '🏭',
  },
];

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

const AboutUsPage = () => {
  return (
    <div
      className="min-h-screen py-16 pt-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('')`,
      }}
    >
      {/* Black overlay for background image only */}
      <div className="absolute inset-0 bg-white bg-opacity-20" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-200">
            About Innovex
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
          Innovex is a leading industrial design and technical consulting firm in Oman, delivering innovative solutions in Industrial Engineering, IT Services,Business Development,Prototyping, Cybersecurity ,Training Our expert team of designers, engineers, and specialists transforms ideas into reality, from concept to production, creating impactful experiences for clients and stakeholders. Aligned with Oman Vision 2040 we drive economic competitiveness and social well-being through cutting-edge design, technology, and strategic growth
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section


          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl py-12 px-6 mb-16"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              Guided by our vision we shall deliver high-quality, cost-effective projects on schedule and enhance our client’s satisfaction through continuous improvement of our business practices in terms of creativity, safety, quality, service delivery as well as sound environmental awareness policies
            </p>
          </div>
        </motion.section>

        {/* Vision Section */}
        {/* <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl py-12 px-6 mb-16"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700">
            At Innovex, we harness insights and innovation to create transformative solutions that empower human progress, drive economic excellence, and contribute to a thriving, sustainable Oman by 2040.
            </p>
          </div>
        </motion.section> */}

        {/* Values Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-200 text-center mb-8">
          Choose Innovex for Futuristic Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4 text-indigo-600">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Discover More Link */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <a
            href="/about"
            className="inline-block bg-[#0c7c94] text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            Discover More About Us
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUsPage;