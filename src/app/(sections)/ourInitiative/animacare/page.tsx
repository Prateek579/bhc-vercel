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
            <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">Revolutionizing Rural Healthcare with Tele-Diagnostic Solutions</p>
          </div>

          {/* District Info */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] font-['Montserrat'] leading-tight sm:leading-tight md:leading-tight lg:leading-[100%] tracking-[0px] align-middle text-[#003366]">
                <span className="text-[#003366]">Transforming Healthcare Access in</span>{' '}
                <span className="text-[#18A093]">Murshidabad, WB</span>
              </h2>
              <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">Why Murshidabad?
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
                src="/icons/anim-2-img1.1.png"
                alt="Murshidabad District Map"
                width={500} height={500}
                className="sm:h-[95%] md:h-[80%] lg:h-[80%] w-auto"
              />
            </div>
          </div>

          {/* Impact Images */}
          <div className="mt-12">
            <h3 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] font-['Montserrat'] leading-tight sm:leading-tight md:leading-tight lg:leading-[100%] tracking-[0px] align-middle text-[#003366]">Our Footprint in Murshidabad</h3>
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
        <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
          <span className="text-[#17A7AB]">Animacare</span>{' '}
          <span className="text-[#003366]">Initiative</span>
        </h2>
        <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium">
          To effectively cater to the healthcare needs of rural regions, we will develop a Mobile Tele-Clinic Unit that complements the Tele-Diagnostic and Tele-Consultation Centers in sub-divisions of district. This solution ensures that even the most geographically isolated communities have access to primary and preventive healthcare.
        </p>
        <div className="flex flex-col md:flex-row items-center justity-between">
          <div className="space-y-6 w-[65%]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* TDTC Column */}
              <div className="bg-white p-6 ">
                <div className="flex flex-col items-center gap-4 mb-4 border-b-2 border-[#003366]">
                  <div className="w-12 h-12">
                    <Image
                      src="/icons/anim-6-lgo2.png"
                      alt="TDTC Building"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-center text-[#333333]">Tele-Diagnostic & Tele-Consultation Centre</h3>
                  </div>
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <h4 className="text-lg font-medium mb-3 text-[#333333]">TDTC Elements:</h4>
                  <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-600 flex flex-col items-center">
                    <li>Smart Healthcare Machine</li>
                    <li>2 Nurses, 1 Supervisor</li>
                    <li>Clinic Inventory</li>
                    <li>1 Technician</li>
                  </ul>
                </div>
              </div>

              {/* MTCU Column */}
              <div className="bg-white p-6 ">
                <div className="flex flex-col items-center gap-4 mb-4 border-b-2 border-[#003366]">
                  <div className="w-12 h-12">
                    <Image
                      src="/icons/anim-6-lgo2.png"
                      alt="MTCU Vehicle"
                      width={48}
                      height={48}
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#333333]">Mobile Tele-Clinic Unit</h3>
                  </div>
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <h4 className="text-lg font-medium mb-3 text-[#333333]">MTCU Elements:</h4>
                  <ul className="space-y-2 text-sm sm:text-base md:text-lg text-gray-600 flex flex-col items-center">
                    <li>Smart Healthcare Machine</li>
                    <li>2 Nurses, 1 Driver</li>
                    <li>Clinic Inventory</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative  flex items-center justify-center w-[35%] md:border-l-2 md:border-[#003366]">
            <Image
              src="/icons/anim-5-img.png"
              alt="Tele-Consultation"
              width={150}
              height={100}
              className="h-[80%] w-[80%] rounded-lg "
            />
          </div>
        </div>
      </div>
    </div>



    {/* <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
              <span className="text-[#17A7AB]">Animacare</span>{' '}
              <span className="text-[#003366]">Initiative</span>
            </h2>
            <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium">
              Revolutionizing Rural Healthcare with Tele-Diagnostic Solutions
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Animacare is redefining rural healthcare through on-ground diagnostics and real-time tele-consultation.
              To ensure that even the most geographically isolated communities have access to primary and preventive care, our innovatively designed Tele-Diagnostic Solutions combine Smart Healthcare Machines with mobile Tele-Clinic Units—delivering timely checkups, virtual doctor consultations, and early disease detection right at the doorstep.

            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              src="/icons/anim-3-img2.png"
              alt="Tele-Consultation"
              width={150}
              height={100}
              className="h-full w-auto rounded-lg "
            />
          </div>
        </div>
      </div>
    </div> */}

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
              <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed font-['Montserrat'] font-[400] leading-[100%] tracking-[0%] align-middle text-[#F7F7F7]">
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
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">Network Workflow of</span>{' '}
            <span className="text-[#003366]">Animacare Initiative</span>
          </h2>
          <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            A scalable network of Tele-Diagnostic & Tele-Consultation Centers (TDTCs) and Mobile Tele-Clinics (MTCUs).
          </p>
        </div>

        <div className="grid grid-cols-1 space-y-4 md:space-y-8">
          {/* Left Column - TDTC Information */}

          {/* First TDTC Box */}
          <div
            onClick={(e) => handleToggle(e, 'tdtc')}
            className={`w-full p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] ${activeCard === 'tdtc' ? 'touch-hover' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/icons/anim-6-lgo2.png"
                alt="TDTC Icon"
                width={40}
                height={40}
                className="flex-shrink-0 group-hover:hidden touch-hover:hidden"
              />
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white touch-hover:text-white transition-colors duration-300">Tele-Diagnostic & Tele-Consultation Centre</h3>
            </div>
            <ul className="text-gray-600 group-hover:text-white touch-hover:text-white transition-colors duration-300">
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
            className={`w-full p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] ${activeCard === 'mtcu' ? 'touch-hover' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/icons/anim-6-lgo2.png"
                alt="TDTC Icon"
                width={40}
                height={40}
                className="flex-shrink-0 group-hover:hidden touch-hover:hidden"
              />
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white touch-hover:text-white transition-colors duration-300">Mobile Tele-Clinic Unit</h3>
            </div>
            <ul className="text-gray-600 group-hover:text-white touch-hover:text-white transition-colors duration-300">
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
            className={`w-full p-6 rounded-lg border border-gray-200 shadow-sm transition-all duration-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] ${activeCard === 'referral' ? 'touch-hover' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/icons/anim-6-lgo2.png"
                alt="TDTC Icon"
                width={40}
                height={40}
                className="flex-shrink-0 group-hover:hidden touch-hover:hidden"
              />
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white touch-hover:text-white transition-colors duration-300">Seamless Referral & Follow-up System</h3>
            </div>
            <ul className="text-gray-600 group-hover:text-white touch-hover:text-white transition-colors duration-300">
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

          {/* Right Column - Network Flow Diagram */}
          {/* <div className="relative  w-full h-full flex items-center justify-center">
            <Image
              src="/icons/anim-5-img.png"
              alt="TDTC Center"
              width={400}
              height={400}
              className="w-[80%] h-[80%]"
            />
          </div> */}
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
          <div className="flex flex-col space-y-4 items-center justify-between h-full">
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
                  Improved Access to Quality Healthcare in Underserved Areas
                </h3>
                <p className="text-gray-600 group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300 flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-600">
                  <span className='text-[#003366]'>What we do:</span> Deploy SHMs in rural clinics, PHCs, and diagnostic centers with specialist consultation access.
                  <br />
                  <span className='text-[#003366]'>Impact Metric:</span>
                  <br />
                  <span className=''>📍 Number of rural sites covered</span>
                  <br />
                  👥 Number of patients served per location/month
                  <br />
                  ⏱ Reduction in average travel time to access healthcare
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
                  Early Detection & Prevention of Chronic Diseases
                </h3>
                <p className="text-gray-600 group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300 flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-600">
                  <span className='text-[#003366]'>What we do:</span> Conduct routine vitals & blood tests to detect conditions like diabetes, hypertension, anemia early
                  <br />
                  <span className='text-[#003366]'>Impact Metric:</span>
                  <br />
                  🩺 Number of screenings conducted
                  <br />
                  📈 Percentage of chronic cases identified early
                  <br />
                  🧾 Number of follow-ups scheduled based on early diagnosis

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
                  Healthcare Equity for Women, Elderly & Low-Income Groups

                </h3>
                <p className="text-gray-600 group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300 flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-600">
                  <span className='text-[#003366]'>What we do:</span> Prioritize care through nurse-led support, flexible queue slots, and low-cost services
                  <br />
                  <span className='text-[#003366]'>Impact Metric:</span>
                  <br />
                  👩‍🦳 Percentage of women and elderly served
                  <br />
                  💰 Income-wise demographic data
                  <br />
                  🕒 Avg. wait time reduced due to digital queue scheduling

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
          <div className="flex flex-col space-y-4 items-center justify-between h-full">
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
                  Digitization of Health Records for Continuity of Care

                </h3>
                <p className="text-gray-600 group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300 flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-600">
                  <span className='text-[#003366]'>What we do: </span> Maintain secure EHR for every patient across visits and consultations
                  <br />
                  <span className='text-[#003366]'>Impact Metric:</span>
                  <br />
                  📂 Number of digital records created
                  <br />
                  🔁 Percentage of patients with multiple visits/follow-ups tracked via EHR
                  <br />
                  📊 Usage of EHR by doctors for prescription & follow-up accuracy

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
                  Community Employment & Skill Development

                </h3>
                <p className="text-gray-600 group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300 flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-600">
                  <span className='text-[#003366]'>What we do: </span> Hire and train local nurses/operators to run SHM systems
                  <br />
                  <span className='text-[#003366]'>Impact Metric:</span>
                  <br />
                  🧑‍⚕ Number of healthcare jobs created
                  <br />
                  🏫 Number of training hours delivered
                  <br />
                  📋 Retention rate of local staff per deployment

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
                  Data-Driven Public Health Planning

                </h3>
                <p className="text-gray-600 group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300 flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-600">
                  <span className='text-[#003366]'>What we do: </span> Share anonymized, real-time health insights with hospitals, funders, and NGOs
                  <br />
                  <span className='text-[#003366]'>Impact Metric:</span>
                  <br />
                  📡 Number of data points collected and reported
                  <br />
                  📍 Health trends identified per location
                  <br />
                  🎯 Number of targeted interventions planned or modified using dat
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