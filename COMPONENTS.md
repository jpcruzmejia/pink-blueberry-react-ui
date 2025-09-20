# Component Architecture Guide

## Overview

The Pink Blueberry Salon follows atomic design principles to create a scalable, maintainable component architecture. This guide explains how components are organized and how to effectively use and extend them.

## Atomic Design Methodology

### Atoms (Basic Building Blocks)
Atoms are the most basic components that cannot be broken down further without losing their functionality.

#### Button Component (`/src/components/atoms/Button.jsx`)
```jsx
// Usage Examples
<Button variant="primary">Book Now</Button>
<Button variant="secondary">Learn More</Button>
<Button as={Link} to="/shop">Shop Now</Button>
```

**Variants Available:**
- `primary`: Pink to blue gradient background
- `secondary`: Outlined with gray border
- `ghost`: Transparent background with hover effects

#### Input Component (`/src/components/atoms/Input.jsx`)
```jsx
// Usage Examples
<Input 
  type="email" 
  placeholder="your@email.com"
  required
/>
<Input 
  type="tel" 
  label="Phone Number"
  value={phone}
  onChange={handleChange}
/>
```

#### Card Component (`/src/components/atoms/Card.jsx`)
```jsx
// Usage Examples
<Card className="p-6">
  <h3>Service Title</h3>
  <p>Service description...</p>
</Card>
```

### Molecules (Component Combinations)
Molecules combine atoms to create more complex, reusable UI components.

#### Header Component (`/src/components/molecules/Header.jsx`)
**Features:**
- Navigation links to all main pages
- Mobile hamburger menu
- Shopping cart integration
- Brand logo and colors

**Props:**
```jsx
<Header 
  currentPage="home" // Optional: highlights active nav item
/>
```

#### Footer Component (`/src/components/molecules/Footer.jsx`)
**Features:**
- Contact information
- Social media links  
- Copyright and business hours
- Consistent brand styling

#### ProductCard Component (`/src/components/molecules/ProductCard.jsx`)
```jsx
<ProductCard 
  product={{
    id: 1,
    name: "Organic Tomato Basil Soup",
    price: 12.99,
    image: "/images/soup1.jpg",
    description: "Fresh organic tomatoes..."
  }}
  onAddToCart={handleAddToCart}
/>
```

#### ServiceCard Component (`/src/components/molecules/ServiceCard.jsx`)
```jsx
<ServiceCard 
  service={{
    title: "Hair Styling",
    description: "Professional cuts and styling",
    price: "Starting at $75",
    icon: "✂️"
  }}
  onClick={() => navigate('/booking')}
/>
```

#### ShoppingCart Component (`/src/components/molecules/ShoppingCart.jsx`)
**Features:**
- Dropdown cart interface
- Quantity controls
- Remove item functionality
- Checkout navigation
- Real-time total calculation

### Organisms (Complex Page Sections)
Organisms are complex components that form distinct sections of the interface.

#### Hero Section (`/src/components/organisms/HeroSection.jsx`)
**Features:**
- Full-width background styling
- Primary call-to-action buttons
- Responsive typography
- Brand gradient overlays

#### Services Showcase (`/src/components/organisms/ServicesShowcase.jsx`)
**Features:**
- Grid layout of service cards
- Hover animations
- Mobile-responsive columns
- Integrated booking CTAs

#### Product Catalog (`/src/components/organisms/ProductCatalog.jsx`)
**Features:**
- Filterable product grid
- Search functionality
- Category navigation
- Add to cart integration

## Styling Standards

### TailwindCSS Usage
All components use TailwindCSS utility classes following these conventions:

```jsx
// ✅ Good: Semantic grouping and responsive design
<div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-lg sm:flex-row sm:space-y-0 sm:space-x-6">

// ❌ Avoid: Long, unorganized class strings
<div className="flex items-center bg-white p-6 shadow-lg rounded-xl space-y-4 flex-col sm:flex-row sm:space-x-6 sm:space-y-0">
```

### Brand Colors Implementation
```jsx
// Primary gradient (pink to blue)
className="bg-gradient-to-r from-pink-500 to-blue-500"

// Text gradients
className="text-transparent bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text"

// Hover effects
className="hover:from-pink-600 hover:to-blue-600"

// Background variations
className="bg-gradient-to-br from-pink-50 to-blue-50"
```

### Responsive Design Patterns
```jsx
// Mobile-first approach
<div className="
  grid grid-cols-1          // Mobile: 1 column
  sm:grid-cols-2           // Tablet: 2 columns
  lg:grid-cols-3           // Desktop: 3 columns
  xl:grid-cols-4           // Large: 4 columns
  gap-4 sm:gap-6 lg:gap-8  // Responsive spacing
">
```

## State Management Patterns

### Local Component State
```jsx
const [isOpen, setIsOpen] = useState(false)
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: ''
})
```

### Context Integration
```jsx
import { useCart } from '../../context/CartContext'

const { items, total, addToCart, removeFromCart } = useCart()
```

### Form Handling
```jsx
const handleInputChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({
    ...prev,
    [name]: value
  }))
}
```

## Component Communication

### Parent to Child (Props)
```jsx
// Parent Component
<ProductCard 
  product={productData}
  onAddToCart={handleAddToCart}
  isInCart={cartItems.includes(productData.id)}
/>

// Child Component  
const ProductCard = ({ product, onAddToCart, isInCart }) => {
  // Component logic
}
```

### Child to Parent (Callbacks)
```jsx
// Child Component
const handleClick = () => {
  onAddToCart(product.id, 1)
}

// Parent Component
const handleAddToCart = (productId, quantity) => {
  // Update cart logic
}
```

### Global State (Context)
```jsx
// Context Provider
<CartProvider>
  <App />
</CartProvider>

// Component Usage
const { addToCart } = useCart()
```

## Performance Optimization

### React.memo Usage
```jsx
import { memo } from 'react'

const ProductCard = memo(({ product, onAddToCart }) => {
  // Component logic
})

export default ProductCard
```

### useCallback for Functions
```jsx
const handleAddToCart = useCallback((productId, quantity) => {
  // Cart logic
}, [])
```

### useMemo for Expensive Calculations
```jsx
const filteredProducts = useMemo(() => {
  return products.filter(product => 
    product.category === selectedCategory
  )
}, [products, selectedCategory])
```

## Component Testing Strategy

### Manual Testing Checklist
- [ ] Renders correctly on mobile and desktop
- [ ] All interactive elements respond appropriately
- [ ] Brand colors display consistently
- [ ] Loading states function properly
- [ ] Error boundaries catch and display errors gracefully

### Accessibility Considerations
```jsx
// ARIA labels for screen readers
<button aria-label="Add to cart">
  <PlusIcon />
</button>

// Semantic HTML structure
<main>
  <section aria-labelledby="services-heading">
    <h2 id="services-heading">Our Services</h2>
  </section>
</main>
```

## Creating New Components

### File Structure Convention
```
src/components/
├── atoms/
│   └── NewAtom/
│       ├── NewAtom.jsx
│       └── index.js (export)
├── molecules/
│   └── NewMolecule/
│       ├── NewMolecule.jsx
│       └── index.js
└── organisms/
    └── NewOrganism/
        ├── NewOrganism.jsx
        └── index.js
```

### Component Template
```jsx
import React from 'react'
import PropTypes from 'prop-types'

const ComponentName = ({ 
  prop1, 
  prop2 = 'defaultValue',
  ...rest 
}) => {
  return (
    <div 
      className="component-specific-classes"
      {...rest}
    >
      {/* Component JSX */}
    </div>
  )
}

ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string
}

export default ComponentName
```

## Best Practices

### Do's ✅
- Follow atomic design hierarchy
- Use semantic HTML elements
- Implement proper keyboard navigation
- Test across multiple screen sizes
- Maintain consistent brand styling
- Use descriptive prop names
- Implement proper error boundaries

### Don'ts ❌
- Don't create overly complex components
- Don't ignore mobile-first responsive design
- Don't hardcode colors (use TailwindCSS classes)
- Don't forget loading and error states
- Don't skip accessibility considerations
- Don't create deep prop drilling (use context)

## Component Examples in Production

All components are actively used throughout the application:

- **Homepage**: Hero, ServicesShowcase, Footer
- **Booking**: ServiceCard, Input, Button combinations
- **Shop**: ProductCatalog, ProductCard, ShoppingCart
- **Checkout**: Forms with Input atoms and Button molecules

This architecture enables rapid development while maintaining consistency and quality across the entire application.

---

**Component Architecture Version**: 1.0  
**Last Updated**: Current Development Phase  
**Compatibility**: React 18+, TailwindCSS 3+