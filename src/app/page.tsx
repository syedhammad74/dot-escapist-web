"use client";

import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";

// Lazy load components for better performance
const Hero = lazy(() => import("./components/Hero"));
const Problems = lazy(() => import("./components/Problems"));
const Services = lazy(() => import("./components/Services"));
const Technology = lazy(() => import("./components/Technology"));
const ROI = lazy(() => import("./components/ROI"));
const SuccessStories = lazy(() => import("./components/SuccessStories"));
const VideoDemo = lazy(() => import("./components/VideoDemo"));
const FAQ = lazy(() => import("./components/FAQ"));
const CTA = lazy(() => import("./components/CTA"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const BackgroundPattern = lazy(() =>
  import("@/components/ui/enhanced-decorations").then((module) => ({
    default: module.BackgroundPattern,
  }))
);

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest-500"></div>
  </div>
);

// Optimized page component
const HomePage: React.FC = React.memo(() => {
  return (
    <div className="min-h-screen bg-white">
      {/* Global Background Pattern */}
      <BackgroundPattern />

      {/* Navigation */}
      <Suspense fallback={<div className="h-16 bg-white" />}>
        <Navbar />
      </Suspense>

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>

        {/* Problems Section */}
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <Problems />
        </Suspense>

        {/* Services Section */}
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <Services />
        </Suspense>

        {/* Technology Section */}
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <Technology />
        </Suspense>

        {/* ROI Section */}
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <ROI />
        </Suspense>

        {/* Success Stories Section */}
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <SuccessStories />
        </Suspense>

        {/* Video Demo Section */}
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <VideoDemo />
        </Suspense>

        {/* FAQ Section */}
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <FAQ />
        </Suspense>

        {/* CTA Section */}
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <CTA />
        </Suspense>
      </main>

      {/* Footer */}
      <Suspense fallback={<div className="h-64 bg-gray-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
});

HomePage.displayName = "HomePage";

export default HomePage;
