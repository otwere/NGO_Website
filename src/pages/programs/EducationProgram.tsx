import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Book, GraduationCap, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
export function EducationProgram() {
  const initiatives = [{
    title: "School Support Program",
    description: "Providing essential resources and infrastructure to schools in need",
    metrics: "150 schools supported"
  }, {
    title: "Teacher Training",
    description: "Professional development programs for educators",
    metrics: "2,500+ teachers trained"
  }, {
    title: "Student Scholarships",
    description: "Financial aid for promising students",
    metrics: "1,000+ scholarships awarded"
  }, {
    title: "Digital Learning",
    description: "Technology integration in classrooms",
    metrics: "75 computer labs established"
  }];
  const successStories = [{
    name: "Sarah's Journey",
    location: "Rural Uganda",
    story: "From village school to university graduate",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71"
  }, {
    name: "Transforming Maputo",
    location: "Mozambique",
    story: "How one school changed an entire community",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45"
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
          <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6" alt="Education Program" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Education Program
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Empowering communities through quality education and learning
              resources
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
            <p className="text-gray-600 mb-6">
              Our education program focuses on creating sustainable learning
              environments that empower students, teachers, and communities.
              Through comprehensive support and resources, we're building the
              foundation for lasting change.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">50,000+</div>
                <div className="text-sm text-gray-600">Students Reached</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">
                  Program Success Rate
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="Students learning" className="rounded-lg object-cover w-full h-full" />
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
                  <Link to="/stories/education-success" className="mt-4 text-blue-600 font-semibold hover:text-blue-700 inline-block">
                    Read Full Story →
                  </Link>
                </div>
              </div>)}
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