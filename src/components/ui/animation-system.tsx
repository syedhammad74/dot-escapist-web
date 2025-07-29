"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

// Animation Variants
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const hoverScale: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

export const hoverLift: Variants = {
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export const floating: Variants = {
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const breathing: Variants = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.4, 0.7, 0.4],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const wave: Variants = {
  animate: {
    x: [0, 5, 10, 5, 0],
    y: [0, -5, 0, 5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const rotate: Variants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Animated Components
interface AnimatedContainerProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  variants = fadeInUp,
  className = "",
  delay = 0,
  duration,
  once = true,
  threshold = 0.1,
}) => {
  const customVariants = duration
    ? {
        ...variants,
        animate: {
          ...variants.animate,
          transition: {
            ...variants.animate?.transition,
            duration,
            delay,
          },
        },
      }
    : variants;

  return (
    <motion.div
      className={className}
      variants={customVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once, threshold }}
    >
      {children}
    </motion.div>
  );
};

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = "",
  staggerDelay = 0.1,
  delayChildren = 0.1,
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        initial: {},
        animate: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, threshold: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, threshold: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
  duration?: number;
  width?: number;
  height?: number;
  fill?: boolean;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  className = "",
  delay = 0,
  duration = 0.5,
  width,
  height,
  fill = false,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, threshold: 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        className="w-full h-full object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  );
};

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  className = "",
  duration = 3,
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

interface BreathingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export const BreathingElement: React.FC<BreathingElementProps> = ({
  children,
  className = "",
  duration = 4,
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

interface WaveElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export const WaveElement: React.FC<WaveElementProps> = ({
  children,
  className = "",
  duration = 3,
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        x: [0, 5, 10, 5, 0],
        y: [0, -5, 0, 5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

interface RotatingElementProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export const RotatingElement: React.FC<RotatingElementProps> = ({
  children,
  className = "",
  duration = 20,
  delay = 0,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

// Animation Hooks
export const useScrollAnimation = (threshold = 0.1) => {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, threshold },
    transition: { duration: 0.5, ease: "easeOut" },
  };
};

export const useHoverAnimation = () => {
  return {
    whileHover: { scale: 1.05, y: -5 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };
};

export const useStaggerAnimation = (staggerDelay = 0.1) => {
  return {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };
};
