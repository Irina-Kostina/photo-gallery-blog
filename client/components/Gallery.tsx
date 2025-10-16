import React from "react"

export default function Gallery() {
  return (
    <section className="section fade-in" id="work">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            An ongoing collection of work spanning landscapes, urban scenes, and intimate moments.
          </p>
        </div>
      </div>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop" alt="Gallery image 1" />
          <div className="gallery-overlay">
            <h3>Mountain Vista</h3>
            <p>Swiss Alps, 2024</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop" alt="Gallery image 2" />
          <div className="gallery-overlay">
            <h3>Forest Light</h3>
            <p>California, 2024</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop" alt="Gallery image 3" />
          <div className="gallery-overlay">
            <h3>Misty Morning</h3>
            <p>Oregon, 2024</p>
          </div>
        </div>
      </div>
    </section>
  )
}
