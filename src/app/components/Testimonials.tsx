"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Intersection Observer Hook for the animation trigger
const useOnScreen = (ref: React.RefObject<HTMLElement>): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

// Testimonial Data
const testimonials = [
  {
    quote:
      "The AI Image Generator has become my not-so-secret weapon in the world of marketing. It's a game-changer for creating captivating visuals that leave a lasting impression on our audience.",
    name: "John Reynolds",
    title: "Marketing Maven at Peak Promotions",
    img: "/placeholder.svg",
  },
  {
    quote:
      "Power AI has revolutionized how we approach creative projects. The flexibility and quality of the images generated have significantly improved our workflow.",
    name: "Sara Williams",
    title: "Creative Director at Innovate Agency",
    img: "/placeholder2.svg",
  },
  {
    quote:
      "Using Power AI has streamlined our design process. The AI-generated images are stunning and have saved us countless hours.",
    name: "Michael Chen",
    title: "Lead Designer at PixelPerfect",
    img: "/placeholder3.svg",
  },
];

// Hexagonal Pattern Component for subtle background
// Hexagonal Pattern Component for subtle background
const HexagonBackground = ({ className = "" }: { className?: string }) => (
  <div className={`absolute inset-0 z-0 opacity-20 ${className}`}>
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


// Main Testimonials Section Component
const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const hexGridRef = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(hexGridRef);

  // Trigger hexagonal grid animation when it enters the viewport
  useEffect(() => {
    if (isVisible) {
      const hexagons = document.querySelectorAll(".hexagon");
      hexagons.forEach((hexagon: any, index: number) => {
        setTimeout(() => {
          hexagon.classList.add("opacity-100", "scale-100");
        }, index * 100); // Staggered animation for hexagons
      });
    }
  }, [isVisible]);

  // Auto-slide logic for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={hexGridRef}
      className="relative w-full h-screen bg-gradient-to-tr from-orange-900 via-gray-900 to-black py-24 overflow-hidden flex items-center justify-center"
    >
      {/* Hexagonal grid background */}
      <HexagonBackground className="top-0 left-0 w-1/3 h-1/3" />
      <HexagonBackground className="bottom-0 top-[80vh] left-[70%] h-full" />

      <div className="container relative z-10 mx-4 sm:mx-8 md:mx-16 px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Testimonial Text */}
          <div className="space-y-8 flex items-start justify-start flex-col">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-xs font-semibold tracking-wider uppercase text-gray-300 border-l-4 pl-3 mb-4 border-green-400"
            >
              Testimonials
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-50 leading-tight"
            >
              What Our Users Say About Power AI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
              className="text-lg text-gray-300 max-w-xl"
            >
              Discover how Power AI has transformed creative projects for our
              users, enhancing workflows with the power of AI-generated visuals.
            </motion.p>

            <div className="flex items-center space-x-2 pb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current transition-transform duration-200 hover:scale-110"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <div className="w-full max-w-md h-48">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="text-base sm:text-lg font-medium leading-relaxed text-gray-200 italic border-l-4 border-green-500 pl-4"
                >
                  "{testimonials[activeTestimonial].quote}"
                </motion.blockquote>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="space-y-1 mt-4"
                >
                  <p className="text-lg font-semibold text-gray-50">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonials[activeTestimonial].title}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-square w-[50vh] max-w-sm mx-20 lg:max-w-lg overflow-hidden shadow-lg rounded-lg group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-700"
              >
                <img
                  src={testimonials[activeTestimonial].img}
                  alt="Power AI Visualization"
                  className="w-full h-full object-center transition-transform duration-1000 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">
                    AI-Generated Masterpiece
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Created using Power AI's cutting-edge technology
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex space-x-2">
            {[...Array(testimonials.length)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none ${
                  index === activeTestimonial
                    ? "bg-green-500 border-2 border-green-400 scale-125"
                    : "bg-gray-500 hover:bg-green-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-gray-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
