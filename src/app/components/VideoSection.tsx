"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const VideoSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const videoId = "3KPxicLpUvQ";
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <X className="w-5 h-5" />
              </button>

              {/* YouTube Embed */}
              <iframe
                src={`${videoUrl}?autoplay=1&rel=0`}
                title="ICS Platform Overview"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#DAF1DE] via-white to-[#DAF1DE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <motion.div
              className="mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-primary mb-4">
                See ICS in Action
              </h2>
              <p className="text-lg sm:text-xl text-forest-primary/80 max-w-2xl mx-auto">
                Watch how our platform transforms precast construction
                management in just 2 minutes
              </p>
            </motion.div>

            {/* Video Preview Card */}
            <motion.div
              className="relative group cursor-pointer"
              onClick={() => setIsVideoOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Video Thumbnail */}
              <div className="relative w-full max-w-3xl mx-auto aspect-video bg-gradient-to-br from-forest-sage/20 to-forest-primary/10 rounded-2xl overflow-hidden border border-forest-sage/30 shadow-xl">
                {/* YouTube Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt="ICS Platform Overview Video"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to medium quality if maxresdefault doesn't exist
                    e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-forest-primary ml-1" />
                  </motion.div>
                </div>

                {/* Video Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                  2:00
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button
                onClick={() => setIsVideoOpen(true)}
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-forest-primary text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-forest-dark hover:scale-105 ring-2 ring-forest-primary/20 hover:ring-forest-primary/40 text-sm sm:text-base"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Watch Full Video
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  window.open(`https://youtu.be/${videoId}`, "_blank")
                }
                className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-forest-primary text-forest-primary font-semibold rounded-2xl hover:bg-forest-primary hover:text-white transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm text-sm sm:text-base"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Watch on YouTube
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 mt-8 sm:mt-12 text-sm text-forest-primary/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-forest-sage rounded-full"></div>
                <span>2-minute overview</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-forest-sage rounded-full"></div>
                <span>Real platform demo</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-forest-sage rounded-full"></div>
                <span>No sales pitch</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
