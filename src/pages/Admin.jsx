import React, { useState } from 'react';
import { useApp } from '../contexts/AppContext';
import { Plus, Edit, Trash2, Save, X, Lock, LogOut, DollarSign } from 'lucide-react';

export default function Admin() {
  const { 
    categories, 
    images, 
    isAuthenticated, 
    addCategory, 
    addImage, 
    deleteCategory, 
    deleteImage, 
    updateCategory, 
    updateImage, 
    login, 
    logout 
  } = useApp();
  
  const [activeTab, setActiveTab] = useState('categories');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  
  const [categoryForm, setCategoryForm] = useState({
    name: '',
    type: 'interior',
    service: 'home',
    description: ''
  });
  
  const [imageForm, setImageForm] = useState({
    url: '',
    title: '',
    description: '',
    categoryId: '',
    featured: false,
    price: ''
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(loginForm.username, loginForm.password);
    if (success) {
      setLoginError('');
      setLoginForm({ username: '', password: '' });
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    logout();
    setActiveTab('categories');
    setShowAddForm(false);
    setEditingItem(null);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    addCategory(categoryForm);
    setCategoryForm({ name: '', type: 'interior', service: 'home', description: '' });
    setShowAddForm(false);
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    const imageData = {
      ...imageForm,
      price: imageForm.price ? parseFloat(imageForm.price) : undefined
    };
    addImage(imageData);
    setImageForm({ url: '', title: '', description: '', categoryId: '', featured: false, price: '' });
    setShowAddForm(false);
  };

  const handleEditCategory = (category) => {
    setEditingItem(category.id);
    setCategoryForm({
      name: category.name,
      type: category.type,
      service: category.service || 'home',
      description: category.description || ''
    });
  };

  const handleEditImage = (image) => {
    setEditingItem(image.id);
    setImageForm({
      url: image.url,
      title: image.title,
      description: image.description || '',
      categoryId: image.categoryId,
      featured: image.featured || false,
      price: image.price ? image.price.toString() : ''
    });
  };

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    if (editingItem) {
      updateCategory(editingItem, categoryForm);
      setEditingItem(null);
      setCategoryForm({ name: '', type: 'interior', service: 'home', description: '' });
    }
  };

  const handleUpdateImage = (e) => {
    e.preventDefault();
    if (editingItem) {
      const imageData = {
        ...imageForm,
        price: imageForm.price ? parseFloat(imageForm.price) : undefined
      };
      updateImage(editingItem, imageData);
      setEditingItem(null);
      setImageForm({ url: '', title: '', description: '', categoryId: '', featured: false, price: '' });
    }
  };

  const cancelEdit = () => {
    setEditingItem(null);
    setCategoryForm({ name: '', type: 'interior', service: 'home', description: '' });
    setImageForm({ url: '', title: '', description: '', categoryId: '', featured: false, price: '' });
    setShowAddForm(false);
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Login</h1>
            <p className="text-gray-600 mt-2">Enter your credentials to access the admin panel</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                required
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                placeholder="Enter password"
              />
            </div>

            {loginError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-200"
            >
              Login
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>Demo credentials:</p>
            <p>Username: <strong>admin</strong></p>
            <p>Password: <strong>homeplus123</strong></p>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="mt-2 text-gray-600">Manage categories and images for your portfolio</p>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg mb-8 w-fit">
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'categories'
                ? 'bg-white text-amber-600 shadow'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Categories ({categories.length})
          </button>
          <button
            onClick={() => setActiveTab('images')}
            className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'images'
                ? 'bg-white text-amber-600 shadow'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Images ({images.length})
          </button>
        </div>

        {/* Categories Tab */}
        {activeTab === 'categories' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 flex items-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Add Category</span>
              </button>
            </div>

            {/* Add/Edit Category Form */}
            {(showAddForm || editingItem) && activeTab === 'categories' && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  {editingItem ? 'Edit Category' : 'Add New Category'}
                </h3>
                <form onSubmit={editingItem ? handleUpdateCategory : handleAddCategory}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={categoryForm.name}
                        onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="e.g., Living Rooms"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type *
                      </label>
                      <select
                        value={categoryForm.type}
                        onChange={(e) => setCategoryForm({ ...categoryForm, type: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="interior">Interior</option>
                        <option value="exterior">Exterior</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service *
                      </label>
                      <select
                        value={categoryForm.service}
                        onChange={(e) => setCategoryForm({ ...categoryForm, service: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="home">Home</option>
                        <option value="hotel">Hotel</option>
                        <option value="office">Office</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={categoryForm.description}
                      onChange={(e) => setCategoryForm({ ...categoryForm, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      rows={3}
                      placeholder="Brief description of this category"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 flex items-center space-x-2"
                    >
                      <Save className="h-4 w-4" />
                      <span>{editingItem ? 'Update' : 'Add'} Category</span>
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Categories List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{category.name}</h3>
                      <div className="flex space-x-2 mt-1">
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          category.type === 'interior' 
                            ? 'bg-amber-100 text-amber-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {category.type}
                        </span>
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          category.service === 'home' 
                            ? 'bg-blue-100 text-blue-800' 
                            : category.service === 'hotel'
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {category.service}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEditCategory(category)}
                        className="text-gray-400 hover:text-amber-600 transition-colors"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => deleteCategory(category.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  {category.description && (
                    <p className="text-sm text-gray-600">{category.description}</p>
                  )}
                  <div className="mt-3 text-sm text-gray-500">
                    {images.filter(img => img.categoryId === category.id).length} images
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Images Tab */}
        {activeTab === 'images' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Images</h2>
              <button
                onClick={() => setShowAddForm(true)}
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 flex items-center space-x-2"
              >
                <Plus className="h-5 w-5" />
                <span>Add Image</span>
              </button>
            </div>

            {/* Add/Edit Image Form */}
            {(showAddForm || editingItem) && activeTab === 'images' && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  {editingItem ? 'Edit Image' : 'Add New Image'}
                </h3>
                <form onSubmit={editingItem ? handleUpdateImage : handleAddImage}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Image URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={imageForm.url}
                        onChange={(e) => setImageForm({ ...imageForm, url: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={imageForm.title}
                        onChange={(e) => setImageForm({ ...imageForm, title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Image title"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        required
                        value={imageForm.categoryId}
                        onChange={(e) => setImageForm({ ...imageForm, categoryId: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                          <option key={category.id} value={category.id}>
                            {category.name} ({category.service} - {category.type})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price ($)
                      </label>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={imageForm.price}
                        onChange={(e) => setImageForm({ ...imageForm, price: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="0.00"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={imageForm.featured}
                          onChange={(e) => setImageForm({ ...imageForm, featured: e.target.checked })}
                          className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-sm font-medium text-gray-700">Featured Image</span>
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={imageForm.description}
                      onChange={(e) => setImageForm({ ...imageForm, description: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      rows={3}
                      placeholder="Brief description of the image"
                    />
                  </div>
                  <div className="flex space-x-3">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-amber-700 hover:to-orange-700 transition-all duration-200 flex items-center space-x-2"
                    >
                      <Save className="h-4 w-4" />
                      <span>{editingItem ? 'Update' : 'Add'} Image</span>
                    </button>
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors flex items-center space-x-2"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {images.map((image) => {
                const category = categories.find(cat => cat.id === image.categoryId);
                return (
                  <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="aspect-w-4 aspect-h-3 relative">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-48 object-cover"
                      />
                      {image.featured && (
                        <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900 text-sm">{image.title}</h3>
                        <div className="flex space-x-1">
                          <button
                            onClick={() => handleEditImage(image)}
                            className="text-gray-400 hover:text-amber-600 transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => deleteImage(image.id)}
                            className="text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      {category && (
                        <div className="flex space-x-1 mb-2">
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            category.type === 'interior' 
                              ? 'bg-amber-100 text-amber-800' 
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {category.name}
                          </span>
                          <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                            category.service === 'home' 
                              ? 'bg-blue-100 text-blue-800' 
                              : category.service === 'hotel'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {category.service}
                          </span>
                        </div>
                      )}
                      {image.price && (
                        <div className="flex items-center text-amber-600 font-semibold mb-2">
                          <DollarSign className="h-4 w-4" />
                          <span className="text-sm">{image.price.toLocaleString()}</span>
                        </div>
                      )}
                      {image.description && (
                        <p className="text-xs text-gray-600">{image.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}