'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      {/* Partners Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-10 lg:px-22 py-10 sm:py-12 md:py-16 lg:py-22">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 items-center justify-items-center">
            <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] aspect-[3/1] relative">
              <Image
                src="/icons/hm-11-img1.svg"
                alt="StartupTN"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] aspect-[3/1] relative">
              <Image
                src="/icons/hm-11-img2.svg"
                alt="Crescent Innovation"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] aspect-[3/1] relative">
              <Image
                src="/icons/hm-11-img3.svg"
                alt="ESF"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] aspect-[3/1] relative">
              <Image
                src="/icons/hm-11-img4.svg"
                alt="SICCI"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[200px] sm:max-w-[220px] md:max-w-[250px] aspect-[3/1] relative">
              <Image
                src="/icons/hm-11-img5.png"
                alt="Wipro"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>



      <footer className="bg-gradient-to-r from-[#18A093] to-[#003366] text-white pt-10 pb-8 sm:pt-16 sm:pb-8 md:pt-20 md:pb-10 lg:pt-20 lg:py-5">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-22">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-5 ">
            {/* Product Column */}
            <div>
              <h3 className="text-2xl sm:text-2xl font-base mb-4 sm:mb-5 md:mb-6">Product</h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4 ">
                <li><button onClick={(e) => e.preventDefault()} className="text-lg sm:text-xl hover:text-gray-300 transition-colors bg-transparent border-none p-0 cursor-pointer text-white">Smart Healthcare Machine</button></li>
                <li><button onClick={(e) => e.preventDefault()} className="text-lg sm:text-xl hover:text-gray-300 transition-colors">SHM App</button></li>
                <li><button onClick={(e) => e.preventDefault()} className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Doctor App</button></li>
                <li><button onClick={(e) => e.preventDefault()} className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Patient App</button></li>
                <li><button onClick={(e) => e.preventDefault()} className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Nurse App</button></li>
              </ul>
            </div>

            {/* Solution Column */}
            <div>
              <h3 className="text-2xl sm:text-2xl font-base mb-4 sm:mb-5 md:mb-6">Solution</h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li><button onClick={(e) => e.preventDefault()} className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Tele-Diagnostic Care</button></li>
                <li><button onClick={(e) => e.preventDefault()} className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Nurse-Enabled Access</button></li>
                <li><button onClick={(e) => e.preventDefault()} className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Smart Queue Management</button></li>
                <li><button onClick={(e) => e.preventDefault()} className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Personalized Health Tracking</button></li>
                <li><button onClick={(e) => e.preventDefault()} className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Preventive Health Programs</button></li>
                <li><button onClick={(e) => e.preventDefault()} className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Targeted Health Interventions</button></li>
              </ul>
            </div>

            {/* Explore Column */}
            <div>
              <h3 className="text-2xl sm:text-2xl font-base mb-4 sm:mb-5 md:mb-6">Initiative</h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li><Link href="#" className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Animacare</Link></li>
                <li><Link href="#" className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Decentralized Network</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl sm:text-2xl font-base mb-4 sm:mb-5 md:mb-6">Company</h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li><Link href="#" className="text-lg sm:text-xl hover:text-gray-300 transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-lg sm:text-xl hover:text-gray-300 transition-colors">News</Link></li>
                <li><Link href="#" className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Contact Us</Link></li>
              </ul>
              {/* <div className='mt-6'>
                <h3 className="text-2xl sm:text-2xl font-base mb-4 sm:mb-5 md:mb-6">Doctor Login</h3>
                <h3 className="text-2xl sm:text-2xl font-base mb-4 sm:mb-5 md:mb-6">GetInvolved</h3>
              </div> */}
            </div>
            {/* Contact Column */}
            {/* <div>
              <h3 className="text-2xl sm:text-3xl font-base mb-4 sm:mb-5 md:mb-6">Contact</h3>
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                <li className="flex flex-row items-center">
                  <Image src="/icons/ft-img1.png" alt="phone image" width={13} height={13} className='mr-3 sm:mr-4 h-3 w-3 sm:h-4 sm:w-4' />
                  <span className="mr-1 text-base sm:text-lg">T:</span>
                  <a href="tel:+919191441392" className="text-lg sm:text-xl hover:text-gray-300 transition-colors">+91991441392</a>
                </li>
                <li className="flex flex-row items-center">
                  <Image src="/icons/ft-img2.png" alt="phone image" width={22} height={22} className='mr-3 sm:mr-4 h-5 w-5 sm:h-6 sm:w-6' />
                  <span className="mr-1 text-base sm:text-lg">E:</span>
                  <a href="mailto:Support@bridgehealth.care" className="text-lg sm:text-xl hover:text-gray-300 transition-colors">Support@bridgehealth.care</a>
                </li>
                <li className="flex flex-row">
                  <Image src="/icons/ft-img3.png" alt="phone image" width={10} height={10} className='mr-3 sm:mr-4 h-5 w-5 sm:h-6 sm:w-6 mt-1' />
                  <span className="text-base sm:text-lg md:text-xl">Address: 13B/8, 4th Main Road, Indira Nagar, Adyar, Chennai, TN -600020</span>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-6 sm:pt-7 md:pt-8 border-t border-white/20">
            <div className="mb-6 md:mb-0">
              <Image src="/nav-img.png" alt="BHC Logo" width={80} height={32} className="brightness-0 invert w-20 sm:w-24 md:w-28" />
            </div>
            <div className="flex space-x-4 sm:space-x-5 md:space-x-6">
              <Link href="https://www.linkedin.com" className="hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link href="https://www.facebook.com/people/Bridge-Healthcare/100087728966427/" className="hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/bridgehealth.care/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" className="hover:text-gray-300 transition-colors">
                <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-1 sm:pt-1 md:pt-2">
            <div className="md:mb-0 text-xs sm:text-sm">
              ©Copyright 2022 Bridge Healthcare Private Limited.
            </div>
            <div className="flex space-x-4 sm:space-x-5 md:space-x-6 text-xs sm:text-sm">
              <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-use" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;