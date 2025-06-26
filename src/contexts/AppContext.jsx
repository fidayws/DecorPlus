import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(undefined);

const initialCategories = [
  // Home Categories
  { id: '1', name: 'Home Living Rooms', type: 'interior', service: 'home', description: 'Modern and cozy home living spaces' },
  { id: '2', name: 'Home Kitchens', type: 'interior', service: 'home', description: 'Functional and beautiful home kitchen designs' },
  { id: '3', name: 'Home Bedrooms', type: 'interior', service: 'home', description: 'Peaceful and comfortable home bedroom layouts' },
  { id: '4', name: 'Home Bathrooms', type: 'interior', service: 'home', description: 'Luxury and spa-like home bathroom designs' },
  { id: '5', name: 'Home Gardens', type: 'exterior', service: 'home', description: 'Beautiful home landscaping and garden designs' },
  { id: '6', name: 'Home Patios', type: 'exterior', service: 'home', description: 'Home outdoor entertaining and relaxation spaces' },
  { id: '7', name: 'Home Facades', type: 'exterior', service: 'home', description: 'Stunning home exterior transformations' },
  
  // Hotel Categories
  { id: '8', name: 'Hotel Lobbies', type: 'interior', service: 'hotel', description: 'Impressive hotel lobby and reception designs' },
  { id: '9', name: 'Hotel Rooms', type: 'interior', service: 'hotel', description: 'Comfortable and luxurious hotel room interiors' },
  { id: '10', name: 'Hotel Restaurants', type: 'interior', service: 'hotel', description: 'Elegant hotel dining and restaurant spaces' },
  { id: '11', name: 'Hotel Exteriors', type: 'exterior', service: 'hotel', description: 'Striking hotel facade and entrance designs' },
  { id: '12', name: 'Hotel Landscapes', type: 'exterior', service: 'hotel', description: 'Beautiful hotel grounds and landscaping' },
  
  // Office Categories
  { id: '13', name: 'Office Workspaces', type: 'interior', service: 'office', description: 'Productive and modern office workspace designs' },
  { id: '14', name: 'Office Reception', type: 'interior', service: 'office', description: 'Professional office reception and lobby areas' },
  { id: '15', name: 'Office Meeting Rooms', type: 'interior', service: 'office', description: 'Functional and inspiring meeting room designs' },
  { id: '16', name: 'Office Exteriors', type: 'exterior', service: 'office', description: 'Professional office building exterior designs' },
  { id: '17', name: 'Office Landscapes', type: 'exterior', service: 'office', description: 'Corporate landscaping and outdoor spaces' },
];

const initialImages = [
  // Home Images
  {
    id: '1',
    url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Modern Home Living Room',
    description: 'Contemporary home living space with clean lines',
    categoryId: '1',
    featured: true,
    price: 2500
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Luxury Home Kitchen',
    description: 'High-end home kitchen with premium finishes',
    categoryId: '2',
    featured: true,
    price: 4500
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/1743226/pexels-photo-1743226.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Cozy Home Bedroom',
    description: 'Warm and inviting home bedroom design',
    categoryId: '3',
    featured: true,
    price: 1800
  },
  
  // Hotel Images
  {
    id: '4',
    url: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Grand Hotel Lobby',
    description: 'Luxurious hotel lobby with marble finishes',
    categoryId: '8',
    featured: true,
    price: 15000
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Hotel Suite Interior',
    description: 'Elegant hotel room with modern amenities',
    categoryId: '9',
    price: 8000
  },
  
  // Office Images
  {
    id: '6',
    url: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Modern Office Workspace',
    description: 'Open plan office with contemporary design',
    categoryId: '13',
    featured: true,
    price: 12000
  },
];

const materials = [
  {
    id: '1',
    category: 'Flooring',
    items: [
      { name: 'Marble', description: 'Premium natural stone flooring with elegant veining patterns', priceRange: '$50-150/sq ft' },
      { name: 'Hardwood', description: 'Solid wood flooring in oak, maple, cherry varieties', priceRange: '$30-80/sq ft' },
      { name: 'Ceramic Tiles', description: 'Durable and water-resistant ceramic floor tiles', priceRange: '$15-40/sq ft' },
      { name: 'Vinyl Planks', description: 'Modern luxury vinyl planks with wood-look finish', priceRange: '$20-60/sq ft' },
      { name: 'Natural Stone', description: 'Granite, limestone, and travertine natural stone', priceRange: '$40-120/sq ft' }
    ]
  },
  {
    id: '2',
    category: 'Wall Materials',
    items: [
      { name: 'Paint', description: 'Premium interior and exterior paints in various finishes', priceRange: '$25-60/gallon' },
      { name: 'Wallpaper', description: 'Designer wallpapers including textured and printed options', priceRange: '$30-150/roll' },
      { name: 'Wood Paneling', description: 'Solid wood and engineered wood wall paneling', priceRange: '$40-100/sq ft' },
      { name: 'Stone Veneer', description: 'Natural and manufactured stone wall cladding', priceRange: '$35-80/sq ft' },
      { name: 'Brick', description: 'Traditional and modern brick wall treatments', priceRange: '$25-70/sq ft' }
    ]
  },
  {
    id: '3',
    category: 'Ceiling Materials',
    items: [
      { name: 'Gypsum Board', description: 'Standard drywall for smooth ceiling finishes', priceRange: '$15-30/sq ft' },
      { name: 'Suspended Ceiling', description: 'Drop ceiling systems with acoustic tiles', priceRange: '$20-50/sq ft' },
      { name: 'Wood Beams', description: 'Exposed wooden beams for rustic or modern looks', priceRange: '$60-200/linear ft' },
      { name: 'Coffered Ceiling', description: 'Decorative recessed ceiling panels', priceRange: '$80-300/sq ft' },
      { name: 'Stretch Ceiling', description: 'Modern PVC stretch ceiling systems', priceRange: '$40-100/sq ft' }
    ]
  },
  {
    id: '4',
    category: 'Fixtures & Hardware',
    items: [
      { name: 'Lighting Fixtures', description: 'Chandeliers, pendant lights, and LED systems', priceRange: '$100-5000/piece' },
      { name: 'Door Hardware', description: 'Handles, locks, hinges in various finishes', priceRange: '$50-500/set' },
      { name: 'Window Hardware', description: 'Blinds, curtains, and window treatment systems', priceRange: '$100-800/window' },
      { name: 'Plumbing Fixtures', description: 'Faucets, sinks, toilets, and bathroom accessories', priceRange: '$200-3000/piece' },
      { name: 'Cabinet Hardware', description: 'Knobs, pulls, and cabinet accessories', priceRange: '$20-200/piece' }
    ]
  }
];

const laborTypes = [
  {
    id: '1',
    category: 'Construction',
    workers: [
      { name: 'Mason', description: 'Skilled in brickwork, stonework, and concrete construction', rate: '$40-80/hour' },
      { name: 'Carpenter', description: 'Expert in woodworking, framing, and custom millwork', rate: '$35-70/hour' },
      { name: 'Electrician', description: 'Licensed electrical work and lighting installation', rate: '$50-100/hour' },
      { name: 'Plumber', description: 'Water supply, drainage, and fixture installation', rate: '$45-90/hour' },
      { name: 'HVAC Technician', description: 'Heating, ventilation, and air conditioning systems', rate: '$50-95/hour' }
    ]
  },
  {
    id: '2',
    category: 'Finishing',
    workers: [
      { name: 'Painter', description: 'Interior and exterior painting, wallpaper installation', rate: '$30-60/hour' },
      { name: 'Tile Installer', description: 'Ceramic, marble, and stone tile installation', rate: '$35-75/hour' },
      { name: 'Flooring Specialist', description: 'Hardwood, laminate, and carpet installation', rate: '$30-65/hour' },
      { name: 'Drywall Finisher', description: 'Drywall installation, taping, and finishing', rate: '$25-55/hour' },
      { name: 'Trim Carpenter', description: 'Molding, baseboards, and finish carpentry', rate: '$40-80/hour' }
    ]
  },
  {
    id: '3',
    category: 'Specialized',
    workers: [
      { name: 'Interior Designer', description: 'Space planning, color schemes, and design consultation', rate: '$75-200/hour' },
      { name: 'Landscape Designer', description: 'Outdoor space planning and garden design', rate: '$60-150/hour' },
      { name: 'Project Manager', description: 'Coordination and oversight of construction projects', rate: '$50-120/hour' },
      { name: 'Architect', description: 'Building design and structural planning', rate: '$100-300/hour' },
      { name: 'Site Supervisor', description: 'On-site management and quality control', rate: '$40-85/hour' }
    ]
  }
];

const teamMembers = [
  {
    id: '1',
    name: 'Firdous Ahmed',
    role: 'Lead Interior Designer',
    specialization: 'Interior Design',
    image: 'https://res.cloudinary.com/dw1sh368y/image/upload/v1750920734/pic1-removebg-preview_odp0vm.png',
    description: 'Firdous Ahmed brings over 15 years of expertise in interior design, specializing in residential and commercial spaces. With a keen eye for detail and a passion for creating functional yet beautiful environments, Firdous has successfully completed over 300 projects ranging from luxury homes to corporate offices. His design philosophy centers on understanding client needs and translating them into spaces that reflect personality while maximizing functionality.',
    experience: '15+ years',
    projects: '300+',
    specialties: ['Residential Interiors', 'Commercial Spaces', 'Space Planning', 'Color Theory']
  },
  {
    id: '2',
    name: 'Javaid Ahmed',
    role: 'Senior Exterior Designer',
    specialization: 'Exterior Design & Landscaping',
    image: 'https://res.cloudinary.com/dw1sh368y/image/upload/v1750920738/pic2-removebg-preview_zvfrrk.png',
    description: 'Javaid Ahmed is a master of exterior design and landscaping with 12 years of experience transforming outdoor spaces. His expertise spans from architectural facades to comprehensive landscape design, creating stunning curb appeal and functional outdoor living areas. Javaid combines traditional design principles with modern sustainability practices, ensuring every project is both beautiful and environmentally conscious.',
    experience: '12+ years',
    projects: '250+',
    specialties: ['Facade Design', 'Landscape Architecture', 'Sustainable Design', 'Outdoor Living Spaces']
  }
];

export function AppProvider({ children }) {
  const [categories, setCategories] = useState(initialCategories);
  const [images, setImages] = useState(initialImages);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addCategory = (category) => {
    const newCategory = {
      ...category,
      id: Date.now().toString(),
    };
    setCategories(prev => [...prev, newCategory]);
  };

  const addImage = (image) => {
    const newImage = {
      ...image,
      id: Date.now().toString(),
    };
    setImages(prev => [...prev, newImage]);
  };

  const deleteCategory = (id) => {
    setCategories(prev => prev.filter(cat => cat.id !== id));
    setImages(prev => prev.filter(img => img.categoryId !== id));
  };

  const deleteImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const updateCategory = (id, updates) => {
    setCategories(prev => prev.map(cat => 
      cat.id === id ? { ...cat, ...updates } : cat
    ));
  };

  const updateImage = (id, updates) => {
    setImages(prev => prev.map(img => 
      img.id === id ? { ...img, ...updates } : img
    ));
  };

  const login = (username, password) => {
    // Simple authentication - in production, use proper authentication
    if (username === 'admin' && password === 'homeplus123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AppContext.Provider value={{
      categories,
      images,
      materials,
      laborTypes,
      teamMembers,
      isAuthenticated,
      addCategory,
      addImage,
      deleteCategory,
      deleteImage,
      updateCategory,
      updateImage,
      login,
      logout,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}