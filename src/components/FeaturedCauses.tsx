import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export function FeaturedCauses() {
  const causes = [{
    title: "Education for All",
    description: "Providing quality education to underprivileged children",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
    link: "/causes/education"
  }, {
    title: "Clean Water Initiative",
    description: "Ensuring access to clean water in rural communities",
    image: "https://ix-marketing.imgix.net/genfill.png?auto=format,compress&w=1446",
    link: "/causes/water"
  }, {
    title: "Healthcare Access",
    description: "Bringing medical care to remote areas",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    link: "/causes/healthcare"
  }];
  return <div className="py-16 relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Causes</h2>
          <p className="mt-4 text-lg text-gray-600">
            Support our ongoing Initiatives
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="glass-card  rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative">
                <img src={cause.image} alt={cause.title} className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {cause.title}
                </h3>
                <p className="mt-2 text-gray-600">{cause.description}</p>
                <Link to={cause.link} className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>)}
        </div>
      </div>
    </div>;
}