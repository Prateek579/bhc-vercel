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
  const [showFaq, setShowFaq] = useState(false);

  const statsRef = useRef<HTMLDivElement>(null);
  const missionStatsRef = useRef<HTMLDivElement>(null);

  const specialistReferrals = useCountAnimation(100);
  const diseaseDetection = useCountAnimation(20);
  const patientsTreated = useCountAnimation(2000);
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
    <div className="relative overflow-hidden min-h-[60vh]">
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-[700] font-['Montserrat'] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-4 sm:mb-6">
            <span className="text-[#17A7AB]">Mobile Clinics & Fast Diagnosis</span>{' '}
            <span className="text-[#003366]">Reaching Rural India Daily.</span>
          </h1>
          {/* <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Revolutionizing Rural Healthcare with Tele-Diagnostic Solutions
          </p> */}
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
            <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[22px] font-['Montserrat'] font-medium mb-8 sm:mb-12">Revolutionizing Rural Healthcare with Tele-Diagnostic Solutions</p>
          </div>

          {/* District Info */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">
              <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4">
                <span className="text-[#18A093]">Why</span>{' '}
                <span className="text-[#003366]">Murshidabad?</span>
              </h2>

              {/* TDTCs */}
              <div className="flex flex-row items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                  <Image
                    src="/icons/anim-2-img1.5.png"
                    alt="TDTC Icon"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2">1,333 People/km²</h3>
                  <p className="text-sm sm:text-base font-['Montserrat'] md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">Dense rural population puts continuous pressure on local healthcare systems.</p>
                </div>
              </div>

              {/* MTCUs */}
              <div className="flex flex-row items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                  <Image
                    src="/icons/anim-2-img1.6.png"
                    alt="MTCU Icon"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2">High Prevalence of Preventable Disease
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg font-['Montserrat'] text-gray-600 group-hover:text-white transition-colors duration-300">Lack of early care and awareness leads to high rates of avoidable illnesses.</p>
                </div>
              </div>

              {/* Specialists Network */}
              <div className="flex flex-row items-center gap-3 sm:gap-4 lg:gap-6">
                <div className="w-10 h-10  sm:w-16 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                  <Image
                    src="/icons/anim-2-img1.7.png"
                    alt="Specialist Icon"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2">1886 Villages
                  </h3>
                  <p className="text-sm sm:text-base font-['Montserrat'] md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">Vast number of villages remain underserved by essential healthcare services.</p>
                </div>
              </div>
            </div>
            {/* Map Image */}
            <div className="relative h-[200px] sm:h-[300px] md:h-[400px] flex items-center justify-center">
              <Image
                src="/icons/anim-2-img1.1.png"
                alt="Murshidabad District Map"
                width={800} height={800}
                className="h-full w-auto"
              />
            </div>
          </div>

          {/* Impact Images */}
          <div className="mt-12">
            <h3 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] font-['Montserrat'] leading-tight sm:leading-tight md:leading-tight lg:leading-[100%] tracking-[0px] align-middle text-[#003366] text-center mb-4 sm:mb-8">Our Footprint in Murshidabad</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="relative h-40 sm:h-44 lg:h-48">
                <Image src="/icons/anim-2-img2.1.png" alt="Impact 1" width={500} height={500} className="w-full h-full rounded-lg" />
              </div>
              <div className="relative h-40 sm:h-44 lg:h-48">
                <Image src="/icons/anim-2-img22.jpg" alt="Impact 2" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-40 sm:h-44 lg:h-48">
                <Image src="/icons/anim-2-img23.jpg" alt="Impact 3" fill className="object-cover rounded-lg" />
              </div>
              <div className="relative h-40 sm:h-44 lg:h-48">
                <Image src="/icons/anim-2-img24.jpg" alt="Impact 4" fill className="object-cover rounded-lg" />
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div ref={statsRef} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-20">
            <div className="text-center p-4 sm:p-6 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-[#0E7280] group">
              <div className="flex justify-center mb-4 h-[60px]">
                <Image src="/icons/anim-2-lgo4.png" alt="Specialists" width={48} height={48} className="group-hover:brightness-0 group-hover:invert transition-all duration-300 w-auto h-full" />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-gray-700  mb-2 group-hover:text-white transition-colors duration-300">{specialistReferrals.count}+</h4>
              <p className="text-[18px] sm:text-[15px] md:text-[20px] text-gray-700  font-['Montserrat']  group-hover:text-white transition-colors duration-300">Specialist Referrals</p>
            </div>

            <div className="text-center p-4 sm:p-6 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-[#0E7280] group">
              <div className="flex justify-center mb-4 h-[60px]">
                <Image src="/icons/anim-2-lgo5.png" alt="Disease" width={48} height={48} className="group-hover:brightness-0 group-hover:invert transition-all duration-300 w-auto h-full" />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-[#1A1A1A] mb-2 group-hover:text-white transition-colors duration-300">{diseaseDetection.count}%</h4>
              <p className="text-[18px] sm:text-[15px] md:text-[20px] text-gray-700  font-['Montserrat']  group-hover:text-white transition-colors duration-300">Early Disease Detected</p>
            </div>

            <div className="text-center p-4 sm:p-6 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-[#0E7280] group">
              <div className="flex justify-center mb-4 h-[60px]">
                <Image src="/icons/anim-2-lgo6.png" alt="Patients" width={48} height={48} className="group-hover:brightness-0 group-hover:invert transition-all duration-300 w-auto h-full" />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-[#1A1A1A] mb-2 group-hover:text-white transition-colors duration-300">{patientsTreated.count}+</h4>
              <p className="text-[18px] sm:text-[15px] md:text-[20px] text-gray-700  font-['Montserrat']  group-hover:text-white transition-colors duration-300">Patients Treated</p>
            </div>

            <div className="text-center p-4 sm:p-6 border-2 border-gray-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:bg-[#0E7280] group">
              <div className="flex justify-center mb-4 h-[60px]">
                <Image src="/icons/anim-2-lgo7.png" alt="Satisfaction" width={48} height={48} className="group-hover:brightness-0 group-hover:invert transition-all duration-300 w-auto h-full" />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-[#1A1A1A] mb-2 group-hover:text-white transition-colors duration-300">{patientsSatisfied.count}%</h4>
              <p className="text-[18px] sm:text-[15px] md:text-[20px] text-gray-700  font-['Montserrat']  group-hover:text-white transition-colors duration-300">Patients Satisfied</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Original Animacare Initiative Section */}

    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15 bg-gray-100">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
          <span className="text-[#17A7AB]">Animacare</span>{' '}
          <span className="text-[#003366]">Initiative</span>
        </h2>
        <p className="text-[#555555] text-[18px] text-center sm:text-[22px] md:text-[22px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
          To effectively cater to the healthcare needs of rural regions, we will develop a Mobile Tele-Clinic Unit that complements the Tele-Diagnostic and Tele-Consultation Centers in sub-divisions of district. This solution ensures that even the most geographically isolated communities have access to primary and preventive healthcare.
        </p>
        <div className="flex flex-col md:flex-row items-center justity-between">
          <div className="space-y-6 md:w-[65%] md:border-r-2 md:border-[#003366]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-8">
              {/* TDTC Column */}
              <div className=" p-6">
                <div className="flex flex-col items-center gap-4 md:mb-4 border-b-2 border-[#003366] h-[45%]">
                  <div className="h-[65%] flex items-center justify-center">
                    <Image
                      src="/icons/anim-6-lgo1.png"
                      alt="TDTC Building"
                      width={48}
                      height={48}
                      className="w-20 h-18"
                    />
                  </div>
                  <div className='md:h-[35%]'>
                    <h3 className="text-xl font-['Montserrat'] text-center text-[#333333]">Tele-Diagnostic & Tele-Consultation Centre</h3>
                  </div>
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <h4 className="text-lg font-medium font-['Montserrat'] mb-3 text-[#333333]">TDTC Elements:</h4>
                  <ul className="space-y-2 font-['Montserrat'] text-sm sm:text-base md:text-lg text-gray-600 flex flex-col items-center">
                    <li>Smart Healthcare Machine</li>
                    <li>2 Nurses, 1 Supervisor</li>
                    <li>Clinic Inventory</li>
                    <li>1 Technician</li>
                  </ul>
                </div>
              </div>

              {/* MTCU Column */}
              <div className=" p-6">
                <div className="flex flex-col items-center gap-4 md:mb-4 border-b-2 border-[#003366] h-[45%]">
                  <div className="h-[65%] flex items-center justify-center">
                    <Image
                      src="/icons/anim-6-lgo2.png"
                      alt="MTCU Vehicle"
                      width={100}
                      height={100}
                      className="w-auto h-14"
                    />
                  </div>
                  <div className='h-[35%]'>
                    <h3 className="text-xl font-['Montserrat'] text-[#333333]">Mobile Tele-Clinic Unit</h3>
                  </div>
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <h4 className="text-lg font-medium mb-3 font-['Montserrat'] text-[#333333]">MTCU Elements:</h4>
                  <ul className="space-y-2 font-['Montserrat'] text-sm sm:text-base md:text-lg text-gray-600 flex flex-col items-center">
                    <li>Smart Healthcare Machine</li>
                    <li>2 Nurses, 1 Driver</li>
                    <li>Clinic Inventory</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  flex items-center justify-center w-[100%] sm:w-[60%] md:w-[35%]">
            <Image
              src="/icons/anim-5-img.png"
              alt="Tele-Consultation"
              width={1000}
              height={1000}
              className="h-[95%] w-[95%] rounded-lg "
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
              <p className=" text-[18px] text-center sm:text-[22px] md:text-[22px] font-['Montserrat'] font-medium text-[#F7F7F7]">
                Our mission is not just about numbers — it&apos;s about touching lives, building trust, and transforming
                healthcare access for communities that has been unreached. We&apos;re not stopping here — this is just
                the beginning.
              </p>

              {/* Statistics Cards */}
              <div ref={missionStatsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-4">
                {/* Smart Health Centres */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-white border-1 border-gray-100 flex items-center">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{healthCentres.count} <span className="text-base sm:text-lg md:text-xl max-w-3xl opacity-90 leading-relaxed font-['Montserrat'] font-[400] leading-[100%] tracking-[0%] align-middle text-white">Smart Health Centres</span></h3>
                </div>

                {/* Smart Mobile Units */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-white border-1 border-gray-100 flex items-center">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{mobileUnits.count} <span className="text-base sm:text-lg md:text-xl max-w-3xl opacity-90 leading-relaxed font-['Montserrat'] font-[400] leading-[100%] tracking-[0%] align-middle text-[#F7F7F7]">Smart Mobile Units</span></h3>
                </div>

                {/* Million People */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-white border-1 border-gray-100 flex items-center">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{millionPeople.count} <span className="text-base sm:text-lg md:text-xl max-w-3xl opacity-90 leading-relaxed font-['Montserrat'] font-[400] leading-[100%] tracking-[0%] align-middle text-[#F7F7F7]">Million People</span></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Health Network Flow Section */}
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="mb-8">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
            <span className="text-[#18A093]">Network Workflow of</span>{' '}
            <span className="text-[#003366]">Animacare Initiative</span>
          </h2>
          <p className="text-[#555555] text-[18px] text-center sm:text-[22px] md:text-[22px] font-['Montserrat'] font-medium mb-4 sm:mb-8">
            A scalable network of Tele-Diagnostic & Tele-Consultation Centers (TDTCs) and Mobile Tele-Clinics (MTCUs).
          </p>
        </div>

        <div className="grid grid-cols-1 space-y-4 md:space-y-8">
          {/* Left Column - TDTC Information */}

          {/* First TDTC Box */}
          <div
            onClick={(e) => handleToggle(e, 'tdtc')}
            className={`w-full p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 card-hover group hover:bg-[#0E7280] ${activeCard === 'tdtc' ? 'touch-hover' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/icons/anim-6-lgo1.png"
                alt="TDTC Icon"
                width={40}
                height={40}
                className="flex-shrink-0 group-hover:hidden touch-hover:hidden w-14"
              />
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white touch-hover:text-white transition-colors duration-300">Tele-Diagnostic & Tele-Consultation Centre</h3>
            </div>
            <ul className="text-gray-600 font-['Montserrat'] group-hover:text-white touch-hover:text-white transition-colors duration-300">
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <span className="w-2 h-2 bg-[#17A7AB] group-hover:bg-white touch-hover:bg-white rounded-full mt-[0.5em]"></span>
                <span>Installed at district sub-divisions, serving as the main center for healthcare services.</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <span className="w-2 h-2 bg-[#17A7AB] group-hover:bg-white touch-hover:bg-white rounded-full mt-[0.5em]"></span>
                <span>Staffed with specialist doctors (via telemedicine), nurses and technicians.</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <span className="w-2 h-2 bg-[#17A7AB] group-hover:bg-white touch-hover:bg-white rounded-full mt-[0.5em]"></span>
                <span>Equipped with Smart Healthcare Machine, ECG facility, advanced diagnostic tools and EHR.</span>
              </li>
            </ul>
          </div>

          {/* Second TDTC Box */}
          <div
            onClick={(e) => handleToggle(e, 'mtcu')}
            className={`w-full p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 card-hover group hover:bg-[#0E7280] ${activeCard === 'mtcu' ? 'touch-hover' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/icons/anim-6-lgo2.png"
                alt="TDTC Icon"
                width={55}
                height={55}
                className="flex-shrink-0 group-hover:hidden touch-hover:hidden"
              />
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white touch-hover:text-white transition-colors duration-300">Mobile Tele-Clinic Unit</h3>
            </div>
            <ul className="font-['Montserrat'] text-gray-600 group-hover:text-white touch-hover:text-white transition-colors duration-300">
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <span className="w-2 h-2 bg-[#17A7AB] group-hover:bg-white touch-hover:bg-white rounded-full mt-[0.5em]"></span>
                <span>Each TDTC is supported by 1 MTCUs per 300 sq. km area.</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <span className="w-2 h-2 bg-[#17A7AB] group-hover:bg-white touch-hover:bg-white rounded-full mt-[0.5em]"></span>
                <span>MTCUs travel daily to remote villages, providing on-site health screenings, diagnostics and tele-consultations.</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <span className="w-2 h-2 bg-[#17A7AB] group-hover:bg-white touch-hover:bg-white rounded-full mt-[0.5em]"></span>
                <span>Each MTCU has 2 nurses and a driver, ensuring full medical assistance on the ground.</span>
              </li>
            </ul>
          </div>

          {/* Third Referral Box */}
          <div
            onClick={(e) => handleToggle(e, 'referral')}
            className={`w-full p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 card-hover group hover:bg-[#0E7280] ${activeCard === 'referral' ? 'touch-hover' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/icons/anim-5-lgo2.png"
                alt="TDTC Icon"
                width={35}
                height={35}
                className="flex-shrink-0 group-hover:hidden touch-hover:hidden w-11"
              />
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white touch-hover:text-white transition-colors duration-300">Seamless Referral & Follow-up System</h3>
            </div>
            <ul className="font-['Montserrat'] text-gray-600 group-hover:text-white touch-hover:text-white transition-colors duration-300">
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <span className="w-2 h-2 bg-[#17A7AB] group-hover:bg-white touch-hover:bg-white rounded-full mt-[0.5em]"></span>
                <span>Patients needing further treatment are referred to the nearest TDTC or partnered hospitals.</span>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base md:text-lg">
                <span className="w-2 h-2 bg-[#17A7AB] group-hover:bg-white touch-hover:bg-white rounded-full mt-[0.5em]"></span>
                <span>AI-powered patient records ensure continuous monitoring and follow-ups at both MTCUs and TDTCs.</span>
              </li>
            </ul>
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

    {/* Social Impacts & Sustainability Section */}
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
          <span className="text-[#18A093]">Social Impacts</span>{' '}
          <span className="text-[#003366]">& Sustainability</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Column */}

          <div
            className="w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 "
          >
            <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="mr-2" />
            <div className='w-[90%] '>
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  text-[#003366] font-['Montserrat'] ">
                Improved Access to Quality Healthcare in Underserved Areas
              </h3>
            </div>
          </div>


          <div
            className="w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 "
          >
            <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="mr-2" />
            <div className='w-[90%] '>
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  text-[#003366] font-['Montserrat'] ">
                Early Detection & Prevention of Chronic Diseases
              </h3>
            </div>
          </div>

          <div
            className="w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 "
          >
            <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="mr-2" />
            <div className='w-[90%] '>
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  text-[#003366] font-['Montserrat'] ">
                Healthcare Equity for Women, Elderly & Low-Income Groups
              </h3>
            </div>
          </div>

          <div
            className="w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 "
          >
            <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="mr-2" />
            <div className='w-[90%] '>
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  text-[#003366] font-['Montserrat'] ">
                Digitization of Health Records for Continuity of Care
              </h3>
            </div>
          </div>

          <div
            className="w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 "
          >
            <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="mr-2" />
            <div className='w-[90%] '>
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  text-[#003366] font-['Montserrat'] ">
                Community Employment & Skill Development
              </h3>
            </div>
          </div>

          <div
            className="w-full flex flex-row items-center justify-between bg-white p-4 sm:p-6 rounded-lg border border-gray-200 "
          >
            <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={40} height={40} className="mr-2" />
            <div className='w-[90%] '>
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize  text-[#003366] font-['Montserrat'] ">
                Data-Driven Public Health Planning
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
          <span className="text-[#18A093]">FA</span>
          <span className="text-[#003366]">Q<span className='text-[26px] sm:text-[30px]'>s</span> </span>
        </h2>
        {/* <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
          Learn how our solutions bring quality healthcare closer to those who need it most.
        </p> */}
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          {/* FAQ Items */}
          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq1' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq1' ? null : 'faq1')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq1' ? 'text-white' : 'text-[#333333]'} `}>What is the Animacare Initiative and how does the model work?</span>
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
              <p className="text-sm sm:text-[14px] lg:text-[16px] font-['Montserrat'] text-white leading-relaxed">The Animacare Initiative is Bridge Healthcare’s flagship rural health model—designed to create an integrated, tech-enabled care network across villages. The model is built around strategically placed Tele-Diagnostic and Tele-Consultation Centers (TDTCs) and mobile Medical Tele-Consultation Units (MTCUs). Together, they provide accessible, affordable, and continuous care by combining on-ground diagnostics, trained nurse assistance, and specialist tele-consultation, ensuring no one is left behind due to distance or lack of infrastructure.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq2' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq2' ? null : 'faq2')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq2' ? 'text-white' : 'text-[#333333]'} `}>What services are provided by TDTCs and MTCUs?
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
              <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat'] leading-relaxed">
                TDTCs act as fixed community care hubs equipped with the Smart Healthcare Machine and a dedicated operator/nurse. They offer routine checkups, diagnostic tests, real-time doctor consultations, health record digitization, and printed prescriptions.
                MTCUs are mobile units that take these services to remote hamlets—reaching those who can&apos;t travel to health centers. They serve as a bridge between hard-to-reach populations and the core care ecosystem.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq3' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq3' ? 'text-white' : 'text-[#333333]'} `}>How does the referral and follow-up system work?</span>
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
              <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat'] leading-relaxed">Once a consultation is complete, doctors can digitally prescribe follow-up visits, diagnostics, or hospital referrals. Each patient&apos;s data is securely stored and linked to their profile, ensuring smooth coordination for repeat visits or escalations to higher medical facilities. The nurse at the TDTC tracks follow-up timelines, reaching out to patients proactively and ensuring care continuity with dignity.</p>
            </div>
          </div>

          {showFaq === true && <> <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq4' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq4' ? null : 'faq4')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq4' ? 'text-white' : 'text-[#333333]'} `}>What early results or outcomes have you achieved so far?</span>
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
              <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat'] leading-relaxed">Our deployments in rural districts like Murshidabad (West Bengal) and Varanasi (Uttar Pradesh) have already led to:
                <br />1: Hundreds of patients receiving quality consultations without leaving their village
                <br />2: High detection rates of early-stage chronic conditions
                <br />3: Increased health-seeking behavior, especially among women and the elderly
              </p>
            </div>
          </div>

            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq5' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq5' ? null : 'faq5')}
                className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq5' ? 'text-white' : 'text-[#333333]'} `}> How scalable is the Animacare Initiative for other rural regions?</span>
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