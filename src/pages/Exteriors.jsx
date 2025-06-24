import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import ImageGallery from '../components/ImageGallery';
import { Building2 } from 'lucide-react';

export default function Exteriors() {
  const { images, categories } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const exteriorCategories = categories.filter(cat => cat.type === 'exterior');
  const exteriorImages = images.filter(img => {
    const category = categories.find(cat => cat.id === img.categoryId);
    return category?.type === 'exterior';
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <Building2 className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Exterior Design</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Enhance your home's curb appeal with stunning exterior designs and landscaping solutions. 
              Create outdoor spaces that inspire and impress.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exterior Design Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From landscaping to facade renovations, we transform your outdoor spaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exteriorCategories.map((category) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Exterior Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of beautiful exterior transformations
            </p>
          </div>
          
          <ImageGallery
            images={exteriorImages}
            categories={exteriorCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>
    </div>
  );
}