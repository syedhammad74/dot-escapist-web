"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../../public/logo.png";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Contact from "../components/Contact"

// Install modules
SwiperCore.use([Autoplay]);

export default function page() {
  return (
    <div className="relative backdrop-blur-lg bg-black/90 bg-primary text-primary-foreground h-screen flex items-center justify-center overflow-hidden">
      {/* Swiper for continuous scrolling */}
      <div className="relative flex justify-center items-center w-full h-full">
        <Swiper
          spaceBetween={30}
          slidesPerView={1} // Adjust based on how many logos you want to show at once
          loop={true} // Loop the logos infinitely
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            waitForTransition: true,
            speed: 3000, // Controls the speed of scrolling
          }}
          speed={10000} // Controls how fast the slider scrolls
          allowTouchMove={false} // Disable manual swipe to make it auto-scroll only
          className="w-full h-64"
        >
          {/* First logo */}
          <SwiperSlide>
            <div className="w-full h-64 flex items-center justify-center">
              <Image
                src={logo} // Replace with the actual logo path
                alt="Dot Escapist Logo"
                width={2000} // Adjust width based on logo size
                height={500} // Adjust height based on logo size
                className="filter blur-sm brightness-50"
              />
            </div>
          </SwiperSlide>

          {/* Second logo */}
          <SwiperSlide>
            <div className="w-full h-64 flex items-center justify-center">
              <Image
                src={logo} // Replace with the actual logo path
                alt="Dot Escapist Logo"
                width={2000} // Adjust width based on logo size
                height={500} // Adjust height based on logo size
                className="filter blur-sm brightness-50"
              />
            </div>
          </SwiperSlide>

          {/* Add more slides as needed */}
        </Swiper>
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
        {/* <div className="flex justify-center items-center">
          <div className="w-[30rem] h-[42rem] rounded-lg backdrop-blur-lg z-10 bg-white/20"></div>
          <div
            className="w-[30rem] h-[40rem] rounded-lg bg-white transform -translate-x-6" // Adjust this value as needed
          ></div>
        </div> */}
        <Contact />
      </div>
      {/* Blurred Circle */}
      <div className="w-[34rem] h-[34rem] bg-gradient-to-tr from-red-800 via-red-800 to-yellow-400 absolute rounded-full filter blur-md"></div>
    </div>
  );
}
