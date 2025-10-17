import React from "react"

export default function About() {
  return (
    <section className="section fade-in" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Photography is more than capturing what the eye sees—it's about <span className="highlight">revealing what the heart feels</span>.
              For over a decade, I've been exploring the world through my lens.
            </p>
            <p>
              My work spans landscape photography, architectural studies, and candid street scenes.
              Each project is an exploration of light and narrative.
            </p>
            <p>
              Based in the Pacific Northwest, I draw constant inspiration from the interplay between nature and urban life.
            </p>
          </div>

          <div className="about-image">
            <img
              src="/IMG_0950.JPG"
              alt="Photographer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
