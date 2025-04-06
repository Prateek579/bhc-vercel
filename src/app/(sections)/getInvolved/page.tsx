'use client';

import Image from 'next/image';
import React from 'react';

export default function GetInvolved() {
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
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-[700] font-['Montserrat'] leading-[120%] sm:leading-[110%] md:leading-[100%] tracking-[0%] align-middle text-[#1A1A1A] mb-4 sm:mb-6">
                        <span className="text-[#18A093]">Explore</span>{' '}
                        <span className="text-[#003366]">Partnership</span>{' '}
                        <span className="text-[#003366]">Opportunities with Us</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl font-[400] font-['Font family'] leading-[150%] sm:leading-[130%] md:leading-[100%] tracking-[0%] align-middle text-[#555555]">
                        Let&apos;s collaborate to bring accessible, technology-driven healthcare to the communities that need it most.
                    </p>
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

                    {/* Contact Form - Right Column */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex-1 md:max-w-[35%]">
                        <h2 className="text-2xl font-bold text-[#333333] mb-4">Get Involved Now</h2>
                        <p className="text-sm text-gray-600 mb-6">Fill-in your details here and our team will get in touch with you shortly.</p>

                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] text-black"
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] text-black"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] text-black"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] text-black"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] text-black"
                                />
                            </div>

                            <div>
                                <select
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#18A093] appearance-none bg-white text-black"
                                >
                                    <option value="Involved">Ways To Get Involved</option>
                                    <option value="partner">Partner with Us (Hospitals & Clinics)</option>
                                    <option value="csr">CSR & Philanthropy</option>
                                    <option value="volunteer">Volunteer with Us</option>
                                    <option value="career">Join Our Team</option>
                                    <option value="society">Residential Society/IT Park</option>
                                </select>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-8 py-3 bg-[#003366] text-white font-semibold rounded-lg hover:bg-[#002855] transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-20 md:py-32">
                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-[700] font-['Montserrat'] mb-2 sm:mb-4">
                    <span className="text-[#18A093]">Our</span>{' '}
                    <span className="text-[#003366]">Testimonials</span>
                </h2>
                <p className="text-[#555555] text-base sm:text-lg lg:text-[20px] font-['Montserrat'] font-medium mb-6 sm:mb-8 lg:mb-12 max-w-full sm:max-w-[90%] lg:max-w-[80%]">
                    Our impact is reflected in the voices of patients, doctors and public sector leaders who trust us.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {/* Testimonial Card 1 */}
                    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
                        <div className="absolute top-2 left-2">
                            <Image
                                src="/icons/hm-8-img2.png"
                                alt="Quote icon"
                                width={50}
                                height={50}
                                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                            />
                        </div>
                        <p className="text-[#616161] mb-4 sm:mb-6 font-['Montserrat'] text-sm sm:text-base sm:text-base font-[400] leading-[100%] align-middle tracking-[0%]">
                            We understand that injuries and acute pain can happen unexpectedly. Our emergency physiotherapy services are designed to provide prompt.
                        </p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                                <Image
                                    src="/icons/hm-8-img.png"
                                    alt="Jane Smith"
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div>
                                <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Jane Smith</h4>
                                <p className="text-gray-500 text-xs sm:text-sm font-['Montserrat']">Retired Teacher</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
                        <div className="absolute top-2 left-2">
                            <Image
                                src="/icons/hm-8-img2.png"
                                alt="Quote icon"
                                width={50}
                                height={50}
                                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                            />
                        </div>
                        <p className="text-[#616161] mb-4 sm:mb-6 font-['Montserrat'] text-sm sm:text-base sm:text-base font-[400] leading-[100%] align-middle tracking-[0%]">
                            In today&apos;s fast-paced tech world, staying ahead is crucial. Our training programs focus on cutting-edge technologies to enhance your skills.
                        </p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                                <Image
                                    src="/icons/hm-8-img.png"
                                    alt="John Doe"
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div>
                                <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">John Doe</h4>
                                <p className="text-gray-500 text-xs sm:text-sm font-['Montserrat']">Software Engineer</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-lg border border-gray-200 relative flex flex-col justify-around">
                        <div className="absolute top-2 left-2">
                            <Image
                                src="/icons/hm-8-img2.png"
                                alt="Quote icon"
                                width={50}
                                height={50}
                                className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] lg:w-[70px] lg:h-[70px] text-[#18A093]"
                            />
                        </div>
                        <p className="text-[#616161] mb-4 sm:mb-6 font-['Montserrat'] text-sm sm:text-base sm:text-base font-[400] leading-[100%] align-middle tracking-[0%]">
                            Creativity knows no bounds. Our workshops are tailored to inspire and empower aspiring designers to bring their visions to life.
                        </p>
                        <div className="flex items-center">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden mr-3 sm:mr-4">
                                <Image
                                    src="/icons/hm-8-img.png"
                                    alt="Emily Johnson"
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div>
                                <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Emily Johnson</h4>
                                <p className="text-gray-500 text-sm font-['Montserrat']">Graphic Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}