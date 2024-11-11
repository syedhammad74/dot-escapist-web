"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  Code,
  Cloud,
  Shield,
  Cpu,
  Server,
  ExternalLink,
  Globe,
  Users,
  Award,
} from "lucide-react";

// Custom Components
const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`p-4 tsm:p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700 backdrop-blur-lg bg-gray-800/60 ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 tsm:mb-6 sm:mb-8">{children}</div>
);

const CardTitle = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={`text-2xl tsm:text-3xl sm:text-4xl font-extrabold text-white ${className}`}
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
  <p className={`text-base tsm:text-lg sm:text-xl text-gray-400 ${className}`}>
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
    className={`inline-block px-2 py-1 tsm:px-3 tsm:py-2 sm:px-4 sm:py-2 rounded-full bg-orange-500/20 text-orange-300 text-xs tsm:text-sm sm:text-base font-semibold ${className}`}
  >
    {children}
  </span>
);

const Button = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <button
    className={`px-4 py-2 tsm:px-6 tsm:py-3 sm:px-8 sm:py-4 rounded-full font-bold transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

const Progress = ({
  value,
  className = "",
}: {
  value: number;
  className?: string;
}) => (
  <div className={`w-full bg-gray-700 rounded ${className}`}>
    <div
      className="h-2 tsm:h-3 sm:h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded"
      style={{ width: `${value}%` }}
    ></div>
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
    className={`flex items-center px-3 py-1 tsm:px-4 tsm:py-2 sm:px-5 sm:py-3 rounded-lg transition-colors duration-300 font-medium text-xs tsm:text-sm sm:text-base ${
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
  <div className="mt-4 tsm:mt-6 sm:mt-8">{children}</div>
);

const expertiseAreas = [
  {
    name: "Full Stack",
    icon: Code,
    description: "Comprehensive front-end and back-end development services.",
    progress: 90,
    technologies: ["React", "Node.js", "GraphQL"],
    features: ["Responsive Design", "API Integration"],
  },
  {
    name: "Cloud",
    icon: Cloud,
    description: "Cloud infrastructure and solutions for scalability.",
    progress: 85,
    technologies: ["AWS", "Azure", "GCP"],
    features: ["Scalable Architecture", "Cloud Security"],
  },
  {
    name: "Ecommerce",
    icon: Shield,
    description: "HIPAA, HL7, HITECH—we handle the toughest compliance needs.",
    progress: 80,
    technologies: ["HL7", "FHIR", "Blockchain"],
    features: ["Data Encryption", "Audit Trails", "Compliance"],
  },
  {
    name: "DevOps & CI/CD",
    icon: Server,
    description:
      "Our DevOps approach ensures your business scales fast and securely.",
    progress: 88,
    technologies: ["Docker", "Kubernetes", "Jenkins"],
    features: ["Continuous Integration", "Automation", "Scalable Deployments"],
  },
  {
    name: "Designing",
    icon: Cpu,
    description:
      "Cutting-edge AI solutions for predictive analytics and automation.",
    progress: 85,
    technologies: ["TensorFlow", "PyTorch", "Scikit-Learn"],
    features: ["Predictive Analytics", "Deep Learning", "Data Analysis"],
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
  const [animatedCount, setAnimatedCount] = useState<{ [key: string]: number }>(
    {
      "Global Reach": 0,
      "Client Base": 0,
      Recognition: 0,
    }
  );
  const achievementsRef = useRef(null);
  const isInView = useInView(achievementsRef, { once: true, amount: 0.2 });

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
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <section className="min-h-screen w-full text-white bg-gradient-to-tr from-orange-900 via-black to-orange-900 py-8 tsm:py-12 sm:py-16 px-4 tsm:px-6 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 tsm:mb-12 sm:mb-16"
        >
          <h1 className="text-5xl tsm:text-6xl sm:text-7xl font-extrabold mb-6 tsm:mb-8 sm:mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-50">
              What Makes Us Escapists?
            </span>
          </h1>
          <p className="text-2xl tsm:text-3xl sm:text-4xl text-orange-500 font-semibold mb-4 tsm:mb-6 sm:mb-8">
            Why We’re Not Just Another Tech Company
          </p>
          <p className="text-base tsm:text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
              <TabsList className="grid grid-cols-2 xs:grid-cols-2 tsm:grid-cols-3 lg:grid-cols-5 gap-2 tsm:gap-3 sm:gap-4 mb-4 tsm:mb-6">
                {expertiseAreas.map((area) => (
                  <TabsTrigger
                    key={area.name}
                    isActive={activeExpertise === area.name}
                    onClick={() => setActiveExpertise(area.name)}
                  >
                    <area.icon className="w-4 h-4 tsm:w-5 tsm:h-5 sm:w-6 sm:h-6" />
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
                          className="grid gap-4 tsm:gap-6 sm:gap-8 lg:grid-cols-2 items-center"
                        >
                          <div className="space-y-3 tsm:space-y-4 sm:space-y-6">
                            <div>
                              <h3 className="text-xl tsm:text-2xl sm:text-3xl font-extrabold text-orange-500 mb-2 tsm:mb-3">
                                {area.name}
                              </h3>
                              <p className="text-sm tsm:text-base sm:text-lg text-gray-300 leading-relaxed">
                                {area.description}
                              </p>
                            </div>
                            <div>
                              <div className="flex justify-between items-center mb-2 tsm:mb-3">
                                <span className="text-xs tsm:text-sm font-medium text-gray-400">
                                  Expertise Level
                                </span>
                                <span className="text-xs tsm:text-sm font-bold text-orange-500">
                                  {area.progress}%
                                </span>
                              </div>
                              <Progress value={area.progress} />
                            </div>
                            <div className="space-y-3 tsm:space-y-4 sm:space-y-6">
                              <div>
                                <h4 className="text-xs tsm:text-sm font-medium text-gray-400 mb-1">
                                  Key Technologies
                                </h4>
                                <div className="flex flex-wrap gap-1 tsm:gap-2 sm:gap-3">
                                  {area.technologies.map((tech: string) => (
                                    <Badge key={tech}>{tech}</Badge>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <h4 className="text-xs tsm:text-sm font-medium text-gray-400 mb-1">
                                  Core Features
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 tsm:gap-2 sm:gap-3 text-xs tsm:text-sm text-gray-300">
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
          className="mb-8 tsm:mb-12 sm:mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle>Global Impact</CardTitle>
              <CardDescription>Our achievements and milestones</CardDescription>
            </CardHeader>
            <div className="p-4 tsm:p-6 sm:p-8">
              <div className="grid gap-8 tsm:gap-10 sm:gap-12 sm:grid-cols-1 lg:grid-cols-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="relative w-28 h-28 tsm:w-36 tsm:h-36 sm:w-52 sm:h-52 mx-auto mb-3 tsm:mb-4 sm:mb-6">
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
                        <achievement.icon className="w-10 h-10 tsm:w-12 tsm:h-12 sm:w-14 sm:h-14 mb-1 text-orange-500" />
                        <span className="text-xl tsm:text-2xl sm:text-3xl font-extrabold">
                          {animatedCount[achievement.title]}
                          {achievement.suffix}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xs tsm:text-sm sm:text-base font-semibold text-orange-500 mb-1 tsm:mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-xs tsm:text-sm sm:text-base text-gray-400">
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
