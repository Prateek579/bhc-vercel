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
              Mission 2036
              <br />
              <span>Connecting 600K Villages to Smart Healthcare.</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg opacity-90 font-['Montserrat'] font-normal leading-relaxed text-[#FFA500]">
              he Decentralized Health Network is our mission to connect India’s most underserved regions with essential healthcare services by 2036. Unlike centralized models that rely on urban hospitals, this network empowers local communities through Smart Healthcare Machines, tele-diagnostics, and real-time consultations — right at the village level. It’s a scalable, tech-driven approach that ensures no region is left behind, bridging the healthcare gap across 600,000+ villages with speed, accuracy, and accessibility.
            </p>
            {/* <p className="text-sm md:text-base lg:text-lg opacity-90 font-['Montserrat'] font-normal leading-relaxed text-[#FFA500]">
              By 2036, Transforming access to care by building a decentralized, tech-enabled healthcare network across every Indian sub-division.
            </p> */}
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
            <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
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
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
            <span className="text-[#18A093]">How We&apos;re Redefining</span>{' '}
            <span className="text-[#003366]">Healthcare in India</span>
          </h2>
          <p className="text-[#555555] text-[18px] text-center sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            India&apos;s healthcare system faces deep gaps in accessibility and affordability — especially in rural regions. We&apos;re building a decentralized, tech-driven ecosystem that delivers real-time, community-centered care where it&apos;s needed most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Breaking Geographical Barriers */}
          <div
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer ${activeCard === 'card1' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'card1')}
          >
            <div className="mb-6 group-hover:hidden touch-hover:hidden flex justify-center items-center">
              <Image
                src="/icons/abt-3-lgo4.png"
                alt="Academic Icon"
                width={48}
                height={48}
                className="md:h-[60px] md:w-auto"
              />
            </div>
            <h3 className="text-[18px] text-center sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%]  align-middle capitalize text-gray-700 font-['Montserrat'] pb-2 group-hover:text-white touch-hover:text-white group-hover:hidden touch-hover:hidden">Breaking Geographical Barriers</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white touch-hover:text-white hidden group-hover:block touch-hover:block">
              Smart mobile clinics and tele-consultation hubs bring healthcare to every village — eliminating travel and reducing hospital overload.
            </p>
          </div>

          {/* Card 2 - Technology-Driven Access */}
          <div
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer ${activeCard === 'card2' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'card2')}
          >
            <div className="mb-6 group-hover:hidden touch-hover:hidden flex items-center justify-center">
              <Image
                src="/icons/abt-3-lgo2.png"
                alt="Industry Icon"
                width={48}
                height={48}
                className="md:h-[60px] md:w-auto"
              />
            </div>
            <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-center align-middle capitalize text-gray-700 font-['Montserrat'] pb-2 group-hover:text-white touch-hover:text-white group-hover:hidden touch-hover:hidden">Technology-Driven Access</h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white touch-hover:text-white hidden group-hover:block touch-hover:block">
              From early disease detection to AI-powered health records and virtual consults — technology ensures accurate, accessible and timely care.
            </p>
          </div>

          {/* Card 3 - Community-Based Healthcare */}
          <div
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer ${activeCard === 'card3' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'card3')}
          >
            <div className="mb-6 group-hover:hidden touch-hover:hidden flex items-center justify-center">
              <Image
                src="/icons/abt-3-lgo3.png"
                alt="Hospital Icon"
                width={48}
                height={48}
                className="md:h-[60px] md:w-auto"
              />
            </div>
            <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-center align-middle capitalize text-gray-700 font-['Montserrat'] pb-2 group-hover:text-white touch-hover:text-white group-hover:hidden touch-hover:hidden">Community-Based Healthcare</h3>
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
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
            <span className="text-[#18A093]">How We&apos;re Redefining</span>{' '}
            <span className="text-[#003366]">Decentralized Healthcare Network</span>
          </h2>
          <p className="text-[#555555] text-center text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            Milestones toward creating a nationwide network of smart health hubs across every sub-division in India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phase 1 */}
          <div
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer sm:min-h-[100px] md:min-h-[170px] flex items-center justify-center ] ${activeCard === 'phase1' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'phase1')}
          >
            <div className="flex flex-row items-center justify-start group-hover:hidden touch-hover:hidden h-full">
              <Image
                src="/icons/dc-3-lgo1.png"
                alt="Phase 1 Icon"
                width={48}
                height={48}
                className=" sm:w-14 md:w-18 mr-4"
              />
              <div className='w-full'>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%]  align-middle capitalize font-['Montserrat] text-[#18A093] group-hover:text-white touch-hover:text-white mb-2">Phase 1</h3>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat'] text-gray-700">Foundation & Proof of Concept
                  (2024–2026)</h3>
              </div>
            </div>
            <ul className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
              <li>Identifying key regions for implementation.</li>
              <li>Partnering with NGOs, government bodies, and healthcare startups.</li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer sm:min-h-[100px] md:min-h-[170px] flex items-center justify-center  ${activeCard === 'phase2' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'phase2')}
          >
            <div className="flex flex-row items-center group-hover:hidden touch-hover:hidden h-full">
              <Image
                src="/icons/dc-3-lgo2.png"
                alt="Phase 2 Icon"
                width={52}
                height={58}
                className="mr-4 sm:w-14 md:w-22"
              />
              <div className='w-full'>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%]  align-middle capitalize font-['Montserrat] text-[#18A093] group-hover:text-white touch-hover:text-white mb-2">Phase 2</h3>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat'] text-gray-700">Scale & Strengthen
                  (2026–2029)</h3>
              </div>
            </div>
            <ul className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
              <li>Identifying key regions for implementation.</li>
              <li>Partnering with NGOs, government bodies, and healthcare startups.</li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer sm:min-h-[100px] md:min-h-[170px] flex items-center justify-center ${activeCard === 'phase3' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'phase3')}
          >
            <div className="flex flex-row items-center group-hover:hidden touch-hover:hidden h-full">
              <Image
                src="/icons/dc-3-lgo3.png"
                alt="Phase 3 Icon"
                width={48}
                height={48}
                className="mr-4 sm:w-16 md:w-20"
              />
              <div className='w-full'>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%]  align-middle capitalize font-['Montserrat] text-[#18A093] group-hover:text-white touch-hover:text-white mb-2">Phase 3</h3>
                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] align-middle capitalize font-['Montserrat'] text-gray-700">Deep Reach & Public Systems Integration
                  (2029–2032)</h3>
              </div>

            </div>
            <ul className="text-sm sm:text-base md:text-lg text-gray-600 hidden group-hover:block touch-hover:block group-hover:text-white touch-hover:text-white">
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

    {/*Powered by Government Schemes*/}
    < div className="relative bg-white overflow-hidden" >
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
          <span className="text-[#18A093]">Powered by</span>{' '}
          <span className="text-[#003366]">Government Schemes</span>
        </h2>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
          <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
            <Image src="/icons/hm-gs-img1.png" alt="Gov. Schemes" width={200} height={200} className='w-30  md:w-45 h-auto object-contain' />
          </div>
          <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
            <Image src="/icons/hm-gs-img2.png" alt="Gov. Schemes" width={200} height={200} className='w-30  md:w-45 h-auto object-contain' />
          </div>
          <div className="flex items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
            <Image src="/icons/hm-gs-img3.png" alt="Gov. Schemes" width={200} height={200} className='w-30  md:w-45 h-auto object-contain' />
          </div>
          <div className="flex  items-center justify-center p-2 transition-all duration-300 hover:scale-112 cursor-pointer">
            <Image src="/icons/hm-gs-img4.png" alt="Gov. Schemes" width={200} height={200} className='w-30  md:w-45 h-auto object-contain' />
          </div>
        </div>
      </div>
    </div >
    {/* PARTNER SECTION */}
    <Partner />
  </>
  );
}