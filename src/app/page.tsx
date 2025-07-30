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

// Perfect Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-primary-300 rounded-full animate-ping"></div>
    </div>
  </div>
);

// Perfect Section Loading Component
const SectionLoader = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse ${className}`}>
    <div className="container mx-auto px-4 py-20">
      <div className="space-y-8">
        <div className="h-8 bg-neutral-200 rounded-lg w-1/3 mx-auto"></div>
        <div className="h-4 bg-neutral-200 rounded w-1/2 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-neutral-200 rounded-2xl"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// Optimized page component with perfect layout
const HomePage: React.FC = React.memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Perfect Navigation */}
      <Suspense fallback={<div className="h-20 bg-white/95 backdrop-blur-xl border-b border-neutral-200" />}>
        <Navbar />
      </Suspense>

      {/* Main Content with Perfect Structure */}
      <main className="relative overflow-hidden">
        {/* Hero Section - Full Height */}
        <Suspense fallback={<LoadingSpinner />}>
          <section className="relative min-h-screen flex items-center">
            <Hero />
          </section>
        </Suspense>

        {/* Problems Section - Perfect Spacing */}
        <Suspense fallback={<SectionLoader className="bg-white" />}>
          <section className="section bg-white relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-white"></div>
            <div className="relative z-10">
              <Problems />
            </div>
          </section>
        </Suspense>

        {/* Services Section - Perfect Spacing */}
        <Suspense fallback={<SectionLoader className="bg-gradient-to-br from-primary-50 to-white" />}>
          <section className="section bg-gradient-to-br from-primary-50 via-white to-primary-50 relative">
            <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
            <div className="relative z-10">
              <Services />
            </div>
          </section>
        </Suspense>

        {/* Technology Section - Perfect Spacing */}
        <Suspense fallback={<SectionLoader className="bg-white" />}>
          <section className="section bg-white relative">
            <div className="absolute inset-0 bg-gradient-to-tl from-neutral-50 to-white"></div>
            <div className="relative z-10">
              <Technology />
            </div>
          </section>
        </Suspense>

        {/* ROI Section - Perfect Spacing */}
        <Suspense fallback={<SectionLoader className="bg-gradient-to-br from-primary-50 to-white" />}>
          <section className="section bg-gradient-to-br from-primary-50 via-white to-primary-50 relative">
            <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
            <div className="relative z-10">
              <ROI />
            </div>
          </section>
        </Suspense>

        {/* Success Stories Section - Perfect Spacing */}
        <Suspense fallback={<SectionLoader className="bg-white" />}>
          <section className="section bg-white relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 to-white"></div>
            <div className="relative z-10">
              <SuccessStories />
            </div>
          </section>
        </Suspense>

        {/* Video Demo Section - Perfect Spacing */}
        <Suspense fallback={<SectionLoader className="bg-gradient-to-br from-primary-50 to-white" />}>
          <section className="section bg-gradient-to-br from-primary-50 via-white to-primary-50 relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative z-10">
              <VideoDemo />
            </div>
          </section>
        </Suspense>

        {/* FAQ Section - Perfect Spacing */}
        <Suspense fallback={<SectionLoader className="bg-white" />}>
          <section className="section bg-white relative">
            <div className="absolute inset-0 bg-gradient-to-tl from-neutral-50 to-white"></div>
            <div className="relative z-10">
              <FAQ />
            </div>
          </section>
        </Suspense>

        {/* CTA Section - Perfect Spacing */}
        <Suspense fallback={<SectionLoader className="bg-gradient-to-br from-primary-600 to-primary-700" />}>
          <section className="section bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 to-primary-700/90"></div>
            <div className="relative z-10">
              <CTA />
            </div>
          </section>
        </Suspense>
      </main>

      {/* Perfect Footer */}
      <Suspense fallback={<div className="h-64 bg-neutral-900" />}>
        <Footer />
      </Suspense>

      {/* Perfect Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-primary-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
});

HomePage.displayName = "HomePage";

export default HomePage;
