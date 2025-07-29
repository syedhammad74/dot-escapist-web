import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Services from "./components/Services";
import Technology from "./components/Technology";
import ROI from "./components/ROI";
import SuccessStories from "./components/SuccessStories";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import {
  EnhancedDecorations,
  BackgroundPattern,
} from "@/components/ui/enhanced-decorations";

export default function Home() {
  return (
    <div className="relative">
      <BackgroundPattern />
      <Hero />
      <Problems />
      <Services />
      <Technology />
      <ROI />
      <SuccessStories />
      <FAQ />
      <CTA />
    </div>
  );
}
