"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePerformance } from "@/lib/performance";

interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "default"
    | "glass"
    | "outline"
    | "ghost"
    | "destructive"
    | "luxury";
  size?: "sm" | "default" | "lg" | "icon";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  animated?: boolean;
  glassEffect?: boolean;
  spotlight?: boolean;
}

const buttonVariants = {
  default:
    "bg-primary-green text-white hover:bg-primary-green/90 shadow-primary hover:shadow-primary/50",
  glass:
    "glass bg-white/80 text-primary-green hover:bg-white/90 backdrop-blur-md",
  outline:
    "border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white",
  ghost:
    "text-primary-green hover:bg-primary-green/10 hover:text-primary-green/80",
  destructive: "bg-red-500 text-white hover:bg-red-600 shadow-red-500/30",
  luxury:
    "luxury-card bg-gradient-to-r from-primary-green to-medium-green text-white hover:from-medium-green hover:to-primary-green",
};

const buttonSizes = {
  sm: "h-9 px-3 text-sm rounded-md",
  default: "h-10 px-4 py-2 rounded-lg",
  lg: "h-11 px-8 py-3 text-lg rounded-xl",
  icon: "h-10 w-10 rounded-lg",
};

export const EnhancedButton = forwardRef<
  HTMLButtonElement,
  EnhancedButtonProps
>(
  (
    {
      className,
      variant = "default",
      size = "default",
      loading = false,
      icon,
      iconPosition = "left",
      animated = true,
      glassEffect = false,
      spotlight = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const { measureRender } = usePerformance();

    React.useEffect(() => {
      return measureRender("EnhancedButton");
    }, [measureRender]);

    const baseClasses = cn(
      "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      buttonVariants[variant],
      buttonSizes[size],
      {
        glass: glassEffect,
        spotlight: spotlight,
        "animate-pulse": loading,
      },
      className
    );

    const buttonContent = (
      <>
        {loading && (
          <motion.div
            className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
        {icon && iconPosition === "left" && !loading && (
          <span className="mr-2">{icon}</span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </>
    );

    if (animated) {
      return (
        <motion.button
          ref={ref}
          className={baseClasses}
          disabled={disabled || loading}
          whileHover={{
            scale: 1.02,
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 17,
          }}
          {...props}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled || loading}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";
