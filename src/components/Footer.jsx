import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  ArrowRight,
  Sparkles,
  Heart,
  Send,
  Award,
  Users,
  Clock,
  Linkedin
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Home, label: 'Projects Completed', value: '1000+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Clock, label: 'Years Experience', value: '15+' }
  ];

  const services = [
    { name: 'Interior Design', href: '#', popular: true },
    { name: 'Exterior Design', href: '#', popular: true },
    { name: 'Landscaping', href: '#' },
    { name: 'Kitchen Remodeling', href: '#' },
    { name: 'Bathroom Design', href: '#' },
    { name: 'Home Consultations', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61577623387350', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com/home.plus199/', label: 'Instagram', color: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600' },
    { icon: Twitter, href: 'https://x.com/HomePlus199', label: 'Twitter', color: 'hover:bg-sky-500' },
    // { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #fbbf24 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #f97316 0%, transparent 50%)`,
            backgroundSize: '400px 400px'
          }}
        ></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-5">
              <div className="group cursor-pointer inline-block mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative rounded-2xl overflow-hidden bg-white">
                    <img
                      src="/homeplusLogo.png"
                      alt="Home Plus Logo"
                      className={`h-28 w-auto transition-all duration-300 ${
                        scrolled ? "h-12" : ""
                      }`}
                    />
                   <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>


                    <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-amber-400 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                      Home Plus
                    </h2>
                    <p className="text-amber-400 font-semibold tracking-wide">Interiors & Exteriors</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                <span className="text-amber-400 font-semibold">"Change begins at home"</span> - We transform your living spaces into beautiful, 
                functional environments that reflect your style and enhance your quality of life.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <span>Stay Updated</span>
                </h3>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-gray-400 transition-all duration-300"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 rounded-r-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => {
                    const hoverColor =
                      label === 'Facebook'
                        ? 'hover:bg-blue-600'
                        : label === 'Instagram'
                        ? 'hover:bg-pink-600'
                        : label === 'Twitter'
                        ? 'hover:bg-sky-500'
                        : label === 'LinkedIn'
                        ? 'hover:bg-blue-700'
                        : '';
                    return (
                      <a
                        key={label}
                        href={href}
                        onMouseEnter={() => setHoveredSocial(label)}
                        onMouseLeave={() => setHoveredSocial(null)}
                        className={`group relative w-12 h-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${hoverColor} hover:border-white/20`}
                        aria-label={label}
                      >
                        <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        {hoveredSocial === label && (
                          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                            {label}
                          </div>
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-4">
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg"></div>
                <span>Our Services</span>
              </h3>
              <ul className="space-y-3">
                {services.map(({ name, href, popular }) => (
                  <li key={name}>
                    <a 
                      href={href} 
                      className="group flex items-center justify-between p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {name}
                        </span>
                        {popular && (
                          <span className="px-2 py-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-400 text-xs rounded-full border border-amber-500/30">
                            Popular
                          </span>
                        )}
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-amber-400 transform group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg"></div>
                <span>Get In Touch</span>
              </h3>
              <ul className="space-y-4">
                <li className="group">
                  <a href="#" className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                       Qaimoh, Chera Hama, Jammu and Kashmir 192124<br />
                       
                      </p>
                    </div>
                  </a>
                </li>
                <li className="group">
                  <a href="tel:+919906772162" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        +919906772162<br />
                        +917006310327
                      </p>
                    </div>
                  </a>
                </li>
                <li className="group">
                  <a href="mailto:info@homeplusdesign.com" className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
<<<<<<< HEAD
                        home.plus199@gmail.com
=======
                       home.plus199@gmail.com
>>>>>>> 8188103e3c32a1f6a193047cef62813c79a6fa05
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 flex items-center space-x-2">
                <span>&copy; 2025 Home Plus Interiors & Exteriors. All rights reserved.</span>
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-1 text-gray-400">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                  <a href="http://yaamwebsolutions.com"><span>by Yaam Web Solutions</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </footer>
  );
}
