"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FaBolt, FaTools, FaCogs, FaWrench, FaTachometerAlt } from "react-icons/fa";
import Footer from "@/Components/Footer/Footer";

const HomePage = () => {
  // Explicitly type containerVariants as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut", // This is a valid easing function
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  const services = [
    { icon: <FaBolt />, title: "LV/MV Electrical Installations", description: "Complete electrical systems for buildings, facilities, and public infrastructure." },
    { icon: <FaTools />, title: "MEP Contracting", description: "Turnkey mechanical, electrical, and plumbing works, delivered in full compliance with national standards." },
    { icon: <FaCogs />, title: "Substation & Cabling Solutions", description: "Design, supply, and installation of substations, panels, and underground cabling." },
    { icon: <FaWrench />, title: "Preventive & Corrective Maintenance", description: "Scheduled servicing and emergency fault response for critical assets." },
    { icon: <FaTachometerAlt />, title: "Energy System Upgrades", description: "Panel refurbishments, power audits, and smart electrical modernization." },
  ];

  const workflowSteps = [
    "Site Survey & Technical Assessment",
    "Detailed Design & Load Planning",
    "Procurement & Equipment Setup",
    "Installation & Commissioning by Certified Engineers",
    "Quality Testing, Safety Checks & Handover",
    "After-Sales Support & Annual Maintenance Contracts (AMC)",
  ];

  const industries = [
    "Government Infrastructure (MOE, ROP)",
    "Industrial Units & Warehouses",
    "Corporate Offices & Commercial Centers",
    "Hospitality & Tourism Properties",
    "Religious & Educational Institutions",
  ];

  const highlights = [
    "Royal Oman Police (ROP) – Installation & system maintenance",
    "Ministry of Education (MOE) – Electrical works for school expansions",
    "Dhofar Beverages & Foodstuff Co. – System upgrades & MEP",
    "Hospitality Sector – Anantara Resort, Al Baleed Hotel, and more",
    "Oman Air, Shell Oman, OQIC – Engineering consultancy & fit-outs",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-gray-600 to-blue-400 text-white py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ⚡ Electrical Contracting & Maintenance
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Certified MEP Solutions Delivered with Omani Precision
          </motion.p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Quick Overview</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            INNOVEX provides high-quality electrical and electromechanical contracting services designed for Oman’s public, private, and industrial sectors. Our certified Omani team has successfully delivered projects across government institutions, hospitality, schools, and commercial buildings.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Workflow Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Project Workflow</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <div className="bg-white p-4 rounded-lg shadow-md relative">
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full -left-2"></div>
                    <h3 className="text-lg font-semibold">{`${index + 1}. ${step}`}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Industries Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="p-4 bg-blue-100 rounded-lg text-center"
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-gray-800 font-medium">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Highlights Section */}
      <motion.section
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Experience Highlights</h2>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-gray-700 space-y-4">
            {highlights.map((highlight, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {highlight}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;