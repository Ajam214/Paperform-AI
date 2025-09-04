"use client";
import Image from "next/image";

export default function VideoSection() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between bg-[#073047] px-4 md:px-16 py-16">
      {/* Left: Logo */}
      <div className="flex-1 flex items-center justify-center mb-8 md:mb-0">
        <Image
          src="/logo-paperform.svg"
          alt="Paperform Logo"
          width={400}
          height={400}
          className="w-72 h-72 md:w-[400px] md:h-[400px]"
          priority
        />
      </div>
      {/* Right: Headline and Subheadline */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight">
          Your digital Swiss<br />Army Knife.
        </h1>
        <p className="mt-6 text-white text-lg md:text-2xl max-w-md">
          Paperform does everything short of open bottles.
        </p>
      </div>
    </section>
  );
}
