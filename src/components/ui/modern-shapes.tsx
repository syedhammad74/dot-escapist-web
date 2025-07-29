"use client";

import React from "react";
import { motion } from "framer-motion";

// Construction-themed animated shapes
export const ModernShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Construction Elements */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 border-2 border-forest-500/20 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-sage-400/30 to-forest-500/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Geometric Construction Shapes */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-8 h-8 border-2 border-forest-400/40 transform rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-gradient-to-br from-forest-500/20 to-sage-400/20 rounded-lg"
        animate={{
          rotate: [0, -360],
          y: [0, 15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />

      {/* Construction Grid Pattern */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-20 h-20 border border-forest-300/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Floating Dots - Construction Points */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-forest-400 rounded-full"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + i * 8}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Construction Lines */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-forest-400/30 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-sage-400/30 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Modern Hexagons */}
      <motion.div
        className="absolute top-1/3 right-1/6 w-12 h-12 bg-gradient-to-br from-forest-500/10 to-sage-400/10"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />

      {/* Construction Triangles */}
      <motion.div
        className="absolute bottom-1/3 left-1/6 w-8 h-8 bg-gradient-to-br from-sage-400/20 to-forest-500/20"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
        animate={{
          rotate: [0, 180, 360],
          y: [0, -10, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />

      {/* Floating Construction Blocks */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`block-${i}`}
          className="absolute w-6 h-6 bg-gradient-to-br from-forest-500/15 to-sage-400/15 rounded-sm"
          style={{
            left: `${15 + i * 20}%`,
            bottom: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}
    </div>
  );
};

// Animated background gradient
export const AnimatedGradient: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-forest-50/50 via-white to-sage-50/50"
        animate={{
          background: [
            "linear-gradient(45deg, rgba(35, 83, 71, 0.05) 0%, rgba(255, 255, 255, 1) 50%, rgba(122, 143, 122, 0.05) 100%)",
            "linear-gradient(135deg, rgba(122, 143, 122, 0.05) 0%, rgba(255, 255, 255, 1) 50%, rgba(35, 83, 71, 0.05) 100%)",
            "linear-gradient(45deg, rgba(35, 83, 71, 0.05) 0%, rgba(255, 255, 255, 1) 50%, rgba(122, 143, 122, 0.05) 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

// Floating particles with construction theme
export const ConstructionParticles: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-forest-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

// Modern geometric patterns
export const GeometricPatterns: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Diagonal Lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(35, 83, 71, 0.02) 10px, rgba(35, 83, 71, 0.02) 20px)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid Pattern */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(122, 143, 122, 0.03) 40px, rgba(122, 143, 122, 0.03) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(122, 143, 122, 0.03) 40px, rgba(122, 143, 122, 0.03) 41px)",
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};
