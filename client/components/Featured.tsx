import React from "react"

export default function Featured() {
  return (
    <section className="section fade-in" id="featured">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-subtitle">
            A selection of recent projects showcasing diverse perspectives and moments captured through the lens.
          </p>
        </div>

        <div className="featured-grid">
          <div className="featured-item">
            <div className="featured-image">
              <img
                src="/IMG_2747.JPG"
                alt="Landscape"
              />
            </div>
            <div className="featured-content">
              <h3>Alpine Silence</h3>
              <div className="featured-meta">Swiss Alps • March 2024</div>
              <p className="featured-description">
                Capturing the serene beauty of untouched mountain peaks at dawn. The interplay of light and shadow creates a dramatic narrative.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
