# Development Setup Guide

## Prerequisites

Before starting development on The Pink Blueberry Salon project, ensure you have the following installed:

### Required Software
- **Node.js** (v18.0.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (comes with Node.js) or **yarn**
  - Verify npm: `npm --version`
- **Git** for version control
  - Download from [git-scm.com](https://git-scm.com/)

### Recommended Tools
- **VS Code** - IDE with excellent React/JavaScript support
- **Chrome DevTools** - For debugging and responsive testing
- **Git client** - GitHub Desktop or command line

## Initial Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd pink_blueberry
```

### 2. Navigate to App Directory
```bash
cd app
```

### 3. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- React 18
- Vite (development server)
- TailwindCSS
- React Router
- PostCSS

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Development Scripts

### Available Commands
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linting
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

## Environment Setup

### IDE Configuration

#### VS Code Extensions (Recommended)
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **Prettier - Code formatter**
- **ESLint**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**

#### VS Code Settings
Add to your `settings.json`:
```json
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

### Browser Setup
- Install **React Developer Tools** extension
- Enable mobile device simulation in DevTools
- Set up common viewport sizes for testing

## Project Structure Understanding

### Key Directories
- `src/components/` - Reusable UI components
- `src/pages/` - Main application pages
- `src/context/` - React Context providers
- `src/hooks/` - Custom React hooks
- `src/utils/` - Helper functions
- `public/` - Static assets

### Component Organization
Follow atomic design principles:
- **atoms/**: Button, Input, Card
- **molecules/**: Header, Footer, ProductCard  
- **organisms/**: Hero, Services, ShoppingCart

## Development Workflow

### 1. Feature Development
1. Create feature branch: `git checkout -b feature/feature-name`
2. Develop in small, focused commits
3. Test across mobile and desktop
4. Ensure brand colors are consistent
5. Verify accessibility basics

### 2. Code Standards
- Use functional components with hooks
- Follow TailwindCSS utility-first approach
- Implement proper loading and error states
- Write descriptive variable names
- Add comments for complex logic

### 3. Testing Process
- Test on multiple browsers (Chrome, Firefox, Safari)
- Verify mobile responsiveness on various devices
- Test complete user flows (booking, shopping)
- Check form validation and error handling

## Common Issues and Solutions

### Port Already in Use
If port 3000 is occupied:
```bash
# Kill process on port 3000
npx kill-port 3000

# Or start on different port
npm run dev -- --port 3001
```

### Node Modules Issues
If dependencies seem corrupted:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
For production build issues:
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run build
```

### TailwindCSS Not Working
Ensure `tailwind.config.js` includes all source paths:
```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // ... rest of config
}
```

## Performance Optimization

### Development Tips
- Use React DevTools Profiler to identify slow components
- Implement proper key props for lists
- Use useCallback and useMemo judiciously
- Optimize images (WebP format preferred)

### Build Optimization
- Vite automatically handles code splitting
- TailwindCSS purges unused styles in production
- Images are optimized during build process

## Debugging Guide

### React DevTools
1. Install browser extension
2. Inspect component hierarchy
3. Monitor state changes
4. Profile performance issues

### Network Issues
- Check browser Network tab for failed requests
- Verify API endpoints (future backend integration)
- Monitor bundle sizes in production

### Styling Issues
- Use browser DevTools to inspect computed styles
- Verify TailwindCSS classes are being applied
- Check for CSS specificity conflicts

## Deployment Preparation

### Pre-deployment Checklist
- [ ] All features working in production build
- [ ] Mobile responsiveness verified
- [ ] Cross-browser compatibility tested
- [ ] Performance optimized (Lighthouse scores)
- [ ] Error boundaries implemented
- [ ] Loading states for async operations

### Build for Production
```bash
npm run build
```

Output will be in `dist/` directory, ready for static hosting.

## Additional Resources

### Documentation Links
- [React Documentation](https://reactjs.org/docs)
- [Vite Guide](https://vitejs.dev/guide/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Router Guide](https://reactrouter.com/docs)

### Project-Specific Resources
- Brand colors: Pink (#ec4899), Blue (#3b82f6)
- Component examples in `/src/components/`
- Context usage in `/src/context/CartContext.js`
- Utility functions in `/src/utils/`

---

**Happy Coding!** 
For project-specific questions, check the main README.md or component documentation.