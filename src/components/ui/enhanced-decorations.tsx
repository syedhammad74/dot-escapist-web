"use client";

import React from "react";
import { motion } from "framer-motion";

// Enhanced decorative elements for each section
export const EnhancedDecorations: React.FC<{ section: string }> = ({
  section,
}) => {
  const decorations = {
    hero: (
      <>
        {/* Hero-specific: Large floating geometric composition */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 opacity-10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-gradient-to-br from-forest-500/20 to-sage-400/20 transform rotate-45 rounded-2xl" />
            <div className="absolute inset-4 bg-gradient-to-br from-forest-500/15 to-sage-400/15 transform rotate-45 rounded-xl" />
            <div className="absolute inset-8 bg-gradient-to-br from-forest-500/10 to-sage-400/10 transform rotate-45 rounded-lg" />
          </div>
        </motion.div>

        {/* Floating accent circles */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-4 h-4 bg-forest-500/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/5 w-3 h-3 bg-sage-400/30 rounded-full"
          animate={{
            y: [0, 15, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Subtle grid pattern */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-5"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-forest-500/30 to-transparent" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-forest-500/30 to-transparent" />
          </div>
        </motion.div>
      </>
    ),
    problems: (
      <>
        {/* Problems-specific: Warning indicators */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 border-2 border-forest-500/20 rounded-full" />
            <div className="absolute inset-4 border border-forest-500/15 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-forest-500/30 rounded-full" />
          </div>
        </motion.div>

        {/* Alert triangles */}
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-8 h-8"
          animate={{
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-forest-500/20 to-sage-400/20 transform rotate-45 rounded-sm" />
        </motion.div>
      </>
    ),
    services: (
      <>
        {/* Services-specific: Connected network nodes */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-forest-500/25 to-transparent" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-forest-500/25 to-transparent" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-r from-forest-500/25 to-transparent" />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-l from-forest-500/25 to-transparent" />
            <div className="absolute inset-4 bg-gradient-to-br from-forest-500/20 to-sage-400/20 rounded-full" />
          </div>
        </motion.div>

        {/* Service dots */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-forest-500/30 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </>
    ),
    technology: (
      <>
        {/* Technology-specific: Circuit patterns */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-b from-forest-500/25 to-transparent" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-t from-forest-500/25 to-transparent" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-1 bg-gradient-to-r from-forest-500/25 to-transparent" />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-6 h-1 bg-gradient-to-l from-forest-500/25 to-transparent" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-forest-500/30 rounded-full" />
          </div>
        </motion.div>

        {/* Data flow lines */}
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-12 h-1 bg-gradient-to-r from-transparent via-forest-500/20 to-transparent"
          animate={{
            scaleX: [0.3, 1, 0.3],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
      </>
    ),
    roi: (
      <>
        {/* ROI-specific: Growth indicators */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-12 h-12"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-forest-500/40 to-transparent" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-gradient-to-t from-sage-400/40 to-transparent" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-forest-500/30 to-transparent" />
          </div>
        </motion.div>

        {/* Success circles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sage-400/40 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${40 + i * 8}%`,
            }}
            animate={{
              scale: [0.5, 1.2, 0.5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </>
    ),
    "success-stories": (
      <>
        {/* Success Stories-specific: Achievement indicators */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-16 h-16"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full" />
            <div className="absolute inset-4 border border-purple-500/15 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-purple-500/30 rounded-full" />
          </div>
        </motion.div>

        {/* Success stars */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-400/40 rounded-full"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              scale: [0.5, 1.3, 0.5],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </>
    ),
    faq: (
      <>
        {/* FAQ-specific: Question patterns */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-10 h-10 border border-forest-500/20 rounded-full"
          animate={{
            rotate: [0, 15, -15, 0],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Question marks */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-forest-500/30 rounded-full"
            style={{
              left: `${25 + i * 20}%`,
              top: `${35 + i * 15}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i * 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          />
        ))}
      </>
    ),
    cta: (
      <>
        {/* CTA-specific: Action indicators */}
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16"
          animate={{
            x: [0, 8, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-1 bg-forest-500/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-6 bg-forest-500/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-forest-500/40 rounded-full" />
          </div>
        </motion.div>

        {/* Call-to-action dots */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-sage-400/30 rounded-full"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </>
    ),
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {decorations[section as keyof typeof decorations] || null}
    </div>
  );
};

// Background pattern with subtle geometric elements
export const BackgroundPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(35, 83, 71, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(35, 83, 71, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating geometric elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-forest-500/8 rounded-full"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 12}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
};
