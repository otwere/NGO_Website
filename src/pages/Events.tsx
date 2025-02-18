import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users, Search } from "lucide-react";
export function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const events = [{
    id: 1,
    title: "Community Clean-up Drive",
    date: "2023-09-15",
    time: "9:00 AM - 2:00 PM",
    location: "Central Park, New York",
    category: "environment",
    image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "Join us for our monthly community clean-up initiative.",
    attendees: 45,
    maxAttendees: 100
  }, {
    id: 2,
    title: "Annual Charity Gala",
    date: "2023-10-01",
    time: "6:00 PM - 10:00 PM",
    location: "Grand Hotel, Manhattan",
    category: "fundraising",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "An evening of celebration and support for our causes.",
    attendees: 120,
    maxAttendees: 200
  }, {
    id: 3,
    title: "Education Workshop",
    date: "2023-09-20",
    time: "2:00 PM - 5:00 PM",
    location: "Community Center, Brooklyn",
    category: "education",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "Free workshop on digital literacy for seniors.",
    attendees: 25,
    maxAttendees: 50
  }];
  const categories = [{
    id: "all",
    name: "All Events"
  }, {
    id: "environment",
    name: "Environment"
  }, {
    id: "education",
    name: "Education"
  }, {
    id: "fundraising",
    name: "Fundraising"
  }, {
    id: "community",
    name: "Community"
  }];
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
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
        Upcoming Events
      </h1>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input type="text" placeholder="Search events..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-4 py-2 rounded-md whitespace-nowrap ${selectedCategory === category.id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                {category.name}
              </button>)}
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {filteredEvents.map(event => <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${event.attendees >= event.maxAttendees ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"}`}>
                  {event.attendees >= event.maxAttendees ? "Full" : "Available"}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>
                    {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric"
                })}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>
                    {event.attendees} / {event.maxAttendees} Attendees
                  </span>
                </div>
              </div>
              <button disabled={event.attendees >= event.maxAttendees} className={`w-full py-2 rounded-md transition-colors ${event.attendees >= event.maxAttendees ? "bg-gray-100 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}>
                {event.attendees >= event.maxAttendees ? "Event Full" : "Register Now"}
              </button>
            </div>
          </div>)}
      </div>
      {filteredEvents.length === 0 && <div className="text-center py-12">
          <p className="text-gray-600">
            No events found matching your criteria.
          </p>
        </div>}
    </motion.div>;
}