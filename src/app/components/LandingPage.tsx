'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Partner from './Partner';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  const [activeProductBtn, setActiveProductBtn] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [currentMediaIndexOne, setCurrentMediaIndexOne] = useState(0);
  const [currentMediaIndexTwo, setCurrentMediaIndexTwo] = useState(0);
  const [currentMediaIndexThree, setCurrentMediaIndexThree] = useState(1);
  const [currentMediaIndexFive, setCurrentMediaIndexFive] = useState(0);
  const [showFaq, setShowFaq] = useState(false);


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

  const swiperRef = useRef<SwiperType | null>(null);

  const goToSlide = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); // handles loop mode correctly
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
            <div className="space-y-4">
              <h2 className="text-[32px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
                <span className="text-[#18A093]">Reimagining Access to</span>{' '}
                <br />
                <span className="text-[#003366]">Quality Healthcare</span>
              </h2>
              <p className="text-[#555555] text-[16px] sm:text-[20px] md:text-[22px] font-['Montserrat'] font-medium">
                From Cities to Villages. From Clinics to Communities.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-['Montserrat'] text-gray-600">
                At Bridge Healthcare, we turn everyday spaces—residential societies, community centers, and underserved areas—into fully connected health hubs. With our Smart Healthcare Machine (SHM) and real-time tele-diagnostics, we deliver vital checkups, doctor consultations, and wellness programs where they&apos;re needed most.
                Since 2022, we&apos;ve been making personalized, preventive healthcare accessible, affordable, and always within reach.
              </p>
            </div>

            {/* Video Component */}
            <div className="relative aspect-video flex items-center justify-center overflow-hidden">
              <Image
                src="/icons/hm-2-img.png"
                alt="Journey So Far"
                width={500}
                height={300}
                className="object-contain rounded-3xl w-[90%] h-[90%]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      {/* Statistics Section */}
      <div
        ref={statsRef}
        className="relative overflow-hidden py-4 sm:py-4 md:py-5 lg:py-5"
        style={{ background: 'linear-gradient(90deg, rgba(24, 160, 147, 0.7) 0%, rgba(18, 131, 135, 0.7) 33.17%, rgba(11, 100, 122, 0.7) 64.42%, rgba(6, 80, 114, 0.7) 87.02%, rgba(0, 51, 102, 0.7) 100%)' }}>
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22">
          <h1 className='font-bold mb-2  text-[20px] sm:text-[20px] md:text-[30px] lg:text-[35px] text-center'>Impact that Matters</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-white">
            {/* Specialist Referrals */}
            <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 h-[140px] sm:h-[150px] md:h-[160px] space-y-3 sm:space-y-4">
              <div className="flex flex-row items-center">
                <Image
                  src="/icons/hm-3-img1.png"
                  alt="Specialist Referrals"
                  width={40}
                  height={40}
                  className="w-12 h-14 sm:w-15 sm:h-17 md:w-15 md:h-17 mr-2"
                />
                <h3 className="text-2xl sm:text-[35px] md:text-[35px] font-bold font-['Montserrat'] ` w-[100px]">{departments.count}+</h3>
              </div>
              <p className="text-[18px] sm:text-[15px] md:text-[20px] opacity-90 font-['Montserrat']">Connecting Departments</p>
            </div>

            {/* Early Disease Detection */}
            <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 h-[140px] sm:h-[150px] md:h-[160px] space-y-3 sm:space-y-4">
              <div className="flex flex-row items-center">
                <Image
                  src="/icons/hm-3-img2.png"
                  alt="Early Disease Detection"
                  width={40}
                  height={40}
                  className="w-12 h-14 sm:w-15 sm:h-17 md:w-15 md:h-17 mr-2"
                />
                <h3 className="text-2xl sm:text-[35px] md:text-[35px] font-bold font-['Montserrat']  w-[100px]">{diseaseDetection.count}%</h3>
              </div>

              <p className="text-[18px] sm:text-[15px] md:text-[20px] opacity-90 font-['Montserrat']">Early Disease Detected</p>
            </div>

            {/* Patients Treated */}
            <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 h-[140px] sm:h-[150px] md:h-[160px] space-y-3 sm:space-y-4">
              <div className="flex flex-row items-center">
                <Image
                  src="/icons/hm-3-img3.png"
                  alt="Patients Treated"
                  width={40}
                  height={40}
                  className="w-12 h-14 sm:w-13 sm:h-15 mr-2"
                />
                <h3 className="text-2xl sm:text-[35px] md:text-[35px] font-bold font-['Montserrat']  w-[100px]">{hospitalReferrals.count}+</h3>
              </div>

              <p className="text-[18px] sm:text-[15px] md:text-[20px] opacity-90 font-['Montserrat']">Hospital Referals</p>
            </div>

            {/* Patient Satisfaction */}
            <div className="flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5 h-[140px] sm:h-[150px] md:h-[160px] space-y-3 sm:space-y-4">
              <div className="flex flex-row items-center">
                <Image
                  src="/icons/hm-3-img4.png"
                  alt="Patient Satisfaction"
                  width={40}
                  height={40}
                  className="w-12 h-14 sm:w-15 sm:h-17 md:w-15 md:h-17 mr-2"
                />
                <h3 className="text-2xl sm:text-[35px] md:text-[35px] font-bold font-['Montserrat']  w-[100px]">{satisfactionRate.count}%</h3>
              </div>

              <p className="text-[18px] sm:text-[15px] md:text-[20px] opacity-90 font-['Montserrat']">Patients Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/*Powered by Government Schemes*/}
      < div className="relative bg-white overflow-hidden" >
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
            <span className="text-[#18A093]">Powered by</span>{' '}
            <span className="text-[#003366]">Government Schemes</span>
          </h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
            <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
              <Image src="/icons/hm-gs-img1.png" alt="Gov. Schemes" width={200} height={200} className='w-20  md:w-45 h-auto object-contain' />
            </div>
            <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
              <Image src="/icons/hm-gs-img2.png" alt="Gov. Schemes" width={200} height={200} className='w-20  md:w-45 h-auto object-contain' />
            </div>
            <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
              <Image src="/icons/hm-gs-img3.png" alt="Gov. Schemes" width={200} height={200} className='w-20  md:w-45 h-auto object-contain' />
            </div>
            <div className="flex  items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
              <Image src="/icons/hm-gs-img4.png" alt="Gov. Schemes" width={200} height={200} className='w-20  md:w-45 h-auto object-contain' />
            </div>
          </div>
        </div>
      </div >


      <div className="relative  py-16 overflow-hidden bg-gray-100">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 ">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
            <span className="text-[#18A093]">Addressing</span>{' '}
            <span className="text-[#003366]">Challenges</span>
          </h2>

          <div className="relative w-full max-w-screen-xl mx-auto md:px-6 ">
            <button className="custom-prev cursor-pointer absolute left-0 top-[45%] z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 19l-7-7 7-7" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className="custom-next cursor-pointer absolute right-0 top-[45%] z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-all duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              spaceBetween={30}
              slidesPerView={2}
              pagination={{ clickable: true, el: '.custom-pagination' }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
            >
              {/* Card 1 */}
              <SwiperSlide>
                <div className="relative md:h-[500px] group overflow-hidden rounded-lg w-full max-w-[600px] aspect-[4/3]">
                  <Image
                    src="/icons/hm-4-img1.1.jpeg"
                    alt="Sewer Lines"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0  bg-gradient-to-t from-black/90 to-black/10 flex flex-col justify-start p-8">
                    <h3 className="text-2xl sm:text-[26px] font-['Montserrat'] font-bold text-white mb-4 text-center">Limited Access to Quality Care</h3>
                    <p className="text-white/90 text-sm font-['Montserrat'] sm:text-[16px] text-center">
                      Quality healthcare remains inaccessible for millions — from remote rural regions to premium residential areas lacking sufficient medical infrastructure.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Card 2 */}
              <SwiperSlide>
                <div className="relative md:h-[500px] group overflow-hidden rounded-lg w-full max-w-[600px] aspect-[4/3]">
                  <Image
                    src="/icons/hm-4-img4.jpg"
                    alt="Stormwater Drains"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0  bg-gradient-to-t from-black/100 to-black/10 flex flex-col justify-start p-8">
                    <h3 className="text-2xl sm:text-[26px] font-['Montserrat'] font-bold text-white mb-4 text-center">Gaps in Real-Time Tele-Diagnostics</h3>
                    <p className="text-white/90 text-sm font-['Montserrat'] sm:text-[16px] text-center">
                      While video consultations are common, they often lack real-time diagnostic data, leading to treatment based on assumptions rather than precision.

                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Card 3 */}
              <SwiperSlide>
                <div className="relative md:h-[500px] group overflow-hidden rounded-lg w-full max-w-[600px] aspect-[4/3]">
                  <Image
                    src="/icons/hm-4-img2.1.webp"
                    alt="Sewer Lines"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0  bg-gradient-to-t from-black/90 to-black/10 flex flex-col justify-start p-8">
                    <h3 className="text-2xl sm:text-[26px] font-['Montserrat'] font-bold text-white mb-4 text-center">Neglect of Preventive & Chronic Care</h3>
                    <p className="text-white/90 text-sm font-['Montserrat'] sm:text-[16px] text-center">
                      Healthcare today still focuses more on treatment than prevention — missing early detection, wellness, and chronic care opportunities.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              {/* Card 4 */}
              <SwiperSlide>
                <div className="relative md:h-[500px] group overflow-hidden rounded-lg w-full max-w-[600px] aspect-[4/3]">
                  <Image
                    src="/icons/hm-4-img2.1.jpg"
                    alt="Stormwater Drains"
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0  bg-gradient-to-t from-black/90 to-black/10 flex flex-col justify-start p-8">
                    <h3 className="text-2xl sm:text-[26px] font-['Montserrat'] font-bold text-white mb-4 text-center">Fragmented Care & Missed Follow-Ups</h3>
                    <p className="text-white/90 text-sm font-['Montserrat'] sm:text-[16px] text-center">
                      Disconnected health records and fragmented follow-ups lead to inefficiencies for both patients and healthcare providers.
                    </p>
                  </div>

                </div>
              </SwiperSlide>
              <div className="custom-pagination flex justify-center gap-2 mt-6"></div>
            </Swiper>

          </div>
        </div>
      </div>

      {/*Small screen Our Products section */}
      <div className="bg-white overflow-hidden  md:hidden">
        <div className="lg:px-22 pt-0 pb-4 md:py-15">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
            <span className="text-[#18A093]">Our</span>{' '}
            <span className="text-[#003366]">Products</span>
          </h2>
          <div className="parallax-section section1 border-b-3 border-white h-[90vh]" >
            <div className="content w-full h-full  overflow-scroll ">
              <div className="content-prd h-full flex items-center justify-center ">
                <div className="text-5xl font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white">Smart Healthcare Machine</div>
              </div>
              <div className="bg-[#003366]/70 h-full flex flex-col px-4 justify-around">
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Live Stethscope</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">12 Lead ECG</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Print Health Report & Prescription</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Digital Health Records</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Tele-Diagnostic Tools</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Blood Tests</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Rapid Tests</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Real-Time Heath Data Sreaming</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Tele-Consultation</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Multi-Specialist Connect</div>
              </div>
            </div>
          </div>

          <div className="parallax-section section2 border-b-3  border-white h-[90vh]">
            <div className="content w-full h-full  overflow-scroll ">
              <div className="content-prd h-full flex items-center justify-center ">
                <div className="text-5xl font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-gray-700">Nurse App</div>
              </div>
              <div className="bg-[#003366]/70 h-full flex flex-col px-4 justify-around">
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Add Patient Information</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Book Appointments</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Manage Follow-Ups</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Digital Health Records</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">EHR Management</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Upload Reports</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Add Doctors to SHM</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Digital Queue Management</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Mangae Consultation Time Slots</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Print Priscription</div>
              </div>
            </div>
          </div>
          <div className="parallax-section section3 border-b-3  border-white h-[90vh]">
            <div className="content w-full h-full  overflow-scroll ">
              <div className="content-prd h-full flex items-center justify-center ">
                <div className="text-5xl font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-gray-700">Doctor App</div>
              </div>
              <div className="bg-[#003366]/70 h-full flex flex-col px-4 justify-around">
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Add Patient Information</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Live Stethscope</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">12 Lead ECG</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Print Health Report & Prescription</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Digital Health Records</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Tele-Diagnostic Tools</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Blood Tests</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Rapid Tests</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Real-Time Heath Data Sreaming</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Tele-Consultation</div>
                <div className="text-lg font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-white text-start">Multi-Specialist Connect</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Products section */}
      <div className="relative bg-white hidden md:block overflow-hidden" >
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 pt-0 pb-4 md:py-15">
          <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
            <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
              <span className="text-[#18A093]">Our</span>{' '}
              <span className="text-[#003366]">Products</span>
            </h2>
            {/* Slide Control Buttons */}
            <div className="w-full h-full flex itmes-center justify-center">
              <div className="grid grid-cols-3  md:w-[80%] gap-1 md:gap-4 mb-6 ">
                <div className={`border-2 border-gray-200 group flex items-center justify-center hover:cursor-pointer p-1 md:p-2 lg:p-3 rounded-lg transition-all duration-300 ${activeProductBtn === 0 ? 'bg-[#0E7280]' : 'hover:bg-[#0E7280]'}`} onClick={() => { goToSlide(0); setActiveProductBtn(0); }}>
                  <p className={`text-[12px] sm:text-[18px] md:text-[20px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat'] text-center ${activeProductBtn === 0 ? 'text-white' : 'text-gray-700 group-hover:text-white'}`}>Smart Healthcare Machine</p>
                </div>
                <div className={`border-2 border-gray-200 group flex items-center justify-center hover:cursor-pointer p-1 md:p-2 lg:p-3 rounded-lg transition-all duration-300 ${activeProductBtn === 1 ? 'bg-[#0E7280]' : 'hover:bg-[#0E7280]'}`} onClick={() => { goToSlide(1); setActiveProductBtn(1); }}>
                  <p className={`text-[12px] sm:text-[18px] md:text-[20px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat'] text-center ${activeProductBtn === 1 ? 'text-white' : 'text-gray-700 group-hover:text-white'}`}>Nurse App</p>
                </div>
                <div className={`border-2 border-gray-200 group flex items-center justify-center hover:cursor-pointer p-1 md:p-2 lg:p-3 rounded-lg transition-all duration-300 ${activeProductBtn === 2 ? 'bg-[#0E7280]' : 'hover:bg-[#0E7280]'}`} onClick={() => { goToSlide(2); setActiveProductBtn(2); }}>
                  <p className={`text-[12px] sm:text-[18px] md:text-[20px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat'] text-center ${activeProductBtn === 2 ? 'text-white' : 'text-gray-700 group-hover:text-white'}`}>Doctor App</p>
                </div>
              </div>
            </div>

            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-full md:w-[70%]  py-2">
                <button className="custom-prev hidden"></button>
                <button className="custom-next hidden"></button>

                <Swiper
                  autoHeight={true}
                  modules={[Navigation, Pagination, Autoplay]}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  pagination={{ clickable: true, el: '.custom-pagination' }}
                  slidesPerView={1}
                  initialSlide={0}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                  }}
                  onSlideChange={(swiper) => setActiveProductBtn(swiper.realIndex)}
                >
                  {/* Card 1 */}
                  <SwiperSlide>
                    <Image src="/icons/hm-6-sl1.png" alt='doctor' width={1000} height={1000} className='w-full h-full' />
                  </SwiperSlide>

                  {/* Card 2 */}
                  <SwiperSlide>
                    <Image src="/icons/hm-6-sl2.png" alt='doctor' width={500} height={500} className='w-full h-full' />
                  </SwiperSlide>

                  {/* Card 3 */}
                  <SwiperSlide>
                    <Image src="/icons/hm-6-sl3.png" alt='doctor' width={1000} height={1000} className='w-full h-full' />
                  </SwiperSlide>
                  <div className=" custom-pagination flex justify-center gap-2 mt-6"></div>
                </Swiper>

              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Our Key Services Section */}
      <div className="relative bg-gray-100 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
            <span className="text-[#18A093]">Our</span>{' '}
            <span className="text-[#003366]">Solutions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8">
            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase1' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase1')}
            >
              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden image-transition-container overflow-hidden">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className={`image-transition-item ${index === currentMediaIndexOne ? 'active' : index === (currentMediaIndexOne === 0 ? 4 : currentMediaIndexOne - 1) ? 'previous' : ''}`}
                  >
                    <Image
                      src={`/icons/hm-5-img4.${index + 1}.jpg`}
                      alt="Health Checkup"
                      width={400}
                      height={400}
                      className='h-full w-full'
                    />
                  </div>
                ))}
              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-gray-700 font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Tele-Diagnostic Access</h3>
              <div className="w-[90%] h-full h-[100%] pt-5 text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                <h4 className="font-semibold mb-2 text-[16px] md:text-[20px] text-white font-['Montserrat']">Real-time diagnostics and specialist consultations.                </h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px] md:text-[18px] text-white font-['Montserrat']">
                  <li>Instant vitals</li>
                  <li>ECGs, and diagnostics via SHM.</li>
                  <li>Virtual consultations with expert doctors.</li>
                  <li>Bridging healthcare gaps across geographies.</li>
                </ul>
              </div>
            </div>

            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase2' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase2')}
            >
              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden image-transition-container overflow-hidden">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`image-transition-item ${index === currentMediaIndexTwo ? 'active' : index === (currentMediaIndexTwo === 0 ? 2 : currentMediaIndexTwo - 1) ? 'previous' : ''}`}
                  >
                    <Image
                      src={`/icons/hm-5-img2.${index + 1}.jpg`}
                      alt="Health Checkup"
                      width={400}
                      height={400}
                      className='h-full w-full'
                    />
                  </div>
                ))}

              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-gray-700 font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Nurse-Enabled Access

              </h3>
              <div className=" w-[90%] h-[100%] pt-5 text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                <h4 className="font-semibold mb-2 text-[16px] md:text-[20px] text-white font-['Montserrat']">Blending digital healthcare with trusted nurse care.</h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px] md:text-[18px] text-white font-['Montserrat']">
                  <li>SHM setups integrated into local clinics.</li>
                  <li>Nurse-assisted diagnostics and consultations.</li>
                  <li>Personalized care with digital support.</li>
                </ul>
              </div>
            </div>
            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase3' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase3')}
            >

              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden image-transition-container overflow-hidden">
                {[1, 2].map((index) => (
                  <div
                    key={index}
                    className={`image-transition-item ${index === currentMediaIndexThree ? 'active' : index === (currentMediaIndexThree === 1 ? 2 : 1) ? 'previous' : ''}`}
                  >
                    <Image
                      src={`/icons/hm-5-img3.${index}.jpg`}
                      alt="Health Checkup"
                      width={400}
                      height={400}
                      className='h-full w-full'
                    />
                  </div>
                ))}
              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-gray-700 font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Smart Queueing</h3>
              <div className="w-[90%] h-[100%] pt-5 text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                <h4 className="font-semibold mb-2 text-[16px] md:text-[20px] text-white font-['Montserrat']">Organized scheduling for faster patient flow.</h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px] md:text-[18px] text-white font-['Montserrat']">
                  <li>Digital time-slot scheduling.</li>
                  <li>Reduced wait times and travel fatigue.</li>
                  <li>Smooth, efficient clinic operations.</li>
                </ul>
              </div>
            </div>
            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase4' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase4')}
            >
              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden image-transition-container overflow-hidden">
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className={`image-transition-item ${index === currentMediaIndex ? 'active' : index === (currentMediaIndex === 0 ? 3 : currentMediaIndex - 1) ? 'previous' : ''}`}
                  >
                    <Image
                      src={`/icons/hm-5-img1.${index + 1}.jpg`}
                      alt="Health Checkup"
                      width={400}
                      height={400}
                      className='h-full w-full'
                    />
                  </div>
                ))}
              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-gray-700 font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Digital Health Tracking

              </h3>
              <div className="w-[90%] h-[100%] pt-5 text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                <h4 className="font-semibold mb-2 text-[16px] md:text-[20px] text-white font-['Montserrat']">Secure digital records for smarter health management.</h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px] md:text-[18px] text-white font-['Montserrat']">
                  <li>Real-time patient health records.</li>
                  <li>Intelligent tracking and follow-ups.</li>
                  <li>Strengthened continuity of care.</li>
                </ul>
              </div>
            </div>
            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase5' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase5')}
            >
              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden image-transition-container overflow-hidden">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`image-transition-item ${index === currentMediaIndexFive ? 'active' : index === (currentMediaIndexFive === 0 ? 2 : currentMediaIndexFive - 1) ? 'previous' : ''}`}
                  >
                    <Image
                      src={`/icons/hm-5-img5.${index + 1}.jpg`}
                      alt="Health Checkup"
                      width={400}
                      height={400}
                      className='h-full w-full'
                    />
                  </div>
                ))}
              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-gray-700 font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Preventive Health Care
              </h3>
              <div className="w-[90%] h-[100%] pt-5 text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                <h4 className="font-semibold mb-2 text-[16px] md:text-[20px] text-white font-['Montserrat']">Early detection and wellness programs for healthier lives.</h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px] md:text-[18px] text-white font-['Montserrat']">
                  <li>Regular community health screenings.</li>
                  <li>Early detection of chronic conditions.</li>
                  <li>Promoting preventive healthcare culture.</li>
                </ul>
              </div>
            </div>
            <div
              className={`bg-white rounded-lg overflow-hidden border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer flex flex-col items-center justify-around h-[250px] md:h-[300px] lg:h-[350px] ${activeCard === 'phase6' ? 'touch-hover' : ''}`}
              onClick={(e) => handleToggle(e, 'phase6')}
            >
              <div className="flex flex-row items-center justify-around w-full h-[85%] group-hover:hidden touch-hover:hidden image-transition-container overflow-hidden">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`image-transition-item ${index === currentMediaIndexFive ? 'active' : index === (currentMediaIndexFive === 0 ? 2 : currentMediaIndexFive - 1) ? 'previous' : ''}`}
                  >
                    <Image
                      src={`/icons/hm-5-img6.${index + 1}.jpg`}
                      alt="Health Checkup"
                      width={400}
                      height={400}
                      className='h-full w-full'
                    />
                  </div>
                ))}
              </div>
              <h3 className="h-[15%] text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] flex flex-row items-center justify-center capitalize text-gray-700 font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">Targeted Health Interventions

              </h3>
              <div className="w-[90%] h-[100%] pt-5 text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
                <h4 className="font-semibold mb-2 text-[16px] md:text-[20px] text-white font-['Montserrat']">Data-driven insights for smarter public health planning.</h4>
                <ul className="list-disc pl-5 space-y-2 text-[13px] md:text-[18px] text-white font-['Montserrat']">
                  <li>Health trend analytics from SHM.</li>
                  <li>Data-backed planning for hospitals and NGOs.</li>
                  <li>Smarter resource allocation strategies.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >

      {/* Testimonials Section */}
      < div className="relative bg-white overflow-hidden" >
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
            <span className="text-[#18A093]">Our</span>{' '}
            <span className="text-[#003366]">Testimonials</span>
          </h2>
          <div className="w-full overflow-hidden">
            <div className=" gap-4 sm:gap-6 lg:gap-8">
              <div className="specialty-cards-container  gap-4 sm:gap-6 lg:gap-8">
                {/* Testimonial Card 1 */}
                <div className="w-[280px] h-auto sm:w-[350px] sm:h-[250px] md:w-[400px] md:h-[350px] bg-white p-2 sm:p-8 lg:p-10 rounded-lg border-2 border-gray-200 relative flex flex-col justify-around">
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
                <div className="w-[280px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-2 sm:p-8 lg:p-10 rounded-lg border-2 border-gray-200 relative flex flex-col justify-around">
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
                <div className="w-[280px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-2 sm:p-8 lg:p-10 rounded-lg border-2 border-gray-200 relative flex flex-col justify-around">
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
                <div className="w-[280px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-2 sm:p-8 lg:p-10 rounded-lg border-2 border-gray-200 relative flex flex-col justify-around">
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
                <div className="w-[280px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-2 sm:p-8 lg:p-10 rounded-lg border-2 border-gray-200 relative flex flex-col justify-around">
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
                <div className="w-[280px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-2 sm:p-8 lg:p-10 rounded-lg border-2 border-gray-200 relative flex flex-col justify-around">
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
                <div className="w-[280px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-2 sm:p-8 lg:p-10 rounded-lg border-2 border-gray-200 relative flex flex-col justify-around">
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
                <div className="w-[280px] h-auto sm:w-[350px] sm:w-[250px] md:w-[400px] md:w-[350px] bg-white p-2 sm:p-8 lg:p-10 rounded-lg border-2 border-gray-200 relative flex flex-col justify-around">
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
      </div >

      {/*Aligned with Global & National Priorities*/}
      < div className="relative bg-gray-100 overflow-hidden" >
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
            <span className="text-[#18A093]">Our Work Aligns with</span>{' '}
            <span className="text-[#003366]">National Priorities</span>
          </h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
            <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-120 cursor-pointer">
              <Image src="/icons/hm-nm-img1.png" alt="CSR & Impact Funds" width={200} height={200} className='w-16 sm:w-18 md:w-28 h-auto object-contain' />
            </div>
            <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-120 cursor-pointer">
              <Image src="/icons/hm-nm-img2.png" alt="CSR & Impact Funds" width={200} height={200} className='w-16 sm:w-18 md:w-28 h-auto object-contain' />
            </div>
            <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-120 cursor-pointer">
              <Image src="/icons/hm-nm-img3.png" alt="CSR & Impact Funds" width={200} height={200} className='w-16 sm:w-30 md:w-40 h-auto object-contain' />
            </div>
            <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-120 cursor-pointer">
              <Image src="/icons/hm-nm-img4.png" alt="CSR & Impact Funds" width={200} height={200} className='w-16 sm:w-18 md:w-28 h-auto object-contain' />
            </div>
          </div>
        </div>
      </div >

      < div className="relative bg-white overflow-hidden" >
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
            <span className="text-[#18A093]">Our Work Aligns with</span>{' '}
            <span className="text-[#003366]">Global Goals</span>
          </h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
            <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-120 cursor-pointer">
              <Image src="/icons/hm-un-img1.png" alt="CSR & Impact Funds" width={200} height={200} className='w-16 sm:w-18 md:w-28 h-auto object-contain' />
            </div>
            <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-120 cursor-pointer">
              <Image src="/icons/hm-un-img2.png" alt="CSR & Impact Funds" width={200} height={200} className='w-16 sm:w-18 md:w-28 h-auto object-contain' />
            </div>
            <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-120 cursor-pointer">
              <Image src="/icons/hm-un-img3.png" alt="CSR & Impact Funds" width={200} height={200} className='w-16 sm:w-18 md:w-28 h-auto object-contain' />
            </div>
            <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-120 cursor-pointer">
              <Image src="/icons/hm-un-img4.png" alt="CSR & Impact Funds" width={200} height={200} className='w-16 sm:w-18 md:w-28 h-auto object-contain' />
            </div>
          </div>
        </div>
      </div >

      {/* We Work With Section */}
      < div className="relative bg-gray-100 overflow-hidden" >
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
            <span className="text-[#18A093]">We</span>{' '}
            <span className="text-[#003366]">Work with</span>
          </h2>
          <div className="w-full grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
            <div className="bg-gray-100 p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center ">
                <Image src="/icons/hm-10-img11.png" alt="CSR & Impact Funds" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%]">CSR & Impact Funds</h3>
            </div>
            <div className="bg-gray-100 p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center">
                <Image src="/icons/hm-10-img12.png" alt="Doctors & Healthcare Professionals" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%]">Healthcare Professionals</h3>
            </div>
            <div className="bg-gray-100 p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center h-[50%]">
                <Image src="/icons/hm-10-img13.png" alt="Hospitals & Clinics" width={70} height={60} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-18 h-auto object-contain' />
              </div>
              <h3 className="text-xs font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%]">Hospitals & Clinics</h3>
            </div>
            <div className="bg-gray-100 p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center h-[50%]">
                <Image src="/icons/hm-10-img14.png" alt="IT Park & Corporate" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%] ">IT Park & Corporate</h3>
            </div>
            <div className="bg-gray-100 p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center h-[50%]">
                <Image src="/icons/hm-10-img15.png" alt="Policy Makers & Local Bodies" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%] ">Policy Makers</h3>
            </div>
            <div className="bg-gray-100 p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center h-[50%]">
                <Image src="/icons/hm-10-img16.png" alt="Residential Complex & Gated Communities" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%] ">Residential Complex</h3>
            </div>
            <div className="bg-gray-100 p-3 xs:p-4 sm:p-5 lg:p-6 flex flex-col items-center justify-center h-[180px] xs:h-[200px] sm:h-[220px] md:h-[250px] space-y-2 xs:space-y-3 sm:space-y-4">
              <div className="flex-1 flex items-center justify-center h-[50%]">
                <Image src="/icons/hm-10-img17.png" alt="Rural Health Centers & Panchayats" width={70} height={70} className='w-10 xs:w-12 sm:w-14 md:w-16 lg:w-20 h-auto object-contain' />
              </div>
              <h3 className="text-xs font-['Montserrat'] xs:text-sm sm:text-base lg:text-lg text-gray-800 text-center h-[40%] ">Rural Health Centers</h3>
            </div>
          </div>
        </div>
      </div >

      {/* Our Certificated */}
      < div className="relative bg-white overflow-hidden" >
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <div className="w-full grid grid-cols-2 md:grid-cols-4  gap-6">
            <div className="flex-1 flex flex-col items-center justify-between">
              <Image src="/icons/hm-cert-3.png" alt="CSR & Impact Funds" width={200} height={200} className='w-20 md:w-30 mb-4' />
              <h3 className="text-xs font-['Montserrat'] xs:text-sm sm:text-base md:text-xl text-gray-800 text-center ">13485 : 2016</h3>
            </div>
            <div className="flex-1 flex flex-col items-center justify-between">
              <Image src="/icons/hm-cert-1.png" alt="CSR & Impact Funds" width={200} height={200} className='w-20 md:w-30 mb-4' />
              <h3 className="text-xs font-['Montserrat'] xs:text-sm sm:text-base md:text-xl text-gray-800 text-center ">27001 : 2013</h3>
            </div>
            <div className="flex-1 flex flex-col items-center justify-between">
              <Image src="/icons/hm-cert-2.png" alt="CSR & Impact Funds" width={200} height={200} className='w-20 md:w-30 mb-4' />
              <h3 className="text-xs font-['Montserrat'] xs:text-sm sm:text-base md:text-xl text-gray-800 text-center ">14001 : 2015</h3>
            </div>
            <div className="flex-1 flex flex-col items-center justify-between">
              <Image src="/icons/hm-cert-4.png" alt="CSR & Impact Funds" width={200} height={200} className='w-20 md:w-30 mb-4' />
              <h3 className="text-xs font-['Montserrat'] xs:text-sm sm:text-base md:text-xl text-gray-800 text-center ">9001 : 2015</h3>
            </div>
          </div>
        </div>
      </div >

      {/* Explore Partnership Section */}
      < Partner />




      {/* FAQ Section */}
      < div className="relative bg-white overflow-hidden" >
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
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
                <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq1' ? 'text-white' : 'text-[#333333]'} `}>What is Bridge Healthcare and what makes it different from other healthcare providers?</span>
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
                <p className="text-sm sm:text-[14px] lg:text-[16px] font-['Montserrat'] text-white leading-relaxed">Bridge Healthcare is a purpose-led health-tech initiative focused on transforming how care reaches underserved communities. We go beyond traditional healthcare delivery by placing Smart Healthcare Machines in rural villages and local hubs, enabling real-time diagnostics, specialist tele-consultations and connected health records — right at the doorstep. Our model blends technology, community trust and accessibility, making healthcare proactive, not reactive.</p>
              </div>
            </div>

            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq2' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq2' ? null : 'faq2')}
                className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq2' ? 'text-white' : 'text-[#333333]'} `}>Who can benefit from Bridge Healthcare’s services?
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
                <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat'] leading-relaxed"> Our solutions are built for those often left out of mainstream healthcare—rural families, women, children, the elderly and chronic disease patients. At the same time, our model has proven effective in urban residential communities and IT parks, offering preventive care within walking distance, without disrupting daily routines.</p>
              </div>
            </div>

            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq3' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
                className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4   transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq3' ? 'text-white' : 'text-[#333333]'} `}> How does Bridge Healthcare improve healthcare accessibility and quality?</span>
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
                <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat']">We bring healthcare to where people live. By deploying digitally equipped health points and training local nurses, we eliminate the need to travel for routine care. All diagnostic data is securely shared with doctors in real time, enabling timely decisions, early detection, and follow-ups — creating a loop of care that’s continuous, high-quality and community-rooted.</p>
              </div>
            </div>

            {showFaq === true && (<> <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq4' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq4' ? null : 'faq4')}
                className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4   transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq4' ? 'text-white' : 'text-[#333333]'} `}>Where is Bridge Healthcare currently operating? Are your services available in my area?</span>
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
                <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat']">We are currently active in Varanasi, Uttar Pradesh and Murshidabad, West Bengal, with successful pilot deployments in both rural and urban settings of Chennai, Tamil Nadu and Bengaluru, Karnataka. We&apos;re expanding and if you&apos;re a local leader, institution, or funder looking to bring quality care to your community, we’d love to explore collaboration.</p>
              </div>
            </div>

              <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq5' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
                <button
                  onClick={() => setActiveFaq(activeFaq === 'faq5' ? null : 'faq5')}
                  className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4   transition-colors duration-200"
                >
                  <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq5' ? 'text-white' : 'text-[#333333]'} `}> How can I get involved with Bridge Healthcare — as a partner, funder or volunteer?</span>
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
                  <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat']">We welcome changemakers from all walks of life. Whether you&apos;re a CSR funder, hospital, NGO, tech partner, or a passionate volunteer, there’s a role for you. You can support deployments, fund wellness drives, offer expertise or help us build local capacity. Together, we can make quality healthcare not just a service — but a right.</p>
                </div>
              </div></>)}
            <div className="mt-12">
              <button onClick={() => setShowFaq(!showFaq)}
                className="inline-block px-8 py-3 border-1 border-[#003366] text-[#003366] rounded-xl font-semibold hover:bg-[#003366] hover:text-white transition-all duration-300"
              >
                {showFaq === true ? 'Hide' : 'Show All'}
              </button>
            </div>
          </div>
        </div>
      </div >

    </>
  );
};

export default LandingPage;