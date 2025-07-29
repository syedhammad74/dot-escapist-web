"use client";

import React from "react";
import { motion } from "framer-motion";

// Abstract Geometric Shapes with Breathing Effects
export const AbstractGeometricShapes: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Hexagon */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-500/20 to-sage-400/20 transform rotate-45 rounded-lg" />
          <div className="absolute inset-2 bg-gradient-to-br from-forest-500/10 to-sage-400/10 transform rotate-45 rounded-lg" />
        </div>
      </motion.div>

      {/* Breathing Circle */}
      <motion.div
        className="absolute top-40 right-20 w-12 h-12"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-forest-500/30 to-sage-400/30 rounded-full" />
      </motion.div>

      {/* Morphing Triangle */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-20 h-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 120, 240, 360],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-500/25 to-sage-400/25 transform rotate-45" />
          <div className="absolute inset-4 bg-gradient-to-br from-forest-500/15 to-sage-400/15 transform rotate-45" />
        </div>
      </motion.div>

      {/* Pulsing Diamond */}
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-8 h-8"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 90, 180, 270, 360],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-forest-500/40 to-sage-400/40 transform rotate-45 rounded-sm" />
      </motion.div>

      {/* Breathing Lines */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-forest-500/30 to-transparent"
        animate={{
          scaleX: [0.5, 1, 0.5],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />

      {/* Floating Geometric Points */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-forest-500/40 rounded-full"
          style={{
            left: `${15 + i * 12}%`,
            top: `${25 + i * 8}%`,
          }}
          animate={{
            scale: [0.5, 1.2, 0.5],
            opacity: [0.2, 0.6, 0.2],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Abstract Grid Pattern */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-16 h-16"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      >
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-forest-500/20 to-transparent" />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1 bg-gradient-to-r from-forest-500/20 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-full border border-forest-500/10 rounded-lg" />
        </div>
      </motion.div>

      {/* Morphing Octagon */}
      <motion.div
        className="absolute bottom-1/4 left-1/5 w-10 h-10"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 45, 90, 135, 180, 225, 270, 315, 360],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-forest-500/25 to-sage-400/25 transform rotate-45 rounded-lg" />
      </motion.div>

      {/* Breathing Wave */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-20 h-2"
        animate={{
          scaleX: [0.3, 1, 0.3],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3.5,
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-forest-500/30 to-transparent rounded-full" />
      </motion.div>
    </div>
  );
};

// Section-specific abstract geometric decorations
export const SectionGeometricDecorations: React.FC<{ section: string }> = ({
  section,
}) => {
  const decorations = {
    hero: (
      <>
        {/* Hero-specific: Floating geometric composition */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-500/15 to-sage-400/15 transform rotate-45 rounded-lg" />
            <div className="absolute inset-4 bg-gradient-to-br from-forest-500/10 to-sage-400/10 transform rotate-45 rounded-lg" />
          </div>
        </motion.div>

        {/* Floating geometric points */}
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-forest-500/30 rounded-full"
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.2, 0.6, 0.2],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </>
    ),
    problems: (
      <>
        {/* Problems-specific: Warning geometric patterns */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-12 h-12"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-500/20 to-sage-400/20 transform rotate-45 rounded-lg" />
            <div className="absolute inset-2 bg-gradient-to-br from-forest-500/10 to-sage-400/10 transform rotate-45 rounded-lg" />
          </div>
        </motion.div>
      </>
    ),
    services: (
      <>
        {/* Services-specific: Connected geometric nodes */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-forest-500/30 to-transparent" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-t from-forest-500/30 to-transparent" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-1 bg-gradient-to-r from-forest-500/30 to-transparent" />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-6 h-1 bg-gradient-to-l from-forest-500/30 to-transparent" />
            <div className="absolute inset-4 bg-gradient-to-br from-forest-500/20 to-sage-400/20 rounded-full" />
          </div>
        </motion.div>
      </>
    ),
    technology: (
      <>
        {/* Technology-specific: Circuit geometric patterns */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-12 h-12"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-b from-forest-500/30 to-transparent" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-forest-500/30 to-transparent" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-1 bg-gradient-to-r from-forest-500/30 to-transparent" />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-1 bg-gradient-to-l from-forest-500/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-forest-500/40 rounded-full" />
          </div>
        </motion.div>
      </>
    ),
    roi: (
      <>
        {/* ROI-specific: Growth geometric indicators */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-10 h-10"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-t from-forest-500/40 to-transparent" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-sage-400/40 to-transparent" />
          </div>
        </motion.div>
      </>
    ),
    faq: (
      <>
        {/* FAQ-specific: Question geometric patterns */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-8 h-8 border border-forest-500/20 rounded-full"
          animate={{
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </>
    ),
    cta: (
      <>
        {/* CTA-specific: Action geometric indicators */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-12 h-12"
          animate={{
            x: [0, 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-1 bg-forest-500/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-forest-500/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-forest-500/40 rounded-full" />
          </div>
        </motion.div>
      </>
    ),
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {decorations[section as keyof typeof decorations] || null}
    </div>
  );
};
