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
      
      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Our Luxury Services
            </h2>
            <p className="text-lg text-gray-600">
              Indulge in our premium beauty and wellness treatments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards with brand colors */}
            <div className="card-service text-center group">
              <div className="w-16 h-16 bg-brand-pink/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-pink/20 transition-colors">
                <div className="w-8 h-8 bg-brand-pink rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hair Services</h3>
              <p className="text-gray-600 mb-4">
                Cuts, color, styling, and treatments for every hair type
              </p>
              <Button variant="ghost" size="sm">Learn More</Button>
            </div>
            
            <div className="card-service text-center group">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-blue/20 transition-colors">
                <div className="w-8 h-8 bg-brand-blue rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nail Care</h3>
              <p className="text-gray-600 mb-4">
                Manicures, pedicures, and nail art by expert technicians
              </p>
              <Button variant="ghost" size="sm">Learn More</Button>
            </div>
            
            <div className="card-service text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-pink/10 to-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-brand-gradient rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Spa Treatments</h3>
              <p className="text-gray-600 mb-4">
                Facials, massages, and wellness therapies for total relaxation
              </p>
              <Button variant="ghost" size="sm">Learn More</Button>
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
