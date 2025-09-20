import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/atoms/Button'

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="block text-gray-600 font-light">About</span>
            <span className="block text-transparent bg-gradient-to-r from-pink-500 via-pink-600 to-blue-500 bg-clip-text font-serif">
              The Pink Blueberry
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Where beauty meets nourishment in perfect harmony
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 right-16 w-16 h-16 bg-gradient-to-br from-pink-300 to-pink-400 rounded-full opacity-60"></div>
          <div className="absolute bottom-16 left-16 w-20 h-20 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-50"></div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Pink Blueberry Salon was born from a simple belief: beauty and wellness 
                  should nourish both body and soul. Founded on the principles of organic care 
                  and luxury service, we create a sanctuary where premium hair care meets 
                  holistic well-being.
                </p>
                <p>
                  Our unique approach combines traditional salon services with organic nourishment, 
                  including our signature organic lunch soups that complement your beauty journey 
                  from the inside out.
                </p>
                <p>
                  Every visit to The Pink Blueberry is designed to be a complete experience - 
                  where the vibrant energy of pink passion meets the calming essence of blue serenity.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Organic, natural ingredients in everything we do</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Personalized care for every unique individual</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Sustainable practices that care for our planet</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600">Complete well-being through beauty and nourishment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
            Experience The Pink Blueberry
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book your appointment today and discover the perfect balance of beauty and nourishment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as={Link} 
              to="/booking"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Book a Service
            </Button>
            <Button 
              as={Link} 
              to="/shop" 
              className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
            >
              View Menu
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
