"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Logo } from "./Logo"

// Define TypeScript interfaces for better type safety
interface NavigationItem {
  name: string
  href: string
  sectionId?: string
  description?: string
}

interface NavigationSection {
  name: string
  href?: string
  items?: NavigationItem[]
}

interface NavigationStructure {
  [key: string]: NavigationSection
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  const navigation: NavigationStructure = {
    home: {
      name: "Home",
      href: "/",
    },
    about: {
      name: "About",
      items: [
        {
          name: "Our Mission",
          href: "/about",
          sectionId: "mission",
          description: "Learn about our purpose and values",
        },
        {
          name: "Our Team",
          href: "/about",
          sectionId: "team",
          description: "Meet the people behind HopeWorks",
        },
        {
          name: "Our Journey",
          href: "/about",
          sectionId: "journey",
          description: "Discover our history and milestones",
        },
        {
          name: "Annual Reports",
          href: "/about/reports",
          description: "View our yearly impact and financial Reports",
        },
      ],
    },
    programs: {
      name: "Programs",
      items: [
        {
          name: "Education",
          href: "/programs",
          sectionId: "education",
          description: "Supporting access to quality education",
        },
        {
          name: "Healthcare",
          href: "/programs",
          sectionId: "healthcare",
          description: "Providing essential medical services",
        },
        {
          name: "Clean Water",
          href: "/programs",
          sectionId: "water",
          description: "Ensuring access to safe drinking water",
        },
        {
          name: "Success Stories",
          href: "/programs",
          sectionId: "stories",
          description: "Real impact in communities",
        },
      ],
    },
    getInvolved: {
      name: "Get Involved",
      items: [
        {
          name: "Volunteer",
          href: "/volunteer",
          description: "Join our volunteer programs",
        },
        {
          name: "Donate",
          href: "/donate",
          description: "Support our causes financially",
        },
        {
          name: "Fundraise",
          href: "/fundraise",
          description: "Start your own campaign",
        },
        {
          name: "Partner With Us",
          href: "/partner",
          description: "Collaborate for greater impact",
        },
      ],
    },
    news: {
      name: "News",
      items: [
        {
          name: "Latest Updates",
          href: "/blog",
          description: "Recent news and stories",
        },
        {
          name: "Press Releases",
          href: "/press",
          description: "Official announcements",
        },
        {
          name: "Events",
          href: "/events",
          description: "Upcoming activities",
        },
        {
          name: "Newsletter",
          href: "/newsletter",
          description: "Subscribe for updates",
        },
      ],
    },
  }

  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const handleSectionClick = (href: string, sectionId?: string) => {
    setIsOpen(false)
    closeDropdown()

    if (location.pathname !== href) {
      navigate(href)
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        if (sectionId) {
          smoothScrollTo(sectionId)
        }
      }, 100)
    } else if (sectionId) {
      smoothScrollTo(sectionId)
    }
  }

  const renderDropdownItem = (item: NavigationItem) => (
    <Link
      key={item.name}
      to={item.href}
      onClick={(e) => {
        e.preventDefault()
        handleSectionClick(item.href, item.sectionId)
      }}
      className="group flex flex-col px-4 py-3 text-sm hover:bg-blue-50 transition-colors"
      role="menuitem"
      tabIndex={0}
    >
      <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">{item.name}</span>
      {item.description && (
        <span className="text-gray-500 text-xs mt-1 group-hover:text-blue-500 transition-colors">
          {item.description}
        </span>
      )}
    </Link>
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    closeDropdown()
  }, []) // Removed location dependency

  const closeDropdown = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
    }
    setActiveDropdown(null)
  }

  const handleDropdownClick = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key)
  }

  const handleMouseEnter = (key: string) => {
    if (window.innerWidth >= 768) {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout)
      }
      setActiveDropdown(key)
    }
  }

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      const timeout = setTimeout(() => {
        setActiveDropdown(null)
      }, 200)
      setHoverTimeout(timeout)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, key: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleDropdownClick(key)
    }
    if (e.key === "Escape") {
      closeDropdown()
    }
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-90 transition-opacity" aria-label="Home">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" ref={dropdownRef}>
            <Link
              to={navigation.home.href}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {navigation.home.name}
            </Link>

            {Object.entries(navigation).map(([key, item]) => {
              if (key === "home") return null
              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => handleDropdownClick(key)}
                    onKeyDown={(e) => handleKeyDown(e, key)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                      activeDropdown === key
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                    aria-expanded={activeDropdown === key}
                    aria-haspopup="true"
                    aria-controls={`${key}-dropdown`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.items && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === key ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  {activeDropdown === key && item.items && (
                    <div
                      id={`${key}-dropdown`}
                      className="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100 transform opacity-100 scale-100 transition-all duration-200 origin-top"
                      role="menu"
                      aria-label={`${item.name} dropdown`}
                      onMouseEnter={() => handleMouseEnter(key)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.items.map((subItem) => renderDropdownItem(subItem))}
                    </div>
                  )}
                </div>
              )
            })}

            <Link
              to="/contact"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link>

            <Link
              to="/donate"
              className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 active:scale-95"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2 rounded-md transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <Link
              to={navigation.home.href}
              className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {navigation.home.name}
            </Link>

            {Object.entries(navigation).map(([key, item]) => {
              if (key === "home") return null
              return (
                <div key={key} className="py-1">
                  <button
                    onClick={() => handleDropdownClick(key)}
                    className={`flex items-center justify-between w-full px-4 py-3 text-left transition-all duration-200 ${
                      activeDropdown === key ? "bg-blue-50 text-blue-600" : "text-gray-600 hover:bg-gray-50"
                    }`}
                    aria-expanded={activeDropdown === key}
                    aria-controls={`mobile-${key}-dropdown`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.items && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === key ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  {activeDropdown === key && item.items && (
                    <div id={`mobile-${key}-dropdown`} className="bg-gray-50 px-4 py-2 space-y-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block py-3 px-4 text-sm rounded-md hover:bg-blue-50 transition-all duration-200"
                          onClick={() => {
                            setIsOpen(false)
                            handleSectionClick(subItem.href, subItem.sectionId)
                          }}
                        >
                          <span className="block font-medium text-gray-900">{subItem.name}</span>
                          {subItem.description && (
                            <span className="block text-gray-500 text-xs mt-1">{subItem.description}</span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            <div className="px-4 pt-4">
              <Link
                to="/donate"
                className="block text-center bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

