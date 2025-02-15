import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Users, Calendar, Gift, Share2, Facebook, Twitter, Linkedin, Copy, Mail, CheckCircle, Loader2, AlertCircle, Image as ImageIcon, Link as LinkIcon } from "lucide-react";
export function Fundraise() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    type: "",
    goal: "",
    title: "",
    description: "",
    image: "",
    endDate: ""
  });
  const campaigns = [{
    title: "Start a Personal Campaign",
    icon: <Target className="w-12 h-12 text-blue-600" />,
    description: "Create your own fundraising campaign for birthdays, celebrations, or personal challenges."
  }, {
    title: "Team Fundraising",
    icon: <Users className="w-12 h-12 text-blue-600" />,
    description: "Rally your colleagues, friends, or community group to fundraise together."
  }, {
    title: "Event Fundraising",
    icon: <Calendar className="w-12 h-12 text-blue-600" />,
    description: "Organize an event or participate in one to raise funds for our causes."
  }, {
    title: "Matching Gifts",
    icon: <Gift className="w-12 h-12 text-blue-600" />,
    description: "Double your impact by checking if your employer matches charitable donations."
  }];
  const validateForm = () => {
    if (!formData.type) return "Please select a campaign type";
    if (!formData.goal || isNaN(Number(formData.goal))) return "Please enter a valid goal amount";
    if (!formData.title) return "Please enter a campaign title";
    if (!formData.description) return "Please enter a campaign description";
    if (!formData.endDate) return "Please select an end date";
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
      setShowSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  const handleShare = (platform: string) => {
    const message = `Support my fundraising campaign: ${formData.title}`;
    const url = window.location.href;
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`,
      twitter: `https://twitter.com/intent/tweet?text=${message}&url=${url}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${message}`
    };
    window.open(shareUrls[platform as keyof typeof shareUrls], "_blank");
  };
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
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
  if (showSuccess) {
    return <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-green-500"></div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Campaign Created Successfully!
            </h2>
            <p className="text-gray-600">
              Your fundraising campaign is now live.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-4">Campaign Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Campaign Type:</span>
                <span className="font-medium">{formData.type}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fundraising Goal:</span>
                <span className="font-medium">${formData.goal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">End Date:</span>
                <span className="font-medium">{formData.endDate}</span>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Preview</h3>
            <div className="border rounded-lg overflow-hidden">
              {formData.image && <img src={formData.image} alt="Campaign" className="w-full h-48 object-cover" />}
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-2">{formData.title}</h4>
                <p className="text-gray-600 text-sm">{formData.description}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold mb-2">Share Your Campaign</h3>
            <div className="flex justify-center gap-3">
              <button onClick={() => handleShare("facebook")} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                <Facebook className="w-5 h-5" />
              </button>
              <button onClick={() => handleShare("twitter")} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                <Twitter className="w-5 h-5" />
              </button>
              <button onClick={() => handleShare("linkedin")} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200">
                <Linkedin className="w-5 h-5" />
              </button>
              <button onClick={handleCopyLink} className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 relative">
                <Copy className="w-5 h-5" />
                {copied && <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    Copied!
                  </span>}
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button onClick={() => setShowSuccess(false)} className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50">
                Create Another Campaign
              </button>
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                View Campaign Dashboard
              </button>
            </div>
          </div>
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
  }} className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Start Fundraising
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Make a difference by starting your own fundraising campaign. Every
        contribution helps us create lasting change.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {campaigns.map((campaign, index) => <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              {campaign.icon}
              <h3 className="text-xl font-semibold ml-4">{campaign.title}</h3>
            </div>
            <p className="text-gray-600 mb-6">{campaign.description}</p>
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              Learn More →
            </button>
          </div>)}
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6">Start Your Campaign</h2>
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
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Campaign Type <span className="text-red-500">*</span>
              </label>
              <select name="type" value={formData.type} onChange={handleInputChange} className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" disabled={isLoading}>
                <option value="">Select type</option>
                <option value="personal">Personal Campaign</option>
                <option value="team">Team Fundraising</option>
                <option value="event">Event Fundraising</option>
                <option value="matching">Matching Gifts</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Fundraising Goal <span className="text-red-500">*</span>
              </label>
              <input type="number" name="goal" value={formData.goal} onChange={handleInputChange} className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter amount" disabled={isLoading} />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Title <span className="text-red-500">*</span>
            </label>
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" disabled={isLoading} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Description <span className="text-red-500">*</span>
            </label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Tell your story and why this cause matters to you..." disabled={isLoading}></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Image URL
            </label>
            <div className="flex gap-4">
              <div className="flex-grow relative">
                <ImageIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="url" name="image" value={formData.image} onChange={handleInputChange} className="w-full pl-10 pr-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Enter image URL" disabled={isLoading} />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Date <span className="text-red-500">*</span>
            </label>
            <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" disabled={isLoading} min={new Date().toISOString().split("T")[0]} />
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
            {isLoading ? <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Creating Campaign...</span>
              </> : "Create Campaign"}
          </button>
        </form>
      </div>
    </motion.div>;
}