import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Button from '../components/atoms/Button'

const CheckoutPage = () => {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart()
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    specialInstructions: ''
  })
  const [orderComplete, setOrderComplete] = useState(false)
  const [orderId] = useState(`PB${Date.now().toString().slice(-6)}`)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmitOrder = (e) => {
    e.preventDefault()
    // Simulate order processing
    setTimeout(() => {
      setOrderComplete(true)
      clearCart()
    }, 1000)
  }
  
  const isFormValid = () => {
    return customerInfo.firstName && 
           customerInfo.lastName && 
           customerInfo.email && 
           customerInfo.phone && 
           customerInfo.address && 
           customerInfo.city && 
           customerInfo.zipCode
  }
  
  if (orderComplete) {
    return (
      <div className="min-h-screen py-12" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            
            <p className="text-lg text-gray-600 mb-4">
              Thank you for your order. Your organic soups are being prepared fresh.
            </p>
            
            <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full"></div>
                <span className="font-semibold text-gray-900">Order #{orderId}</span>
              </div>
              <p className="text-sm text-gray-600">
                You'll receive a confirmation email shortly with pickup details.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Estimated pickup time:</strong> 20-30 minutes<br />
                  <strong>Location:</strong> The Pink Blueberry Salon<br />
                  <strong>Address:</strong> 123 Luxury Lane, Beauty District, NYC
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  as={Link}
                  to="/shop"
                  className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-full font-medium"
                >
                  Order More Soups
                </Button>
                <Button 
                  as={Link}
                  to="/booking"
                  variant="secondary"
                  className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium"
                >
                  Book a Service
                </Button>
                <Button 
                  as={Link}
                  to="/"
                  variant="secondary"
                  className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium"
                >
                  Back to Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen py-12" style={{ backgroundColor: '#FAF7F2' }}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6" />
              </svg>
            </div>
            
            <h1 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Your Cart is Empty
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Add some delicious organic soups to your cart before checking out.
            </p>
            
            <Button 
              as={Link}
              to="/shop"
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Shop Organic Soups
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: '#FAF7F2' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
              Checkout
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Complete your order for fresh organic soups
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mr-2"></span>
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500 mb-2">${item.price} each</p>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <span className="text-xs font-medium">−</span>
                        </button>
                        <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <span className="text-xs font-medium">+</span>
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="font-semibold text-gray-900 text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-xs text-gray-400 hover:text-red-500 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium text-gray-900">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Tax:</span>
                  <span className="font-medium text-gray-900">${(total * 0.08).toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-lg font-semibold pt-2 border-t border-gray-200">
                  <span>Total:</span>
                  <span className="text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
                    ${(total * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Checkout Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mr-2"></span>
                Customer Information
              </h2>
              
              <form onSubmit={handleSubmitOrder} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={customerInfo.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                      placeholder="Enter first name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={customerInfo.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                      placeholder="Enter last name"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={customerInfo.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Street address"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={customerInfo.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                      placeholder="City"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={customerInfo.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                      placeholder="12345"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Instructions (Optional)</label>
                  <textarea
                    name="specialInstructions"
                    value={customerInfo.specialInstructions}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Any dietary restrictions or special requests..."
                  />
                </div>
                
                {/* Order Actions */}
                <div className="border-t border-gray-200 pt-6 space-y-4">
                  <Button
                    type="submit"
                    disabled={!isFormValid()}
                    className={`w-full py-4 rounded-full text-lg font-medium transition-all duration-300 ${
                      isFormValid()
                        ? 'bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Complete Order (${(total * 1.08).toFixed(2)})
                  </Button>
                  
                  <div className="flex justify-center space-x-4">
                    <Button 
                      as={Link}
                      to="/shop"
                      variant="secondary"
                      className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full font-medium"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl p-4 text-center">
                  <p className="text-sm text-gray-600">
                    🔒 Your information is secure and will only be used to process your order.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
