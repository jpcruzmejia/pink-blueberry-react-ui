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

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mb-6">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
              </div>
            </div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              Visit Us at 
              <span className="text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
                The Pink Blueberry
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience luxury in the heart of the city. We're here to make your beauty dreams a reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Location & Hours */}
            <div className="bg-cream rounded-2xl p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Location & Hours</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p className="font-medium">123 Luxury Lane</p>
                    <p>Beauty District, NYC 10001</p>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="font-medium text-gray-700">Hours:</p>
                      <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                      <p>Sat-Sun: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Details */}
            <div className="bg-cream rounded-2xl p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Get in Touch</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>(555) 123-PINK</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>hello@pinkblueberry.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      <span>Text us for quick questions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media & Special Features */}
            <div className="bg-cream rounded-2xl p-8 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-pink-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Stay Connected</h3>
                  <div className="space-y-3">
                    {/* Social Media Links */}
                    <div className="flex space-x-3">
                      <a href="#" className="w-8 h-8 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.11.219.81.402-.09.402-.293 1.174-.332 1.337-.051.219-.172.265-.402.160-1.507-.402-2.45-1.688-2.45-3.946 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.125-2.61 7.44-6.218 7.44-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 bg-gradient-to-r from-pink-400 to-blue-400 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                    
                    {/* Special Features */}
                    <div className="space-y-2 text-sm text-gray-600 pt-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span>Free WiFi & Refreshments</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Complimentary Consultations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        <span>Online Booking Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Special Notice */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl px-8 py-6 border border-pink-100">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full animate-pulse"></div>
                <p className="text-gray-700 font-medium">
                  <span className="text-transparent bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text font-bold">New Client Special:</span>
                  {" "}20% off your first visit when you book online!
                </p>
                <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-pink-400 rounded-full animate-pulse"></div>
              </div>
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
