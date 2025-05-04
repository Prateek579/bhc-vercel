'use client';

import Partner from '@/app/components/Partner';
import Image from 'next/image';
import React, { useState } from 'react';

export default function News() {
    const [activeTab, setActiveTab] = useState('NEWS');
    return (
        <>
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
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-[700] font-['Montserrat'] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-4 sm:mb-6">
                            Latest Highlights &
                            <br />
                            Achievements
                        </h1>
                    </div>
                </div>
            </div>

            {/* SECOND SECTION */}
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-12 sm:py-16 md:py-20 lg:py-32">
                    <div className="flex w-full justify-center mb-8 sm:mb-10 lg:mb-12">
                        <div className="w-full flex flex-row items-center justify-between">
                            <button
                                onClick={() => setActiveTab("NEWS")}
                                className={`px-6 sm:px-8 lg:px-12 py-2 sm:py-2.5 text-sm sm:text-base lg:text-lg   bg-white  text-center align-middle  font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] text-[#333333] cursor-pointer ${activeTab === 'NEWS' ? 'border-b-2 border-black' : ''}`}
                            >
                                NEWS
                            </button>
                            <button
                                disabled
                                onClick={() => setActiveTab("BLOGS")}
                                className={`px-6 sm:px-8 lg:px-12 py-2 sm:py-2.5 text-sm sm:text-base lg:text-lg   bg-white  text-center align-middle  font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] text-[#333333] ${activeTab === 'BLOGS' ? 'border-b-2 border-black' : ''}`}
                            >
                                BLOGS
                            </button>
                            <button
                                onClick={() => setActiveTab("ACHIEVEMENTS")}
                                className={`px-6 sm:px-8 lg:px-12 py-2 sm:py-2.5 text-sm sm:text-base lg:text-lg   bg-white  text-center align-middle  font-[700] font-['Montserrat'] leading-[100%] tracking-[0%] text-[#333333] cursor-pointer ${activeTab === 'ACHIEVEMENTS' ? 'border-b-2 border-black' : ''}`}
                            >
                                ACHIEVEMENTS
                            </button>
                        </div>
                    </div>

                    {activeTab === "NEWS" && (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-50 sm:h-70 lg:h-100">
                                <Image
                                    src="/icons/ns-2-img1.png"
                                    alt="Healthcare news"
                                    layout="fill"
                                    objectFit="h-full"
                                />
                            </div>
                            <div className="p-4 sm:p-5 lg:p-6">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    Railways Introduces Affordable Health Testing for Passengers at Stations
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4">
                                    n a significant step towards passenger welfare, the railway authorities have launched an affordable health testing facility at platforms. Passengers can now get tested for conditions like fever and blood-related issues at a minimal cost, with reports available digitally within 8 to 10 minutes. The service currently accommodates 10 to 12 passengers daily.
                                </p>
                                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                                    <span>Jan 20 2024</span>
                                    <span className="mx-2">|</span>
                                    <span>Varanasi</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-40 sm:h-44 lg:h-48">
                                <Image
                                    src="/icons/ns-2-img6.png"
                                    alt="Healthcare news"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4 sm:p-5 lg:p-6">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    With the support of the Ruth Foundation Charitable Trust, India&apos;s first Tele-Diagnostic and Tele-Consultation service is now available at Ashirbad Diagnostics in Nabagram.
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4">
                                    India&apos;s first Tele-Diagnostic and Tele-Consultation service has launched at Ashirbad Diagnostics in Nabagram, West Bengal, with support from the Ruth Foundation Charitable Trust. This initiative brings remote diagnostic and consultation services to underserved communities. By leveraging telemedicine, the project aims to close healthcare gaps in rural areas—marking a major step toward improved medical access across India.
                                </p>
                                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                                    <span>Jan 6 2025</span>
                                    <span className="mx-2">|</span>
                                    <span>Murshidapur</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-40 sm:h-44 lg:h-48">
                                <Image
                                    src="/icons/ns-2-img4.png"
                                    alt="Healthcare news"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4 sm:p-5 lg:p-6">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    MLA Kanai Chandra Mondal Inaugurates Ashirbad Diagnostic Centre in Nabagram
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4">
                                    MLA Kanai Chandra Mondal officially inaugurated the Ashirbad Diagnostic Centre in Nabagram by cutting the ribbon at Ashirbad Pathological Laboratory. People from all religions and local dignitaries attended the event, celebrating the launch of a much-needed healthcare facility in the area. The MLA highlighted how this center will save residents from traveling to Berhampore for routine medical tests.


                                </p>
                                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                                    <span>Feb 15 2025</span>
                                    <span className="mx-2">|</span>
                                    <span>Murshidapur</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-40 sm:h-44 lg:h-48">
                                <Image
                                    src="/icons/ns-2-img5.png"
                                    alt="Healthcare news"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4 sm:p-5 lg:p-6">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    India&apos;s First Tele-Diagnostic and Tele-Consultation Service Now in Nabagram
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4">
                                    With support from the Ruth Foundation Charitable Trust, India&apos;s first Tele-Diagnostic and Tele-Consultation service has been launched at Ashirbad Diagnostic Centre, Nabagram. This initiative aims to provide rural communities with accessible, digital healthcare services. The facility will enable locals to undergo various tests and consult doctors remotely—bridging critical healthcare gaps in the region.


                                </p>
                                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                                    <span>March 15 2025</span>
                                    <span className="mx-2">|</span>
                                    <span>West Bengal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                    {activeTab === "ACHIEVEMENTS" && (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-50 sm:h-70 lg:h-100">
                                <Image
                                    src="/icons/anim-4-img.png"
                                    alt="Healthcare news"
                                    layout="fill"
                                    objectFit="h-full"
                                />
                            </div>
                            <div className="p-4 sm:p-5 lg:p-6">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    Bridge Healthcare Honored with Social Impact Startup Award at Vizha Coimbatore 2023
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4">
                                    Bridge Healthcare has been recognized for its outstanding contributions to society, receiving the prestigious Social Impact Startup award at Vizha Coimbatore 2023. This accolade highlights the organization’s commitment to making healthcare more accessible and impactful, especially in underserved communities. The award underscores Bridge Healthcare’s dedication to driving meaningful change through innovation and compassion in the healthcare sector.
                                </p>
                                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                                    <span>June 26 2023</span>
                                    <span className="mx-2">|</span>
                                    <span>Kambatthattam</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-40 sm:h-44 lg:h-48">
                                <Image
                                    src="/icons/hm-1-sl-3-img.png"
                                    alt="Healthcare news"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4 sm:p-5 lg:p-6">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                    Bridge Healthcare Named Promising Healthcare Startup by Tamil Nadu Govt under TANSEED 4.0
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4">
                                    Bridge Healthcare was recognized by the Government of Tamil Nadu as a promising healthcare startup under the TANSEED 4.0 program. This honor highlights the startup’s innovative efforts in improving healthcare access and delivery.
                                </p>
                                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                                    <span>Jan 1 2023</span>
                                    <span className="mx-2">|</span>
                                    <span>Murshidapur</span>
                                </div>
                            </div>
                        </div>

                    </div>
                    )}


                </div>
            </div>
            {/* OUR PARTNER */}
            <Partner />
        </>
    );
}
