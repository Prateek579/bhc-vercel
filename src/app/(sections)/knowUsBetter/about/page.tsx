'use client';

import React from 'react';
import Image from 'next/image';
import Partner from '@/app/components/Partner';

export default function KnowUsBetter() {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[700] font-['Montserrat'] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-4 sm:mb-6">
            Teamwork in Motion,
            <br />
            Transforming Healthcare
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-[400] font-['Font family'] leading-[150%] sm:leading-[130%] md:leading-[100%] tracking-[0%] align-middle text-[#555555]">
            Providing immediate access to healthcare, empowering individuals and communities to lead healthier lives.
          </p>
        </div>
      </div>
    </div>

    {/* Second Section - About Bridge Healthcare */}
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] font-['Montserrat'] leading-tight sm:leading-tight md:leading-tight lg:leading-[100%] tracking-[0px] align-middle text-[#003366]">
            <span className="text-[#18A093]">About</span>{' '}
            <span className="text-[#003366]">Bridge Healthcare</span>
          </h2>
          <p className="text-[20px] text-[#555555] font-[500] font-['Montserrat'] leading-[100%] tracking-[0px] align-middle mb-16">
            Reimagining healthcare delivery through smart diagnostics and seamless connectivity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Vision and Mission Column */}
          <div className="w-full md:w-1/2 space-y-12">
            {/* Vision */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <Image
                    src="/icons/abt-2-lgo1.png"
                    alt="Vision Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-2xl font-[700] leading-[100%] tracking-[0%] align-middle text-[#333333] font-['Montserrat']">Vision</h3>
              </div>
              <p className="text-[#666666] font-['Montserrat'] font-[400] text-[14px] leading-[100%] tracking-[0%] align-middle">
                To revolutionize healthcare delivery by making premium, technology-driven healthcare services accessible, affordable, and reliable for everyone, everywhere.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <Image
                    src="/icons/abt-2-img3.png"
                    alt="Vision Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-2xl font-[700] leading-[100%] tracking-[0%] align-middle text-[#333333] font-['Montserrat']">Mission</h3>
              </div>
              <p className="text-[#666666] font-['Montserrat'] font-[400] text-[14px] leading-[100%] tracking-[0%] align-middle">
                To empower individuals and healthcare providers through advanced Tele-Diagnostic and Smart Healthcare solutions, ensuring real-time diagnostics, seamless tele-consultations, and connected care that improves health outcomes and transforms lives.
              </p>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2 relative min-h-[250px]">
            <Image
              src="/icons/hm-5-img.png"
              alt="Healthcare professionals using Bridge Healthcare platform"
              fill
              className="object-cover rounded-lg shadow-xl max-h-[300px]"
            />
          </div>
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
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#00A99D]">Our</span>
            <span className="text-[#003366]"> Strength And Capacity</span>
          </h2>
          <p className="text-[20px] text-[#555555] font-[500] font-['Montserrat'] leading-[100%] tracking-[0px] align-middle mb-16">
            Robust Performance & Scalable Capacity for Evolving Healthcare Needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 - Academics & Researchers */}
          <div className="bg-white p-8 rounded-lg border-1 border-gray-300">
            <div className="mb-6">
              <Image
                src="/icons/abt-3-lgo4.png"
                alt="Academic Icon"
                width={48}
                height={48}
                className="text-[#00A99D]"
              />
            </div>
            <h3 className="text-2xl font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#333333] mb-4">Academics & Researchers</h3>
            <p className="text-gray-600 font-['Montserrat']">
              Experts from IITS, AIIMS, NIMHANS, CMC Vellore & leading institutions, specializing in healthcare technology with a deep understanding of rural healthcare challenges
            </p>
          </div>

          {/* Card 2 - Industry Professionals */}
          <div className="bg-white p-8 rounded-lg border-1 border-gray-300">
            <div className="mb-6">
              <Image
                src="/icons/abt-3-lgo2.png"
                alt="Industry Icon"
                width={48}
                height={48}
                className="text-[#00A99D]"
              />
            </div>
            <h3 className="text-2xl font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#333333] mb-4">Industry Professionals & Entrepreneurs</h3>
            <p className="text-gray-600 font-['Montserrat']">
              Proven track record of 20+ years of experience in operations, product innovation & scaling technology-driven solutions
            </p>
          </div>

          {/* Card 3 - Hospitals & NGO */}
          <div className="bg-white p-8 rounded-lg border-1 border-gray-300">
            <div className="mb-6">
              <Image
                src="/icons/abt-3-lgo3.png"
                alt="Hospital Icon"
                width={48}
                height={48}
                className="text-[#00A99D]"
              />
            </div>
            <h3 className="text-2xl font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] align-middle text-[#333333] mb-4">Hospitals & NGO Collaborators</h3>
            <p className="text-gray-600 font-['Montserrat']">
              Partnering with Prestigious Hospitals, alongside healthcare-focused NGO with vast experience in impact-driven programs.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Fourth Section - Our Team */}
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#00A99D]">Meet Our</span>
            <span className="text-[#003366]"> Team</span>
          </h2>
          <p className="text-lg text-gray-600 font-['Montserrat'] mx-auto">
            Bridge Healthcare&apos;s expert team innovates tele-diagnostics for better healthcare access.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-gray-50 p-6 rounded-lg text-center bg-gray-200">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img1.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Anmol Garg</h3>
            <p className="text-gray-600 mb-4">Co-Founder & CEO</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/ttr.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/lkdn.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/intrnt.png" alt="Website" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-50 p-6 rounded-lg text-center bg-gray-200">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img2.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Rahul Soni</h3>
            <p className="text-gray-600 mb-4">Co-Founder & CTO</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/ttr.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/lkdn.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/intrnt.png" alt="Website" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-50 p-6 rounded-lg text-center bg-gray-200">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img3.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Dr. B Rebecca </h3>
            <p className="text-gray-600 mb-4">Co-Founder</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/ttr.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/lkdn.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/intrnt.png" alt="Website" width={20} height={20} />
              </a>
            </div>
          </div>
          {/* Team Member 1 */}
          <div className="bg-gray-50 p-6 rounded-lg text-center bg-gray-200">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img1.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Anmol Garg</h3>
            <p className="text-gray-600 mb-4">Co-Founder & CEO</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/ttr.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/lkdn.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/intrnt.png" alt="Website" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-gray-50 p-6 rounded-lg text-center bg-gray-200">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img2.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Rahul Soni</h3>
            <p className="text-gray-600 mb-4">Co-Founder & CTO</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/ttr.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/lkdn.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/intrnt.png" alt="Website" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-gray-50 p-6 rounded-lg text-center bg-gray-200">
            <div className="relative w-48 h-48 mx-auto mb-4">
              <Image
                src="/icons/abt-4-img3.png"
                alt="Team Member"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold text-[#003366] mb-1">Dr. B Rebecca </h3>
            <p className="text-gray-600 mb-4">Co-Founder</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/ttr.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/lkdn.png" alt="LinkedIn" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#00A99D]">
                <Image src="/icons/intrnt.png" alt="Website" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

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

        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {/* FAQ Items */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq1' ? null : 'faq1')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#333333] font-['Montserrat']">What is Bridge Healthcare and what makes it different from other healthcare providers?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq1' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq1' ? 'max-h-40 py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-['Montserrat']">Bridge Healthcare is a revolutionary healthcare platform that brings quality medical services directly to rural and underserved communities through our network of Smart Health Centres and Mobile Units.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq2' ? null : 'faq2')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#333333] font-['Montserrat']">How does Bridge Healthcare ensure quality healthcare in rural areas?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq2' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq2' ? 'max-h-40 py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-['Montserrat']">Through our network of Smart Health Centres and Mobile Units, we combine advanced technology with trained healthcare professionals to deliver quality medical services directly to rural communities.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#333333] font-['Montserrat']">What services does Bridge Healthcare provide through its Smart Health Centres?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq3' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq3' ? 'max-h-40 py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-['Montserrat']">Our Smart Health Centres offer comprehensive services including health check-ups, tele-consultations, diagnostics, and wellness programs, all supported by trained healthcare professionals and advanced technology.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#333333] font-['Montserrat']">Where is Bridge Healthcare currently operating? Are your services available in my area?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq3' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq3' ? 'max-h-40 py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-['Montserrat']">Our Smart Health Centres offer comprehensive services including health check-ups, tele-consultations, diagnostics, and wellness programs, all supported by trained healthcare professionals and advanced technology.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] text-[#333333] font-['Montserrat']">How can I get involved with Bridge Healthcare — as a partner, funder or volunteer?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq3' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq3' ? 'max-h-40 py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-['Montserrat']">Our Smart Health Centres offer comprehensive services including health check-ups, tele-consultations, diagnostics, and wellness programs, all supported by trained healthcare professionals and advanced technology.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Explore Partners */}
    <Partner />
  </ >
  )
}