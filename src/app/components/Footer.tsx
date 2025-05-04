'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <><footer className="bg-gradient-to-r from-[#18A093] to-[#003366] text-white pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Product Column */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-5 transition-all duration-300">Product</h3>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
              <li><Link href="/ourProducts" className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Smart Healthcare Machine</Link></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">SHM App</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Doctor App</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Patient App</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Nurse App</button></li>
            </ul>
          </div>

          {/* Solution Column */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-5 transition-all duration-300">Solution</h3>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
              <li><button onClick={(e) => e.preventDefault()} className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Tele-Diagnostic Care</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Nurse-Enabled Access</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Smart Queue Management</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Personalized Health Tracking</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Preventive Health Programs</button></li>
              <li><button onClick={(e) => e.preventDefault()} className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Targeted Health Interventions</button></li>
            </ul>
          </div>

          {/* Initiative Column */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-5 transition-all duration-300">Initiative</h3>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
              <li><Link href="/ourInitiative/animacare" className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Animacare</Link></li>
              <li><Link href="/ourInitiative/decentralized" className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Decentralized Network</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-xl sm:text-2xl lg:text-2xl font-semibold mb-3 sm:mb-4 lg:mb-5 transition-all duration-300">Company</h3>
            <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
              <li><Link href="/knowUsBetter/about" className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">About Us</Link></li>
              <li><Link href="/knowUsBetter/news" className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">News</Link></li>
              <li><Link href="/contactUs" className="text-base sm:text-lg lg:text-xl hover:text-gray-300 transition-all duration-300 hover:translate-x-1">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Logo and Social Media Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-8 lg:pt-10 border-t border-white/20">
          <div className="mb-6 md:mb-0 transform hover:scale-105 transition-transform duration-300">
            <Image src="/nav-img.png" alt="BHC Logo" width={80} height={32} className="brightness-0 invert w-20 sm:w-24 lg:w-28" />
          </div>
          <div className="flex space-x-6 sm:space-x-8 lg:space-x-10">
            <Link href="https://www.linkedin.com" className="hover:text-gray-300 transition-all duration-300 transform hover:scale-110">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link href="https://www.facebook.com/people/Bridge-Healthcare/100087728966427/" className="hover:text-gray-300 transition-all duration-300 transform hover:scale-110">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/bridgehealth.care/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" className="hover:text-gray-300 transition-all duration-300 transform hover:scale-110">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.4 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1.3.4-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 0 5.7 0 4.7.1 3.9.3c-.9.2-1.7.5-2.4 1.2C.8 2.2.5 3 .3 3.9.1 4.7 0 5.7 0 7c0 1.3 0 1.7.1 4.9s0 3.6.1 4.9c.1 1.2.3 2.2.5 3 .2.9.5 1.7 1.2 2.4.7.7 1.5 1 2.4 1.2.8.2 1.8.4 3 .5 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.2-.1 2.2-.3 3-.5.9-.2 1.7-.5 2.4-1.2.7-.7 1-1.5 1.2-2.4.2-.8.4-1.8.5-3 .1-1.3.1-1.7.1-4.9s0-3.6-.1-4.9c-.1-1.2-.3-2.2-.5-3-.2-.9-.5-1.7-1.2-2.4-.7-.7-1.5-1-2.4-1.2C19.3.1 18.3 0 17 0c-1.3 0-1.7 0-4.9 0zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.6a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Copyright and Links Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 sm:pt-6 lg:pt-8">
          <div className="mb-4 md:mb-0">
            <p className="text-xs sm:text-sm lg:text-base text-gray-300">©Copyright 2022 Bridge Healthcare Private Limited.</p>
          </div>
          <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
            <Link href="/privacy-policy" className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-all duration-300">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-xs sm:text-sm lg:text-base text-gray-300 hover:text-white transition-all duration-300">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;