'use client';

import Partner from '@/app/components/Partner';
import Image from 'next/image';
import React, { useState } from 'react';

export default function OurProducts() {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);
  const [activeProd, setActiveProd] = React.useState<number | null>(1);
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
            <span className="text-[#18A093]">Providing</span>{' '}
            <span className="text-[#003366]">Hi-Fi Healthcare</span>{' '}
            <span className="text-[#003366]">Connectivity</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-[400] font-['Font family'] leading-[150%] sm:leading-[130%] md:leading-[100%] tracking-[0%] align-middle text-[#555555]">
            This seamless, real-time flow of high-fidelity health data transforms the way patients and providers connect — enabling a more reliable, responsive and personalized remote care experience.
          </p>
        </div>
      </div>
    </div>

    {/* Our Products Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] font-['Montserrat'] leading-tight sm:leading-tight md:leading-tight lg:leading-[100%] tracking-[0px] align-middle text-[#003366]">
            <span className="text-[#18A093]">Our</span>{' '}
            <span className="text-[#003366]">Products Overview</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-[400] font-['Font family'] leading-[150%] sm:leading-[130%] md:leading-[100%] tracking-[0%] align-middle text-[#555555]">
            Smart Healthcare Machine integrates tele-consultations with real-time health data and is supported by Doctor, Patient and Nurse applications for streamlined collaboration and proactive care.
          </p></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Text Content */}
          <div className="space-y-6 mt-10">
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              {/* Product List */}
              <div className={`flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300 ${activeProd === 1 && 'border-2 border-gray-300'}`} onClick={() => setActiveProd(1)}>
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Image src="/icons/prd-2-lgo1.png" alt="Smart Healthcare Machine" width={32} height={32} className="w-full h-full" />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#003366] font-['Montserrat']">Smart Healthcare Machine</p>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className={`flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300 ${activeProd === 2 && 'border-2 border-gray-300'}`} onClick={() => setActiveProd(2)}>
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Image src="/icons/prd-2-lgo1.png" alt="Doctor App" width={32} height={32} />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#003366] font-['Montserrat']">Doctor App</p>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className={`flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300 ${activeProd === 3 && 'border-2 border-gray-300'}`} onClick={() => setActiveProd(3)}>
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Image src="/icons/prd-2-log2.png" alt="Patient App" width={32} height={32} />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#003366] font-['Montserrat']">Patient App</p>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div className={`flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300 ${activeProd === 4 && 'border-2 border-gray-300'}`} onClick={() => setActiveProd(4)}>
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Image src="/icons/prd-2-log2.png" alt="Operator / Nurse App" width={32} height={32} />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#003366] font-['Montserrat']">Operator / Nurse App</p>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div
                className="inline-block px-8 py-3 border-2 border-[#003366] text-[#003366] rounded-md font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
              >
                Know more
              </div>
            </div>
          </div>
          {activeProd === 1 &&
            <div className="space-y-6">
              <div className="sticky top-4 z-10">
                <div className="relative aspect-square rounded-lg overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center bg-white">
                  <Image
                    src="/icons/hm-7-img.png"
                    alt="Smart Healthcare Machine"
                    width={450}
                    height={450}
                    className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-auto object-contain transition-all duration-300"
                    priority
                  />
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="px-6 py-2 text-[#003366] border-2 border-[#003366] rounded-md hover:bg-[#003366] hover:text-white transition-all duration-300"
                    >
                      {showMore ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </div>

              </div>
              {showMore && (
                <div className="relative bg-white overflow-hidden">
                  <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5">
                    <div className="space-y-4 sm:space-y-5 md:space-y-6 bg-white rounded-lg p-3 sm:p-4 md:p-5">
                      <h3 className="text-xl sm:text-2xl md:text-[24px] font-[700] font-['Montserrat'] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-[0%] align-middle text-[#003366] mb-4 sm:mb-6 md:mb-8">How It Works</h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">1.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">The TDM delivers instant health checkups with vitals, ECG, blood tests, and imaging tools—providing accurate, digital results within minutes for fast, data-driven medical consultations.</p>
                        </div>

                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">2.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Patients can either walk in or schedule an appointment or with help from the on-site nurse.</p>
                        </div>
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">3.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Real-time diagnostic consultations with experienced doctors — bringing expert medical care to patients, right from the comfort of their homes.</p>
                        </div>
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">4.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">The doctor uploads a digital prescription and suggests follow-up or specialist care if required, while the on-site nurse guides the patient in understanding and executing the next steps.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 bg-white rounded-lg p-3 sm:p-4 md:p-5 mt-4 sm:mt-5 md:mt-6">
                      <h3 className="text-xl sm:text-2xl md:text-[24px] font-[700] font-['Montserrat'] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-[0%] align-middle text-[#003366] mb-4 sm:mb-6 md:mb-8">Our Features</h3>
                      <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">1.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Virtual consultations</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>}
          {activeProd === 2 &&
            <div className="space-y-6">
              <div className="sticky top-4 z-10">
                <div className="relative aspect-square rounded-lg overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center bg-white">
                  <Image
                    src="/icons/hm-7-img.png"
                    alt="Smart Healthcare Machine"
                    width={450}
                    height={450}
                    className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-auto object-contain transition-all duration-300"
                    priority
                  />
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="px-6 py-2 text-[#003366] border-2 border-[#003366] rounded-md hover:bg-[#003366] hover:text-white transition-all duration-300"
                    >
                      {showMore ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </div>

              </div>
              {showMore && (
                <div className="relative bg-white overflow-hidden">
                  <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5">
                    <div className="space-y-4 sm:space-y-5 md:space-y-6 bg-white rounded-lg p-3 sm:p-4 md:p-5">
                      <h3 className="text-xl sm:text-2xl md:text-[24px] font-[700] font-['Montserrat'] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-[0%] align-middle text-[#003366] mb-4 sm:mb-6 md:mb-8">How It Works</h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">1.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Doctors receive live health data from the TDM, including vitals, ECG, and diagnostic images, before or during the consultation.</p>
                        </div>

                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">2.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">The app enables secure, high-quality video calls with patients, supported by on-site nurse assistance if needed.</p>
                        </div>
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">3.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">After evaluation, doctors can generate and upload digital prescriptions directly through the app for instant patient access.</p>
                        </div>
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">4.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Doctors can schedule follow-up consultations, refer patients to specialists, or suggest additional care — all tracked within the platform.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 bg-white rounded-lg p-3 sm:p-4 md:p-5 mt-4 sm:mt-5 md:mt-6">
                      <h3 className="text-xl sm:text-2xl md:text-[24px] font-[700] font-['Montserrat'] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-[0%] align-middle text-[#003366] mb-4 sm:mb-6 md:mb-8">Our Features</h3>
                      <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">1.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Virtual consultations</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>}
          {activeProd === 3 &&
            <div className="space-y-6">
              <div className="sticky top-4 z-10">
                <div className="relative aspect-square rounded-lg overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center bg-white">
                  <Image
                    src="/icons/hm-7-img2.png"
                    alt="Smart Healthcare Machine"
                    width={450}
                    height={450}
                    className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-auto object-contain transition-all duration-300"
                    priority
                  />
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="px-6 py-2 text-[#003366] border-2 border-[#003366] rounded-md hover:bg-[#003366] hover:text-white transition-all duration-300"
                    >
                      {showMore ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </div>

              </div>
              {showMore && (
                <div className="relative bg-white overflow-hidden">
                  <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5">
                    <div className="space-y-4 sm:space-y-5 md:space-y-6 bg-white rounded-lg p-3 sm:p-4 md:p-5">
                      <h3 className="text-xl sm:text-2xl md:text-[24px] font-[700] font-['Montserrat'] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-[0%] align-middle text-[#003366] mb-4 sm:mb-6 md:mb-8">How It Works</h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">1.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Virtual consultations with experienced doctors, making healthcare more accessible and efficient. Patients receive expert medical advice from the comfort of their homes.</p>
                        </div>

                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">2.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Virtual consultations with experienced doctors, making healthcare more accessible and efficient. Patients receive expert medical advice from the comfort of their homes.</p>
                        </div>
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">3.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Virtual consultations with experienced doctors, making healthcare more accessible and efficient. Patients receive expert medical advice from the comfort of their homes.</p>
                        </div>
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">4.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Virtual consultations with experienced doctors, making healthcare more accessible and efficient. Patients receive expert medical advice from the comfort of their homes.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 bg-white rounded-lg p-3 sm:p-4 md:p-5 mt-4 sm:mt-5 md:mt-6">
                      <h3 className="text-xl sm:text-2xl md:text-[24px] font-[700] font-['Montserrat'] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-[0%] align-middle text-[#003366] mb-4 sm:mb-6 md:mb-8">Our Features</h3>
                      <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">1.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Virtual consultations</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>}
          {activeProd === 4 &&
            <div className="space-y-6">
              <div className="sticky top-4 z-10">
                <div className="relative aspect-square rounded-lg overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center bg-white">
                  <Image
                    src="/icons/hm-7-img3.png"
                    alt="Smart Healthcare Machine"
                    width={450}
                    height={450}
                    className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] h-auto object-contain transition-all duration-300"
                    priority
                  />
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setShowMore(!showMore)}
                      className="px-6 py-2 text-[#003366] border-2 border-[#003366] rounded-md hover:bg-[#003366] hover:text-white transition-all duration-300"
                    >
                      {showMore ? 'Show Less' : 'Show More'}
                    </button>
                  </div>
                </div>

              </div>
              {showMore && (
                <div className="relative bg-white overflow-hidden">
                  <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5">
                    <div className="space-y-4 sm:space-y-5 md:space-y-6 bg-white rounded-lg p-3 sm:p-4 md:p-5">
                      <h3 className="text-xl sm:text-2xl md:text-[24px] font-[700] font-['Montserrat'] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-[0%] align-middle text-[#003366] mb-4 sm:mb-6 md:mb-8">How It Works</h3>
                      <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">1.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">The TDM delivers instant health checkups with vitals, ECG, blood tests, and imaging tools—providing accurate, digital results within minutes for fast, data-driven medical consultations.</p>
                        </div>

                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">2.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Patients can either walk in or schedule an appointment or with help from the on-site nurse.</p>
                        </div>
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">3.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Real-time diagnostic consultations with experienced doctors — bringing expert medical care to patients, right from the comfort of their homes.</p>
                        </div>
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">4.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">The doctor uploads a digital prescription and suggests follow-up or specialist care if required, while the on-site nurse guides the patient in understanding and executing the next steps.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4 bg-white rounded-lg p-3 sm:p-4 md:p-5 mt-4 sm:mt-5 md:mt-6">
                      <h3 className="text-xl sm:text-2xl md:text-[24px] font-[700] font-['Montserrat'] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-[0%] align-middle text-[#003366] mb-4 sm:mb-6 md:mb-8">Our Features</h3>
                      <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                          <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">1.</div>
                          <p className="text-sm sm:text-base md:text-lg text-gray-600">Virtual consultations</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}
            </div>}
        </div>

      </div>
    </div>

    {/* How it Works Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-12 sm:py-20 lg:py-32">
        <h2 className="mb-4 sm:mb-6 lg:mb-8">
          <span className="text-[#18A093] text-2xl sm:text-3xl lg:text-[36px] font-[700] font-['Montserrat'] leading-[100%] tracking-[0px] align-middle">Tele-Diagnostic </span>
          <span className="text-[#003366] text-2xl sm:text-3xl lg:text-[36px] font-[700] font-['Montserrat'] leading-[100%] tracking-[0px] align-middle">Workflow</span>
        </h2>
        <p className="mb-4 sm:mb-6 lg:mb-8 text-[#555555] text-base sm:text-lg lg:text-[20px] font-['Montserrat'] font-medium align-middle tracking-[0px]">A connected care journey — from instant health screening to real-time consultations and seamless referrals to specialists.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Workflow Diagram */}
          <div className="relative w-full mx-auto lg:mx-0 flex items-center justify-center">
            <Image
              src="/icons/prd-3-img.png"
              alt="Telediagnosis Workflow"
              width={500}
              height={500}
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto"
              priority
            />
          </div>

          {/* Steps */}
          <div className="space-y-6 flex flex-col items-start justify-between sm:space-y-8 lg:space-y-10">
            <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#18A093] flex items-center justify-center text-white text-lg sm:text-xl font-bold">1</div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-2 sm:mb-3">Patient Screening & Health Checkup</h3>
                <p className="text-sm sm:text-[14px] font-[400] leading-[150%] sm:leading-[100%] tracking-[0%] text-[#666666]">Vitals Check: BP, Pulse, SpO2, Temperature, BMI</p>
                <p className="text-sm sm:text-[14px] font-[400] leading-[150%] sm:leading-[100%] tracking-[0%] text-[#666666]">Basic Diagnostics: Blood Sugar, ECG, Lipid Profile, Hemoglobin</p>
                <p className="text-sm sm:text-[14px] font-[400] leading-[150%] sm:leading-[100%] tracking-[0%] text-[#666666]">Nurse Assistance: Guides patient, records EHR</p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#18A093] flex items-center justify-center text-white text-lg sm:text-xl font-bold">2</div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-2 sm:mb-3">Primary Consultation</h3>
                <p className="text-sm sm:text-[14px] font-[400] leading-[150%] sm:leading-[100%] tracking-[0%] text-[#666666]">Video Call with Doctor (Internal Medicine)</p>
                <p className="text-sm sm:text-[14px] font-[400] leading-[150%] sm:leading-[100%] tracking-[0%] text-[#666666]">Live Data Transmission: ECG, Blood Tests, Stethoscope Readings</p>
                <p className="text-sm sm:text-[14px] font-[400] leading-[150%] sm:leading-[100%] tracking-[0%] text-[#666666]">Diagnosis & Printed Prescription</p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#18A093] flex items-center justify-center text-white text-lg sm:text-xl font-bold">3</div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-2 sm:mb-3">Follow-up & Chronic Care</h3>
                <p className="text-sm sm:text-[14px] font-[400] leading-[150%] sm:leading-[100%] tracking-[0%] text-[#666666]">Chronic Disease Identification</p>
                <p className="text-sm sm:text-[14px] font-[400] leading-[150%] sm:leading-[100%] tracking-[0%] text-[#666666]">Follow-up Consultation & Specialist Referral</p>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#18A093] flex items-center justify-center text-white text-lg sm:text-xl font-bold">4</div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-2 sm:mb-3">Follow-up & Chronic Care</h3>
                <p className="text-sm sm:text-[14px] font-[400] leading-[150%] sm:leading-[100%] tracking-[0%] text-[#666666]">Remote Consultation with Specialist</p>
                <p className="text-sm sm:text-[14px] font-[400] leading-[150%] sm:leading-[100%] tracking-[0%] text-[#666666]">Report Analysis & Final Prescription</p>
                <p className="text-sm sm:text-[14px] font-[400] leading-[150%] sm:leading-[100%] tracking-[0%] text-[#666666]">Referral to Hospital (if advanced care is needed)</p>
              </div>
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
          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq1' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq1' ? null : 'faq1')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq1' ? 'text-white' : 'text-[#333333]'} `}>What is the Smart Healthcare Machine and what diagnostics does it support?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq1' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq1' ? 'max-h-[1000px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg font-['Montserrat'] text-white">The Smart Healthcare Machine is a compact yet powerful health-tech innovation designed to deliver real-time, personalized, and dignified healthcare—right at the community level. It supports a wide range of point-of-care blood tests including Blood Sugar, Hemoglobin, Lipid Profile, and Renal Function Test, alongside essential vitals like Blood Pressure, Oxygen Saturation, Heart Rate, and Body Temperature.
                Its clinical backbone includes an integrated Digital Stethoscope and 12-Lead ECG, enabling detailed cardiac assessment during consultations. It also offers optional advanced digital modules—like the Digital Otoscope, Dermatoscope, Spirometer, Iris Scope, and even Ultrasound—that enhance diagnostic precision in fields like ENT, dermatology, respiratory health, ophthalmology, and prenatal care.</p>
            </div>
          </div>
          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq2' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq2' ? null : 'faq2')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq2' ? 'text-white' : 'text-[#333333]'} `}>How does the machine connect with the Nurse and Doctor apps?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq2' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq2' ? 'max-h-[1000px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg font-['Montserrat'] text-white">The Smart Healthcare Machine is a compact yet powerful health-tech innovation designed to deliver real-time, personalized, and dignified healthcare—right at the community level. It supports a wide range of point-of-care blood tests including Blood Sugar, Hemoglobin, Lipid Profile, and Renal Function Test, alongside essential vitals like Blood Pressure, Oxygen Saturation, Heart Rate, and Body Temperature.
                The system is built as a fully connected ecosystem, where the Smart Healthcare Machine works in tandem with dedicated Nurse and Doctor applications. Nurses operate the machine, assist in data collection, and manage the patient queue, while doctors receive live diagnostic data, high-resolution medical images, and real-time stethoscope audio during consultations. This tight integration ensures seamless, accurate, and timely care delivery—whether you&apos;re in a rural village or an urban society.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq3' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq3' ? 'text-white' : 'text-[#333333]'} `}>How do doctors ensure accurate diagnosis remotely?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq3' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq3' ? 'max-h-[1000px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">Doctors rely on more than just a video call. They receive live ECG readings, diagnostic reports, auscultation audio, scanned patient records, and digital visuals from various modules—all in one unified interface. The live transmission of stethoscope sounds during consultation allows them to listen to the patient’s heart and lungs remotely, replicating the physical exam experience. This isn’t just remote healthcare—it’s clinical-grade tele-consultation.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq4' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq4' ? null : 'faq4')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq4' ? 'text-white' : 'text-[#333333]'} `}>Is internet connectivity required for the system to work?              </span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq4' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq4' ? 'max-h-[1000px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">Yes, internet access is necessary for real-time data sharing, doctor consultations, and cloud-based health records. However, the system is resilient—diagnostics can be conducted offline and automatically synced once connectivity is restored. This ensures uninterrupted care, even in low-network rural zones.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq5' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq5' ? null : 'faq5')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq5' ? 'text-white' : 'text-[#333333]'} `}>Can the Smart Healthcare Machine print prescriptions and health reports on the spot?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq5' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq5' ? 'max-h-[1000px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">Absolutely. The machine comes equipped with both a Printer and a Document Scanner. It can instantly print prescriptions, diagnostic reports, and follow-up instructions, giving patients tangible takeaways after each visit. The scanner allows nurses to upload old prescriptions, lab reports, and discharge summaries to the patient’s digital profile—ensuring that both new and historical data are available to doctors for better clinical decisions. This process helps digitize healthcare journeys, especially for those who’ve never had a medical record before.</p>
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