import React from 'react'

export default function Footer() {
  return (
    <>
      <section className="bg-white py-16 px-4 md:px-10">
      {/* <div className="max-w-7xl mx-auto"> */}

      <div className="bg-[#F94F46] rounded-[24px] px-6 md:px-20 py-10 text-center text-white mb-10 h-[350px] flex flex-col items-center gap-6">
        <h2 className="text-4xl font-medium mb-2">
            What You Need Is Strategy, Positioning, And Precision.
        </h2>
        <p className="text-lg tracking-wide text-white/80 font-medium">
            At ATS RESUME, Every Resume Is Crafted By A Seasoned HR Professional Who Understands
        </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-0 -mt-30 mx-10">
        
          <div className="bg-white shadow-md rounded-2xl p-6 text-center flex flex-col items-center -mt-10">
            <img src="/images/image2-1.png" alt="What Recruiters Actually Look For" className="w-64 h-54 object-contain mb-4" />
            <p className="text-lg font-light leading-[30px] text-[#0F2137]">
              What Recruiters <br /> Actually Look For
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center flex flex-col items-center -mt-10">
            <img src="/images/image2-2.png" alt="How Hiring Managers Decide" className="w-40 h-54 object-contain mb-4" />
            <p className="text-lg font-light text-[#0F2137] leading-[30px]">
            How Hiring Managers <br /> Make Decisions In 6 <br /> Seconds Or Less
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center flex flex-col items-center -mt-10">
            <img src="/images/image2-3.png" alt="ATS Ranks Resumes" className="w-40 h-54 object-contain mb-4" />
            <p className="text-lg font-light text-[#0F2137] leading-[30px]">
            How ATS Software Reads <br /> And Ranks Resumes
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 text-center flex flex-col items-center -mt-10">
            <img src="/images/image2-4.png" alt="Impact Statements" className="w-64 h-54 object-contain mb-4" />
            <p className="text-lg font-light text-[#0F2137] leading-[30px]">
            How To Turn Your <br /> Experience Into Value- <br /> Driven Impact Statements
            </p>
          </div>

        </div>
     {/* </div> */}
    </section>
    </>
  )
}
