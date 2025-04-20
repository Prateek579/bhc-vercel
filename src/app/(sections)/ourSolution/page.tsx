'use client';

import Partner from '@/app/components/Partner';
import Image from 'next/image';
import React from 'react';

export default function OurSolution() {
  const [activeFaq, setActiveFaq] = React.useState<string | null>(null);
  const [activeSol, setActiveSol] = React.useState<number | null>(1);
  const [showAllCards, setShowAllCards] = React.useState<boolean>(false);
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
            Making Friendly &
            <br />
            Approachable Care
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-[400] font-['Font family'] leading-[150%] sm:leading-[130%] md:leading-[100%] tracking-[0%] align-middle text-[#555555]">
            One platform for diagnostics, consultations and wellness — built to make healthcare simpler, smarter and truly patient-centered.
          </p>
        </div>
      </div>
    </div>

    {/* SOLUTION SECTION */}
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
          <span className="text-[#18A093]">Our</span>{' '}
          <span className="text-[#003366]">Solution Overview</span>
        </h2>
        <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
          The Smart Healthcare Machine improves healthcare with data-driven accessibility and efficiency.
        </p>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className={`bg-white p-4 sm:p-5 lg:py-6 rounded-lg flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer transition-shadow ${activeSol === 1 && 'border-2 border-gray-300 shadow-sm'}`} onClick={() => setActiveSol(1)}>
              <Image src="/icons/sol-2-lgo1.png"
                alt='heart'
                width={25}
                height={25}
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              <span className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat']">Health Check Up</span>
            </div>
            {activeSol === 1 && <div className="space-y-4 block md:hidden">
              {/* First two cards are always visible */}
              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={35}
                      height={35}
                      className="w-10 h-10 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Body Checkups 30+</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    General health checkups including vitals like BP, SpO₂, heart rate, temperature, ECG, blood sugar, hemoglobin, lipid profile, uric acid, BMI, and body weight analysis.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Cardiac Checkups</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Cardiac checkups through ECG and vital monitoring, helping detect arrhythmias, heart rate issues, and early cardiac risks.
                  </p>
                </div>
              </div>

              {/* Additional cards that show when showAllCards is true */}
              {showAllCards && (
                <>
                  <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                        <Image src="/icons/sol-2-lgo4.png"
                          alt='heart'
                          width={40}
                          height={40}
                          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Diabetes</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        Blood sugar and hemoglobin levels are tested instantly, enabling early detection of diabetes and continuous monitoring for better disease management.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                    <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                        <Image src="/icons/sol-2-lgo4.png"
                          alt='heart'
                          width={40}
                          height={40}
                          className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Regular Checkups</h3>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600">
                        Regular health checkups include vitals, blood tests, ECG, and body composition analysis—supporting early detection, lifestyle tracking, and overall wellness management.
                      </p>
                    </div>
                  </div>
                </>
              )}
              <div className="mt-12">
                <button
                  onClick={() => setShowAllCards(!showAllCards)}
                  className="bg-[#003B87] text-white px-8 py-3 rounded-lg hover:bg-[#002D66] transition-colors"
                >
                  {showAllCards ? 'Show less' : 'Know more'}
                </button>
              </div>
            </div>}


            <div className={`bg-white p-4 sm:p-5 lg:p-6 rounded-lg flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer transition-shadow ${activeSol === 2 && 'border-2 border-gray-300 shadow-sm'}`} onClick={() => setActiveSol(2)}>
              <Image src="/icons/sol-2-lgo5.png"
                alt='heart'
                width={25}
                height={25}
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              <span className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat']">Consultation</span>
            </div>
            {activeSol === 2 && <div className="space-y-4 block md:hidden">
              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={35}
                      height={35}
                      className="w-10 h-10 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Tele-Consultation services</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Patients connect with experienced doctors in real time, receiving personalized, data-backed medical advice along with digital prescriptions and follow-up care.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Real-time Diagnostic interface</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    A real-time diagnostic interface captures and transmits vital health data instantly, enabling doctors to make accurate, informed decisions during live consultations.
                  </p>
                </div>
              </div>

              {showAllCards && (<>
                <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Tele-Digital Stethoscope</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                      The tele-digital stethoscope transmits heart and lung sounds in real time, allowing doctors to perform remote auscultation with clinical precision.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Advance modules</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                      Advanced modules include tools like spirometer, dermatoscope, iris scope, ultrasound, and echocardiogram, enabling comprehensive diagnostics—where doctors can view real-time data remotely for accurate and timely clinical decisions.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Upload Documents</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                      Patients can scan and upload their old medical documents in real time, enabling doctors to gain better context and provide more informed consultations.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Printed Prescription</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                      Prints prescription instantly after consultation, giving patients a clear, physical copy for medications, follow-up, or ongoing treatment.
                    </p>
                  </div>
                </div>
              </>)}
              <div className="mt-12">
                <button
                  onClick={() => setShowAllCards(!showAllCards)}
                  className="bg-[#003B87] text-white px-8 py-3 rounded-lg hover:bg-[#002D66] transition-colors"
                >
                  {showAllCards ? 'Show less' : 'Know more'}
                </button>
              </div>
            </div>
            }

            <div className={`bg-white p-4 sm:p-5 lg:p-6 rounded-lg flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer transition-shadow ${activeSol === 3 && 'border-2 border-gray-300 shadow-md'}`} onClick={() => setActiveSol(3)}>
              <Image src="/icons/sol-2-lgo5.png"
                alt='heart'
                width={25}
                height={25}
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              <span className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat']">Hospital Connecting Service</span>
            </div>
            {activeSol === 3 && <div className="space-y-4 block md:hidden">
              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={35}
                      height={35}
                      className="w-10 h-10 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Hospital Specialists Connectivity</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Doctors from the hospital can consult remotely using the Doctor App, with access to live vitals, ECG, imaging, and patient records—enabling accurate, clinic-quality diagnosis from anywhere..
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Admin Dashboard for Hospital Operations</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Hospitals get access to a centralized admin dashboard to manage patient data, doctor schedules, teleconsultations, follow-ups, and revenue insights.
                  </p>
                </div>
              </div>

              {showAllCards && (<>
                <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Patient Referral & Inflow Support</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                      Patients requiring further diagnosis, treatment, or admission are referred to the hospital
                    </p>
                  </div>
                </div>

                <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Chronic & Preventive Care Program Partnerships</h3>
                    <p className="ttext-sm sm:text-base md:text-lg text-gray-600">
                      Enabling long-term patient engagement through regular checkups, health tracking, and tele-consultations.
                    </p>
                  </div>
                </div>
              </>)}
              <div className="mt-12">
                <button
                  onClick={() => setShowAllCards(!showAllCards)}
                  className="bg-[#003B87] text-white px-8 py-3 rounded-lg hover:bg-[#002D66] transition-colors"
                >
                  {showAllCards ? 'Show less' : 'Know more'}
                </button>
              </div>
            </div>}

            <div className={`bg-white p-4 sm:p-5 lg:p-6 rounded-lg flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer transition-shadow ${activeSol === 4 && 'border-2 border-gray-300 shadow-md'}`} onClick={() => setActiveSol(4)}>
              <Image src="/icons/sol-2-lgo3.png"
                alt='heart'
                width={25}
                height={25}
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              <span className="text-[18px] sm:text-[22px] md:text-[24px] font-[600] leading-[1.2] sm:leading-[24px] tracking-[0%] text-start align-middle capitalize text-[#5A5A5A] font-['Montserrat']">Wellness Programs</span>
            </div>
          </div>
          {activeSol === 4 && <div className="space-y-4 block md:hidden">
            <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={35}
                    height={35}
                    className="w-10 h-10 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Dietary and Lifestyle Counseling</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Personalized dietary and lifestyle counseling improves nutrition, fitness, and chronic disease prevention—helping individuals build healthier, sustainable habits for long-term well-being.
                </p>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Educational Workshops and Resources</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Interactive workshops and resources promote preventive care, healthy habits, and disease awareness for informed community wellness.
                </p>
              </div>
            </div>

            {showAllCards && (<>
              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Tele-Consultations with Specialists</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Tele-consultations with specialists provide personalized guidance on nutrition, fitness, and lifestyle, supporting holistic wellness and preventive healthcare.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Personalized Health Checkups</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Personalized health checkups are tailored to individual needs, offering focused insights for early detection, prevention, and better lifestyle planning.
                  </p>
                </div>
              </div>
            </>)}
            <div className="mt-12">
              <button
                onClick={() => setShowAllCards(!showAllCards)}
                className="bg-[#003B87] text-white px-8 py-3 rounded-lg hover:bg-[#002D66] transition-colors"
              >
                {showAllCards ? 'Show less' : 'Know more'}
              </button>
            </div>
          </div>}

          {activeSol === 1 && <div className="space-y-4 hidden md:block">
            {/* First two cards are always visible */}
            <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={35}
                    height={35}
                    className="w-10 h-10 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Body Checkups 30+</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  General health checkups including vitals like BP, SpO₂, heart rate, temperature, ECG, blood sugar, hemoglobin, lipid profile, uric acid, BMI, and body weight analysis.
                </p>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Cardiac Checkups</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Cardiac checkups through ECG and vital monitoring, helping detect arrhythmias, heart rate issues, and early cardiac risks.
                </p>
              </div>
            </div>

            {/* Additional cards that show when showAllCards is true */}
            {showAllCards && (
              <>
                <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Diabetes</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                      Blood sugar and hemoglobin levels are tested instantly, enabling early detection of diabetes and continuous monitoring for better disease management.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                      <Image src="/icons/sol-2-lgo4.png"
                        alt='heart'
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Regular Checkups</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">
                      Regular health checkups include vitals, blood tests, ECG, and body composition analysis—supporting early detection, lifestyle tracking, and overall wellness management.
                    </p>
                  </div>
                </div>
              </>
            )}
            <div className="mt-12">
              <button
                onClick={() => setShowAllCards(!showAllCards)}
                className="bg-[#003B87] text-white px-8 py-3 rounded-lg hover:bg-[#002D66] transition-colors"
              >
                {showAllCards ? 'Show less' : 'Know more'}
              </button>
            </div>
          </div>}
          {activeSol === 2 && <div className="space-y-4 hidden md:block">
            <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={35}
                    height={35}
                    className="w-10 h-10 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Tele-Consultation services</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Patients connect with experienced doctors in real time, receiving personalized, data-backed medical advice along with digital prescriptions and follow-up care.
                </p>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Real-time Diagnostic interface</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  A real-time diagnostic interface captures and transmits vital health data instantly, enabling doctors to make accurate, informed decisions during live consultations.
                </p>
              </div>
            </div>

            {showAllCards && (<>
              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Tele-Digital Stethoscope</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    The tele-digital stethoscope transmits heart and lung sounds in real time, allowing doctors to perform remote auscultation with clinical precision.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Advance modules</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Advanced modules include tools like spirometer, dermatoscope, iris scope, ultrasound, and echocardiogram, enabling comprehensive diagnostics—where doctors can view real-time data remotely for accurate and timely clinical decisions.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Upload Documents</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Patients can scan and upload their old medical documents in real time, enabling doctors to gain better context and provide more informed consultations.
                  </p>
                </div>
              </div>
              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Printed Prescription</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Prints prescription instantly after consultation, giving patients a clear, physical copy for medications, follow-up, or ongoing treatment.
                  </p>
                </div>
              </div>
            </>)}
            <div className="mt-12">
              <button
                onClick={() => setShowAllCards(!showAllCards)}
                className="bg-[#003B87] text-white px-8 py-3 rounded-lg hover:bg-[#002D66] transition-colors"
              >
                {showAllCards ? 'Show less' : 'Know more'}
              </button>
            </div>
          </div>
          }
          {activeSol === 3 && <div className="space-y-4 hidden md:block">
            <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={35}
                    height={35}
                    className="w-10 h-10 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Hospital Specialists Connectivity</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Doctors from the hospital can consult remotely using the Doctor App, with access to live vitals, ECG, imaging, and patient records—enabling accurate, clinic-quality diagnosis from anywhere..
                </p>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Admin Dashboard for Hospital Operations</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Hospitals get access to a centralized admin dashboard to manage patient data, doctor schedules, teleconsultations, follow-ups, and revenue insights.
                </p>
              </div>
            </div>

            {showAllCards && (<>
              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Patient Referral & Inflow Support</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Patients requiring further diagnosis, treatment, or admission are referred to the hospital
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Chronic & Preventive Care Program Partnerships</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Enabling long-term patient engagement through regular checkups, health tracking, and tele-consultations.
                  </p>
                </div>
              </div>
            </>)}
            <div className="mt-12">
              <button
                onClick={() => setShowAllCards(!showAllCards)}
                className="bg-[#003B87] text-white px-8 py-3 rounded-lg hover:bg-[#002D66] transition-colors"
              >
                {showAllCards ? 'Show less' : 'Know more'}
              </button>
            </div>
          </div>}
          {activeSol === 4 && <div className="space-y-4 hidden md:block">
            <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={35}
                    height={35}
                    className="w-10 h-10 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Dietary and Lifestyle Counseling</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Personalized dietary and lifestyle counseling improves nutrition, fitness, and chronic disease prevention—helping individuals build healthier, sustainable habits for long-term well-being.
                </p>
              </div>
            </div>

            <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                  <Image src="/icons/sol-2-lgo4.png"
                    alt='heart'
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Educational Workshops and Resources</h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  Interactive workshops and resources promote preventive care, healthy habits, and disease awareness for informed community wellness.
                </p>
              </div>
            </div>

            {showAllCards && (<>
              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Tele-Consultations with Specialists</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Tele-consultations with specialists provide personalized guidance on nutrition, fitness, and lifestyle, supporting holistic wellness and preventive healthcare.
                  </p>
                </div>
              </div>

              <div className="bg-white p-3 sm:p-1 lg:p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-start space-y-1 sm:space-y-1 lg:space-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#EBF6FE] rounded-full">
                    <Image src="/icons/sol-2-lgo4.png"
                      alt='heart'
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Personalized Health Checkups</h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Personalized health checkups are tailored to individual needs, offering focused insights for early detection, prevention, and better lifestyle planning.
                  </p>
                </div>
              </div>
            </>)}
            <div className="mt-12">
              <button
                onClick={() => setShowAllCards(!showAllCards)}
                className="bg-[#003B87] text-white px-8 py-3 rounded-lg hover:bg-[#002D66] transition-colors"
              >
                {showAllCards ? 'Show less' : 'Know more'}
              </button>
            </div>
          </div>}
        </div>
      </div>
    </div>
    {/* Departments Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
          <span className="text-[#18A093]">25+</span>{' '}
          <span className="text-[#003366]">Connecting Departments</span>
        </h2>
        <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
          Seamlessly connecting patients to 25+ medical departments for comprehensive, coordinated care.
        </p>
        <div className="pl-2 sm:pl-4 lg:pl-8 overflow-hidden">
          <div className="specialty-cards-container pb-4 sm:pb-5 lg:pb-6 space-x-4 sm:space-x-5 lg:space-x-6">
            {/* First set of cards */}
            {/* Department Cards */}
            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Neuro Science" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center group-hover:text-white">Neurology</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Cardiology" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center group-hover:text-white">Dermatology</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Psychology" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center group-hover:text-white">Radiology</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Dermatology" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-cente group-hover:text-white">Pulmonary medicine</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Orthopedics" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center group-hover:text-white">ENT</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-48 bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Pediatrics" width={40} height={40} />
              </div>
              <h3 className="text-lg text-gray-500 text-center group-hover:text-white">Cardiology</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-48 bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Neurology" width={40} height={40} />
              </div>
              <h3 className="text-lg text-gray-500 text-center group-hover:text-white">Orthopedics</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-48 bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Radiology" width={40} height={40} />
              </div>
              <h3 className="text-lg text-gray-500 text-center group-hover:text-white">Obstetrics & Gynecology </h3>
            </div>

            {/* Duplicate set of cards for continuous scrolling */}
            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Neuro Science" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center group-hover:text-white">Haematology</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Cardiology" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center group-hover:text-white">Family Medicine</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Psychology" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center group-hover:text-white">Psychology</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Dermatology" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center group-hover:text-white">Pediatrics</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-40 sm:w-44 lg:w-48 bg-white p-4 sm:p-5 lg:p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Orthopedics" width={32} height={32} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-base sm:text-lg text-gray-500 text-center group-hover:text-white">Orthopedics</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-48 bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Pediatrics" width={40} height={40} />
              </div>
              <h3 className="text-lg text-gray-500 text-center group-hover:text-white">Endocrinology</h3>
            </div>

            <div className="hover:bg-gradient-to-r hover:from-[rgba(24,160,147,0.7)] hover:via-[rgba(18,131,135,0.7)] hover:via-[rgba(11,100,122,0.7)] hover:via-[rgba(6,80,114,0.7)] hover:to-[rgba(0,51,102,0.7)] group w-48 bg-white p-6 rounded-lg border border-gray-200 flex flex-col items-center space-y-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/icons/sol-3-lgo.png" alt="Neurology" width={40} height={40} />
              </div>
              <h3 className="text-lg text-gray-500 text-center group-hover:text-white">Nutrition & Wellness</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* FAQ Section */}
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-15 lg:px-22 py-10 md:py-15">
        <h2 className="text-[32px] sm:text-[38px] md:text-[42px] font-[700] font-['Montserrat'] mb-3 sm:mb-4">
          <span className="text-[#18A093]">Frequently Asked</span>{' '}
          <span className="text-[#003366]">Questions</span>
        </h2>
        <p className="text-[#555555] text-[18px] sm:text-[22px] md:text-[24px] font-['Montserrat'] font-medium mb-8 sm:mb-12">
          Learn how our solutions bring quality healthcare closer to those who need it most.
        </p>
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          {/* FAQ Items */}
          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq1' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq1' ? null : 'faq1')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6 transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq1' ? 'text-white' : 'text-[#333333]'} `}>How do advanced digital modules support specialists across different departments?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq1' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq1' ? 'max-h-[1000px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg font-['Montserrat'] text-white">Our advanced modules—like the Digital Otoscope, Dermatoscope, Spirometer, Ultrasound, and Iris Scope—enable specialists from ENT, dermatology, pulmonology, maternal health, and ophthalmology to remotely assess patients with high clinical accuracy. These tools provide medical-grade visuals and data, allowing specialists to evaluate conditions as if the patient were in front of them—making multi-specialty care accessible even in remote corners of the country.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq2' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq2' ? null : 'faq2')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq2' ? 'text-white' : 'text-[#333333]'} `}> What kind of diagnostic tests are supported by the Smart Healthcare Machine?
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
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq2' ? 'max-h-[1000px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">The Smart Healthcare Machine supports a comprehensive suite of tests including Blood Sugar, Hemoglobin, Lipid Profile, and Renal Function Test, alongside vital signs like Blood Pressure, SpO₂, Heart Rate, and Temperature. Integrated with 12-lead ECG and a Digital Stethoscope, it offers a strong foundation for cardiac and general medical evaluations. Together, these diagnostics ensure that patients receive timely and accurate care without needing to travel to distant health facilities.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq3' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq3' ? null : 'faq3')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq3' ? 'text-white' : 'text-[#333333]'} `}>How do doctors access real-time diagnostic data during tele-consultations?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq3' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq3' ? 'max-h-[1000px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']"> During tele-consultations, doctors receive live health data, including ECGs, vitals, diagnostic reports, scanned documents, and even real-time auscultation audio from the digital stethoscope. This enables them to make informed decisions with full context, enhancing the accuracy and depth of virtual consultations—especially critical in rural settings with limited access to specialists.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq4' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq4' ? null : 'faq4')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq4' ? 'text-white' : 'text-[#333333]'} `}>Can patients receive their reports and prescriptions instantly?
              </span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq4' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq4' ? 'max-h-[1000px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']">
                Yes. Once the consultation is complete, patients receive printed copies of their reports and prescriptions on the spot via the machine’s integrated printer. All data is also securely stored in their digital health profile, making future follow-ups and continuity of care seamless and accessible—even if the patient has never had a medical record before.</p>
            </div>
          </div>

          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq5' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq5' ? null : 'faq5')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq5' ? 'text-white' : 'text-[#333333]'} `}> What is Bridge Healthcare’s Hospital Connecting Service and how does it work?</span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq5' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq5' ? 'max-h-[1000px] py-3 sm:py-4 lg:py-6' : 'max-h-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg font-['Montserrat'] text-white">Our Hospital Connecting Service bridges the gap between rural patients and advanced hospital care. Through our Smart Healthcare Machines and nurse-led operations, we capture diagnostic data and connect patients with specialists from partner hospitals in real time. If a case requires further intervention, our platform facilitates digital referrals, document transfer, and even hospital appointment bookings—ensuring smoother transitions from village-level care to secondary or tertiary institutions.
                This model strengthens hospital outreach, enables early case identification, and reduces overcrowding by digitally triaging patients—all while keeping them informed, prepared, and guided through the care journey.</p>
            </div>
          </div>
          <div className={`border border-gray-200 rounded-lg overflow-hidden ${activeFaq === 'faq6' && 'bg-gradient-to-r from-[#18A093] to-[#003366]'}`}>
            <button
              onClick={() => setActiveFaq(activeFaq === 'faq6' ? null : 'faq6')}
              className="w-full flex items-center justify-between p-3 sm:p-4 lg:p-6  transition-colors duration-200"
            >
              <span className={`text-base sm:text-lg lg:text-[20px] font-[500] leading-[100%] tracking-[0%] font-['Montserrat'] ${activeFaq === 'faq6' ? 'text-white' : 'text-[#333333]'} `}> What kind of Wellness Programs does Bridge Healthcare offer?                </span>
              <svg
                className={`w-5 h-5 sm:w-6 sm:h-6 text-[#003366] transform transition-transform duration-200 ${activeFaq === 'faq6' ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`px-3 sm:px-4 lg:px-6 transition-all duration-200 ease-in-out ${activeFaq === 'faq6' ? 'py-3 sm:py-4 lg:py-6' : 'max-h-0 py-0'} overflow-hidden`}>
              <p className="text-sm sm:text-base lg:text-lg text-white font-['Montserrat']"> We offer community-driven Wellness Programs focused on preventive care, lifestyle monitoring, and chronic disease management. These programs are designed to detect risks early and promote healthier habits through periodic checkups, awareness drives, and health tracking via our digital system.
                <br />Wellness modules include:
                <br />1: Hypertension and Diabetes monitoring
                <br />2: Women’s wellness and reproductive health
                <br />3: Elderly care follow-ups
                <br />4: Nutrition and lifestyle guidance
                <br />All data is recorded in patient profiles, enabling long-term care visibility and helping hospitals or NGOs run evidence-based community health interventions.
              </p>
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