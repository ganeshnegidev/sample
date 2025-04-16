import React from 'react'

export default function Medium() {
  return (
    <>
       <section className="bg-white py-16">
        <div className="px-6 md:px-10 flex flex-col-reverse md:flex-row items-center gap-10">
            
        
            <div className="md:w-1/2 text-left">
            
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2137] leading-snug font-inter mb-4">
                Why a Manually Crafted Resume
                <br />
                <span className="text-[#F94F46]">Beats AI</span> and Templates Every Time
            </h2>

            
            <p className="text-[#0F2137] font-semibold italic mb-4 text-base md:text-lg">
                If Your Resume Sounds Like Everyone Else’s, It Won’t Get You Anywhere.
            </p>

            
            <p className="text-[#343D48] text-base leading-relaxed max-w-xl">
                In today’s hyper-competitive job market, using an AI tool or downloading a
                generic template might seem like the easy fix. But here’s the truth: AI doesn’t
                understand your career, your achievements, or how hiring really works. And templates?
                They’re built for speed—not strategy.
            </p>
            </div>

            
            <div className="md:w-1/2 flex justify-center">
            <img
                src="/images/image 1.png"
                alt="Illustration showing AI and resume"
                className="w-full max-w-sm md:max-w-md"
            />
            </div>
        </div>
     </section>
    </>
  )
}
