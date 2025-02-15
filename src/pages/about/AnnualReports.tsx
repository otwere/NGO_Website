import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";
export function AnnualReports() {
  const reports = [{
    year: "2022",
    title: "Annual Impact Report",
    fileSize: "2.4 MB",
    description: "Detailed overview of our global initiatives and impact metrics for 2022",
    downloadUrl: "#"
  }, {
    year: "2021",
    title: "Annual Impact Report",
    fileSize: "2.1 MB",
    description: "Comprehensive report on our achievements and community impact in 2021",
    downloadUrl: "#"
  }, {
    year: "2020",
    title: "Annual Impact Report",
    fileSize: "1.9 MB",
    description: "Special report on our COVID-19 response and community support initiatives",
    downloadUrl: "#"
  }];
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
        Annual Reports
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
        Explore our annual reports to learn about our impact, financial
        transparency, and key achievements over the years.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reports.map(report => <div key={report.year} className="bg-gray-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all hover:scale-95">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              <div>
                <h3 className="text-xl font-semibold">{report.title}</h3>
                <p className="text-gray-500">{report.year}</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{report.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{report.fileSize}</span>
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </button>
            </div>
          </div>)}
      </div>
    </motion.div>;
}