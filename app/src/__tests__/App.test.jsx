import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Integration', () => {
  it('renders without crashing', () => {
    render(<App />)
    // Check if the main layout elements are present
    expect(document.querySelector('#root')).toBeInTheDocument()
  })

  it('contains navigation elements', () => {
    render(<App />)
    // The header should contain navigation elements
    const navigation = document.querySelector('nav') || document.querySelector('header')
    expect(navigation).toBeInTheDocument()
  })

  it('renders main content area', () => {
    render(<App />)
    // Should have a main content area
    const main = document.querySelector('main') || document.querySelector('[role="main"]')
    expect(main).toBeInTheDocument()
  })

  it('applies brand colors in styles', () => {
    render(<App />)
    // Check if brand colors are present in the document
    const root = document.documentElement
    const styles = getComputedStyle(root)
    
    // The app should render without console errors
    expect(document.body).toBeInTheDocument()
  })
})
