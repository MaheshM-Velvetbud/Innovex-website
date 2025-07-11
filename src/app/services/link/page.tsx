"use client"

import React from 'react';
import { motion, Variants } from 'framer-motion';

// Animation variants
const heroVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.2 },
  }),
  hover: { scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)', transition: { duration: 0.3 } },
};

const LinkToManufacturing = () => {
  return (
    <div
      className="min-h-screen py-16 pt-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f35678d')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0  bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-600">
          Manufacturing Expertise
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
            Bridging the gap from prototype to production with strategic solutions for seamless manufacturing and market success.
          </p>
          <a
            href="/services"
            className="mt-6 inline-block bg-[#0c7c94]text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors duration-300"
          >
            Back to Services
          </a>
        </motion.section>

        {/* Our Approach Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row gap-8"
        >
          <div className="md:w-1/2 bg-gray-900 bg-opacity-80 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#0c7c94] mb-6">Our Approach</h2>
            <p className="text-gray-300 text-base sm:text-lg">
              We streamline the transition from prototype to production by partnering with manufacturers, optimizing supply chains, and ensuring quality control. Our process ensures your product reaches the market efficiently and competitively.
            </p>
            <ul className="mt-6 list-disc list-inside text-gray-300 space-y-2">
              <li>Manufacturer Sourcing: Identify and partner with reliable manufacturers.</li>
              <li>Process Integration: Align prototyping with production requirements.</li>
              <li>Quality Assurance: Implement rigorous testing for market-ready products.</li>
              <li>Market Strategy: Plan for successful product launch and scalability.</li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-gray-900 bg-opacity-80 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-[#0c7c94] mb-6">Our Commitment</h2>
            <p className="text-gray-300 text-base sm:text-lg">
              We are dedicated to ensuring your product’s success by bridging design and manufacturing with precision and strategic foresight.
            </p>
          </div>
        </motion.section>

        {/* Key Services Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c7c94] text-center mb-8">
            Key Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              {
                title: 'Manufacturer Sourcing',
                description: 'Connect with trusted manufacturers to ensure quality and cost-effective production.',
              },
              {
                title: 'Supply Chain Optimization',
                description: 'Streamline logistics and sourcing to reduce costs and improve efficiency.',
              },
              {
                title: 'Production Planning',
                description: 'Develop detailed plans to transition prototypes to full-scale production.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gray-900 bg-opacity-80 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-[#0c7c94] mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Case Studies Section */}
        {/* <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c7c94] text-center mb-8">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Consumer Electronics Launch',
                description: 'Facilitated production for a new gadget, reducing time-to-market by 20%.',
              },
              {
                title: 'Industrial Equipment Scale-Up',
                description: 'Partnered with manufacturers to produce heavy machinery, ensuring quality and compliance.',
              },
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gray-900 bg-opacity-80 rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold text-[#0c7c94] mb-2">{caseStudy.title}</h3>
                <p className="text-gray-300">{caseStudy.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* Why Choose Us Section */}
        {/* <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-red-500 text-center mb-8">
            Why Choose Innovex?
          </h2>
          <div className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto text-center">
            <p>
              Innovex ensures your product moves seamlessly from prototype to market with:
            </p>
            <ul className="mt-6 list-disc list-inside space-y-2">
              <li>Extensive network of trusted manufacturing partners.</li>
              <li>Expertise in aligning design with production needs.</li>
              <li>Commitment to quality and regulatory compliance.</li>
              <li>Strategic planning for market success and scalability.</li>
            </ul>
          </div>
        </motion.section> */}
      </div>
    </div>
  );
};

export default LinkToManufacturing;