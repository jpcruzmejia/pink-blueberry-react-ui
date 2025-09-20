import { describe, it, expect } from 'vitest'
import { 
  formatPrice, 
  calculateTotal, 
  formatPhone, 
  isValidEmail, 
  generateBookingRef 
} from '../helpers'

describe('Utility Functions', () => {
  describe('formatPrice', () => {
    it('formats valid price correctly', () => {
      expect(formatPrice(12.99)).toBe('$12.99')
      expect(formatPrice(100)).toBe('$100.00')
      expect(formatPrice(0.99)).toBe('$0.99')
    })

    it('handles invalid inputs', () => {
      expect(formatPrice(null)).toBe('$0.00')
      expect(formatPrice(undefined)).toBe('$0.00')
      expect(formatPrice('invalid')).toBe('$0.00')
    })
  })

  describe('calculateTotal', () => {
    it('calculates total for cart items', () => {
      const items = [
        { price: 10.99, quantity: 2 },
        { price: 5.99, quantity: 1 }
      ]
      expect(calculateTotal(items)).toBe(27.97)
    })

    it('returns 0 for empty array', () => {
      expect(calculateTotal([])).toBe(0)
    })

    it('handles invalid inputs', () => {
      expect(calculateTotal(null)).toBe(0)
      expect(calculateTotal(undefined)).toBe(0)
      expect(calculateTotal('invalid')).toBe(0)
    })
  })

  describe('formatPhone', () => {
    it('formats 10-digit phone numbers', () => {
      expect(formatPhone('1234567890')).toBe('(123) 456-7890')
      expect(formatPhone('555-123-4567')).toBe('(555) 123-4567')
    })

    it('returns original for invalid numbers', () => {
      expect(formatPhone('123')).toBe('123')
      expect(formatPhone('')).toBe('')
      expect(formatPhone(null)).toBe('')
    })
  })

  describe('isValidEmail', () => {
    it('validates correct email formats', () => {
      expect(isValidEmail('user@example.com')).toBe(true)
      expect(isValidEmail('test.email+tag@domain.co.uk')).toBe(true)
    })

    it('rejects invalid email formats', () => {
      expect(isValidEmail('invalid-email')).toBe(false)
      expect(isValidEmail('user@')).toBe(false)
      expect(isValidEmail('@domain.com')).toBe(false)
      expect(isValidEmail('')).toBe(false)
    })
  })

  describe('generateBookingRef', () => {
    it('generates booking reference with correct format', () => {
      const ref = generateBookingRef()
      expect(ref).toMatch(/^PB\d{6}[A-Z]{3}$/)
    })

    it('generates unique references', () => {
      const ref1 = generateBookingRef()
      const ref2 = generateBookingRef()
      expect(ref1).not.toBe(ref2)
    })
  })
})
