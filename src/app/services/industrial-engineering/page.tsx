"use client"
import React from 'react';
import Link from "next/link";
import { motion, Variants } from 'framer-motion';
import Footer from '@/Components/Footer/Footer';

// Animation variants
const heroVariants: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const timelineVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.3 },
  }),
  hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 255, 255, 0.3)', transition: { duration: 0.3 } },
};

const IndustrialEngineering = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-900 pt-32 text-white relative overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-[url('/Images/enginerbg.jpg')] bg-cover bg-center opacity-20"
        style={{
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            Industrial Engineering
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-cyan-200 max-w-3xl mx-auto">
            Transforming industrial operations through innovative engineering solutions, optimizing efficiency, sustainability, and performance
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-cyan-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </motion.section>

        {/* Our Process Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-8">
            Our Process
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto text-center">
            Our industrial engineering approach integrates advanced methodologies, data-driven insights, and sustainable practices. We follow a structured process to ensure optimal outcomes:
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-300 max-w-4xl mx-auto space-y-2">
            <li>Analyze: Assess current systems and identify inefficiencies.</li>
            <li>Design: Develop tailored solutions for process and system optimization.</li>
            <li>Implement: Deploy solutions with minimal disruption to operations.</li>
            <li>Monitor: Track performance and refine for continuous improvement.</li>
          </ul>
        </motion.section>

        {/* Key Services Timeline */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 text-center mb-12">
            Key Services
          </h2>
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-cyan-500 h-full opacity-50" />
          {[
            {
              title: 'Process Optimization',
              description: 'Streamline workflows to reduce waste, lower costs, and boost productivity using lean methodologies and data analytics.',
            },
            {
              title: 'System Design',
              description: 'Design integrated, scalable systems that enhance operational efficiency and adaptability to industry demands.',
            },
            {
              title: 'Operational Analysis',
              description: 'Leverage data-driven insights to identify bottlenecks, improve throughput, and ensure robust performance.',
            },
            {
              title: 'Lean Manufacturing',
              description: 'Implement lean principles to eliminate inefficiencies and create value-driven production processes.',
            },
            {
              title: 'Sustainability Initiatives',
              description: 'Integrate eco-friendly practices to reduce environmental impact while maintaining operational excellence.',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className={`relative bg-gray-800 bg-opacity-80 rounded-lg p-6 mb-8 max-w-md ${
                index % 2 === 0 ? 'ml-auto' : 'mr-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-cyan-500 rounded-full" />
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
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
                title: 'Factory Workflow Optimization',
                description: 'Reduced production downtime by 30% for a manufacturing client through process reengineering and automation.',
              },
              {
                title: 'Sustainable System Design',
                description: 'Designed an energy-efficient production system, cutting energy costs by 25% while meeting environmental standards.',
              },
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                variants={timelineVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gray-800 bg-opacity-80 rounded-lg p-6"
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
            Why Choose Innovex?
          </h2>
          <div className="text-gray-300 text-base sm:text-lg max-w-4xl mx-auto text-center">
            <p>
              Innovex combines global expertise with a deep understanding of Oman’s industrial landscape. Our team delivers:
            </p>
            <ul className="mt-6 list-disc list-inside space-y-2">
              <li>Proven methodologies tailored to your industry.</li>
              <li>Commitment to sustainability and Oman Vision 2040 goals.</li>
              <li>Data-driven solutions for measurable results.</li>
              <li>End-to-end support from analysis to implementation.</li>
            </ul>
          </div>
        </motion.section> */}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default IndustrialEngineering;