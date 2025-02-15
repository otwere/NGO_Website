import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, Tag } from "lucide-react";
export function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const posts = [{
    id: 1,
    title: "Transforming Lives Through Education",
    excerpt: "How our education initiatives are creating lasting impact in communities...",
    author: "Sarah Johnson",
    date: "2023-08-15",
    tags: ["education", "impact"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    readTime: "5 min read"
  }, {
    id: 2,
    title: "Clean Water Initiative Success Story",
    excerpt: "Bringing clean water to remote villages has transformed local communities...",
    author: "Michael Chen",
    date: "2023-08-10",
    tags: ["water", "health"],
    image: "https://images.unsplash.com/photo-1581795669633-91ef7c9699a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    readTime: "4 min read"
  }, {
    id: 3,
    title: "Healthcare Access in Rural Areas",
    excerpt: "Our mobile clinics are reaching those who need medical care most...",
    author: "Emma Williams",
    date: "2023-08-05",
    tags: ["healthcare", "community"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    readTime: "6 min read"
  }];
  const tags = [{
    id: "all",
    name: "All Posts"
  }, {
    id: "education",
    name: "Education"
  }, {
    id: "water",
    name: "Clean Water"
  }, {
    id: "healthcare",
    name: "Healthcare"
  }, {
    id: "community",
    name: "Community"
  }, {
    id: "impact",
    name: "Impact Stories"
  }];
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "all" || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });
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
        Latest News & Stories
      </h1>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input type="text" placeholder="Search posts..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tags.map(tag => <button key={tag.id} onClick={() => setSelectedTag(tag.id)} className={`px-4 py-2 rounded-md whitespace-nowrap ${selectedTag === tag.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {tag.name}
              </button>)}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => <motion.article key={post.id} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map(tag => <span key={tag} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                    {tag}
                  </span>)}
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.readTime}</span>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Read More →
                </button>
              </div>
            </div>
          </motion.article>)}
      </div>
      {filteredPosts.length === 0 && <div className="text-center py-12">
          <p className="text-gray-600">
            No posts found matching your criteria.
          </p>
        </div>}
    </motion.div>;
}