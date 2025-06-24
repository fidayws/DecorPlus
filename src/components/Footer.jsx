import React from 'react';
import { Home, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 p-2 rounded-lg">
                <Home className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Home Plus</h2>
                <p className="text-sm text-gray-400">Interiors & Exteriors</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              "Change begins at home" - We transform your living spaces into beautiful, 
              functional environments that reflect your style and enhance your quality of life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/interiors" className="hover:text-amber-500 transition-colors">Interior Design</a></li>
              <li><a href="/exteriors" className="hover:text-amber-500 transition-colors">Exterior Design</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Landscaping</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Renovations</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Consultations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">123 Design Street, City, State 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+919906772162, +917006310327</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@homeplusdesign.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Home Plus Interiors & Exteriors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}