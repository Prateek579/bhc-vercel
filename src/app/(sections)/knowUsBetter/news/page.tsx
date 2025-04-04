'use client';

import Partner from '@/app/components/Partner';
import Image from 'next/image';
import React, { useState } from 'react';

export default function News() {
    const [activeTab, setActiveTab] = useState('NEWS');

    const tabContent = {
        NEWS: Array(9).fill({
            image: "/icons/ns-2-img.png",
            title: "Revolutionizing Healthcare with Smart Diagnostics",
            description: "Smart Healthcare Machines enable real-time monitoring, remote consultations.",
            date: "March 11 2025",
            location: "Murshidapur"
        }),
        BLOGS: Array(9).fill({
            image: "/icons/ns-2-img2.png",
            title: "The Future of Telemedicine",
            description: "Exploring how telemedicine is transforming healthcare delivery worldwide.",
            date: "March 15 2025",
            location: "Online"
        }),
        ACHIEVEMENTS: Array(9).fill({
            image: "/icons/ns-2-img3.png",
            title: "Bridge Healthcare Wins Innovation Award",
            description: "Recognized for outstanding contributions to healthcare technology.",
            date: "March 20 2025",
            location: "New Delhi"
        })
    };
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
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[700] font-['Montserrat'] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-4 sm:mb-6">
                            Latest Highlights &
                            <br />
                            Achievements
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            Providing immediate access to healthcare, empowering individuals and communities to lead healthier lives.
                        </p>
                    </div>
                </div>
            </div>

            {/* SECOND SECTION */}
            <div className="relative bg-white overflow-hidden">
                <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-12 sm:py-16 md:py-20 lg:py-32">
                    <div className="flex w-full justify-center mb-8 sm:mb-10 lg:mb-12">
                        <div className="w-full flex flex-row items-center justify-between">
                            <button
                                onClick={() => setActiveTab('NEWS')}
                                className={`px-6 sm:px-8 lg:px-12 py-2 sm:py-2.5 text-sm sm:text-base lg:text-lg font-medium text-[#1A1A1A] bg-white font-bold leading-[100%] text-center align-middle ${activeTab === 'NEWS' ? 'border-b-2 border-black' : ''}`}
                            >
                                NEWS
                            </button>
                            <button
                                onClick={() => setActiveTab('BLOGS')}
                                className={`px-6 sm:px-8 lg:px-12 py-2 sm:py-2.5 text-sm sm:text-base lg:text-lg font-medium text-[#1A1A1A] bg-white font-bold leading-[100%] text-center align-middle ${activeTab === 'BLOGS' ? 'border-b-2 border-black' : ''}`}
                            >
                                BLOGS
                            </button>
                            <button
                                onClick={() => setActiveTab('ACHIEVEMENTS')}
                                className={`px-6 sm:px-8 lg:px-12 py-2 sm:py-2.5 text-sm sm:text-base lg:text-lg font-medium text-[#1A1A1A] bg-white font-bold leading-[100%] text-center align-middle ${activeTab === 'ACHIEVEMENTS' ? 'border-b-2 border-black' : ''}`}
                            >
                                ACHIEVEMENTS
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                        {tabContent[activeTab as keyof typeof tabContent].map((item: { image: string; title: string; description: string; date: string; location: string; }, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <div className="relative h-40 sm:h-44 lg:h-48">
                                    <Image
                                        src={item.image}
                                        alt="Healthcare news"
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="p-4 sm:p-5 lg:p-6">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center text-xs sm:text-sm text-gray-500">
                                        <span>{item.date}</span>
                                        <span className="mx-2">|</span>
                                        <span>{item.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* OUR PARTNER */}
            <Partner />
        </>
    );
}