'use client';

import Partner from '@/app/components/Partner';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function OurSolution() {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);
  const [showFaq, setShowFaq] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    // Safe window check for SSR
    const checkTouchDevice = (): boolean => {
      if (typeof window === 'undefined') return false;
      return 'ontouchstart' in window;
    };

    setIsTouchDevice(checkTouchDevice());
  }, []);

  const handleToggle = (cardId: string): void => {
    if (isTouchDevice) {
      console.log("touch", cardId)
      setActiveCard(cardId);
    }
  };

  return (<>
    <div className="fixed right-10 top-[40%] transform -translate-y-1/2 z-50 transform rotate-270 origin-top-right whitespace-nowrap">
      <Link
        href="/contactUs"
        className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-[#18A093] via-[#128387] to-[#003366] hover:from-[#003366] hover:via-[#128387] hover:to-[#18A093] transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Schedule a Demo
      </Link>
    </div>
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
        <div className="max-w-[70%]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-[700] font-['Montserrat'] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-4 sm:mb-6">
            Complete Care Access
            <br />
            From Symptoms to Specialist, Seamlessly.
          </h1>
        </div>
      </div>
    </div>

    {/* SOLUTION OVERVIEW SECTION */}
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
          <span className="text-[#18A093]">Our</span>{' '}
          <span className="text-[#003366]">Solution Overview</span>
        </h2>
        <p className="text-[#555555] text-[18px] text-center sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
          The Smart Healthcare Machine improves healthcare with data-driven accessibility and efficiency.
        </p>

        <div className="space-y-4 mb-16">
          <div className="group hover:z-10 card-hover" >
            <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:border-[#18A093] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#18A093] group-hover:to-[#003366] md:w-[50%]" onClick={() => handleToggle('card_1')}>
              <div className="flex items-center">
                <div className=" flex items-center justify-center  mr-4  group-hover:bg-opacity-20">
                  <Image src="/icons/sol-2-lgo1.png"
                    alt='heart'
                    width={100}
                    height={100}
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white  group-hover:text-white ">Tele-Diagnostic Access</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Hidden content that shows on hover */}
            <div className={` group-hover:block overflow-hidden w-full bg-white p-4 z-10 ${activeCard === 'card_1' ? 'block' : 'hidden'}`}>
              <div className="flex flex-row items-center gap-6  specialty-cards-container  gap-4 sm:gap-6 lg:gap-8">
                {/* Left column - Smart Health Checkups */}
                <div className="h-full p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Smart Health Checkups</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Vitals monitoring (BP, SPO2, Heart Rate, Temp)</li>
                    <li>ECG, Blood tests, Hemoglobin, Lipid Profile</li>
                    <li>Early detection of chronic conditions</li>
                  </ul>
                </div>

                {/* Right column - Teleconsultation Services */}
                <div className=" h-full bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Live Diagnostic Interface</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Real-time vitals and diagnostic data sharing</li>
                    <li>Doctor access during teleconsultations</li>
                    <li>Data-driven remote clinical decisions</li>
                  </ul>
                </div>
                <div className=" h-full bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Advance Diagnostic Modules</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Spirometer, Iris Scope, Ultrasound, ECG Viewer</li>
                    <li>Comprehensive digital diagnostics</li>
                    <li>Seamless specialist collaboration</li>
                  </ul>
                </div>
                <div className="h-full bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Rapid Diagnostic Kits (Coming Soon)</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Support for integration of blood, infection, and viral rapid tests</li>
                    <li>Instant reporting via SHM digital workflow</li>
                    <li>Expanding rural diagnostic capabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          {/* Nurse-Enabled Health Access */}
          <div className="group hover:z-10 card-hover" >
            <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:border-[#18A093] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#18A093] group-hover:to-[#003366] md:w-[50%]" onClick={() => handleToggle('card_2')}>
              <div className="flex items-center">
                <div className=" flex items-center justify-center  mr-4  group-hover:bg-opacity-20">
                  <Image src="/icons/sol-2-lgo1.png"
                    alt='heart'
                    width={100}
                    height={100}
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white  group-hover:text-white ">Nurse-Enabled Health Access</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {/* Hidden content that shows on hover */}
            <div className={` ${activeCard === 'card_2' ? 'block' : 'hidden'} group-hover:block overflow-hidden w-full bg-white p-4 z-10`}>
              <div className={`flex flex-row items-center   gap-4 sm:gap-6 lg:gap-8 ${activeCard === 'card_2' && ' specialty-cards-container'}`}>
                {/* Left column - Smart Health Checkups */}
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Guided Patient Screening</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Nurse-supported checkups using SHM</li>
                    <li>Accurate data collection for remote diagnosis</li>
                    <li>Improving confidence in underserved regions</li>
                  </ul>
                </div>

                {/* Right column - Teleconsultation Services */}
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Teleconsultation Support</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Nurses assist patients in remote consultations</li>
                    <li>Help patients understand doctor&apos;s advice</li>
                    <li>Enable medication instructions and follow-ups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Queue Management */}
          <div className="group  hover:z-10">
            <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:border-[#18A093] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#18A093] group-hover:to-[#003366] md:w-[50%]" onClick={() => handleToggle('card_3')}>
              <div className="flex items-center">
                <div className=" flex items-center justify-center  mr-4  group-hover:bg-opacity-20">
                  <Image src="/icons/sol-2-lgo1.png"
                    alt='heart'
                    width={100}
                    height={100}
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white  group-hover:text-white ">Smart Queue Management</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {/* Hidden content that shows on hover */}
            <div className={` ${activeCard === 'card_3' ? 'block' : 'hidden'} group-hover:block overflow-hidden w-full bg-white p-4 z-10`}>
              <div className={`flex flex-row items-center   gap-4 sm:gap-6 lg:gap-8 ${activeCard === 'card_3' && ' specialty-cards-container'}`}>
                {/* Left column - Smart Health Checkups */}
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Digital Appointment Scheduling</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Slot booking through Patient App</li>
                    <li>Queue management based on urgency</li>
                    <li>Reduces overcrowding at centers</li>
                  </ul>
                </div>

                {/* Right column - Teleconsultation Services */}
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Remote Patient Notifications</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>SMS/app alerts for appointment reminders</li>
                    <li>Rescheduling and real-time wait time tracking</li>
                    <li>Patient-friendly, low-wage loss experience</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Personalized Health Tracking */}
          <div className="group  hover:z-10">
            <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:border-[#18A093] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#18A093] group-hover:to-[#003366] md:w-[50%]" onClick={() => handleToggle('card_4')}>
              <div className="flex items-center">
                <div className=" flex items-center justify-center  mr-4  group-hover:bg-opacity-20">
                  <Image src="/icons/sol-2-lgo1.png"
                    alt='heart'
                    width={100}
                    height={100}
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white  group-hover:text-white ">Personalized Health Tracking</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {/* Hidden content that shows on hover */}
            <div className={` ${activeCard === 'card_4' ? 'block' : 'hidden'} group-hover:block overflow-hidden w-full bg-white p-4 z-10`}>
              <div className={`flex flex-row items-center   gap-4 sm:gap-6 lg:gap-8 ${activeCard === 'card_4' && ' specialty-cards-container'}`}>
                {/* Left column - Smart Health Checkups */}
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Digital Health Records</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Secure, cloud-based patient files</li>
                    <li>Accessible by patients, doctors, and nurses</li>
                    <li>Enables consistent long-term care</li>
                  </ul>
                </div>

                {/* Right column - Teleconsultation Services */}
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Follow-Up & Chronic Care Management</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Scheduled remote consultations</li>
                    <li>Smart reminders for medications and diagnostics</li>
                    <li>Patient app integration for easy tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Preventive Health Programs */}
          <div className="group  hover:z-10">
            <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:border-[#18A093] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#18A093] group-hover:to-[#003366] md:w-[50%]" onClick={() => handleToggle('card_5')}>
              <div className="flex items-center">
                <div className=" flex items-center justify-center  mr-4  group-hover:bg-opacity-20">
                  <Image src="/icons/sol-2-lgo1.png"
                    alt='heart'
                    width={100}
                    height={100}
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white  group-hover:text-white ">Preventive Health Programs</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {/* Hidden content that shows on hover */}
            <div className={` ${activeCard === 'card_5' ? 'block' : 'hidden'} group-hover:block overflow-hidden w-full bg-white p-4 z-10`}>
              <div className="flex flex-row items-center gap-6  specialty-cards-container  gap-4 sm:gap-6 lg:gap-8">
                {/* Left column - Smart Health Checkups */}
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Wellness Screenings</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Mass health checkups for BP, Sugar, BMI, etc.</li>
                    <li>Catch chronic diseases before symptoms escalate</li>
                    <li>Community wellness initiatives</li>
                  </ul>
                </div>

                {/* Right column - Teleconsultation Services */}
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Dietary & Lifestyle Counseling</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Personalized nutrition and fitness advice</li>
                    <li>Preventive health and disease management focus</li>
                    <li>Continuous virtual support for behavior change</li>
                  </ul>
                </div>
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Educational Workshops & Resources</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Preventive health seminars and webinars</li>
                    <li>Digital material access through Patient App</li>
                    <li>Building community awareness on wellness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Targeted Health Interventions */}
          <div className="group  hover:z-10">
            <div className="bg-white border border-gray-200 p-4 rounded-lg flex items-center justify-between cursor-pointer hover:border-[#18A093] transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#18A093] group-hover:to-[#003366] md:w-[50%]" onClick={() => handleToggle('card_6')}>
              <div className="flex items-center">
                <div className=" flex items-center justify-center  mr-4  group-hover:bg-opacity-20">
                  <Image src="/icons/sol-2-lgo1.png"
                    alt='heart'
                    width={100}
                    height={100}
                    className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                </div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white  group-hover:text-white ">Targeted Health Interventions</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {/* Hidden content that shows on hover */}
            <div className={` ${activeCard === 'card_6' ? 'block' : 'hidden'} group-hover:block overflow-hidden w-full bg-white p-4 z-10`}>
              <div className="flex flex-row items-center gap-6  specialty-cards-container  gap-4 sm:gap-6 lg:gap-8">
                {/* Left column - Smart Health Checkups */}
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Health Analytics Dashboard</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Location-wise health trend visualization</li>
                    <li>Predictive insights for outbreaks, chronic disease mapping</li>
                    <li>Actionable analytics for faster response</li>
                  </ul>
                </div>

                {/* Right column - Teleconsultation Services */}
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat'] ">Hospital & NGO Connectivity</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Connect rural areas to city hospitals & NGO programs</li>
                    <li>Real-time tele-diagnostics + referrals</li>
                    <li>Partnerships for scaling preventive health drive</li>
                  </ul>
                </div>
                <div className="bg-white p-2 md:p-6 rounded-lg border-2 border-gray-300 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-[#EBF6FE] rounded-full mr-4">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={100}
                        height={100}
                        className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  font-['Montserrat']">Data-Driven Program Planning</h3>
                  </div>
                  <ul className="list-disc border-b-2 border-gray-300 pb-2 list-inside text-gray-600 ml-4 space-y-1">
                    <li>Resource allocation based on live data</li>
                    <li>Enable funders and policymakers to optimize spending</li>
                    <li>Targeted intervention for maximum impact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* Departments Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
          <span className="text-[#18A093]">25+</span>{' '}
          <span className="text-[#003366]">Connecting Departments</span>
        </h2>
        <p className="text-[#555555] text-[18px] text-center sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
          Seamlessly connecting patients to 25+ medical departments for comprehensive, coordinated care.
        </p>
        <div className="pl-2 sm:pl-4 lg:pl-8 overflow-hidden">
          <div className="specialty-cards-container pb-4 sm:pb-5 lg:pb-6 space-x-4 sm:space-x-5 lg:space-x-6">
            {/* First set of cards */}
            {/* Department Cards */}
            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-neu.png" alt="Pediatrics" width={75} height={80} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white  h-[30%]">Neurology</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-drmt.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Dermatology</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-rdo.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Radiology</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-pul.png" alt="Pediatrics" width={74} height={80} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Pulmonary</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-ent.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">ENT</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-crdio.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Cardiology</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-ortho.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Orthopedics</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-obs.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Obstetrics & Gynecology</h3>
            </div>

            {/* Duplicate set of cards for continuous scrolling */}
            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-hemo.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Haematology</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-fmly.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Family Medicine</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-psy.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Psychology</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-pedi.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Pediatrics</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-opt.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Ophthalmology</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-ando.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Endocrinology</h3>
            </div>

            <div className="hover:bg-[#0E7280] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg  flex flex-col items-center justify-between space-y-3 sm:space-y-4">
              <Image src="/icons/sol-3-nutri.png" alt="Pediatrics" width={60} height={60} className='w-auto h-[70%]' />
              <h3 className="text-base sm:text-lg text-gray-800 text-center group-hover:text-white h-[30%]">Nutrition & Wellness</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
          <span className="text-[#18A093]">FA</span>
          <span className="text-[#003366]">Q<span className='text-[26px] sm:text-[30px]'>s</span> </span>
        </h2>
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          {/* FAQ Items */}
          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq1' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq1' ? null : 'faq1')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq1' ? 'text-white' : 'text-[#333333]'} `}>How do advanced digital modules support specialists across different departments?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq1' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq1' ? 'max-h-[500px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-[14px] lg:text-[16px] font-['Montserrat'] text-white leading-relaxed">Our advanced modules—like the Digital Otoscope, Dermatoscope, Spirometer, Ultrasound, and Iris Scope—enable specialists from ENT, dermatology, pulmonology, maternal health, and ophthalmology to remotely assess patients with high clinical accuracy. These tools provide medical-grade visuals and data, allowing specialists to evaluate conditions as if the patient were in front of them—making multi-specialty care accessible even in remote corners of the country.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq2' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq2' ? null : 'faq2')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq2' ? 'text-white' : 'text-[#333333]'} `}> What kind of diagnostic tests are supported by the Smart Healthcare Machine?
              </span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq2' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq2' ? 'max-h-[500px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat'] leading-relaxed">The Smart Healthcare Machine supports a comprehensive suite of tests including Blood Sugar, Hemoglobin, Lipid Profile, and Renal Function Test, alongside vital signs like Blood Pressure, SpO₂, Heart Rate, and Temperature. Integrated with 12-lead ECG and a Digital Stethoscope, it offers a strong foundation for cardiac and general medical evaluations. Together, these diagnostics ensure that patients receive timely and accurate care without needing to travel to distant health facilities.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq3' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq3' ? 'text-white' : 'text-[#333333]'} `}>How do doctors access real-time diagnostic data during tele-consultations?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq3' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq3' ? 'max-h-[500px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat'] leading-relaxed"> During tele-consultations, doctors receive live health data, including ECGs, vitals, diagnostic reports, scanned documents, and even real-time auscultation audio from the digital stethoscope. This enables them to make informed decisions with full context, enhancing the accuracy and depth of virtual consultations—especially critical in rural settings with limited access to specialists.</p>
            </div>
          </div>

          {showFaq === true && <> <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq4' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq4' ? null : 'faq4')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq4' ? 'text-white' : 'text-[#333333]'} `}>Can patients receive their reports and prescriptions instantly?
              </span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq4' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq4' ? 'max-h-[500px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">
                Yes. Once the consultation is complete, patients receive printed copies of their reports and prescriptions on the spot via the machine’s integrated printer. All data is also securely stored in their digital health profile, making future follow-ups and continuity of care seamless and accessible—even if the patient has never had a medical record before.</p>
            </div>
          </div>

            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq5' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq5' ? null : 'faq5')}
                className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq5' ? 'text-white' : 'text-[#333333]'} `}>What is Bridge Healthcare’s Hospital Connecting Service and how does it work?</span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq5' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq5' ? 'max-h-[500px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
                <p className="text-sm sm:text-base lg:text-lg font-['Montserrat'] text-white">Our Hospital Connecting Service bridges the gap between rural patients and advanced hospital care. Through our Smart Healthcare Machines and nurse-led operations, we capture diagnostic data and connect patients with specialists from partner hospitals in real time. If a case requires further intervention, our platform facilitates digital referrals, document transfer, and even hospital appointment bookings—ensuring smoother transitions from village-level care to secondary or tertiary institutions.
                  This model strengthens hospital outreach, enables early case identification, and reduces overcrowding by digitally triaging patients—all while keeping them informed, prepared, and guided through the care journey.</p>
              </div>
            </div>
            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq6' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq6' ? null : 'faq6')}
                className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq6' ? 'text-white' : 'text-[#333333]'} `}>What kind of Wellness Programs does Bridge Healthcare offer?                </span>
                <svg
                  className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq6' ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq6' ? 'py-3 sm:py-4 lg:py-6' : 'max-h-0 py-0'} overflow-hidden`}>
                <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']"> We offer community-driven Wellness Programs focused on preventive care, lifestyle monitoring, and chronic disease management. These programs are designed to detect risks early and promote healthier habits through periodic checkups, awareness drives, and health tracking via our digital system.
                  <br />Wellness modules include:
                  <br />1: Hypertension and Diabetes monitoring
                  <br />2: Women&apos;s wellness and reproductive health
                  <br />3: Elderly care follow-ups
                  <br />4: Nutrition and lifestyle guidance
                  <br />All data is recorded in patient profiles, enabling long-term care visibility and helping hospitals or NGOs run evidence-based community health interventions.
                </p>
              </div>
            </div></>}
          <div className="mt-12">
            <button onClick={() => setShowFaq(!showFaq)}
              className="inline-block px-8 py-3 border-1 border-[#003366] text-[#003366] rounded-xl font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
            >
              {showFaq === true ? 'Hide' : 'Show All'}
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* PARTNER SECTION */}
    <Partner />
  </>
  );
}