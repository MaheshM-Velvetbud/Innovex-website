"use client";

import React from 'react';
import Link from "next/link";
import { motion, Variants } from 'framer-motion';
import Footer from '@/Components/Footer/Footer';

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
  hidden: { opacity: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 } },
  hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
};

const Cybersecurity = () => {
  return (
    <>
      <div className="min-h-screen py-16 pt-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-300 relative overflow-hidden">
        {/* Decorative background elements */}
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b')] bg-cover opacity-10"
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Hero Section */}
          <motion.section
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-800">
              Cybersecurity Training
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
              Equip your team with cutting-edge cybersecurity skills to protect your organization and drive secure innovation, aligned with Oman Vision 2040.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block bg-[#0c7c94] text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Back to Home
            </Link>
          </motion.section>

          {/* Content Section */}
          <motion.section
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Our Approach */}
            <div className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[#0c7c94] mb-4">Our Approach</h2>
              <p className="text-gray-700 text-base sm:text-lg">
                Innovex’s cybersecurity training programs empower your team with practical, industry-relevant skills to safeguard your organization. Our approach combines hands-on learning, real-world simulations, and tailored content to address your unique security challenges.
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-700">
                <li>Assessment: Identify your team’s cybersecurity skill gaps and organizational risks.</li>
                <li>Customization: Develop training modules tailored to your industry and technology stack.</li>
                <li>Hands-On Delivery: Engage participants with simulations, penetration testing labs, and practical exercises.</li>
                <li>Continuous Learning: Provide resources and follow-up support to ensure long-term security proficiency.</li>
              </ul>
            </div>

            {/* Key Training Programs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Threat Detection & Response',
                  description: 'Learn to identify, analyze, and mitigate cyber threats using advanced tools and techniques.',
                },
                {
                  title: 'Secure Coding Practices',
                  description: 'Master secure software development to build applications resilient to cyber attacks.',
                },
                {
                  title: 'Cloud Security',
                  description: 'Gain expertise in securing cloud environments, including AWS, Azure, and hybrid setups.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-[#0c7c94] mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cybersecurity;