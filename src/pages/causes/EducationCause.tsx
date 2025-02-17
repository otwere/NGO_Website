"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, GraduationCap, Book, Users, Trophy, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    quote: "This program changed my life. I now have access to quality education I never thought possible.",
    author: "Sarah M., Student",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The teacher training provided has dramatically improved our ability to engage and educate our students.",
    author: "John D., Teacher",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "Seeing the transformation in our community through education is truly inspiring.",
    author: "Emily L., Community Leader",
    image: "/placeholder.svg?height=100&width=100",
  },
]

const carouselImages = [
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
  "/placeholder.svg?height=400&width=600",
]

export function EducationCause() {
  const [counters, setCounters] = useState({
    students: 0,
    schools: 0,
    teachers: 0,
    successRate: 0,
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentImage, setCurrentImage] = useState(0)

  const stats = [
    { icon: <GraduationCap className="w-8 h-8" />, value: counters.students, label: "Students Supported" },
    { icon: <Book className="w-8 h-8" />, value: counters.schools, label: "Schools Equipped" },
    { icon: <Users className="w-8 h-8" />, value: counters.teachers, label: "Teachers Trained" },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: `${Math.round(counters.successRate)}%`,
      label: "Program Success Rate",
    },
  ]

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const increments = {
        students: 50000 / (duration / 16),
        schools: 1000 / (duration / 16),
        teachers: 2500 / (duration / 16),
        successRate: 95 / (duration / 16),
      }

      const interval = setInterval(() => {
        setCounters((prev) => ({
          students: Math.min(prev.students + increments.students, 50000),
          schools: Math.min(prev.schools + increments.schools, 1000),
          teachers: Math.min(prev.teachers + increments.teachers, 2500),
          successRate: Math.min(prev.successRate + increments.successRate, 95),
        }))
      }, 16)

      return () => clearInterval(interval)
    }
  }, [inView])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length)
  }, [])

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextImage, 5000)
    return () => clearInterval(interval)
  }, [nextImage])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
            alt="Education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Education for All
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 max-w-2xl mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Providing quality education to underprivileged children through school support and learning resources.
            </motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
              <a
                href="/donate"
                className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Support Our Cause
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div ref={ref} className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-inherit  border rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              <div className="text-blue-600 w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-blue-100 rounded-full">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {typeof stat.value === "number" ? Math.round(stat.value).toLocaleString() : stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              We believe that education is the cornerstone of sustainable development and individual empowerment. Our
              comprehensive approach includes:
            </p>
            <ul className="space-y-4">
              {[
                "Providing essential school supplies and learning materials",
                "Training and supporting teachers in undeserved communities",
                "Building and renovating school facilities",
                "Implementing technology-enabled learning solutions",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-blue-600 mr-2">•</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImage}
                src={carouselImages[currentImage]}
                alt={`Education image ${currentImage + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-all"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What People Say</h2>
          <div className="relative h-64">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentTestimonial}
                className="absolute inset-0 flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].author}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <p className="text-xl italic mb-4 max-w-2xl">{testimonials[currentTestimonial].quote}</p>
                <p className="font-semibold">{testimonials[currentTestimonial].author}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/donate"
            className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Support Education
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

