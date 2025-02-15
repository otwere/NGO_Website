import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Book, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
export function EducationCause() {
  const stats = [{
    icon: <GraduationCap />,
    value: "50,000+",
    label: "Students Supported"
  }, {
    icon: <Book />,
    value: "1,000+",
    label: "Schools Equipped"
  }, {
    icon: <Users />,
    value: "2,500+",
    label: "Teachers Trained"
  }, {
    icon: <Trophy />,
    value: "95%",
    label: "Program Success Rate"
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
          <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6" alt="Education" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Education for All
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Providing quality education to underprivileged children through
              school support and learning resources.
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
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              We believe that education is the cornerstone of sustainable
              development and individual empowerment. Our comprehensive approach
              includes:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Providing essential school supplies and learning materials
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Training and supporting teachers in underserved communities
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Building and renovating school facilities
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                Implementing technology-enabled learning solutions
              </li>
            </ul>
          </div>
          <div className="relative h-96">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Students learning" className="rounded-lg object-cover w-full h-full" />
          </div>
        </div>
        <div className="text-center">
          <Link to="/donate" className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Support Education
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>;
}