"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroAnimation: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative w-full h-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-50/30 via-white to-forest-50/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(35,83,71,0.05)_1px,transparent_0)] bg-[length:20px_20px]" />

      {/* Animated Elements */}
      <div className="relative z-10 grid grid-cols-3 gap-4 p-4">
        {[...Array(9)].map((_, index) => (
          <motion.div
            key={index}
            className="aspect-square bg-white rounded-2xl shadow-lg border border-forest-100"
            variants={itemVariants}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-br from-forest-500/10 to-forest-600/10 rounded-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Floating Elements */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`float-${index}`}
          className="absolute w-4 h-4 bg-forest-500/20 rounded-full"
          style={{
            top: `${20 + index * 15}%`,
            left: `${10 + index * 20}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            delay: index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default HeroAnimation;
