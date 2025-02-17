"use client"

import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const useSmoothScroll = () => {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.replace("#", "")
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          const headerOffset = 80
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }, [location])
}

