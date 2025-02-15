import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export function Programs() {
  const programs = [{
    title: "Education for All",
    category: "Education",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "Providing quality education to underprivileged children through school support and learning resources.",
    impact: "50,000+ students supported",
    locations: ["Kenya", "Uganda", "Tanzania"],
    id: 1
  }, {
    title: "Clean Water Initiative",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "Building sustainable water systems in rural communities to provide clean drinking water.",
    impact: "100+ communities served",
    locations: ["Ethiopia", "Somalia", "Sudan"],
    id: 2
  }, {
    title: "Healthcare Access",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "Mobile clinics and healthcare facilities bringing medical care to remote areas.",
    impact: "200,000+ patients treated",
    locations: ["Rwanda", "Burundi", "Congo"],
    id: 3
  }];
  const successStories = [{
    title: "Village Transformation",
    location: "Rural Kenya",
    story: "How clean water access transformed an entire community's health and economy.",
    image: "https://images.unsplash.com/photo-1541004995-7fc4a9de1513?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  }, {
    title: "Education Success",
    location: "Uganda",
    story: "A story of how our education program helped Sarah achieve her dreams.",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  }];
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0
  }} className="max-w-8xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Our Programs
      </h1>
      <section id="education" className="mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600">
                  {program.category}
                </span>
                <h3 className="text-xl font-semibold mt-2">{program.title}</h3>
                <p className="mt-3 text-gray-600">{program.description}</p>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-medium text-gray-900">
                    Impact: {program.impact}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {program.locations.map((location, i) => <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {location}
                      </span>)}
                  </div>
                </div>
                <Link to={`/programs/${program.id}`} className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>)}
        </div>
      </section>
      <section id="healthcare" className="mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600">
                  {program.category}
                </span>
                <h3 className="text-xl font-semibold mt-2">{program.title}</h3>
                <p className="mt-3 text-gray-600">{program.description}</p>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-medium text-gray-900">
                    Impact: {program.impact}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {program.locations.map((location, i) => <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {location}
                      </span>)}
                  </div>
                </div>
                <Link to={`/programs/${program.id}`} className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>)}
        </div>
      </section>
      <section id="water" className="mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600">
                  {program.category}
                </span>
                <h3 className="text-xl font-semibold mt-2">{program.title}</h3>
                <p className="mt-3 text-gray-600">{program.description}</p>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-medium text-gray-900">
                    Impact: {program.impact}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {program.locations.map((location, i) => <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {location}
                      </span>)}
                  </div>
                </div>
                <Link to={`/programs/${program.id}`} className="text-blue-600 font-semibold hover:text-blue-700">
                  Learn More →
                </Link>
              </div>
            </div>)}
        </div>
      </section>
      <section id="stories">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {successStories.map((story, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img src={story.image} alt={story.title} className="h-48 w-full md:w-48 object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{story.title}</h3>
                  <p className="text-sm text-blue-600 mb-2">{story.location}</p>
                  <p className="text-gray-600">{story.story}</p>
                  <Link to={story.title === "Village Transformation" ? "/stories/water-transformation" : "/stories/education-success"} className="mt-4 text-blue-600 font-semibold hover:text-blue-700 inline-block">
                    Read Full Story →
                  </Link>
                </div>
              </div>
            </div>)}
        </div>
      </section>
    </motion.div>;
}