import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import ImageGallery from '../components/ImageGallery';
import { Palette } from 'lucide-react';

export default function Interiors() {
  const { images, categories } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const interiorCategories = categories.filter(cat => cat.type === 'interior');
  const interiorImages = images.filter(img => {
    const category = categories.find(cat => cat.id === img.categoryId);
    return category?.type === 'interior';
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <Palette className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Interior Design</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Transform your indoor spaces with our expert interior design services. 
              From concept to completion, we create beautiful, functional environments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interior Design Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive interior design solutions tailored to your lifestyle and preferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interiorCategories.map((category) => (
              <div key={category.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Interior Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our portfolio of stunning interior transformations
            </p>
          </div>
          
          <ImageGallery
            images={interiorImages}
            categories={interiorCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>
    </div>
  );
}