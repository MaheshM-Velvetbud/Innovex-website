import React from 'react';

const AboutUs = () => {
  return (
    <section className="relative w-full py-12  min-h-[400px] sm:min-h-[500px] md:min-h-[600px] bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://t3.ftcdn.net/jpg/05/39/65/40/360_F_539654005_M7XZRGAG3TAarymgapSSgSUdgkNKQL2G.jpg"
          alt="About Us Background"
          className="w-full h-full object-cover object-center grayscale opacity-60"
        />
      </div>

      {/* Overlay with Diagonal Clip Path and Gradient */}
      <div className="absolute inset-0 clip-diagonal flex items-center justify-center sm:justify-start">
        <div className="text-white max-w-md sm:max-w-lg md:max-w-2xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h2 className="text-3xl sm:text-3xl md:text-3xl font-base text-red-500 font-poppins mb-4 sm:mb-6">
          WHY CHOOSE <span className="font-light">US? </span>
          </h2>
          {/* <div className="w-16 h-1 bg-white mb-4 sm:mb-6 mx-auto sm:mx-0"></div> */}
          {/* <p className="text-base sm:text-lg md:text-lg leading-relaxed pb-2">
            We are a dedicated team committed to crafting innovative solutions that inspire and empower. Our mission is to deliver
            exceptional experiences, blending creativity and expertise to drive meaningful impact across industries.
          </p> */}
          <p className="text-base sm:text-lg md:text-lg leading-relaxed pb-2">
          We are a professional IT & Cyber Security Training and Services Firm based in Muscat, the capital city of Oman! We centre around protecting our corporate clients by assisting them in minimizing the risks of consistently expanding cyber threats.
          </p>
        
          <a
                href=""
                className="inline-block px-4 py-2  sm:px-6 sm:py-3 bg-white text-black rounded-md hover:bg-gray-200 transition-colors text-sm sm:text-base"
              >
                Learn More
              </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;