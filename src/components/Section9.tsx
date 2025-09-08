// components/Section9.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

export default function Section9() {
  const testimonials = [
    {
      text: "Paperform seamlessly matches the look and feel of my existing landing pages...",
      name: "Kassy Pajarillo",
      title: "kassypajarillo.com",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "The most significant benefit of using Paperform has been the possibility to innovate quickly...",
      name: "Garbiñe Hoyo Martínez",
      title: "ReasonWhy",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      text: "With Paperform, my forms look like they’re part of the website...",
      name: "John Doe",
      title: "example.com",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-light mb-12">
          We&apos;re in good form... just ask our customers
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.2}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, // 5 sec per slide
            disableOnInteraction: false, // keeps autoplay even after swipe
          }}
          loop={true} // infinite loop
          breakpoints={{
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 1.8 },
          }}
          className="pb-10"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#f5ded6] rounded-xl p-12 text-center mx-auto w-[500px] h-[350px] flex flex-col justify-between">
                <p className="text-lg italic">“{t.text}”</p>
                <div className="flex flex-col items-center mt-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full mb-3"
                  />
                  <h4 className="font-medium">{t.name}</h4>
                  <p className="text-gray-600 text-sm">{t.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
