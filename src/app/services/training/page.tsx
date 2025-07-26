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
            Elevate your workforce with cutting-edge training in IT, digital transformation, and business management, tailored to drive innovation and support Oman Vision 2040.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block bg-cyan-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-colors duration-300"
          >
            Back to home
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
                  title: 'Core Programming & Development',
                  description: 'Master modern programming languages and frameworks to build robust, scalable applications.',
                  icon: '💻',
                },
                {
                  title: 'Microsoft Power Platform & Data Analytics',
                  description: 'Leverage Power BI, Power Apps, and Power Automate for data-driven insights and automation.',
                  icon: '📊',
                },
                {
                  title: 'Oracle Ecosystem (Specialized Focus)',
                  description: 'Deep dive into Oracle technologies for database management and enterprise solutions.',
                  icon: '🗄️',
                },
                {
                  title: 'System Administration & DevOps',
                  description: 'Learn to manage IT infrastructure and streamline deployments with DevOps practices.',
                  icon: '🛠️',
                },
                {
                  title: 'Cybersecurity',
                  description: 'Develop skills to protect systems and data from cyber threats with advanced security techniques.',
                  icon: '🔒',
                },
                {
                  title: 'Enterprise Resource Planning',
                  description: 'Implement and optimize ERP systems to enhance business efficiency and integration.',
                  icon: '🏢',
                },
                {
                  title: 'Software Services',
                  description: 'Explore software lifecycle management, from design to deployment, for seamless solutions.',
                  icon: '⚙️',
                },
                {
                  title: 'Business Intelligence',
                  description: 'Transform data into actionable insights with advanced BI tools and strategies.',
                  icon: '📈',
                },
                {
                  title: 'Cloud Computing',
                  description: 'Master cloud platforms like AWS, Azure, and GCP for scalable, secure infrastructure.',
                  icon: '☁️',
                },
                {
                  title: 'IT Governance',
                  description: 'Learn frameworks like ITIL and COBIT to align IT with business objectives.',
                  icon: '📋',
                },
                {
                  title: 'Digital Marketing',
                  description: 'Boost brand presence with SEO, social media, and content marketing strategies.',
                  icon: '📣',
                },
                {
                  title: 'Professional Development & Business Management',
                  description: 'Enhance leadership, strategic planning, and project management skills for business success.',
                  icon: '👥',
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
                  className="bg-gray-800 bg-opacity-80 rounded-lg p-8 flex flex-col items-center text-center border border-cyan-500"
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
              At Innovex, our training programs deliver practical, industry-aligned skills through a tailored, hands-on approach. We align with your business objectives and Oman Vision 2040 to drive measurable results.
            </p>
            <ul className="mt-6 list-disc list-inside text-gray-300 max-w-4xl mx-auto space-y-2">
              <li>Assessment: Evaluate your team’s skill gaps and organizational goals.</li>
              <li>Customization: Design programs to tackle specific industry challenges.</li>
              <li>Delivery: Engage learners with interactive workshops and real-world scenarios.</li>
              <li>Support: Provide ongoing resources to ensure successful skill application.</li>
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
                  title: 'Digital Transformation with Microsoft Power Platform',
                  description: 'Trained a team to leverage Power Apps and Power BI, improving operational efficiency by 30%.',
                },
                {
                  title: 'Cybersecurity Enhancement Program',
                  description: 'Equipped an IT department with advanced cybersecurity skills, reducing vulnerabilities by 45%.',
                },
                {
                  title: 'Cloud Migration Workshop',
                  description: 'Guided a company through AWS adoption, cutting infrastructure costs by 20%.',
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
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Training;