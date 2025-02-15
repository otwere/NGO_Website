import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
export function PressReleases() {
  const pressReleases = [{
    id: 1,
    title: "HopeWorks Launches New Education Initiative in East Africa",
    date: "2023-08-20",
    category: "Programs",
    excerpt: "New program aims to provide quality education to 10,000 children in rural communities...",
    readMoreUrl: "#"
  }, {
    id: 2,
    title: "Major Partnership Announcement with Global Health Organization",
    date: "2023-08-15",
    category: "Partnerships",
    excerpt: "Strategic collaboration to expand healthcare access in underserved regions...",
    readMoreUrl: "#"
  }, {
    id: 3,
    title: "HopeWorks Receives Excellence in Nonprofit Leadership Award",
    date: "2023-08-10",
    category: "Awards",
    excerpt: "Recognition for outstanding contribution to sustainable development...",
    readMoreUrl: "#"
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
        Press Releases
      </h1>
      <div className="grid gap-8">
        {pressReleases.map(press => <div key={press.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  {press.category}
                </span>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(press.date).toLocaleDateString()}
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-4">{press.title}</h2>
              <p className="text-gray-600 mb-4">{press.excerpt}</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700">
                Read Full Release →
              </button>
            </div>
          </div>)}
      </div>
    </motion.div>;
}