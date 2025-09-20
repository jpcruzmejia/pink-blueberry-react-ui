import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import Button from '../atoms/Button'

const ShoppingCart = () => {
  const { items, total, getCartItemsCount, updateQuantity, removeFromCart } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  
  const itemCount = getCartItemsCount()
  
  return (
    <div className="relative">
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors duration-200"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M20 16H8m0 0l-1.5-6M8 16l1.5 6M16 21a2 2 0 100-4 2 2 0 000 4zM8 21a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
        
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {itemCount}
          </span>
        )}
      </button>
      
      {/* Cart Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
          <div className="p-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900 flex items-center">
              <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mr-2"></span>
              Shopping Cart ({itemCount})
            </h3>
          </div>
          
          {items.length === 0 ? (
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6M20 16H8m0 0l-1.5-6M8 16l1.5 6" />
                </svg>
              </div>
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Link to="/shop">
                <Button 
                  className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Shop Now
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div className="max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="p-4 border-b border-gray-50 last:border-0">
                    <div className="flex items-start space-x-3">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">{item.name}</h4>
                        <p className="text-sm text-gray-500">${item.price}</p>
                        
                        <div className="flex items-center space-x-2 mt-2">
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
                        <p className="text-sm font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-gray-400 hover:text-red-500 transition-colors mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-gray-900">Total:</span>
                  <span className="font-bold text-lg text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text">
                    ${total.toFixed(2)}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <Link to="/checkout" className="block">
                    <Button 
                      className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 rounded-full font-medium text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Checkout
                    </Button>
                  </Link>
                  <Link to="/shop" className="block">
                    <Button 
                      variant="secondary" 
                      className="w-full border-2 border-gray-200 text-gray-700 hover:bg-gray-50 py-2 rounded-full font-medium text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      )}
      
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  )
}

export default ShoppingCart
