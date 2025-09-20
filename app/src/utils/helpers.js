// Utility functions for The Pink Blueberry Salon

/**
 * Format price for display
 * @param {number} price - Price to format
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  if (typeof price !== 'number') return '$0.00'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}

/**
 * Calculate total price for cart items
 * @param {Array} items - Array of cart items with price and quantity
 * @returns {number} Total price
 */
export const calculateTotal = (items) => {
  if (!Array.isArray(items)) return 0
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0)
}

/**
 * Format phone number for display
 * @param {string} phone - Phone number string
 * @returns {string} Formatted phone number
 */
export const formatPhone = (phone) => {
  if (!phone) return ''
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Generate booking reference number
 * @returns {string} Unique booking reference
 */
export const generateBookingRef = () => {
  const prefix = 'PB'
  const timestamp = Date.now().toString().slice(-6)
  const random = Math.random().toString(36).substr(2, 3).toUpperCase()
  return `${prefix}${timestamp}${random}`
}
