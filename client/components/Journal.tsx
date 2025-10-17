import React from "react"
import { Link } from "react-router-dom"

export default function Journal() {
  return (
    <section className="section fade-in" id="journal">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Journal</h2>
          <p className="section-subtitle">
            Reflections on photography, creativity, and the stories behind the images.
          </p>
        </div>

        <div className="blog-grid">
          <a href="#" className="blog-card">
            <div className="blog-image">
              <img
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&h=400&fit=crop"
                alt="Golden hour"
              />
            </div>
            <div className="blog-date">March 15, 2024</div>
            <h3 className="blog-title">Chasing Golden Hour</h3>
            <p className="blog-excerpt">
              The magic happens in that brief window when daylight softens and the world seems to glow.
            </p>
          </a>

          <a href="#" className="blog-card">
            <div className="blog-image">
              <img
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop"
                alt="Minimalist composition"
              />
            </div>
            <div className="blog-date">March 8, 2024</div>
            <h3 className="blog-title">Less is More</h3>
            <p className="blog-excerpt">
              Exploring the art of minimalist composition and how removing elements can strengthen your message.
            </p>
          </a>
        </div>
      </div>
      <div className="journal-button">
        <Link to="/journal" className="read-more-btn">
          Read Journal →
        </Link>
      </div>
    </section>
  )
}
