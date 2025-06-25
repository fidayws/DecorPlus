import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { Package, DollarSign, Info } from 'lucide-react';

export default function Materials() {
  const { materials } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredMaterials = selectedCategory 
    ? materials.filter(material => material.id === selectedCategory)
    : materials;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <Package className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Materials & Finishes</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Premium quality materials and finishes for all your interior and exterior design needs
            </p>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="mb-12 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  !selectedCategory
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Categories
              </button>
              {materials.map(material => (
                <button
                  key={material.id}
                  onClick={() => setSelectedCategory(material.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === material.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {material.category}
                </button>
              ))}
            </div>
          </div>

          {/* Materials Grid */}
          <div className="space-y-12">
            {filteredMaterials.map((materialCategory) => (
              <div key={materialCategory.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-6">
                  <h2 className="text-3xl font-bold text-white">{materialCategory.category}</h2>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {materialCategory.items.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                          <Info className="h-5 w-5 text-gray-400" />
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                        <div className="flex items-center text-purple-600 font-semibold">
                          <DollarSign className="h-5 w-5 mr-1" />
                          <span>{item.priceRange}</span>
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help Choosing Materials?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Our design experts can help you select the perfect materials for your project
          </p>
          <a
            href="/contact"
            className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 inline-block"
          >
            Consult Our Experts
          </a>
        </div>
      </section>
    </div>
  );
}