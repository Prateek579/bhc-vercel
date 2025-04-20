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
  const [activeProd, setActiveProd] = React.useState<number | null>(1);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

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

  useEffect(() => {
    // Safe window check for SSR
    const checkTouchDevice = (): boolean => {
      if (typeof window === 'undefined') return false;
      return 'ontouchstart' in window;
    };

    setIsTouchDevice(checkTouchDevice());
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
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
                <span className="text-[#18A093]">Addressing</span>{' '}
                <span className="text-[#003366]">Key Challenges</span>
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <div
                    className="flex flex-row items-center space-x-3 py-2 cursor-pointer"
                    onClick={() => setActiveFaq(activeFaq === 'healthcare' ? null : 'healthcare')}
                  >
                    <div className="flex-shrink-0 mt-1 ">
                      <Image src="/icons/hm-6-lgo.png" alt='logo image' width={25} height={25} />
                    </div>
                    <p className="text-[#003366] font-['Montserrat'] text-[18px] sm:text-[18px] md:text-[22px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize transition-opacity duration-300">Limited Access to Quality Healthcare</p>
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
                        <p className="text-sm font-medium mb-1 text-[#003366]">BHC&apos;s Solution:</p>
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
                    <div className="flex-shrink-0 mt-1 ">
                      <Image src="/icons/hm-6-lgo.png" alt='logo image' width={25} height={25} />
                    </div>
                    <p className="text-[#003366] font-['Montserrat'] text-[18px] sm:text-[18px] md:text-[22px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize transition-opacity duration-300">Lack of Real-Time, Integrated Diagnostics in Telemedicine</p>
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
                        <p className="text-sm font-medium mb-1 text-[#003366]">BHC&apos;s Solution:</p>
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
                    <div className="flex-shrink-0 mt-1 ">
                      <Image src="/icons/hm-6-lgo.png" alt='logo image' width={25} height={25} />
                    </div>
                    <p className="text-[#003366] font-['Montserrat'] text-[18px] sm:text-[18px] md:text-[22px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize transition-opacity duration-300">Lack of Focus on Preventive and Chronic Disease Management</p>
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
                        <p className="text-sm font-medium mb-1 text-[#003366]">BHC&apos;s Solution:</p>
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
                    <div className="flex-shrink-0 mt-1">
                      <Image src="/icons/hm-6-lgo.png" alt='logo image' width={25} height={25} />
                    </div>
                    <p className="text-[#003366] font-['Montserrat'] text-[18px] sm:text-[18px] md:text-[22px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize transition-opacity duration-300">Disconnected Healthcare Journey and Lack of Timely Follow-up</p>
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
                        Disconnected health records and fragmented follow-ups lead to inefficiencies for both patients and healthcare providers. BHC’s Solution: Offers connected apps for patients, doctors and nurses, plus a smart admin dashboard for hospitals to track and manage care journeys. Ensures seamless, personalized healthcare — from diagnostics to consultation to follow-up.
                      </p>
                      <div className="mt-2">
                        <p className="text-sm font-medium mb-1 text-[#003366]">BHC&apos;s Solution:</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Offers connected apps for patients, doctors and nurses, plus a smart admin dashboard for hospitals to track and manage care journeys.</li>
                          <li>Ensures seamless, personalized healthcare — from diagnostics to consultation to follow-up.</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
              {/* Health Checkup */}
              <div className="rounded-lg border border-gray-200 overflow-hidden">
                <Image
                  src="/icons/hm-4-img1.jpg"
                  alt="Health Checkup"
                  width={60}
                  height={60}
                  className='w-full h-full'
                />
              </div>
              <div className="rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <Image
                  src="/icons/hm-4-img2.jpg"
                  alt="Health Checkup"
                  width={60}
                  height={60}
                  className='w-full h-full'
                />
              </div>
              <div className="rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <Image
                  src="/icons/hm-4-img3.jpg"
                  alt="Health Checkup"
                  width={60}
                  height={60}
                  className='w-full h-full contain'
                />
              </div>
              <div className="rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <Image
                  src="/icons/hm-4-img1.png"
                  alt="Health Checkup"
                  width={60}
                  height={60}
                  className='w-full h-full contain'
                />
              </div>

              {/* <div className="relative w-[100%] h-[100%] flex items-center justify-center overflow-hidden">
              Center animation
              <Image
                src="/icons/hm-anim.gif"
                alt="Healthcare Network Animation"
                width={500}
                height={500}
                className="h-[100%] w-[100%]"
              />
            </div> */}
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
              className={`p-4 bg-white rounded-lg border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around min-h-[150px] md:min-h-[200px] lg:min-h-[250px] ${activeCard === 'phase1' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase1')}
            >
              <div className="flex flex-row items-center justify-around group-hover:hidden touch-hover:hidden">
                <Image
                  src="/icons/hm-5-lgo1.png"
                  alt="Health Checkup"
                  width={48}
                  height={48}
                />

              </div>
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-middle align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Integrated Tele-Diagnostic & Specialist Consultation Access</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                Our SHM enables real-time diagnostics — from vitals to ECG and blood tests — paired with virtual access to city-based specialist doctors. This bridges the rural healthcare gap by ensuring timely, expert-led diagnosis and advice at the patient’s doorstep.
              </p>
            </div>

            <div
              className={`p-4 bg-white rounded-lg border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around min-h-[150px] md:min-h-[200px] lg:min-h-[250px] ${activeCard === 'phase1' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase1')}
            >
              <div className="flex flex-row items-center justify-around group-hover:hidden touch-hover:hidden">
                <Image
                  src="/icons/hm-5-lgo1.png"
                  alt="Health Checkup"
                  width={48}
                  height={48}
                />

              </div>
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-middle align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300"> Nurse-Assisted Health Access Points at PHCs, Diagnostic Centers & Clinics
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                Deployed within existing healthcare infrastructure, our SHM units are operated by trained nurses — blending digital innovation with human care. Patients receive personalized support and guided consultations in familiar, trusted environments.

              </p>
            </div>
            <div
              className={`relative bg-white rounded-lg border-1 border-gray-300 overflow-hidden card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around min-h-[150px] md:min-h-[200px] lg:min-h-[250px] ${activeCard === 'phase1' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase1')}
            >
              <div className="absolute inset-0 w-full h-full group-hover:hidden touch-hover:hidden">
                <Image
                  src="/icons/hm-4-img1.jpg"
                  alt="Health Checkup"
                  width={48}
                  height={48}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full">
                <h3 className="text-[18px] text-white  sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-middle align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                  Smart Queue Management with Digital Time Slots
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                  Patients no longer need to wait endlessly. Our system assigns a time slot, allowing them to plan their day — minimizing wage loss, travel fatigue, and overcrowding at the consultation site.
                </p>
              </div>
            </div>
            <div
              className={`p-4 bg-white rounded-lg border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around min-h-[150px] md:min-h-[200px] lg:min-h-[250px] ${activeCard === 'phase1' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase1')}
            >
              <div className="flex flex-row items-center justify-around group-hover:hidden touch-hover:hidden">
                <Image
                  src="/icons/hm-5-lgo1.png"
                  alt="Health Checkup"
                  width={48}
                  height={48}
                />

              </div>
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-middle align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Digital Health Records (EHR) & Follow-Ups
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                Every patient interaction — checkups, diagnostics, consultations — is securely recorded. This ensures continuity of care, helps doctors track health progress and allows for intelligent follow-up and medication reminders.

              </p>
            </div>
            <div
              className={`p-4 bg-white rounded-lg border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around min-h-[150px] md:min-h-[200px] lg:min-h-[250px] ${activeCard === 'phase1' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase1')}
            >
              <div className="flex flex-row items-center justify-around group-hover:hidden touch-hover:hidden">
                <Image
                  src="/icons/hm-5-lgo1.png"
                  alt="Health Checkup"
                  width={48}
                  height={48}
                />

              </div>
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-middle align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Preventive Health Programs & Early Detection
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                Regular screenings promote early detection of chronic conditions. This, combined with timely consultations, encourages preventive care and reduces long-term complications.

              </p>
            </div>
            <div
              className={`p-4 bg-white rounded-lg border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around min-h-[150px] md:min-h-[200px] lg:min-h-[250px] ${activeCard === 'phase1' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase1')}
            >
              <div className="flex flex-row items-center justify-around group-hover:hidden touch-hover:hidden">
                <Image
                  src="/icons/hm-5-lgo1.png"
                  alt="Health Checkup"
                  width={48}
                  height={48}
                />

              </div>
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-middle align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Health Data Analytics for Targeted Public Health Interventions
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                Real-time health trends from every SHM location feed into our analytics dashboard — helping hospitals, NGOs and funders plan wellness programs and allocate resources effectively.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Text Content */}
            <div className="space-y-6 mt-5">
              <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                {/* Product List */}
                <div className={`flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300 ${activeProd === 1 && 'border-2 border-gray-300'}`} onClick={() => setActiveProd(1)}>
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <Image src="/icons/prd-2-lgo1.png" alt="Smart Healthcare Machine" width={32} height={32} className="w-full h-full" />
                  </div>
                  <p className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat']">Smart Healthcare Machine</p>
                  <div className="ml-auto">
                    <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {activeProd === 1 && (<>
                  <div className="h-full w-full flex flex-col items-center justify-center block lg:hidden">
                    <Image
                      src="/icons/hm-7-img.png"
                      alt="Smart Healthcare Machine"
                      width={100}
                      height={100}
                      className="w-[250px] sm:w-[350px] md:w-[250px] lg:w-[350px] object-contain transition-all duration-300"
                      priority
                    />
                  </div>
                  <div className="relative bg-white overflow-hidden">
                    <div className="pb-5 sm:pb-2 md:pb-3 lg:pb-5 flex flex-col md:flex-row gap-4 md:gap-0">
                      <div className="w-full pb-1 sm:pb-1 md:pb-2 lg:pb-3">
                        <h3 className="text-[22px] sm:text-[28px] md:text-[30px] font-[700] font-['Montserrat'] mb-1 sm:mb-1 md:mb-2 text-[#003366]">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                          <div className="bg-white rounded-lg sm:p-5 md:p-6 transition-all duration-300">
                            <div className="space-y-1 sm:space-y-2 md:space-y-4">
                              <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center text-[#18A093] font-semibold">1.</div>
                                <p className="text-base sm:text-lg md:text-xl text-gray-700">Health Screening</p>
                              </div>
                              <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center text-[#18A093] font-semibold">2.</div>
                                <p className="text-base sm:text-lg md:text-xl text-gray-700">Real-Time Diagnostics Integration</p>
                              </div>
                              <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center text-[#18A093] font-semibold">3.</div>
                                <p className="text-base sm:text-lg md:text-xl text-gray-700">Tele-Consultation with Live Data Sync</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-4 sm:p-5 md:p-6 transition-all duration-300">
                            <div className="space-y-1 sm:space-y-2 md:space-y-4">
                              <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center text-[#18A093] font-semibold">4.</div>
                                <p className="text-base sm:text-lg md:text-xl text-gray-700">Scan and Analyse Health Records</p>
                              </div>
                              <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center text-[#18A093] font-semibold">5.</div>
                                <p className="text-base sm:text-lg md:text-xl text-gray-700">Print Health Reports and Prescription</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </>)}
                <div className={`flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300 ${activeProd === 2 && 'border-2 border-gray-300'}`} onClick={() => setActiveProd(2)}>
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <Image src="/icons/prd-2-lgo1.png" alt="Doctor App" width={32} height={32} />
                  </div>
                  <p className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat']">Doctor App</p>
                  <div className="ml-auto">
                    <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {activeProd === 2 && (<>
                  <div className="h-full w-full flex flex-col items-center justify-center block lg:hidden">
                    <Image
                      src="/icons/hm-7-img.png"
                      alt="Smart Healthcare Machine"
                      width={100}
                      height={100}
                      className="w-[250px] sm:w-[350px] md:w-[250px] lg:w-[350px] object-contain transition-all duration-300"
                      priority
                    />
                  </div>
                  <div className="relative bg-white overflow-hidden">
                    <div className="pb-5 sm:pb-2 md:pb-3 lg:pb-5 flex flex-col md:flex-row gap-4 md:gap-0">
                      <div className="w-full pb-5 sm:pb-2 md:pb-3 lg:pb-5">
                        <h3 className="text-[22px] sm:text-[28px] md:text-[30px] font-[700] font-['Montserrat'] mb-2 sm:mb-2 md:mb-4 text-[#003366]">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-1 md:gap-6">
                          <div className="space-y-2 bg-white rounded-lg p-3 sm:pt-4 md:p-5">
                            <div className="space-y-2 sm:space-y-4 md:space-y-4">
                              <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">1.</div>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">Multi SHM Accessibility</p>
                              </div>
                              <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">2.</div>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">Live Video Consultation with Real-Time Data</p>
                              </div>
                              <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">3.</div>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">Instant Access to Patient Records</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-4 bg-white rounded-lg px-3 sm:p-4 md:p-5">
                            <div className="space-y-2 sm:space-y-4 md:space-y-4">
                              <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">4.</div>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">Easy Prescription Writing & Upload</p>
                              </div>
                              <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">5.</div>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600">Dashboard to Track Consultations</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div></>)
                }
                <div className={`flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300 ${activeProd === 3 && 'border-2 border-gray-300'}`} onClick={() => setActiveProd(3)}>
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <Image src="/icons/prd-2-log2.png" alt="Patient App" width={32} height={32} />
                  </div>
                  <p className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat']">Patient App</p>
                  <div className="ml-auto">
                    <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {activeProd === 3 && (<>
                  <div className="h-full w-full flex flex-col items-center justify-center block lg:hidden">
                    <Image
                      src="/icons/hm-7-img2.png"
                      alt="Smart Healthcare Machine"
                      width={100}
                      height={100}
                      className="w-[250px] sm:w-[350px] md:w-[250px] lg:w-[350px] object-contain transition-all duration-300"
                      priority
                    />
                  </div>
                  <div className="relative bg-white overflow-hidden">
                    <div className="pb-5 sm:pb-2 md:pb-3 lg:pb-5 flex flex-col md:flex-row gap-4 md:gap-0">
                      <div className="space-y-4 bg-white rounded-lg p-3 sm:p-4 md:p-5 w-full md:w-[30%]">
                        <h3 className="text-xl sm:text-2xl md:text-[24px] font-[700] font-['Montserrat'] leading-[110%] sm:leading-[105%] md:leading-[100%] tracking-[0%] align-middle text-[#003366] mb-4 sm:mb-6 md:mb-8">Key Features</h3>
                        <div className="space-y-4 sm:space-y-6 md:space-y-8">
                          <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                            <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">1.</div>
                            <p className="text-sm sm:text-base md:text-lg text-gray-600">Virtual consultations</p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </>)}

                <div className={`flex items-center space-x-3 sm:space-x-4 md:space-x-5 lg:space-x-6 p-4 sm:p-5 md:p-6 lg:p-6 rounded-lg transition-all duration-300 ${activeProd === 4 && 'border-2 border-gray-300'}`} onClick={() => setActiveProd(4)}>
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                    <Image src="/icons/prd-2-log2.png" alt="Operator / Nurse App" width={32} height={32} />
                  </div>
                  <p className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat']">Nurse App</p>
                  <div className="ml-auto">
                    <svg className="w-5 h-5 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {activeProd === 4 && (<>
                  <div className="h-full w-full flex flex-col items-center justify-center block lg:hidden">
                    <Image
                      src="/icons/hm-7-img3.png"
                      alt="Smart Healthcare Machine"
                      width={100}
                      height={100}
                      className="w-[250px] sm:w-[350px] md:w-[250px] lg:w-[350px] object-contain transition-all duration-300"
                      priority
                    />
                  </div>
                  <div className="relative bg-white overflow-hidden">
                    <div className="pb-5 sm:pb-2 md:pb-3 lg:pb-5">
                      <h3 className="text-[22px] sm:text-[28px] md:text-[30px] font-[700] font-['Montserrat'] mb-2 sm:mb-2 md:mb-4 text-[#003366]">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 sm:gap-1 md:gap-6">
                        <div className="space-y-2 bg-white rounded-lg px-3 sm:pt-4 md:p-5">
                          <div className="space-y-2 sm:space-y-4 md:space-y-4">
                            <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">1.</div>
                              <p className="text-sm sm:text-base md:text-lg text-gray-600">Appointment and Schedule Management</p>
                            </div>
                            <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">2.</div>
                              <p className="text-sm sm:text-base md:text-lg text-gray-600">Patient Queue Management</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 bg-white rounded-lg p-3 sm:pt-4 md:p-5">
                          <div className="space-y-2 sm:space-y-4 md:space-y-4">
                            <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">3.</div>
                              <p className="text-sm sm:text-base md:text-lg text-gray-600">Patient Health Records Digitization</p>
                            </div>
                            <div className="flex items-start gap-1 sm:gap-2 md:gap-3">
                              <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center text-gray-600">4.</div>
                              <p className="text-sm sm:text-base md:text-lg text-gray-600">Analytics & Follow-up Tracking</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>)}
                <div className="mt-12">
                  <Link href="/contactUs"
                    className="inline-block px-8 py-3 border-1 border-[#003366] text-[#003366] rounded-xl font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            {activeProd === 1 &&
              <div className="h-full w-full flex flex-col items-center justify-center hidden lg:block">
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <Image
                    src="/icons/hm-7-img.png"
                    alt="Smart Healthcare Machine"
                    width={100}
                    height={100}
                    className="w-[250px] sm:w-[350px] md:w-[250px] lg:w-[350px] object-contain transition-all duration-300"
                    priority
                  /></div>
              </div>
            }
            {activeProd === 2 &&
              <div className="h-full w-full hidden lg:block">
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <Image
                    src="/icons/hm-7-img.png"
                    alt="Smart Healthcare Machine"
                    width={100}
                    height={100}
                    className="w-[250px] sm:w-[350px] md:w-[250px] lg:w-[350px] transition-all duration-300"
                  /></div>
              </div>
            }
            {activeProd === 3 &&
              <div className="h-full w-full flex flex-col items-center justify-center hidden lg:block">
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <Image
                    src="/icons/hm-7-img2.png"
                    alt="Smart Healthcare Machine"
                    width={100}
                    height={100}
                    className="w-[250px] sm:w-[350px] md:w-[250px] lg:w-[350px] object-contain transition-all duration-300"
                    priority
                  /></div>
              </div>
            }
            {activeProd === 4 &&
              <div className="h-full w-full hidden lg:block">
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <Image
                    src="/icons/hm-7-img3.png"
                    alt="Smart Healthcare Machine"
                    width={100}
                    height={100}
                    className="w-[250px] sm:w-[350px] md:w-[250px] lg:w-[340px] object-contain transition-all duration-300"
                    priority
                  /></div>
              </div>
            }
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