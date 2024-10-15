"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Loader2,
  ChevronDown,
  Zap,
  Globe,
  Shield,
  Cpu,
  ArrowRight,
} from "lucide-react";
import NeuralNetworkBackground from "@/components/ui/NeuralNetworkBackground";

// Orange Gradient Text Component
const OrangeGradientText: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <span
    className={`bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text ${className}`}
  >
    {children}
  </span>
);

// Feature Item Component
const FeatureItem: React.FC<{ icon: React.ElementType; text: string }> = ({
  icon: Icon,
  text,
}) => (
  <motion.div
    className="flex items-center space-x-3 bg-black/10 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
  >
    <Icon className="w-6 h-6 text-orange-500" />
    <span className="text-base text-white font-medium">{text}</span>
  </motion.div>
);

// Main Component
const DotescapistInterface: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(`Thank you for your interest! We'll contact you at ${email}`);
      setEmail("");
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-orange-900 text-white overflow-hidden">
      <NeuralNetworkBackground />

      <div className="relative z-10 top-36 sm:top-16 flex flex-col justify-center items-center min-h-screen text-center px-6 sm:px-10 lg:px-14">
        <motion.h1
          className="text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-8 tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
        >
          Welcome to the
          <br />
          <OrangeGradientText className="text-4xl sm:text-7xl md:text-8xl">
            Dot Escapist
          </OrangeGradientText>
          <br />
          Experience
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl mb-10 max-w-2xl text-white/90 font-light"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
        >
          Embark on a journey through digital realms where innovation meets
          imagination.
        </motion.p>

        <motion.form
          className="flex flex-col sm:flex-row gap-4 mb-12 w-full h-14 max-w-4xl items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-96 bg-white/10 border border-orange-500/50 text-white placeholder-white/70 focus:ring-2 focus:ring-orange-400 rounded-md px-4 py-3 transition-all duration-300 ease-in-out focus:border-orange-600"
          />
          <button
            type="submit"
            className="w-52 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <div className="flex items-center justify-center gap-2">
                Join the Escape
                <Zap className="h-5 w-5" />
              </div>
            )}
          </button>
        </motion.form>

        <motion.div
          className="flex flex-wrap justify-center gap-6 md:gap-28 bottom-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
        >
          <FeatureItem icon={Globe} text="Global Digital Ecosystem" />
          <FeatureItem icon={Shield} text="Quantum-Secure Networks" />
          <FeatureItem icon={Cpu} text="AI-Powered Innovations" />
          <FeatureItem icon={ArrowRight} text="Future-Proof Solutions" />
        </motion.div>
      </div>
    </div>
  );
};

export default DotescapistInterface;
