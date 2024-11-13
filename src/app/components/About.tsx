"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Globe, Users, Award } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa"; // E-commerce
import { MdCloud } from "react-icons/md"; // Cloud Computing
import { SiDocker } from "react-icons/si"; // DevOps
import { FiEdit } from "react-icons/fi"; // Design

// Custom Components
const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`p-4 sm:p-6 rounded-lg shadow-lg border border-gray-700 backdrop-blur-lg bg-gray-800/60 ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 sm:mb-6 ">{children}</div>
);

const CardTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={`text-xl tsm:text-xl sm:text-xl lg:text-4xl font-extrabold text-white ${className}`}
  >
    {children}
  </h3>
);

const CardDescription = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p
    className={`text-base tsm:text-lg sm:text-lg lg:text-xl text-gray-400 ${className}`}
  >
    {children}
  </p>
);

const Badge = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`inline-block px-2 py-1 sm:px-3 sm:py-2 rounded-full bg-orange-500/20 text-orange-300 text-xs tsm:text-sm sm:text-sm font-semibold ${className}`}
  >
    {children}
  </span>
);

const Progress = ({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) => (
  <div className={`w-full bg-gray-700 rounded ${className}`}>
    <motion.div
      className="h-2 sm:h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded"
      initial={{ width: "0%" }}
      animate={{ width: `${value}%` }}
      transition={{ duration: 1, ease: "easeInOut" }}
    ></motion.div>
    <motion.span
      className="text-xs sm:text-xs font-bold text-orange-500 mt-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      {value}%
    </motion.span>
  </div>
);

const Tabs = ({ children }: { children: React.ReactNode }) => (
  <div>{children}</div>
);

const TabsList = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`flex flex-wrap gap-2 tsm:gap-3 sm:gap-4 ${className}`}>
    {children}
  </div>
);

const TabsTrigger = ({
  children,
  isActive,
  onClick,
}: {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    className={`flex items-center px-3 py-1 sm:px-4 sm:py-2 lg:px-5 lg:py-3 rounded-lg transition-colors duration-300 font-medium text-xs tsm:text-sm sm:text-sm ${
      isActive
        ? "bg-orange-500 text-white hover:bg-orange-600"
        : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
    }`}
    onClick={onClick}
  >
    <span className="flex items-center gap-2">{children}</span>
  </button>
);

const TabsContent = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 tsm:mt-6 sm:mt-6">{children}</div>
);

const expertiseAreas = [
  {
    name: "Full Stack",
    icon: Code,
    description:
      "Creating both the front and back ends of web applications for a seamless experience.",
    progress: 90,
    technologies: [
      "React",
      "Next.js",
      "Vue 3",
      "Typescript",
      "Python",
      "Django",
      "FastAPI",
    ],
    features: [
      "Responsive interfaces",
      "Secure back-end",
      "Database handling",
      "API Integration",
    ],
  },
  {
    name: "Cloud",
    icon: MdCloud,
    description:
      "Delivering on-demand internet services like storage, servers, and apps for scalability and flexibility.",
    progress: 85,
    technologies: ["AWS", "Azure", "GCP", "Google Cloud Functions"],
    features: [
      "Scalable resources",
      "Cost efficiency",
      "Remote access",
      "Cloud Security",
    ],
  },
  {
    name: "Ecommerce",
    icon: FaShoppingCart,
    description:
      "Building online stores and tools that make buying and selling easy and secure.",
    progress: 80,
    technologies: ["Bigcommerce", "Woocommerce", "Shopify Plus"],
    features: [
      "Product management",
      "Secure payments",
      "Customer analytics",
      "Inventory tracking",
    ],
  },
  {
    name: "DevOps",
    icon: SiDocker,
    description:
      "Streamlining software development and operations for faster, more reliable updates.",
    progress: 88,
    technologies: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    features: [
      "CI/CD automation",
      "Code-based infrastructure",
      "Monitoring tools",
      "Team collaboration",
    ],
  },
  {
    name: "Designing",
    icon: FiEdit,
    description:
      "Crafting visually appealing and easy-to-use digital interfaces for a great user experience.",
    progress: 85,
    technologies: ["Figma", "Canva", "Blender", "Sketch"],
    features: [
      "Prototyping and testing",
      "Team collaboration",
      "Responsive layouts",
      "User insights",
    ],
  },
];

const achievements = [
  {
    title: "Global Reach",
    value: 30,
    suffix: "+",
    description: "Countries served with our solutions.",
    icon: Globe,
  },
  {
    title: "Client Base",
    value: 500,
    suffix: "+",
    description: "Happy clients across the globe.",
    icon: Users,
  },
  {
    title: "Recognition",
    value: 15,
    suffix: "+",
    description: "Industry awards and recognitions.",
    icon: Award,
  },
];

export default function AboutSection() {
  const [activeExpertise, setActiveExpertise] = useState<string>("Full Stack");
  const [animatedProgress, setAnimatedProgress] = useState<number>(0);
  const [animatedCount, setAnimatedCount] = useState<{ [key: string]: number }>(
    {
      "Global Reach": 0,
      "Client Base": 0,
      Recognition: 0,
    }
  );
  const achievementsRef = useRef<HTMLDivElement | null>(null);
  const isInView =
    achievementsRef.current?.getBoundingClientRect().top ??
    0 < window.innerHeight;

  useEffect(() => {
    if (activeExpertise) {
      const targetProgress = expertiseAreas.find(
        (area) => area.name === activeExpertise
      )?.progress;
      if (targetProgress !== undefined) {
        setAnimatedProgress(0);
        const progressInterval = setInterval(() => {
          setAnimatedProgress((prev) => {
            if (prev < targetProgress) {
              return prev + 1;
            } else {
              clearInterval(progressInterval);
              return targetProgress;
            }
          });
        }, 10);
        return () => clearInterval(progressInterval);
      }
    }
  }, [activeExpertise]);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setAnimatedCount((prev) => {
          const newCounts = { ...prev };
          let allCompleted = true;
          achievements.forEach((achievement) => {
            if (newCounts[achievement.title] < achievement.value) {
              newCounts[achievement.title] += 1;
              allCompleted = false;
            }
          });
          if (allCompleted) clearInterval(interval);
          return newCounts;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section
      id="About"
      className="min-h-screen w-full text-white bg-gradient-to-tr from-orange-900 via-black to-orange-900 py-8 tsm:py-12 sm:py-16 px-4 tsm:px-6 sm:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 "
        >
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold mb-6 sm:mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-50">
              What Makes Us Escapists?
            </span>
          </h1>
          <p className="text-xl sm:text-xl lg:text-4xl text-orange-500 font-semibold mb-4 sm:mb-6">
            Why We’re Not Just Another Tech Company
          </p>
          <p className="text-base tsm:text-base sm:text-base lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Dot Escapists, we specialize in breaking barriers and escaping
            the limitations of traditional software and cloud solutions. Whether
            you need to scale with Full Stack Development, navigate the
            complexities of Cloud Architecture, streamline operations with
            DevOps, or craft stunning, user-centered designs, we deliver bespoke
            solutions that push boundaries and exceed expectations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 tsm:mb-12 sm:mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle>What we do?</CardTitle>
              <CardDescription>
                Discover our technical capabilities
              </CardDescription>
            </CardHeader>
            <Tabs>
              <TabsList className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-2 tsm:gap-2 sm:gap-2 mb-6 tsm:mb-6">
                {expertiseAreas.map((area) => (
                  <TabsTrigger
                    key={area.name}
                    isActive={activeExpertise === area.name}
                    onClick={() => setActiveExpertise(area.name)}
                  >
                    <area.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{area.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              <AnimatePresence mode="wait">
                {expertiseAreas.map(
                  (area) =>
                    activeExpertise === area.name && (
                      <TabsContent key={area.name}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.4 }}
                          className="grid gap-4 tsm:gap-6 sm:gap-6 lg:grid-cols-2 items-center"
                        >
                          <div className="space-y-3 tsm:space-y-6 sm:space-y-6">
                            <div>
                              <h3 className="text-lg tsm:text-xl sm:text-xl lg:text-3xl font-extrabold text-orange-500 mb-3 tsm:mb-3">
                                {area.name}
                              </h3>
                              <p className="text-sm tsm:text-base sm:text-base text-gray-300 leading-relaxed">
                                {area.description}
                              </p>
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-2 sm:mb-3">
                                <span className="text-xs tsm:text-sm font-medium text-gray-400">
                                  Expertise Level
                                </span>
                                <motion.span
                                  className="text-xs tsm:text-sm font-bold text-orange-500"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                  }}
                                >
                                  {animatedProgress}%
                                </motion.span>
                              </div>
                              <Progress value={animatedProgress} />
                            </div>
                            <div className="space-y-3 tsm:space-y-6 sm:space-y-6">
                              <div>
                                <h4 className="text-xs tsm:text-xs font-medium text-gray-400 mb-1">
                                  Key Technologies
                                </h4>
                                <div className="flex flex-wrap gap-1 tsm:gap-2 sm:gap-2">
                                  {area.technologies.map((tech: string) => (
                                    <Badge key={tech}>{tech}</Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-xs tsm:text-sm font-medium text-gray-400 mb-1">
                                  Core Features
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-1 gap-1 tsm:gap-2 sm:gap-3 text-xs tsm:text-sm text-gray-300">
                                  {area.features.map((feature: string) => (
                                    <li
                                      key={feature}
                                      className="flex items-center gap-1 tsm:gap-2"
                                    >
                                      <div className="w-2 h-2 tsm:w-2.5 tsm:h-2.5 sm:w-3 sm:h-3 rounded-full bg-orange-500" />
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="hidden lg:flex justify-center items-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="relative w-40 h-40 sm:w-64 sm:h-64 lg:w-80 lg:h-80"
                            >
                              <div className="absolute inset-0 rounded-full border-2 border-orange-500/20"></div>
                              <div className="absolute inset-4 rounded-full border-2 border-orange-400/20"></div>
                              <div className="absolute inset-8 rounded-full border-2 border-orange-300/20"></div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <area.icon className="w-20 h-20 sm:w-28 sm:h-28 text-orange-500" />
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </TabsContent>
                    )
                )}
              </AnimatePresence>
            </Tabs>
          </Card>
        </motion.div>

        <motion.div
          ref={achievementsRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 tsm:mb-12 sm:mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Global Impact</CardTitle>
              <CardDescription>Our achievements and milestones</CardDescription>
            </CardHeader>
            <div className="p-4 tsm:p-6 sm:p-6">
              <div className="grid gap-8 tsm:gap-10 sm:gap-10 lg:grid-cols-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="relative w-28 h-28 tsm:w-36 tsm:h-36 sm:w-36 sm:h-36 mx-auto mb-3 tsm:mb-4 sm:mb-6">
                      <svg
                        className="w-full h-full -rotate-90"
                        viewBox="0 0 100 100"
                      >
                        <circle
                          className="text-gray-700 stroke-current"
                          strokeWidth="8"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                        ></circle>
                        <motion.circle
                          className="text-orange-500 stroke-current"
                          strokeWidth="8"
                          strokeLinecap="round"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          initial={{ pathLength: 0 }}
                          animate={{
                            pathLength:
                              animatedCount[achievement.title] /
                              achievement.value,
                          }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        ></motion.circle>
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <achievement.icon className="w-10 h-10 tsm:w-12 tsm:h-12 sm:w-12 sm:h-12 mb-1 text-orange-500" />
                        <motion.span
                          className="text-xl tsm:text-2xl sm:text-2xl font-extrabold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 1, ease: "easeInOut" }}
                        >
                          {animatedCount[achievement.title]}
                        </motion.span>
                        {achievement.suffix}
                      </div>
                    </div>
                    <h3 className="text-xs tsm:text-sm sm:text-sm font-semibold text-orange-500 mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-xs tsm:text-sm sm:text-sm text-gray-400">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
