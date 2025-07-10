"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '@/Components/Footer/Footer';

// Service data
const services = [
  {
    title: 'IT Consulting',
    description: 'We provide expert IT consulting services to streamline operations, enhance efficiency, and implement cutting-edge technologies. Our tailored solutions align with your business goals to drive digital transformation through in-depth technology assessments, IT roadmaps, and best practices for efficiency and innovation.',
    icon: '🖥️',
  },
  {
    title: 'Software Development',
    description: 'Craft robust and scalable software solutions tailored to your business needs. Our expertise spans custom applications to complex enterprise systems, ensuring high-quality, reliable software.',
    icon: '💻',
  },
  {
    title: 'Database Services',
    description: 'Secure, manage, and optimize your data with our comprehensive database services. We ensure seamless performance and reliability across various database platforms.',
    icon: '🗄️',
  },
  {
    title: 'Cybersecurity Solutions',
    description: 'Protect your business from cyber threats with state-of-the-art cybersecurity services, including network security, threat detection, data encryption, and compliance management.',
    icon: '🔒',
  },
  {
    title: 'ERP Implementation',
    description: 'End-to-end ERP consultation for CRM, Invoicing, HR, Accounting, Sales, Inventory, MRP, Projects, and DMS. Our Odoo specialists deliver tailored ERP solutions.',
    icon: '📊',
  },
  {
    title: 'Data Engineering',
    description: 'Build robust Big Data platforms for analytics and machine learning to empower data-driven decision-making.',
    icon: '📈',
  },
  {
    title: 'Custom Reporting',
    description: 'Develop advanced reporting solutions using tools like Metabase, Superset, or Power BI for insightful and actionable business intelligence.',
    icon: '📋',
  },
  {
    title: 'SQL & Database Optimization',
    description: 'Scale database systems with query optimization, indexing strategies, and performance tuning for databases like PostgreSQL, Oracle, and ClickHouse.',
    icon: '⚙️',
  },
  {
    title: 'Application Refactoring',
    description: 'Enhance scalability and performance through expert application refactoring tailored to your business needs.',
    icon: '🔄',
  },
  {
    title: 'Data Security',
    description: 'Implement robust data security measures for on-premise Odoo deployments to safeguard your critical business data.',
    icon: '🛡️',
  },
  {
    title: 'IT Infrastructure Management',
    description: 'We handle everything from network setup to server maintenance and ongoing system monitoring to ensure robust and reliable IT infrastructure.',
    icon: '🌐',
  },
  {
    title: 'Data Analytics & Visualization',
    description: 'Turn your data into actionable insights with our data analytics services. We provide data visualization, reporting, and business intelligence solutions to support data-driven decision-making.',
    icon: '📉',
  },
  {
    title: 'DevOps & Automation',
    description: 'Speed up development cycles and improve collaboration with our DevOps services. We implement continuous integration, delivery, and automation to streamline your software development processes.',
    icon: '🚀',
  },
];

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  hover: { 
    scale: 1.05, 
    transition: { duration: 0.3 }
  },
};

const ServicePage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen py-12 pt-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-200 sm:text-4xl">Our Services</h1>
            <p className="mt-4 text-lg text-gray-600">
              Discover our comprehensive range of IT solutions designed to empower your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-xl font-semibold text-[#0c7c94] mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicePage;