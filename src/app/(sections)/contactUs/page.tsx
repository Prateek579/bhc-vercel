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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-[700] font-['Montserrat'] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-4 sm:mb-6">
            <span className="text-[#18A093]">Let&apos;s Collaborate</span>{' '}
            <span className="text-[#003366]">For Smarter, Healthier Communities.</span>{' '}
          </h1>
        </div>
      </div>
    </div>

    {/* CONTACT INFORMATION SECTION */}
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {/* Location Card */}
          <div className="bg-white p-4 sm:p-5 lg:p-6 flex items-stretch rounded-lg border-1 border-gray-300 transition-all duration-300 hover:bg-[#0E7280] group min-h-[120px]">
            <div className="flex flex-row items-center w-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0 flex items-center justify-center rounded-full mr-4">
                <Image src="/icons/cont-2-lgo1.png" alt="Location" width={60} height={65} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-[600] text-[#525252] group-hover:text-white mb-1 sm:mb-2 font-['Montserrat'] leading-tight">Head Office</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 group-hover:text-white">Chennai, Tamil Nadu.</p>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-4 sm:p-5 lg:p-6 flex items-stretch rounded-lg border-1 border-gray-300 transition-all duration-300 hover:bg-[#0E7280] group min-h-[120px]">
            <div className="flex flex-row items-center w-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0 flex items-center justify-center rounded-full mr-4">
                <Image src="/icons/cont-2-lgo2.png" alt="Email" width={60} height={65} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-[600] text-[#525252] group-hover:text-white mb-1 sm:mb-2 font-['Montserrat'] leading-tight">Email Us</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 group-hover:text-white">info@bridgehealth.care</p>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-4 sm:p-5 lg:p-6 flex items-stretch rounded-lg border-1 border-gray-300 transition-all duration-300 hover:bg-[#0E7280] group min-h-[120px]">
            <div className="flex flex-row items-center w-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0 flex items-center justify-center rounded-full mr-4">
                <Image src="/icons/cont-2-lgo3.png" alt="Phone" width={60} height={65} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-[600] text-[#525252] group-hover:text-white mb-1 sm:mb-2 font-['Montserrat'] leading-tight">Call Us</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 group-hover:text-white">+91-9914411392</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* CONTACT FORM SECTION */}
    <div className="bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-20 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
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
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-xl shadow-sm">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[700] font-['Montserrat'] text-[#003366] mb-3 sm:mb-4">Contact Us</h2>
            <p className="text-base sm:text-lg text-gray-600 font-['Montserrat'] mb-6 sm:mb-8">Fill-in your details here and our team will get in touch with you shortly.</p>

            <form className="space-y-5">
              {/* Contact Method Selection */}
              <div className="flex items-center gap-6 mb-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="contactMethod" value="phone" className="w-4 h-4 text-[#18A093] border-gray-300 focus:ring-[#18A093]" />
                  <span className="text-sm font-['Montserrat'] text-gray-700">Phone Call</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="contactMethod" value="email" className="w-4 h-4 text-[#18A093] border-gray-300 focus:ring-[#18A093]" />
                  <span className="text-sm font-['Montserrat'] text-gray-700">E-mail</span>
                </label>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full px-4 py-3 text-sm font-['Montserrat'] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] focus:border-transparent text-black placeholder-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full px-4 py-3 text-sm font-['Montserrat'] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] focus:border-transparent text-black placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Contact Number*"
                  className="w-full px-4 py-3 text-sm font-['Montserrat'] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] focus:border-transparent text-black placeholder-gray-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-3 text-sm font-['Montserrat'] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] focus:border-transparent text-black placeholder-gray-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Location*"
                  className="w-full px-4 py-3 text-sm font-['Montserrat'] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] focus:border-transparent text-black placeholder-gray-500"
                />
              </div>

              <div className="relative">
                <textarea
                  placeholder="Your Message Here*"
                  className="w-full px-4 py-3 text-sm font-['Montserrat'] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] focus:border-transparent text-black placeholder-gray-500 resize-none h-32"
                  maxLength={180}
                  onChange={(e) => {
                    const counter = document.getElementById('charCounter');
                    if (counter) counter.textContent = `${e.target.value.length} / 180`;
                  }}
                />
                <div id="charCounter" className="absolute bottom-2 right-3 text-xs text-gray-500 font-['Montserrat']">0 / 180</div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  onClick={(e) => e.preventDefault()}
                  className="w-full sm:w-auto px-8 py-3 text-base font-['Montserrat'] font-medium text-white bg-[#003366] rounded-lg hover:bg-[#18A093] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#18A093]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}