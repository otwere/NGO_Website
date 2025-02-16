import React from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Programs", href: "/programs" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "News & Updates", href: "/blog" },
  ];

  const contactInfo = [
    { icon: MapPin, text: "123 Hope Street, Nairobi, Kenya" },
    { icon: Mail, text: "contact@hopeworks.org" },
    { icon: Phone, text: "+254 700 520 008" },
  ];

  return (
    <footer className="bg-gray-700 text-white relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Logo className="mb-4" size="large" />
            <p className="text-gray-400 mb-6">
              Creating lasting change through community empowerment and sustainable development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }, index) => (
                <a key={index} href={href} className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors" aria-label={label}>
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }, index) => (
                <li key={index}>
                  <Link to={href} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <span className="mr-2">→</span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              {contactInfo.map(({ icon: Icon, text }, index) => (
                <li key={index} className="flex items-start text-gray-400">
                  <Icon className="w-5 h-5 mr-3 mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter Subscription */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
            <form className="space-y-3">
              <div className="relative">
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-400">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
              <p className="text-xs text-gray-500">By subscribing, you agree to our Privacy Policy</p>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} HopeWorks. All rights reserved.</p>
          <div className="flex space-x-4 text-sm text-gray-400 mr-14">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <button onClick={scrollToTop} className="absolute right-6 bottom-5 p-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-none" aria-label="Scroll to top">
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
