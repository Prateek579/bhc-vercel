'use client';

import Partner from '@/app/components/Partner';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function OurProducts() {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = (): boolean => {
      if (typeof window === 'undefined') return false;
      return 'ontouchstart' in window;
    };

    setIsTouchDevice(checkTouchDevice());
  }, []);

  const [activeCard, setActiveCard] = React.useState<string | null>(null);



  const handleStepToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, cardId: string): void => {
    if (isTouchDevice) {
      const cards = document.querySelectorAll('.card-hover');
      cards.forEach(card => card.classList.remove('touch-hover'));

      if (activeStep === cardId) {
        e.currentTarget.classList.remove('touch-hover');
        setActiveStep(null);
      } else {
        e.currentTarget.classList.add('touch-hover');
        setActiveStep(cardId);
      }
    }
  };

  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, cardId: string): void => {
    if (isTouchDevice) {
      const cards = document.querySelectorAll('.card-hover');
      cards.forEach(card => card.classList.remove('touch-hover'));

      if (activeCard === cardId) {
        e.currentTarget.classList.remove('touch-hover');
        setActiveCard(null);
      } else {
        e.currentTarget.classList.add('touch-hover');
        setActiveCard(cardId);
      }
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
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">Our</span>{' '}
            <span className="text-[#003366]">Products</span>
          </h2>
          <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            <span className="text-black font-bold">Smart Healthcare Machine</span> integrates tele-consultations with real-time health data and is supported by <span className="text-black font-bold">Doctor</span>, <span className="text-black font-bold">Patient</span> and <span className="text-black font-bold">Nurse</span> applications for streamlined collaboration and proactive care.
          </p>
        </div>

        <div className="py-4 sm:py-6 md:py-8 lg:py-10">
          <p className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4 text-[#003366]">Smart Healthcare Machine Features</p>
          <div className="flex flex-col sm:flex-col md:flex-row space-y-4 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300">
            <div className="w-full md:w-[40%] items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 flex items-center justify-center md:border-r-2 md:border-[#003366] md:mr-5 md:pr-5">
              <Image src="/icons/hm-shm.png" alt="Smart Healthcare Machine Features" width={300} height={300} className="w-[50%] h-auto md:w-auto md:h-[80%]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Vitals Section */}
              <div className="space-y-2">
                <h3 className="text-[#003366] text-[18px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize font-['Montserrat] border-b-2 border-gray-300">Vitals</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-pr.png" alt='Pulse Rate image' width={25} height={25} />
                    <span className='text-sm sm:text-base md:text-lg text-gray-600' >Pulse Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-tem.png" alt='Temperature image' width={20} height={20} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Temperature</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-spo.png" alt='SpO2 image' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>SpO2</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src="/icons/hm-6-pp.png" alt='Blood Pressure images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Blood Pressure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-bmi.png" alt='Blood Sugar images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>BMI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-hrt.png" alt='Heart Rate images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Heart Rate</span>
                  </div>
                </div>
              </div>

              {/* Blood Tests Section */}
              <div className="space-y-2">
                <h3 className="text-[#003366] text-[18px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize font-['Montserrat] border-b-2 border-gray-300">Blood Tests</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-hem.png" alt='Hemoglobin images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Hemoglobin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-lp.png" alt='Lipid Profile images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Lipid Profile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-bs.png" alt='Blood Sugar images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Blood Sugar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-rft.png" alt='Renal Funtion Test images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Renal Function Test</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-hb.png" alt='HbA1c images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>HbA1c</span>
                  </div>
                </div>
              </div>

              {/* RAPID TEST */}
              <div className="space-y-2">
                <h3 className="text-[#003366] text-[18px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize font-['Montserrat] border-b-2 border-gray-300">Rapid Test</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Ovulation LH</span>
                  </div>
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Malaria AG</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>HIV I & II</span>
                  </div>
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Troponin I</span>
                  </div>
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Hepatitis C</span>
                  </div>
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Hepatitis B</span>
                  </div>
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Malaria AB</span>
                  </div>
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Pregnancy hCG</span>
                  </div>
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Syphilis</span>
                  </div>
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Typhoid</span>
                  </div>
                </div>
              </div>
              {/* Digital Stethoscope Section */}
              <div className="space-y-2">
                <h3 className="text-[#003366] text-[18px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize font-['Montserrat] border-b-2 border-gray-300">Digital Stethoscope</h3>
                <p className='text-blacktext-sm sm:text-base md:text-lg text-gray-600 text-center flex flex-row items-center justify-center'><Image src="/icons/hm-6-ls.png" alt='Stethoscope images' width={25} height={25} className='mr-2' />Live Stethoscope</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Aortic Sound</span>
                  </div>
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Mitral Sound</span>
                  </div>
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Pulmonic Sound</span>
                  </div>
                  <div className="flex items-center gap-2">

                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Tricuspid Sound</span>
                  </div>
                </div>
              </div>

              {/* ECG Section */}
              <div className="space-y-2">
                <h3 className="text-[#003366] text-[18px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize font-['Montserrat] border-b-2 border-gray-300">ECG</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-lead.png" alt='12 Lead image' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>12 Lead</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-rr.png" alt='Respiration rate images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Respiration Rate</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-[#003366] text-[18px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize font-['Montserrat] border-b-2 border-gray-300">Tele-Consultation: Real-Time Data</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-vc.png" alt='Video Consultation image' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Video Consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-rtda.png" alt='Real time data images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Real-Time Data Accessibility</span>
                  </div>
                </div>
              </div>

              {/* Digital Modules Section */}
              <div className="space-y-2 md:col-span-2">
                <h3 className="text-[#003366] text-[18px] sm:text-[22px] md:text-[24px] font-[500] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize font-['Montserrat] border-b-2 border-gray-300">Digital Modules for Specialist Consultation</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-sp.png" alt='Spirometer images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Spirometer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-os.png" alt='Otoscope image' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Otoscope</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-pu.png" alt='Portable Ultrasound images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Portable Ultrasound</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-is.png" alt='Irish Scope images' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Irish Scope</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/hm-6-der.png" alt='Dermatoscope' width={25} height={25} />
                    <span className='text-blacktext-sm sm:text-base md:text-lg text-gray-600'>Dermatoscope</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="ml-auto hidden group-hover:block">
                <div className='flex flex-row items-center'>
                  <Link href="/ourProducts" className="text-[#003366]">Know More</Link>
                  <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div> */}
          </div>
        </div>

        {/* PRODUCT CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {/* Smart Healthcare Machine */}
          <div
            className={`w-[70%] relative bg-white rounded-lg border-1 border-gray-300 overflow-hidden card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around min-h-[350px] ${activeCard === 'prod1' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'prod1')}
          >
            <div className="absolute inset-0 w-full h-[80%] group-hover:hidden touch-hover:hidden">
              <Image
                src="/icons/hm-shm.png"
                alt="Smart Healthcare Machine"
                width={200}
                height={200}
                className='w-full h-full object-contain'
              />
            </div>
            <div className="absolute h-[20%] bottom-0 left-0 right-0 bg-[#003366] bg-opacity-80 p-3 group-hover:hidden touch-hover:hidden">
              <h3 className="text-[24px] font-[600] text-center text-white font-['Montserrat']">
                Smart Healthcare Machine
              </h3>
            </div>
            <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full">
              <div className="text-sm md:text-base text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                <h4 className="font-semibold mb-2 text-lg text-white">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Health Screening</li>
                  <li>Real-Time Diagnostics Integration</li>
                  <li>Tele-Consultation with Live Data Sync</li>
                  <li>Scan and Analyse Health Records</li>
                  <li>Print Health Reports and Prescription</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Doctor App */}
          <div
            className={`w-[70%] relative bg-white rounded-lg border-1 border-gray-300 overflow-hidden card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around min-h-[350px] ${activeCard === 'prod2' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'prod2')}
          >
            <div className="h-[80%] absolute inset-0 w-full group-hover:hidden touch-hover:hidden">
              <Image
                src="/icons/prd-2-img3.jpg"
                alt="Doctor App"
                width={200}
                height={200}
                className='w-full h-full object-contain'
              />
            </div>
            <div className="absolute h-[20%] bottom-0 left-0 right-0 bg-[#003366] bg-opacity-80 p-3 group-hover:hidden touch-hover:hidden">
              <h3 className="text-[24px] font-[600] text-center text-white font-['Montserrat']">
                Doctor App
              </h3>
            </div>
            <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full">

              <div className="text-sm md:text-base text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                <h4 className="font-semibold mb-2 text-lg text-white">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Multi SHM Accessibility</li>
                  <li>Live Video Consultation with Real-Time Data</li>
                  <li>Instant Access to Patient Records</li>
                  <li>Easy Prescription Writing & Upload</li>
                  <li>Dashboard to Track Consultations</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Patient App */}
          <div
            className={`w-[70%] relative bg-white rounded-lg border-1 border-gray-300 overflow-hidden card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around min-h-[350px] ${activeCard === 'prod3' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'prod3')}
          >
            <div className="h-[80%] absolute inset-0 w-full group-hover:hidden touch-hover:hidden">
              <Image
                src="/icons/prd-2-img2.1.jpg"
                alt="Patient App"
                width={200}
                height={200}
                className='w-full h-full object-cover p-4'
              />
            </div>
            <div className="absolute h-[20%] bottom-0 left-0 right-0 bg-[#003366] bg-opacity-80 p-3 group-hover:hidden touch-hover:hidden">
              <h3 className="text-[24px] font-[600] text-center text-white font-['Montserrat']">
                Patient App
              </h3>
            </div>
            <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full">
              <div className="text-sm md:text-base text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                <h4 className="font-semibold mb-2 text-lg text-white">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Easy Registration & Profile Management</li>
                  <li>Book Appointments & View History</li>
                  <li>Access Health Records & Reports</li>
                  <li>Video Consultation with Doctors</li>
                  <li>Medicine Reminders & Health Tips</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nurse App */}
          <div
            className={`w-[70%] relative bg-white rounded-lg border-1 border-gray-300 overflow-hidden card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around min-h-[350px] ${activeCard === 'prod4' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'prod4')}
          >
            <div className="h-[80%] absolute inset-0 w-full group-hover:hidden touch-hover:hidden">
              <Image
                src="/icons/prd-2-img4.jpg"
                alt="Nurse App"
                width={200}
                height={200}
                className='w-full h-full object-cover p-4'
              />
            </div>
            <div className="absolute h-[20%] bottom-0 left-0 right-0 bg-[#003366] bg-opacity-80 p-3 group-hover:hidden touch-hover:hidden">
              <h3 className="text-[24px] font-[600] text-center text-white font-['Montserrat']">
                Nurse App
              </h3>
            </div>
            <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full">
              <div className="text-sm md:text-base text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                <h4 className="font-semibold mb-2 text-lg text-white">Key Features:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Patient Queue Management</li>
                  <li>Vital Signs Recording</li>
                  <li>Assist in Tele-Consultation</li>
                  <li>Health Records Management</li>
                  <li>Patient Care Coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* How it Works Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
          <span className="text-[#18A093]">Tele-Diagnostic</span>{' '}
          <span className="text-[#003366]">Workflow</span>
        </h2>
        <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
          A connected care journey — from instant health screening to real-time consultations and seamless referrals to specialists.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Workflow Diagram */}
          <div className="relative w-full mx-auto lg:mx-0 flex flex-row items-center justify-center">
            <Image
              src="/icons/prd-3-img.png"
              alt="Telediagnosis Workflow"
              width={500}
              height={500}
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto"
            />
          </div>

          {/* Steps */}
          <div className=" h-full w-full">
            <div className="flex flex-col items-start h-full w-full sm:space-y-6 lg:space-y-8 space-y-4">
              <div
                className={`w-full flex flex-row items-center justify-start p-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#18A093] hover:to-[#003366] group cursor-pointer ${activeStep === 'step1' ? 'bg-gradient-to-r from-[#18A093] to-[#003366] text-white' : ''}`}
                onClick={(e) => handleStepToggle(e, 'step1')}
              >
                <div className={`sm:mr-2 md:mr-4 lg:mr-10 mr-4 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#18A093] group-hover:bg-white flex items-center justify-center group-hover:text-[#18A093] text-lg sm:text-xl font-bold transition-colors duration-300 ${activeStep === 'step1' ? 'bg-white text-[#18A093]' : 'text-white'} `}>1</div>
                <div className="flex flex-col items-start">
                  <h3 className={`text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] group-hover:hidden transition-colors duration-300 ${activeStep === 'step1' ? 'hidden' : 'block'}`}>Patient Screening & Health Checkup</h3>
                  <div className={`space-y-2 group-hover:block transition-all duration-300 overflow-hidden ${activeStep === 'step1' ? 'block' : 'hidden'}`}>
                    <p className={`text-sm sm:text-[14px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] text-[#666666] group-hover:text-white ${activeStep === 'step1' && 'text-white'}`}>Vitals Check: BP, Pulse, SpO2, Temperature, BMI</p>
                    <p className={`text-sm sm:text-[14px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] text-[#666666] group-hover:text-white ${activeStep === 'step1' && 'text-white'}`}>Basic Diagnostics: Blood Sugar, ECG, Lipid Profile, Hemoglobin</p>
                    <p className={`text-sm sm:text-[14px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] text-[#666666] group-hover:text-white ${activeStep === 'step1' && 'text-white'}`}>Nurse Assistance: Guides patient, records EHR</p>
                  </div>
                </div>
              </div>
              <div
                className={`w-full flex flex-row items-center justify-start p-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#18A093] hover:to-[#003366] group cursor-pointer ${activeStep === 'step2' ? 'bg-gradient-to-r from-[#18A093] to-[#003366] text-white' : ''}`}
                onClick={(e) => handleStepToggle(e, 'step2')}
              >
                <div className={`sm:mr-2 md:mr-4 lg:mr-10 mr-4 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#18A093] group-hover:bg-white flex items-center justify-center group-hover:text-[#18A093] text-lg sm:text-xl font-bold transition-colors duration-300 ${activeStep === 'step2' ? 'bg-white text-[#18A093]' : 'text-white'} `}>2</div>
                <div className="flex flex-col items-start">
                  <h3 className={`text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] group-hover:hidden transition-colors duration-300 ${activeStep === 'step2' ? 'hidden' : 'block'}`}>Primary Consultation </h3>
                  <div className={`space-y-2 group-hover:block transition-all duration-300 overflow-hidden ${activeStep === 'step2' ? 'block' : 'hidden'}`}>
                    <p className={`text-sm sm:text-[14px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] text-[#666666] group-hover:text-white ${activeStep === 'step2' && 'text-white'}`}>Video Call with Doctor (Internal Medicine)</p>
                    <p className={`text-sm sm:text-[14px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] text-[#666666] group-hover:text-white ${activeStep === 'step2' && 'text-white'}`}>Live Data Transmission: ECG, Blood Tests, Stethoscope Readings</p>
                    <p className={`text-sm sm:text-[14px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] text-[#666666] group-hover:text-white ${activeStep === 'step2' && 'text-white'}`}>Diagnosis & Printed Prescription</p>
                  </div>
                </div>
              </div>
              <div
                className={`w-full flex flex-row items-center justify-start p-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#18A093] hover:to-[#003366] group cursor-pointer ${activeStep === 'step3' ? 'bg-gradient-to-r from-[#18A093] to-[#003366] text-white' : ''}`}
                onClick={(e) => handleStepToggle(e, 'step3')}
              >
                <div className={`sm:mr-2 md:mr-4 lg:mr-10 mr-4 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#18A093] group-hover:bg-white flex items-center justify-center group-hover:text-[#18A093] text-lg sm:text-xl font-bold transition-colors duration-300 ${activeStep === 'step3' ? 'bg-white text-[#18A093]' : 'text-white'} `}>3</div>
                <div className="flex flex-col items-start">
                  <h3 className={`text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] group-hover:hidden transition-colors duration-300 ${activeStep === 'step3' ? 'hidden' : 'block'}`}>Follow-up & Chronic Care</h3>
                  <div className={`space-y-2 group-hover:block transition-all duration-300 overflow-hidden ${activeStep === 'step3' ? 'block' : 'hidden'}`}>
                    <p className={`text-sm sm:text-[14px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] text-[#666666] group-hover:text-white ${activeStep === 'step3' && 'text-white'}`}>Chronic Disease Identification</p>
                    <p className={`text-sm sm:text-[14px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] text-[#666666] group-hover:text-white ${activeStep === 'step3' && 'text-white'}`}>Follow-up Consultation & Specialist Referral</p>
                  </div>
                </div>
              </div>
              <div
                className={`w-full flex flex-row items-center justify-start p-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#18A093] hover:to-[#003366] group cursor-pointer ${activeStep === 'step4' ? 'bg-gradient-to-r from-[#18A093] to-[#003366] text-white' : ''}`}
                onClick={(e) => handleStepToggle(e, 'step4')}
              >
                <div className={`sm:mr-2 md:mr-4 lg:mr-10 mr-4 flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#18A093] group-hover:bg-white flex items-center justify-center group-hover:text-[#18A093] text-lg sm:text-xl font-bold transition-colors duration-300 ${activeStep === 'step4' ? 'bg-white text-[#18A093]' : 'text-white'} `}>4</div>
                <div className="flex flex-col items-start">
                  <h3 className={`text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] group-hover:hidden transition-colors duration-300 ${activeStep === 'step4' ? 'hidden' : 'block'}`}>Specialist Consultation</h3>
                  <div className={`space-y-2 group-hover:block transition-all duration-300 overflow-hidden ${activeStep === 'step4' ? 'block' : 'hidden'}`}>
                    <p className={`text-sm sm:text-[14px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] text-[#666666] group-hover:text-white ${activeStep === 'step4' && 'text-white'}`}>Remote Consultation with Specialist</p>
                    <p className={`text-sm sm:text-[14px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] text-[#666666] group-hover:text-white ${activeStep === 'step4' && 'text-white'}`}>Report Analysis & Final Prescription</p>
                    <p className={`text-sm sm:text-[14px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] text-[#666666] group-hover:text-white ${activeStep === 'step4' && 'text-white'}`}>Referral to Hospital (if advanced care is needed)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Video Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15 bg-gray-100">
        <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-8 text-center">
          <span className="text-[#18A093]">Demo</span>{' '}
          <span className="text-[#003366]">Video</span>
        </h2>
        <div className="relative w-full md:w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/1SaZ5HdS0K4?si=5UFygb_j8uoTeNu8https://www.youtube.com/embed/1SaZ5HdS0K4?si=5UFygb_j8uoTeNu8"
            title="Product Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
          <span className="text-[#18A093]">Frequently Asked</span>{' '}
          <span className="text-[#003366]">Questions</span>
        </h2>
        <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
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