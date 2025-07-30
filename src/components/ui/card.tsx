import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-2xl border border-neutral-200 bg-white text-neutral-950 shadow-sm transition-all duration-300",
  {
    variants: {
      variant: {
        default: "hover:shadow-lg hover:-translate-y-1",
        elevated: "shadow-lg hover:shadow-xl hover:-translate-y-2",
        outlined: "border-2 border-neutral-300 hover:border-primary-300 hover:shadow-md",
        glass: "bg-white/80 backdrop-blur-xl border-white/20 hover:bg-white/90",
        gradient: "bg-gradient-to-br from-primary-50 to-secondary-50 border-primary-200 hover:shadow-lg hover:-translate-y-1",
        dark: "bg-neutral-900 border-neutral-800 text-neutral-50 hover:shadow-lg hover:-translate-y-1",
        interactive: "cursor-pointer hover:shadow-lg hover:-translate-y-1 active:scale-95",
        floating: "shadow-2xl hover:shadow-3xl hover:-translate-y-3",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      animation: {
        none: "",
        hover: "hover:scale-105",
        lift: "hover:-translate-y-2 hover:shadow-xl",
        glow: "hover:shadow-glow",
        "pulse-glow": "hover:animate-pulse-glow",
        breathing: "hover:animate-breathing",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "none",
    },
  }
);

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>(({ className, variant, size, animation, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants({ variant, size, animation, className }))}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-neutral-900",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-neutral-600", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Specialized Card Components
export const ElevatedCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>((props, ref) => <Card ref={ref} variant="elevated" {...props} />
);
ElevatedCard.displayName = "ElevatedCard";

export const GlassCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>((props, ref) => <Card ref={ref} variant="glass" {...props} />
);
GlassCard.displayName = "GlassCard";

export const GradientCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>((props, ref) => <Card ref={ref} variant="gradient" {...props} />
);
GradientCard.displayName = "GradientCard";

export const InteractiveCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>((props, ref) => <Card ref={ref} variant="interactive" {...props} />
);
InteractiveCard.displayName = "InteractiveCard";

export const FloatingCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof cardVariants>
>((props, ref) => <Card ref={ref} variant="floating" {...props} />
);
FloatingCard.displayName = "FloatingCard";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
