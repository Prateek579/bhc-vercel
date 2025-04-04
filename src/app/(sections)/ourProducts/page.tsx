'use client';

import Partner from '@/app/components/Partner';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function OurProducts() {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);
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
            This seamless, real-time flow of high-quality health data transforms how patients and healthcare providers connect, fostering a more reliable, responsive, and personalized approach to remote healthcare.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              {/* Product List */}
              <Link href="/products/smart-healthcare-machine" className="flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12">
                  <Image src="/icons/monitor.svg" alt="Smart Healthcare Machine" width={48} height={48} className="w-full h-full" />
                </div>
                <p className="text-base sm:text-lg md:text-xl lg:text-xl text-[#003366] font-['Montserrat']">Smart Healthcare Machine</p>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link href="/products/doctor-app" className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Image src="/icons/doctor.svg" alt="Doctor App" width={32} height={32} />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#003366] font-['Montserrat']">Doctor App</p>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link href="/products/patient-app" className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Image src="/icons/patient.svg" alt="Patient App" width={32} height={32} />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#003366] font-['Montserrat']">Patient App</p>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <Link href="/products/operator-app" className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Image src="/icons/nurse.svg" alt="Operator / Nurse App" width={32} height={32} />
                </div>
                <p className="text-sm sm:text-base md:text-lg text-[#003366] font-['Montserrat']">Operator / Nurse App</p>
                <div className="ml-auto">
                  <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>

            <div className="mt-8">
              <Link
                href="/know-more"
                className="inline-block px-8 py-3 border-2 border-[#003366] text-[#003366] rounded-md font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
              >
                Know more
              </Link>
            </div>
          </div>

          {/* Product Image */}
          <div className="space-y-6 relative">
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
          </div>
        </div>
        {showMore && (
          <div className="relative bg-white overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-20 md:py-32">
              <div className="space-y-8 bg-white rounded-lg p-6">
                <h3 className="text-[24px] font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#003366] mb-8">How It Works</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#18A093] flex items-center justify-center text-white text-xl font-bold">1</div>
                    <div>
                      <h4 className="text-[20px] font-[600] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-2">Patient Onboarding via Nurse Application</h4>
                      <p className="text-gray-600">The nurse initiates the session using the Nurse App, registering the patient and managing appointments. The app syncs with the machine to begin diagnostics and auto-logs patient records.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#18A093] flex items-center justify-center text-white text-xl font-bold">2</div>
                    <div>
                      <h4 className="text-[20px] font-[600] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-2">Real-Time Diagnostics with the Smart Healthcare Machine</h4>
                      <p className="text-gray-600">The machine performs instant health assessments—vitals, ECG, blood tests, and imaging—capturing data in real time. All results are automatically sent to the cloud and made instantly available to the doctor through the Doctor App.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#18A093] flex items-center justify-center text-white text-xl font-bold">3</div>
                    <div>
                      <h4 className="text-[20px] font-[600] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-2">Live Doctor Consultation through Doctor Application</h4>
                      <p className="text-gray-600">The doctor receives diagnostic data and images via the Doctor App, enabling a high-quality video consultation. The doctor can listen to the patient using the live stethoscope feed and analyze reports without delay.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#18A093] flex items-center justify-center text-white text-xl font-bold">4</div>
                    <div>
                      <h4 className="text-[20px] font-[600] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-2">Digital Prescription and Health Report Generation</h4>
                      <p className="text-gray-600">After the consultation, the doctor uploads a digital prescription and reviewed health summary via the Doctor App. The system generates a printed copy of the prescription and health report, instantly available to the patient on-site.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#18A093] flex items-center justify-center text-white text-xl font-bold">5</div>
                    <div>
                      <h4 className="text-[20px] font-[600] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-2">Guided Support & Follow-Up via Nurse Application</h4>
                      <p className="text-gray-600">The Nurse App provides tools for explaining prescriptions, tracking follow-ups and managing referrals. It ensures continuity of care and enables two-way communication between patient and provider.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
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