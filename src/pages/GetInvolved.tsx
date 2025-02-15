import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, DollarSign, Calendar } from "lucide-react";
export function GetInvolved() {
  const opportunities = [{
    icon: <Heart className="w-8 h-8 text-blue-600" />,
    title: "Donate",
    description: "Support our causes financially",
    link: "/donate"
  }, {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Volunteer",
    description: "Join our volunteer program",
    link: "/volunteer"
  }, {
    icon: <Calendar className="w-8 h-8 text-blue-600" />,
    title: "Events",
    description: "Participate in our events",
    link: "/events"
  }, {
    icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    title: "Fundraise",
    description: "Start your own fundraiser",
    link: "/fundraise"
  }];
  const upcomingEvents = [{
    title: "Community Clean-up Drive",
    date: "September 15, 2023",
    location: "Central Park, NY",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
  }, {
    title: "Annual Charity Gala",
    date: "October 1, 2023",
    location: "Grand Hotel, NY",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
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
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Get Involved
      </h1>
      {/* Ways to Help */}
      <section className="mb-20">
        <div className="grid md:grid-cols-4 gap-8">
          {opportunities.map((opportunity, index) => <div key={index} className="text-center">
              <div className="mb-4 flex justify-center">{opportunity.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 mb-4">{opportunity.description}</p>
              <a href={opportunity.link} className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </a>
            </div>)}
        </div>
      </section>
      {/* Upcoming Events */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-blue-600 mb-2">{event.date}</p>
                <p className="text-gray-600">{event.location}</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Register Now
                </button>
              </div>
            </div>)}
        </div>
      </section>
    </motion.div>;
}