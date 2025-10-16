import React from "react"

export default function Contact() {
  return (
    <section className="section section-dark fade-in" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Available for commissions, collaborations, and creative projects.
          </p>
        </div>

        <div className="contact-content">
          <a href="mailto:hello@photography.com" className="contact-email">irina.kostina.nz@gmail.com</a>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">Flickr</a>
            <a href="https://500px.com/p/irina_kostina">500px</a>
            <a href="https://www.behance.net/irina-kostina">Behance</a>
          </div>
        </div>
      </div>
    </section>
  )
}