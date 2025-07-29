"use client";

import React from "react";
import { motion } from "framer-motion";

interface DecorativeCircleProps {
  size?: number;
  delay?: number;
  duration?: number;
  className?: string;
}

export const DecorativeCircle: React.FC<DecorativeCircleProps> = ({
  size = 100,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      className={`decorative-circle ${className}`}
      style={{
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.1, scale: 1 }}
      transition={{
        delay,
        duration: 2,
        ease: "easeOut",
      }}
    />
  );
};

interface DecorativeWaveProps {
  width?: number;
  height?: number;
  delay?: number;
  className?: string;
}

export const DecorativeWave: React.FC<DecorativeWaveProps> = ({
  width = 200,
  height = 50,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      className={`decorative-wave ${className}`}
      style={{
        width,
        height,
        borderRadius: "50%",
      }}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 0.05, scaleX: 1 }}
      transition={{
        delay,
        duration: 2,
        ease: "easeOut",
      }}
    />
  );
};

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({
  count = 5,
  className = "",
}) => {
  const elements = Array.from({ length: count }, (_, i) => i);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {elements.map((_, index) => (
        <DecorativeCircle
          key={index}
          size={Math.random() * 150 + 50}
          delay={index * 0.5}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <FloatingElements count={8} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const GradientOverlay: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-forest-500 via-sage-300 to-forest-500"
        animate={{
          background: [
            "linear-gradient(90deg, #235347, #8EB69B, #235347)",
            "linear-gradient(180deg, #235347, #8EB69B, #235347)",
            "linear-gradient(270deg, #235347, #8EB69B, #235347)",
            "linear-gradient(360deg, #235347, #8EB69B, #235347)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative bg-white rounded-2xl m-0.5">{children}</div>
    </div>
  );
};

export const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`bg-white/95 backdrop-blur-lg border border-sage-200/50 rounded-xl shadow-xl relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.01,
        boxShadow: "0 25px 50px rgba(35, 83, 71, 0.15)",
      }}
    >
      {/* Animated spotlight effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-forest-500/5 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {children}
    </motion.div>
  );
};

interface ShimmerEffectProps {
  children: React.ReactNode;
  className?: string;
}

export const ShimmerEffect: React.FC<ShimmerEffectProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};
