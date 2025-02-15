import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Users2, Trophy, Upload, CheckCircle, AlertCircle, X } from "lucide-react";
export function Partner() {
  const partnershipTypes = [{
    icon: <Building2 className="w-12 h-12 text-blue-600" />,
    title: "Corporate Partnerships",
    description: "Join forces with us to create lasting social impact while enhancing your corporate social responsibility initiatives."
  }, {
    icon: <div className="w-12 h-12 text-blue-600" />,
    title: "NGO Collaborations",
    description: "Partner with us to amplify our collective impact and reach more communities in need."
  }, {
    icon: <Users2 className="w-12 h-12 text-blue-600" />,
    title: "Community Organizations",
    description: "Work together to implement effective programs at the grassroots level."
  }, {
    icon: <Trophy className="w-12 h-12 text-blue-600" />,
    title: "Strategic Alliances",
    description: "Form strategic partnerships to tackle complex social challenges together."
  }];
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFileError(null);
    if (!selectedFile) {
      return;
    }
    if (selectedFile.type !== "application/pdf") {
      setFileError("Please upload a PDF file");
      return;
    }
    if (selectedFile.size > 10 * 1024 * 1024) {
      setFileError("File size must be less than 10MB");
      return;
    }
    setFile(selectedFile);
  };
  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
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
  }} className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Partner With Us
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Join us in our mission to create lasting change. Together, we can make a
        bigger impact.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {partnershipTypes.map((type, index) => <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              {type.icon}
              <h3 className="text-xl font-semibold ml-4">{type.title}</h3>
            </div>
            <p className="text-gray-600">{type.description}</p>
          </div>)}
      </div>
      <div className="bg-white rounded-lg shadow-lg p-8 relative">
        <AnimatePresence>
          {isSuccess && <motion.div initial={{
          opacity: 0,
          y: -10
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -10
        }} className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-lg flex items-center justify-center z-50">
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Proposal Submitted Successfully!
                </h3>
                <p className="text-gray-600">
                  We'll review your proposal and get back to you soon.
                </p>
              </div>
            </motion.div>}
        </AnimatePresence>
        <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization Name
              </label>
              <input type="text" className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Partnership Type
              </label>
              <select className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option value="">Select type</option>
                <option value="corporate">Corporate Partnership</option>
                <option value="ngo">NGO Collaboration</option>
                <option value="community">Community Organization</option>
                <option value="strategic">Strategic Alliance</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Contact Person
            </label>
            <input type="text" className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input type="email" className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Partnership Proposal
            </label>
            <textarea rows={4} className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Tell us about your organization and how you'd like to partner with us..."></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Proposal Document (PDF only, max 10MB)
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md relative">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf" onChange={handleFileChange} ref={fileInputRef} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PDF up to 10MB</p>
              </div>
              {file && <div className="absolute inset-0 bg-gray-50 flex items-center justify-between px-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {file.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button type="button" onClick={removeFile} className="ml-4 bg-gray-50 p-1 rounded-full text-gray-400 hover:text-gray-500">
                    <X className="h-5 w-5" />
                  </button>
                </div>}
            </div>
            {fileError && <div className="mt-2 text-sm text-red-600 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {fileError}
              </div>}
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors">
            Submit Proposal
          </button>
        </form>
      </div>
    </motion.div>;
}