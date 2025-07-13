"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import Footer from '@/Components/Footer/Footer';
import OmanVision2040Section from '@/Components/Omanvision';
import Moving from '@/Components/Moving/Moving';

// Company values or highlights
const values = [
  {
    title: 'Technical Innovation',
    description: 'We deliver cutting-edge technical consultancy and AI/ML solutions to drive transformative business outcomes.',
    icon: '💡',
  },
  {
    title: 'Design Excellence',
    description: 'Our expertise in industrial and product design creates innovative, user-centered solutions that stand out.',
    icon: '🎨',
  },
  {
    title: 'Manufacturing Expertise',
    description: 'We bridge the gap from prototype to production, ensuring seamless manufacturing processes and market success.',
    icon: '🏭',
  },
];

// Leadership data
const leadership = [
  {
    name: 'Yaqeen Alkhathri',
    title: 'Founder & CEO',
    description: 'With over 20 years of experience in industrial design and technical consultancy, John leads Innovex with a vision for innovation and excellence, driving transformative solutions aligned with Oman Vision 2040.',
    image: '/Images/yaqeen.jpg',
  },
  {
    name: 'Riaz Ahmed',
    title: 'IT Consultant',
    description: 'As the founder of Innovex, Jane pioneered a human-centric approach to design and technology, building a legacy of creativity and progress that empowers industries across Oman.',
    image: 'https://static.vecteezy.com/system/resources/thumbnails/001/840/612/small/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg',
  },

 
  {
    name: 'Muna Al Shukaili',
    title: 'Business Consultant',
    description: 'As the founder of Innovex, Jane pioneered a human-centric approach to design and technology, building a legacy of creativity and progress that empowers industries across Oman.',
    image: '/Images/muna.jpg',
  },
];

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

const AboutUsPage = () => {
  return (
    <>
    <div
      className="min-h-screen py-16 pt-32 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url('')`,
      }}
    >
      {/* Black overlay for background image only */}
      <div className="absolute inset-0 bg-white bg-opacity-20" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-200">
            About Innovex
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700">
          INNOVEX is a Riyada-certified SME specialize in delivering integrated solutions across Industrial Engineering, IT Services, Business Development, and Professional Training. Our industrial engineering expertise covers the full spectrum of product, system, and facility development — from innovation strategy and concept design to prototyping and final execution. In parallel, we offer cutting-edge IT services and strategic business consultancy to help organizations optimize performance, embrace digital transformation, and achieve sustainable growth. Our training programs are designed to build capabilities in both IT and business development, empowering professionals and teams with the skills needed to thrive in today’s competitive landscape. At INNOVEX, we blend technical excellence, cultural relevance, and forward-thinking strategy to create impactful solutions that drive progress and deliver lasting value.

          </p>
        </motion.section>
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-200 text-center mb-8">
            Our Leadership
          </h2>
          <div className="flex flex-col gap-8">
            {/* First Row: One Leader Centered */}
            <div className="flex justify-center">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center w-full max-w-md"
              >
                <img
                  src={leadership[0].image}
                  alt={leadership[0].name}
                  className="w-32 h-38 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{leadership[0].name}</h3>
                <p className="text-indigo-600 font-medium mb-2">{leadership[0].title}</p>
              </motion.div>
            </div>
            {/* Second Row: Two Leaders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {leadership.slice(1).map((leader, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                >
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-38 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-indigo-600 font-medium mb-2">{leader.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <OmanVision2040Section/>

        {/* Mission Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl py-12 px-6 mb-16"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
            Guided by our vision we shall deliver high-quality, cost-effective projects on schedule and enhance our client’s satisfaction through continuous improvement of our business practices in terms of creativity, safety, quality, service delivery as well as sound environmental awareness policies
            </p>
          </div>
        </motion.section>



        {/* <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-50 to-blue-100 rounded-2xl py-12 px-6 mb-16"
        >
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700">
            We see beyond problems and solutions. we see the insights as an opportunity to better human life.
            </p>
          </div>
        </motion.section> */}

        {/* Values Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-200 text-center mb-8">
          Choose Innovex for Futuristic Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-4 text-indigo-600">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
       

        {/* Expertise Section */}
        <motion.section
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0c7c94] to-gray-200 mb-8">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Innovex delivers a comprehensive suite of services, from technical consultancy and product design to manufacturing and advanced IT/AI solutions, all tailored to propel your business forward.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Technical Consultancy',
                description: 'Our expert consultants provide tailored IT strategies, technology assessments, and roadmaps to drive efficiency and innovation.',
              },
              {
                title: 'Industrial Designing',
                description: 'We create user-centered, innovative designs that blend aesthetics and functionality for standout products.',
              },
              {
                title: 'Prototyping',
                description: 'Transform concepts into tangible prototypes with our rapid prototyping services, validating designs for production.',
              },
              {
                title: 'Manufacturing Expertise',
                description: 'Move from prototype to production with strategic manufacturing solutions, sourcing machinery and ensuring market success.',
              },
              {
                title: 'IT Services',
                description: 'Streamline operations with robust IT solutions, including infrastructure management, cybersecurity, and software development.',
              },
              {
                title: 'AI/ML Solutions',
                description: 'Leverage predictive analytics, NLP, and automation to transform data into actionable business insights.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="bg-indigo-50 rounded-lg p-6 flex flex-col items-center text-center"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
      <Moving/>
    </div>
  
    <Footer/>
    </>
  );
};

export default AboutUsPage;