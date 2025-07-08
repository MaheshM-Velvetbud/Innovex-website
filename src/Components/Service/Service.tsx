"use client"

import React from 'react';
import { FollowerPointerCard } from "../ui/following-pointer";

const blogContent1 = {
  slug: "react-performance-optimization",
  author: "Jane Doe",
  date: "15th April, 2024",
  title: "Cyber Security Services",
  description:
    "We offer a range of cybersecurity services that are monitored by professionals.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDw9EHNJvs-IyQTNc1IviELWdhi8VAkYhQzg&s",
};

const blogContent2 = {
  slug: "building-rest-apis-nodejs",
  author: "John Smith",
  date: "10th May, 2024",
  title: "IT Services",
  description:
    "Our professional IT services are tailor-made for all your IT needs",
  image: "https://blog.tiinfotech.com/wp-content/uploads/2023/09/62be2287285099f561a48ee2_IT-services-.jpg",
};

const FollowingPointerDemo = () => {
  return (
    <div className='py-12'><h1 className="text-4xl md:text-4xl text-center">
   Our Comprehensive Technology Solutions
  </h1>
  <p className="text-base md:text-lg text-center text-slate-700 my-4 md:my-6 max-w-5xl mx-auto">
  Explore our expert-driven Cyber Security Services, continuously monitored by professionals to safeguard your digital assets. 
  </p>
    <div className="mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 w-full max-w-5xl">
        
      {/* Card 1 */}
      <div className="w-full sm:w-1/2 max-w-sm mx-auto">
        <FollowerPointerCard>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
              <img
                src={blogContent1.image}
                alt="thumbnail"
                className="h-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
              />
            </div>
            <div className="p-4">
              <h2 className="my-4 text-lg font-bold text-zinc-700">
                {blogContent1.title}
              </h2>
              <h2 className="my-4 text-sm font-normal text-zinc-500">
                {blogContent1.description}
              </h2>
              <div className="mt-10 flex flex-row items-center justify-between">
                {/* <span className="text-sm text-gray-500">{blogContent1.date}</span> */}
                <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      </div>
      {/* Card 2 */}
      <div className="w-full sm:w-1/2 max-w-sm mx-auto">
        <FollowerPointerCard>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-zinc-100 bg-white transition duration-200 hover:shadow-xl">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-tl-lg rounded-tr-lg bg-gray-100">
              <img
                src={blogContent2.image}
                alt="thumbnail"
                className="h-full transform object-cover transition duration-200 group-hover:scale-95 group-hover:rounded-2xl"
              />
            </div>
            <div className="p-4">
              <h2 className="my-4 text-lg font-bold text-zinc-700">
                {blogContent2.title}
              </h2>
              <h2 className="my-4 text-sm font-normal text-zinc-500">
                {blogContent2.description}
              </h2>
              <div className="mt-10 flex flex-row items-center justify-between">
                {/* <span className="text-sm text-gray-500">{blogContent2.date}</span> */}
                <div className="relative z-10 block rounded-xl bg-black px-6 py-2 text-xs font-bold text-white">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      </div>
    </div>
    </div>
  );
};

export default FollowingPointerDemo;