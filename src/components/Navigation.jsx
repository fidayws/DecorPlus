import React, { useState, useEffect, useCallback } from "react";
import {
  Home,
  Menu,
  X,
  Palette,
  Package,
  Users,
  Info,
  Phone,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/services", label: "Services", icon: Palette },
    { path: "/materials", label: "Materials", icon: Package },
    { path: "/labor", label: "Labor", icon: Users },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Phone },
  ];

  return (
    <>
      <style>
        {`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slide-in-up { animation: slideInUp 0.6s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        `}
      </style>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close navigation menu"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setIsOpen(false);
          }}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white/90 backdrop-blur-md shadow-sm"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center space-x-3 relative rounded-lg p-2 -m-2"
              aria-label="Home Plus - Go to homepage"
            >
              <div className="relative">
                <img
                  src="/homeplusLogo.png"
                  alt="Home Plus - Interior and Exterior Design Logo"
                  className={`w-auto transition-all duration-300 ${
                    scrolled ? "h-10" : "h-14 sm:h-20"
                  }`}
                />
              </div>
              <div>
                <h1 className="text-base sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-tight">
                  Home Plus
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  Interiors & Exteriors
                </p>
              </div>
            </button>

            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-2 bg-gray-50/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200/50">
                {navLinks.map(({ path, label, icon: Icon }) => (
                  <button
                    key={path}
                    onClick={() => handleNavigation(path)}
                    className={`group relative flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
                      isActive(path)
                        ? "text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg scale-105"
                        : "text-gray-700 hover:text-amber-600 hover:bg-white/80 hover:shadow-md hover:scale-105"
                    }`}
                    aria-current={isActive(path) ? "page" : undefined}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              <div className="ml-4">
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:scale-105 transition-transform duration-300"
                >
                  Get Quote
                </button>
              </div>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-xl transition-all duration-300 ${
                  isOpen
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                    : "text-gray-700 hover:text-amber-600 hover:bg-gray-100"
                }`}
              >
                <div className="relative h-6 w-6">
                  <Menu
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                      isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>

          <div
            id="mobile-menu"
            className={`lg:hidden transition-[max-height,opacity] duration-500 ease-in-out ${
              isOpen ? "max-h-[75vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
            }`}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 my-3 p-4 space-y-2">
              {navLinks.map(({ path, label, icon: Icon }, index) => (
                <button
                  key={path}
                  onClick={() => handleNavigation(path)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium rounded-xl transition duration-300 ${
                    isActive(path)
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow"
                      : "text-gray-700 hover:bg-amber-50"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </button>
              ))}

              <div className="pt-2 border-t border-gray-200">
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="flex items-center justify-center w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-3 text-sm font-semibold rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                >
                  <span>Get Free Quote</span>
                  <Sparkles className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
