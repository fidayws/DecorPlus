import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, DollarSign } from 'lucide-react';

export default function ImageGallery({ 
  images, 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory 
    ? images.filter(img => img.categoryId === selectedCategory)
    : images;

  const openLightbox = (image) => {
    setLightboxImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    if (currentImageIndex < filteredImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
      setLightboxImage(filteredImages[currentImageIndex + 1]);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
      setLightboxImage(filteredImages[currentImageIndex - 1]);
    }
  };

  return (
    <div>
      {/* Category Filters */}
      {onCategoryChange && (
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => onCategoryChange('')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              !selectedCategory
                ? 'bg-amber-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      )}

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => openLightbox(image)}
          >
            <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
              {image.description && (
                <p className="text-sm text-gray-600 mb-2">{image.description}</p>
              )}
              {image.price && (
                <div className="flex items-center text-amber-600 font-semibold">
                  
                  <span>{image.price.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            {currentImageIndex > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
            )}
            
            {currentImageIndex < filteredImages.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            )}
            
            <img
              src={lightboxImage.url}
              alt={lightboxImage.title}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 rounded-lg p-4">
              <h3 className="text-white font-semibold text-lg">{lightboxImage.title}</h3>
              {lightboxImage.description && (
                <p className="text-gray-300 text-sm mt-1">{lightboxImage.description}</p>
              )}
              {lightboxImage.price && (
                <div className="flex items-center text-amber-400 font-semibold mt-2">
                  {/* <DollarSign className="h-5 w-5" /> */}
                  <span className="text-lg">{lightboxImage.price.toLocaleString()}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}