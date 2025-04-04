'use client';

import Image from 'next/image';
import React from 'react';

export default function ContactUs() {
  return (<>
    {/* FIRST SECTION */}
    <div className="relative overflow-hidden min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url("/icons/abt-1-img.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22 py-10 sm:py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[700] font-['Montserrat'] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-4 sm:mb-6">
            <span className="text-[#18A093]">Explore</span>{' '}
            <span className="text-[#003366]">Partnership</span>{' '}
            <span className="text-[#003366]">Opportunities with us.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-[400] font-['Font family'] leading-[150%] sm:leading-[130%] md:leading-[100%] tracking-[0%] align-middle text-[#555555]">
            Providing immediate access to healthcare, empowering individuals and communities to lead healthier lives.
          </p>
        </div>
      </div>
    </div>

    {/* CONTACT INFORMATION SECTION */}
    <div className="bg-white py-8 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {/* Location Card */}
          <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg border-1 border-gray-300 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-start space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-17 flex items-center justify-center rounded-full">
                <Image src="/icons/cont-2-lgo1.png" alt="Location" width={60} height={60} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-[600] text-[#525252] mb-1 sm:mb-2 font-['Font family'] leading-[100%] tracking-[0%] align-middle">Head Office</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">Chennai, Tamil Nadu.</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg border-1 border-gray-300 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-start space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full">
                <Image src="/icons/cont-2-lgo2.png" alt="Email" width={60} height={60} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-[600] text-[#525252] mb-1 sm:mb-2 font-['Font family'] leading-[100%] tracking-[0%] align-middle">Email Us</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">support@bridgehealth.care</p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg border-1 border-gray-300 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-start space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full">
                <Image src="/icons/cont-2-lgo3.png" alt="Phone" width={60} height={60} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-[600] text-[#525252] mb-1 sm:mb-2 font-['Font family'] leading-[100%] tracking-[0%] align-middle">Call Us</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">+91-9914411392</p>
              </div>
            </div>
          </div>

          {/* POC Card */}
          <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg border-1 border-gray-300 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-start space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-full">
                <Image src="/icons/cont-2-lgo4.png" alt="POC" width={60} height={60} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-[600] text-[#525252] mb-1 sm:mb-2 font-['Font family'] leading-[100%] tracking-[0%] align-middle">POC</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600">876-256-876</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CONTACT FORM SECTION */}
    <div className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left side - Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/icons/cont-3-img.png"
              alt="Contact Us"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white p-4 sm:p-6 md:p-7 lg:p-8 rounded-lg border-1 border-gray-300">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#003366] mb-3 sm:mb-4 md:mb-5 lg:mb-6">Contact Us</h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-7 lg:mb-8">Fill-in your details here and our team will get in touch with you shortly.</p>
            
            <form className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#18A093] focus:border-transparent text-black"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#18A093] focus:border-transparent text-black"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#18A093] focus:border-transparent text-black"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#18A093] focus:border-transparent text-black"
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#18A093] focus:border-transparent text-black"
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#003366] text-white text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 rounded-xl hover:bg-[#18A093] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}