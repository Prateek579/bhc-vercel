"use client"


const Partner = () => {
    return (
        <div className = "relative  overflow-hidden max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-white" >
            <div className="mx-auto p-6 sm:p-8 lg:p-12 bg-gradient-to-r from-[#18A093] to-[#003366] rounded-xl">
                <div className="text-center text-white space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-['Montserrat'] leading-tight tracking-tight text-[#F4F0E3]">Explore Partnership with Us</h2>
                    <p className="text-sm sm:text-base lg:text-lg font-normal font-['Montserrat'] leading-relaxed tracking-normal text-[#F4F0E3] max-w-3xl mx-auto">
                        Whether you are Healthcare Professional, a Clinic or someone
                        Passionate about improving Healthcare access, there&apos;s a place for you
                        at Bridge Healthcare.
                    </p>
                    <div className="mt-6 sm:mt-8 lg:mt-10">
                    <button onClick={(e) => e.preventDefault()}
                            className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-[#003366] rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 text-sm sm:text-base"
                        >
                            Get Involved
                        </button>
                    </div>
                </div>
            </div>
    </div >
    )
}

export default Partner;