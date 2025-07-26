"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (menu: string) => setDropdownOpen(dropdownOpen === menu ? null : menu);

  const itServices = [
    'AI ML', 'Cyber Security', 'IT Consulting', 'Software Development', 
    'Database Services', 'ERP Implementation', 'Data Engineering', 
    'SQL & Database Optimization', 'Custom Reporting', 'Application Reformation', 
    'IT Infrastructure Management', 'Data Analytics & Visualization', 'Data Security', 'DevOps'
  ];

  const industrialEngineering = [
    'Industrial Designing', 'Prototyping', 'Manufacturing Expertise'
  ];

  return (
    <nav className="bg-white text-black sticky top-0 z-50 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/Images/logogroup2.png"
                alt="Company Logo"
                className="h-24 w-40 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('itServices')}
                className="flex items-center hover:text-blue-400 transition-colors focus:outline-none"
              >
                IT Services
                <ChevronDownIcon className={`ml-1 h-5 w-5 transform ${dropdownOpen === 'itServices' ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen === 'itServices' && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 max-h-96 overflow-y-auto">
                  {itServices.map((item) => (
                    <Link
                      key={item}
                      href={`/it-services/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industrial Engineering Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('industrialEngineering')}
                className="flex items-center hover:text-blue-400 transition-colors focus:outline-none"
              >
                Industrial Engineering
                <ChevronDownIcon className={`ml-1 h-5 w-5 transform ${dropdownOpen === 'industrialEngineering' ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen === 'industrialEngineering' && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2">
                  {industrialEngineering.map((item) => (
                    <Link
                      key={item}
                      href={`/industrial-engineering/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/services/business-development" className="hover:text-blue-400 transition-colors">Business Development</Link>
            <Link href="/services/training" className="hover:text-blue-400 transition-colors">Training</Link>
            <Link href="/smart-home" className="hover:text-blue-400 transition-colors">Smart Home</Link>
            <Link href="/electric-work" className="hover:text-blue-400 transition-colors">Electric Work</Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w_characteristics-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-blue-400">Home</Link>
            <Link href="/about" className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-blue-400">About</Link>

            {/* IT Services Mobile Dropdown */}
            <button
              onClick={() => toggleDropdown('itServices')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-700 hover:text-blue-400 flex items-center justify-between"
            >
              IT Services
              <ChevronDownIcon className={`h-5 w-5 transform ${dropdownOpen === 'itServices' ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen === 'itServices' && (
              <div className="pl-4 space-y-1">
                {itServices.map((item) => (
                  <Link
                    key={item}
                    href={`/it-services/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                    className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-blue-400 text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}

            {/* Industrial Engineering Mobile Dropdown */}
            <button
              onClick={() => toggleDropdown('industrialEngineering')}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-700 hover:text-blue-400 flex items-center justify-between"
            >
              Industrial Engineering
              <ChevronDownIcon className={`h-5 w-5 transform ${dropdownOpen === 'industrialEngineering' ? 'rotate-180' : ''}`} />
            </button>
            {dropdownOpen === 'industrialEngineering' && (
              <div className="pl-4 space-y-1">
                {industrialEngineering.map((item) => (
                  <Link
                    key={item}
                    href={`/industrial-engineering/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-blue-400 text-sm"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/services/business-development" className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-blue-400">Business Development</Link>
            <Link href="/services/training" className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-blue-400">Training</Link>
            <Link href="/smart-home" className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-blue-400">Smart Home</Link>
            <Link href="/electric-work" className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-blue-400">Electric Work</Link>
            <Link href="/contact" className="block px-3 py-2 rounded-md hover:bg-gray-700 hover:text-blue-400">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;