// src/components/SectionHero.tsx
"use client";
import React from "react";

const SectionHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#f5f2eb] flex items-center justify-center overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] flex">
        <div className="w-1/2 bg-[#324a4a] clip-left" />
        <div className="w-1/2 bg-[#ddab9f] clip-right" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl px-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-medium text-black leading-snug mb-6">
          Discover the power of <br /> Paperform for yourself.
        </h1>
        <button className="bg-[#f8c947] hover:bg-[#e3b930] text-black font-medium text-lg px-6 py-3 rounded-full shadow-md transition">
          Get your 7 day unrestricted trial
        </button>
      </div>

      {/* Extra space for bottom shapes */}
      <div className="h-20 w-full"></div>
    </section>
  );
};

export default SectionHero;
