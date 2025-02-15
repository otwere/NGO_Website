import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Droplet, Shield, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
export function WaterProgram() {
  const initiatives = [{
    title: "Water Well Construction",
    description: "Building sustainable water sources in communities",
    metrics: "250+ wells constructed"
  }, {
    title: "Sanitation Facilities",
    description: "Implementing proper sanitation infrastructure",
    metrics: "100+ facilities built"
  }, {
    title: "Community Training",
    description: "Education on maintenance and hygiene practices",
    metrics: "5,000+ people trained"
  }, {
    title: "Water Quality Testing",
    description: "Regular monitoring of water sources",
    metrics: "1,000+ tests conducted"
  }];
  const successStories = [{
    name: "Kipkaren's Transformation",
    location: "Rural Kenya",
    story: "How clean water changed an entire village",
    image: "https://images.unsplash.com/photo-1592844002373-a55ecd7af0bf"
  }, {
    name: "The Well of Hope",
    location: "Tanzania",
    story: "A community's journey to water security",
    image: "https://images.unsplash.com/photo-1541244447095-e619cb47671e"
  }];
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-white">
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581795669633-91ef7c9699a8" alt="Water Program" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Water Program
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Providing sustainable access to clean water and sanitation
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
            <p className="text-gray-600 mb-6">
              Our water program focuses on providing sustainable access to clean
              water through comprehensive infrastructure development and
              community engagement. We ensure long-term success through
              education and maintenance training.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Droplet className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">100,000+</div>
                <div className="text-sm text-gray-600">People Served</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">80%</div>
                <div className="text-sm text-gray-600">Disease Reduction</div>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <img src="https://images.unsplash.com/photo-1592844002373-a55ecd7af0bf" alt="Water project" className="rounded-lg object-cover w-full h-full" />
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Initiatives
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <div className="text-blue-600 font-medium">
                  {initiative.metrics}
                </div>
              </div>)}
          </div>
        </div>
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={story.image} alt={story.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                  <p className="text-blue-600 mb-2">{story.location}</p>
                  <p className="text-gray-600">{story.story}</p>
                  <Link to="/stories/water-transformation" className="mt-4 text-blue-600 font-semibold hover:text-blue-700 inline-block">
                    Read Full Story →
                  </Link>
                </div>
              </div>)}
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