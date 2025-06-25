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
    navigate(path);
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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
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
      <style>{
        `@keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }`
      }</style>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close navigation menu"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsOpen(false);
            }
          }}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50  transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white/90 backdrop-blur-md shadow-sm"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
           <button
  onClick={() => handleNavigation("/")}
  className="flex items-center space-x-4 relative rounded-lg p-2 -m-2"
  aria-label="Home Plus - Go to homepage"
>
  <div className="relative">
    <img
      src="/homeplusLogo.png"
      alt="Home Plus Logo"
      className={`h-20 w-auto transition-all duration-300 ${
        scrolled ? "h-12" : ""
      }`}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
    <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-amber-400 opacity-0 transition-opacity duration-300" />
  </div>
  <div>
    <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-tight">
      Home Plus
    </h1>
    <p className="text-sm text-gray-500 font-medium tracking-wide">
      Interiors & Exteriors
    </p>
  </div>
</button>


            {/* Desktop Navigation */}
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
                    {Icon && (
                      <Icon
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isActive(path)
                            ? "scale-110"
                            : "group-hover:scale-110 group-focus:scale-110"
                        }`}
                      />
                    )}
                    <span className="relative">
                      {label}
                      {!isActive(path) && (
                        <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                      )}
                    </span>
                    {isActive(path) && (
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-xl blur-xl"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className="ml-6">
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="group relative bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:scale-105 overflow-hidden focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  aria-label="Get a quote - Contact us"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Get Quote</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 group-focus:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset route-0 bg-gradient-to-r from-amber-700 to-orange-700 scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
                  isOpen
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg scale-110"
                    : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                }`}
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
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

          {/* Mobile Navigation */}
          <div
            id="mobile-menu"
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-100 my-4 p-6 space-y-2">
              {navLinks.map(({ path, label, icon: Icon }, index) => (
                <button
                  key={path}
                  onClick={() => handleNavigation(path)}
                  className={`group flex items-center justify-between w-full px-4 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
                    isActive(path)
                      ? "text-white bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg scale-105"
                      : "text-gray-700 hover:text-amber-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:scale-105"
                  } ${isOpen ? "animate-slide-in-up" : ""}`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                  role="menuitem"
                  aria-current={isActive(path) ? "page" : undefined}
                >
                  <div className="flex items-center space-x-3">
                    {Icon && (
                      <div
                        className={`p-2 rounded-xl transition-all duration-300 ${
                          isActive(path)
                            ? "bg-white/20"
                            : "bg-gray-100 group-hover:bg-amber-100 group-hover:scale-110 group-focus:bg-amber-100 group-focus:scale-110"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                    )}
                    <span>{label}</span>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 transition-all duration-300 ${
                      isActive(path)
                        ? "text-white/80"
                        : "text-gray-400 group-hover:text-amber-500 group-hover:translate-x-1 group-focus:text-amber-500 group-focus:translate-x-1"
                    }`}
                  />
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => handleNavigation("/contact")}
                  className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  aria-label="Get a free quote - Contact us"
                >
                  <span>Get Free Quote</span>
                  <Sparkles className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}