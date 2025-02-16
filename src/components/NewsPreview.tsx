import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function NewsPreview() {
  const news = [
    {
      id: "community-center",
      title: "New Community Center Opens",
      date: "Aug 15, 2024",
      excerpt: "Celebrating the opening of our latest community development project...",
      image: "https://images.unsplash.com/photo-1572025442646-866d16c84a54",
    },
    {
      id: "fundraising-goal",
      title: "Annual Fundraising Goal Reached",
      date: "Aug 10, 2024",
      excerpt: "Thanks to our generous donors, we've exceeded our annual target...",
      image: "https://images.unsplash.com/photo-1579208575657-c595a05383b7",
    },
    {
      id: "volunteer-expansion",
      title: "Volunteer Program Expansion",
      date: "Aug 5, 2025",
      excerpt: "We're excited to announce new opportunities for volunteers...",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    },
  ];

  return (
    <div className="relative py-16 bg-blue-100 overflow-hidden">
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 w-full h-64 text-blue-200"
          viewBox="0 0 1440 320"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,176C384,171,480,181,576,186.7C672,192,768,192,864,176C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 w-full h-64 text-blue-200"
          viewBox="0 0 1440 320"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillOpacity="1"
            d="M0,256L48,230C96,204,192,152,288,138.7C384,124,480,156,576,178.7C672,200,768,216,864,200C960,184,1056,140,1152,136C1248,132,1344,168,1392,186.7L1440,204L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
          <p className="mt-4 text-lg text-gray-600">Stay updated with our progress</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-inherit border rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-900 transition-all transform hover:scale-95"
                >
                  Read Full Story
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
