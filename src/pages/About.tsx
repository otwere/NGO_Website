import React from "react";
import { motion } from "framer-motion";
import { Users, Target, History, Award } from "lucide-react";
export function About() {
  const team = [{
    name: "Sarah Johnson",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "20+ years of experience in nonprofit leadership"
  }, {
    name: "Michael Chen",
    role: "Program Director",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Leading our community development initiatives"
  }, {
    name: "Emma Williams",
    role: "Volunteer Coordinator",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    bio: "Passionate about community engagement"
  }];
  const timeline = [{
    year: "2010",
    title: "Foundation",
    description: "HopeWorks was established with a mission to create lasting change through community development."
  }, {
    year: "2012",
    title: "First Community Project",
    description: "Launched our first water access initiative in rural Kenya, serving 1,000+ residents."
  }, {
    year: "2014",
    title: "Education Program",
    description: "Established our first educational support program, reaching 500 students."
  }, {
    year: "2015",
    title: "Major Milestone",
    description: "Reached 10,000 beneficiaries across 5 countries, marking significant growth."
  }, {
    year: "2017",
    title: "Healthcare Initiative",
    description: "Launched mobile healthcare clinics, providing medical care to remote communities."
  }, {
    year: "2018",
    title: "Digital Transformation",
    description: "Implemented technology-driven solutions to enhance program effectiveness."
  }, {
    year: "2020",
    title: "Global Expansion",
    description: "Extended operations to 15 countries, despite global challenges."
  }, {
    year: "2021",
    title: "Sustainability Focus",
    description: "Introduced eco-friendly practices across all programs and operations."
  }, {
    year: "2023",
    title: "Innovation Hub",
    description: "Launched research and innovation center for sustainable development solutions."
  }, {
    year: "2025",
    title: "Future Vision",
    description: "Targeting impact on 100,000+ lives through expanded programs and partnerships."
  }];
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0
  }} className="max-w-7xl mx-auto px-4 py-12">
      <section id="mission" className="mb-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Our Mission
        </h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-6">
              HopeWorks is dedicated to creating lasting change through
              community empowerment and sustainable development initiatives. We
              believe in a world where every person has access to the resources
              they need to thrive.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Target className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Our Vision</h3>
                  <p className="text-gray-600">
                    A world of equal opportunities
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Our Values</h3>
                  <p className="text-gray-600">Integrity, Empathy, Impact</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-96">
            <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" alt="Team collaboration" className="rounded-lg object-cover w-full h-full" />
          </div>
        </div>
      </section>
      <section id="team" className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>)}
        </div>
      </section>
      <section id="journey">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Our Journey
        </h2>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200" />
          <div className="space-y-16">
            {timeline.map((item, index) => <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""} items-center gap-8`}>
                <div className="flex-1">
                  <motion.div initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.2
              }} className="bg-white p-6 rounded-lg shadow-lg relative">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </div>
                <div className="relative flex items-center justify-center">
                  <motion.div initial={{
                scale: 0
              }} whileInView={{
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.2
              }} className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold z-10">
                    {item.year}
                  </motion.div>
                  <div className="hidden md:block absolute w-8 h-0.5 bg-blue-200 left-full" />
                  <div className="hidden md:block absolute w-8 h-0.5 bg-blue-200 right-full" />
                </div>
                <div className="flex-1 hidden md:block" />
              </div>)}
          </div>
        </div>
      </section>
    </motion.div>;
}