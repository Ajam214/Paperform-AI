// src/components/Section6.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";

const team = [
  { name: "Conner Accot", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Gabbi Lugod", image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Will Tat", image: "https://randomuser.me/api/portraits/men/47.jpg" },
  { name: "Andrew Fulton", image: "https://randomuser.me/api/portraits/men/12.jpg" },
  { name: "Teal Marshall", image: "https://randomuser.me/api/portraits/women/19.jpg" },
  { name: "Jenn Robinson", image: "https://randomuser.me/api/portraits/women/62.jpg" },
  { name: "James MacDonald", image: "https://randomuser.me/api/portraits/men/77.jpg" },
  { name: "Jo Roque", image: "https://randomuser.me/api/portraits/women/85.jpg" },
];

export default function Section6() {
  return (
    <section className="bg-[#f5f2e9] py-16 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center">
        Dedicated support, all the time.
      </h2>
      <p className="mt-4 text-center text-gray-600 max-w-2xl">
        Paperform has a team of support experts waiting to assist you. And with
        an average response time of 60 seconds, help is only ever a moment away.
      </p>

      <h3 className="mt-8 mb-6 font-medium text-gray-800">
        Meet our Customer Success team
      </h3>

      {/* Carousel */}
      <div className="w-full max-w-5xl px-6 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {team.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-md flex flex-col items-center p-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
                <span className="mt-4 font-medium text-gray-800">
                  {member.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
