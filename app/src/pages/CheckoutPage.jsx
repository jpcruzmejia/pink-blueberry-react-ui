import React from 'react'
import Button from '../components/atoms/Button'

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            <span className="text-gradient">Checkout</span>
          </h1>
          <p className="text-lg text-gray-600">
            Complete your purchase
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-luxury p-8">
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl">🛒</span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Checkout Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              Full checkout flow implementation scheduled for Phase 2
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Continue Shopping</Button>
              <Button variant="secondary">View Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
