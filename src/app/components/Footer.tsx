'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      {/* Partners Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-16 md:py-22">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="w-full max-w-[200px] aspect-[3/1] relative">
              <Image
                src="/icons/hm-11-img1.svg"
                alt="StartupTN"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[200px] aspect-[3/1] relative">
              <Image
                src="/icons/hm-11-img2.svg"
                alt="Crescent Innovation"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[200px] aspect-[3/1] relative">
              <Image
                src="/icons/hm-11-img3.svg"
                alt="ESF"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[200px] aspect-[3/1] relative">
              <Image
                src="/icons/hm-11-img4.svg"
                alt="SICCI"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-full max-w-[200px] aspect-[3/1] relative">
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



      <footer className="bg-gradient-to-r from-[#18A093] to-[#003366] text-white pt-20 pb-10 md:pt-10 md:pb-10">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Product Column */}
            <div>
              <h3 className="text-xl font-bold mb-6">Product</h3>
              <ul className="space-y-4">
                <li><Link href="/smart-healthcare-machine" className="hover:text-gray-300 transition-colors">Smart Healthcare machine</Link></li>
                <li><Link href="/supporting-applications" className="hover:text-gray-300 transition-colors">Supporting Applications</Link></li>
                <li><Link href="/admin-software" className="hover:text-gray-300 transition-colors">Admin Software</Link></li>
              </ul>
            </div>

            {/* Solution Column */}
            <div>
              <h3 className="text-xl font-bold mb-6">Solution</h3>
              <ul className="space-y-4">
                <li><Link href="/tele-diagnostic-services" className="hover:text-gray-300 transition-colors">Tele-Diagnostic Services</Link></li>
                <li><Link href="/personalized-care" className="hover:text-gray-300 transition-colors">Personalized Care</Link></li>
                <li><Link href="/approachable-friendly-care" className="hover:text-gray-300 transition-colors">Approachable and Friendly care</Link></li>
              </ul>
            </div>

            {/* Explore Column */}
            <div>
              <h3 className="text-xl font-bold mb-6">Explore</h3>
              <ul className="space-y-4">
                <li><Link href="/about" className="hover:text-gray-300 transition-colors">About</Link></li>
                <li><Link href="/our-product" className="hover:text-gray-300 transition-colors">Our Product</Link></li>
                <li><Link href="/our-services" className="hover:text-gray-300 transition-colors">Our Services</Link></li>
                <li><Link href="/contact-us" className="hover:text-gray-300 transition-colors">Contact us</Link></li>
                <li><Link href="/our-team" className="hover:text-gray-300 transition-colors">Our Team</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-2">
                  <span className="mt-1">T:</span>
                  <a href="tel:+919191441392" className="hover:text-gray-300 transition-colors">+91991441392</a>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1">E:</span>
                  <a href="mailto:Support@bridgehealth.care" className="hover:text-gray-300 transition-colors">Support@bridgehealth.care</a>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="mt-1">Address:</span>
                  <span>13B/8, 4th Main Road, Indira Nagar, Adyar, Chennai, TN -600020</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20">
            <div className="mb-6 md:mb-0">
              <Image src="/nav-img.png" alt="BHC Logo" width={100} height={40} className="brightness-0 invert" />
            </div>
            <div className="flex space-x-6">
              <Link href="https://www.linkedin.com" className="hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link href="https://www.facebook.com" className="hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
              </Link>
              <Link href="https://www.twitter.com" className="hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;