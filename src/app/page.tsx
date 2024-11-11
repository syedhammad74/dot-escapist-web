import Hero from "../app/components/Hero";
import Services from "../app/components/Services";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Careers from "./components/About";

export default function Home() {
  return (
    <div>
      <Hero />
      <Careers />
      <Portfolio />
      <Expertise />
      <Services />
      <Testimonials />
      {/* <Careers /> */}
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
