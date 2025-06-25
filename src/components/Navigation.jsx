import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Menu,
  X,
  Palette,
  Package,
  Users,
  Info,
} from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/services", label: "Services", icon: Palette },
    { path: "/materials", label: "Materials", icon: Package },
    { path: "/labor", label: "Labor", icon: Users },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-16 w-16 bg-amber-600 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/homeplusLogo.png"
                alt="Home Plus Logo"
                className="h-12 w-12 object-cover                                                                                                                                                                                                                                               "
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">
                Home Plus
              </h1>
              <p className="text-xs text-gray-600">Interiors & Exteriors</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(path)
                    ? "text-amber-600 bg-amber-100"
                    : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                }`}
              >
                {Icon && <Icon className="h-4 w-4" />}
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-amber-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-2">
            <div className="bg-white rounded-md shadow-md py-3 px-4 space-y-2">
              {navLinks.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(path)
                      ? "text-amber-600 bg-amber-100"
                      : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                  }`}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
