import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from '../atoms/Button'
import ShoppingCart from '../molecules/ShoppingCart'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Organic Soups', href: '/shop' },
  { name: 'Book Service', href: '/booking' },
  { name: 'About', href: '/about' },
]

const Layout = ({ children }) => {
  const location = useLocation()
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Lovable-inspired clean design */}
      <Disclosure as="nav" className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 sticky top-0 z-50">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                {/* Logo - Elegant typography like Lovable */}
                <div className="flex items-center">
                  <Link to="/" className="flex items-center space-x-3">
                    <div className="text-2xl font-serif font-bold tracking-tight">
                      <span className="text-gray-800">The Pink Blueberry</span>
                    </div>
                    <div className="text-sm text-gray-500 font-light tracking-wide uppercase hidden sm:block">
                      SALON
                    </div>
                  </Link>
                </div>
                
                {/* Desktop Navigation - Clean Lovable style */}
                <div className="hidden md:block">
                  <div className="flex items-center space-x-8">
                    {navigation.map((item) => {
                      const isActive = location.pathname === item.href
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`text-base font-medium transition-colors duration-200 ${
                            isActive
                              ? 'text-gray-900 border-b-2 border-pink-500 pb-1'
                              : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-pink-300 pb-1 border-b-2 border-transparent'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
                
                {/* Desktop CTA & Cart - Lovable style */}
                <div className="hidden md:flex items-center space-x-4">
                  <ShoppingCart />
                  <Button 
                    as={Link} 
                    to="/booking"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Book Now
                  </Button>
                </div>
                
                {/* Mobile cart & menu */}
                <div className="md:hidden flex items-center space-x-2">
                  <ShoppingCart />
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-pink hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-pink">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? 'text-brand-pink bg-white'
                          : 'text-gray-700 hover:text-brand-pink hover:bg-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
                <div className="px-3 py-2">
                  <Button as={Link} to="/booking" className="w-full">
                    Book Now
                  </Button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      
      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">PB</span>
                </div>
                <span className="text-xl font-serif font-semibold">
                  The Pink Blueberry
                </span>
              </div>
              <p className="text-gray-300 mb-4">
                Experience luxury beauty services and premium wellness products 
                at our boutique salon.
              </p>
              <div className="flex space-x-4">
                <div className="w-6 h-6 bg-brand-pink rounded"></div>
                <div className="w-6 h-6 bg-brand-blue rounded"></div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/booking" className="text-gray-300 hover:text-white transition-colors">Book Service</Link></li>
                <li><Link to="/shop" className="text-gray-300 hover:text-white transition-colors">Shop Products</Link></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Contact
              </h3>
              <div className="space-y-2 text-gray-300">
                <p>123 Beauty Lane</p>
                <p>Salon City, SC 12345</p>
                <p>(555) 123-PINK</p>
                <p>hello@pinkblueberry.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; 2025 The Pink Blueberry Salon. Crafted with love using Pink & Blue.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
