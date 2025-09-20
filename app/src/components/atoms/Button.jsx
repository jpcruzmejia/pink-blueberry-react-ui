import React from 'react'
import { forwardRef } from 'react'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false,
  as: Component = 'button',
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-brand-gradient text-white shadow-luxury hover:shadow-luxury-lg hover:bg-brand-gradient-hover focus:ring-brand-pink',
    secondary: 'border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white focus:ring-brand-pink',
    ghost: 'text-brand-blue hover:bg-brand-blue hover:text-white focus:ring-brand-blue',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-xl'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <Component
      ref={ref}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  )
})

Button.displayName = 'Button'

export default Button
