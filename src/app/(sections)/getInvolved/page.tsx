'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function GetInvolved() {

    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [activeCard, setActiveCard] = useState<string | null>(null);

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
        {/* FIRST SECTION */}
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
                        <span className="text-[#18A093]">Partner. Sponsor. Volunteer</span>{' '}
                        <span className="text-[#003366]">Expand Access to Care.</span>{' '}
                    </h1>
                </div>
            </div>
        </div>

        {/* PARTNERSHIP OPPORTUNITIES SECTION */}
        <div className="relative overflow-hidden bg-white">
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-20 md:py-32">
                <div className="flex flex-wrap gap-8">
                    {/* Partnership Cards - Left Column */}
                    <div className="space-y-6 flex-1 md:max-w-[60%]">
                        {/* Card 1 - Partner with Us */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-start gap-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <Image src="/icons/inv-1-lgo.png" alt="Hospital Icon" width={24} height={24} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-[#333333] mb-2">Partner with Us (For Hospitals & Clinics)</h3>
                                    <p className="text-sm text-gray-600 mb-1">Collaborate to deploy Smart Healthcare Machines.</p>
                                    <p className="text-sm text-gray-600 mb-1">Improve patient engagement and preventive care.</p>
                                    <p className="text-sm text-gray-600">Access our advanced admin software and analytics tools.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 - CSR & Philanthropy */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-start gap-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <Image src="/icons/inv-1-lgo.png" alt="Hospital Icon" width={24} height={24} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-[#333333] mb-2">CSR & Philanthropy (For Corporates & NGOs)</h3>
                                    <p className="text-sm text-gray-600 mb-1">Support impactful healthcare initiatives in underserved communities.</p>
                                    <p className="text-sm text-gray-600 mb-1">Help fund telemedicine access for rural populations and enable health camps, screenings and preventive care programs.</p>
                                    <p className="text-sm text-gray-600">Together, we can extend quality healthcare to those who need it most.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 - Volunteer with Us */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-start gap-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <Image src="/icons/inv-1-lgo.png" alt="Hospital Icon" width={24} height={24} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-[#333333] mb-2">Volunteer with Us</h3>
                                    <p className="text-sm text-gray-600 mb-1">Join us in community outreach, health camps and awareness drives — your time and skills can make a real difference. Whether it&apos;s in healthcare, technology or operations, your contribution helps bring quality care closer to those who need it most.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 - Join Our Team */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-start gap-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <Image src="/icons/inv-1-lgo.png" alt="Hospital Icon" width={24} height={24} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-[#333333] mb-2">Join Our Team (For Job Seekers & Interns)</h3>
                                    <p className="text-sm text-gray-600">Apply now to contribute to one of India&apos;s most innovative health-tech startups.</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 - Residential Societies */}
                        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-start gap-4">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full">
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        <Image src="/icons/inv-1-lgo.png" alt="Hospital Icon" width={24} height={24} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-[#333333] mb-2">Residential Societies & IT Parks</h3>
                                    <p className="text-sm text-gray-600">We work with residential societies and IT parks to bring preventive healthcare at doorstep — through on-site diagnostics, tele-consultations and wellness programs in partnership with leading hospitals and NGOs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#003366] mb-3 sm:mb-4 md:mb-5 lg:mb-6">Get Involved Now</h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-7 lg:mb-8">Fill-in your details here and our team will get in touch with you shortly.</p>

                        <form className="space-y-4">
                            {/* Contact Method Selection */}
                            <div className="flex items-center gap-6 mb-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="contactMethod" value="phone" className="w-4 h-4 text-[#18A093] border-gray-300 focus:ring-[#18A093]" />
                                    <span className="text-sm text-gray-700">Phone Call</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="contactMethod" value="email" className="w-4 h-4 text-[#18A093] border-gray-300 focus:ring-[#18A093]" />
                                    <span className="text-sm text-gray-700">E-mail</span>
                                </label>
                            </div>

                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="First Name*"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#18A093] focus:border-[#18A093] text-black"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Last Name*"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#18A093] focus:border-[#18A093] text-black"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="Contact Number*"
                                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#18A093] focus:border-[#18A093] text-black pr-12"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#18A093] focus:border-[#18A093] text-black"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Location*"
                                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#18A093] focus:border-[#18A093] text-black"
                                />
                            </div>

                            <div className="relative">
                                <textarea
                                    placeholder="Your Message Here*"
                                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#18A093] focus:border-[#18A093] text-black resize-none h-32"
                                    maxLength={180}
                                    onChange={(e) => {
                                        const counter = document.getElementById('charCounter');
                                        if (counter) counter.textContent = `${e.target.value.length} / 180`;
                                    }}
                                />
                                <div id="charCounter" className="absolute bottom-2 right-3 text-xs text-gray-500">0 / 180</div>
                            </div>
                            <div className='w-full flex flex-row items-center justify-end'>
                                <button
                                    type="submit"
                                    onClick={(e) => e.preventDefault()}
                                    className=" w-full sm:w-[50%] md:w-[50%] lg:w-[30%] bg-[#003366] text-white text-sm py-3 px-6 rounded-lg hover:bg-[#18A093] transition-colors duration-300"
                                >
                                    Send Message
                                </button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Why Join Bridge Healthcare Section */}
        < div className="relative bg-white overflow-hidden" >
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-12 sm:py-20 md:py-32">
                <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] text-center mb-3 sm:mb-4">
                    <span className="text-[#18A093]">Why Join</span>{' '}
                    <span className="text-[#003366]">Bridge Healthcare</span>
                </h2>
                {/* <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
            Be part of a mission to transform healthcare through innovation, accessibility and impact.
          </p> */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-11 relative">
                    {/* Center Logo */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex items-center justify-center z-10 hidden md:flex border-1 border-gray-300 p-2">
                        <div className="w-16 sm:w-20 sm:h-20 md:w-28 md:h-28 flex item-center justify-center">
                            <Image
                                src="/icons/hm-6-img.png"
                                alt="Bridge Healthcare Logo"
                                width={200}
                                height={200}

                            />
                        </div>
                    </div>

                    {/* Service Cards - 1*/}
                    <div
                        onClick={(e) => handleToggle(e, 'card1')}
                        className={`bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-[#0E7280] min-h-[130px]`}
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
                                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-gray-700 font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                                    Comprehensive Healthcare Solutions
                                </h3>
                                <p className="text-[#989898] text-[16px] sm:text-[18px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                                    Delivering real-time diagnostics, preventive care and teleconsultations through a unified platform that ensures end-to-end patient care.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Cards -2 */}
                    <div
                        onClick={(e) => handleToggle(e, 'card2')}
                        className={`bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-[#0E7280] min-h-[130px]`}
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
                                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-gray-700 font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                                    Healthcare Partnership Model
                                </h3>
                                <p className="text-[#989898] text-[16px] sm:text-[18px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                                    Collaborating with hospitals, communities, and institutions to build sustainable, patient-centric healthcare ecosystems.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Cards -3 */}
                    <div
                        onClick={(e) => handleToggle(e, 'card3')}
                        className={`bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-[#0E7280] min-h-[130px]`}
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
                                <h3 className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-gray-700 font-['Montserrat'] group-hover:hidden touch-hover:hidden transition-opacity duration-300">
                                    Innovation & Technology
                                </h3>
                                <p className="text-[#989898] text-[16px] sm:text-[18px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                                    Leveraging advanced medical devices and digital platforms to enhance care delivery, accuracy and accessibility.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Service Cards -4 */}
                    <div
                        onClick={(e) => handleToggle(e, 'card4')}
                        className={`bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-all duration-300 group card-hover 
                  hover:bg-[#0E7280] min-h-[130px]`}
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
                                <p className="text-[#989898] text-[16px] sm:text-[18px] font-[400] leading-[1.6] sm:leading-[1.5] tracking-[0%] group-hover:text-white group-hover:block touch-hover:text-white touch-hover:block hidden transition-opacity duration-300 delay-300">
                                    Designed to expand across geographies—from urban centers to remote areas — while maintaining quality and efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    </>);
}
