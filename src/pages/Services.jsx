import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import ImageGallery from '../components/ImageGallery';
import { Home as HomeIcon, Hotel, Building, ArrowRight, Palette, Building2 } from 'lucide-react';

export default function Services() {
  const { serviceType } = useParams();
  const { images, categories } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('');

  const serviceConfig = {
    home: {
      title: 'Home Interior & Exterior',
      description: 'Transform your residential spaces with our comprehensive home design services',
      icon: HomeIcon,
      color: 'from-amber-600 to-orange-600'
    },
    hotel: {
      title: 'Hotel Interior & Exterior',
      description: 'Create memorable hospitality experiences with luxurious designs',
      icon: Hotel,
      color: 'from-blue-600 to-indigo-600'
    },
    office: {
      title: 'Office Interior & Exterior',
      description: 'Design productive and professional office environments',
      icon: Building,
      color: 'from-green-600 to-teal-600'
    }
  };

  if (!serviceType) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                Comprehensive interior and exterior design solutions for homes, hotels, and offices
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {Object.entries(serviceConfig).map(([key, service]) => (
                <Link
                  key={key}
                  to={`/services/${key}`}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`bg-gradient-to-r ${service.color} p-4 rounded-lg`}>
                        <service.icon className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{service.description}</p>
                    <div className="flex items-center text-amber-600 font-semibold group-hover:text-amber-700">
                      <span>Explore Service</span>
                      <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  const currentService = serviceConfig[serviceType];
  if (!currentService) {
    return <div>Service not found</div>;
  }

  const serviceCategories = categories.filter(cat => cat.service === serviceType);
  const serviceImages = images.filter(img => {
    const category = categories.find(cat => cat.id === img.categoryId);
    return category?.service === serviceType;
  });

  const interiorCategories = serviceCategories.filter(cat => cat.type === 'interior');
  const exteriorCategories = serviceCategories.filter(cat => cat.type === 'exterior');

  return (
    <div className="min-h-screen bg-gray-50">
      <section className={`bg-gradient-to-r ${currentService.color} py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="flex justify-center mb-4">
              <currentService.icon className="h-16 w-16" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentService.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {currentService.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <Palette className="h-8 w-8 text-amber-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Interior Design</h2>
              </div>
              <div className="space-y-4">
                {interiorCategories.map((category) => (
                  <div key={category.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Exterior Design</h2>
              </div>
              <div className="space-y-4">
                {exteriorCategories.map((category) => (
                  <div key={category.id} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our {currentService.title} Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of stunning {serviceType} transformations
            </p>
          </div>

          <ImageGallery
            images={serviceImages}
            categories={serviceCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
      </section>
    </div>
  );
}
