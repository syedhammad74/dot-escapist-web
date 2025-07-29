"use client";

import React from "react";
import { motion } from "framer-motion";

// Minimalistic Construction-themed decorative elements
export const MinimalisticDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Blueprint Grid */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 border border-forest-500/10 rounded-sm"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Construction Crane */}
      <motion.div
        className="absolute top-40 right-20 w-12 h-12"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <div className="w-full h-full relative">
          {/* Crane base */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-forest-500/30 rounded-full" />
          {/* Crane arm */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-forest-500/30 rounded-full" />
          {/* Hook */}
          <div className="absolute top-1 right-0 w-1 h-2 bg-forest-500/40 rounded-full" />
        </div>
      </motion.div>

      {/* Data Flow Lines */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-20 h-1 bg-gradient-to-r from-transparent via-forest-500/20 to-transparent"
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating Building Blocks */}
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-gradient-to-br from-forest-500/20 to-sage-400/20 rounded-sm"
        animate={{
          rotate: [0, 90, 180, 270, 360],
          y: [0, -15, 0],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />

      {/* Network Connection Points */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-forest-400/40 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${25 + i * 10}%`,
          }}
          animate={{
            scale: [0.5, 1, 0.5],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Minimalistic Construction Tools */}
      <motion.div
        className="absolute bottom-1/4 left-1/5 w-6 h-6"
        animate={{
          rotate: [0, 180, 360],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 4,
        }}
      >
        {/* Wrench shape */}
        <div className="w-full h-full relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-1 bg-forest-500/30 rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-forest-500/30 rounded-full" />
        </div>
      </motion.div>

      {/* Abstract Data Visualization */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-10 h-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      >
        {/* Bar chart representation */}
        <div className="w-full h-full flex items-end justify-center space-x-1">
          <div
            className="w-1 bg-forest-500/30 rounded-sm"
            style={{ height: "60%" }}
          />
          <div
            className="w-1 bg-sage-400/30 rounded-sm"
            style={{ height: "80%" }}
          />
          <div
            className="w-1 bg-forest-500/30 rounded-sm"
            style={{ height: "40%" }}
          />
          <div
            className="w-1 bg-sage-400/30 rounded-sm"
            style={{ height: "90%" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

// Background pattern component
export const BackgroundPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(35, 83, 71, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(35, 83, 71, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-forest-500/10 rounded-full"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + i * 8}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

// Section-specific decorative elements
export const SectionDecorations: React.FC<{ section: string }> = ({
  section,
}) => {
  const decorations = {
    hero: (
      <>
        {/* Hero-specific: Construction blueprint */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16 border border-forest-500/15 rounded-lg"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Floating data points */}
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-forest-500/20 rounded-full"
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3],
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
        {/* Problems-specific: Warning indicators */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-8 h-8 border-2 border-forest-500/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </>
    ),
    services: (
      <>
        {/* Services-specific: Connected nodes */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-12 h-12"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-forest-500/20 rounded-full" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-forest-500/20 rounded-full" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-4 h-1 bg-forest-500/20 rounded-full" />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-1 bg-forest-500/20 rounded-full" />
          </div>
        </motion.div>
      </>
    ),
    technology: (
      <>
        {/* Technology-specific: Circuit patterns */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-10 h-10"
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
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-forest-500/20 rounded-full" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-forest-500/20 rounded-full" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-1 bg-forest-500/20 rounded-full" />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-3 h-1 bg-forest-500/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-forest-500/30 rounded-full" />
          </div>
        </motion.div>
      </>
    ),
    roi: (
      <>
        {/* ROI-specific: Growth indicators */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-8 h-8"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-t from-forest-500/40 to-transparent rounded-full" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-sage-400/40 to-transparent rounded-full" />
          </div>
        </motion.div>
      </>
    ),
    faq: (
      <>
        {/* FAQ-specific: Question marks */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-6 h-6 border border-forest-500/20 rounded-full"
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
        {/* CTA-specific: Action indicators */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-8 h-8"
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
