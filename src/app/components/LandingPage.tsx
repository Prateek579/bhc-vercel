'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Partner from './Partner';

const LandingPage = () => {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const backgroundImages = [
    '/hm-1-img.jpg',
    '/hm-2-img.png',
    '/icons/abt-1-img.png'
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };
  return (
    <>
      <div className="relative min-h-screen bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#083350_100%)] overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-20 md:py-32">
          <div className="relative z-10 flex flex-col gap-6 max-w-2xl text-white">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4A90E2] font-['Montserrat'] text-[40px] leading-[100%] align-middle">
                Affordable
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#66CC99] font-['Montserrat'] text-[40px] leading-[100%] align-middle">
                Accessible
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5A623] font-['Montserrat'] text-[40px] leading-[100%] align-middle">
                Sustainable
              </h1>
            </div>

            <p className="text-sm md:text-base lg:text-lg max-w-xl opacity-90 font-['Montserrat'] font-normal text-[14px] leading-[100%] align-middle text-[#CACACA]">
              Providing immediate access to healthcare, empowering individuals and communities to lead healthier lifestyle
              <br />
              or
              <br />
              Rooted in affordability. Delivered with dignity. Sustained by design.
            </p>

            <div className="mt-8">
              <Link
                href="/know-more"
                className="inline-block px-8 py-3 bg-white text-[#003366] rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>

        {/* Background overlay */}
        <div
          className="absolute inset-0 bg-black opacity-80"
          style={{
            backgroundImage: `url("${backgroundImages[currentImageIndex]}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'overlay',
            transition: 'background-image 0.5s ease-in-out'
          }}
        />
        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Journey So Far Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-[36px] font-[700] font-['Montserrat'] leading-[100%] tracking-[0px] align-middle text-[#003366]">
                <span className='text-[#009688]'>Our </span>Journey So Far
              </h2>
              <p className="text-[#555555] text-[20px] font-['Montserrat'] font-medium leading-[100%] align-middle tracking-[0px]">
                India&apos;s leading tech-driven healthcare solution, delivering real-time care with human touch and compassion.
              </p>
              <p className="text-[13px] text-[#888888] font-['Montserrat'] font-normal leading-[23px] tracking-[0%] align-middle">
                Bridge Healthcare is transforming rural healthcare with 45 Smart Health Centres, 45 Mobile Units, and AI-powered diagnostics, reaching 10 million lives. Through tele-diagnostics and nurse-assisted care, we ensure accessible, real-time medical support. Our mission is to expand, enhance AI-driven care, and build India&apos;s largest tech-enabled rural health network.
              </p>
            </div>

            {/* Video Component */}
            <div className="relative aspect-video flex items-center justify-center overflow-hidden">
              <Image
                src="/hm-2-img.png"
                alt="Journey So Far"
                width={500}
                height={300}
                className="object-cover rounded-3xl w-[90%] h-[90%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Section */}
      <div className="relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10" style={{ background: 'linear-gradient(90deg, rgba(24, 160, 147, 0.7) 0%, rgba(18, 131, 135, 0.7) 33.17%, rgba(11, 100, 122, 0.7) 64.42%, rgba(6, 80, 114, 0.7) 87.02%, rgba(0, 51, 102, 0.7) 100%)' }}>
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-white">
            {/* Specialist Referrals */}
            <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 h-[140px] sm:h-[150px] md:h-[160px] space-y-3 sm:space-y-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                <Image
                  src="/icons/hm-3-img1.png"
                  alt="Specialist Referrals"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold font-['Montserrat']">25+</h3>
              <p className="text-sm sm:text-base md:text-md opacity-90 font-['Montserrat']">Connecting Departments</p>
            </div>

            {/* Early Disease Detection */}
            <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 h-[140px] sm:h-[150px] md:h-[160px] space-y-3 sm:space-y-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                <Image
                  src="/icons/hm-3-img2.png"
                  alt="Early Disease Detection"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold font-['Montserrat']">20%</h3>
              <p className="text-sm sm:text-base md:text-md opacity-90 font-['Montserrat']">Early Disease Detected</p>
            </div>

            {/* Patients Treated */}
            <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 h-[140px] sm:h-[150px] md:h-[160px] space-y-3 sm:space-y-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                <Image
                  src="/icons/hm-3-img3.png"
                  alt="Patients Treated"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold font-['Montserrat']">400+</h3>
              <p className="text-sm sm:text-base md:text-md opacity-90 font-['Montserrat']">Hospital Referals</p>
            </div>

            {/* Patient Satisfaction */}
            <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 h-[140px] sm:h-[150px] md:h-[160px] space-y-3 sm:space-y-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10">
                <Image
                  src="/icons/hm-3-img4.png"
                  alt="Patient Satisfaction"
                  width={40}
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold font-['Montserrat']">90%</h3>
              <p className="text-sm sm:text-base md:text-md opacity-90 font-['Montserrat']">Patients Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Addressing Key Challenges Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-[36px] font-[700] font-['Montserrat']">
                <span className="text-[#18A093]">Addressing</span>{' '}
                <span className="text-[#003366]">Key Challenges</span>
              </h2>
              <p className="text-[#555555] text-[20px] font-['Montserrat'] font-medium leading-[100%] align-middle tracking-[0px]">
                Tackling the most pressing gaps in healthcare, delivering innovative, tech-driven solutions.
              </p>
              <div className="space-y-4">
                {/* Feature List */}
                <div className="flex flex-row items-center space-x-3 py-2">
                  <div className="flex-shrink-0 w-5 h-5 mt-1">
                    <svg viewBox="0 0 20 20" fill="#003366">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[#003366] font-['Montserrat'] text-base font-medium leading-none align-middle tracking-[0%]">Limited Access to Quality Healthcare</p>
                </div>
                <div className="flex items-start space-x-3 pb-2">
                  <div className="flex-shrink-0 w-5 h-5 mt-1">
                    <svg viewBox="0 0 20 20" fill="#003366">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[#003366] font-['Montserrat'] text-base font-medium leading-none align-middle tracking-[0%]">Lack of Real-Time, Integrated Diagnostics in Telemedicine</p>
                </div>
                <div className="flex items-start space-x-3 pb-2">
                  <div className="flex-shrink-0 w-5 h-5 mt-1">
                    <svg viewBox="0 0 20 20" fill="#003366">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[#003366] font-['Montserrat'] text-base font-medium leading-none align-middle tracking-[0%]">Lack of Focus on Preventive and Chronic Disease Management</p>
                </div>
                <div className="flex fex-row items-center space-x-3 pb-2">
                  <div className="flex-shrink-0 w-5 h-5 mt-1">
                    <svg viewBox="0 0 20 20" fill="#003366">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-[#003366] font-['Montserrat'] text-base font-medium leading-none align-middle tracking-[0%]">Disconnected Healthcare Journey and Lack of Timely Follow-up</p>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  href="/know-more"
                  className="inline-block px-8 py-3 border-1 border-[#003366] text-[#003366] rounded-xl font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
                >
                  Know more
                </Link>
              </div>
            </div>

            {/* Circular Image Pattern */}
            <div className="relative h-[500px] w-[500px] mx-auto">
              {/* Center circle */}
              <div className="absolute w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg width="100%" height="100%" viewBox="0 0 500 500">
                  <circle
                    cx="250"
                    cy="250"
                    r="245"
                    stroke="#E5E5E5"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    fill="none"
                  />
                  <circle
                    cx="250"
                    cy="250"
                    r="40"
                    fill="black"
                  />
                  {/* Connecting lines */}
                  {/* <line x1="150" y1="5" x2="150" y2="295" stroke="#003366" strokeWidth="2" strokeDasharray="10 10" /> */}
                  {/* <line x1="5" y1="150" x2="295" y2="150" stroke="#003366" strokeWidth="2" strokeDasharray="10 10" /> */}
                </svg>
              </div>

              {/* Top-left image */}
              <div className="absolute w-[180px] h-[180px] left-0 top-0">
                <div className="relative w-full h-full">
                  <Image
                    src="/icons/hm-4-img1.png"
                    alt="Healthcare Complex 1"
                    fill
                    className="rounded-full object-cover border-4 border-white w-full h-full"
                  />
                </div>
              </div>

              {/* Top-right image */}
              <div className="absolute w-[100px] h-[100px] right-5 top-5">
                <div className="relative w-full h-full">
                  <Image
                    src="/icons/hm-4-img2.png"
                    alt="Healthcare Complex 2"
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-lg w-full h-full"
                  />
                </div>
              </div>

              {/* Bottom-right image */}
              <div className="absolute w-[100px] h-[100px] right-5 bottom-5">
                <div className="relative w-full h-full">
                  <Image
                    src="/icons/hm-4-img2.png"
                    alt="Healthcare Complex 3"
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-lg w-full h-full"
                  />
                </div>
              </div>

              {/* Bottom-left image */}
              <div className="absolute w-[100px] h-[100px] left-10 bottom-7">
                <div className="relative w-full h-full">
                  <Image
                    src="/icons/hm-4-img2.png"
                    alt="Healthcare Complex 4"
                    fill
                    className="rounded-full object-cover border-4 border-white shadow-lg w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Key Services Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-20 md:py-32">
          <h2 className="text-[36px] font-[700] font-['Montserrat'] mb-4">
            <span className="text-[#18A093]">Our</span>{' '}
            <span className="text-[#003366]">Key Services</span>
          </h2>
          <p className="text-[#555555] text-[20px] font-['Montserrat'] font-medium leading-[100%] align-middle tracking-[0px] mb-4">
            The Smart Healthcare Machine improves healthcare with data-driven accessibility and efficiency.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Health Checkup */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src="/icons/hm-5-lgo1.png"
                    alt="Health Checkup"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-[14px] font-[500] leading-[100%] tracking-[0%] text-center align-middle text-[#555555] font-['Montserrat']">Smart Healthcare Machine Deployment</h3>
              </div>

              {/* Specialist Consultation */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src="/icons/hm-5-lgo2.png"
                    alt="Specialist Consultation"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-[14px] font-[500] leading-[100%] tracking-[0%] text-center align-middle text-[#555555] font-['Montserrat']">Real-Time, Data-Driven Teleconsultation</h3>
              </div>

              {/* Hospital Connecting Services */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src="/icons/hm-5-lgo3.png"
                    alt="Hospital Connecting Services"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-[14px] font-[500] leading-[100%] tracking-[0%] text-center align-middle text-[#555555] font-['Montserrat']"> Integrated Digital Ecosystem for Seamless Care</h3>
              </div>

              {/* Personalised Healthcare */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 mb-4">
                  <Image
                    src="/icons/hm-5-lgo4.png"
                    alt="Personalised Healthcare"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-[14px] font-[500] leading-[100%] tracking-[0%] text-center align-middle text-[#555555] font-['Montserrat']">Preventive Health Checkups & Chronic Care Programs</h3>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative flex flex-row items-center justify-center w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/icons/hm-5-img.png"
                alt="Healthcare Services"
                fill
                className="object-cover w-[90%] h-[90%]"
              />
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/know-more"
              className="inline-block px-8 py-3 border-1 border-[#003366] text-[#003366] rounded-xl font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
            >
              Know more
            </Link>
          </div>
        </div>
      </div>
      {/* Why Join Bridge Healthcare Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-12 sm:py-20 md:py-32">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">Why Join</span>{' '}
            <span className="text-[#003366]">Bridge Healthcare</span>
          </h2>
          <p className="text-[#555555] text-[16px] sm:text-[18px] md:text-[20px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            Be part of a mission to transform healthcare through innovation, accessibility and impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-11 relative">
            {/* Center Logo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center z-10 hidden md:flex border-1 border-gray-300 p-2">
              <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 flex item-center justify-center">
                <Image
                  src="/icons/hm-6-img.png"
                  alt="Bridge Healthcare Logo"
                  width={100}
                  height={100}
                  className=""
                />
              </div>
            </div>

            {/* Service Cards */}
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center h-full gap-4 sm:gap-0">
                <div className="sm:mr-4">
                  <Image
                    src="/icons/hm-6-lgo.png"
                    alt="Comprehensive Healthcare"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] mb-2">Comprehensive Healthcare Solutions</h3>
                  <p className="text-[#989898] mb-4 font-['Montserrat'] text-[12px] sm:text-[13px] md:text-[14px] font-[400] leading-[1.4] sm:leading-[100%] align-middle tracking-[0%]">Delivering real-time diagnostics, preventive care and teleconsultations through a unified platform that ensures end-to-end patient care.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center h-full gap-4 sm:gap-0">
                <div className="sm:mr-4">
                  <Image
                    src="/icons/hm-6-lgo.png"
                    alt="Healthcare Partnership"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] mb-2">Healthcare Partnership Model</h3>
                  <p className="text-[#989898] mb-4 font-['Montserrat'] text-[12px] sm:text-[13px] md:text-[14px] font-[400] leading-[1.4] sm:leading-[100%] align-middle tracking-[0%]">Collaborating with hospitals, communities, and institutions to build sustainable, patient-centric healthcare ecosystems.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center h-full gap-4 sm:gap-0">
                <div className="sm:mr-4">
                  <Image
                    src="/icons/hm-6-lgo.png"
                    alt="Innovation & Technology"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] mb-2">Innovation & Technology</h3>
                  <p className="text-[#989898] mb-4 font-['Montserrat'] text-[12px] sm:text-[13px] md:text-[14px] font-[400] leading-[1.4] sm:leading-[100%] align-middle tracking-[0%]">Leveraging advanced medical devices and digital platforms to enhance care delivery, accuracy and accessibility.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center h-full gap-4 sm:gap-0">
                <div className="sm:mr-4">
                  <Image
                    src="/icons/hm-6-lgo.png"
                    alt="Scalable Healthcare"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] mb-2">Scalable Healthcare Solution</h3>
                  <p className="text-[#989898] mb-4 font-['Montserrat'] text-[12px] sm:text-[13px] md:text-[14px] font-[400] leading-[1.4] sm:leading-[100%] align-middle tracking-[0%]">Designed to expand across geographies—from urban centers to remote areas — while maintaining quality and efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/get-involved"
              className="inline-block px-8 py-3 border-1 border-[#003366] text-[#003366] rounded-xl font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>

      {/* Our Products Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-12 sm:py-20 md:py-32">
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Montserrat'] mb-3 sm:mb-4 lg:mb-6">
              <span className="text-[#18A093]">Our</span>{' '}
              <span className="text-[#003366]">Products</span>
            </h2>
            <p className="text-[#555555] text-sm sm:text-base md:text-lg lg:text-xl font-['Montserrat'] font-medium mb-4 sm:mb-6 lg:mb-8 max-w-[90%] sm:max-w-[80%] lg:max-w-[70%] leading-relaxed">
              Smart Healthcare Machine integrates tele-consultations with real-time health data and is supported by Doctor, Patient and Nurse applications for streamlined collaboration and proactive care.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                {/* Product List */}
                <Link href="/products/smart-healthcare-machine" className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 lg:p-5 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                    <Image src="/icons/monitor.svg" alt="Smart Healthcare Machine" width={32} height={32} className="w-full h-full" />
                  </div>
                  <p className="text-[#003366] font-['Montserrat'] text-sm sm:text-base lg:text-lg">Smart Healthcare Machine</p>
                  <div className="ml-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link href="/products/doctor-app" className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 lg:p-5 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                    <Image src="/icons/doctor.svg" alt="Doctor App" width={32} height={32} className="w-full h-full" />
                  </div>
                  <p className="text-[#003366] font-['Montserrat'] text-sm sm:text-base lg:text-lg">Doctor App</p>
                  <div className="ml-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link href="/products/patient-app" className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 lg:p-5 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                    <Image src="/icons/patient.svg" alt="Patient App" width={32} height={32} className="w-full h-full" />
                  </div>
                  <p className="text-[#003366] font-['Montserrat'] text-sm sm:text-base lg:text-lg">Patient App</p>
                  <div className="ml-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                <Link href="/products/operator-app" className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 p-3 sm:p-4 lg:p-5 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8">
                    <Image src="/icons/nurse.svg" alt="Operator / Nurse App" width={32} height={32} className="w-full h-full" />
                  </div>
                  <p className="text-[#003366] font-['Montserrat'] text-sm sm:text-base lg:text-lg">Operator / Nurse App</p>
                  <div className="ml-auto">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-10">
                <Link
                  href="/know-more"
                  className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-[#003366] text-[#003366] text-sm sm:text-base lg:text-lg rounded-md font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
                >
                  Know more
                </Link>
              </div>
            </div>

            {/* Product Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden p-12 flex items-center justify-center">
              <Image
                src="/icons/hm-7-img.png"
                alt="Smart Healthcare Machine"
                width={450}
                height={450}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-20 md:py-32">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[700] font-['Montserrat'] mb-2 sm:mb-4">
            <span className="text-[#18A093]">Our</span>{' '}
            <span className="text-[#003366]">Testimonials</span>
          </h2>
          <p className="text-[#555555] text-base sm:text-lg lg:text-[20px] font-['Montserrat'] font-medium mb-6 sm:mb-8 lg:mb-12 max-w-full sm:max-w-[90%] lg:max-w-[80%]">
            Our impact is reflected in the voices of patients, doctors and public sector leaders who trust us.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
              <div className="absolute top-2 left-2">
                <Image
                  src="/icons/hm-8-img2.png"
                  alt="Quote icon"
                  width={50}
                  height={50}
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                />
              </div>
              <p className="text-[#616161] mb-4 sm:mb-6 font-['Montserrat'] text-sm sm:text-base sm:text-base font-[400] leading-[100%] align-middle tracking-[0%]">
                We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                  <Image
                    src="/icons/hm-8-img.png"
                    alt="Jane Smith"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Jane Smith</h4>
                  <p className="text-gray-500 text-xs sm:text-sm font-['Montserrat']">Retired Teacher</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
              <div className="absolute top-2 left-2">
                <Image
                  src="/icons/hm-8-img2.png"
                  alt="Quote icon"
                  width={50}
                  height={50}
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                />
              </div>
              <p className="text-[#616161] mb-4 sm:mb-6 font-['Montserrat'] text-sm sm:text-base sm:text-base font-[400] leading-[100%] align-middle tracking-[0%]">
                In today&apos;s fast-paced tech world, staying ahead is crucial. Our training programs focus on cutting-edge technologies to enhance your skills.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                  <Image
                    src="/icons/hm-8-img.png"
                    alt="John Doe"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">John Doe</h4>
                  <p className="text-gray-500 text-xs sm:text-sm font-['Montserrat']">Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
              <div className="absolute top-2 left-2">
                <Image
                  src="/icons/hm-8-img2.png"
                  alt="Quote icon"
                  width={50}
                  height={50}
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                />
              </div>
              <p className="text-[#616161] mb-4 sm:mb-6 font-['Montserrat'] text-sm sm:text-base sm:text-base font-[400] leading-[100%] align-middle tracking-[0%]">
                Creativity knows no bounds. Our workshops are tailored to inspire and empower aspiring designers to bring their visions to life.
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                  <Image
                    src="/icons/hm-8-img.png"
                    alt="Emily Johnson"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Emily Johnson</h4>
                  <p className="text-gray-500 text-sm font-['Montserrat']">Graphic Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Partnership Section */}
      <Partner />


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

    </>
  );
};

export default LandingPage;