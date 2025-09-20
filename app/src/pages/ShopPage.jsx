import React from 'react'
import Button from '../components/atoms/Button'

const ShopPage = () => {
  const organicSoups = [
    {
      name: "Pink Berry Bliss",
      description: "Antioxidant-rich soup with organic berries and healing herbs",
      price: 18,
      color: "from-pink-400 to-pink-500",
      image: "/assets/images/soup1.png"
    },
    {
      name: "Blue Harmony Bowl",
      description: "Calming blueberry and lavender soup for wellness and relaxation",
      price: 20,
      color: "from-blue-400 to-blue-500",
      image: "/assets/images/soup2.png"
    },
    {
      name: "Garden Fresh Detox",
      description: "Organic vegetable medley with supergreens and healing spices",
      price: 16,
      color: "from-green-400 to-green-500",
      image: "/assets/images/soup3.png"
    },
    {
      name: "Golden Turmeric Glow",
      description: "Anti-inflammatory golden milk soup with organic coconut",
      price: 19,
      color: "from-yellow-400 to-orange-400",
      image: "/assets/images/soup4.png"
    },
    {
      name: "Protein Power Pink",
      description: "Quinoa and pink bean soup with organic protein blend",
      price: 22,
      color: "from-pink-300 to-pink-400",
      image: "/assets/images/soup5.png"
    },
    {
      name: "Blue Spirulina Boost",
      description: "Superfood soup with blue spirulina and organic vegetables",
      price: 24,
      color: "from-blue-300 to-cyan-400",
      image: "/assets/images/soup6.png"
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="block text-gray-600 font-light">Organic</span>
            <span className="block text-transparent bg-gradient-to-r from-pink-500 via-pink-600 to-blue-500 bg-clip-text font-serif">
              Soups
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-8">
            Nourish your body from within with our daily selection of 
            organic, healing soups crafted with love and premium ingredients
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
            <span className="text-gray-700 font-medium">Fresh daily selection - Made to order</span>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-60 shadow-lg"></div>
          <div className="absolute top-32 right-16 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-50 shadow-md"></div>
          <div className="absolute bottom-20 right-32 w-12 h-12 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-70"></div>
          <div className="absolute bottom-32 left-24 w-14 h-14 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-60"></div>
        </div>
      </section>
      
      {/* Soups Menu */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Today's Fresh Selection
            </h2>
            <p className="text-lg text-gray-600">
              Each soup is crafted with organic ingredients and served fresh daily
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organicSoups.map((soup, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Soup Image */}
                <div className="h-48 relative overflow-hidden bg-gray-50">
                  <img 
                    src={soup.image} 
                    alt={soup.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${soup.color} opacity-20`}></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">Organic</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {soup.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {soup.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${soup.price}</span>
                      <span className="text-gray-500 text-sm ml-1">per bowl</span>
                    </div>
                    <Button 
                      className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Wellness Benefits */}
      <section className="py-16" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
            Nourishment That Complements Your Beauty Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Organic Ingredients</h3>
              <p className="text-gray-600 text-sm">
                Every soup made with certified organic, locally-sourced ingredients for maximum nutrition
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Beauty From Within</h3>
              <p className="text-gray-600 text-sm">
                Nutrient-rich formulas designed to enhance your natural radiance and support healthy skin
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Daily Fresh</h3>
              <p className="text-gray-600 text-sm">
                Made fresh each morning with rotating seasonal selections for variety and peak nutrition
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Complete Your Salon Experience
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Add an organic soup to your salon appointment for the ultimate wellness experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Book Service + Soup
            </Button>
            <Button 
              className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
            >
              Order Soup Only
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
