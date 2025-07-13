"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
  title: "Contact Innovex | Connect for IT & AI/ML Solutions",
  description: "Get in touch with Innovex to explore our cutting-edge IT and AI/ML solutions. From consulting to software development, our team is ready to help you achieve your business goals.",
  keywords: "Contact Innovex, IT Solutions, AI/ML Services, Software Development, Technology Consultation, Request a Quote, Customer Support, Innovex IT",
};

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

const ContactPage = () => {
  return (
    <div
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGgRrCrvmBLIjOau6J2EIlGK_gAfhOUrq-Q&s')`,
      }}
    >
      {/* Black overlay for background image */}
      <div className="absolute inset-0 bg-white bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-200">
            Connect with Innovex
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Reach out to our expert team to discuss how Innovex can transform your business with tailored IT and AI/ML solutions. We’re here to help you innovate and grow.
          </p>
        </motion.section>

        {/* Contact Form and Info Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-[#0c7c94] mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-100 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-1 p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0c7c94]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-100 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-1 p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0c7c94]"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-100 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full mt-1 p-3 rounded-md bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0c7c94]"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#0c7c94] text-white rounded-md hover:bg-[#0a6a80] transition-colors"
              >
                Submit
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl p-8"
          >
            <h2 className="text-2xl font-semibold text-[#0c7c94] mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-100 text-sm lg:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-4 text-[#0c7c94]"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Innovex Tower, 123 Tech Lane,
                  <br />
                  Dubai, UAE
                  <br />
                  Plus Code: X789+QR Dubai
                </span>
              </p>
              <p className="flex items-center text-gray-100 text-sm lg:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-4 text-[#0c7c94]"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span> ‪+968 90605550 </span>
              </p>
              <p className="flex items-center text-[#0c7c94] underline text-sm lg:text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-4 text-[#0c7c94]"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <a href="mailto:Yaqeen@innovex-om.com">Yaqeen@innovex-om.com</a>
              </p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;