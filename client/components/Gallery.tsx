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
          <img src="/mount.JPG" alt="Gallery image 1" />
          <div className="gallery-overlay">
            <h3>Mountain</h3>
            <p>New Zealand, 2025</p>
          </div>
        </div>
        <div className="gallery-item">
          <img src="/wanaka-tree.JPG" alt="Gallery image 2" />
          <div className="gallery-overlay">
            <h3>The Wanaka Tree</h3>
            <p>Wanaka, 2025</p>
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
