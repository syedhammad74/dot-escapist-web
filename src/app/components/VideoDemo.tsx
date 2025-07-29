import React from "react";
import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

const VideoDemo: React.FC = () => {
  const youtubeUrl = "https://youtu.be/3KPxicLpUvQ";
  const embedUrl = "https://www.youtube.com/embed/3KPxicLpUvQ";

  return (
    <section
      id="video-demo"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Watch how our platform transforms construction management and
            streamlines your workflow with unprecedented efficiency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-forest-50"
        >
          <iframe
            src={embedUrl}
            title="ICS Platform Demo"
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </motion.div>

        {/* Video Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-forest-600 text-white font-semibold rounded-xl hover:bg-forest-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Play className="w-5 h-5 mr-2" />
            Watch on YouTube
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>

          <button
            onClick={() => {
              const element = document.getElementById("CTA");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-forest-600 text-forest-600 font-semibold rounded-xl hover:bg-forest-600 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Schedule Demo
          </button>
        </motion.div>

        {/* Video Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto">
              <Play className="w-8 h-8 text-forest-600" />
            </div>
            <h3 className="text-xl font-semibold text-forest-900">Live Demo</h3>
            <p className="text-neutral-600">
              See our platform in action with real construction management
              scenarios.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-forest-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-forest-900">
              Fast & Efficient
            </h3>
            <p className="text-neutral-600">
              Experience the speed and efficiency of AI-powered project
              management.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8 text-forest-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-forest-900">
              Proven Results
            </h3>
            <p className="text-neutral-600">
              See how our platform delivers measurable improvements in project
              outcomes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;
