
"use client"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '@/Components/Footer/Footer';


const Quotes = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <div>
      <section className="  pt-12">
        
<section 
  className="relative py-28 bg-[url('/Images/itservice.jpg')] bg-cover bg-center"
>
  {/* Overlay layer */}
  <div className="absolute inset-0 bg-opacity-50"></div>

  {/* Content */}
  <div className="relative container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
   <h1 className="text-3xl    . leading-none sm:text-4xl bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent">
   IT  
  <span className="dark:text-violet-600"> Services </span>  
</h1>

    {/* <p className="px-8 mt-8 mb-12 text-lg text-gray-200">
      Discover elegant and comfortable living room furniture that transforms your space into a cozy retreat.
    </p> */}
  </div>
</section>
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            {/* <h1 className=' text-center text-3xl    .'>Explore Our Latest Creations at Wood County</h1> */}
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear">
            <div>
            <div>
  <h3 className="text-xl sm:text-2xl     .">Software Quality Assurance</h3>
  <p className="mt-3 text-md text-justify">
  We can help you test your newly built or existing application with latest tools and techniques to make sure your application is developed based on international standards and best practices.
  </p>
  {/* <div className="mt-12 space-y-12 text-justify">
    <a
      href="/consulting" // Add your contact page or section ID here
      className="inline-block bg-green-800 text-white text-lg py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition"
    >
      Contact Us for More Details
    </a>
  </div> */}
</div>

            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="linear">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqveZVw0iX7KkuUucPYBia24JO2jVx21D14Q&s" alt="" className="mx-auto rounded-lg shadow-lg" />
            </div>
          </div>

          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear">
            <div>
  <h3 className="text-xl sm:text-2xl    ">Custom Development</h3>
  <p className="mt-3 text-md text-justify">
  Security Flame can do in-depth analysis and help you achieve your goals through application and system development that is customized just the way you want it to be!
  </p>
  {/* <div className="mt-12 space-y-12 text-justify">
    <a
      href="/contact" // Add your contact page or section ID here
      className="inline-block bg-green-800 text-white text-lg py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition"
    >
      Contact Us for More Details
    </a>
  </div> */}
</div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="linear">
                <img src="/Image/gallery7.jpeg" alt="" className="mx-auto rounded-lg shadow-lg " />
              </div>
            </div>

            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear">
            <div>
  <h3 className="text-xl sm:text-2xl     .">Enterprise Solutions</h3>
  <p className="mt-3 text-md text-justify">
  We combine insights with our highly qualified team and can deliver professional enterprise solutions.
  </p>
  
</div>
            <div aria-hidden="true" className="mt-10 lg:mt-0" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="linear">
              <img src='/Image/gallery11.jpeg' alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
            </div>
          </div>

          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear">
          <div>
  <h3 className="text-xl sm:text-2xl     ."> Mobile Application Development</h3>
  <p className="mt-3 text-md text-justify">
  Our dedicated team can help you automate processes and change the way your customers interact with you by developing smart applications.
  </p>
  {/* <div className="mt-12 space-y-12 text-justify">
    <a
      href="/contact" // Add your contact page or section ID here
      className="inline-block bg-green-800 text-white text-lg py-3 px-8 rounded-lg shadow-md hover:bg-green-600 transition"
    >
      Contact Us for More Details
    </a>
  </div> */}
</div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="linear">
                <img src="/Image/outdoor.jpeg" alt="" className="mx-auto rounded-lg shadow-lg " />
              </div>
            </div>




            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="linear">
            <div>
  <h3 className="text-xl sm:text-2xl     .">Outsourcing</h3>
  <p className="mt-3 text-md text-justify">
  We can provide you with capable professionals taking an innovative delivery framework who can help you with longterm management, maintenance and enhancement of custom or packaged applications, environments and test suites
  </p>
  
</div>
            <div aria-hidden="true" className="mt-10 lg:mt-0" data-aos="zoom-in-up" data-aos-duration="1000" data-aos-easing="linear">
              <img src='/Image/gallery11.jpeg' alt="" className="mx-auto rounded-lg shadow-lg dark:bg-gray-500" />
            </div>
          </div>

    
        
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  
    </>
  );
}

export default Quotes;
