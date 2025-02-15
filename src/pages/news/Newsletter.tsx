import React from "react";
import { motion } from "framer-motion";
import { Mail, CheckCircle } from "lucide-react";
export function Newsletter() {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0
  }} className="max-w-8xl mx-auto px-4 py-12">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Subscribe to Our Newsletter
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12">
        Stay updated with our latest news, impact stories, and opportunities
        to make a difference.
      </p>
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="email" className="w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter your email" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interests
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Monthly Impact Updates</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Volunteer Opportunities</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Event Announcements</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Fundraising Campaigns</span>
              </label>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </form>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          What to Expect
        </h2>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Monthly Impact Reports</h3>
            <p className="text-gray-600">
              Regular updates on our projects and their impact on communities
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Success Stories</h3>
            <p className="text-gray-600">
              Inspiring stories from the communities we serve
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
          <div>
            <h3 className="font-semibold">Exclusive Updates</h3>
            <p className="text-gray-600">
              Be the first to know about new initiatives and opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>;
}