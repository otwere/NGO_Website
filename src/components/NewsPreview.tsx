import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
export function NewsPreview() {
  const news = [{
    id: "community-center",
    title: "New Community Center Opens",
    date: "Aug 15, 2023",
    excerpt: "Celebrating the opening of our latest community development project...",
    image: "https://images.unsplash.com/photo-1572025442646-866d16c84a54"
  }, {
    id: "fundraising-goal",
    title: "Annual Fundraising Goal Reached",
    date: "Aug 10, 2023",
    excerpt: "Thanks to our generous donors, we've exceeded our annual target...",
    image: "https://images.unsplash.com/photo-1579208575657-c595a05383b7"
  }, {
    id: "volunteer-expansion",
    title: "Volunteer Program Expansion",
    date: "Aug 5, 2023",
    excerpt: "We're excited to announce new opportunities for volunteers...",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a"
  }];
  return <div className="bg-white py-16">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with our progress
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
              <div className="relative h-48">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link to={`/news/${item.id}`} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read Full Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>)}
        </div>
      </div>
    </div>;
}