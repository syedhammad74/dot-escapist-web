"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp } from "lucide-react";
import { Container, Grid, Flex, Stack, Center } from "@/components/ui/layout";
import NeuralNetworkHero from "@/components/ui/neural-network-hero";

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
      value: "45%", 
      label: "Faster ROI", 
      icon: TrendingUp,
      color: "text-success-500",
      bgColor: "bg-success-50"
    },
    { 
      value: "30%", 
      label: "Cost Reduction", 
      icon: TrendingUp,
      color: "text-primary-500",
      bgColor: "bg-primary-50"
    },
    { 
      value: "60%", 
      label: "Time Savings", 
      icon: Clock,
      color: "text-warning-500",
      bgColor: "bg-warning-50"
    },
    { 
      value: "95%", 
      label: "Accuracy", 
      icon: Star,
      color: "text-secondary-500",
      bgColor: "bg-secondary-50"
    },
  ];

  const features = [
    "Real-time project tracking",
    "Automated reporting",
    "Team collaboration",
    "Resource optimization",
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50 overflow-hidden">
      {/* Perfect Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern bg-[length:20px_20px] opacity-20" />

      {/* Decorative Elements with Mathematical Positioning */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-40 h-40 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl"
          style={{ top: "15%", left: "10%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-32 h-32 bg-gradient-to-br from-secondary-500/10 to-primary-500/10 rounded-full blur-2xl"
          style={{ top: "25%", right: "15%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl"
          style={{ bottom: "20%", left: "20%" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <Container size="xl" className="relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 lg:py-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Perfect Content Section */}
          <motion.div
            className="flex-1 max-w-2xl lg:max-w-3xl space-y-10 lg:space-y-12"
            variants={itemVariants}
          >
            {/* Perfect Typography Hierarchy */}
            <Stack spacing="lg">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance"
                variants={itemVariants}
              >
                <span className="text-neutral-900">Stop Managing</span>
                <br />
                <span className="text-primary-600">Excel Sheets.</span>
                <br />
                <span className="text-neutral-800">Start Managing</span>
                <br />
                <span className="text-primary-700">Projects.</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl lg:text-2xl text-neutral-600 leading-relaxed max-w-3xl text-balance"
                variants={itemVariants}
              >
                Transform your construction management with our AI-powered
                platform. Streamline workflows, reduce costs, and deliver
                projects on time with unprecedented precision and efficiency.
              </motion.p>
            </Stack>

            {/* Perfect CTA Section */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 lg:gap-6"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToVideo}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-600 hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Live Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <motion.button
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-primary-500 text-primary-600 font-semibold rounded-2xl hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-105"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Perfect Stats Grid */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 lg:pt-12"
              variants={itemVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center space-y-3 group"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Center>
                    <div className={`flex items-center justify-center w-14 h-14 mx-auto ${stat.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`w-7 h-7 ${stat.color}`} />
                    </div>
                  </Center>
                  <div className="text-2xl lg:text-3xl font-bold text-neutral-900">
                    {stat.value}
                  </div>
                  <div className="text-sm lg:text-base text-neutral-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Perfect Features List */}
            <motion.div className="pt-8 lg:pt-12" variants={itemVariants}>
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
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-neutral-700 font-medium text-base lg:text-lg">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </Grid>
            </motion.div>
          </motion.div>

          {/* Perfect Visual Section */}
          <motion.div
            className="flex-1 w-full max-w-2xl lg:max-w-none mt-12 lg:mt-0"
            variants={itemVariants}
          >
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <NeuralNetworkHero />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-10 right-10 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-neutral-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-neutral-700">Live Data</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-10 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-neutral-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-primary-500" />
                  <span className="text-sm font-medium text-neutral-700">Team Sync</span>
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
