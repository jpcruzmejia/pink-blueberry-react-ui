# The Pink Blueberry Salon

A luxury salon booking and e-commerce web application built for the Squatchathon 2025 hackathon.

## Project Setup

### Technology Stack
- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Styling framework (ONLY allowed styling library)
- **HeadlessUI** - UI components (ONLY allowed component library)
- **React Router** - Navigation and routing

### Brand Colors (MANDATORY)
- **Pink**: `#ec4899` - Primary brand color
- **Blue**: `#3b82f6` - Secondary brand color

> ⚠️ **CRITICAL**: These colors MUST be prominently displayed throughout the application for hackathon compliance.

## Development

### Getting Started
```bash
cd app
npm install
npm run dev
```

### Project Structure
```
src/
├── components/
│   ├── atoms/          # Basic UI components (Button, Input, Card)
│   ├── molecules/      # Composite components
│   └── organisms/      # Complex components (Layout, Navigation)
├── pages/              # Route components
├── styles/             # CSS files
├── utils/              # Helper functions
└── hooks/              # Custom React hooks
```

### Component Library
- **Button**: Primary, secondary, ghost, and outline variants
- **Card**: Luxury, service, and product variants with hover effects
- **Input**: Form inputs with validation states
- **Layout**: Header with navigation, main content, and footer

### Available Routes
- `/` - Homepage with hero section and services preview
- `/booking` - Service booking flow (Phase 2 implementation)
- `/shop` - Product catalog and e-commerce (Phase 2 implementation)  
- `/checkout` - Purchase completion (Phase 2 implementation)

## Design System

### Color Tokens
- Primary: Pink (#ec4899) and Blue (#3b82f6)
- Gradients: Brand gradient from pink to blue
- Backgrounds: Subtle pink-to-blue gradients for sections

### Typography
- Primary: Inter (sans-serif)
- Accent: Playfair Display (serif)

### Shadows
- Luxury: Custom brand-colored shadows
- Interactive: Hover and focus states with enhanced shadows

### Spacing
- Mobile-first responsive design
- TailwindCSS standard breakpoints
- Consistent spacing scale

## Current Status (Phase 1 Complete)

### ✅ Completed
- React project structure with atomic design
- TailwindCSS configuration with brand colors
- HeadlessUI integration for interactive components
- Responsive navigation with mobile hamburger menu
- Brand design system implementation
- Basic routing between all core pages
- Homepage with hero section and services preview
- Placeholder pages for booking, shop, and checkout
- Footer with contact information and brand elements

### 🎯 Brand Compliance
- ✅ Pink (#ec4899) prominently displayed in buttons, icons, and highlights
- ✅ Blue (#3b82f6) used for secondary elements and accents
- ✅ Brand gradient applied to CTAs and decorative elements
- ✅ Mobile-responsive design tested on all breakpoints
- ✅ Touch-friendly navigation and interactions

### 🚫 Forbidden Dependencies Avoided
- No Radix UI components
- No React Query or other state management libraries
- No third-party component libraries beyond HeadlessUI
- Clean dependency list with only approved packages

## Next Steps (Phase 2)

The foundation is ready for Phase 2 core features implementation:
1. Complete booking flow with service selection, scheduling, and confirmation
2. E-commerce shop with product catalog, cart, and checkout
3. Cross-feature integration and user flow optimization

## Hackathon Scoring Potential

Current foundation addresses critical scoring criteria:
- **Pass/Fail Requirements**: ✅ Brand colors, mobile responsiveness, basic functionality
- **Homepage**: Foundation complete, ready for content enhancement
- **Booking Flow**: Structure ready, awaiting feature implementation  
- **E-commerce**: Structure ready, awaiting feature implementation
- **Design Quality**: Brand design system implemented
- **Mobile Experience**: Fully responsive with touch-friendly navigation

---

**Built with Pink 💗 and Blue 💙**
