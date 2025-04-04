'use client';

import Partner from '@/app/components/Partner';
import Image from 'next/image';
import React from 'react';

export default function OurSolution() {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);
  return (<>
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
            Making Friendly &
            <br />
            Approachable Care
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-[400] font-['Font family'] leading-[150%] sm:leading-[130%] md:leading-[100%] tracking-[0%] align-middle text-[#555555]">
            One platform for diagnostics, consultations and wellness — built to make healthcare simpler, smarter and truly patient-centered.
          </p>
        </div>
      </div>
    </div>

    {/* SOLUTION SECTION */}
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-20 md:py-32">
        <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] font-['Montserrat'] leading-tight sm:leading-tight md:leading-tight lg:leading-[100%] tracking-[0px] align-middle text-[#003366]">
          <span className="text-[#18A093]">Our</span>{' '}
          <span className="text-[#003366]">Solution Overview</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 pl-2 sm:pl-4 lg:pl-8">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-[#555555] text-base sm:text-lg md:text-xl lg:text-[20px] font-[500] font-['Montserrat'] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0px]">The Smart Healthcare Machine improves healthcare with data-driven accessibility and efficiency.</p>

            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg border-1 border-gray-200 flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer hover:shadow-lg transition-shadow">
              <Image src="/icons/sol-2-lgo1.png"
                alt='heart'
                width={40}
                height={40}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
              <span className="text-sm sm:text-base lg:text-lg font-[500] font-['Font family'] leading-[100%] tracking-[0%] text-[#1A1A1A]">Health Check Up</span>
            </div>
            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg border-1 border-gray-200 flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer hover:shadow-lg transition-shadow">
              <Image src="/icons/sol-2-lgo5.png"
                alt='heart'
                width={55}
                height={55}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
              <span className="text-sm sm:text-base lg:text-lg font-[500] font-['Font family'] leading-[100%] tracking-[0%] text-[#1A1A1A]">Consultation</span>
            </div>

            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg border-1 border-gray-200 flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer hover:shadow-lg transition-shadow">
              <Image src="/icons/sol-2-lgo5.png"
                alt='heart'
                width={55}
                height={55}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
              <span className="text-sm sm:text-base lg:text-lg font-[500] font-['Font family'] leading-[100%] tracking-[0%] text-[#1A1A1A]">Hospital connecting service</span>
            </div>

            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg border-1 border-gray-200 flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer hover:shadow-lg transition-shadow">
              <Image src="/icons/sol-2-lgo3.png"
                alt='heart'
                width={55}
                height={55}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" />
              <span className="text-sm sm:text-base lg:text-lg font-[500] font-['Font family'] leading-[100%] tracking-[0%] text-[#1A1A1A]">Wellness Programs</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-3 sm:space-y-4 lg:space-y-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">General Body Checkups 30+</h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#888888] font-[400] font-['Montserrat'] leading-[130%] sm:leading-[120%] lg:leading-[110%] tracking-[0%] align-middle">
                  general health checkups including vitals like BP, SpO₂, heart rate, temperature, ECG, blood sugar, hemoglobin, lipid profile, uric acid, BMI, and body weight analysis.
                </p>
                <button className="text-[#0066CC] hover:underline text-xs sm:text-sm lg:text-base font-medium">SHOW MORE +</button>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-3 sm:space-y-4 lg:space-y-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Cardiac Checkups</h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#888888] font-[400] font-['Montserrat'] leading-[130%] sm:leading-[120%] lg:leading-[110%] tracking-[0%] align-middle">
                  Cardiac checkups through ECG and vital monitoring, helping detect arrhythmias, heart rate issues, and early cardiac risks.
                </p>
                <button className="text-[#0066CC] hover:underline text-xs sm:text-sm lg:text-base font-medium">SHOW MORE +</button>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-3 sm:space-y-4 lg:space-y-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Diabetes</h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#888888] font-[400] font-['Montserrat'] leading-[130%] sm:leading-[120%] lg:leading-[110%] tracking-[0%] align-middle">
                  Blood sugar and hemoglobin levels are tested instantly, enabling early detection of diabetes and continuous monitoring for better disease management.
                </p>
                <button className="text-[#0066CC] hover:underline text-xs sm:text-sm lg:text-base font-medium">SHOW MORE +</button>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-5 lg:p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-3 sm:space-y-4 lg:space-y-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Regular Checkups</h3>
                <p className="text-xs sm:text-sm lg:text-base text-[#888888] font-[400] font-['Montserrat'] leading-[130%] sm:leading-[120%] lg:leading-[110%] tracking-[0%] align-middle">
                  Regular health checkups include vitals, blood tests, ECG, and body composition analysis—supporting early detection, lifestyle tracking, and overall wellness management.
                </p>
                <button className="text-[#0066CC] hover:underline text-xs sm:text-sm lg:text-base font-medium">SHOW MORE +</button>
              </div>
            </div>
            <div className="mt-12">
              <button className="bg-[#003B87] text-white px-8 py-3 rounded-lg hover:bg-[#002D66] transition-colors">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Departments Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-16 sm:py-20 md:py-24 lg:py-32">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 pl-2 sm:pl-4 lg:pl-8">
          <span className="text-[#18A093]">25+</span>{' '}
          <span className="text-[#003366]">connecting departments</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 sm:mb-10 lg:mb-12 pl-2 sm:pl-4 lg:pl-8">
          Seamlessly connecting patients to 25+ medical departments for comprehensive, coordinated care.
        </p>

        <div className="pl-2 sm:pl-4 lg:pl-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 sm:space-x-5 lg:space-x-6 pb-4 sm:pb-5 lg:pb-6 min-w-max">
            {/* Department Cards */}
            <div className="w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Neuro Science" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center">Neuro Science</h3>
            </div>

            <div className="w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Cardiology" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center">Cardiology</h3>
            </div>

            <div className="w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Psychology" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center">Psychology</h3>
            </div>

            <div className="w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Dermatology" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center">Dermatology</h3>
            </div>

            <div className="w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Orthopedics" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center">Orthopedics</h3>
            </div>

            <div className="w-48 bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Pediatrics" width={40} height={40} />
              </div>
              <h3 className="text-lg text-gray-500 text-center">Pediatrics</h3>
            </div>

            <div className="w-48 bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Neurology" width={40} height={40} />
              </div>
              <h3 className="text-lg text-gray-500 text-center">Neurology</h3>
            </div>

            <div className="w-48 bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Radiology" width={40} height={40} />
              </div>
              <h3 className="text-lg text-gray-500 text-center">Radiology</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-16 sm:py-20 lg:py-32">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[700] font-['Montserrat'] mb-4 sm:mb-6 lg:mb-8">
          <span className="text-[#18A093]">Frequently Asked</span>{' '}
          <span className="text-[#003366]">Questions</span>
        </h2>
        <p className="text-base sm:text-lg lg:text-[20px] text-[#555555] font-['Montserrat'] font-medium mb-8 sm:mb-10 lg:mb-12">
          Learn how our solutions bring quality healthcare closer to those who need it most.
        </p>

        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {/* FAQ Items */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq1' ? null : 'faq1')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#333333] font-['Montserrat']">What is Bridge Healthcare and what makes it different from other healthcare providers?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq1' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq1' ? 'max-h-40 py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-['Montserrat']">Bridge Healthcare is a revolutionary healthcare platform that brings quality medical services directly to rural and underserved communities through our network of Smart Health Centres and Mobile Units.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq2' ? null : 'faq2')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#333333] font-['Montserrat']">How does Bridge Healthcare ensure quality healthcare in rural areas?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq2' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq2' ? 'max-h-40 py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-['Montserrat']">Through our network of Smart Health Centres and Mobile Units, we combine advanced technology with trained healthcare professionals to deliver quality medical services directly to rural communities.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#333333] font-['Montserrat']">What services does Bridge Healthcare provide through its Smart Health Centres?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq3' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq3' ? 'max-h-40 py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-['Montserrat']">Our Smart Health Centres offer comprehensive services including health check-ups, tele-consultations, diagnostics, and wellness programs, all supported by trained healthcare professionals and advanced technology.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#333333] font-['Montserrat']">Where is Bridge Healthcare currently operating? Are your services available in my area?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq3' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq3' ? 'max-h-40 py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-['Montserrat']">Our Smart Health Centres offer comprehensive services including health check-ups, tele-consultations, diagnostics, and wellness programs, all supported by trained healthcare professionals and advanced technology.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#333333] font-['Montserrat']">How can I get involved with Bridge Healthcare — as a partner, funder or volunteer?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq3' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq3' ? 'max-h-40 py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-['Montserrat']">Our Smart Health Centres offer comprehensive services including health check-ups, tele-consultations, diagnostics, and wellness programs, all supported by trained healthcare professionals and advanced technology.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* PARTNER SECTION */}
    <Partner />
  </>
  );
}