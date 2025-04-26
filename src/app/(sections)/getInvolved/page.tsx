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

        {/* Testimonials Section */}
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
                <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
                    <span className="text-[#18A093]">Our</span>{' '}
                    <span className="text-[#003366]">Testimonials</span>
                </h2>
                <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
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
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                            As a gastroenterologist, having quick access to liver function tests, vitals, and previous reports helps me make decisions with greater clarity. The SHM platform makes all of this available in a single interface. It feels organized and efficient, especially during follow-ups and chronic care management.
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
                                <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Sagar P Kabadi</h4>
                                <p className="text-gray-500 text-xs sm:text-sm font-['Montserrat']">Senior Consultant, Medical Gastroenterologist
                                </p>
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
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                            The SHM platform stands out with its ability to organize and present all necessary patient data—especially radiology reports like MRIs and CTs—before I begin my consultation. It brings a lot of clarity to my decision-making and allows me to focus directly on the clinical need.
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
                                <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Pratham R Bysan</h4>
                                <p className="text-gray-500 text-xs sm:text-sm font-['Montserrat']">Consultant Neurosciences</p>
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
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                            In cardiology, speed and accuracy are essential. SHM delivers real-time 12-lead ECGs that are clear and immediate. Combined with vitals and patient history, it gives me all the inputs I need to make confident and timely clinical decisions. It’s an excellent tool for proactive cardiac care.
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
                                <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Sarthak Sahoo</h4>
                                <p className="text-gray-500 text-sm font-['Montserrat']">Senior Consultant, Cardiology</p>
                            </div>
                        </div>
                    </div>
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
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                            SHM has helped me connect with patients across all stages—from fertility counseling to postnatal care. I can easily access hormone profiles, ultrasound reports, and vitals. The digital prescription pad is seamless—I can document symptoms, prescribe medications or tests, and sign everything in one place.
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
                                <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Priyanka Das</h4>
                                <p className="text-gray-500 text-sm font-['Montserrat']">Senior Consultant, Obstetrics & Gynaecology</p>
                            </div>
                        </div>
                    </div>
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
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                            What I value most is the time-saving design. The digital queue, instant patient summaries, and seamless transition to the next case help me respond swiftly. With all reports and vitals ready when I join the call, every second is utilized effectively.
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
                                <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Vijay Kumar K M</h4>
                                <p className="text-gray-500 text-sm font-['Montserrat']">Consultant, Emergency Medicine</p>
                            </div>
                        </div>
                    </div>
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
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                            For surgical follow-ups and cosmetic consultations, SHM gives me everything I need—clinical images, vitals, and case history—well before I begin the consultation. It’s efficient and ensures I can provide precise guidance, even for patients consulting from a distance.
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
                                <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Ramesh K T </h4>
                                <p className="text-gray-500 text-sm font-['Montserrat']">Consultant Plastic & Cosmetic Surgeon</p>
                            </div>
                        </div>
                    </div>
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
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                            I find the SHM platform incredibly useful for reviewing patient X-rays, post-op images, and orthopedic test results. The structured format, combined with real-time vitals and symptom input, makes remote orthopedic evaluations smoother and more accurate.
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
                                <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Avinash Parthasarathy</h4>
                                <p className="text-gray-500 text-sm font-['Montserrat']">Consultant, Orthopaedics</p>
                            </div>
                        </div>
                    </div>
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
                        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-[16px] font-[400] leading-[1.6] sm:leading-[1.4] tracking-[0%] ">
                            In dermatology, image quality is critical. The SHM delivers high-resolution dermatoscope images, along with all relevant patient information in one place. It has made remote consultations feel just as thorough and reliable as in-person visits.
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
                                <h4 className="text-[#003366] font-semibold font-['Montserrat'] text-base sm:text-lg">Dr. Abhiram Rayapati</h4>
                                <p className="text-gray-500 text-sm font-['Montserrat']">Chief Consultant, Dermatology & ENT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);}
