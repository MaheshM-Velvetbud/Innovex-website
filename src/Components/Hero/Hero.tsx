"use client";

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
   
    {
      src: 'https://images.unsplash.com/photo-1692607431253-8225c0e89f7d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds',
      title: 'INDUSTRIAL ENGINEERING SOLUTION',
      description: 'Delivering comprehensive electrical and energy distribution, innovative industrial engineering and product development, and versatile general trading services',
      link: '/services/industrial-engineering',
    },
    {
      src: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: ' BUSINESS TRANSFORMATION & DIGITALIZATION',
      description: 'Driving growth through cutting-edge IT and digital transformation, innovative smart home and building automation solutions, and strategic digital marketing services.',
      link: '/services/business-development',
    },
    {
      src: '/Images/statergeicbg.jpg',
      title: 'STRATEGY & DEVELOPMENT SERVICES',
      description: 'Empowering success through expert business and strategic consulting, alongside impactful training and capability building solutions',
      link: '/it-services/ai-ml',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  max-w-full py-2" data-carousel="slide">
      {/* Carousel wrapper */}
      <div className="relative h-[90vh] sm:h-[90vh] md:h-[90vh] overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={clsx('absolute inset-0 transition-opacity duration-700 ease-in-out', {
              'opacity-100': index === activeIndex,
              'opacity-0 hidden': index !== activeIndex,
            })}
            data-carousel-item
          >
            {/* Image */}
            <img
              src={slide.src}
              className="absolute block w-full h-full object-cover z-0"
              alt={slide.title}
            />
            {/* Black overlay covering the entire image */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            {/* Text overlay - Centered */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 sm:p-6 text-white text-center max-w-[90%] sm:max-w-[70%] md:max-w-[50%] z-20">
              <h2 className="text-lg sm:text-2xl md:text-2xl font-base font-poppins mb-2">{slide.title}</h2>
              <p className="text-sm sm:text-lg md:text-lg font-poppins mb-4">{slide.description}</p>
              <a
                href={slide.link}
                className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-white text-cyan-600 rounded-md hover:bg-gray-200 transition-colors text-sm sm:text-base"
              >
                Discover More
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-3 sm:bottom-5 left-1/2 space-x-2 sm:space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={clsx('w-2 h-2 sm:w-3 sm:h-3 rounded-full', {
              'bg-white': index === activeIndex,
              'bg-white/50': index !== activeIndex,
            })}
            aria-current={index === activeIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;