"use client";

import React from "react";
import { motion } from "framer-motion";

interface EnhancedDecorationsProps {
  section: string;
}

export const EnhancedDecorations: React.FC<EnhancedDecorationsProps> = ({
  section,
}) => {
  const decorationVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(35,83,71,0.05)_1px,transparent_0)] bg-[length:20px_20px]" />

      {/* Animated Decorations */}
      <motion.div
        className="absolute inset-0"
        variants={decorationVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {/* Top Left Decoration */}
        <motion.div
          className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-forest-500/10 to-forest-600/10 rounded-full" />
        </motion.div>

        {/* Bottom Right Decoration */}
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          animate={{
            y: [10, -10, 10],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <div className="w-full h-full bg-gradient-to-tl from-forest-500/10 to-forest-600/10 rounded-full" />
        </motion.div>

        {/* Center Decoration */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-forest-500/5 to-forest-600/5 rounded-full blur-xl" />
        </motion.div>

        {/* Floating Elements */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={`float-${index}`}
            className="absolute w-3 h-3 bg-forest-500/20 rounded-full"
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 15}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.4, 0.2],
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
    </div>
  );
};

export default EnhancedDecorations;
