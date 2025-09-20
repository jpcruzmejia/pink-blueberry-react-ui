import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/atoms/Button'

const HomePage = () => {
  return (
    <div>
      {/* Hero Section - Lovable-inspired with hero background image */}
      <section 
        className="relative overflow-hidden min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/assets/images/hero-blueberry-DZ7rwlok.jpg)',
          backgroundColor: '#FAF7F2'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Decorative floating elements - Pink & Blue instead of blueberries */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large pink circles - top left */}
          <div className="absolute top-16 left-16 w-32 h-32 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-80 shadow-xl transform rotate-12"></div>
          <div className="absolute top-24 left-24 w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full opacity-70 shadow-lg transform -rotate-6"></div>
          <div className="absolute top-32 left-8 w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-60 shadow-md transform rotate-45"></div>
          
          {/* Large blue circles - bottom right */}
          <div className="absolute bottom-16 right-16 w-40 h-40 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-75 shadow-xl transform -rotate-12"></div>
          <div className="absolute bottom-24 right-32 w-28 h-28 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-65 shadow-lg transform rotate-6"></div>
          <div className="absolute bottom-40 right-8 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-55 shadow-md transform -rotate-30"></div>
          
          {/* Scattered small decorative dots */}
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-70"></div>
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-pink-300 rounded-full opacity-50"></div>
          <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-blue-300 rounded-full opacity-60"></div>
          <div className="absolute bottom-1/2 right-1/5 w-3 h-3 bg-pink-400 rounded-full opacity-40"></div>
          
          {/* Additional scattered dots */}
          <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-blue-400 rounded-full opacity-50"></div>
          <div className="absolute bottom-2/3 right-2/5 w-3 h-3 bg-pink-300 rounded-full opacity-45"></div>
          <div className="absolute top-3/4 right-1/6 w-2 h-2 bg-blue-300 rounded-full opacity-55"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="space-y-8">
            {/* Main heading - inspired by Lovable typography */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white/90 font-light drop-shadow-lg">Beauty & Nourish,</span>
              <span className="block text-transparent bg-gradient-to-r from-pink-400 via-pink-500 to-blue-400 bg-clip-text font-serif drop-shadow-lg">
                Naturally
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-md">
              Where premium hair care meets organic nourishment in a 
              sanctuary designed for your complete well-being
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button 
                as={Link} 
                to="/booking" 
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Book a Haircut
              </Button>
              <Button 
                as={Link} 
                to="/shop" 
                variant="secondary"
                className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                See Organic Soups
              </Button>
            </div>
            
            {/* Featured notice */}
            <div className="pt-12">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
                <span className="text-gray-800 font-medium">Now serving organic lunch soups daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview - Enhanced with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Our Luxury Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our comprehensive range of premium beauty and wellness treatments, 
              designed to nurture your body and soul in our serene sanctuary
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Hair Services Card */}
            <div className="card-service text-center group relative overflow-hidden">
              <div className="relative mb-6">
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <img 
                    src="/assets/images/hairservices1.png" 
                    alt="Hair Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-pink rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Hair Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Expert cuts, vibrant color, sophisticated styling, and restorative treatments 
                tailored to enhance your natural beauty
              </p>
              <div className="mb-6">
                <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full">Cuts & Styling</span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full">Color & Highlights</span>
                  <span className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full">Treatments</span>
                </div>
              </div>
              <Button as={Link} to="/booking" variant="ghost" size="sm" 
                className="text-brand-pink hover:bg-brand-pink hover:text-white"
              >
                Book Hair Service
              </Button>
            </div>
            
            {/* Nail Care Card */}
            <div className="card-service text-center group relative overflow-hidden">
              <div className="relative mb-6">
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <img 
                    src="/assets/images/nailcare.png" 
                    alt="Nail Care Services"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Nail Care</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Luxurious manicures, rejuvenating pedicures, and artistic nail designs 
                crafted by our skilled technicians
              </p>
              <div className="mb-6">
                <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">Manicures</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">Pedicures</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full">Nail Art</span>
                </div>
              </div>
              <Button as={Link} to="/booking" variant="ghost" size="sm"
                className="text-brand-blue hover:bg-brand-blue hover:text-white"
              >
                Book Nail Service
              </Button>
            </div>
            
            {/* Spa Treatments Card */}
            <div className="card-service text-center group relative overflow-hidden">
              <div className="relative mb-6">
                <div className="w-full h-48 rounded-xl overflow-hidden mb-4">
                  <img 
                    src="/assets/images/spa.png" 
                    alt="Spa Treatments"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-gradient rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Spa Treatments</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Rejuvenating facials, therapeutic massages, and holistic wellness therapies 
                for complete mind-body restoration
              </p>
              <div className="mb-6">
                <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-50 to-blue-50 text-gray-600 rounded-full">Facials</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-50 to-blue-50 text-gray-600 rounded-full">Massages</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-50 to-blue-50 text-gray-600 rounded-full">Wellness</span>
                </div>
              </div>
              <Button as={Link} to="/booking" variant="ghost" size="sm"
                className="text-transparent bg-brand-gradient bg-clip-text hover:bg-brand-gradient hover:text-white hover:bg-clip-border"
              >
                Book Spa Service
              </Button>
            </div>
          </div>
          
          {/* Service Statistics */}
          <div className="mt-16 pt-16 border-t border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-pink mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue mb-2">15+</div>
                <div className="text-gray-600">Expert Stylists</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-pink mb-2">25+</div>
                <div className="text-gray-600">Premium Services</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue mb-2">5★</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About/Story Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-pink-100 to-blue-100 text-gray-700 border border-pink-200">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mr-2"></div>
                  Our Story
                </span>
              </div>
              
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                Where Beauty Meets 
                <span className="text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
                  Organic Wellness
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded on the belief that true beauty radiates from within, The Pink Blueberry 
                  combines the artistry of premium salon services with the nourishing power of 
                  organic wellness. Our journey began with a simple vision: create a sanctuary 
                  where self-care becomes a luxurious, holistic experience.
                </p>
                
                <p>
                  Every service we provide, from precision haircuts to rejuvenating spa treatments, 
                  is infused with our commitment to natural, sustainable beauty. Our curated selection 
                  of organic lunch soups reflects this philosophy—nourishing your body from the inside 
                  while we pamper you on the outside.
                </p>
                
                <p>
                  Step into our serene space and discover a new standard of luxury—one that honors 
                  both your beauty and your well-being, naturally.
                </p>
              </div>
              
              {/* Mission Values */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Organic Philosophy</h4>
                    <p className="text-sm text-gray-600">Natural ingredients and sustainable practices in everything we do</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Holistic Wellness</h4>
                    <p className="text-sm text-gray-600">Beauty treatments that nurture both body and spirit</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Artistry</h4>
                    <p className="text-sm text-gray-600">Skilled professionals dedicated to your unique beauty vision</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Luxury Experience</h4>
                    <p className="text-sm text-gray-600">Every visit designed to be a moment of pure indulgence</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 via-cream to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-serif font-bold text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text mb-4">
                      The Pink
                    </div>
                    <div className="text-4xl font-serif font-bold text-transparent bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text">
                      Blueberry
                    </div>
                    <div className="mt-4 text-sm font-medium text-gray-600 tracking-wider uppercase">
                      SALON
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-70 shadow-lg"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-60 shadow-xl"></div>
              <div className="absolute top-1/2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Ready to Experience Luxury?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book your appointment today or explore our curated collection of premium products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button as={Link} to="/booking" size="lg">
              Book Now
            </Button>
            <Button as={Link} to="/shop" variant="secondary" size="lg">
              Shop Collection
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
