import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);
  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };
  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };
  if (!isVisible) return null;
  return <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t">
      <div className="max-w-8xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex-1 mr-8">
          <p className="text-gray-600">
            We use cookies to enhance your experience. By continuing to visit
            this site you agree to our use of cookies.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handleDecline} className="text-gray-600 hover:text-gray-900">
            Decline
          </button>
          <button onClick={handleAccept} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Accept
          </button>
          <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>;
}