"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";

const CTASection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const benefits = [
    {
      icon: Clock,
      text: "Customizable Workflows",
    },
    {
      icon: Shield,
      text: "Expert Support",
    },
    {
      icon: CheckCircle,
      text: "Cloud Integration",
    },
  ];

  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-gradient-to-br from-[#235347] via-[#163832] to-[#235347] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#8EB69B] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Content */}
          <motion.div className="mb-6 sm:mb-8" variants={itemVariants}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-wide">
              Ready to Transform Your{" "}
              <span className="text-forest-sage">Construction Management?</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
              Join hundreds of construction companies who have already
              eliminated Excel chaos and achieved measurable results with ICS.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <motion.button
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-forest-sage text-forest-primary font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white hover:scale-105 ring-2 ring-forest-sage/20 hover:ring-forest-sage/40 text-sm sm:text-base"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Schedule Your Personalized Demo
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-forest-sage text-forest-sage font-semibold rounded-2xl hover:bg-forest-sage hover:text-forest-primary transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm text-sm sm:text-base"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Case Study
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
            variants={itemVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                className="flex items-center space-x-2 text-white/80"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-forest-sage" />
                <span className="text-sm sm:text-base font-semibold">
                  {benefit.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Success Journey */}
          <motion.div
            className="mt-12 sm:mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/20"
            variants={itemVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 tracking-wide">
              Start Your Success Journey Today
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-sage rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-forest-primary font-bold text-sm sm:text-base">
                  1
                </div>
                <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                  Discovery Call
                </h4>
                <p className="text-xs sm:text-sm text-white/80 font-medium">
                  30-minute consultation to understand your needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-sage rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-forest-primary font-bold text-sm sm:text-base">
                  2
                </div>
                <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                  Custom Demo
                </h4>
                <p className="text-xs sm:text-sm text-white/80 font-medium">
                  60-minute live demonstration with your data
                </p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-forest-sage rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-forest-primary font-bold text-sm sm:text-base">
                  3
                </div>
                <h4 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                  Implementation
                </h4>
                <p className="text-xs sm:text-sm text-white/80 font-medium">
                  Seamless setup with dedicated support team
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
