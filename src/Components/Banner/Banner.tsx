"use client";

import React from 'react';

const Banner = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <p className="text-base sm:text-lg md:text-lg font-base px-32 text-white text-center lg:text-left">
              Innovex transforms ideas into reality with cutting-edge technical consultancy, innovative product design, and seamless manufacturing solutions, powered by advanced IT and AI/ML technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;