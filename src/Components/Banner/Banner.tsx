// use client
import React from 'react';

const Banner = () => {
  return (
    <div className="p-4 sm:p-6 md:p-8 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex items-center space-x-3 sm:space-x-4">
            
            <p className="text-base sm:text-lg md:text-lg font-base text-white text-center lg:text-left">
              Adoption of Security Awareness is a priority for organizations Because humans are still
              the weakest link in cyber security
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;