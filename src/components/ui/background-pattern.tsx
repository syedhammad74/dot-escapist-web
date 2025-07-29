"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(35,83,71,0.05)_1px,transparent_0)] bg-[length:20px_20px]" />

      {/* Floating elements */}
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={`float-${index}`}
          className="absolute w-1 h-1 bg-forest-500/8 rounded-full"
          style={{
            left: `${10 + index * 15}%`,
            top: `${20 + index * 12}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.8,
          }}
        />
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-50/30 via-white to-forest-50/30 opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-tr from-forest-50/20 via-transparent to-forest-50/20 opacity-30" />
    </div>
  );
};

export default BackgroundPattern;
