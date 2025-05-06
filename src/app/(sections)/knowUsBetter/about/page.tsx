'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Partner from '@/app/components/Partner';

export default function KnowUsBetter() {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);
  const [activeCard, setActiveCard] = React.useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = React.useState<boolean>(false);
  const [showFaq, setShowFaq] = useState(false);

  React.useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
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
    <div className="relative overflow-hidden min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh]">
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
            Smart, Scalable Systems
            <br />
            Rethinking Healthcare for All
          </h1>
        </div>
      </div>
    </div>

    {/* Background overlay */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        backgroundImage: 'url("/icons/abt-1-img.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    {/* Third Section - Our Strength and Capacity */}
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
          <span className="text-[#18A093]">Our</span>{' '}
          <span className="text-[#003366]">Strength And Capacity</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Academics & Researchers */}
          <div
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer flex flex-col items-start justify-center min-h-[180px] md:min-h-[220px] ${activeCard === 'card1' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'card1')}
          >
            <div className="mb-6 group-hover:hidden touch-hover:hidden flex items-center justify-center w-full">
              <Image
                src="/icons/abt-3-lgo4.png"
                alt="Academic Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-2xl font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] text-[#333333] align-middle  mb-4 group-hover:hidden touch-hover:hidden text-center w-full">Academics & Researchers</h3>
            <p className="text-sm font-['Montserrat'] sm:text-base md:text-lg  text-gray-600  group-hover:text-white touch-hover:text-white hidden group-hover:block touch-hover:block">
              Experts from IITS, AIIMS, NIMHANS, CMC Vellore & leading institutions, specializing in healthcare technology with a deep understanding of rural healthcare challenges
            </p>
          </div>

          {/* Card 2 - Industry Professionals */}
          <div
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer flex flex-col items-start justify-center min-h-[180px] md:min-h-[220px] ${activeCard === 'card2' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'card2')}
          >
            <div className="mb-6 group-hover:hidden touch-hover:hidden flex items-center justify-center w-full">
              <Image
                src="/icons/abt-3-lgo2.png"
                alt="Industry Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-2xl font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#333333] mb-4 group-hover:hidden touch-hover:hidden text-center w-full">Industry Professionals & Entrepreneurs</h3>
            <p className="text-sm font-['Montserrat'] sm:text-base md:text-lg  text-gray-600  group-hover:text-white touch-hover:text-white hidden group-hover:block touch-hover:block">
              Proven track record of 20+ years of experience in operations, product innovation & scaling technology-driven solutions
            </p>
          </div>

          {/* Card 3 - Hospitals & NGO */}
          <div
            className={`bg-white p-8 rounded-lg border-1 border-gray-300 card-hover group hover:bg-[#0E7280] transition-all duration-300 cursor-pointer flex flex-col items-start justify-center min-h-[180px] md:min-h-[220px] ${activeCard === 'card3' ? 'touch-hover' : ''}`}
            onClick={(e) => handleToggle(e, 'card3')}
          >
            <div className="mb-6 group-hover:hidden touch-hover:hidden flex items-center justify-center w-full">
              <Image
                src="/icons/abt-3-lgo3.png"
                alt="Hospital Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className="text-2xl font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#333333] mb-4 group-hover:hidden touch-hover:hidden text-center w-full">Hospitals & NGO Collaborators</h3>
            <p className="text-sm font-['Montserrat'] sm:text-base md:text-lg  text-gray-600  group-hover:text-white touch-hover:text-white hidden group-hover:block touch-hover:block">
              Partnering with Prestigious Hospitals, alongside healthcare-focused NGO with vast experience in impact-driven programs.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Second Section - About Bridge Healthcare */}
    <div className="relative bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <div className="w-full">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
            <span className="text-[#18A093]">About</span>{' '}
            <span className="text-[#003366]">Bridge Healthcare</span>
          </h2>
          <p className="text-[#555555] text-[18px] text-center sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            Reimagining healthcare delivery through smart diagnostics and seamless connectivity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Vision */}
          <div className="border-2 border-gray-200 space-y-4 p-4 rounded-xl group hover:bg-[#0E7280] transition-all duration-300 w-[full] md:w-[50%]">
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
            <p className="text-sm font-['Montserrat'] sm:text-base md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300">
              To revolutionize healthcare delivery by making premium, technology-driven healthcare services accessible, affordable, and reliable for everyone, everywhere.
            </p>
          </div>

          {/* Mission */}
          <div className="w-[full] md:w-[50%] border-2 border-gray-200 space-y-4 p-4 rounded-xl group hover:bg-[#0E7280] transition-all duration-300">
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
            <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-white transition-colors duration-300 font-['Montserrat']">
              To empower individuals and healthcare providers through advanced Tele-Diagnostic and Smart Healthcare solutions, ensuring real-time diagnostics, seamless tele-consultations, and connected care that improves health outcomes and transforms lives.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Fourth Section - Our Team */}
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22">
        <div className="mb-8">
          <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
            <span className="text-[#18A093]">Meet Our</span>{' '}
            <span className="text-[#003366]">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-50 p-4 rounded-lg text-center bg-gray-200 flex flex-col items-center justify-center">
            <div className="relative w-35 h-35 mx-auto mb-4">
              <Image
                src="/icons/abt-2-img3.0.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
              <a href="http://www.linkedin.com/in/anmol-garg-bhc" className="absolute bottom-2 bg-white left-2 text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/lkdn.png" alt="LinkedIn" width={30} height={30} />
              </a>
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Anmol Garg</h3>
            <p className="text-gray-600">(Ph.D., IIT Madras)</p>
            <p className="text-gray-600 mb-4">C-Founder & CEO</p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-50 p-4 rounded-lg text-center bg-gray-200 flex flex-col items-center justify-center">
            <div className="relative w-35 h-35 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img3.7.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
              <a href="http://linkedin.com/in/rahul-soni-b8782a83" className="absolute bottom-2 bg-white left-2 text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/lkdn.png" alt="LinkedIn" width={30} height={30} />
              </a>
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Rahul Soni</h3>
            <p className="text-gray-600">(M.S., IIT Madras)</p>
            <p className="text-gray-600 mb-4">Co-Founder & CTO</p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-50 p-4 rounded-lg text-center bg-gray-200 flex flex-col items-center justify-center">
            <div className="relative w-35 h-35 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img3.3.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
              <a href="http://linkedin.com/in/rebecca-punithavalli-0857b048" className="absolute bottom-2 bg-white left-2 text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/lkdn.png" alt="LinkedIn" width={30} height={30} />
              </a>
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Dr. B. Rebecca </h3>
            <p className="text-gray-600">(CMO, IIT Madras)</p>
            <p className="text-gray-600 mb-4">Director</p>

          </div>
          {/* Team Member 1 */}
          <div className="bg-gray-50 p-4 rounded-lg text-center bg-gray-200 flex flex-col items-center justify-center">
            <div className="relative w-35 h-35 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img3.6.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
              <a href="https://www.ruthfoundationtrust.org/" className="absolute bottom-2 bg-white left-2 rounded-full text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/intrnt.png" alt="LinkedIn" width={30} height={30} />
              </a>
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Md Shajahan Sk</h3>
            <p className="text-gray-600">(MSW, CMR & MHR - NIMHANS)</p>
            <p className="text-gray-600 mb-4">NGO Partner</p>

          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-center bg-gray-200 flex flex-col items-center justify-center">
            <div className="relative w-35 h-35 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img3.8.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
              <a href="http://linkedin.com/in/divinvolve" className="absolute bottom-2 bg-white left-2 rounded-full text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/lkdn.png" alt="LinkedIn" width={30} height={30} />
              </a>
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Divanshu Kumar
            </h3>
            <p className="text-gray-600">CEO, Solinas Integrity
            </p>
            <p className="text-gray-600 mb-4">Business Adviser</p>

          </div>

          <div className="bg-gray-50 p-4 rounded-lg text-center bg-gray-200 flex flex-col items-center justify-center">
            <div className="relative w-35 h-35 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img3.2.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
              <a href="http://linkedin.com/in/amit-nain-nanochem" className="absolute bottom-2 bg-white left-2 text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/lkdn.png" alt="LinkedIn" width={30} height={30} />
              </a>
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Dr. Amit Nain</h3>
            <p className="text-gray-600">(Asst. Prof - IIT Madras)</p>
            <p className="text-gray-600 mb-4">Product Adviser</p>

          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-50 p-4 rounded-lg text-center bg-gray-200 flex flex-col items-center justify-center">
            <div className="relative w-35 h-35 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img3.5.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
              <a href="https://www.atreumhospital.com/our-doctors/sagar-p-kabadi" className="absolute rounded-full bottom-2 bg-white left-2 text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/intrnt.png" alt="LinkedIn" width={30} height={30} />
              </a>
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Dr. Sagar P Kabadi</h3>
            <p className="text-gray-600">(MBBS, MD - Internal Medicine, C.C.E.B.D.M)</p>
            <p className="text-gray-600 mb-4">Partnering Doctor</p>

          </div>

          {/* Team Member 3 */}

          <div className="bg-gray-50 p-4 rounded-lg text-center bg-gray-200 flex flex-col items-center justify-center">
            <div className="relative w-35 h-35 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img3.4.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
              <a href="https://www.vasavihospitals.com/neurosurgery.php" className="absolute rounded-full bottom-2 bg-white left-2 text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/intrnt.png" alt="LinkedIn" width={30} height={30} />
              </a>
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Dr. Pratham R</h3>
            <p className="text-gray-600">(MBBS, MS - MCH - Neuro Surgery)</p>
            <p className="text-gray-600 mb-4">Partnering Doctor</p>
          </div>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-4 sm:mb-8 text-center">
          <span className="text-[#18A093]">FA</span>
          <span className="text-[#003366]">Q<span className='text-[26px] sm:text-[30px]'>s</span></span>
        </h2>
        <div className="space-y-2 sm:space-y-3 lg:space-y-4">
          {/* FAQ Items */}
          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq1' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq1' ? null : 'faq1')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq1' ? 'text-white' : 'text-[#333333]'} `}>What inspired the creation of Bridge Healthcare?</span>
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
              <p className="text-sm sm:text-[14px] lg:text-[16px] font-['Montserrat'] text-white">Bridge Healthcare was born from a simple yet powerful realization: millions of people in rural India still lack access to timely, quality healthcare. We saw a chance to go beyond convenience and create real-world impact — by bringing diagnostics, doctor consultations, and continuous care right to the doorstep of every village through technology and local empowerment.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq2' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq2' ? null : 'faq2')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq2' ? 'text-white' : 'text-[#333333]'} `}>What is the core mission and vision of Bridge Healthcare?
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
              <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat']">Our mission is to make healthcare equitable, real-time and preventive for every community — regardless of location or income. We envision a future where people in the most remote areas receive the same standard of care as those in cities, through a system powered by innovation, empathy and grassroots connectivity.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq3' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq3' ? 'text-white' : 'text-[#333333]'} `}>Who are the people behind Bridge Healthcare?</span>
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
              <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat']">Bridge Healthcare is driven by a passionate team of healthcare professionals, engineers, and social innovators with experience across rural development, diagnostics, public health and technology. We&apos;re united by a shared vision — to reimagine how healthcare reaches people, blending deep empathy with practical execution, at scale.</p>
            </div>
          </div>

          {showFaq === true && <> <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq4' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq4' ? null : 'faq4')}
              className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq4' ? 'text-white' : 'text-[#333333]'} `}>How does Bridge Healthcare plan to scale its impact?</span>
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
              <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat']">We scale by creating hyperlocal care ecosystems. By deploying Smart Healthcare Machines, training local operators, and connecting them with doctors via our tech platform, we make healthcare accessible, efficient and trustworthy. Our model is flexible enough to serve rural villages and high-density urban clusters alike, enabling broad and meaningful replication.</p>
            </div>
          </div>

            <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq5' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
              <button
                onClick={() => setActiveFaq(activeFaq === 'faq5' ? null : 'faq5')}
                className="w-full flex items-center justify-between p-2 sm:p-3 lg:p-4 transition-colors duration-200"
              >
                <span className={`text-base sm:text-lg lg:text-[18px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq5' ? 'text-white' : 'text-[#333333]'} `}>How can individuals or organizations collaborate with Bridge Healthcare?</span>
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
                <p className="text-sm sm:text-[14px] lg:text-[16px] text-white font-['Montserrat']">We believe collaboration is key to systemic change. Whether you&apos;re a CSR partner, NGO, hospital, panchayat, or impact-driven institution, there’s space to work together. From deploying care units to running health programs or scaling our platform in new regions—we invite you to join us in building a healthier, more inclusive future.</p>
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

    {/* Explore Partners */}
    <Partner />
  </ >
  )
}