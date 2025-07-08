"use client";
import React from 'react';

import { Metadata } from 'next';



export const metadata: Metadata = {
  title:"Contact VelvetBud Technologies | Get in Touch for Software Solutions",
  description: "Connect with VelvetBud Technologies today! We are here to assist you with all your software development and IT solution needs. Whether you have questions, need a consultation, or want to request a quote, our dedicated team is ready to help",
  keywords: "Contact VelvetBud Technologies, Software Development Company, IT Solutions, Get in Touch, Request a Quote, Customer Support, Technology Consultation",
};


const Contact = () => {
  return (
    <div>
      <section id='contact' className="py-16 lg:py-32">
        <div className="grid max-w-7xl grid-cols-1 px-4 mx-auto lg:px-8 md:grid-cols-2 md:divide-x gap-6">
          {/* Left side with background image */}
          <div
            className="py-6 md:py-0 md:px-12 rounded-3xl"
            style={{
              backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGgRrCrvmBLIjOau6J2EIlGK_gAfhOUrq-Q&s")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '400px', // Smaller height for mobile
            }}
          ></div>

          {/* Right side with contact info and iframe */}
          <div className="py-4 md:py-0 md:px-4 flex flex-col items-start justify-center space-y-4">
            <div className="w-full">
              <h1 className="text-3xl lg:text-4xl font-bold">Contact us</h1>
              <p className="pt-2 pb-4 text-sm md:text-base lg:text-lg">
                Security flame is here to help. Reach out to our expert team to discuss how we can tailor a solution to meet your unique business needs
              </p>

              <div className="space-y-4">
                <p className="flex items-center text-sm lg:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Office 13, Building 838,
Hail AL Shumaliyya St,
Muscat, Oman
Plus Code: M635+JR Seeb</span>
                </p>

                <p className="flex items-center text-sm lg:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span> +968-969 989 34</span>
                </p>

                <p className="flex items-center text-blue-500 underline text-sm lg:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span><a href="mailto:sales@velvetbud.in">sales@email.in</a></span>
                </p>
              </div>

              {/* Google Maps iframe */}
              {/* <div className="mt-6 w-full">
                <iframe
                  width="100%"
                  height="300"
                  frameBorder="0"
                  scrolling="no"
                  style={{ border: 'none' }}
                  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=VelvetBud%20Technologies%20+(VelvetBud%20Technologiesness%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  allowFullScreen
                ></iframe>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
