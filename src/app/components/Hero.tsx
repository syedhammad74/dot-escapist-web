"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp, Home, MapPin } from "lucide-react";
import { Container, Grid, Flex, Stack, Center } from "@/components/ui/layout";
import Image from "next/image";

const Hero: React.FC = () => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById("video-demo");
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { 
      value: "500+", 
      label: "Luxury Properties", 
      icon: Home,
      color: "text-[#8EB69B]",
      bgColor: "bg-[#8EB69B]/10"
    },
    { 
      value: "50+", 
      label: "Prime Locations", 
      icon: MapPin,
      color: "text-[#235347]",
      bgColor: "bg-[#235347]/10"
    },
    { 
      value: "98%", 
      label: "Client Satisfaction", 
      icon: Star,
      color: "text-[#8EB69B]",
      bgColor: "bg-[#8EB69B]/10"
    },
    { 
      value: "24/7", 
      label: "Support", 
      icon: Users,
      color: "text-[#235347]",
      bgColor: "bg-[#235347]/10"
    },
  ];

  const features = [
    "Premium locations worldwide",
    "Luxury amenities included",
    "Professional property management",
    "Flexible booking options",
  ];

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#DAF1DE] via-white to-[#DAF1DE] overflow-hidden">
      {/* Perfect Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern bg-[length:20px_20px] opacity-10" />

      {/* Decorative Elements with Mathematical Positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-br from-[#8EB69B]/20 to-[#235347]/20 rounded-full blur-3xl"
          style={{ top: "10%", left: "5%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-br from-[#235347]/15 to-[#8EB69B]/15 rounded-full blur-2xl"
          style={{ top: "20%", right: "10%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-br from-[#8EB69B]/10 to-[#235347]/10 rounded-full blur-3xl"
          style={{ bottom: "15%", left: "15%" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <Container size="xl" className="relative z-10 h-full flex items-center">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between w-full h-full py-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Perfect Content Section - Left Side */}
          <motion.div
            className="flex-1 max-w-2xl lg:max-w-3xl space-y-8 lg:space-y-10"
            variants={itemVariants}
          >
            {/* Luxury Tag */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-[#8EB69B]/20 border border-[#8EB69B]/30 rounded-full"
              variants={itemVariants}
            >
              <Star className="w-4 h-4 text-[#235347] mr-2" />
              <span className="text-sm font-medium text-[#235347]">Luxury Rentals</span>
            </motion.div>

            {/* Perfect Typography Hierarchy */}
            <Stack spacing="lg">
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-balance"
                variants={itemVariants}
              >
                <span className="text-[#0B2B26]">Find Your</span>
                <br />
                <span className="text-[#8EB69B]">Perfect Home</span>
              </motion.h1>

              <motion.p
                className="text-xl sm:text-2xl lg:text-3xl text-[#235347] leading-relaxed max-w-3xl text-balance"
                variants={itemVariants}
              >
                Curated luxury properties for modern living. Minimal, beautiful, and effortless.
              </motion.p>
            </Stack>

            {/* Perfect CTA Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 lg:gap-6"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToVideo}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#8EB69B] text-[#0B2B26] font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#7AA589] hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Explore Properties
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#8EB69B] text-[#8EB69B] font-semibold rounded-2xl hover:bg-[#8EB69B] hover:text-[#0B2B26] transition-all duration-300 hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Perfect Stats Grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center space-y-2 group"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Center>
                    <div className={`flex items-center justify-center w-12 h-12 mx-auto ${stat.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </Center>
                  <div className="text-xl lg:text-2xl font-bold text-[#0B2B26]">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-[#235347] font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Perfect Features List */}
            <motion.div className="pt-4 lg:pt-6" variants={itemVariants}>
              <Grid cols={2} gap="md">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3 group"
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-[#8EB69B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-[#235347] font-medium text-sm lg:text-base">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </Grid>
            </motion.div>
          </motion.div>

          {/* Perfect Visual Section - Right Side */}
          <motion.div
            className="flex-1 w-full max-w-2xl lg:max-w-none mt-8 lg:mt-0 lg:ml-8"
            variants={itemVariants}
          >
            <div className="relative w-full h-[400px] lg:h-[500px] xl:h-[600px]">
              {/* Main Image */}
              <motion.div
                className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Image
                  src="/images/placeholder.jpg"
                  alt="Luxury Bedroom"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                
                {/* Luxury Details Tag */}
                <motion.div
                  className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <span className="text-sm font-medium">Luxury Details</span>
                </motion.div>
              </motion.div>

              {/* Carousel Indicators */}
              <motion.div
                className="flex justify-center space-x-2 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                {[1, 2, 3, 4].map((dot, index) => (
                  <motion.div
                    key={dot}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === 0 ? 'bg-[#8EB69B]' : 'bg-[#8EB69B]/30'
                    }`}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-3 shadow-xl border border-[#EBEBEB]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8EB69B] rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-[#235347]">Live View</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-4 bg-white/90 backdrop-blur-xl rounded-2xl p-3 shadow-xl border border-[#EBEBEB]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 text-[#8EB69B]" />
                  <span className="text-xs font-medium text-[#235347]">Prime Location</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
