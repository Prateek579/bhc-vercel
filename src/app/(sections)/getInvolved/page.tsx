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


        < div className="relative bg-white overflow-hidden" >
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-12 sm:py-20 md:py-32">
                <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
                    <span className="text-[#18A093]">Why Partner</span>{' '}
                    <span className="text-[#003366]">with Us</span>
                </h2>
                <p className="text-[#555555] text-[18px] text-center sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
                    Bridge Healthcare addresses Indi&apos;s most pressing healthcare challenges with tech-enabled, point-of-care solutions.
                    Through Smart Healthcare Machines, Tele-Diagnostics, and local capacity building, your CSR support directly translates to
                    measurable health impact — where it&apos;s needed most.
                </p>
                <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
                    <span className="text-[#18A093] font-['Montserrat']">Where We</span>{' '}
                    <span className="text-[#003366] font-['Montserrat']">Drive Impact</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Impact Card 1 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-3">Improved Access to Quality Healthcare in Underserved Areas</h4>
                        <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg text-gray-600">Our solutions bring diagnostics, consultations, and treatment support to rural and remote regions.</p>
                    </div>

                    {/* Impact Card 2 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-3">Early Detection & Prevention of Chronic Diseases</h4>
                        <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg text-gray-600">We enable timely identification of high-risk conditions through real-time screenings and AI tagging.</p>
                    </div>

                    {/* Impact Card 3 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-3">Digitization of Health Records for Continuity of Care</h4>
                        <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg text-gray-600">Every consultation creates an EHR, empowering patients with longitudinal, portable health data.</p>
                    </div>

                    {/* Impact Card 4 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-3">Healthcare Equity for Women, Elderly & Low-Income Groups</h4>
                        <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg text-gray-600">Inclusive care delivery through community outreach, female health workers, and subsidized models.</p>
                    </div>

                    {/* Impact Card 5 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-3">Community Employment & Skill Development</h4>
                        <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg text-gray-600">Training and employing local nurses and operators to run Smart Healthcare Machines.</p>
                    </div>

                    {/* Impact Card 6 */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="text-lg sm:text-xl lg:text-[20px] font-[600] font-['Montserrat'] leading-[120%] sm:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-3">Data-Driven Public Health Planning</h4>
                        <p className="font-['Montserrat'] text-sm sm:text-base md:text-lg text-gray-600">Improved Access to Quality Healthcare in Underserved Areas Our solutions bring diagnostics, consultations, and treatment support to rural and remote regions.</p>
                    </div>
                </div>
            </div>
        </div >

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

        {/*Aligned with Global & National Priorities*/}
        < div className="relative bg-white overflow-hidden" >
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
                <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
                    <span className="text-[#18A093]">Our Work Aligned with</span>{' '}
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
                <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
                    <span className="text-[#18A093]">Our Work Aligned with</span>{' '}
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


        {/* Why Join Bridge Healthcare Section */}
        < div className="relative bg-white overflow-hidden" >
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-12 sm:py-20 md:py-32">
                <h2 className="text-[25px] sm:text-[38px] md:text-[38px] font-[700] font-['Montserrat'] mb-1 sm:mb-4 text-center">
                    <span className="text-[#18A093]">Why Join</span>{' '}
                    <span className="text-[#003366]">Bridge Healthcare</span>
                </h2>

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
