"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, Database, Cloud, Layers } from "lucide-react";

const HeroAnimation: React.FC = () => {
  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56">
      {/* Main 3D Building Structure */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotateY: [0, 10, -10, 0],
          rotateX: [0, 5, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Building Base */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
          {/* Main building structure */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-forest-500/20 to-sage-400/20 rounded-lg border border-forest-500/30"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.6, 0.8, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Building layers/floors */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1 right-1 bg-gradient-to-r from-forest-500/15 to-sage-400/15 rounded-sm"
              style={{
                top: `${20 + i * 25}%`,
                height: "8%",
              }}
              animate={{
                scaleX: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* Windows */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-forest-400/40 rounded-sm"
              style={{
                left: `${15 + (i % 3) * 30}%`,
                top: `${25 + Math.floor(i / 3) * 25}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Floating Data Elements */}
        <motion.div
          className="absolute -top-4 -right-4 w-8 h-8"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Database className="w-full h-full text-forest-500/60" />
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 w-8 h-8"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Cloud className="w-full h-full text-sage-400/60" />
        </motion.div>

        {/* Connection Lines */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20"
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
            {/* Connection lines */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-forest-500/30 to-transparent" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-t from-forest-500/30 to-transparent" />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-forest-500/30 to-transparent" />
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-l from-forest-500/30 to-transparent" />
          </div>
        </motion.div>

        {/* Floating Construction Elements */}
        <motion.div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6"
          animate={{
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Building2 className="w-full h-full text-forest-500/50" />
        </motion.div>

        <motion.div
          className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-6 h-6"
          animate={{
            y: [0, 15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Layers className="w-full h-full text-sage-400/50" />
        </motion.div>

        {/* Energy/Data Flow */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full relative">
            <div className="absolute inset-0 border border-forest-500/20 rounded-full" />
            <div className="absolute inset-2 border border-sage-400/20 rounded-full" />
            <div className="absolute inset-4 border border-forest-500/10 rounded-full" />
          </div>
        </motion.div>

        {/* Pulsing Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-forest-500/60 to-sage-400/60 rounded-full" />
        </motion.div>

        {/* Floating Data Points */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-forest-400/40 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              y: [0, -8, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-forest-500/5 to-sage-400/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default HeroAnimation;
