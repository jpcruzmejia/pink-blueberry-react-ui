import React from 'react'

const Card = ({ 
  children, 
  variant = 'default',
  hover = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'bg-white rounded-xl border transition-all duration-300 ease-in-out'
  
  const variants = {
    default: 'border-gray-100 shadow-sm',
    luxury: 'border-gray-100 shadow-luxury hover:shadow-luxury-lg',
    service: 'border-gray-100 shadow-luxury hover:shadow-luxury-lg hover:transform hover:-translate-y-1',
    product: 'border-gray-100 shadow-sm hover:shadow-md hover:border-brand-pink/20'
  }
  
  const hoverEffect = hover ? 'hover:shadow-lg hover:transform hover:-translate-y-1' : ''
  
  const classes = `${baseClasses} ${variants[variant]} ${hoverEffect} ${className}`
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card
