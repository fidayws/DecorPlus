import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  ArrowRight,
  Home as HomeIcon,
  Building,
  Hotel,
  DollarSign,
} from "lucide-react";
import { useApp } from "../contexts/AppContext";
import VideoCarousel from "../components/VideoCarousel";

export default function Home() {
  const { images, categories, teamMembers } = useApp();
  const featuredImages = images.filter((img) => img.featured);

  const services = [
    {
      title: "Home Interior & Exterior",
      description:
        "Transform your residential spaces with our comprehensive home design services. From cozy living rooms to beautiful gardens.",
      icon: HomeIcon,
      link: "/services/home",
      color: "from-amber-600 to-orange-600",
    },
    {
      title: "Hotel Interior & Exterior",
      description:
        "Create memorable hospitality experiences with luxurious hotel interiors and impressive exterior designs.",
      icon: Hotel,
      link: "/services/hotel",
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Office Interior & Exterior",
      description:
        "Design productive and professional office environments that inspire creativity and enhance business success.",
      icon: Building,
      link: "/services/office",
      color: "from-green-600 to-teal-600",
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Design Awards" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[110svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Beautiful home interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 mt-[4.5rem]">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Change Begins
            <span className="block text-amber-500">At Home</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-center">
            Transform your living spaces with Home Plus Interiors & Exteriors —
            the leading interior and exterior design experts based in{" "}
            <strong>Srinagar,</strong> <strong>Anantnag</strong>, serving all across{" "}
            <strong>Kashmir</strong>. Where exceptional design meets quality
            craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>View Our Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating beautiful, functional spaces across
              residential, hospitality, and commercial sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gradient-to-r ${service.color} p-3 rounded-lg`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-4">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our most stunning transformations across all
              service categories
            </p>
          </div>

          <div className="grid grid-colsEquality-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{image.description}</p>
                  {image.price && (
                    <div className="flex items-center text-amber-600 font-semibold">
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Our Highlights
          </h2>
          <VideoCarousel />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our talented professionals bring creativity, expertise, and
              passion to every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full pt-[100%]">
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 font-semibold text-lg">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.specialization}</p>
                  <p className="text-gray-600 mt-4 mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-2xl font-bold text-amber-600">
                        {member.experience}
                      </div>
                      <div className="text-sm text-gray-600">Experience</div>
                    </div>
                    <div className="text-center bg-white rounded-lg p-3 shadow-sm">
                      <div className="text-2xl font-bold text-amber-600">
                        {member.projects}
                      </div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const [ref, inView] = useInView({ triggerOnce: true });
              // Extract numeric part by removing non-numeric characters
              const numericValue = parseInt(stat.number.replace(/[^0-9]/g, ""));
              // Determine suffix based on original string
              const suffix = stat.number.includes("%") ? "%" : stat.number.includes("+") ? "+" : "";

              return (
                <div key={index} ref={ref} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {inView && (
                      <CountUp
                        end={numericValue}
                        duration={2}
                        separator=","
                        suffix={suffix}
                      />
                    )}
                  </div>
                  <div className="text-lg text-amber-100">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Whether it's your home, hotel, or office - let's create something
            beautiful together.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <span>Get Started Today</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}