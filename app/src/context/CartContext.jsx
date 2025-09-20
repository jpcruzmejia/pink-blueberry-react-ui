import React, { createContext, useContext, useReducer } from 'react'

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price
        }
      }
      
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price
      }
    }
    
    case 'REMOVE_FROM_CART':
      const itemToRemove = state.items.find(item => item.id === action.payload)
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        total: state.total - (itemToRemove.price * itemToRemove.quantity)
      }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload
      const currentItem = state.items.find(item => item.id === id)
      
      if (!currentItem) return state
      
      const quantityDifference = quantity - currentItem.quantity
      
      if (quantity === 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== id),
          total: state.total - (currentItem.price * currentItem.quantity)
        }
      }
      
      return {
        ...state,
        items: state.items.map(item =>
          item.id === id ? { ...item, quantity } : item
        ),
        total: state.total + (currentItem.price * quantityDifference)
      }
    }
    
    case 'CLEAR_CART':
      return {
        items: [],
        total: 0
      }
    
    default:
      return state
  }
}

const initialState = {
  items: [],
  total: 0
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }
  
  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
  }
  
  const updateQuantity = (productId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity } })
  }
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  
  const getCartItemsCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0)
  }
  
  return (
    <CartContext.Provider 
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartItemsCount
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
