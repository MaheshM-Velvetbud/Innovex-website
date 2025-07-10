"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '@/Components/Footer/Footer';

// AI/ML Service data
const services = [
  {
    title: 'Machine Learning - Automate Tasks',
    description: 'Develop intelligent systems that learn from data to automate repetitive tasks, freeing up your team to focus on high-value activities.',
    icon: '🤖',
  },
  {
    title: 'Personalized Recommendations',
    description: 'Create tailored recommendations for your customers based on their preferences and behavior, enhancing user engagement and satisfaction.',
    icon: '🎯',
  },
  {
    title: 'Natural Language Processing',
    description: 'Leverage NLP to analyze and understand human language, powering applications like chatbots and sentiment analysis for deeper insights.',
    icon: '🗣️',
  },
  {
    title: 'Predictive Analytics - Forecast Future Trends',
    description: 'Utilize advanced statistical models and machine learning to predict outcomes like customer churn, sales, and demand forecasting for informed decision-making.',
    icon: '📅',
  },
  {
    title: 'Make Informed Decisions',
    description: 'Gain a competitive edge by anticipating market trends and leveraging data-driven insights to make strategic business decisions.',
    icon: '💡',
  },
  {
    title: 'Present Data Clearly',
    description: 'Transform complex data into visually appealing, easy-to-understand visualizations to communicate insights effectively.',
    icon: '📊',
  },
];

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: 5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    transition: { 
      duration: 0.6, 
      ease: 'easeOut', 
      type: 'spring', 
      stiffness: 100 
    } 
  },
  hover: { 
    scale: 1.1, 
    rotate: -2, 
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)', 
    transition: { duration: 0.3 } 
  },
};

const AIMLServicesPage = () => {
  return (
    <>
      <div
        className="min-h-screen py-16 pt-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative pb-32"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-6012b0f65285?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        {/* Black overlay for background image only */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0c7c94] to-gray-200">
              Advanced AI/ML Solutions
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Harness the power of artificial intelligence and machine learning to transform your business with intelligent automation, predictive insights, and data-driven strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-8 flex flex-col items-center text-center transform transition-all duration-300"
              >
                <div className="text-5xl mb-6 bg-gradient-to-r from-[#0c7c94] to-gray-200 rounded-full p-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-[#0c7c94] mb-4">{service.title}</h2>
                <p className="text-gray-100">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AIMLServicesPage;