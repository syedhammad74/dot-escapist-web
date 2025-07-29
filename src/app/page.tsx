import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Services from "./components/Services";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Problems />
      <Services />
      <CTA />
    </div>
  );
}
