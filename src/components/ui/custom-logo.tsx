"use client";

import React from "react";
import { motion } from "framer-motion";

const CustomLogo: React.FC<{ size?: "sm" | "md" | "lg" }> = ({
  size = "md",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  };

  const subTextSizes = {
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm",
  };

  return (
    <div className="flex items-center space-x-3">
      {/* Logo Icon */}
      <motion.div
        className={`${sizeClasses[size]} relative`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {/* Main building structure */}
        <div className="w-full h-full relative">
          {/* Base building */}
          <div className="absolute inset-0 bg-gradient-to-br from-forest-500 to-sage-400 rounded-lg shadow-lg" />

          {/* Building layers */}
          <div className="absolute top-1 left-1 right-1 h-1 bg-white/20 rounded-sm" />
          <div className="absolute top-3 left-1 right-1 h-1 bg-white/20 rounded-sm" />
          <div className="absolute top-5 left-1 right-1 h-1 bg-white/20 rounded-sm" />

          {/* Windows */}
          <div className="absolute top-2 left-2 w-1 h-1 bg-white/60 rounded-sm" />
          <div className="absolute top-2 right-2 w-1 h-1 bg-white/60 rounded-sm" />
          <div className="absolute top-4 left-2 w-1 h-1 bg-white/60 rounded-sm" />
          <div className="absolute top-4 right-2 w-1 h-1 bg-white/60 rounded-sm" />

          {/* Door */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-sm" />

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-forest-500/20 to-sage-400/20 rounded-lg"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Text */}
      <div className="flex flex-col">
        <motion.div
          className={`${textSizes[size]} font-bold text-forest-800 leading-none`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          ICS
        </motion.div>
        <div
          className={`${subTextSizes[size]} text-forest-600 -mt-0.5 leading-none`}
        >
          Integrated Construction Solutions
        </div>
      </div>
    </div>
  );
};

export default CustomLogo;
