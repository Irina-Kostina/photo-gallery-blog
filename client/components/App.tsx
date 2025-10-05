import React, { useEffect } from "react"
import "../styles/App.css"
import { usePortfolioEffects } from "../hooks/usePortfolio"

export default function App() {
  usePortfolioEffects()

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <a href="#home" className="logo">Portfolio</a>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#journal">Journal</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="mobile-menu-btn">☰</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Moments in<br />Time</h1>
          <p className="hero-subtitle">Visual Stories Through Photography</p>
        </div>
        <div className="scroll-indicator">Scroll</div>
      </section>

      {/* Featured Section */}
      <section className="section fade-in" id="featured">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">
              A selection of recent projects showcasing diverse perspectives and
              moments captured through the lens.
            </p>
          </div>

          <div className="featured-grid">
            <div className="featured-item">
              <div className="featured-image">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                  alt="Mountain landscape"
                />
              </div>
              <div className="featured-content">
                <h3>Alpine Silence</h3>
                <div className="featured-meta">Swiss Alps • March 2024</div>
                <p className="featured-description">
                  Capturing the serene beauty of untouched mountain peaks at dawn. 
                  The interplay of light and shadow creates a dramatic narrative.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repeat your About / Gallery / Journal / Contact / Footer sections the same way */}
    </>
  )
}
