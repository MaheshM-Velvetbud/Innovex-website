"use client";
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [
    {
      src: 'https://t4.ftcdn.net/jpg/03/72/23/15/360_F_372231560_9xCCHPbhy1GDSkoVjlCW2pSHDKA7lEQk.jpg',
      title: 'Build up your Cybersecurity Experience with our accredited professional qualifications',
      description: 'Build up your Cybersecurity Experience with our accredited professional qualifications',
      link: '/artistry',
    },
    {
      src: 'https://www.shutterstock.com/image-photo/man-cyber-data-team-monitoring-600nw-2576285941.jpg',
      title: 'Full range of cyber security service',
      description: 'Full range of cyber security service',
      link: '/nature',
    },
    {
      src: 'https://t4.ftcdn.net/jpg/03/72/23/15/360_F_372231560_9xCCHPbhy1GDSkoVjlCW2pSHDKA7lEQk.jpg',
      title: 'Build up your Cybersecurity',
      description: 'Experience the power and grace of the tiger in its forest home.',
      link: '/wilderness',
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
    <div className="relative w-full max-w-full py-8" data-carousel="slide">
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
              <a
                href={slide.link}
                className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-sm sm:text-base"
              >
                Learn More
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