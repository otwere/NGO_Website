import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Droplet, Home, Heart, Timer } from "lucide-react";
import { Link } from "react-router-dom";
export function WaterCause() {
  const stats = [{
    icon: <Droplet />,
    value: "100+",
    label: "Communities Served"
  }, {
    icon: <Home />,
    value: "50,000+",
    label: "People Impacted"
  }, {
    icon: <Heart />,
    value: "80%",
    label: "Health Improvement"
  }, {
    icon: <Timer />,
    value: "70%",
    label: "Time Saved"
  }];
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0
  }} className="min-h-screen">
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581795669633-91ef7c9699a8" alt="Clean Water" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Clean Water Initiative
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Ensuring access to clean water in rural communities through
              sustainable water systems.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-blue-600 w-12 h-12 mx-auto mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>)}
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-96">
            <img src="https://images.unsplash.com/photo-1592844002373-a55ecd7af0bf" alt="Water project" className="rounded-lg object-cover w-full h-full" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Impact</h2>
            <p className="text-gray-600 mb-6">
              Access to clean water transforms communities by improving health,
              enabling education, and fostering economic growth. Our initiative
              includes:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Installing sustainable water systems
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Training communities in system maintenance
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Promoting hygiene education
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Establishing water management committees
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Link to="/donate" className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Support Clean Water
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>;
}