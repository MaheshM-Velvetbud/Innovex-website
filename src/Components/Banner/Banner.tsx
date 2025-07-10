"use client";

import React from 'react';

const Banner = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <p className="text-sm sm:text-base md:text-lg font-normal px-4 sm:px-8 md:px-16 lg:px-0 text-white text-center max-w-4xl">
              Innovex transforms ideas into reality with cutting-edge technical consultancy, innovative product design, and seamless manufacturing solutions, powered by advanced IT and AI/ML technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;