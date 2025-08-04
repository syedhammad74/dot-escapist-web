"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, ExternalLink, Maximize2 } from "lucide-react";

const VideoSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  // S3 video URL
  const videoUrl = "https://11propbucket.s3.us-east-1.amazonaws.com/Screen+Recording+2025-07-30+at+00.26.00.mov";
  const videoThumbnail = `https://img.youtube.com/vi/3KPxicLpUvQ/maxresdefault.jpg`; // Keep the YouTube thumbnail for now

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  const handleExpandVideo = () => {
    setIsVideoOpen(true);
  };

  return (
    <>
      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>

              {/* HTML5 Video Player */}
              <video
                src={videoUrl}
                className="w-full h-full object-cover"
                controls
                autoPlay
                playsInline
                preload="metadata"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                }}
              >
                <p>Your browser doesn't support HTML5 video. Download the video <a href={videoUrl}>here</a>.</p>
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Section */}
      <section
        id="video-section"
        className="hidden md:block py-4 sm:py-6 lg:py-8 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#8EB69B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#235347] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <motion.div
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-[#8EB69B]/20 rounded-full px-4 py-2 text-sm font-medium text-[#235347] mb-6">
                <Play className="w-4 h-4 text-[#8EB69B]" />
                <span>Platform Demo</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#235347] mb-4 leading-tight">
                See ICS in Action
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-[#235347]/80 max-w-3xl mx-auto leading-relaxed">
                Watch how our platform transforms precast construction
                management in just 2 minutes
              </p>
            </motion.div>

            {/* Video Player Block */}
            <motion.div
              className="relative group mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Video Container */}
              <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#8EB69B]/30 shadow-2xl">
                {!isVideoPlaying ? (
                  <>
                    {/* Video Thumbnail */}
                    <img
                      src={videoThumbnail}
                      alt="ICS Platform Overview Video"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/3KPxicLpUvQ/hqdefault.jpg`;
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        onClick={handlePlayVideo}
                        className="relative group/play"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Pulse Ring */}
                        <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 bg-white/20 rounded-full animate-ping"></div>

                        {/* Main Play Button */}
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover/play:shadow-3xl transition-all duration-300 group-hover/play:bg-white border-2 border-white/20">
                          <Play className="w-8 h-8 sm:w-10 sm:h-10 text-[#235347] ml-1 transition-colors duration-300" />
                        </div>
                      </motion.button>
                    </div>

                    {/* Video Info */}
                    <div className="absolute bottom-4 left-4 bg-black/80 text-white px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-sm border border-white/10">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span>Live Demo • 2:00</span>
                      </div>
                    </div>

                    {/* Quality Badge */}
                    <div className="absolute bottom-4 right-4 bg-white/90 text-[#235347] px-3 py-2 rounded-xl text-sm font-semibold backdrop-blur-sm">
                      HD
                    </div>
                  </>
                ) : (
                  <>
                    {/* HTML5 Video Player */}
                    <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden">
                      <video
                        src={videoUrl}
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        playsInline
                        preload="metadata"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "inherit",
                        }}
                      >
                        <p>Your browser doesn't support HTML5 video. Download the video <a href={videoUrl}>here</a>.</p>
                      </video>
                    </div>

                    {/* Expand Button */}
                    <motion.button
                      onClick={handleExpandVideo}
                      className="absolute top-4 right-4 w-10 h-10 bg-black/70 hover:bg-black/90 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm border border-white/20 z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Expand to fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </motion.button>
                  </>
                )}
              </div>

              {/* Modern Video Controls Bar */}
              {isVideoPlaying && (
                <motion.div
                  className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md border border-[#8EB69B]/30 rounded-2xl px-6 py-3 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-4 text-sm text-[#235347]">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium">Now Playing</span>
                    </div>
                    <div className="w-px h-4 bg-[#8EB69B]/30"></div>
                    <button
                      onClick={handleExpandVideo}
                      className="flex items-center space-x-2 hover:text-[#8EB69B] transition-colors duration-200"
                    >
                      <Maximize2 className="w-3 h-3" />
                      <span>Fullscreen</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 text-sm text-[#235347]/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#8EB69B] rounded-full"></div>
                <span>2-minute overview</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#8EB69B] rounded-full"></div>
                <span>Real platform demo</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#8EB69B] rounded-full"></div>
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
