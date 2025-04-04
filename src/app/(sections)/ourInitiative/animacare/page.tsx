'use client';
import Partner from '@/app/components/Partner';
import Image from 'next/image';
import React from 'react';

export default function Animacare() {

  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);

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
            By 2036, we will transform Indian healthcare.
          </p>
        </div>
      </div>

      {/* <div className="relative z-10 flex flex-col gap-6 max-w-xl lg:max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Montserrat'] leading-tight">
              <span className='text-[#17A7AB] whitespace-nowrap'>Impactful & Bold Innovative</span>
              <br />
              <span className='text-[#003366]'>Animacare Initiative</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-500 max-w-xl opacity-90 font-['Montserrat'] font-normal leading-relaxed">
          Revolutionizing Rural Healthcare with Tele-Diagnostic Solutions
          </p>
        </div> */}

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
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22 py-20 md:py-32">
        <div className="space-y-8">
          {/* Chapter Title */}
          <div>
            <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] font-['Montserrat'] leading-tight sm:leading-tight md:leading-tight lg:leading-[100%] tracking-[0px] align-middle text-[#003366]">
              <span className="text-[#18A093]">Chapter 1-</span>{' '}
              <span className="text-[#003366]">West Bengal (Murshidhabad district)</span>
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
                    <p className="text-sm sm:text-base text-gray-500">Inadequate healthcare access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Image */}
            <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
              <Image
                src="/icons/anim-2-img.png"
                alt="Murshidabad District Map"
                fill
                className="object-contain"
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
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="flex justify-center mb-4">
                <Image src="/icons/anim-2-lgo4.png" alt="Specialists" width={48} height={48} />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-[#1A1A1A] mb-2">10+</h4>
              <p className="text-sm sm:text-base text-gray-600">Specialist Referrals</p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="flex justify-center mb-4">
                <Image src="/icons/anim-2-lgo5.png" alt="Disease" width={48} height={48} />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-[#1A1A1A] mb-2">20%</h4>
              <p className="text-sm sm:text-base text-gray-600">Early Disease Detected</p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="flex justify-center mb-4">
                <Image src="/icons/anim-2-lgo6.png" alt="Patients" width={48} height={48} />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-[#1A1A1A] mb-2">400+</h4>
              <p className="text-sm sm:text-base text-gray-600">Patients Treated</p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="flex justify-center mb-4">
                <Image src="/icons/anim-2-lgo7.png" alt="Satisfaction" width={48} height={48} />
              </div>
              <h4 className="text-xl sm:text-2xl lg:text-3xl font-[700] text-[#1A1A1A] mb-2">90%</h4>
              <p className="text-sm sm:text-base text-gray-600">Patients Satisfied</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Original Animacare Initiative Section */}
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22 py-20 md:py-32">
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
      <div className='max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22 py-20 md:py-32'>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-4">
                {/* Smart Health Centres */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-[#003366] border-1 border-gray-100">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">45</h3>
                  <p className="text-sm sm:text-base opacity-90">Smart Health Centres</p>
                </div>

                {/* Smart Mobile Units */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-[#003366] border-1 border-gray-100">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">45</h3>
                  <p className="text-sm sm:text-base opacity-90">Smart Mobile Units</p>
                </div>

                {/* Million People */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-[#003366] border-1 border-gray-100">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">10 M</h3>
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
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22 py-20 md:py-32">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] font-['Montserrat'] leading-tight sm:leading-tight md:leading-tight lg:leading-[100%] tracking-[0px] align-middle">
            <span className="text-[#17A7AB]">Network Workflow of </span>{' '}
            <span className="text-[#003366]">Animacare Initiative</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            A scalable network of Tele-Diagnostic & Tele-Consultation Centers (TDTCs) and Mobile Tele-Clinics (MTCUs).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - TDTC Information */}
          <div className="space-y-6">
            {/* First TDTC Box */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
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
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
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
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8 lg:px-22 py-20 md:py-32">
        <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[36px] font-[700] font-['Montserrat'] leading-tight sm:leading-tight md:leading-tight lg:leading-[100%] tracking-[0px] align-middle text-[#003366]">
          <span className="text-[#18A093]">Social Impacts</span>{' '}
          <span className="text-[#003366]">& Sustainability</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col space-y-8 h-full">
            <div className="flex items-start gap-4 flex-1">
              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={48} height={48} />
              <div>
                <h3 className="text-lg font-semibold text-[#003366] mb-2">On-Site Diagnostics & Tele-Medicine</h3>
                <p className="text-gray-600 text-sm">Delivering advanced tele-diagnostics and smart healthcare through cutting-edge technology.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 flex-1">
              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={48} height={48} />
              <div>
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Innovation And Technology</h3>
                <p className="text-gray-600 text-sm">Delivering advanced tele-diagnostics and smart healthcare through cutting-edge technology.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 flex-1">
              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={48} height={48} />
              <div>
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Innovation And Technology</h3>
                <p className="text-gray-600 text-sm">Delivering advanced tele-diagnostics and smart healthcare through cutting-edge technology.</p>
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
          <div className="flex flex-col space-y-8 h-full">
            <div className="flex items-start gap-4 flex-1">
              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={48} height={48} />
              <div>
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Innovation And Technology</h3>
                <p className="text-gray-600 text-sm">Delivering advanced tele-diagnostics and smart healthcare through cutting-edge technology.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 flex-1">
              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={48} height={48} />
              <div>
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Innovation And Technology</h3>
                <p className="text-gray-600 text-sm">Delivering advanced tele-diagnostics and smart healthcare through cutting-edge technology.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 flex-1">
              <Image src="/icons/anim-4-lgo1.png" alt="Innovation" width={48} height={48} />
              <div>
                <h3 className="text-lg font-semibold text-[#003366] mb-2">Innovation And Technology</h3>
                <p className="text-gray-600 text-sm">Delivering advanced tele-diagnostics and smart healthcare through cutting-edge technology.</p>
              </div>
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
    {/* PARTNER SECTION */}
    <Partner />
  </>
  );
}