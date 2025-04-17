'use client';
import Partner from '@/app/components/Partner';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

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

export default function Animacare() {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const statsRef = useRef<HTMLDivElement>(null);
  const missionStatsRef = useRef<HTMLDivElement>(null);

  const specialistReferrals = useCountAnimation(10);
  const diseaseDetection = useCountAnimation(20);
  const patientsTreated = useCountAnimation(400);
  const patientsSatisfied = useCountAnimation(90);

  // Mission 2025 statistics
  const healthCentres = useCountAnimation(45);
  const mobileUnits = useCountAnimation(45);
  const millionPeople = useCountAnimation(10);

  useEffect(() => {
    if (!statsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          specialistReferrals.setIsInView(true);
          diseaseDetection.setIsInView(true);
          patientsTreated.setIsInView(true);
          patientsSatisfied.setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [specialistReferrals, diseaseDetection, patientsTreated, patientsSatisfied]);

  // Observer for Mission 2025 statistics
  useEffect(() => {
    if (!missionStatsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          healthCentres.setIsInView(true);
          mobileUnits.setIsInView(true);
          millionPeople.setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(missionStatsRef.current);
    return () => observer.disconnect();
  }, [healthCentres, mobileUnits, millionPeople]);

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

  return (<>
    <div className="relative overflow-hidden">
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
            <span className="text-[#17A7AB]">Impactful & Bold Innovative</span>{' '}
            <span className="text-[#003366]">Animacare Initiative</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Revolutionizing Rural Healthcare with Tele-Diagnostic Solutions
          </p>
        </div>
      </div>

      {/* India Map Illustration */}
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 w-full lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src="/icons/dc-1-img.png"
          alt="India Map"
          width={600}
          height={600}
          className="opacity-80 w-full h-auto max-h-[616px] object-contain mx-auto"
        />
      </div>

    </div>
    {/* West Bengal Healthcare Initiative Section */}
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="space-y-8">
          {/* Chapter Title */}
          <div>
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] font-['Montserrat'] leading-tight sm:leading-tight md:leading-tight lg:leading-[100%] tracking-[0px] align-middle text-[#003366]">
              <span className="text-[#18A093]">Chapter 1-</span>{' '}
              <span className="text-[#003366]">West Bengal (Murshidhabad)</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-[400] font-['Font family'] leading-[150%] sm:leading-[130%] md:leading-[100%] tracking-[0%] align-middle text-[#555555]">Revolutionizing Rural Healthcare with Tele-Diagnostic Solutions</p>
          </div>

          {/* District Info */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] font-['Montserrat'] leading-tight sm:leading-tight md:leading-tight lg:leading-[100%] tracking-[0px] align-middle text-[#003366]">
                <span className="text-[#003366]">Transforming Healthcare Access in</span>{' '}
                <span className="text-[#18A093]">Murshidabad, WB</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">Why Murshidabad?
              </p>

              {/* Statistics */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                    <Image src="/icons/dc-3-lgo1.png" alt="Population" width={56} height={56} className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-[700] text-[#565656] font-['Montserrat'] tracking-[0%] mb-2">1,333</h4>
                    <p className="text-sm sm:text-base text-gray-500">People/km2</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                    <Image src="/icons/anim-2-lgo-2.png" alt="Health" width={56} height={56} className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-[700] text-[#565656] font-['Montserrat'] tracking-[0%] mb-2">High Prevalence</h4>
                    <p className="text-sm sm:text-base text-gray-500">Preventable Disease</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                    <Image src="/icons/anim-2-lgo3.png" alt="Villages" width={56} height={56} className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-[700] text-[#565656] font-['Montserrat'] tracking-[0%] mb-2">1886 villages</h4>
                    <p className="text-sm sm:text-base text-gray-500">Inadequate Healthcare Access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
              <Image
                src="/icons/anim-2-img.png"
                alt="Murshidabad District Map"
                width={200} height={200}
                className="sm:h-[95%] md:h-[80%] lg:h-[80%] w-auto"
              />
            </div>
          </div>

          {/* Impact Images */}
          <div className="mt-12">
            <h3 className="text-xl sm:text-2xl font-[700] text-[#1A1A1A] mb-6">Impacts</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="relative h-40 sm:h-44 lg:h-48">
                <Image src="/icons/anim-2-img1.png" alt="Impact 1" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-40 sm:h-44 lg:h-48">
                <Image src="/icons/anim-2-img1.png" alt="Impact 2" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-40 sm:h-44 lg:h-48">
                <Image src="/icons/anim-2-img2.png" alt="Impact 3" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-40 sm:h-44 lg:h-48">
                <Image src="/icons/anim-2-img3.png" alt="Impact 4" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div ref={statsRef} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-20">
            <div className="text-center p-4 sm:p-6 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group">
              <div className="flex justify-center mb-4">
                <Image src="/icons/anim-2-lgo4.png" alt="Specialists" width={48} height={48} className="group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-[#1A1A1A] mb-2 group-hover:text-white transition-colors duration-300">{specialistReferrals.count}+</h4>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white transition-colors duration-300">Specialist Referrals</p>
            </div>

            <div className="text-center p-4 sm:p-6 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group">
              <div className="flex justify-center mb-4">
                <Image src="/icons/anim-2-lgo5.png" alt="Disease" width={48} height={48} className="group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-[#1A1A1A] mb-2 group-hover:text-white transition-colors duration-300">{diseaseDetection.count}%</h4>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white transition-colors duration-300">Early Disease Detected</p>
            </div>

            <div className="text-center p-4 sm:p-6 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group">
              <div className="flex justify-center mb-4">
                <Image src="/icons/anim-2-lgo6.png" alt="Patients" width={48} height={48} className="group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-[#1A1A1A] mb-2 group-hover:text-white transition-colors duration-300">{patientsTreated.count}+</h4>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white transition-colors duration-300">Patients Treated</p>
            </div>

            <div className="text-center p-4 sm:p-6 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group">
              <div className="flex justify-center mb-4">
                <Image src="/icons/anim-2-lgo7.png" alt="Satisfaction" width={48} height={48} className="group-hover:brightness-0 group-hover:invert transition-all duration-300" />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-[#1A1A1A] mb-2 group-hover:text-white transition-colors duration-300">{patientsSatisfied.count}%</h4>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-white transition-colors duration-300">Patients Satisfied</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Original Animacare Initiative Section */}
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-[#17A7AB]">Animacare</span>{' '}
              <span className="text-[#003366]">Initiative</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Revolutionizing Rural Healthcare with Tele-Diagnostic Solutions
            </p>
            <p className="text-gray-600">
              To effectively cater to the healthcare needs of rural regions, we will develop a Mobile Tele-Clinic Unit that complements the Tele-Diagnostic and Tele-Consultation Centers in sub-divisions of districts. This solution ensures that even the most geographically isolated communities have access to primary and preventive healthcare.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/icons/anim-3-img.png"
              alt="Tele-Consultation"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>

    {/* Animacare Initiative Section */}
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-[#17A7AB] to-[#003366] text-white">
          <div className="mx-auto px-2 sm:px-2 md:px-4 lg:px-10 py-5 md:py-10">
            <div className="flex flex-col items-start gap-8">
              {/* Icon and Title */}
              <div className="flex items-center gap-4">
                <Image
                  src="/icons/anim-5-lgo.png"
                  alt="Target Icon"
                  width={48}
                  height={48}
                  className="w-12 h-12 sm:w-14 sm:h-14"
                />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#F7F7F7]">Animacare Initiative Mission - 2025</h2>
              </div>

              {/* Mission Description */}
              <p className="text-base sm:text-lg md:text-xl max-w-3xl opacity-90 leading-relaxed font-['Montserrat'] font-[400] leading-[100%] tracking-[0%] align-middle text-[#F7F7F7]">
                Our mission is not just about numbers — it&apos;s about touching lives, building trust, and transforming
                healthcare access for communities that had long been forgotten. We&apos;re not stopping here — this is just
                the beginning.
              </p>

              {/* Statistics Cards */}
              <div ref={missionStatsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-4">
                {/* Smart Health Centres */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-white border-1 border-gray-100">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{healthCentres.count}</h3>
                  <p className="text-sm sm:text-base opacity-90">Smart Health Centres</p>
                </div>

                {/* Smart Mobile Units */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-white border-1 border-gray-100">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{mobileUnits.count}</h3>
                  <p className="text-sm sm:text-base opacity-90">Smart Mobile Units</p>
                </div>

                {/* Million People */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-white border-1 border-gray-100">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{millionPeople.count} M</h3>
                  <p className="text-sm sm:text-base opacity-90">Million People</p>
                </div>
              </div>

              {/* Get Involved Button */}
              <button className="mt-8 px-8 py-3 bg-white text-[#003366] rounded-md font-semibold text-lg hover:bg-opacity-90 transition-colors">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Health Network Flow Section */}
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="mb-8">
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">Network Workflow of</span>{' '}
            <span className="text-[#003366]">Animacare Initiative</span>
          </h2>
          <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            A scalable network of Tele-Diagnostic & Tele-Consultation Centers (TDTCs) and Mobile Tele-Clinics (MTCUs).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - TDTC Information */}
          <div className="space-y-6">
            {/* First TDTC Box */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:translate-y-[-4px]">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/icons/hm-6-lgo.png"
                  alt="TDTC Icon"
                  width={40}
                  height={40}
                  className="flex-shrink-0"
                />
                <h3 className="text-xl font-semibold text-[#003366]">Tele-Diagnostic & Tele-Consultation Centre</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#17A7AB] rounded-full"></span>
                  <span>Tele-Diagnostic Machine</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#17A7AB] rounded-full"></span>
                  <span>2 Nurses, 1 Supervisor</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#17A7AB] rounded-full"></span>
                  <span>Clinic Inventory</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#17A7AB] rounded-full"></span>
                  <span>1 Technician</span>
                </li>
              </ul>
            </div>

            {/* Second TDTC Box */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:transform hover:translate-y-[-4px]">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/icons/hm-6-lgo.png"
                  alt="TDTC Icon"
                  width={40}
                  height={40}
                  className="flex-shrink-0"
                />
                <h3 className="text-xl font-semibold text-[#003366]">Tele-Diagnostic & Tele-Consultation Centre</h3>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#17A7AB] rounded-full"></span>
                  <span>Tele-Diagnostic Machine</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#17A7AB] rounded-full"></span>
                  <span>2 Nurses, 1 Supervisor</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#17A7AB] rounded-full"></span>
                  <span>Clinic Inventory</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#17A7AB] rounded-full"></span>
                  <span>1 Technician</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Network Flow Diagram */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/icons/anim-5-img.png"
              alt="TDTC Center"
              width={400}
              height={400}
              className="w-[80%] h-[80%]"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Social Impacts & Sustainability Section */}
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
          <span className="text-[#18A093]">Social Impacts</span>{' '}
          <span className="text-[#003366]">& Sustainability</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col items-center justify-between h-full">
            <div
              onClick={(e) => handleToggle(e, 'card1')}
              className={`w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] 
                  hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] 
                  hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] 
                  touch-hover:bg-gradient-to-r touch-hover:from-[rgba(24,160,147,0.7)] 
                  touch-hover:via-[rgba(18,131,135,0.7)] touch-hover:via-[rgba(11,100,122,0.7)] 
                  touch-hover:via-[rgba(6,80,114,0.7)] touch-hover:to-[rgba(0,51,102,0.7)]`}
            >

              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="group-hover:hidden touch-hover:hidden transition-opacity duration-300 mr-2" />
              <div className='w-[90%] group-hover:w-full'>
                <h3 className="text-lg font-semibold text-[#003366] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                  Affordable Healthcare at the Doorstep
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                  Delivering advanced tele-diagnostics and smart healthcare through cutting-edge technology.
                </p>
              </div>
            </div>

            <div
              onClick={(e) => handleToggle(e, 'card2')}
              className={`w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] 
                  hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] 
                  hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] 
                  touch-hover:bg-gradient-to-r touch-hover:from-[rgba(24,160,147,0.7)] 
                  touch-hover:via-[rgba(18,131,135,0.7)] touch-hover:via-[rgba(11,100,122,0.7)] 
                  touch-hover:via-[rgba(6,80,114,0.7)] touch-hover:to-[rgba(0,51,102,0.7)]`}
            >

              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="group-hover:hidden touch-hover:hidden transition-opacity duration-300 mr-2" />
              <div className='w-[90%] group-hover:w-full'>
                <h3 className="text-lg font-semibold text-[#003366] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                  Expanding Healthcare Access in Underserved Areas
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                  Ensures timely access to diagnostics and specialist consultations in rural and remote communities.
                </p>
              </div>
            </div>

            <div
              onClick={(e) => handleToggle(e, 'card3')}
              className={`w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] 
                  hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] 
                  hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] 
                  touch-hover:bg-gradient-to-r touch-hover:from-[rgba(24,160,147,0.7)] 
                  touch-hover:via-[rgba(18,131,135,0.7)] touch-hover:via-[rgba(11,100,122,0.7)] 
                  touch-hover:via-[rgba(6,80,114,0.7)] touch-hover:to-[rgba(0,51,102,0.7)]`}
            >

              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="group-hover:hidden touch-hover:hidden transition-opacity duration-300 mr-2" />
              <div className='w-[90%] group-hover:w-full'>
                <h3 className="text-lg font-semibold text-[#003366] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                  Reducing Healthcare Carbon Footprint
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                  Reduces unnecessary travel, hospital visits, and resource usage — supporting a more sustainable healthcare model.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex items-center justify-center h-full">
            <Image
              src="/icons/anim-4-img.png"
              alt="Social Impact"
              width={400}
              height={400}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center justify-between h-full">
            <div
              onClick={(e) => handleToggle(e, 'card4')}
              className={`w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] 
                  hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] 
                  hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] 
                  touch-hover:bg-gradient-to-r touch-hover:from-[rgba(24,160,147,0.7)] 
                  touch-hover:via-[rgba(18,131,135,0.7)] touch-hover:via-[rgba(11,100,122,0.7)] 
                  touch-hover:via-[rgba(6,80,114,0.7)] touch-hover:to-[rgba(0,51,102,0.7)]`}
            >

              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="group-hover:hidden touch-hover:hidden transition-opacity duration-300 mr-2" />
              <div className='w-[90%] group-hover:w-full'>
                <h3 className="text-lg font-semibold text-[#003366] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                  Empowering Local Workforce
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                  Creating job opportunities and strengthening the grassroots health ecosystem.
                </p>
              </div>
            </div>

            <div
              onClick={(e) => handleToggle(e, 'card5')}
              className={`w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] 
                  hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] 
                  hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] 
                  touch-hover:bg-gradient-to-r touch-hover:from-[rgba(24,160,147,0.7)] 
                  touch-hover:via-[rgba(18,131,135,0.7)] touch-hover:via-[rgba(11,100,122,0.7)] 
                  touch-hover:via-[rgba(6,80,114,0.7)] touch-hover:to-[rgba(0,51,102,0.7)]`}
            >

              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="group-hover:hidden touch-hover:hidden transition-opacity duration-300 mr-2" />
              <div className='w-[90%] group-hover:w-full'>
                <h3 className="text-lg font-semibold text-[#003366] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                  Supporting CSR and NGO Initiatives
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                  Health missions to deploy healthcare solutions that create lasting impact across underserved geographies.
                </p>
              </div>
            </div>

            <div
              onClick={(e) => handleToggle(e, 'card6')}
              className={`w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] 
                  hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] 
                  hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] 
                  touch-hover:bg-gradient-to-r touch-hover:from-[rgba(24,160,147,0.7)] 
                  touch-hover:via-[rgba(18,131,135,0.7)] touch-hover:via-[rgba(11,100,122,0.7)] 
                  touch-hover:via-[rgba(6,80,114,0.7)] touch-hover:to-[rgba(0,51,102,0.7)]`}
            >

              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="group-hover:hidden touch-hover:hidden transition-opacity duration-300 mr-2" />
              <div className='w-[90%] group-hover:w-full'>
                <h3 className="text-lg font-semibold text-[#003366] leading-[1.2] sm:leading-[20px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                  Digital Health Literacy & Awareness
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                  Empowered with digital health knowledge to understand and manage their wellness better.
                </p>
              </div>
            </div>
          </div>
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
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq1' ? 'text-white' : 'text-[#333333]'} `}>What is the Animacare Initiative and how does the model work?</span>
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
              <p className="text-sm sm:text-base lg:text-lg font-['Montserrat'] text-white">The Animacare Initiative is Bridge Healthcare’s flagship rural health model—designed to create an integrated, tech-enabled care network across villages. The model is built around strategically placed Tele-Diagnostic and Tele-Consultation Centers (TDTCs) and mobile Medical Tele-Consultation Units (MTCUs). Together, they provide accessible, affordable, and continuous care by combining on-ground diagnostics, trained nurse assistance, and specialist tele-consultation, ensuring no one is left behind due to distance or lack of infrastructure.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq2' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq2' ? null : 'faq2')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq2' ? 'text-white' : 'text-[#333333]'} `}>What services are provided by TDTCs and MTCUs?
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
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq2' ? 'max-h-[1000px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">
                TDTCs act as fixed community care hubs equipped with the Smart Healthcare Machine and a dedicated operator/nurse. They offer routine checkups, diagnostic tests, real-time doctor consultations, health record digitization, and printed prescriptions.
                MTCUs are mobile units that take these services to remote hamlets—reaching those who can&apos;t travel to health centers. They serve as a bridge between hard-to-reach populations and the core care ecosystem.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq3' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq3' ? 'text-white' : 'text-[#333333]'} `}>How does the referral and follow-up system work?</span>
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
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">Once a consultation is complete, doctors can digitally prescribe follow-up visits, diagnostics, or hospital referrals. Each patient&apos;s data is securely stored and linked to their profile, ensuring smooth coordination for repeat visits or escalations to higher medical facilities. The nurse at the TDTC tracks follow-up timelines, reaching out to patients proactively and ensuring care continuity with dignity.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq4' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq4' ? null : 'faq4')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq4' ? 'text-white' : 'text-[#333333]'} `}>What early results or outcomes have you achieved so far?</span>
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
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">Our deployments in rural districts like Murshidabad (West Bengal) and Varanasi (Uttar Pradesh) have already led to:
                <br />1: Hundreds of patients receiving quality consultations without leaving their village
                <br />2: High detection rates of early-stage chronic conditions
                <br />3: Increased health-seeking behavior, especially among women and the elderly
              </p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq5' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq5' ? null : 'faq5')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq5' ? 'text-white' : 'text-[#333333]'} `}> How scalable is the Animacare Initiative for other rural regions?</span>
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
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">The model is highly scalable and adaptable. It requires minimal infrastructure, runs with trained local staff and leverages existing hospital partnerships. Whether it’s hilly terrain, tribal belts, or flood-prone villages—the model can be replicated with low operational cost and high community trust. We’re actively inviting CSR funders, NGOs and Government bodies to partner with us in bringing this impact to many more districts across India.</p>
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