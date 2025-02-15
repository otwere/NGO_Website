import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
interface StoryViewProps {
  title: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}
export function StoryView({
  title,
  content,
  author,
  date,
  readTime,
  image,
  category
}: StoryViewProps) {
  const navigate = useNavigate();
  return <motion.article initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0
  }} className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={() => navigate(-1)} className="flex items-center text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>
      <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-4">
            {category}
          </span>
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <div className="flex items-center text-white/90 space-x-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {readTime}
            </div>
          </div>
        </div>
      </div>
      <div className="prose prose-lg max-w-none">
        {content.split("\n").map((paragraph, index) => <p key={index} className="mb-4 text-gray-700 leading-relaxed">
            {paragraph}
          </p>)}
      </div>
      <div className="mt-12 pt-8 border-t">
        <h2 className="text-2xl font-bold mb-6">Related Stories</h2>
        {/* Add related stories component here */}
      </div>
    </motion.article>;
}