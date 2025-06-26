import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { Users, Clock, DollarSign, Award } from 'lucide-react';

export default function Labor() {
  const { laborTypes } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredLabor = selectedCategory 
    ? laborTypes.filter(labor => labor.id === selectedCategory)
    : laborTypes;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <Users className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Skilled Labor & Workforce</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Professional craftsmen and specialists for all your construction and design needs
            </p>
          </div>
        </div>
      </section>

      {/* Labor Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  !selectedCategory
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Categories
              </button>
              {laborTypes.map(laborCategory => (
                <button
                  key={laborCategory.id}
                  onClick={() => setSelectedCategory(laborCategory.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === laborCategory.id
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {laborCategory.category}
                </button>
              ))}
            </div>
          </div>

          {/* Labor Grid */}
          <div className="space-y-12">
            {filteredLabor.map((laborCategory) => (
              <div key={laborCategory.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-6">
                  <h2 className="text-3xl font-bold text-white">{laborCategory.category}</h2>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {laborCategory.workers.map((worker, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-gray-900">{worker.name}</h3>
                          <Award className="h-5 w-5 text-gray-400" />
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{worker.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-teal-600 font-semibold">
                            {/* <Clock className="h-5 w-5 mr-1" />
                            <span className="text-sm">Hourly Rate</span> */}
                          </div>
                          <div className="flex items-center text-teal-600 font-bold">
                            {/* <DollarSign className="h-5 w-5 mr-1" /> */}
                            {/* <span>{worker.rate}</span> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Skilled Workers for Your Project?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Connect with our network of certified professionals and experienced craftsmen
          </p>
          <a
            href="/contact"
            className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 inline-block"
          >
            Hire Our Team
          </a>
        </div>
      </section>
    </div>
  );
}