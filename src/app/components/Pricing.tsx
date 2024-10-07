import { Check } from "lucide-react";

const plans = [
  {
    name: "Custom Cloud Solutions",
    price: "$4999/mo",
    description:
      "Best suited for companies that need custom cloud architecture, API development, or integration solutions.",
    features: [
      "Custom cloud architecture design (AWS / Azure / GCP)",
      "API development & integration",
      "Scalable microservices architecture",
      "DevOps & CI/CD pipelines",
      "Cloud Security & Compliance",
      "24-hour support response time",
      "Unlimited Revisions",
      "Private communication channel",
      "4-7 days turnaround time",
      "Pause or cancel anytime",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Full-Stack Development",
    price: "$6999/mo",
    description:
      "Ideal for startups and businesses that require full-stack development and cloud integration with ongoing support.",
    features: [
      "React / Next.js development",
      "Custom API development",
      "Cloud integration (AWS / Azure / GCP)",
      "Scalable infrastructure design",
      "SEO optimization",
      "Continuous delivery & support",
      "Private communication channel",
      "7-10 days turnaround time",
      "Pause or cancel anytime",
    ],
    cta: "Buy Now",
    highlighted: true, // This is the highlighted card
  },
  {
    name: "Enterprise DevOps Solutions",
    price: "starts at $15,000",
    description:
      "Tailored for large-scale enterprises in need of advanced DevOps automation, cloud security, and multi-cloud infrastructure.",
    features: [
      "Custom multi-cloud architecture (AWS / GCP / Azure)",
      "Advanced DevOps automation & CI/CD",
      "Cloud security implementation",
      "Infrastructure as Code (IaC)",
      "24/7 monitoring & alerting",
      "AI-driven cloud optimization",
      "Negotiable delivery time",
      "Unlimited Revisions",
      "Private communication channel",
    ],
    cta: "Contact Us",
    highlighted: false,
  },
];

export default function PricingTable() {
  return (
    <div id="pricing" className="bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center gap-3">
        <h2 className="backdrop-blur-lg bg-white/10 text-white rounded-full w-fit px-3 py-1 text-xs">
          Our Price
        </h2>
        <h2 className="text-center text-white text-3xl font-bold pb-10">
          Pricing
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden flex flex-col hover:scale-105 transition-all duration-150 justify-between ${
                plan.highlighted
                  ? "backdrop-blur-lg bg-white/10 h-[50rem]" // Custom height for Full-Stack Development
                  : "bg-neutral-900 border border-gray-800 h-[48rem]"
              }`}
            >
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h2>
                <p className="text-3xl font-bold text-white mb-4">
                  {plan.price}
                </p>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <button
                  className={`w-full py-2 px-4 rounded ${
                    plan.highlighted
                      ? "bg-[#f14a2de8] hover:bg-[#ef2906] shadow-md shadow-gray-800 active:shadow-inner text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  }`}
                >
                  {plan.cta}
                </button>
                <p className="text-center text-gray-500 mt-4">Questions?</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
