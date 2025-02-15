import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, AlertCircle, Mail, User, Phone, Heart, Calendar } from "lucide-react";
export function Volunteer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const interests = [{
    value: "education",
    label: "Education"
  }, {
    value: "healthcare",
    label: "Healthcare"
  }, {
    value: "environment",
    label: "Environment"
  }, {
    value: "community",
    label: "Community Development"
  }];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError(null);
  };
  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required";
    if (!formData.lastName.trim()) return "Last name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!formData.interest) return "Please select an area of interest";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return "Please enter a valid email address";
    if (formData.phone) {
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(formData.phone)) return "Please enter a valid phone number";
    }
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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  if (isSuccess) {
    return <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white/90 border rounded-lg shadow-none p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-green-100">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Thank You for Volunteering!
          </h2>
          <p className="text-gray-600 mb-8">
            Your application has been submitted successfully. We'll review your
            information and get back to you within 2-3 business days.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="font-semibold mb-4">What happens next?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <p className="text-gray-600 text-left">
                  You'll receive a confirmation email with more details about
                  our volunteer program
                </p>
              </div>
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <p className="text-gray-600 text-left">
                  Our volunteer coordinator will schedule an orientation session
                </p>
              </div>
              <div className="flex items-start">
                <Heart className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <p className="text-gray-600 text-left">
                  You'll be matched with opportunities that align with your
                  interests
                </p>
              </div>
            </div>
          </div>
          <button onClick={() => {
          setIsSuccess(false);
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            interest: "",
            message: ""
          });
        }} className="text-blue-600 font-semibold hover:text-blue-700">
            Submit Another Application
          </button>
        </div>
      </motion.div>;
  }
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0
  }} className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Volunteer With Us
      </h1>
      <div className="bg-white/40  border rounded-lg shadow-none p-8">
        {error && <motion.div initial={{
        opacity: 0,
        y: -10
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2 text-red-600">
            <AlertCircle className="w-5 h-5" />
            <span>{error}</span>
          </motion.div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" disabled={isLoading} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" disabled={isLoading} />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" disabled={isLoading} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" disabled={isLoading} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Areas of Interest <span className="text-red-500">*</span>
            </label>
            <select name="interest" value={formData.interest} onChange={handleInputChange} className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" disabled={isLoading}>
              <option value="">Select an area</option>
              {interests.map(interest => <option key={interest.value} value={interest.value}>
                  {interest.label}
                </option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea name="message" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" disabled={isLoading} placeholder="Tell us about your experience and why you'd like to volunteer..."></textarea>
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-4 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
            {isLoading ? <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting...</span>
              </> : "Submit Application"}
          </button>
        </form>
      </div>
    </motion.div>;
}