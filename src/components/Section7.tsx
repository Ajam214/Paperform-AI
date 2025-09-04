// src/components/Section7.tsx
"use client";
import React, { useEffect, useState } from "react";

// Counter hook for animation
const useCounter = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);

  return Math.floor(count);
};

const stats = [
  { number: 92372001, label: "submissions" },
  { number: 731916, label: "forms" },
  { number: 173901139, label: "in Stripe Connect payments processed", isCurrency: true },
];

const Section7 = () => {
  return (
    <div className="w-full">
      {/* 🔵 First Section: Blue Hero */}
      <section className="w-full min-h-screen bg-[#002b3a] flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 max-w-6xl px-6">
          {/* Logo / Icon */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-60 md:h-60 bg-white flex items-center justify-center rotate-45">
              <div className="w-32 h-32 md:w-44 md:h-44 bg-[#002b3a] rotate-45 flex items-center justify-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rotate-45" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left text-white">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Your digital Swiss Army Knife.
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Paperform does everything short of open bottles.
            </p>
          </div>
        </div>
      </section>

      {/* 🟡 Second Section: Beige Stats */}
      <section className="w-full min-h-screen bg-[#f5f2eb] flex items-center justify-center py-20 px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((item, idx) => {
            const count = useCounter(item.number, 2500);

            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm flex flex-col items-center justify-center text-center h-64"
              >
                <h3 className="text-3xl md:text-4xl font-medium text-black">
                  {item.isCurrency
                    ? `$${count.toLocaleString()}`
                    : count.toLocaleString()}
                </h3>
                <p className="mt-4 text-lg text-gray-700 max-w-[250px]">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Section7;
