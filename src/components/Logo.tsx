import React from "react";
import { Heart } from "lucide-react";
export function Logo({
  className = "",
  size = "default"
}) {
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-3xl"
  }[size];
  return <div className={`flex items-center ${className}`}>
      <Heart className={`text-blue-600 mr-2 ${size === "small" ? "w-5 h-5" : size === "large" ? "w-8 h-8" : "w-6 h-6"}`} />
      <span className={`font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600 ${sizeClasses}`}>
        HopeWorks
      </span>
    </div>;
}