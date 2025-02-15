import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { Donate } from "./pages/Donate";
import { Volunteer } from "./pages/Volunteer";
import { Events } from "./pages/Events";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { GetInvolved } from "./pages/GetInvolved";
import { AnnualReports } from "./pages/about/AnnualReports";
import { PressReleases } from "./pages/news/PressReleases";
import { Newsletter } from "./pages/news/Newsletter";
import { Partner } from "./pages/get-involved/Partner";
import { Fundraise } from "./pages/get-involved/Fundraise";
import { AnimatePresence } from "framer-motion";
import { EducationCause } from "./pages/causes/EducationCause";
import { WaterCause } from "./pages/causes/WaterCause";
import { HealthcareCause } from "./pages/causes/HealthcareCause";
import { StoryView } from "./components/StoryView";
import { WaterTransformation } from "./pages/stories/WaterTransformation";
import { EducationSuccess } from "./pages/stories/EducationSuccess";
import { CookieConsent } from "./components/CookieConsent";
import { NewsDetail } from "./pages/news/NewsDetail";
import { EducationProgram } from "./pages/programs/EducationProgram";
import { WaterProgram } from "./pages/programs/WaterProgram";
import { HealthcareProgram } from "./pages/programs/HealthcareProgram";
export function App() {
  return <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full">
            <div className="absolute bottom-0 left-0 right-0 opacity-20">
              <svg viewBox="0 0 1440 320" className="w-full animate-wave">
                <path fill="#4F46E5" fillOpacity="0.2" d="M0,32L48,37.3C96,43,192,53,288,90.7C384,128,480,192,576,186.7C672,181,768,107,864,101.3C960,96,1056,160,1152,170.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 opacity-20">
              <svg viewBox="0 0 1440 320" className="w-full animate-wave-slow">
                <path fill="#2563EB" fillOpacity="0.2" d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 opacity-20">
              <svg viewBox="0 0 1440 320" className="w-full animate-wave-slower">
                <path fill="#1D4ED8" fillOpacity="0.2" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>
            </div>
          </div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-4 left-1/3 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLW9wYWNpdHk9IjAuMDIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-25"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50"></div>
        </div>
        <div className="relative">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/reports" element={<AnnualReports />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/education" element={<EducationProgram />} />
              <Route path="/programs/water" element={<WaterProgram />} />
              <Route path="/programs/healthcare" element={<HealthcareProgram />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/volunteer" element={<Volunteer />} />
              <Route path="/fundraise" element={<Fundraise />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/events" element={<Events />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/press" element={<PressReleases />} />
              <Route path="/newsletter" element={<Newsletter />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/causes/education" element={<EducationCause />} />
              <Route path="/causes/water" element={<WaterCause />} />
              <Route path="/causes/healthcare" element={<HealthcareCause />} />
              <Route path="/stories/:id" element={<StoryView title="Transforming Lives Through Education" content={`In the heart of rural communities, education remains the cornerstone of progress and development. Our recent initiative has shown remarkable results in transforming the lives of young learners and their families.
                    Through dedicated efforts and collaboration with local partners, we've established learning centers that serve as beacons of hope for children who previously had limited access to quality education.
                    The impact extends beyond the classroom, creating ripple effects throughout the entire community. Parents report increased engagement in their children's education, and local businesses have begun supporting educational programs.`} author="Sarah Johnson" date="August 15, 2023" readTime="5 min read" image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6" category="Education" />} />
              <Route path="/stories/water-transformation" element={<WaterTransformation />} />
              <Route path="/stories/education-success" element={<EducationSuccess />} />
              <Route path="/news/:id" element={<NewsDetail />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
        <CookieConsent />
      </div>
    </Router>;
}