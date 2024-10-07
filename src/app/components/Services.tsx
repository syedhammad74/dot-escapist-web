"use client";
import {
  FaCode,
  FaCogs,
  FaMobileAlt,
  FaCloud,
  FaDatabase,
  FaPaintBrush,
  FaRobot,
  FaProjectDiagram,
  FaBrain,
  FaShieldAlt,
  FaNetworkWired,
  FaLaptopCode,
} from "react-icons/fa";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

// Services data with improved descriptions and icons
const servicesData: CardType[] = [
  {
    title: "Frontend Development",
    description:
      "Crafting responsive and interactive user interfaces with modern technologies like React and Angular.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Backend Development",
    description:
      "Building robust server-side applications and APIs using Node.js, Django, and more.",
    icon: <FaDatabase />,
  },
  {
    title: "DevOps Engineering",
    description:
      "Automating deployment, scaling processes, and ensuring continuous integration and delivery.",
    icon: <FaCogs />,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Implementing intelligent systems using AI models to drive innovation and efficiency.",
    icon: <FaBrain />,
  },
  {
    title: "Prompt Engineering",
    description:
      "Designing advanced prompts for AI models like GPT to achieve desired outcomes.",
    icon: <FaRobot />,
  },
  {
    title: "GPT Model Development",
    description:
      "Developing custom GPT models tailored to specific business needs and applications.",
    icon: <FaProjectDiagram />,
  },
  {
    title: "Cloud Solutions",
    description:
      "Leveraging AWS, Azure, and GCP for scalable and secure cloud infrastructure.",
    icon: <FaCloud />,
  },
  {
    title: "Full Stack Development",
    description:
      "Providing end-to-end solutions from frontend to backend development.",
    icon: <FaLaptopCode />,
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative h-[150vh] overflow-hidden bg-gradient-to-b from-white via-white to-white py-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white opacity-90"></div>

      {/* Floating Decorative Circles */}
      <div className="absolute bottom-8 right-[-70px] w-[250px] h-[250px] bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 rounded-full blur-3xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute top-10 left-[-110px] w-[220px] h-[220px] bg-gradient-to-tl from-orange-300 via-orange-400 to-orange-500 rounded-full blur-3xl opacity-70 animate-spin-slow"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Header />
        <HorizontalScrollCarousel />
      </div>
    </section>
  );
};

const Header = () => (
  <div className="mb-12 text-center">
    <h2 className="text-5xl font-extrabold text-black">
      Our Professional Services
    </h2>
    <p className="mt-4 text-gray-600 text-lg">
      We offer a wide range of services to meet your needs.
    </p>
  </div>
);

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-130%"]);

  return (
    <div ref={targetRef} className="relative h-[100vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {servicesData.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.title}
      className="group relative h-[400px] w-[300px] flex-shrink-0 bg-gradient-to-b from-white to-gray-100 text-black rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105"
    >
      {/* Decorative Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-2xl transition-all duration-300"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        <div className="text-5xl text-orange-500 mb-4 group-hover:text-orange-600 transition-colors duration-300">
          {card.icon}
        </div>
        <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-orange-500 transition-colors duration-300">
          {card.title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
          {card.description}
        </p>
        {/* Learn More Button */}
        <button className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;

type CardType = {
  title: string;
  description: string;
  icon: JSX.Element;
};
