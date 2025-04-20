'use client';
import Partner from '@/app/components/Partner';
import Image from 'next/image';


import { useState, useEffect } from 'react';

export default function Decentralized() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    const checkTouchDevice = (): boolean => {
      if (typeof window === 'undefined') return false;
      return 'ontouchstart' in window;
    };
    setIsTouchDevice(checkTouchDevice());
  }, []);

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
    <div className="relative overflow-hidden">
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
              By 2036, Transforming access to care by building a decentralized, tech-enabled healthcare network across every Indian sub-division.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Second Section - About Bridge Healthcare */}
    <div className="relative bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="w-full">
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">About</span>{' '}
            <span className="text-[#003366]">Bridge Healthcare</span>
          </h2>
          <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            Reimagining healthcare delivery through smart diagnostics and seamless connectivity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Vision and Mission Column */}
          <div className="w-full md:w-1/2 space-y-12">
            {/* Vision */}
            <div className="border-2 border-gray-200 space-y-4 p-4 rounded-xl group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <Image
                    src="/icons/abt-2-lgo1.png"
                    alt="Vision Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white transition-colors duration-300">Vision</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">
                To revolutionize healthcare delivery by making premium, technology-driven healthcare services accessible, affordable, and reliable for everyone, everywhere.
              </p>
            </div>

            {/* Mission */}
            <div className="border-2 border-gray-200 space-y-4 p-4 rounded-xl group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <Image
                    src="/icons/abt-2-img3.png"
                    alt="Vision Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] group-hover:text-white transition-colors duration-300">Mission</h3>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">
                To empower individuals and healthcare providers through advanced Tele-Diagnostic and Smart Healthcare solutions, ensuring real-time diagnostics, seamless tele-consultations, and connected care that improves health outcomes and transforms lives.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <Image
              src="/icons/hm-5-img.png"
              alt="Healthcare professionals using Bridge Healthcare platform"
              className="object-cover rounded-lg shadow-xl w-full md:w-full lg:w-[550px]"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>

    {/* Mission 2036 Section */}
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Column - Statistics */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
              <span className="text-[#18A093]">Mission</span>{' '}
              <span className="text-[#003366]">2036</span>
            </h2>

            {/* TDTCs */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                <Image
                  src="/icons/dc-3-lgo1.png"
                  alt="TDTC Icon"
                  width={56}
                  height={56}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2">10k TDTCs (Smart Health Centre)</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">Serving 6500+ sub-divisions with tech-enabled primary care.</p>
              </div>
            </div>

            {/* MTCUs */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                <Image
                  src="/icons/dc-3-lgo2.png"
                  alt="MTCU Icon"
                  width={56}
                  height={56}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2">15k MTCUs (Smart Mobile Units)</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">Reaching Remote Villages With Mobile Diagnostics And Care.</p>
              </div>
            </div>

            {/* Specialists Network */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                <Image
                  src="/icons/dc-3-lgo3.png"
                  alt="Specialist Icon"
                  width={56}
                  height={56}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2 ">50k Specialists Network</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">Providing expert consultations anytime, anywhere.</p>
              </div>
            </div>

            {/* Villages */}
            <div className="flex items-start gap-3 sm:gap-4 lg:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
                <Image
                  src="/icons/dc-3-lgo3.png"
                  alt="Village Icon"
                  width={56}
                  height={56}
                  className="w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2">600k Villages</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">Targeting underserved regions across India for better access.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] mt-6 lg:mt-0">
            <Image
              src="/icons/dc-3-img1.png"
              alt="India Healthcare Network"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Fourth Section - Our Strength and Capacity */}
    <div className="bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="mb-16">
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">How We&apos;re Redefining</span>{' '}
            <span className="text-[#003366]">Healthcare in India</span>
          </h2>
          <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            India&apos;s healthcare system faces deep gaps in accessibility and affordability — especially in rural regions. We&apos;re building a decentralized, tech-driven ecosystem that delivers real-time, community-centered care where it&apos;s needed most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Breaking Geographical Barriers */}
          <div 
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer ${activeCard === 'card1' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'card1')}
          >
            <div className="mb-6 group-hover:hidden touch-hover:hidden">
              <Image
                src="/icons/abt-3-lgo4.png"
                alt="Academic Icon"
                width={48}
                height={48}
                className="text-[#00A99D]"
              />
            </div>
            <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2 group-hover:text-white touch-hover:text-white group-hover:hidden touch-hover:hidden">Breaking Geographical Barriers</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white touch-hover:text-white hidden group-hover:block touch-hover:block">
              Smart mobile clinics and tele-consultation hubs bring healthcare to every village — eliminating travel and reducing hospital overload.
            </p>
          </div>

          {/* Card 2 - Technology-Driven Access */}
          <div 
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer ${activeCard === 'card2' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'card2')}
          >
            <div className="mb-6 group-hover:hidden touch-hover:hidden">
              <Image
                src="/icons/abt-3-lgo2.png"
                alt="Industry Icon"
                width={48}
                height={48}
                className="text-[#00A99D]"
              />
            </div>
            <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2 group-hover:text-white touch-hover:text-white group-hover:hidden touch-hover:hidden">Technology-Driven Access</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white touch-hover:text-white hidden group-hover:block touch-hover:block">
              From early disease detection to AI-powered health records and virtual consults — technology ensures accurate, accessible and timely care.
            </p>
          </div>

          {/* Card 3 - Community-Based Healthcare */}
          <div 
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer ${activeCard === 'card3' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'card3')}
          >
            <div className="mb-6 group-hover:hidden touch-hover:hidden">
              <Image
                src="/icons/abt-3-lgo3.png"
                alt="Hospital Icon"
                width={48}
                height={48}
                className="text-[#00A99D]"
              />
            </div>
            <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat'] pb-2 group-hover:text-white touch-hover:text-white group-hover:hidden touch-hover:hidden">Community-Based Healthcare</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white touch-hover:text-white hidden group-hover:block touch-hover:block">
              Empowering local workers with smart diagnostic tools and training to deliver first-level care and reduce pressure on tertiary systems.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Fifth Section - Roadmap */}
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="mb-16">
          <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
            <span className="text-[#18A093]">How We&apos;re Redefining</span>{' '}
            <span className="text-[#003366]">Decentralized Healthcare Network</span>
          </h2>
          <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            Milestones toward creating a nationwide network of smart health hubs across every sub-division in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div 
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer sm:min-h-[100px] lg:min-h-[150px] ${activeCard === 'phase1' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'phase1')}
          >
            <div className="flex flex-row items-center justify-start group-hover:hidden touch-hover:hidden h-full">
              <Image
                src="/icons/dc-3-lgo1.png"
                alt="Phase 1 Icon"
                width={48}
                height={48}
                className="text-[#00A99D]"
              />
              <h3 className="w-[50%] text-center text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-center align-middle capitalize font-['Montserrat] text-[#18A093] group-hover:text-white touch-hover:text-white">Phase 1</h3>
            </div>

            <ul className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white h-full">
              <li>Identifying key regions for implementation.</li>
              <li>Partnering with NGOs, government bodies, and healthcare startups.</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div 
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer sm:min-h-[100px] lg:min-h-[150px] ${activeCard === 'phase2' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'phase2')}
          >
            <div className="flex flex-row items-center group-hover:hidden touch-hover:hidden h-full">
              <Image
                src="/icons/dc-3-lgo2.png"
                alt="Phase 2 Icon"
                width={52}
                height={58}
                className="text-[#00A99D]"
              />
              <h3 className="w-[50%] text-center text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-center align-middle capitalize font-['Montserrat] text-[#18A093] group-hover:text-white touch-hover:text-white">Phase 2</h3>
            </div>
            
            <ul className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white h-full">
              <li>Identifying key regions for implementation.</li>
              <li>Partnering with NGOs, government bodies, and healthcare startups.</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div 
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-gradient-to-r hover:from-[#18A093] hover:via-[#128387] hover:to-[#003366] transition-all duration-300 cursor-pointer  sm:min-h-[100px] lg:min-h-[150px] ${activeCard === 'phase3' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'phase3')}
          >
            <div className="flex flex-row items-center group-hover:hidden touch-hover:hidden h-full">
              <Image
                src="/icons/dc-3-lgo3.png"
                alt="Phase 3 Icon"
                width={48}
                height={48}
                className="text-[#00A99D]"
              />
              <h3 className="w-[50%] text-center text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-center align-middle capitalize font-['Montserrat] text-[#18A093] group-hover:text-white touch-hover:text-white">Phase 3</h3>
            </div>
            <ul className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white h-full">
              <li>Identifying key regions for implementation.</li>
              <li>Partnering with NGOs, government bodies, and healthcare startups.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pb-6 mt-3 bg-white relative overflow-hidden">
        <div className="slide-animation">
  
          <Image
            src="/icons/dc-5-img.png"
            alt="Phase 3 Icon"
            width={100}
            height={100}
            className="text-[#00A99D]"
          />
        </div>
      </div>
    </div>
    {/* PARTNER SECTION */}
    <Partner />
  </>
  );
}