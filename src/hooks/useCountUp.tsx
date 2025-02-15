import React, { useEffect, useState } from "react";
interface UseCountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}
export function useCountUp({
  end,
  suffix = "",
  duration = 2000,
  delay = 0
}: UseCountUpProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const startTime = Date.now();
    let animationFrame: number;
    // Delay the start of animation if needed
    const timeoutId = setTimeout(() => {
      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * end);
        setCount(current);
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      animate();
    }, delay);
    return () => {
      clearTimeout(timeoutId);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, delay]);
  return `${count}${suffix}`;
}