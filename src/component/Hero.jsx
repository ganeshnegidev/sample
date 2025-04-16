import React from 'react'

export default function Hero() {
  return (
    <>
        <section
         class="bg-[url('/images/bgimage.png')] bg-center h-40 py-6 text-center relative"
        >
        <div class="absolute inset-0 z-0"></div>
        <div class="relative z-10">
            <h1 class="text-5xl font-medium text-[#0F2137] font-inter mb-6">
                Why Choose Us
            </h1>
            <div class="mt-10 absolute -mx-26 inline-flex items-center gap-2 bg-[#F94F46] text-white px-5 py-2 rounded-md text-lg font-medium">
                <a href="/" class="hover:underline">Home</a>
                <span>›</span>
                <span>Why Choose Us</span>
            </div>
        </div>
        </section>
    </>
  )
}
