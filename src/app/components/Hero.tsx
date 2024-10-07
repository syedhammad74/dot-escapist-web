"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import Image from "next/image";
import logo from "../../../public/logo.png";

// Install Swiper modules


export default function Hero() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-800 opacity-90"></div>

      {/* Continuous Scrolling Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={5000}
          allowTouchMove={false}
          className="w-full h-full"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Dot Escapist Logo"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-5"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero Text and Call to Action */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight text-white shadow-lg hover:opacity-90 transition-opacity duration-700">
          Transforming Digital Innovation
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-300 font-light tracking-wide">
          Shaping the future of web development through cutting-edge solutions
        </p>
        <button className="mt-8 px-8 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 transition-all duration-500 text-white font-semibold rounded-full shadow-xl transform hover:scale-110 focus:ring-4 focus:ring-orange-500 focus:outline-none">
          Discover More
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-[-70px] w-[250px] h-[250px] bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute top-10 left-[-110px] w-[220px] h-[220px] bg-gradient-to-tl from-yellow-400 via-orange-500 to-red-600 rounded-full blur-3xl opacity-70 animate-spin-slow"></div>

      {/* Additional Features */}
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Subtle Glow Effects */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black opacity-50"></div>

      {/* Micro-particle Background */}
      <div className="absolute inset-0 pointer-events-none bg-opacity-10 bg-stars-pattern animate-twinkle"></div>
    </div>
  );
}
