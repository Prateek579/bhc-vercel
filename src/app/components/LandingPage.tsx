'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Partner from './Partner';
import Link from 'next/link';

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
  // const [activeProd, setActiveProd] = React.useState<number | null>(1);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [currentMediaIndexOne, setCurrentMediaIndexOne] = useState(0);
  const [currentMediaIndexTwo, setCurrentMediaIndexTwo] = useState(0);
  const [currentMediaIndexThree, setCurrentMediaIndexThree] = useState(1);
  const [currentMediaIndexFive, setCurrentMediaIndexFive] = useState(0);

  const departments = useCountAnimation(25);
  const diseaseDetection = useCountAnimation(20);
  const hospitalReferrals = useCountAnimation(400);
  const satisfactionRate = useCountAnimation(90);
  // Using a single static background image
  const [pageNum, setPageNum] = React.useState(1);
  const backgroundImage = '/hm-1-img.jpg';

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPageNum(prevPageNum => prevPageNum === 2 ? 1 : prevPageNum + 1);
  //   }, 5000);

  //   // Cleanup function to clear the interval when component unmounts
  //   return () => clearInterval(interval);
  // }, []);

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

  useEffect(() => {
    // Safe window check for SSR
    const checkTouchDevice = (): boolean => {
      if (typeof window === 'undefined') return false;
      return 'ontouchstart' in window;
    };

    setIsTouchDevice(checkTouchDevice());
  }, []);

  // Image carousel effect for Key Services section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prevIndex) => (prevIndex >= 3 ? 0 : prevIndex + 1));
      setCurrentMediaIndexOne((prev) => (prev >= 4 ? 0 : prev + 1));
      setCurrentMediaIndexTwo((pre) => (pre >= 2 ? 0 : pre + 1));
      setCurrentMediaIndexThree((prev) => (prev == 1 ? 2 : 1));
      setCurrentMediaIndexFive((prev) => (prev >= 2 ? 0 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, cardId: string): void => {
    if (isTouchDevice) {
      // Remove touch-hover class from all cards except the current one
      const cards = document.querySelectorAll('.card-hover');
      cards.forEach(card => card.classList.remove('touch-hover'));

      // Toggle the current card
      if (activeCard === cardId) {
        e.currentTarget.classList.remove('touch-hover');
        setActiveCard(null);
      } else {
        e.currentTarget.classList.add('touch-hover');
        setActiveCard(cardId);
      }
    }
  };

  return (
    <>
      {/* FIRST PAGE */}
      {pageNum === 1 &&
        <div className="relative min-h-screen bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#083350_100%)] overflow-hidden">
          <div className="mx-auto px-3 sm:px-15 lg:px-22  w-full min-h-screen flex flex-row items-center">
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
              <div className="mt-4 sm:mt-6 md:mt-8">
                <Link href="/ourProducts"
                  className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#003366] rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
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
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-['Montserrat']">
                    <p>Transforming Healthcare Access in</p>
                    <p className="text-[#003366] inline-block">Murshidabad, WB</p>
                  </h1>

                  <div className="mt-4 sm:mt-6 md:mt-8">
                    <Link href="/ourInitiative/animacare"
                      className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#003366] rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
                    >
                      Know More
                    </Link>
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
                <Link href="/getInvolved"
                  className="inline-block px-8 py-3 bg-white text-[#003366] rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Get Involved
                </Link>
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
                <Link href="/ourInitiative/decentralized"
                  className="inline-block px-8 py-3 bg-white text-[#003366] rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>}

      {/* Journey So Far Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
                <span className="text-[#18A093]">Reimagining Access to</span>{' '}
                <span className="text-[#003366]">Quality Healthcare</span>
              </h2>
              <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
                From Cities to Villages. From Clinics to Communities.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                At Bridge Healthcare, we turn everyday spaces—residential societies, community centers, and underserved areas—into fully connected health hubs. With our Smart Healthcare Machine (SHM) and real-time tele-diagnostics, we deliver vital checkups, doctor consultations, and wellness programs where they&apos;re needed most.
                Since 2022, we&apos;ve been making personalized, preventive healthcare accessible, affordable, and always within reach.
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
          <h1 className='font-bold mb-2 md:mb-4 text-[20px] sm:text-[20px] md:text-[30px] lg:text-[35px] text-center'>Impact that matters</h1>
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
      <div className="relative bg-white py-16 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22">
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">Addressing</span>{' '}
            <span className="text-[#003366]">Key Challenges</span>
          </h2>

          <div className="relative flex flex-col items-center justify-center">
            <div className="flex items-center justify-center overflow-hidden w-[80%]">
              <button
                onClick={() => setPageNum(prevPage => prevPage === 1 ? 2 : prevPage - 1)}
                className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 19l-7-7 7-7" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {pageNum === 1 && <div className="flex-1 flex justify-center gap-6">
                <div className="relative group overflow-hidden rounded-lg w-full max-w-[600px] aspect-[4/3]">
                  <Image
                    src="/icons/hm-4-img1.1.jpeg"
                    alt="Sewer Lines"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0  bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-start p-8 h-[55%]">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Limited Access to Quality Care</h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      Quality healthcare remains inaccessible for millions — from remote rural regions to premium residential areas lacking sufficient medical infrastructure.

                    </p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg w-full max-w-[600px] aspect-[4/3]">
                  <Image
                    src="/icons/hm-4-img2.1.jpg"
                    alt="Stormwater Drains"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 bg-gradient-to-t from-black/80 to-black/20  flex flex-col justify-start p-8 h-[55%]">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Gaps in Real-Time Tele-Diagnostics</h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      While video consultations are common, they often lack real-time diagnostic data, leading to treatment based on assumptions rather than precision.
                    </p>
                  </div>
                </div>
              </div>}

              {pageNum === 2 && <div className="flex-1 flex justify-center gap-6">
                <div className="relative group overflow-hidden rounded-lg w-full max-w-[600px] aspect-[4/3]">
                  <Image
                    src="/icons/hm-4-img2.1.webp"
                    alt="Sewer Lines"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0  bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-start p-8 h-[55%]">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Neglect of Preventive & Chronic Care</h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      Healthcare today still emphasizes treatment over prevention — missing crucial opportunities for early detection, wellness tracking, and chronic disease management.
                    </p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-lg w-full max-w-[600px] aspect-[4/3]">
                  <Image
                    src="/icons/hm-4-img4.jpg"
                    alt="Stormwater Drains"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0  bg-gradient-to-t from-black/80 to-black/20 flex flex-col justify-start p-8 h-[55%]">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Fragmented Care & Missed Follow-Ups</h3>
                    <p className="text-white/90 text-sm sm:text-base">
                      Disconnected health records and fragmented follow-ups lead to inefficiencies for both patients and healthcare providers.
                    </p>
                  </div>
                </div>
              </div>}

              <button
                onClick={() => setPageNum(prevPage => prevPage === 2 ? 1 : prevPage + 1)}
                className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5l7 7-7 7" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {[1, 2].map((num) => (
                <button
                  key={num}
                  onClick={() => setPageNum(num)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${pageNum === num ? 'bg-[#003366] w-4' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Key Services Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">Our</span>{' '}
            <span className="text-[#003366]">Key Services</span>
          </h2>
          <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            The Smart Healthcare Machine improves healthcare with data-driven accessibility and efficiency.
          </p>
          {/* <div className="grid grid-cols-1 lg:grid-cols-2"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
            {/* Service Cards */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> */}
            {/* Health Checkup */}


            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase1' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase1')}
            >
              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden">
                <Image
                  src={`/icons/hm-5-img4.${currentMediaIndexOne + 1}.jpg`}
                  alt="Health Checkup"
                  width={400}
                  height={400}
                  className='h-full w-full'
                />
              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Tele-Diagnostic Access</h3>
              <p className="w-[90%] text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                SHM delivers real-time diagnostics and virtual specialist access, bridging rural healthcare gaps with timely, doorstep expert care.
              </p>
            </div>

            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase2' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase2')}
            >
              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden">
                <Image
                  src={`/icons/hm-5-img2.${currentMediaIndexTwo + 1}.jpg`}
                  alt="Health Checkup"
                  width={400}
                  height={400}
                  className='h-full w-full'
                />

              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Nurse-Enabled Access

              </h3>
              <p className=" w-[90%] text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                SHM units integrate into existing healthcare setups, combining digital tools and nurse-led care for personalized, trusted patient support.
              </p>
            </div>
            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase3' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase3')}
            >

              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden">
                <Image
                  src={`/icons/hm-5-img3.${currentMediaIndexThree}.jpg`}
                  alt="Health Checkup"
                  width={400}
                  height={400}
                  className='h-full w-full'
                />
              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Smart Queueing


              </h3>
              <p className="w-[90%] text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                Patients get scheduled time slots, reducing wait times, travel strain, wage loss, and overcrowding at consultation sites.

              </p>
            </div>
            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase4' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase4')}
            >
              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden">

                <Image
                  src={`/icons/hm-5-img1.${currentMediaIndex + 1}.jpg`}
                  alt="Health Checkup"
                  width={400}
                  height={400}
                  className='h-full w-full'
                />

              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Digital Health Tracking

              </h3>
              <p className="w-[90%] text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                Every patient interaction is securely recorded, ensuring continuous care, health tracking, and intelligent follow-ups and medication reminders.


              </p>
            </div>
            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase5' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase5')}
            >
              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden">

                <Image
                  src={`/icons/hm-5-img5.${currentMediaIndexFive + 1}.jpg`}
                  alt="Health Checkup"
                  width={400}
                  height={400}
                  className='h-full w-full'
                />
              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Preventive Health
              </h3>
              <p className="w-[90%] text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                Regular screenings enable early chronic condition detection, promoting preventive care and reducing long-term complications through timely      consultations.
              </p>
            </div>
            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase6' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase6')}
            >
              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden">

                <Image
                  src={`/icons/hm-5-img6.${currentMediaIndexFive + 1}.jpg`}
                  alt="Health Checkup"
                  width={400}
                  height={400}
                  className='h-full w-full'
                />

              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Targeted Health Interventions

              </h3>
              <p className="w-[90%] text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                Real-time health trends from SHM locations feed into analytics, aiding hospitals, NGOs, and funders in planning and resource allocation.
              </p>
            </div>

            {/* </div> */}

            {/* Image Section */}
            {/* <div className="rflex items-center justify-center w-full h-full">
              <Image
                src="/icons/hm-anim.gif"
                alt="Healthcare Services"
                width={100}
                height={100}
                className="w-[98%] h-[98%]"
              />
            </div> */}
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
          {/* NEW CARD} */}

          {/* NEW CARD} */}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Text Content */}

            {/* Product List */}
            <Link href="/ourProducts" className="w-full">
              <div className="border-2 border-gray-200 group hover:cursor-pointer flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366]" >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Image src="/icons/prd-2-lgo1.png" alt="Smart Healthcare Machine" width={32} height={32} className="w-full h-full" />
                </div>
                <p className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white">Smart Healthcare Machine</p>
                <div className="ml-auto hidden group-hover:block">
                  <div className='flex flex-row items-center'>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/ourProducts"
            >

              <div className="border-2 border-gray-200 group hover:cursor-pointer flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366]" >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Image src="/icons/prd-2-lgo1.png" alt="Doctor App" width={32} height={32} />
                </div>
                <p className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white">Doctor App</p>
                <div className="ml-auto hidden group-hover:block ">
                  <div className='flex flex-row items-center'>
                    <svg className="w-5 h-5 text-[#003366] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/ourProducts"
            >

              <div className="border-2 border-gray-200 group hover:cursor-pointer flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300  group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366]" >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Image src="/icons/prd-2-log2.png" alt="Patient App" width={32} height={32} />
                </div>
                <p className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white">Patient App</p>
                <div className="ml-auto hidden group-hover:block">
                  <div className='flex flex-row items-center'>
                    <svg className="w-5 h-5 text-[#003366] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/ourProducts"
            >


              <div className="border-2 border-gray-200 hover:cursor-pointer group flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300 group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366]" >
                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                  <Image src="/icons/prd-2-log2.png" alt="Operator / Nurse App" width={32} height={32} />
                </div>
                <p className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white">Nurse App</p>
                <div className="ml-auto hidden group-hover:block">
                  <div className='flex flex-row items-center'>

                    <svg className="w-5 h-5 text-[#003366] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <div className="mt-12">
              <Link href="/contactUs"
                className="inline-block px-8 py-3 border-1 border-[#003366] text-[#003366] rounded-xl font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Bridge Healthcare Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-12 sm:py-20 md:py-32">
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">Why Join</span>{' '}
            <span className="text-[#003366]">Bridge Healthcare</span>
          </h2>
          <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
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

            {/* Service Cards - 1*/}
            <div
              onClick={(e) => handleToggle(e, 'card1')}
              className={`bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] 
                  hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] 
                  hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] 
                  touch-hover:bg-gradient-to-r touch-hover:from-[rgba(24,160,147,0.7)] 
                  touch-hover:via-[rgba(18,131,135,0.7)] touch-hover:via-[rgba(11,100,122,0.7)] 
                  touch-hover:via-[rgba(6,80,114,0.7)] touch-hover:to-[rgba(0,51,102,0.7)]`}
            >
              <div className="flex flex-row sm:flex-row items-center justify-around h-full gap-4 sm:gap-0">
                <div className="flex items-center justify-center relative w-[15%] group-hover:hidden touch-hover:hidden">
                  <Image
                    src="/icons/hm-6-lgo.png"
                    alt="Healthcare Partnership"
                    width={50}
                    height={50}
                    className="group-hover:hidden touch-hover:hidden transition-opacity duration-300"
                  />
                </div>
                <div className='w-[85%] touch-hover:w-[100%]'>
                  <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                    Comprehensive Healthcare Solutions
                  </h3>
                  <p className="text-[#989898] text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                    Delivering real-time diagnostics, preventive care and teleconsultations through a unified platform that ensures end-to-end patient care.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Cards -2 */}
            <div
              onClick={(e) => handleToggle(e, 'card2')}
              className={`bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] 
                  hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] 
                  hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] 
                  touch-hover:bg-gradient-to-r touch-hover:from-[rgba(24,160,147,0.7)] 
                  touch-hover:via-[rgba(18,131,135,0.7)] touch-hover:via-[rgba(11,100,122,0.7)] 
                  touch-hover:via-[rgba(6,80,114,0.7)] touch-hover:to-[rgba(0,51,102,0.7)]`}
            >
              <div className="flex flex-row sm:flex-row items-center justify-around h-full gap-4 sm:gap-0">
                <div className="flex items-center justify-center relative w-[15%] group-hover:hidden touch-hover:hidden">
                  <Image
                    src="/icons/hm-6-lgo.png"
                    alt="Healthcare Partnership"
                    width={50}
                    height={50}
                    className="group-hover:hidden touch-hover:hidden transition-opacity duration-300"
                  />
                </div>
                <div className='w-[85%] touch-hover:w-[100%]'>
                  <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                    Healthcare Partnership Model
                  </h3>
                  <p className="text-[#989898] text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                    Collaborating with hospitals, communities, and institutions to build sustainable, patient-centric healthcare ecosystems.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Cards -3 */}
            <div
              onClick={(e) => handleToggle(e, 'card3')}
              className={`bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] 
                  hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] 
                  hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] 
                  touch-hover:bg-gradient-to-r touch-hover:from-[rgba(24,160,147,0.7)] 
                  touch-hover:via-[rgba(18,131,135,0.7)] touch-hover:via-[rgba(11,100,122,0.7)] 
                  touch-hover:via-[rgba(6,80,114,0.7)] touch-hover:to-[rgba(0,51,102,0.7)]`}
            >
              <div className="flex flex-row sm:flex-row items-center justify-around h-full gap-4 sm:gap-0">
                <div className="flex items-center justify-center relative w-[15%] group-hover:hidden touch-hover:hidden">
                  <Image
                    src="/icons/hm-6-lgo.png"
                    alt="Healthcare Partnership"
                    width={50}
                    height={50}
                    className="group-hover:hidden touch-hover:hidden transition-opacity duration-300"
                  />

                </div>
                <div className='w-[85%] touch-hover:w-[100%]'>
                  <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                    Innovation & Technology
                  </h3>
                  <p className="text-[#989898] text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                    Leveraging advanced medical devices and digital platforms to enhance care delivery, accuracy and accessibility.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Cards -4 */}
            <div
              onClick={(e) => handleToggle(e, 'card4')}
              className={`bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] 
                  hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] 
                  hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] 
                  touch-hover:bg-gradient-to-r touch-hover:from-[rgba(24,160,147,0.7)] 
                  touch-hover:via-[rgba(18,131,135,0.7)] touch-hover:via-[rgba(11,100,122,0.7)] 
                  touch-hover:via-[rgba(6,80,114,0.7)] touch-hover:to-[rgba(0,51,102,0.7)]`}
            >
              <div className="flex flex-row sm:flex-row items-center justify-around h-full gap-4 sm:gap-0">
                <div className="flex items-center justify-center relative w-[15%] group-hover:hidden touch-hover:hidden">
                  <Image
                    src="/icons/hm-6-lgo.png"
                    alt="Healthcare Partnership"
                    width={50}
                    height={50}
                    className="group-hover:hidden touch-hover:hidden transition-opacity duration-300"
                  />
                </div>
                <div className='w-[85%] touch-hover:w-[100%]'>
                  <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                    Scalable Healthcare Solution
                  </h3>
                  <p className="text-[#989898] text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                    Designed to expand across geographies—from urban centers to remote areas — while maintaining quality and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">Our</span>{' '}
            <span className="text-[#003366]">Testimonials</span>
          </h2>
          <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            Our impact is reflected in the voices of patients, doctors and public sector leaders who trust us.
          </p>
          <div className="w-full overflow-hidden">
            <div className="specialty-cards-container  gap-4 sm:gap-6 lg:gap-8">
              {/* Testimonial Card 1 */}
              <div className="w-[250px] h-auto sm:w-[350px] sm:h-[250px] md:w-[400px] md:h-[350px] bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
                <div className="absolute top-2 left-2">
                  <Image
                    src="/icons/hm-8-img2.png"
                    alt="Quote icon"
                    width={50}
                    height={50}
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                  />
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                  As a gastroenterologist, having quick access to liver function tests, vitals, and previous reports helps me make decisions with greater clarity. The SHM platform makes all of this available in a single interface. It feels organized and efficient, especially during follow-ups and chronic care management.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                    <Image
                      src="/icons/hm-8-img8.png"
                      alt="Jane Smith"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Sagar P Kabadi</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-['Montserrat']">Senior Consultant, Medical Gastroenterologist
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="w-[250px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
                <div className="absolute top-2 left-2">
                  <Image
                    src="/icons/hm-8-img2.png"
                    alt="Quote icon"
                    width={50}
                    height={50}
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                  />
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                  The SHM platform stands out with its ability to organize and present all necessary patient data—especially radiology reports like MRIs and CTs—before I begin my consultation. It brings a lot of clarity to my decision-making and allows me to focus directly on the clinical need.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                    <Image
                      src="/icons/hm-8-img5.png"
                      alt="John Doe"
                      width={48}
                      height={48}
                      className="object-cover  w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Pratham R Bysan</h4>
                    <p className="text-gray-500 text-xs sm:text-sm font-['Montserrat']">Consultant Neurosciences</p>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="w-[250px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
                <div className="absolute top-2 left-2">
                  <Image
                    src="/icons/hm-8-img2.png"
                    alt="Quote icon"
                    width={50}
                    height={50}
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                  />
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                  In cardiology, speed and accuracy are essential. SHM delivers real-time 12-lead ECGs that are clear and immediate. Combined with vitals and patient history, it gives me all the inputs I need to make confident and timely clinical decisions. It’s an excellent tool for proactive cardiac care.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                    <Image
                      src="/icons/hm-8-img9.png"
                      alt="Emily Johnson"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Sarthak Sahoo</h4>
                    <p className="text-gray-500 text-sm font-['Montserrat']">Senior Consultant, Cardiology</p>
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
                <div className="absolute top-2 left-2">
                  <Image
                    src="/icons/hm-8-img2.png"
                    alt="Quote icon"
                    width={50}
                    height={50}
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                  />
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                  SHM has helped me connect with patients across all stages—from fertility counseling to postnatal care. I can easily access hormone profiles, ultrasound reports, and vitals. The digital prescription pad is seamless—I can document symptoms, prescribe medications or tests, and sign everything in one place.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                    <Image
                      src="/icons/hm-8-img6.png"
                      alt="Emily Johnson"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Priyanka Das</h4>
                    <p className="text-gray-500 text-sm font-['Montserrat']">Senior Consultant, Obstetrics & Gynaecology</p>
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
                <div className="absolute top-2 left-2">
                  <Image
                    src="/icons/hm-8-img2.png"
                    alt="Quote icon"
                    width={50}
                    height={50}
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                  />
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                  What I value most is the time-saving design. The digital queue, instant patient summaries, and seamless transition to the next case help me respond swiftly. With all reports and vitals ready when I join the call, every second is utilized effectively.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                    <Image
                      src="/icons/hm-8-img11.png"
                      alt="Emily Johnson"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Vijay Kumar K M</h4>
                    <p className="text-gray-500 text-sm font-['Montserrat']">Consultant, Emergency Medicine</p>
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
                <div className="absolute top-2 left-2">
                  <Image
                    src="/icons/hm-8-img2.png"
                    alt="Quote icon"
                    width={50}
                    height={50}
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                  />
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                  For surgical follow-ups and cosmetic consultations, SHM gives me everything I need—clinical images, vitals, and case history—well before I begin the consultation. It’s efficient and ensures I can provide precise guidance, even for patients consulting from a distance.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                    <Image
                      src="/icons/hm-8-img7.png"
                      alt="Emily Johnson"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Ramesh K T </h4>
                    <p className="text-gray-500 text-sm font-['Montserrat']">Consultant Plastic & Cosmetic Surgeon</p>
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
                <div className="absolute top-2 left-2">
                  <Image
                    src="/icons/hm-8-img2.png"
                    alt="Quote icon"
                    width={50}
                    height={50}
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                  />
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                  I find the SHM platform incredibly useful for reviewing patient X-rays, post-op images, and orthopedic test results. The structured format, combined with real-time vitals and symptom input, makes remote orthopedic evaluations smoother and more accurate.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                    <Image
                      src="/icons/hm-8-img3.png"
                      alt="Emily Johnson"
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Avinash Parthasarathy</h4>
                    <p className="text-gray-500 text-sm font-['Montserrat']">Consultant, Orthopaedics</p>
                  </div>
                </div>
              </div>
              <div className="w-[250px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
                <div className="absolute top-2 left-2">
                  <Image
                    src="/icons/hm-8-img2.png"
                    alt="Quote icon"
                    width={50}
                    height={50}
                    className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                  />
                </div>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                  In dermatology, image quality is critical. The SHM delivers high-resolution dermatoscope images, along with all relevant patient information in one place. It has made remote consultations feel just as thorough and reliable as in-person visits.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                    <Image
                      src="/icons/hm-8-img1.png"
                      alt="Emily Johnson"
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Abhiram Rayapati</h4>
                    <p className="text-gray-500 text-sm font-['Montserrat']">Chief Consultant, Dermatology & ENT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We Work With Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <h2 className="text-[28px] xs:text-[30px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">We</span>{' '}
            <span className="text-[#003366]">Work With</span>
          </h2>
          <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
            <div className="bg-white p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center">
                <Image src="/icons/hm-10-img11.png" alt="CSR & Impact Funds" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%]">CSR & Impact Funds</h3>
            </div>
            <div className="bg-white p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center">
                <Image src="/icons/hm-10-img12.png" alt="Doctors & Healthcare Professionals" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%]">Healthcare Professionals</h3>
            </div>
            <div className="bg-white p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center h-[50%]">
                <Image src="/icons/hm-10-img13.png" alt="Hospitals & Clinics" width={70} height={60} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-18 h-auto object-contain' />
              </div>
              <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%]">Hospitals & Clinics</h3>
            </div>
            <div className="bg-white p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center h-[50%]">
                <Image src="/icons/hm-10-img14.png" alt="IT Park & Corporate" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%] ">IT Park & Corporate</h3>
            </div>
            <div className="bg-white p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center h-[50%]">
                <Image src="/icons/hm-10-img15.png" alt="Policy Makers & Local Bodies" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%] ">Policy Makers & Local Bodies</h3>
            </div>
            <div className="bg-white p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center h-[50%]">
                <Image src="/icons/hm-10-img16.png" alt="Residential Complex & Gated Communities" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%] ">Residential Complex</h3>
            </div>
            <div className="bg-white p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center h-[50%]">
                <Image src="/icons/hm-10-img17.png" alt="Rural Health Centers & Panchayats" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%] ">Rural Health Centers</h3>
            </div>
          </div>
        </div>
      </div>


      {/* Explore Partnership Section */}
      <Partner />


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
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            {/* FAQ Items */}
            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq1' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq1' ? null : 'faq1')}
                className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 transition-colors duration-200"
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