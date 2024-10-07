import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

// Custom pagination bullets using TailwindCSS
const CustomPagination = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-14 md:py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
      <div className="container mx-auto max-w-6xl px-4 xl:px-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              Slide 1 Content
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              Slide 2 Content
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              Slide 3 Content
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              Slide 4 Content
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Custom Swiper Pagination styling */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #3b82f6; /* Blue color */
          opacity: 0.3;
          width: 40px;
          height: 12px;
          border-radius: 50px;
        }
        .swiper-pagination-bullet-active {
          background-color: #1e3a8a; /* Darker blue for active state */
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default CustomPagination;
