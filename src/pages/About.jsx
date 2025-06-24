import React from 'react';
import { useApp } from '../contexts/AppContext';
import { Users, Award, Clock, Heart, Star, MapPin, Phone, Mail } from 'lucide-react';

export default function About() {
  const { teamMembers } = useApp();

  const values = [
    {
      icon: Heart,
      title: 'Passion for Design',
      description: 'We love what we do and it shows in every project we complete.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your vision is our priority. We listen, understand, and deliver.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every aspect of our work.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and always deliver projects on schedule.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Home Plus</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              For over 15 years, we've been transforming homes, hotels, and offices through exceptional design. 
              Our passion is creating spaces that reflect your personality and enhance your lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Home Plus Interiors & Exteriors was founded on the belief that "Change begins at home." 
                  We understand that your living space is more than just a place to reside—it's where memories 
                  are made, dreams are nurtured, and life unfolds.
                </p>
                <p>
                  Our journey began when our founders, Firdous Ahmed and Javaid Ahmed, recognized the transformative 
                  power of thoughtful design. What started as a small interior design studio has grown into a 
                  full-service design firm specializing in residential, hospitality, and commercial spaces.
                </p>
                <p>
                  Today, we're proud to have completed over 500 projects, each one unique and tailored to 
                  our clients' specific needs and dreams. Our team combines artistic vision with practical 
                  expertise to create spaces that are both beautiful and functional.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautiful home interior"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape every project we undertake
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-amber-600 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our talented professionals bring creativity, expertise, and passion to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-amber-600 font-semibold text-lg">{member.role}</p>
                        <p className="text-gray-600">{member.specialization}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center bg-white rounded-lg p-3">
                        <div className="text-2xl font-bold text-amber-600">{member.experience}</div>
                        <div className="text-sm text-gray-600">Experience</div>
                      </div>
                      <div className="text-center bg-white rounded-lg p-3">
                        <div className="text-2xl font-bold text-amber-600">{member.projects}</div>
                        <div className="text-sm text-gray-600">Projects</div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, index) => (
                          <span key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to work with our team? Contact us to discuss your project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <MapPin className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Design Street<br />City, State 12345</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <Phone className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg shadow-lg">
              <Mail className="h-12 w-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@homeplusdesign.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
            Let's work together to transform your space into something extraordinary
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}