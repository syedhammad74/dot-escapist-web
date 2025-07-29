"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { OptimizedImage } from "./optimized-image";
import { EnhancedButton } from "./enhanced-button";
import { cn } from "@/lib/utils";
import { usePerformance } from "@/lib/performance";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import { ExternalLink, Github, Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  className?: string;
  variant?: "default" | "glass" | "luxury" | "minimal";
  animated?: boolean;
}

export const EnhancedProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  featured = false,
  className,
  variant = "default",
  animated = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { measureRender } = usePerformance();
  const { ref, isIntersecting } = useIntersectionObserver();

  React.useEffect(() => {
    return measureRender("EnhancedProjectCard");
  }, [measureRender]);

  const cardVariants = {
    default:
      "bg-white border border-gray-200 shadow-elegant hover:shadow-luxury",
    glass: "glass border-white/20 shadow-glass",
    luxury: "luxury-card bg-gradient-to-br from-white/90 to-white/70",
    minimal:
      "bg-white/50 backdrop-blur-sm border border-white/30 shadow-minimal",
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const contentVariants = {
    rest: { y: 0, opacity: 1 },
    hover: { y: -5, opacity: 0.95 },
  };

  const baseClasses = cn(
    "group relative overflow-hidden rounded-2xl transition-all duration-500",
    cardVariants[variant],
    {
      "ring-2 ring-primary-green/20": featured,
    },
    className
  );

  const cardContent = (
    <div className="relative h-full">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <motion.div
          variants={imageVariants}
          initial="rest"
          animate={isHovered ? "hover" : "rest"}
          transition={{ duration: 0.3 }}
        >
          <OptimizedImage
            src={image}
            alt={title}
            width={400}
            height={250}
            className="w-full h-48 object-cover"
            fallbackSrc="/images/placeholder.jpg"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {liveUrl && (
            <EnhancedButton
              size="icon"
              variant="glass"
              onClick={() => window.open(liveUrl, "_blank")}
              className="w-8 h-8"
            >
              <Eye className="w-4 h-4" />
            </EnhancedButton>
          )}
          {githubUrl && (
            <EnhancedButton
              size="icon"
              variant="glass"
              onClick={() => window.open(githubUrl, "_blank")}
              className="w-8 h-8"
            >
              <Github className="w-4 h-4" />
            </EnhancedButton>
          )}
        </div>

        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-green text-white">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <motion.div
        variants={contentVariants}
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
        transition={{ duration: 0.3 }}
        className="p-6"
      >
        <h3 className="text-xl font-semibold mb-2 gradient-text-forest">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="inline-block px-3 py-1 text-xs font-medium bg-primary-green/10 text-primary-green rounded-full border border-primary-green/20"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          {liveUrl && (
            <EnhancedButton
              size="sm"
              variant="default"
              onClick={() => window.open(liveUrl, "_blank")}
              className="flex-1"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </EnhancedButton>
          )}
          {githubUrl && (
            <EnhancedButton
              size="sm"
              variant="outline"
              onClick={() => window.open(githubUrl, "_blank")}
              className="flex-1"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </EnhancedButton>
          )}
        </div>
      </motion.div>

      {/* Spotlight Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        ref={ref}
        className={baseClasses}
        variants={containerVariants}
        initial="hidden"
        animate={isIntersecting ? "visible" : "hidden"}
        whileHover="hover"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <div
      ref={ref}
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cardContent}
    </div>
  );
};
