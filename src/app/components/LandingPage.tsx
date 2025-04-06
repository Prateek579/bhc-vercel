'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Partner from './Partner';

const useCountAnimation = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animateCount = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [end, duration, isInView]);

  return { count, setIsInView };
};

const LandingPage = () => {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [activeProd, setActiveProd] = React.useState<number | null>(1);
  const [showMore, setShowMore] = useState(false);


  const departments = useCountAnimation(25);
  const diseaseDetection = useCountAnimation(20);
  const hospitalReferrals = useCountAnimation(400);
  const satisfactionRate = useCountAnimation(90);
  // Using a single static background image
  const [pageNum, setPageNum] = React.useState(1);
  const backgroundImage = '/hm-1-img.jpg';

  useEffect(() => {
    const interval = setInterval(() => {
      setPageNum(prevPageNum => prevPageNum === 4 ? 1 : prevPageNum + 1);
    }, 5000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          departments.setIsInView(true);
          diseaseDetection.setIsInView(true);
          hospitalReferrals.setIsInView(true);
          satisfactionRate.setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [departments, diseaseDetection, hospitalReferrals, satisfactionRate]);

  return (
    <>
      {/* FIRST PAGE */}
      {pageNum === 1 &&
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
                <button onClick={(e) => e.preventDefault()}
                  className="inline-block px-8 py-3 bg-white text-[#003366] rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>

          {/* Background overlay */}
          <div
            className="absolute inset-0 bg-black opacity-80"
            style={{
              backgroundImage: `url("${backgroundImage}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              mixBlendMode: 'overlay',
              transition: 'background-image 0.5s ease-in-out'
            }}
          />

        </div>}

      {/* SECOND PAGE  */}
      {pageNum === 2 &&
        <div className="relative min-h-screen bg-gradient-to-r from-[#003366] to-[#18A093] overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-22">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="relative z-10 flex flex-col gap-4 sm:gap-6 text-white bg-opacity-60">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                  <Image
                    src="/icons/hm-1-sl-2-lgo.png"
                    alt="Rocket Icon"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FFA500] font-['Montserrat']">Animacare Initiative</h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Montserrat'] leading-tight">
                    Transforming Healthcare Access in <span className="text-[#003366]">Murshidabad, WB</span>
                  </h1>

                  <div className="mt-4 sm:mt-6 md:mt-8">
                    <button onClick={(e) => e.preventDefault()}
                      className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#003366] rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
                    >
                      Know More
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Content - Map with Circular Images */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] block">
                <Image
                  src="/icons/hm-1-sl-2-img.png"
                  alt="West Bengal Map"
                  width={900}
                  height={900}
                  className="h-full w-auto opacity-50 object-contain"
                />
                {/* Circular Image Overlays */}
                <div className="absolute top-8 left-22 sm:left-35 md:left-40 lg:left-40 sm:top-12 md:top-16 lg:top-20 w-22 h-22 sm:w-25 sm:h-25 md:w-34 md:h-34 lg:w-40 lg:h-40 rounded-full overflow-hidden">
                  <Image
                    src="/icons/hm-1-sl-2-img2.png"
                    alt="Healthcare Activity 1"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute top-28 left-17 sm:left-20 md:left-29 lg:left-28 sm:top-32 md:top-46 lg:top-57 w-13 h-13 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 rounded-full overflow-hidden">
                  <Image
                    src="/icons/hm-1-sl-2-img3.png"
                    alt="Healthcare Activity 2"
                    width={96}
                    height={96}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>}

      {/* TANSEED 4.0 Winner Section */}
      {pageNum === 3 &&
        <div className="relative min-h-screen overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#083350_100%)] flex items-center">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: 'url("/icons/hm-1-sl-3-img.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#003366]/70 to-transparent" />
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-22 w-full">
            <div className="relative z-10 flex flex-col gap-6 max-w-4xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Montserrat'] leading-tight">
                TANSEED 4.0 winner

              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Montserrat'] leading-tight text-[#FFA500]">
                Partner with us to make<br />
                a larger impact
              </h2>
              <div className="mt-8">
                <button onClick={(e) => e.preventDefault()}
                  className="inline-block px-8 py-3 bg-white text-[#003366] rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </div>
      }

      {/* World's Largest Network Section */}
      {pageNum === 4 &&
        <div className="relative min-h-screen overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#083350_100%)] flex items-center">
          <div
            className="absolute inset-0 -z-10"
            style={{
              backgroundImage: 'url("/icons/hm-1-sl-4-img.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#003366]/70 to-transparent" />
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-22 w-full">
            <div className="relative z-10 flex flex-col gap-6 max-w-4xl text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Montserrat'] leading-tight">
                Building The World&apos;s Largest
                <span> Decentralized Healthcare Network</span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg opacity-90 font-['Montserrat'] font-normal leading-relaxed text-[#FFA500]">
                By 2036, aspiring to transform Indian healthcare
              </p>
              <div className="mt-8">
                <button onClick={(e) => e.preventDefault()}
                  className="inline-block px-8 py-3 bg-white text-[#003366] rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </div>
        </div>}

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
      <div
        ref={statsRef}
        className="relative overflow-hidden py-4 sm:py-6 md:py-8 lg:py-10"
        style={{ background: 'linear-gradient(90deg, rgba(24, 160, 147, 0.7) 0%, rgba(18, 131, 135, 0.7) 33.17%, rgba(11, 100, 122, 0.7) 64.42%, rgba(6, 80, 114, 0.7) 87.02%, rgba(0, 51, 102, 0.7) 100%)' }}>

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
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold font-['Montserrat']">{departments.count}+</h3>
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
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold font-['Montserrat']">{diseaseDetection.count}%</h3>
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
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold font-['Montserrat']">{hospitalReferrals.count}+</h3>
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
              <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold font-['Montserrat']">{satisfactionRate.count}%</h3>
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
                Feature List
                <div className="flex flex-col space-y-2">
                  <div
                    className="flex flex-row items-center space-x-3 py-2 cursor-pointer"
                    onClick={() => setActiveFaq(activeFaq === 'healthcare' ? null : 'healthcare')}
                  >
                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                      <svg viewBox="0 0 20 20" fill="#003366">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[#003366] font-['Montserrat'] text-base font-medium leading-none align-middle tracking-[0%]">Limited Access to Quality Healthcare</p>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${activeFaq === 'healthcare' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="#003366"
                      viewBox="0 0 24 24"
                    >
                    </svg>
                  </div>
                  {activeFaq === 'healthcare' && (
                    <div className="pl-8 space-y-2 text-[#555555]">
                      <p className="text-sm font-normal leading-relaxed">
                        Quality healthcare remains out of reach for millions — whether in underserved rural areas or even in premium residential complexes where medical infrastructure is lacking.
                      </p>
                      <div className="mt-2">
                        <p className="text-sm font-medium mb-1">BHC&apos;s Solution:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Deploys Smart Healthcare Machines (TDMs) in societies and remote regions to offer instant health checkups and real-time specialist consultations.</li>
                          <li>Brings care to the doorstep — no hospital visits, no long waits.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-2">
                  <div
                    className="flex flex-row items-center space-x-3 py-2 cursor-pointer"
                    onClick={() => setActiveFaq(activeFaq === 'telemedicine' ? null : 'telemedicine')}
                  >
                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                      <svg viewBox="0 0 20 20" fill="#003366">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[#003366] font-['Montserrat'] text-base font-medium leading-none align-middle tracking-[0%]">Lack of Real-Time, Integrated Diagnostics in Telemedicine</p>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${activeFaq === 'telemedicine' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="#003366"
                      viewBox="0 0 24 24"
                    >
                    </svg>
                  </div>
                  {activeFaq === 'telemedicine' && (
                    <div className="pl-8 space-y-2 text-[#555555]">
                      <p className="text-sm font-normal leading-relaxed">
                        While video consultations have become widespread, they lack the power of real-time diagnostic data — turning medical advice into educated guesses rather than precise treatment.
                      </p>
                      <div className="mt-2">
                        <p className="text-sm font-medium mb-1">BHC&apos;s Solution:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Enables real-time transmission of vitals, ECG, stethoscope and imaging tools during live consultations.</li>
                          <li>Doctors can now diagnose with real-time data, not assumptions.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-2">
                  <div
                    className="flex flex-row items-center space-x-3 py-2 cursor-pointer"
                    onClick={() => setActiveFaq(activeFaq === 'preventive' ? null : 'preventive')}
                  >
                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                      <svg viewBox="0 0 20 20" fill="#003366">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[#003366] font-['Montserrat'] text-base font-medium leading-none align-middle tracking-[0%]">Lack of Focus on Preventive and Chronic Disease Management</p>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${activeFaq === 'preventive' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="#003366"
                      viewBox="0 0 24 24"
                    >
                    </svg>
                  </div>
                  {activeFaq === 'preventive' && (
                    <div className="pl-8 space-y-2 text-[#555555]">
                      <p className="text-sm font-normal leading-relaxed">
                        Traditional healthcare systems focus primarily on treatment, leaving room to strengthen efforts in early detection, wellness tracking and continuous chronic care.
                      </p>
                      <div className="mt-2">
                        <p className="text-sm font-medium mb-1">BHC&apos;s Solution:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Encourages regular health checkups and personalized wellness programs through its Smart Healthcare Machines and on-site nurse support.</li>
                          <li>Helps individuals stay healthier, longer — by focusing on prevention, monitoring, and timely action.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col space-y-2">
                  <div
                    className="flex flex-row items-center space-x-3 py-2 cursor-pointer"
                    onClick={() => setActiveFaq(activeFaq === 'disconnected' ? null : 'disconnected')}
                  >
                    <div className="flex-shrink-0 w-5 h-5 mt-1">
                      <svg viewBox="0 0 20 20" fill="#003366">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-[#003366] font-['Montserrat'] text-base font-medium leading-none align-middle tracking-[0%]">Disconnected Healthcare Journey and Lack of Timely Follow-up</p>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${activeFaq === 'disconnected' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="#003366"
                      viewBox="0 0 24 24"
                    >
                    </svg>
                  </div>
                  {activeFaq === 'disconnected' && (
                    <div className="pl-8 space-y-2 text-[#555555]">
                      <p className="text-sm font-normal leading-relaxed">
                        Traditional healthcare systems focus primarily on treatment, leaving room to strengthen efforts in early detection, wellness tracking and continuous chronic care.
                      </p>
                      <div className="mt-2">
                        <p className="text-sm font-medium mb-1">BHC&apos;s Solution:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Encourages regular health checkups and personalized wellness programs through its Smart Healthcare Machines and on-site nurse support.</li>
                          <li>Helps individuals stay healthier, longer — by focusing on prevention, monitoring, and timely action.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-8">
                <button onClick={(e) => e.preventDefault()}
                  className="inline-block px-8 py-3 border-1 border-[#003366] text-[#003366] rounded-xl font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
                >
                  Know more
                </button>
              </div>
            </div>

            {/* Circular Image Pattern */}
            <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] mx-auto">
              {/* Center animation */}
              <Image
                src="/icons/hm-anim.gif"
                alt="Healthcare Network Animation"
                fill
                className="w-[100%] h-[100%] object-contain"
                priority
              />
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
            <button onClick={(e) => e.preventDefault()}
              className="inline-block px-8 py-3 border-1 border-[#003366] text-[#003366] rounded-xl font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
            >
              Know more
            </button>
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
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] transition-all duration-300 group">
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
                  <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] mb-2 group-hover:text-white">Comprehensive Healthcare Solutions</h3>
                  <p className="text-[#989898] mb-4 font-['Montserrat'] text-[12px] sm:text-[13px] md:text-[14px] font-[400] leading-[1.4] sm:leading-[100%] align-middle tracking-[0%] group-hover:text-white">Delivering real-time diagnostics, preventive care and teleconsultations through a unified platform that ensures end-to-end patient care.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group">
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
                  <h3 className="group-hover:text-white text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] mb-2">Healthcare Partnership Model</h3>
                  <p className="text-[#989898] mb-4 font-['Montserrat'] text-[12px] sm:text-[13px] md:text-[14px] font-[400] leading-[1.4] sm:leading-[100%] align-middle tracking-[0%] group-hover:text-white">Collaborating with hospitals, communities, and institutions to build sustainable, patient-centric healthcare ecosystems.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group">
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
                  <h3 className="group-hover:text-white text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] mb-2">Innovation & Technology</h3>
                  <p className="group-hover:text-white text-[#989898] mb-4 font-['Montserrat'] text-[12px] sm:text-[13px] md:text-[14px] font-[400] leading-[1.4] sm:leading-[100%] align-middle tracking-[0%]">Leveraging advanced medical devices and digital platforms to enhance care delivery, accuracy and accessibility.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group">
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
                  <h3 className="group-hover:text-white text-[16px] sm:text-[18px] md:text-[20px] font-[600] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] mb-2">Scalable Healthcare Solution</h3>
                  <p className="group-hover:text-white text-[#989898] mb-4 font-['Montserrat'] text-[12px] sm:text-[13px] md:text-[14px] font-[400] leading-[1.4] sm:leading-[100%] align-middle tracking-[0%]">Designed to expand across geographies—from urban centers to remote areas — while maintaining quality and efficiency.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button onClick={(e) => e.preventDefault()}
              className="inline-block px-8 py-3 border-1 border-[#003366] text-[#003366] rounded-xl font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
            >
              Get Involved
            </button>
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

          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            {/* FAQ Items */}
            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq1' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq1' ? null : 'faq1')}
                className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq1' ? 'text-white' : 'text-[#333333]'} `}>What is Bridge Healthcare and what makes it different from other healthcare providers?</span>
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
                <p className="text-sm sm:text-base lg:text-lg font-['Montserrat'] text-white leading-relaxed">Bridge Healthcare is a purpose-led health-tech initiative focused on transforming how care reaches underserved communities. We go beyond traditional healthcare delivery by placing Smart Healthcare Machines in rural villages and local hubs, enabling real-time diagnostics, specialist tele-consultations and connected health records — right at the doorstep. Our model blends technology, community trust and accessibility, making healthcare proactive, not reactive.</p>
              </div>
            </div>

            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq2' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq2' ? null : 'faq2')}
                className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq2' ? 'text-white' : 'text-[#333333]'} `}>Who can benefit from Bridge Healthcare’s services?
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
                <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat'] leading-relaxed"> Our solutions are built for those often left out of mainstream healthcare—rural families, women, children, the elderly and chronic disease patients. At the same time, our model has proven effective in urban residential communities and IT parks, offering preventive care within walking distance, without disrupting daily routines.</p>
              </div>
            </div>

            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq3' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
                className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq3' ? 'text-white' : 'text-[#333333]'} `}> How does Bridge Healthcare improve healthcare accessibility and quality?</span>
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
                <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">We bring healthcare to where people live. By deploying digitally equipped health points and training local nurses, we eliminate the need to travel for routine care. All diagnostic data is securely shared with doctors in real time, enabling timely decisions, early detection, and follow-ups — creating a loop of care that’s continuous, high-quality and community-rooted.</p>
              </div>
            </div>

            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq4' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq4' ? null : 'faq4')}
                className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq4' ? 'text-white' : 'text-[#333333]'} `}>Where is Bridge Healthcare currently operating? Are your services available in my area?</span>
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
                <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">We are currently active in Varanasi, Uttar Pradesh and Murshidabad, West Bengal, with successful pilot deployments in both rural and urban settings of Chennai, Tamil Nadu and Bengaluru, Karnataka. We&apos;re expanding and if you&apos;re a local leader, institution, or funder looking to bring quality care to your community, we’d love to explore collaboration.</p>
              </div>
            </div>

            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq5' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq5' ? null : 'faq5')}
                className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq5' ? 'text-white' : 'text-[#333333]'} `}> How can I get involved with Bridge Healthcare — as a partner, funder or volunteer?</span>
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
                <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">We welcome changemakers from all walks of life. Whether you&apos;re a CSR funder, hospital, NGO, tech partner, or a passionate volunteer, there’s a role for you. You can support deployments, fund wellness drives, offer expertise or help us build local capacity. Together, we can make quality healthcare not just a service — but a right.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default LandingPage;