"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EnhancedButtonProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "secondary"
    | "outline"
    | "ghost"
    | "destructive"
    | "luxury";
  size?: "sm" | "default" | "lg" | "icon";
  animated?: boolean;
  glassEffect?: boolean;
  spotlight?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variantStyles = {
  default: "bg-forest-500 text-white hover:bg-forest-600 shadow-forest-500/30",
  secondary: "bg-sage-400 text-white hover:bg-sage-500 shadow-sage-400/30",
  outline: "border-2 border-forest-500 text-forest-500 hover:bg-forest-50",
  ghost: "text-forest-600 hover:bg-forest-50",
  destructive:
    "bg-forest-600 text-white hover:bg-forest-700 shadow-forest-600/30",
  luxury:
    "bg-gradient-to-r from-forest-500 to-sage-400 text-white hover:from-forest-600 hover:to-sage-500 shadow-forest-500/30",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  default: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  icon: "p-2 w-10 h-10",
};

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  animated = true,
  glassEffect = false,
  spotlight = false,
  className,
  onClick,
  disabled = false,
  type = "button",
}) => {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    glassEffect && "backdrop-blur-sm bg-white/80 border border-white/20",
    spotlight && "relative overflow-hidden",
    className
  );

  const buttonContent = (
    <>
      {spotlight && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (animated) {
    return (
      <motion.button
        type={type}
        className={baseClasses}
        onClick={onClick}
        disabled={disabled}
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {buttonContent}
      </motion.button>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};
