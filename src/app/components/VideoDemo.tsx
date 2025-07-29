import React from "react";
import { motion } from "framer-motion";

const VideoDemo: React.FC = () => {
  const videoUrl =
    "https://11propbucket.s3.us-east-1.amazonaws.com/Screen+Recording+2025-07-30+at+00.26.00.mov";

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
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900 mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            Watch how our platform transforms construction management and
            streamlines your workflow.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          <video
            className="w-full h-full object-cover"
            controls
            preload="metadata"
            playsInline
          >
            <source src={videoUrl} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;
