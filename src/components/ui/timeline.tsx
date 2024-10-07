// Timeline.tsx
"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  date?: string; // Optional date field
  image?: string; // Optional image field
}

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // State to manage the number of visible entries
  const [visibleEntries, setVisibleEntries] = useState(4); // Show initial 4 entries

  // Framer Motion scroll hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animate the timeline line
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Handle Load More
  const handleLoadMore = () => {
    setVisibleEntries((prev) => prev + 4);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white tracking-tight">
            Our Professional Journey
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Explore the milestones we've achieved over the years.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Vertical Line */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] bg-orange-500 origin-top"
          />

          <div className="space-y-16 relative">
            {data.slice(0, visibleEntries).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2 md:px-8">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                    {/* Date */}
                    {item.date && (
                      <p className="text-sm text-orange-500 mb-2">
                        {item.date}
                      </p>
                    )}
                    {/* Title */}
                    <h3 className="text-3xl font-semibold text-white mb-4">
                      {item.title}
                    </h3>
                    {/* Content */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>

                {/* Timeline Indicator */}
                <div className="relative w-10 h-10 bg-gray-900 border-4 border-orange-500 rounded-full flex items-center justify-center z-10 transition-transform transform group-hover:scale-110 group-hover:rotate-45">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                </div>

                {/* Image */}
                {item.image && (
                  <div className="md:w-1/2 md:px-8 mt-6 md:mt-0">
                    <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleEntries < data.length && (
            <div className="flex justify-center mt-16">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-medium rounded-full hover:from-pink-500 hover:to-orange-500 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-[-70px] w-[250px] h-[250px] bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute top-10 left-[-110px] w-[220px] h-[220px] bg-gradient-to-tl from-yellow-400 via-orange-500 to-red-600 rounded-full blur-3xl opacity-70 animate-spin-slow"></div>
    </section>
  );
};

export default Timeline;
