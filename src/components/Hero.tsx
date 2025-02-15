import React, { useEffect, useState } from "react";
import { ArrowRight, Heart, Users, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCountUp } from "../hooks/useCountUp";
import { useInView } from "react-intersection-observer";
export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    ref: statsRef,
    inView
  } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const livesImpacted = useCountUp({
    end: 50,
    suffix: "K+",
    delay: 300
  });
  const communities = useCountUp({
    end: 100,
    suffix: "+",
    delay: 600
  });
  const countries = useCountUp({
    end: 25,
    suffix: "+",
    delay: 900
  });
  const slides = [{
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    title: "Creating Hope",
    subtitle: "Building a Better Tomorrow"
  }, {
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    title: "Empowering Communities",
    subtitle: "Through Sustainable Development"
  }, {
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    title: "Changing Lives",
    subtitle: "One Community at a Time"
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };
  return <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
      </div>
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide} initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} exit={{
          opacity: 0
        }} transition={{
          duration: 0.7
        }} className="absolute inset-0">
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: `url(${slides[currentSlide].image})`
          }}>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-blue-900/30" />
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-white" : "bg-white/50"}`} />)}
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 md:py-28">
          <motion.div ref={statsRef} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3
        }} className="flex justify-center mb-16 space-x-8 md:space-x-16">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group">
                <Heart className="w-8 h-8 text-blue-200 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-blue-100">
                {inView ? livesImpacted : "0"}
              </div>
              <div className="text-sm text-blue-200">Lives Impacted</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group">
                <Users className="w-8 h-8 text-blue-200 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-blue-100">
                {inView ? communities : "0"}
              </div>
              <div className="text-sm text-blue-200">Communities</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors group">
                <Globe className="w-8 h-8 text-blue-200 group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-3xl font-bold text-blue-100">
                {inView ? countries : "0"}
              </div>
              <div className="text-sm text-blue-200">Countries</div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  {slides[currentSlide].title}
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
                Join us in our mission to build a better world through
                sustainable community development, education, and healthcare
                initiatives.
              </p>
            </div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7
          }} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="inline-flex items-center px-8 py-4 rounded-full bg-white text-blue-900 text-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Donate Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/get-involved" className="inline-flex items-center px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white text-lg font-semibold hover:bg-white/20 transition-all border border-white/20 hover:-translate-y-0.5">
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M1440 120V0C1380 40 1320 60 1260 60C1200 60 1140 40 1080 40C1020 40 960 60 900 60C840 60 780 40 720 40C660 40 600 60 540 60C480 60 420 40 360 40C300 40 240 60 180 60C120 60 60 40 0 40V120H1440Z" fill="white" />
        </svg>
      </div>
    </div>;
}