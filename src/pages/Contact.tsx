import React, { useState, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader, AlertCircle } from "lucide-react";
export function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const contactInfo = [{
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    details: ["123 Hope Street- Nairobi, Kenya"]
  }, {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    details: ["info@hopeworks.org", "support@hopeworks.org"]
  }, {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    details: ["+254 700 520 008", "Mon  - Sat from :  8 AM to 6  PM"]
  }, {
    icon: <Clock className="w-6 h-6" />,
    title: "Working Hours",
    details: ["Mon - Fri : 8:00 AM - 6:00 PM", "Sat : 9:00 AM - 1:00 PM", "Sun & Public Holidays : Closed"]
  }];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError(null);
  };
  const validateForm = () => {
    if (!formState.firstName.trim()) return "First name is required";
    if (!formState.lastName.trim()) return "Last name is required";
    if (!formState.email.trim()) return "Email is required";
    if (!formState.message.trim()) return "Message is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) return "Please enter a valid email address";
    return null;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
      });
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0
  }} className="min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions about our programs or want to get involved? We'd love
            to hear from you.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="glass-card p-6 rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-blue-600">
                {item.title}
              </h3>
              {item.details.map((detail, i) => <p key={i} className="text-gray-600 group-hover:text-gray-900 transition-colors">
                  {detail}
                </p>)}
            </motion.div>)}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.4
        }} className="glass-card p-8 rounded-lg relative ">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <AnimatePresence mode="wait">
              {isSuccess && <motion.div initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              y: -10
            }} className="absolute inset-0 bg-white/95 border backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-100 text-green-500">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      We'll get back to you as soon as possible.
                    </p>
                  </div>
                </motion.div>}
            </AnimatePresence>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && <motion.div initial={{
              opacity: 0,
              y: -10
            }} animate={{
              opacity: 1,
              y: 0
            }} className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {error}
                </motion.div>}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-hover:text-blue-600">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="firstName" value={formState.firstName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all hover:border-blue-200 group-hover:shadow-sm" disabled={isLoading} />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-hover:text-blue-600">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="lastName" value={formState.lastName} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all hover:border-blue-200 group-hover:shadow-sm" disabled={isLoading} />
                </div>
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-hover:text-blue-600">
                  Email <span className="text-red-500">*</span>
                </label>
                <input type="email" name="email" value={formState.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all hover:border-blue-200 group-hover:shadow-sm" disabled={isLoading} />
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 mb-2 transition-colors group-hover:text-blue-600">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea rows={4} name="message" value={formState.message} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all hover:border-blue-200 group-hover:shadow-sm resize-none" disabled={isLoading}></textarea>
              </div>
              <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold transition-all hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                {isLoading ? <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending Message...
                  </> : "Send Message"}
              </button>
            </form>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          delay: 0.4
        }} className="glass-card rounded-lg overflow-hidden h-[600px] transform transition-all duration-300 hover:shadow-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891573647!2d36.75777448596435!3d-1.3028617915964517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2s!4v1692786977113!5m2!1sen!2s" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </motion.div>
        </div>
      </div>
    </motion.div>;
}