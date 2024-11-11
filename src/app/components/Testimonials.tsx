"use client";

import { useState, useRef, Fragment } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, Transition } from "@headlessui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const testimonials = [
  {
    quote:
      "The Dotescapists has become my not-so-secret weapon in the world of marketing.",
    name: "John Reynolds",
    title: "Marketing Maven at Peak Promotions",
    avatar: "/hammadbhai.png",
    rating: 5,
  },
  {
    quote:
      "Their expertise in cloud migrations was like a breath of fresh air for our tech ecosystem.",
    name: "Sara Williams",
    title: "Creative Director at Innovate Agency",
    avatar: "/bilalbhai.png",
    rating: 5,
  },
  {
    quote:
      "Using Power AI has streamlined our design process. The AI-generated images are stunning and have saved us countless hours.",
    name: "Michael Chen",
    title: "Lead Designer at PixelPerfect",
    avatar: "/hammadbhai.png",
    rating: 4,
  },
  {
    quote:
      "Dot Escapists helped us escape from outdated infrastructure, bringing us cutting-edge solutions that transformed our operations.",
    name: "Emily Clarkson",
    title: "Creative Strategist at Visionary Media",
    avatar: "/avatar1.png",
    rating: 5,
  },
  {
    quote:
      "Thanks to Dotescapist, we can now generate high-quality scripts on the web, which helps our social media campaigns immensely.",
    name: "David Kim",
    title: "Social Media Manager at Click Growth",
    avatar: "/avatar2.png",
    rating: 4,
  },
  {
    quote:
      "Dotescapist innovative features have given us a competitive edge in our industry. It's an indispensable tool for our team.",
    name: "Alex Thompson",
    title: "CTO at TechInnovate",
    avatar: "/avatar3.png",
    rating: 5,
  },
  {
    quote:
      "The customer support team at Dotescapist is exceptional. They've been incredibly helpful in optimizing our use of the platform.",
    name: "Rachel Lee",
    title: "Customer Success Manager at GrowthBoost",
    avatar: "/avatar4.png",
    rating: 4,
  },
];

const HexagonBackground = ({ className = "" }) => (
  <div className={cn("absolute inset-0 z-0 opacity-10", className)}>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="hexagons"
          width="50"
          height="43.4"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(2) rotate(15)"
        >
          <path
            d="M25 0L50 14.4v28.9L25 57.7L0 43.3V14.4z"
            fill="none"
            stroke="#ff7700"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  </div>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4 md:w-5 md:h-5 transition-colors duration-200",
          i < rating ? "text-yellow-400 fill-current" : "text-gray-500"
        )}
      />
    ))}
  </div>
);

const TestimonialCard = ({
  review,
}: {
  review: {
    quote: string;
    name: string;
    title: string;
    avatar: string;
    rating: number;
  };
}) => (
  <div className="bg-gray-900 rounded-lg p-8 h-72 flex flex-col justify-between border border-gray-800 transition-all duration-300 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10">
    <div className="flex flex-col h-full">
      <div className="flex items-center mb-6">
        <div className="relative w-16 h-16">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="rounded-full border-2 border-orange-500 object-cover"
          />
        </div>
        <div className="ml-4">
          <p className="text-lg font-semibold text-white">{review.name}</p>
          <p className="text-sm text-gray-400">{review.title}</p>
        </div>
      </div>
      <StarRating rating={review.rating} />
      <p className="text-base text-gray-300 mt-4 flex-grow">{review.quote}</p>
    </div>
  </div>
);

export default function ResponsiveTestimonialSection() {
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [reviews, setReviews] = useState(testimonials);
  const [userName, setUserName] = useState("");
  const [userQuote, setUserQuote] = useState("");
  const [userRating, setUserRating] = useState(5);
  const swiperRef = useRef<any>(null);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName && userQuote) {
      const newReview = {
        quote: userQuote,
        name: userName,
        title: "User Review",
        avatar: "/default-avatar.png",
        rating: userRating,
      };
      setReviews([...reviews, newReview]);
      setIsReviewDialogOpen(false);
      setUserName("");
      setUserQuote("");
      setUserRating(5);
    }
  };

  return (
    <section
      id="testimonial"
      className="relative w-full bg-gradient-to-tr from-orange-900 via-gray-900 to-black py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <HexagonBackground />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-10 xs:mb-16">
          {/* Decorative line above the heading */}
          <div className="flex justify-center items-center mb-4">
            <div className="h-[2px] w-12 xs:w-16 md:w-20 lg:w-32 bg-orange-500 rounded-full"></div>
          </div>

          {/* Main heading with serious and impactful effect */}
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Client Testimonials
          </h2>

          {/* Decorative line below the heading */}
          <div className="flex justify-center items-center mt-2 mb-4">
            <div className="h-[2px] w-12 xs:w-16 md:w-20 lg:w-32 bg-orange-500 rounded-full"></div>
          </div>

          <p className="text-sm xs:text-base md:text-lg lg:text-xl text-gray-300 max-w-lg xs:max-w-2xl md:max-w-3xl mx-auto mt-4">
            What Our Clients Say After Their Escape
          </p>
        </div>

        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper w-full max-w-6xl"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="h-auto">
              <TestimonialCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-12 lg:mt-16">
          <Button
            onClick={() => setIsReviewDialogOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl text-base"
          >
            Add Your Review
          </Button>
        </div>
      </div>

      <Transition appear show={isReviewDialogOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={() => setIsReviewDialogOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog
                className="fixed inset-0 bg-black bg-opacity-80 transition-opacity"
                onClose={function (value: boolean): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 border border-gray-700 text-gray-100 rounded-lg shadow-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-semibold leading-6 mb-6"
                >
                  Add Your Review
                </Dialog.Title>
                <form onSubmit={handleReviewSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-base font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base transition-colors duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="rating" className="text-base font-medium">
                      Rating
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => setUserRating(value)}
                          className={cn(
                            "w-10 h-10 transition-all duration-300",
                            userRating >= value
                              ? "text-yellow-400"
                              : "text-gray-500"
                          )}
                        >
                          <Star className="w-8 h-8 fill-current" />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="experience"
                      className="text-base font-medium"
                    >
                      Your Experience
                    </label>
                    <textarea
                      id="experience"
                      value={userQuote}
                      onChange={(e) => setUserQuote(e.target.value)}
                      placeholder="Share your experience with Power AI"
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-base transition-colors duration-200"
                      rows={4}
                    />
                  </div>
                  <div className="flex justify-end gap-4 mt-8">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsReviewDialogOpen(false)}
                      className="text-base border-gray-700 hover:bg-gray-800 transition-colors duration-200"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-base transition-all duration-200"
                    >
                      Submit Review
                    </Button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
}
