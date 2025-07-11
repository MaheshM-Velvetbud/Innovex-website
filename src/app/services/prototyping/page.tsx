"use client"
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '@/Components/Footer/Footer';

// Animation variants
const heroVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, rotateY: 90 },
  visible: (i: number) => ({
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.2 },
  }),
  hover: { scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
};

const Prototyping = () => {
  return (
    <>
    <div
      className="min-h-screen py-16 pt-32 px-4 sm:px-6 lg:px-8  relative overflow-hidden"
      style={{
        backgroundImage: `url('https://dienamics.com.au/wp-content/uploads/2022/05/shutterstock_1488283094-1.jpg')`,
      }}
    >
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-800">
            Prototyping
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto">
            Transforming ideas into tangible prototypes with rapid iteration and precision to validate designs and accelerate innovation.
          </p>
          <a
            href="/services"
            className="mt-6 inline-block bg-gray-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-500 transition-colors duration-300"
          >
            Back to Services
          </a>
        </motion.section>

        {/* Our Approach Section */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c7c94] text-center mb-8">
            Our Approach
          </h2>
          <p className="text-gray-800 text-base sm:text-lg max-w-4xl mx-auto text-center">
            Our prototyping process combines creativity, technology, and precision to bring concepts to life. We focus on rapid iteration, user feedback, and manufacturability to ensure your ideas are ready for the next step.
          </p>
          <ul className="mt-6 list-disc list-inside text-gray-800 max-w-4xl mx-auto space-y-2">
            <li>Concept Sketching: Create initial designs to visualize ideas.</li>
            <li>Rapid Prototyping: Build functional models using advanced tools.</li>
            <li>Testing & Feedback: Validate designs with real-world testing.</li>
            <li>Refinement: Iterate based on feedback for optimal results.</li>
          </ul>
        </motion.section>

        {/* Key Services Section */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-o text-center mb-8">
            Key Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '3D Modeling',
                description: 'Create detailed digital prototypes using advanced CAD software for precise visualization.',
              },
              {
                title: 'Rapid Prototyping',
                description: 'Leverage 3D printing and CNC machining to produce functional prototypes quickly.',
              },
              {
                title: 'User Testing',
                description: 'Conduct usability tests to ensure prototypes meet user needs and expectations.',
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
                className="bg-white rounded-lg p-6 shadow-lg text-center"
              >
                <h3 className="text-xl font-semibold text-[#0c7c94] mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Case Studies Section */}
        <motion.section
          variants={heroVariants}
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
                title: 'Medical Device Prototype',
                description: 'Developed a functional prototype for a medical device, reducing design iteration time by 40%.',
              },
              {
                title: 'Automotive Component',
                description: 'Created a high-precision prototype for an automotive part, validated through rigorous testing.',
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
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#0c7c94] mb-2">{caseStudy.title}</h3>
                <p className="text-gray-600">{caseStudy.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c7c94] text-center mb-8">
            Why Choose Innovex?
          </h2>
          <div className="text-gray-800 text-base sm:text-lg max-w-4xl mx-auto text-center">
            <p>
              Innovex’s prototyping services are designed to accelerate innovation and ensure quality. We offer:
            </p>
            <ul className="mt-6 list-disc list-inside space-y-2">
              <li>State-of-the-art prototyping technologies.</li>
              <li>Collaborative approach with client feedback at every step.</li>
              <li>Alignment with industry standards and Oman Vision 2040.</li>
              <li>Fast turnaround for rapid market entry.</li>
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Prototyping;