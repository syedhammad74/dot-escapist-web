"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Autoplay, Pagination } from "swiper/modules"; // Add Pagination module
import { testimonialData, testimonialList } from "@/constants/testimonials";

// Import Swiper types
import type { Swiper as SwiperType } from "swiper/types";
import RatingStars from "@/components/ui/Ratingstars";

const Testimonials = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay.start();
  };

  return (
    <section
      id="testimonial"
      className="relative py-14 md:py-24 mb-8 md:mb-0 bg-gradient-to-b from-black via-gray-900 to-black text-gray-900"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/testimonials/Element1.png"
          alt=""
          width={500}
          height={500}
          className="absolute top-0 right-0 w-32 opacity-20"
        />
        <Image
          src="/testimonials/Element2.png"
          alt=""
          width={500}
          height={500}
          className="absolute bottom-0 left-0 w-32 opacity-20"
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 xl:px-0">
        <div className="flex flex-col items-center justify-center text-center mb-6 md:mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-blue-600 bg-gray-300 px-3 py-1 gradient-border rounded-full mb-5">
            {testimonialData.sectionHeading}
          </h2>
          <h2 className="text-3xl font-extrabold text-white tracking-tighter sm:text-4xl md:text-5xl">
            {testimonialData.mainHeading}
          </h2>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }} // Custom pagination with bullets
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // Show 2 slides per view for larger screens
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Pagination]} // Add Pagination module
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {testimonialList.flat().map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div
                className="testimonial-card p-6 border border-gray-800 rounded-2xl shadow-md bg-gradient-to-br from-gray-900 to-gray-800 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex items-center text-left mb-6">
                  <div className="mr-4 w-20 h-20">
                    <Image
                      src={testimonial.img}
                      alt={testimonial.name}
                      loading="lazy"
                      width={300}
                      height={300}
                      className="rounded-full border border-gray-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <RatingStars rating={4} color="text-red-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Pagination styling */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #ff7a7a; /* Soft red for bullets */
          opacity: 0.3;
          width: 40px;
          height: 12px;
          border-radius: 50px;
        }
        .swiper-pagination-bullet-active {
          background-color: #ff3b3b; /* Darker red for active state */
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
