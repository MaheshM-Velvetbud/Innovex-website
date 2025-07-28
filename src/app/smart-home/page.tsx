"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FaLightbulb, FaFan, FaCamera, FaVideo, FaMusic, FaFire, FaNetworkWired, FaLock } from 'react-icons/fa';
import Footer from '@/Components/Footer/Footer';

const SmartHomePage = () => {
  // Explicitly type variants as Variants
  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const liftVariants: Variants = {
    hover: { y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', transition: { duration: 0.3 } },
  };

  const slideInVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const expandVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, backgroundColor: '#dbeafe', transition: { duration: 0.3 } },
  };

  const services = [
    { icon: <FaLightbulb className="text-3xl text-blue-400" />, title: 'Lighting & AC Control', description: 'Automated control systems for lighting and HVAC, optimized for comfort, scheduling, and energy saving.', image: 'https://img.archiexpo.com/images_ae/photo-mg/150797-19621187.jpg' },
    { icon: <FaFan className="text-3xl text-blue-400" />, title: 'Curtain & Blind Motors', description: 'Remote-controlled motorized curtains and blinds that respond to light, time, or user preferences.', image: 'https://www.somfy.co.in/common/img/library//400x235_cover/blinds-and-curtains.jpg' },
    { icon: <FaCamera className="text-3xl text-blue-400" />, title: 'CCTV Surveillance Systems', description: 'High-definition IP-based security cameras with real-time monitoring, storage, and mobile access.', image: 'https://thumbs.dreamstime.com/b/security-camera-mounted-building-exterior-cctv-surveillance-system-protects-smart-home-office-video-monitoring-modern-385722613.jpg' },
    { icon: <FaVideo className="text-3xl text-blue-400" />, title: 'Video Intercom & Door Control', description: 'Two-way video intercom systems integrated with smart locks, access control, and visitor management.', image: 'https://www.somfy.ma/common/img/library///1262x600/visiophone-domotique-1.jpg' },
    { icon: <FaMusic className="text-3xl text-blue-400" />, title: 'Smart Sound & AV Systems', description: 'Seamless in-room or multi-room audio integration for entertainment, announcements, and automation scenes.', image: 'https://nesautomation.com/wp-content/uploads/2024/12/The-Best-AV-Systems-for-Club-Lounges-and-Homes-in-Indore.jpg' },
    { icon: <FaFire className="text-3xl text-blue-400" />, title: 'Fire & Safety Systems', description: 'Smoke detectors, fire alarms, and emergency triggers linked to smart monitoring and alert systems.', image: 'https://assets.new.siemens.com/siemens/assets/api/uuid:18f6f25a-6600-44f4-9a1d-308438fecaac/width:1024/Siemens-Smart-Infrastructure-Cerberus-family.jpg' },
    { icon: <FaNetworkWired className="text-3xl text-blue-400" />, title: 'Building Networking & Wi-Fi Systems', description: 'End-to-end structured cabling and enterprise-grade networking solutions for seamless connectivity.', image: 'https://www.atom8.ai/assets/blog/wireless-technologies-in-home-automation-and-security/zigbee_zwave_mesh.png' },
    { icon: <FaLock className="text-3xl text-blue-400" />, title: 'Security & Access Control', description: 'Card/fingerprint/face recognition systems, intrusion alerts, and alarm automation for all entry points.', image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/313001993/AV/LD/UW/34964846/gate-automation-and-access-control-systems.png' },
  ];

  const whyChoose = [
    'Customized Setup for Residential, Commercial, and Hospitality Spaces',
    'Engineered by Certified Omani Technicians & Integrators',
    'Remote Access via Mobile or Web Apps',
    'Integration-Ready with Existing Infrastructure or New Projects',
    'Energy-Efficient, Scalable, and Future-Ready Systems',
  ];

  const applications = [
    { title: 'Villas, Apartments & Smart Homes' },
    { title: 'Offices & Corporate Buildings' },
    { title: 'Hotels & Hospitality Facilities' },
    { title: 'Educational & Government Institutions' },
    { title: 'Retail Spaces & Smart Showrooms' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section with Animated Gradient */}
      <motion.section
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-pink-50 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
      >
        <div className="absolute inset-0 bg-[url('/Images/smarthomebg.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-800 flex items-center justify-center gap-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
          >
            <FaLightbulb className="text-blue-400 glow" /> Smart Automation
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mt-4 max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transforming Spaces with Intelligent Automation
          </motion.p>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
            At INNOVEX we design and implement fully integrated smart home and building systems that enhance comfort, security, and energy efficiency. Whether youre upgrading a villa, office, commercial facility, or an entire building network, our solutions combine cutting-edge technology with tailored user experience.
          </p>
        </div>
      </motion.section>

      {/* Services Section (Vertical Timeline) */}
      <motion.section
        className="py-20 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Our Smart Automation Services</h2>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                variants={slideInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md relative">
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full ${index % 2 === 0 ? '-right-2' : '-left-2'}`}></div>
                    <div className="flex items-center gap-4 mb-4">
                      {service.icon}
                      <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                    </div>
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose INNOVEX Section (Masonry Layout) */}
      <motion.section
        className="py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Why Choose INNOVEX Smart Solutions?</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 max-w-4xl mx-auto">
            {whyChoose.map((reason, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-sm mb-6 break-inside-avoid"
                variants={liftVariants}
                whileHover="hover"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-gray-700 font-medium">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Applications Section (Tiled Card Layout) */}
      <motion.section
        className="py-20 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Applications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md text-center"
                variants={expandVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-gray-800 font-medium">{app.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .glow {
          filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.5));
        }
      `}</style>
    </div>
  );
};

export default SmartHomePage;