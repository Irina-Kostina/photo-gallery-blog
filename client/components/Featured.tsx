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

        {/* All items in one grid */}
        <div className="featured-grid">
          {/* Photo 1 */}
          <div className="featured-item">
            <div className="featured-image">
              <img src="/IMG_2747.JPG" alt="Lake Wanaka at sunset" />
            </div>
            <div className="featured-content">
              <h3>Lake Sunset</h3>
              <div className="featured-meta">Lake Wanaka • April 2025</div>
              <p className="featured-description">
                Capturing the serene beauty of Lake Wanaka on sunset. The interplay of light and shadow creates a dramatic narrative.
              </p>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="featured-item">
            <div className="featured-content">
              <h3>Lake Sunset</h3>
              <div className="featured-meta">Lake Wanaka • April 2025</div>
              <p className="featured-description">
                Capturing the serene beauty of Lake Wanaka on sunset. The interplay of light and shadow creates a dramatic narrative.
              </p>
            </div>
            <div className="featured-image">
              <img src="/IMG_2747.JPG" alt="Lake Wanaka at sunset" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
