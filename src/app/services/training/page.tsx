"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Link from "next/link";
import Footer from '@/Components/Footer/Footer';

// Animation variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 },
  }),
  hover: {
    scale: 1.1,
    rotate: 2,
    boxShadow: '0 12px 24px rgba(0, 255, 255, 0.3)',
    transition: { duration: 0.3 },
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Training = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-900 pt-32 text-white relative overflow-hidden">
        {/* Parallax background */}
        <div
          className="absolute inset-0 bg-[url('https://img.freepik.com/free-photo/medium-shot-people-chatting-table_23-2149304763.jpg?semt=ais_hybrid&w=740')] bg-cover bg-center opacity-20"
          style={{
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
          }}
        />

        {/* Header Section */}
        <motion.header
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Training Programs
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-cyan-200 max-w-3xl mx-auto">
            Empower your team with specialized training in industrial engineering, IT services, and business development, designed to drive innovation and align with Oman Vision 2040.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-cyan-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-colors duration-300"
          >
            Back to Services
          </Link>
        </motion.header>

        {/* Content Section */}
        <section className="relative z-10 max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Key Training Programs */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-8">
              Key Training Programs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Industrial Engineering Training',
                  description: 'Equip your team with skills in process optimization, lean manufacturing, and system design to enhance operational efficiency.',
                  icon: '⚙️',
                },
                {
                  title: 'IT Services Training',
                  description: 'Master software development, cybersecurity, and cloud computing through hands-on workshops tailored to your IT needs.',
                  icon: '💻',
                },
                {
                  title: 'Business Development Training',
                  description: 'Develop strategic planning and market analysis skills to drive growth and build effective partnerships.',
                  icon: '📈',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="bg-gray-800 bg-opacity-80 rounded-full p-8 flex flex-col items-center text-center border border-cyan-500"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">{item.title}</h3>
                  <p className="text-gray-300 text-base">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Our Approach Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-8">
              Our Approach
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto text-center">
              At Innovex, our training programs are designed to deliver practical, industry-relevant skills through a customized, hands-on approach. We align our content with your business goals and Oman Vision 2040, ensuring measurable outcomes.
            </p>
            <ul className="mt-6 list-disc list-inside text-gray-300 max-w-4xl mx-auto space-y-2">
              <li>Assessment: Identify your team’s skill gaps and business needs.</li>
              <li>Customization: Tailor programs to address specific industry challenges.</li>
              <li>Delivery: Engage participants with interactive workshops and real-world scenarios.</li>
              <li>Support: Provide ongoing resources to ensure skill application and success.</li>
            </ul>
          </motion.section>

          {/* Case Studies Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-8">
              Case Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Industrial Efficiency Workshop',
                  description: 'Trained a manufacturing team in lean principles, reducing waste by 25% and improving production efficiency.',
                },
                {
                  title: 'Cybersecurity Training Program',
                  description: 'Equipped an IT team with advanced cybersecurity skills, reducing security incidents by 40%.',
                },
                {
                  title: 'Strategic Growth Training',
                  description: 'Empowered a sales team with market analysis skills, leading to a 15% increase in partnerships.',
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
                  className="bg-gray-800 bg-opacity-80 rounded-lg p-6 border border-cyan-500"
                >
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-300">{caseStudy.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Why Choose Us Section */}
          {/* <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-8">
              Why Choose Innovex Training?
            </h2>
            <div className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto text-center">
              <p>
                Innovex’s training programs are crafted to empower your team with the skills needed to excel in industrial engineering, IT services, and business development. We offer:
              </p>
              <ul className="mt-6 list-disc list-inside space-y-2">
                <li>Industry-specific curricula aligned with Oman’s industrial and technological goals.</li>
                <li>Expert instructors with extensive experience in their fields.</li>
                <li>Interactive, hands-on learning environments for maximum engagement.</li>
                <li>Continuous support to ensure skills translate into real-world results.</li>
                <li>Focus on sustainability and innovation, supporting Oman Vision 2040.</li>
              </ul>
            </div>
          </motion.section> */}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Training;