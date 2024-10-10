import Hero from "../app/components/Hero";
import Services from "../app/components/Services";
import Expertise from "./components/Expertise";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <Expertise />
      <Services />
      <Testimonials />
      {/* <Careers /> */}
      <Pricing />
      <CTA />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
