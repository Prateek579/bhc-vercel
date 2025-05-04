"use client"

import React from "react";
import Link from 'next/link';

const Partner = () => {
    return (
        <div className="relative  overflow-hidden  mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white" >
            <div className="mx-auto p-3 sm:p-4 lg:p-6 bg-gradient-to-r from-[#18A093] to-[#003366] rounded-xl">
                <div className="text-center text-white space-y-4 sm:space-y-6 flex flex-col items-center justify-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Montserrat'] leading-tight tracking-tight text-[#F4F0E3]">Join Us in Shaping the Future of Healthcare</h2>
                    <p className="text-sm sm:text-base lg:text-lg font-normal font-['Montserrat'] leading-relaxed tracking-normal text-[#F4F0E3] w-[90%] md:w-[80%]">
                        Whether you&apos;re a healthcare professional, clinic founder or visionary changemaker,
                        <br />
                        Bridge Healthcare welcomes you to be part of a movement transforming healthcare access for all.
                    </p>
                    <div className="mt-3 sm:mt-3 lg:mt-4">
                        <Link href="/getInvolved"
                            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#003366] rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
                        >
                            Get Involved
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Partner;