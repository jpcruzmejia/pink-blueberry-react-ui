import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { CartProvider, useCart } from '../CartContext'

// Wrapper component for testing context
const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>

describe('CartContext', () => {
  it('initializes with empty cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })
    
    expect(result.current.items).toEqual([])
    expect(result.current.total).toBe(0)
    expect(result.current.itemCount).toBe(0)
  })

  it('adds item to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })
    
    const testProduct = {
      id: 1,
      name: 'Organic Soup',
      price: 12.99
    }

    act(() => {
      result.current.addToCart(testProduct)
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0]).toEqual({ ...testProduct, quantity: 1 })
    expect(result.current.total).toBe(12.99)
    expect(result.current.itemCount).toBe(1)
  })

  it('increases quantity when adding same item', () => {
    const { result } = renderHook(() => useCart(), { wrapper })
    
    const testProduct = {
      id: 1,
      name: 'Organic Soup',
      price: 12.99
    }

    act(() => {
      result.current.addToCart(testProduct)
      result.current.addToCart(testProduct)
    })

    expect(result.current.items).toHaveLength(1)
    expect(result.current.items[0].quantity).toBe(2)
    expect(result.current.total).toBe(25.98)
    expect(result.current.itemCount).toBe(2)
  })

  it('removes item from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })
    
    const testProduct = {
      id: 1,
      name: 'Organic Soup',
      price: 12.99
    }

    act(() => {
      result.current.addToCart(testProduct)
    })

    act(() => {
      result.current.removeFromCart(1)
    })

    expect(result.current.items).toHaveLength(0)
    expect(result.current.total).toBe(0)
    expect(result.current.itemCount).toBe(0)
  })

  it('updates item quantity', () => {
    const { result } = renderHook(() => useCart(), { wrapper })
    
    const testProduct = {
      id: 1,
      name: 'Organic Soup',
      price: 12.99
    }

    act(() => {
      result.current.addToCart(testProduct)
    })

    act(() => {
      result.current.updateQuantity(1, 3)
    })

    expect(result.current.items[0].quantity).toBe(3)
    expect(result.current.total).toBe(38.97)
    expect(result.current.itemCount).toBe(3)
  })

  it('clears entire cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper })
    
    const testProduct = {
      id: 1,
      name: 'Organic Soup',
      price: 12.99
    }

    act(() => {
      result.current.addToCart(testProduct)
      result.current.addToCart(testProduct)
    })

    act(() => {
      result.current.clearCart()
    })

    expect(result.current.items).toHaveLength(0)
    expect(result.current.total).toBe(0)
    expect(result.current.itemCount).toBe(0)
  })
})
