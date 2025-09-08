// src/components/Section8.tsx
"use client";
import React from "react";

const Section8 = () => {
  return (
    <section className="relative w-screen h-screen bg-[#f6f4ef] overflow-hidden">
      {/* Bottom background bars */}
      <div className="absolute bottom-0 left-0 w-full h-28 flex">
        <div className="w-2/3 bg-[#4a5b56]"></div>
        <div className="w-1/3 bg-[#09293d] clip-triangle"></div>
      </div>

      {/* Right angled shape */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[#e6c1ac] clip-slant"></div>

      {/* Text & Button aligned left */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col justify-center h-full">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-black leading-snug">
            Discover the power of Paperform for yourself.
          </h2>

          <button className="mt-8 bg-[#facc15] text-black font-medium px-8 py-4 rounded-full shadow hover:bg-yellow-400 transition">
            Get your 7 day unrestricted trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section8;
