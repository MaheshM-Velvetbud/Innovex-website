
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

// const cardVariants: Variants = {
//   hidden: { opacity: 0,  },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut', delay: 0.4 } },
//   hover: { scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', transition: { duration: 0.3 } },
// };

const BusinessDevelopment = () => {
  return (
    <>
    <div className="min-h-screen py-16 pt-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/1339953021/photo/business-strategy-for-marketing-and-management.jpg?s=612x612&w=0&k=20&c=2srQpyzZAIv5YBlIkCitYxOKYIQZjia5ZCp3pqsdVtM=')] bg-cover opacity-10" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Hero Section */}
        <motion.section
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-800">
            Business Development
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Driving your business forward with strategic planning and growth-focused solutions.
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
            {/* <h2 className="text-2xl font-semibold text-[#0c7c94] mb-4">Our Growth Strategies</h2> */}
            <p className="text-gray-700 text-base sm:text-lg">
            At INNOVEX, our Business Development services are designed to help organizations grow with purpose, agility, and strategic clarity. We empower clients to expand their reach and impact through data-driven strategies, market insights, and tailored growth solutions. Our offerings include market research, competitive analysis, strategic partnership development, business model optimization, and growth opportunity identification — all aimed at unlocking new potential and driving sustainable success. Beyond growth strategies, we support Strategy & Organizational Development, helping businesses align their structure, culture, and goals for long-term resilience. We also guide Stakeholder Engagement & Communication to strengthen relationships and build trust across ecosystems. Committed to responsible progress, our team integrates ESG principles, sustainability frameworks, and social impact strategies to ensure that growth is not only profitable but also purposeful and future-ready.
            </p>
            {/* <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>Market research and competitive analysis</li>
              <li>Strategic partnership development</li>
              <li>Business model optimization</li>
              <li>Growth opportunity identification</li>
            </ul> */}
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="bg-white bg-opacity-90 backdrop-blur-md rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#0c7c94] mb-2">Market Expansion</h3>
              <p className="text-gray-700">
                Identify new markets and customer segments to grow your business with targeted strategies.
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
              <h3 className="text-xl font-semibold text-[#0c7c94] mb-2">Partnership Building</h3>
              <p className="text-gray-700">
                Forge strategic alliances to enhance your market presence and operational capabilities.
              </p>
            </motion.div>
          </div> */}
        </motion.section>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BusinessDevelopment;