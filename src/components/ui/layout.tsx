import React from "react";
import { cn } from "@/lib/utils";

/* ===== PERFECT LAYOUT COMPONENTS ===== */

// Perfect Container Component
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  as?: keyof JSX.IntrinsicElements;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = "lg",
  as: Component = "div",
}) => {
  const sizeClasses = {
    sm: "max-w-3xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-none",
  };

  return (
    <Component
      className={cn(
        "mx-auto px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </Component>
  );
};

// Perfect Section Component
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: "none" | "sm" | "md" | "lg" | "xl" | "2xl";
  background?:
    | "white"
    | "primary"
    | "secondary"
    | "neutral"
    | "gradient"
    | "glass";
  as?: keyof JSX.IntrinsicElements;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  spacing = "lg",
  background = "white",
  as: Component = "section",
}) => {
  const spacingClasses = {
    none: "py-0",
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20",
    lg: "py-20 sm:py-24",
    xl: "py-24 sm:py-32",
    "2xl": "py-32 sm:py-40",
  };

  const backgroundClasses = {
    white: "bg-white",
    primary: "bg-primary-50",
    secondary: "bg-secondary-50",
    neutral: "bg-neutral-50",
    gradient: "bg-gradient-to-br from-primary-50 via-white to-primary-50",
    glass: "bg-white/80 backdrop-blur-xl",
  };

  return (
    <Component
      className={cn(
        "relative overflow-hidden",
        spacingClasses[spacing],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </Component>
  );
};

// Perfect Grid Component
interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: "sm" | "md" | "lg" | "xl";
  as?: keyof JSX.IntrinsicElements;
}

const Grid: React.FC<GridProps> = ({
  children,
  className,
  cols = 3,
  gap = "lg",
  as: Component = "div",
}) => {
  const colsClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  };

  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  };

  return (
    <Component
      className={cn("grid", colsClasses[cols], gapClasses[gap], className)}
    >
      {children}
    </Component>
  );
};

// Perfect Flex Component
interface FlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
  gap?: "sm" | "md" | "lg" | "xl";
  wrap?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const Flex: React.FC<FlexProps> = ({
  children,
  className,
  direction = "row",
  align = "center",
  justify = "start",
  gap = "md",
  wrap = false,
  as: Component = "div",
}) => {
  const directionClasses = {
    row: "flex-row",
    col: "flex-col",
    "row-reverse": "flex-row-reverse",
    "col-reverse": "flex-col-reverse",
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const gapClasses = {
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-6",
    xl: "gap-8",
  };

  return (
    <Component
      className={cn(
        "flex",
        directionClasses[direction],
        alignClasses[align],
        justifyClasses[justify],
        gapClasses[gap],
        wrap && "flex-wrap",
        className
      )}
    >
      {children}
    </Component>
  );
};

// Perfect Stack Component
interface StackProps {
  children: React.ReactNode;
  className?: string;
  spacing?: "sm" | "md" | "lg" | "xl";
  align?: "start" | "center" | "end" | "stretch";
  as?: keyof JSX.IntrinsicElements;
}

const Stack: React.FC<StackProps> = ({
  children,
  className,
  spacing = "md",
  align = "start",
  as: Component = "div",
}) => {
  const spacingClasses = {
    sm: "space-y-2",
    md: "space-y-4",
    lg: "space-y-6",
    xl: "space-y-8",
  };

  const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  };

  return (
    <Component
      className={cn(
        "flex flex-col",
        spacingClasses[spacing],
        alignClasses[align],
        className
      )}
    >
      {children}
    </Component>
  );
};

// Perfect Aspect Ratio Component
interface AspectRatioProps {
  children: React.ReactNode;
  className?: string;
  ratio?: "square" | "portrait" | "landscape" | "hero" | "ultrawide" | "golden";
  as?: keyof JSX.IntrinsicElements;
}

const AspectRatio: React.FC<AspectRatioProps> = ({
  children,
  className,
  ratio = "landscape",
  as: Component = "div",
}) => {
  const ratioClasses = {
    square: "aspect-square",
    portrait: "aspect-portrait",
    landscape: "aspect-landscape",
    hero: "aspect-hero",
    ultrawide: "aspect-ultrawide",
    golden: "aspect-golden",
  };

  return (
    <Component
      className={cn("relative overflow-hidden", ratioClasses[ratio], className)}
    >
      {children}
    </Component>
  );
};

// Perfect Divider Component
interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  color?: "neutral" | "primary" | "secondary";
  as?: keyof JSX.IntrinsicElements;
}

const Divider: React.FC<DividerProps> = ({
  className,
  orientation = "horizontal",
  size = "md",
  color = "neutral",
  as: Component = "div",
}) => {
  const orientationClasses = {
    horizontal: "w-full h-px",
    vertical: "h-full w-px",
  };

  const sizeClasses = {
    sm: orientation === "horizontal" ? "h-px" : "w-px",
    md: orientation === "horizontal" ? "h-0.5" : "w-0.5",
    lg: orientation === "horizontal" ? "h-1" : "w-1",
  };

  const colorClasses = {
    neutral: "bg-neutral-200",
    primary: "bg-primary-200",
    secondary: "bg-secondary-200",
  };

  return (
    <Component
      className={cn(
        orientationClasses[orientation],
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  );
};

// Perfect Spacer Component
interface SpacerProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  as?: keyof JSX.IntrinsicElements;
}

const Spacer: React.FC<SpacerProps> = ({
  className,
  size = "md",
  as: Component = "div",
}) => {
  const sizeClasses = {
    xs: "h-2",
    sm: "h-4",
    md: "h-8",
    lg: "h-12",
    xl: "h-16",
    "2xl": "h-24",
  };

  return <Component className={cn("w-full", sizeClasses[size], className)} />;
};

// Perfect Center Component
interface CenterProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Center: React.FC<CenterProps> = ({
  children,
  className,
  as: Component = "div",
}) => {
  return (
    <Component className={cn("flex items-center justify-center", className)}>
      {children}
    </Component>
  );
};

// Perfect Wrapper Component
interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  as?: keyof JSX.IntrinsicElements;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  className,
  padding = "md",
  as: Component = "div",
}) => {
  const paddingClasses = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-12",
  };

  return (
    <Component className={cn(paddingClasses[padding], className)}>
      {children}
    </Component>
  );
};

// Export all components
export {
  Container,
  Section,
  Grid,
  Flex,
  Stack,
  AspectRatio,
  Divider,
  Spacer,
  Center,
  Wrapper,
};
