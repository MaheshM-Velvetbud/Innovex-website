"use client"

import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-1 pt-3">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-10 px-12 py-6 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <img src="/Images/innovexlogo2.png" alt="footer lgo" className="h-32 w-32" />
          {/* <p className="text-center lg:text-start">Adrees of the INNOVEX company
            768k AB street , building no 4
          </p> */}
        </div>
       
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-xl font-medium">Industrial Engineering</p>
        
          <p className="text-base">Industrial Designing</p>
          {/* <p className="text-base">Product Designing</p> */}
          <p className="text-base">Prototyping</p>
          <p className="text-base">Manufacturing Expertise</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-xl font-medium">IT Services</p>
          <p className="text-base">AI & ML</p>
          <p className="text-base">Cyber Security</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-2">
          <p className="text-xl font-medium">Company</p>
          <p className="text-base">About</p>
          <p className="text-base">Contact</p>
         
        </div>
        <div className="flex items-center gap-2">
                <BsFacebook className="text-3xl text-blue-500"/>
                <BsTwitter className="text-3xl text-black"/>
                <BsInstagram className="text-3xl text-red-500"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;